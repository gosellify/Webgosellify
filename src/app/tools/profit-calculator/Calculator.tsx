"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaCalculator, FaInfoCircle, FaUndo } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { BrandName } from "@/components/brand/Logo";

type Marketplace = "Amazon" | "Walmart" | "eBay" | "Other";
type FieldKey = "price" | "cost" | "fee" | "ship" | "prep" | "units" | "ads";
type Values = Record<FieldKey, string>;

type FieldDef = {
  key: FieldKey;
  label: string;
  unit: "$" | "%" | "";
  step: number;
  sliderMax: number;
  sliderStep: number;
  max?: number;
  note?: string;
  optional?: boolean;
};

const MARKETPLACES: Marketplace[] = ["Amazon", "Walmart", "eBay", "Other"];

const DEFAULTS: Values = { price: "30", cost: "12", fee: "15", ship: "5", prep: "1", units: "300", ads: "0" };

type Segment = { key: string; label: string; amount: number; share: number; background: string; border: string };

const SWATCH: Record<string, { background: string; border: string }> = {
  cost: { background: "#0A1B4D", border: "#0A1B4D" },
  fee: {
    background: "repeating-linear-gradient(135deg, #14296A 0 5px, #C9D6F7 5px 8px)",
    border: "#14296A",
  },
  ship: { background: "#1560FF", border: "#1560FF" },
  prep: {
    background: "radial-gradient(circle at 3px 3px, #1560FF 1.4px, transparent 1.6px) 0 0 / 7px 7px, #EEF4FF",
    border: "#1560FF",
  },
  profit: { background: "#FFB21A", border: "#E89A00" },
};

const STEPS: { title: string; text: string }[] = [
  {
    title: "Enter what the product sells for and what it costs you",
    text: "Use the price a buyer pays and the price you pay your supplier for one unit.",
  },
  {
    title: "Add the fees and the cost to get it to the buyer",
    text: "Type the referral fee for your category, then your fulfillment or shipping cost and any prep cost per unit.",
  },
  {
    title: "Set your monthly units and ad spend",
    text: "The results update as you type. Change one number at a time to see what moves your profit most.",
  },
];

const DEFINITIONS: { term: string; formula: string; text: string }[] = [
  {
    term: "Profit per unit",
    formula: "Sale price − product cost − referral fee − shipping − prep",
    text: "The money left from one sale after every per-unit cost is paid. If it is below zero, each sale loses money.",
  },
  {
    term: "Margin",
    formula: "Profit per unit ÷ sale price",
    text: "The share of the sale price you keep as profit. A 20% margin means you keep $20 of every $100 in sales.",
  },
  {
    term: "ROI",
    formula: "Profit per unit ÷ (product cost + shipping + prep)",
    text: "Return on investment. It shows how much profit you make for each dollar you put into a unit. A 30% ROI means $100 spent brings back $130.",
  },
  {
    term: "Break-even units",
    formula: "Monthly ad spend ÷ profit per unit, rounded up",
    text: "The number of units you must sell in a month to cover your ad spend. Every unit after that adds to your monthly profit.",
  },
];

const CSS = `
.pcalc-input { width: 100%; min-width: 0; padding: 13px 14px; font-family: inherit; font-size: 18px; font-weight: 800; color: #0A1B4D; background: transparent; border: 0; outline: none; font-variant-numeric: tabular-nums; -moz-appearance: textfield; appearance: textfield; }
.pcalc-input::-webkit-outer-spin-button, .pcalc-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.pcalc-box { display: flex; align-items: center; background: #fff; border: 2px solid #D9E2F5; border-radius: 14px; overflow: hidden; transition: border-color .2s, box-shadow .2s, transform .2s; }
.pcalc-box:hover { border-color: #1560FF; }
.pcalc-box:focus-within { border-color: #1560FF; box-shadow: 0 0 0 4px rgba(21,96,255,0.16); transform: translateY(-1px); }
.pcalc-unit { align-self: stretch; display: flex; align-items: center; justify-content: center; min-width: 44px; padding: 0 12px; background: #EEF4FF; color: #0A1B4D; font-weight: 800; font-size: 16px; }
.pcalc-range { -webkit-appearance: none; appearance: none; width: 100%; height: 22px; background: transparent; cursor: pointer; margin: 6px 0 0; display: block; }
.pcalc-range::-webkit-slider-runnable-track { height: 6px; border-radius: 4px; background: linear-gradient(90deg, #1560FF var(--pcalc-fill, 0%), #D9E2F5 var(--pcalc-fill, 0%)); }
.pcalc-range::-moz-range-track { height: 6px; border-radius: 4px; background: #D9E2F5; }
.pcalc-range::-moz-range-progress { height: 6px; border-radius: 4px; background: #1560FF; }
.pcalc-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 22px; height: 22px; margin-top: -8px; border-radius: 50%; background: #FFB21A; border: 3px solid #0A1B4D; box-shadow: 0 4px 10px rgba(10,27,77,0.25); transition: transform .2s cubic-bezier(.2,.8,.2,1); }
.pcalc-range::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: #FFB21A; border: 3px solid #0A1B4D; box-shadow: 0 4px 10px rgba(10,27,77,0.25); transition: transform .2s cubic-bezier(.2,.8,.2,1); }
.pcalc-range:hover::-webkit-slider-thumb, .pcalc-range:active::-webkit-slider-thumb { transform: scale(1.2); }
.pcalc-range:hover::-moz-range-thumb, .pcalc-range:active::-moz-range-thumb { transform: scale(1.2); }
.pcalc-mp { flex: 1 1 96px; min-width: 0; padding: 13px 12px; border-radius: 14px; border: 2px solid #D9E2F5; background: #fff; color: #0A1B4D; font-family: inherit; font-size: 16px; font-weight: 800; line-height: 1; cursor: pointer; transition: transform .25s cubic-bezier(.2,.8,.2,1), background-color .25s, border-color .25s, color .25s, box-shadow .25s; }
.pcalc-mp:hover { transform: translateY(-2px); border-color: #1560FF; }
.pcalc-mp[aria-pressed="true"] { background: #0A1B4D; border-color: #0A1B4D; color: #fff; box-shadow: inset 0 -4px 0 #FFB21A, 0 10px 22px rgba(10,27,77,0.2); }
.pcalc-reset { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 12px; border: 2px solid #D9E2F5; background: #fff; color: #0A1B4D; font-family: inherit; font-size: 14px; font-weight: 800; line-height: 1; cursor: pointer; transition: border-color .2s, transform .2s; }
.pcalc-reset:hover { border-color: #0A1B4D; transform: translateY(-2px); }
.pcalc-reset:hover svg { transform: rotate(-180deg); }
.pcalc-reset svg { transition: transform .45s cubic-bezier(.2,.8,.2,1); }
.pcalc-stat { padding: 18px 18px; border-radius: 18px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); min-width: 0; transition: transform .3s cubic-bezier(.2,.8,.2,1), border-color .3s, background-color .3s; }
.pcalc-stat:hover { transform: translateY(-4px); border-color: rgba(255,178,26,0.6); background: rgba(255,255,255,0.1); }
.pcalc-seg { height: 100%; min-width: 0; transition: flex-grow .55s cubic-bezier(.2,.8,.2,1); }
.pcalc-seg + .pcalc-seg { box-shadow: inset 2px 0 0 #fff; }
.pcalc-def { padding: 24px 14px; border-bottom: 2px solid #D9E2F5; border-radius: 4px; transition: opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1), background-color .25s, padding-left .25s; }
.pcalc-def:hover { background: #EEF4FF; padding-left: 26px; }
`;

function num(text: string): number {
  const n = parseFloat(text);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function money(n: number): string {
  const abs = Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${n < -0.004 ? "−" : ""}$${abs}`;
}

function percent(n: number): string {
  const abs = Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return `${n < -0.04 ? "−" : ""}${abs}%`;
}

/** Eases a displayed number toward its target so results glide instead of jumping. */
function useTween(target: number): number {
  const [val, setVal] = useState<number>(target);
  const current = useRef<number>(target);

  useEffect(() => {
    const from = current.current;
    if (from === target) return;
    const reduce = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const t0 = performance.now();
    const duration = reduce ? 1 : 420;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = p >= 1 ? target : from + (target - from) * eased;
      current.current = v;
      setVal(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return val;
}

type NumberFieldProps = {
  def: FieldDef;
  value: string;
  onChange: (key: FieldKey, value: string) => void;
};

function NumberField({ def, value, onChange }: NumberFieldProps) {
  const id = `pcalc-${def.key}`;
  const n = num(value);
  const sliderValue = Math.min(def.sliderMax, n);
  const fill = def.sliderMax > 0 ? (sliderValue / def.sliderMax) * 100 : 0;
  const rangeStyle = { "--pcalc-fill": `${fill}%` } as React.CSSProperties;
  return (
    <div style={{ minWidth: 0 }}>
      <label htmlFor={id} style={{ display: "block", fontSize: 15, fontWeight: 800, color: "var(--color-dark)", marginBottom: 8 }}>
        {def.label}
        {def.optional ? <span style={{ fontWeight: 600, color: "var(--color-text-light)" }}> (optional)</span> : null}
      </label>
      <div className="pcalc-box">
        {def.unit === "$" ? (
          <span className="pcalc-unit" aria-hidden="true">
            $
          </span>
        ) : null}
        <input
          id={id}
          name={def.key}
          type="number"
          inputMode="decimal"
          className="pcalc-input"
          min={0}
          max={def.max}
          step={def.step}
          autoComplete="off"
          aria-describedby={def.note ? `${id}-note` : undefined}
          value={value}
          onChange={(e) => onChange(def.key, e.target.value)}
          onBlur={() => {
            if (value.trim() === "") onChange(def.key, "0");
          }}
        />
        {def.unit === "%" ? (
          <span className="pcalc-unit" aria-hidden="true">
            %
          </span>
        ) : null}
      </div>
      <input
        type="range"
        className="pcalc-range"
        aria-label={`${def.label} slider`}
        min={0}
        max={def.sliderMax}
        step={def.sliderStep}
        value={sliderValue}
        style={rangeStyle}
        onChange={(e) => onChange(def.key, e.target.value)}
      />
      {def.note ? (
        <p id={`${id}-note`} style={{ marginTop: 6, fontSize: 13, lineHeight: 1.45, color: "var(--color-text-light)" }}>
          {def.note}
        </p>
      ) : null}
    </div>
  );
}

type StatProps = { label: string; value: string; sub: string; big?: boolean; tag?: string };

function Stat({ label, value, sub, big = false, tag }: StatProps) {
  return (
    <div className="pcalc-stat" style={big ? { gridColumn: "1 / -1", padding: "22px 22px" } : undefined}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.2, textTransform: "uppercase", color: "#C9D6F7" }}>{label}</p>
        {tag ? (
          <span
            key={tag}
            className="slide-up-in"
            style={{ padding: "5px 10px", borderRadius: 8, border: "2px solid var(--color-accent)", color: "var(--color-accent)", fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", lineHeight: 1 }}
          >
            {tag}
          </span>
        ) : null}
      </div>
      <p
        style={{
          marginTop: 8,
          fontSize: big ? "clamp(40px, 5vw, 68px)" : "clamp(26px, 2.6vw, 36px)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: big ? "var(--color-accent)" : "#fff",
          fontVariantNumeric: "tabular-nums",
          overflowWrap: "anywhere",
        }}
      >
        {value}
      </p>
      <p style={{ marginTop: 6, fontSize: 13, lineHeight: 1.45, color: "#C9D6F7" }}>{sub}</p>
    </div>
  );
}

export default function Calculator() {
  const [marketplace, setMarketplace] = useState<Marketplace>("Amazon");
  const [values, setValues] = useState<Values>(DEFAULTS);

  const setValue = (key: FieldKey, value: string) => {
    // Keep inputs in range: no negative numbers, and a fee can never be above 100%.
    const n = parseFloat(value);
    let clean = value;
    if (Number.isFinite(n) && n < 0) clean = "0";
    if (key === "fee" && Number.isFinite(n) && n > 100) clean = "100";
    setValues((prev) => ({ ...prev, [key]: clean }));
  };

  const mpName = marketplace === "Other" ? "Marketplace" : marketplace;

  const fields: FieldDef[] = [
    { key: "price", label: "Sale price", unit: "$", step: 0.01, sliderMax: 200, sliderStep: 0.5 },
    { key: "cost", label: "Product cost", unit: "$", step: 0.01, sliderMax: 200, sliderStep: 0.5 },
    {
      key: "fee",
      label: `${mpName} referral fee %`,
      unit: "%",
      step: 0.1,
      sliderMax: 50,
      sliderStep: 0.5,
      max: 100,
      note: "Enter the fee for your category. Check your marketplace's current fee schedule.",
    },
    { key: "ship", label: "Fulfillment or shipping cost per unit", unit: "$", step: 0.01, sliderMax: 50, sliderStep: 0.25 },
    { key: "prep", label: "Prep or other cost per unit", unit: "$", step: 0.01, sliderMax: 20, sliderStep: 0.25 },
    { key: "units", label: "Units sold per month", unit: "", step: 1, sliderMax: 2000, sliderStep: 10 },
    { key: "ads", label: "Monthly ad spend", unit: "$", step: 1, sliderMax: 5000, sliderStep: 25, optional: true },
  ];

  // ----- the maths (every division is guarded) -----
  const price = num(values.price);
  const cost = num(values.cost);
  const feePct = Math.min(100, num(values.fee));
  const ship = num(values.ship);
  const prep = num(values.prep);
  const units = Math.floor(num(values.units));
  const ads = num(values.ads);

  const fee = (price * feePct) / 100;
  const totalCost = cost + fee + ship + prep;
  const profitUnit = price - totalCost;
  const invested = cost + ship + prep;
  const hasPrice = price > 0;
  const margin = hasPrice ? (profitUnit / price) * 100 : 0;
  const hasRoi = invested > 0;
  const roi = hasRoi ? (profitUnit / invested) * 100 : 0;
  const monthly = profitUnit * units - ads;
  const canBreakEven = profitUnit > 0.004;
  const breakEven = ads > 0 && canBreakEven ? Math.ceil(ads / profitUnit) : 0;
  const unitLoss = hasPrice && profitUnit < -0.004;
  const monthlyLoss = monthly < -0.004;

  const tProfit = useTween(profitUnit);
  const tMargin = useTween(margin);
  const tRoi = useTween(roi);
  const tMonthly = useTween(monthly);
  const tBreak = useTween(breakEven);

  // Where each dollar of the sale price goes. If costs are higher than the price, scale to the costs.
  const base = Math.max(price, totalCost);
  const share = (n: number): number => (base > 0 ? (n / base) * 100 : 0);
  const profitPart = Math.max(0, profitUnit);
  const segments: Segment[] = [
    { key: "cost", label: "Product cost", amount: cost, share: share(cost), ...SWATCH.cost },
    { key: "fee", label: "Referral fee", amount: fee, share: share(fee), ...SWATCH.fee },
    { key: "ship", label: "Fulfillment or shipping", amount: ship, share: share(ship), ...SWATCH.ship },
    { key: "prep", label: "Prep or other", amount: prep, share: share(prep), ...SWATCH.prep },
    { key: "profit", label: "Profit", amount: profitPart, share: share(profitPart), ...SWATCH.profit },
  ];
  const barSummary = segments.map((s) => `${s.label} ${percent(s.share)}`).join(", ");

  let breakValue = "0";
  let breakSub = "No ad spend to cover.";
  if (ads > 0 && canBreakEven) {
    breakValue = Math.round(tBreak).toLocaleString("en-US");
    breakSub = units >= breakEven ? "Units to cover your ad spend. You are past this point." : "Units to cover your ad spend. You are below this point.";
  } else if (ads > 0) {
    breakValue = "None";
    breakSub = "Ad spend cannot be covered while a unit makes no profit.";
  }

  let note = "";
  if (!hasPrice) {
    note = "Enter a sale price above zero to see your results.";
  } else if (unitLoss) {
    note = `At these numbers each sale loses ${money(Math.abs(profitUnit))}. Try a higher sale price or lower costs.`;
  } else if (!canBreakEven) {
    note = "At these numbers a sale only covers its costs. There is no profit left per unit.";
  } else if (monthlyLoss) {
    note = "Each unit makes a profit, but your ad spend is higher than your monthly unit profit.";
  }

  return (
    <>
      <style>{CSS}</style>

      {/* hero */}
      <section className="bg-tint grid-dots" style={{ position: "relative", overflow: "hidden", padding: "clamp(56px, 7vw, 112px) 0 clamp(120px, 12vw, 190px)" }}>
        <span aria-hidden="true" className="blob" style={{ width: 420, height: 420, background: "rgba(21,96,255,0.16)", top: -140, right: -80 }} />
        <span aria-hidden="true" className="blob" style={{ width: 300, height: 300, background: "rgba(255,178,26,0.2)", bottom: -120, left: "8%", animationDelay: "-5s" }} />
        <div className="container-main" style={{ position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 56px" }}>
            <div style={{ flex: "1 1 620px", minWidth: 0 }}>
              <span className="g-eyebrow slide-up-in">Free tool</span>
              <h1 className="g-h1 slide-up-in" style={{ marginTop: 18, maxWidth: 1000, animationDelay: "80ms" }}>
                Amazon and Walmart <span className="mark-amber">profit calculator</span>
              </h1>
              <p className="g-lead slide-up-in" style={{ marginTop: 22, maxWidth: 680, animationDelay: "160ms" }}>
                Type in your own numbers and see your profit per unit, margin, ROI and monthly profit right away. No sign-up. Nothing is saved or sent.
              </p>
            </div>
            <div className="float-a" aria-hidden="true" style={{ flex: "0 0 auto" }}>
              <div style={{ width: 96, height: 96, borderRadius: 28, background: "var(--color-dark)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, transform: "rotate(-8deg)", boxShadow: "0 24px 48px rgba(10,27,77,0.28)" }}>
                <FaCalculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* calculator */}
      <section aria-label="Profit calculator" style={{ position: "relative", background: "#fff", paddingBottom: "clamp(64px, 8vw, 120px)" }}>
        <div className="container-wide">
          <Reveal from="zoom" style={{ marginTop: "clamp(-130px, -8vw, -72px)", position: "relative" }}>
            <div
              style={{ display: "flex", flexWrap: "wrap", background: "#fff", border: "2px solid var(--color-line)", borderRadius: 32, overflow: "hidden", boxShadow: "0 40px 90px rgba(10,27,77,0.16)" }}
            >
              {/* inputs */}
              <div style={{ flex: "1.15 1 480px", minWidth: 0, padding: "clamp(22px, 3vw, 44px)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap", marginBottom: 22 }}>
                  <h2 className="g-h3" style={{ color: "var(--color-dark)" }}>
                    Your numbers
                  </h2>
                  <button type="button" className="pcalc-reset" onClick={() => setValues(DEFAULTS)}>
                    <FaUndo aria-hidden="true" /> Reset
                  </button>
                </div>

                <div role="group" aria-labelledby="pcalc-mp-label" style={{ marginBottom: 24 }}>
                  <p id="pcalc-mp-label" style={{ fontSize: 15, fontWeight: 800, color: "var(--color-dark)", marginBottom: 8 }}>
                    Marketplace
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {MARKETPLACES.map((m) => (
                      <button key={m} type="button" className="pcalc-mp" aria-pressed={marketplace === m} onClick={() => setMarketplace(m)}>
                        {m}
                      </button>
                    ))}
                  </div>
                  <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.45, color: "var(--color-text-light)" }}>
                    This only changes the labels. It does not fill in any fee for you.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "22px 24px" }}>
                  {fields.map((f) => (
                    <NumberField key={f.key} def={f} value={values[f.key]} onChange={setValue} />
                  ))}
                </div>
              </div>

              {/* results */}
              <div
                className="bg-navy grid-dots-dark"
                role="region"
                aria-label="Results"
                style={{ flex: "1 1 440px", minWidth: 0, padding: "clamp(22px, 3vw, 44px)", color: "#fff", position: "relative", overflow: "hidden" }}
              >
                <span aria-hidden="true" className="blob" style={{ width: 300, height: 300, background: "rgba(21,96,255,0.4)", top: -120, right: -100 }} />
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
                    <h2 className="g-h3" style={{ color: "#fff" }}>
                      Your {marketplace === "Other" ? "" : `${marketplace} `}results
                    </h2>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, color: "#C9D6F7" }}>
                      <span aria-hidden="true" className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} />
                      Updates as you type
                    </span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: 12 }}>
                    <Stat
                      big
                      label={monthlyLoss ? "Monthly loss" : "Monthly profit"}
                      value={money(tMonthly)}
                      sub={`${units.toLocaleString("en-US")} units a month, after ${money(ads)} ad spend`}
                      tag={monthlyLoss ? "Loss" : undefined}
                    />
                    <Stat
                      label={unitLoss ? "Loss per unit" : "Profit per unit"}
                      value={money(tProfit)}
                      sub="After product, fee, shipping and prep"
                      tag={unitLoss ? "Loss" : undefined}
                    />
                    <Stat label="Margin" value={hasPrice ? percent(tMargin) : "n/a"} sub={hasPrice ? "Profit as a share of the sale price" : "Needs a sale price above zero"} />
                    <Stat label="ROI" value={hasRoi ? percent(tRoi) : "n/a"} sub={hasRoi ? "Profit ÷ (product + shipping + prep)" : "Needs a product, shipping or prep cost"} />
                    <Stat label="Break-even units" value={breakValue} sub={breakSub} />
                  </div>

                  <div aria-live="polite">
                    {note ? (
                      <p
                        key={note}
                        className="slide-up-in"
                        style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 14, padding: "12px 14px", borderRadius: 14, border: "1px solid rgba(255,178,26,0.55)", background: "rgba(255,178,26,0.08)", fontSize: 14, fontWeight: 700, lineHeight: 1.45, color: "#fff" }}
                      >
                        <FaInfoCircle aria-hidden="true" style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }} />
                        <span>{note}</span>
                      </p>
                    ) : null}
                  </div>

                  {/* where each dollar goes */}
                  <div style={{ marginTop: 16, background: "#fff", borderRadius: 20, padding: "20px 20px", color: "var(--color-dark)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: 16, fontWeight: 800 }}>Where each dollar of the sale price goes</h3>
                      {unitLoss ? (
                        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-light)" }}>Costs are higher than the sale price</span>
                      ) : null}
                    </div>
                    <div
                      role="img"
                      aria-label={base > 0 ? `Split of the sale price: ${barSummary}` : "No numbers entered yet"}
                      style={{ display: "flex", height: 34, borderRadius: 10, overflow: "hidden", marginTop: 14, background: "var(--color-primary-light)", border: "2px solid var(--color-dark)" }}
                    >
                      {segments.map((s) => (
                        <span key={s.key} className="pcalc-seg" style={{ flexGrow: s.share, flexBasis: 0, background: s.background }} />
                      ))}
                    </div>
                    <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "8px 20px", marginTop: 14 }}>
                      {segments.map((s) => (
                        <li key={s.key} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, minWidth: 0 }}>
                          <span aria-hidden="true" style={{ width: 18, height: 18, borderRadius: 5, flexShrink: 0, background: s.background, border: `2px solid ${s.border}` }} />
                          <span style={{ fontWeight: 700, minWidth: 0 }}>{s.label}</span>
                          <span style={{ marginLeft: "auto", fontWeight: 800, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                            {money(s.amount)} <span style={{ fontWeight: 600, color: "var(--color-text-light)" }}>({percent(s.share)})</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.5, color: "#C9D6F7" }}>
                    This is an estimate from the numbers you entered. It is not a promise of results. Real fees, returns, storage and taxes can change your profit.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* how to use */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <Reveal>
            <span className="g-eyebrow">How it works</span>
            <h2 className="g-h2" style={{ marginTop: 16, maxWidth: 900 }}>
              How to use this calculator
            </h2>
          </Reveal>
          <ol style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 22, marginTop: "clamp(32px, 4vw, 56px)" }}>
            {STEPS.map((s, i) => (
              <li key={s.title} style={{ minWidth: 0 }}>
                <Reveal delay={i * 120} style={{ height: "100%" }}>
                  <div className="g-card" style={{ padding: "30px 28px", height: "100%" }}>
                    <span
                      aria-hidden="true"
                      className="icon-tile"
                      style={{ fontSize: 22, fontWeight: 800, fontVariantNumeric: "tabular-nums" }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="g-h3" style={{ marginTop: 20, color: "var(--color-dark)" }}>
                      {s.title}
                    </h3>
                    <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6, color: "var(--color-text-light)" }}>{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* definitions */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px clamp(32px, 6vw, 96px)", alignItems: "flex-start" }}>
            <Reveal from="left" style={{ flex: "1 1 340px", minWidth: 0 }}>
              <span className="g-eyebrow">Plain definitions</span>
              <h2 className="g-h2" style={{ marginTop: 16 }}>
                What the numbers mean
              </h2>
              <p className="g-lead" style={{ marginTop: 18, maxWidth: 480 }}>
                Four numbers tell you if a product is worth selling. Here is how each one is worked out.
              </p>
            </Reveal>
            <dl style={{ flex: "1.6 1 480px", minWidth: 0, borderTop: "2px solid var(--color-dark)" }}>
              {DEFINITIONS.map((d, i) => (
                <Reveal key={d.term} delay={i * 90} className="pcalc-def">
                    <dt className="g-h3" style={{ color: "var(--color-dark)" }}>
                      {d.term}
                    </dt>
                    <dd>
                      <p style={{ display: "inline-block", marginTop: 10, padding: "6px 12px", borderRadius: 10, background: "var(--color-primary-light)", fontSize: 14, fontWeight: 800, color: "var(--color-dark)" }}>
                        {d.formula}
                      </p>
                      <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6, color: "var(--color-text-light)", maxWidth: 720 }}>{d.text}</p>
                    </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="g-section bg-navy grid-dots-dark on-dark" style={{ overflow: "hidden" }}>
        <span aria-hidden="true" className="blob" style={{ width: 420, height: 420, background: "rgba(21,96,255,0.4)", top: -160, left: -100 }} />
        <span aria-hidden="true" className="blob" style={{ width: 300, height: 300, background: "rgba(255,178,26,0.14)", bottom: -140, right: -60, animationDelay: "-7s" }} />
        <div className="container-main" style={{ position: "relative" }}>
          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "28px 56px" }}>
              <div style={{ flex: "1 1 560px", minWidth: 0 }}>
                <span className="g-eyebrow on-dark">Next step</span>
                <h2 className="g-h2" style={{ marginTop: 16, maxWidth: 900 }}>
                  Want a team to run the numbers <span className="t-amber">and the store?</span>
                </h2>
                <p className="g-lead" style={{ marginTop: 18, maxWidth: 640 }}>
                  <BrandName dark /> manages Amazon and Walmart stores on a pay from profit model. No management fee until your store makes profit. No contract.
                </p>
              </div>
              <div style={{ flex: "0 1 auto", minWidth: 0 }}>
                <Link href="/profit-check" className="btn-accent">
                  Start the 2-minute Profit Check <FaArrowRight aria-hidden="true" className="btn-arrow" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
