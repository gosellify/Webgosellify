"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaCalculator } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

/** Moves a shown number smoothly toward its target value. */
function useTween(target: number, ms: number = 280): number {
  const [val, setVal] = useState<number>(target);
  const cur = useRef<number>(target);

  useEffect(() => {
    const from = cur.current;
    if (from === target) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = from + (target - from) * eased;
      cur.current = next;
      setVal(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);

  return val;
}

type SliderProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
};

function Slider({ id, label, value, min, max, step, display, onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
        <label htmlFor={id} style={{ fontSize: 16, fontWeight: 800, color: "var(--color-dark)" }}>
          {label}
        </label>
        <output htmlFor={id} style={{ fontSize: 20, fontWeight: 800, color: "var(--color-primary)", fontVariantNumeric: "tabular-nums" }}>
          {display}
        </output>
      </div>
      <input
        id={id}
        name={id}
        type="range"
        className="v4tool-range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(Number(e.target.value))}
        style={{ "--p": `${pct}%` } as React.CSSProperties}
      />
    </div>
  );
}

const money = (n: number): string => {
  const abs = Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${n < 0 ? "-" : ""}$${abs}`;
};

export default function ToolsTeaser() {
  const [price, setPrice] = useState<number>(40);
  const [cost, setCost] = useState<number>(18);
  const [fee, setFee] = useState<number>(15);
  const [ship, setShip] = useState<number>(6);

  const feeAmount = (price * fee) / 100;
  const profit = price - cost - feeAmount - ship;
  const margin = price > 0 ? (profit / price) * 100 : 0;
  const loss = profit < 0;

  const shownProfit = useTween(profit);
  const shownMargin = useTween(margin);

  const total = Math.max(price, cost + feeAmount + ship);
  const seg = (n: number): string => `${Math.max(0, (n / total) * 100)}%`;

  type Part = { key: string; label: string; amount: number; color: string };
  const parts: Part[] = [
    { key: "cost", label: "Product cost", amount: cost, color: "var(--color-dark)" },
    { key: "fee", label: "Marketplace fee", amount: feeAmount, color: "var(--color-primary)" },
    { key: "ship", label: "Shipping", amount: ship, color: "#8fb0ff" },
    { key: "profit", label: "Profit", amount: Math.max(0, profit), color: "var(--color-accent)" },
  ];

  return (
    <section className="g-section bg-tint" style={{ overflow: "hidden" }}>
      <style>{`
        .v4tool-range { -webkit-appearance: none; appearance: none; width: 100%; height: 10px; border-radius: 999px; outline-offset: 6px; cursor: pointer; background: linear-gradient(90deg, var(--color-primary) var(--p), var(--color-line) var(--p)); }
        .v4tool-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 28px; height: 28px; border-radius: 50%; background: var(--color-accent); border: 4px solid var(--color-dark); box-shadow: 0 6px 14px rgba(10,27,77,0.25); transition: transform .2s; }
        .v4tool-range::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: var(--color-accent); border: 4px solid var(--color-dark); box-shadow: 0 6px 14px rgba(10,27,77,0.25); transition: transform .2s; }
        .v4tool-range:hover::-webkit-slider-thumb, .v4tool-range:active::-webkit-slider-thumb { transform: scale(1.2); }
        .v4tool-range:hover::-moz-range-thumb, .v4tool-range:active::-moz-range-thumb { transform: scale(1.2); }
        .v4tool-seg { height: 100%; transition: width .45s cubic-bezier(.2,.8,.2,1); }
        .v4tool-panel { transition: transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s; }
        .v4tool-panel:hover { transform: translateY(-6px); box-shadow: 0 40px 80px rgba(10,27,77,0.18); }
        @keyframes v4tool-spin { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
      `}</style>
      <span aria-hidden="true" className="blob" style={{ width: 420, height: 420, background: "var(--color-primary)", opacity: 0.12, top: -120, right: -100 }} />

      <div className="container-main" style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px, 5vw, 88px)" }}>
        <Reveal from="left" style={{ flex: "1 1 400px", minWidth: 0 }}>
          <span className="g-eyebrow">Free seller tools</span>
          <h2 className="g-h2" style={{ marginTop: 18 }}>
            Free tools <span className="t-blue">for sellers.</span>
          </h2>
          <p className="g-lead" style={{ marginTop: 22, maxWidth: 520 }}>
            Move the sliders and see what one order leaves you after cost, fees and shipping. Try it here, then open the full calculator.
          </p>
          <div style={{ marginTop: 34, display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href="/tools/profit-calculator" className="btn-navy">
              <FaCalculator aria-hidden="true" /> Open the full profit calculator <FaArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal from="right" delay={140} style={{ flex: "1.5 1 520px", minWidth: 0 }}>
          <div
            className="v4tool-panel"
            style={{ background: "#fff", border: "2px solid var(--color-line)", borderRadius: 32, padding: "clamp(22px, 3vw, 48px)", boxShadow: "0 30px 70px rgba(10,27,77,0.12)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 50, height: 50, borderRadius: 16, background: "var(--color-dark)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, animation: "v4tool-spin 4s ease-in-out infinite" }}>
                <FaCalculator />
              </span>
              <h3 className="g-h3" style={{ color: "var(--color-dark)" }}>Quick profit calculator</h3>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px, 3vw, 48px)" }}>
              <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()} style={{ flex: "1 1 300px", minWidth: 0, display: "grid", gap: 26 }}>
                <Slider id="v4tool-price" label="Sale price" value={price} min={5} max={200} step={1} display={`$${price}`} onChange={setPrice} />
                <Slider id="v4tool-cost" label="Product cost" value={cost} min={1} max={150} step={1} display={`$${cost}`} onChange={setCost} />
                <Slider id="v4tool-fee" label="Marketplace fee" value={fee} min={0} max={30} step={0.5} display={`${fee}%`} onChange={setFee} />
                <Slider id="v4tool-ship" label="Shipping per order" value={ship} min={0} max={30} step={0.5} display={`$${ship.toFixed(2)}`} onChange={setShip} />
              </form>

              <div style={{ flex: "1 1 280px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                <div aria-live="polite" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: 14 }}>
                  <div style={{ background: "var(--color-dark)", color: "#fff", borderRadius: 22, padding: "20px 22px" }}>
                    <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "#c9d6f7" }}>
                      {loss ? "Loss per order" : "Profit per order"}
                    </div>
                    <div style={{ marginTop: 6, fontSize: "clamp(30px, 3vw, 46px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: loss ? "#fff" : "var(--color-accent)", fontVariantNumeric: "tabular-nums" }}>
                      {money(shownProfit)}
                    </div>
                  </div>
                  <div style={{ background: "var(--color-primary-light)", color: "var(--color-dark)", borderRadius: 22, padding: "20px 22px" }}>
                    <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "var(--color-text-light)" }}>Margin</div>
                    <div style={{ marginTop: 6, fontSize: "clamp(30px, 3vw, 46px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, fontVariantNumeric: "tabular-nums" }}>
                      {shownMargin.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div>
                  <div aria-hidden="true" style={{ display: "flex", height: 26, borderRadius: 999, overflow: "hidden", background: "var(--color-line)" }}>
                    {parts.map((p) => (
                      <span key={p.key} className="v4tool-seg" style={{ width: seg(p.amount), background: p.color }} />
                    ))}
                  </div>
                  <ul style={{ listStyle: "none", marginTop: 14, display: "grid", gap: 8 }}>
                    {parts.map((p) => (
                      <li key={p.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, fontSize: 15, fontWeight: 700, color: "var(--color-dark)" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                          <span aria-hidden="true" style={{ width: 12, height: 12, borderRadius: 4, background: p.color, flexShrink: 0 }} />
                          {p.label}
                        </span>
                        <span style={{ fontVariantNumeric: "tabular-nums" }}>{money(p.key === "profit" ? profit : p.amount)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--color-text-light)" }}>
                  This is an estimate from your own numbers. It is not a promise of results.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
