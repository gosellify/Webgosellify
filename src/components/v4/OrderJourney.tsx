"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaClipboardList, FaSearch, FaWarehouse, FaTruck, FaBoxOpen, FaChartLine, FaArrowRight } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { BrandName } from "@/components/brand/Logo";

type Stage = { title: string; caption: string; icon: IconType };

const stages: Stage[] = [
  { title: "Order received", caption: "The order syncs into the portal from the marketplace.", icon: FaClipboardList },
  { title: "Product sourced", caption: "Our team buys the item from a checked supplier.", icon: FaSearch },
  { title: "Packed at our warehouse", caption: "It is inspected, prepped and packed at our US warehouses.", icon: FaWarehouse },
  { title: "Shipped same day", caption: "The label is printed and tracking is uploaded.", icon: FaTruck },
  { title: "Delivered", caption: "The customer gets the parcel. Returns come back to us, not you.", icon: FaBoxOpen },
  { title: "Profit recorded", caption: "Cost, fees and shipping are logged against the order.", icon: FaChartLine },
];

/** Sample orders. Amounts are in cents so the profit always adds up exactly. */
type SampleOrder = { market: string; store: string; id: string; sale: number; cost: number; fees: number };

const orders: SampleOrder[] = [
  { market: "Amazon", store: "Store A", id: "#..4821", sale: 6499, cost: 3120, fees: 1485 },
  { market: "Walmart", store: "Store B", id: "#..7306", sale: 4250, cost: 1980, fees: 995 },
  { market: "eBay", store: "Store A", id: "#..1954", sale: 8900, cost: 4730, fees: 1760 },
  { market: "Shopify", store: "Store B", id: "#..6412", sale: 3800, cost: 1425, fees: 840 },
  { market: "Etsy", store: "Store A", id: "#..2087", sale: 2750, cost: 910, fees: 615 },
];

const STAGE_MS = 1400;
const TICK_MS = 2000;

function money(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

const css = `
@keyframes v4oj-ping { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(2.6); opacity: 0; } }
.v4oj-pipe { position: relative; display: grid; grid-template-columns: minmax(0, 1fr); grid-auto-rows: 1fr; }
.v4oj-line { position: absolute; left: 35px; top: calc(100% / 12); bottom: calc(100% / 12); width: 4px; border-radius: 4px; background: var(--color-line); }
.v4oj-fill { position: absolute; left: 0; top: 0; width: 100%; height: calc(var(--p) * 1%); border-radius: 4px; background: linear-gradient(180deg, var(--color-primary), var(--color-accent)); }
.v4oj-dot { position: absolute; left: 50%; top: calc(var(--p) * 1%); width: 22px; height: 22px; margin: -11px 0 0 -11px; border-radius: 50%; background: var(--color-accent); border: 4px solid #fff; box-shadow: 0 0 0 6px rgba(255,178,26,0.3), 0 0 26px 8px rgba(255,178,26,0.75); z-index: 1; }
.v4oj-dot::after { content: ""; position: absolute; inset: -4px; border-radius: 50%; border: 2px solid var(--color-accent); animation: v4oj-ping 1.4s ease-out infinite; }
.v4oj-move .v4oj-fill { transition: height ${STAGE_MS}ms linear; }
.v4oj-move .v4oj-dot { transition: top ${STAGE_MS}ms linear; }
.v4oj-stage { position: relative; z-index: 2; display: flex; align-items: center; gap: 18px; padding: 12px 0; min-width: 0; text-align: left; }
.v4oj-node { width: 74px; height: 74px; border-radius: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 26px; background: #fff; color: var(--color-primary); border: 2px solid var(--color-line); transition: transform .45s cubic-bezier(.2,.8,.2,1), background-color .45s, color .45s, border-color .45s, box-shadow .45s; }
.v4oj-stage.past .v4oj-node { border-color: var(--color-primary); }
.v4oj-stage.on .v4oj-node { background: var(--color-dark); border-color: var(--color-dark); color: var(--color-accent); transform: scale(1.14) rotate(-6deg); box-shadow: 0 20px 40px rgba(10,27,77,0.28); }
.v4oj-num { display: block; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: var(--color-text-light); margin-bottom: 2px; }
.v4oj-title { display: block; font-size: clamp(17px, 1.3vw, 21px); font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; color: var(--color-dark); transition: color .3s; }
.v4oj-stage.on .v4oj-title { color: var(--color-primary); }
.v4oj-cap { display: block; margin-top: 6px; font-size: 14px; line-height: 1.45; color: var(--color-text-light); opacity: .6; transition: opacity .3s; }
.v4oj-cap.on { opacity: 1; }
@media (min-width: 1100px) {
  .v4oj-pipe { grid-template-columns: repeat(6, minmax(0, 1fr)); grid-auto-rows: auto; }
  .v4oj-line { left: calc(100% / 12); right: calc(100% / 12); top: 35px; bottom: auto; width: auto; height: 4px; }
  .v4oj-fill { height: 100%; width: calc(var(--p) * 1%); background: linear-gradient(90deg, var(--color-primary), var(--color-accent)); }
  .v4oj-dot { top: 50%; left: calc(var(--p) * 1%); }
  .v4oj-move .v4oj-fill { transition: width ${STAGE_MS}ms linear; }
  .v4oj-move .v4oj-dot { transition: left ${STAGE_MS}ms linear; }
  .v4oj-stage { flex-direction: column; align-items: center; text-align: center; gap: 20px; padding: 0 10px; }
  .v4oj-cap { opacity: 0; }
  .v4oj-cap.on { opacity: 1; }
}
.v4oj-cell { flex: 1 1 130px; min-width: 0; padding: 16px 20px; border-left: 2px solid var(--color-line); }
.v4oj-cell-label { font-size: 12px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase; color: var(--color-text-light); margin-bottom: 4px; }
.v4oj-cell-val { font-size: clamp(18px, 1.5vw, 24px); font-weight: 800; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; white-space: nowrap; }
`;

export default function OrderJourney() {
  const [active, setActive] = useState<number>(0);
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    const a = window.setInterval(() => setActive((s) => (s + 1) % stages.length), STAGE_MS);
    const b = window.setInterval(() => setTick((t) => (t + 1) % orders.length), TICK_MS);
    return () => {
      window.clearInterval(a);
      window.clearInterval(b);
    };
  }, []);

  const progress = (active / (stages.length - 1)) * 100;
  const pipeStyle = { "--p": progress } as React.CSSProperties;
  const order = orders[tick];
  const profit = order.sale - order.cost - order.fees;

  return (
    <section className="g-section bg-tint" style={{ overflow: "hidden" }}>
      <style>{css}</style>
      <div className="container-wide">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px 64px",
            marginBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <Reveal style={{ flex: "1 1 600px", minWidth: 0, maxWidth: 980 }}>
            <span className="g-eyebrow" style={{ marginBottom: 20 }}>
              Order journey
            </span>
            <h2 className="g-h2">
              What happens after a customer <span className="t-blue">clicks buy.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} style={{ flex: "1 1 340px", minWidth: 0, maxWidth: 480 }}>
            <p className="g-lead">
              Every order follows the same six stages. <BrandName /> handles each one, and you can see it in the
              portal.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className={`v4oj-pipe${active === 0 ? "" : " v4oj-move"}`} style={pipeStyle}>
            <div className="v4oj-line" aria-hidden="true">
              <div className="v4oj-fill" />
              <div className="v4oj-dot" />
            </div>
            {stages.map((s, i) => {
              const Icon = s.icon;
              const on = i === active;
              const past = i < active;
              return (
                <div key={s.title} className={`v4oj-stage${on ? " on" : ""}${past ? " past" : ""}`}>
                  <span className="v4oj-node">
                    <Icon aria-hidden="true" />
                  </span>
                  <span style={{ minWidth: 0 }}>
                    <span className="v4oj-num">Stage {i + 1}</span>
                    <span className="v4oj-title">{s.title}</span>
                    <span className={`v4oj-cap${on ? " on slide-up-in" : ""}`}>{s.caption}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Order ticker */}
        <Reveal delay={120}>
          <div
            style={{
              marginTop: "clamp(40px, 5vw, 72px)",
              borderRadius: 26,
              background: "#fff",
              border: "2px solid var(--color-line)",
              boxShadow: "0 24px 56px rgba(10,27,77,0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                padding: "14px 20px",
                background: "var(--color-dark)",
                color: "#fff",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 15 }}>
                <span className="pulse-dot" aria-hidden="true" style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} />
                Order ticker
              </span>
              <span
                style={{
                  padding: "5px 11px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.3)",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: "#c9d6f7",
                }}
              >
                Sample view
              </span>
            </div>

            <div key={tick} className="slide-up-in" style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
              <div style={{ flex: "1.4 1 220px", minWidth: 0, padding: "16px 20px" }}>
                <div className="v4oj-cell-label">
                  {order.store} · {order.id}
                </div>
                <div className="v4oj-cell-val">{order.market} order</div>
              </div>
              <div className="v4oj-cell">
                <div className="v4oj-cell-label">Sale</div>
                <div className="v4oj-cell-val">{money(order.sale)}</div>
              </div>
              <div className="v4oj-cell">
                <div className="v4oj-cell-label">Product cost</div>
                <div className="v4oj-cell-val">-{money(order.cost)}</div>
              </div>
              <div className="v4oj-cell">
                <div className="v4oj-cell-label">Fees and shipping</div>
                <div className="v4oj-cell-val">-{money(order.fees)}</div>
              </div>
              <div className="v4oj-cell" style={{ background: "var(--color-accent)", borderLeftColor: "var(--color-accent)" }}>
                <div className="v4oj-cell-label" style={{ color: "var(--color-dark)" }}>
                  Profit
                </div>
                <div className="v4oj-cell-val">{money(profit)}</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px", marginTop: 32 }}>
            <Link href="/profit-check" className="btn-accent">
              Check my profit <FaArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
            <Link
              href="/services/3pl-warehouse"
              className="link-underline"
              style={{ fontWeight: 800, fontSize: 16, color: "var(--color-dark)", textDecoration: "none" }}
            >
              See how our warehouse works
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
