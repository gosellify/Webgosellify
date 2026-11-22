"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaSyncAlt,
  FaLock,
  FaUserShield,
  FaChartLine,
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaClipboardList,
  FaShieldAlt,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import Tilt from "@/components/motion/Tilt";
import { BrandName, LogoMark } from "@/components/brand/Logo";

type Feature = { icon: IconType; title: string; desc: string };

const features: Feature[] = [
  {
    icon: FaSyncAlt,
    title: "Connected through official APIs",
    desc: "Orders, items, inventory, prices, returns and payments sync automatically from each store's own connection.",
  },
  {
    icon: FaLock,
    title: "Encrypted, separate connections",
    desc: "Every store has its own encrypted credentials, and one store's data is never mixed with another's.",
  },
  {
    icon: FaUserShield,
    title: "Role-based access",
    desc: "Team members see only the stores and tasks assigned to them, and every change is recorded in an audit history.",
  },
  {
    icon: FaChartLine,
    title: "Order-level profit and loss",
    desc: "Product cost, marketplace fees, shipping and prep tracked per order, with a monthly P&L for every store.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Client dashboards and statements",
    desc: "Clients see their own stores' performance, monthly statements and invoices in a private portal.",
  },
  {
    icon: FaClipboardCheck,
    title: "Account health monitoring",
    desc: "Performance metrics, listing issues and policy alerts reviewed daily to keep every account in good standing.",
  },
];

type Screen = { name: string; icon: IconType };

const screens: Screen[] = [
  { name: "Dashboard", icon: FaChartLine },
  { name: "Orders", icon: FaClipboardList },
  { name: "Profit and loss", icon: FaFileInvoiceDollar },
  { name: "Account health", icon: FaShieldAlt },
];

const CYCLE_MS = 4000;

/* ---------- Sample data (not real stores) ---------- */
const SALES = 48620;
const PRODUCT_COST = 27950;
const MARKET_FEES = 7290;
const SHIP_PREP = 3970;
const NET_PROFIT = SALES - PRODUCT_COST - MARKET_FEES - SHIP_PREP;

const bars: number[] = [38, 46, 42, 58, 52, 66, 61, 74, 70, 86, 92, 100];

type Status = "Delivered" | "Shipped" | "Packed" | "Sourcing";
type OrderRow = { id: string; store: string; item: string; sale: string; status: Status };

const orderRows: OrderRow[] = [
  { id: "#..4821", store: "Store A", item: "Kitchen storage set", sale: "$64.99", status: "Shipped" },
  { id: "#..4822", store: "Store B", item: "Desk lamp", sale: "$42.50", status: "Packed" },
  { id: "#..4823", store: "Store A", item: "Paper towels, 12 pack", sale: "$38.00", status: "Delivered" },
  { id: "#..4824", store: "Store B", item: "Pet bowl set", sale: "$27.50", status: "Sourcing" },
  { id: "#..4825", store: "Store A", item: "Phone stand", sale: "$19.99", status: "Delivered" },
  { id: "#..4826", store: "Store B", item: "Shower caddy", sale: "$33.75", status: "Shipped" },
];

const pill: Record<Status, React.CSSProperties> = {
  Delivered: { background: "var(--color-dark)", color: "#fff" },
  Shipped: { background: "var(--color-primary)", color: "#fff" },
  Packed: { background: "var(--color-primary-light)", color: "var(--color-primary)" },
  Sourcing: { background: "var(--color-accent)", color: "var(--color-dark)" },
};

type Gauge = { label: string; value: string; pct: number; note: string };

const gauges: Gauge[] = [
  { label: "On-time shipping", value: "99.2%", pct: 99.2, note: "Orders shipped on time" },
  { label: "Valid tracking", value: "99.6%", pct: 99.6, note: "Orders with valid tracking" },
  { label: "Order defect rate", value: "0.02%", pct: 96, note: "Lower is better" },
];

const RING_R = 44;
const RING_C = 2 * Math.PI * RING_R;

function usd(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

const css = `
@keyframes v4ps-ring { from { stroke-dashoffset: ${RING_C.toFixed(2)}; } }
@keyframes v4ps-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes v4ps-row { from { transform: translateX(-14px); opacity: 0; } to { transform: none; opacity: 1; } }
.v4ps-grid { display: grid; gap: clamp(36px, 4vw, 72px); grid-template-columns: minmax(0, 1fr); align-items: center; }
@media (min-width: 1180px) { .v4ps-grid { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); } }
.v4ps-feats { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr)); }
.v4ps-feat { padding: 20px; height: 100%; }
.v4ps-featico { width: 44px; height: 44px; border-radius: 13px; display: flex; align-items: center; justify-content: center; font-size: 19px; background: rgba(255,255,255,0.1); color: var(--color-accent); margin-bottom: 14px; transition: background-color .35s, color .35s, transform .35s cubic-bezier(.2,.8,.2,1); }
.v4ps-feat:hover .v4ps-featico { background: var(--color-accent); color: var(--color-dark); transform: rotate(-8deg) scale(1.1); }
.v4ps-tab { position: relative; overflow: hidden; display: flex; align-items: center; gap: 8px; flex: 1 1 auto; justify-content: center; padding: 13px 14px; border: 0; border-radius: 12px; background: transparent; color: var(--color-text-light); font: inherit; font-weight: 800; font-size: 14px; white-space: nowrap; cursor: pointer; transition: background-color .25s, color .25s; }
.v4ps-tab:hover { background: var(--color-primary-light); color: var(--color-dark); }
.v4ps-tab[aria-pressed="true"] { background: var(--color-dark); color: #fff; }
.v4ps-tabbar { position: absolute; left: 0; bottom: 0; width: 100%; height: 3px; background: var(--color-accent); transform-origin: left; }
.v4ps-tabbar.run { animation: v4ps-fill ${CYCLE_MS}ms linear both; }
.v4ps-row { animation: v4ps-row .45s cubic-bezier(.2,.8,.2,1) both; }
.v4ps-ringarc { animation: v4ps-ring 1.3s cubic-bezier(.2,.8,.2,1) both; }
.v4ps-plbar { height: 8px; border-radius: 999px; transform-origin: left; animation: v4ps-fill .9s cubic-bezier(.2,.8,.2,1) both; }
.v4ps-tile { flex: 1 1 130px; min-width: 0; padding: 14px 16px; border-radius: 16px; background: var(--color-primary-light); border: 1px solid var(--color-line); transition: transform .3s, border-color .3s; }
.v4ps-tile:hover { transform: translateY(-4px); border-color: var(--color-primary); }
.v4ps-label { font-size: 11px; font-weight: 800; letter-spacing: 1.3px; text-transform: uppercase; color: var(--color-text-light); }
`;

function DashboardScreen() {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "8px 20px", marginBottom: 18 }}>
        <div style={{ minWidth: 0 }}>
          <div className="v4ps-label">Revenue this month · Store A</div>
          <div style={{ fontSize: "clamp(36px, 3.6vw, 58px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1.05 }}>
            <CountUp to={SALES} prefix="$" duration={1400} />
          </div>
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 12px", borderRadius: 999, background: "var(--color-dark)", color: "#fff", fontSize: 12, fontWeight: 800 }}>
          <span className="pulse-dot" aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} />
          Synced
        </span>
      </div>

      <div
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "clamp(4px, 0.8vw, 10px)",
          height: 170,
          padding: "14px 14px 0",
          borderRadius: 18,
          border: "1px solid var(--color-line)",
          backgroundImage: "linear-gradient(var(--color-line) 1px, transparent 1px)",
          backgroundSize: "100% 39px",
          marginBottom: 14,
        }}
      >
        {bars.map((h, i) => (
          <div
            key={i}
            className="bar-grow"
            style={{
              flex: "1 1 0",
              minWidth: 0,
              height: `${h}%`,
              borderRadius: "8px 8px 0 0",
              background: i === bars.length - 1 ? "var(--color-accent)" : i % 2 === 0 ? "var(--color-primary)" : "var(--color-dark)",
              animationDelay: `${i * 60}ms`,
            }}
          />
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <div className="v4ps-tile">
          <div className="v4ps-label">Orders</div>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em" }}>
            <CountUp to={1284} duration={1200} />
          </div>
        </div>
        <div className="v4ps-tile">
          <div className="v4ps-label">Net profit</div>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em" }}>
            <CountUp to={NET_PROFIT} prefix="$" duration={1200} />
          </div>
        </div>
        <div className="v4ps-tile">
          <div className="v4ps-label">Order defect rate</div>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em" }}>0.02%</div>
        </div>
      </div>
    </div>
  );
}

function OrdersScreen() {
  const th: React.CSSProperties = {
    textAlign: "left",
    padding: "10px 12px",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    color: "var(--color-text-light)",
    borderBottom: "2px solid var(--color-line)",
    whiteSpace: "nowrap",
  };
  const td: React.CSSProperties = { padding: "12px", fontSize: 14, borderBottom: "1px solid var(--color-line)", whiteSpace: "nowrap" };
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 12 }}>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>Today&apos;s orders</div>
        <div className="v4ps-label">All stores</div>
      </div>
      <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid var(--color-line)" }}>
        <table style={{ width: "100%", minWidth: 520, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={th}>Order</th>
              <th style={th}>Store</th>
              <th style={th}>Item</th>
              <th style={{ ...th, textAlign: "right" }}>Sale</th>
              <th style={th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderRows.map((o, i) => (
              <tr key={o.id} className="v4ps-row" style={{ animationDelay: `${i * 70}ms` }}>
                <td style={{ ...td, fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{o.id}</td>
                <td style={td}>{o.store}</td>
                <td style={{ ...td, color: "var(--color-text-light)" }}>{o.item}</td>
                <td style={{ ...td, textAlign: "right", fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{o.sale}</td>
                <td style={td}>
                  <span style={{ display: "inline-block", padding: "4px 11px", borderRadius: 999, fontSize: 12, fontWeight: 800, ...pill[o.status] }}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type PlRow = { label: string; amount: number; sign: "" | "-"; color: string };

const plRows: PlRow[] = [
  { label: "Sales", amount: SALES, sign: "", color: "var(--color-primary)" },
  { label: "Product cost", amount: PRODUCT_COST, sign: "-", color: "var(--color-dark)" },
  { label: "Marketplace fees", amount: MARKET_FEES, sign: "-", color: "var(--color-dark)" },
  { label: "Shipping and prep", amount: SHIP_PREP, sign: "-", color: "var(--color-dark)" },
];

function ProfitScreen() {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 12 }}>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>Monthly statement</div>
        <div className="v4ps-label">Store A</div>
      </div>
      <div style={{ display: "grid", gap: 4 }}>
        {plRows.map((r, i) => (
          <div key={r.label} className="v4ps-row" style={{ padding: "11px 4px", borderBottom: "1px solid var(--color-line)", animationDelay: `${i * 90}ms` }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>{r.label}</span>
              <span style={{ fontSize: 17, fontWeight: 800, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                {r.sign}
                {usd(r.amount)}
              </span>
            </div>
            <div aria-hidden="true" style={{ height: 8, borderRadius: 999, background: "var(--color-primary-light)" }}>
              <div
                className="v4ps-plbar"
                style={{ width: `${(r.amount / SALES) * 100}%`, background: r.color, animationDelay: `${150 + i * 90}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="v4ps-row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px 16px",
          marginTop: 14,
          padding: "16px 20px",
          borderRadius: 18,
          background: "var(--color-dark)",
          color: "#fff",
          animationDelay: "420ms",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 800 }}>Net profit</span>
        <span style={{ fontSize: "clamp(26px, 2.6vw, 38px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--color-accent)", fontVariantNumeric: "tabular-nums" }}>
          <CountUp to={NET_PROFIT} prefix="$" duration={1300} />
        </span>
      </div>
    </div>
  );
}

function HealthScreen() {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 18 }}>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>Account health · Store A</div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999, background: "var(--color-dark)", color: "#fff", fontSize: 13, fontWeight: 800 }}>
          <span
            aria-hidden="true"
            style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--color-accent)", color: "var(--color-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9 }}
          >
            <FaCheck />
          </span>
          Good standing
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {gauges.map((g, i) => (
          <div
            key={g.label}
            className="v4ps-tile"
            style={{ flex: "1 1 150px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "18px 12px" }}
          >
            <div style={{ position: "relative", width: "min(132px, 100%)", aspectRatio: "1 / 1", marginBottom: 12 }}>
              <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true" style={{ transform: "rotate(-90deg)", display: "block" }}>
                <circle cx="50" cy="50" r={RING_R} fill="none" stroke="var(--color-line)" strokeWidth="9" />
                <circle
                  className="v4ps-ringarc"
                  cx="50"
                  cy="50"
                  r={RING_R}
                  fill="none"
                  stroke={i === 2 ? "var(--color-accent)" : "var(--color-primary)"}
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  strokeDashoffset={RING_C * (1 - g.pct / 100)}
                  style={{ animationDelay: `${i * 160}ms` }}
                />
              </svg>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {g.value}
              </div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.25 }}>{g.label}</div>
            <div style={{ fontSize: 13, color: "var(--color-text-light)" }}>{g.note}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14, fontSize: 14, color: "var(--color-text-light)" }}>
        <FaShieldAlt aria-hidden="true" style={{ color: "var(--color-primary)", flexShrink: 0 }} />
        Metrics, listing issues and policy alerts are reviewed daily.
      </div>
    </div>
  );
}

export default function PortalShowcase() {
  const [screen, setScreen] = useState<number>(0);
  const [auto, setAuto] = useState<boolean>(true);

  useEffect(() => {
    if (!auto) return;
    const id = window.setTimeout(() => setScreen((s) => (s + 1) % screens.length), CYCLE_MS);
    return () => window.clearTimeout(id);
  }, [auto, screen]);

  const pick = (i: number) => {
    setAuto(false);
    setScreen(i);
  };

  return (
    <section className="g-section bg-navy grid-dots-dark on-dark" style={{ overflow: "hidden" }}>
      <style>{css}</style>
      <div aria-hidden="true" className="blob" style={{ width: 560, height: 560, right: "-120px", top: "10%", background: "rgba(21,96,255,0.38)" }} />
      <div aria-hidden="true" className="blob" style={{ width: 320, height: 320, left: "-100px", top: "-100px", background: "rgba(255,178,26,0.12)", animationDelay: "-8s" }} />

      <div className="container-wide" style={{ position: "relative" }}>
        <div className="v4ps-grid">
          {/* Left: copy and features */}
          <div style={{ minWidth: 0 }}>
            <Reveal>
              <span className="g-eyebrow on-dark" style={{ marginBottom: 20 }}>
                Our technology
              </span>
              <h2 className="g-h2" style={{ marginBottom: 22 }}>
                Every store runs on the <BrandName dark /> Portal.
              </h2>
              <p className="g-lead" style={{ maxWidth: 620, marginBottom: "clamp(26px, 3vw, 40px)" }}>
                Our own ecommerce operations platform connects each client&apos;s store through the marketplace&apos;s
                official API. Our team works from accurate, real-time data, and every client sees exactly what is
                happening in their store.
              </p>
            </Reveal>

            <div className="v4ps-feats">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} delay={i * 80} style={{ minWidth: 0 }}>
                    <div className="g-card-dark v4ps-feat">
                      <div className="v4ps-featico">
                        <Icon aria-hidden="true" />
                      </div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.25, marginBottom: 6, color: "#fff" }}>{f.title}</h3>
                      <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#c9d6f7" }}>{f.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={200}>
              <div style={{ marginTop: 28 }}>
                <Link href="/profit-check" className="btn-accent">
                  Check my profit <FaArrowRight className="btn-arrow" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: browser mock */}
          <Reveal from="right" style={{ minWidth: 0 }}>
            <Tilt max={5}>
              <div
                style={{
                  borderRadius: 26,
                  background: "#fff",
                  color: "var(--color-dark)",
                  boxShadow: "0 50px 100px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.14)",
                  overflow: "hidden",
                }}
              >
                {/* Window bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "var(--color-dark-light)", color: "#fff" }}>
                  <span aria-hidden="true" style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-accent)" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-primary)" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }} />
                  </span>
                  <span
                    style={{
                      flex: "1 1 auto",
                      minWidth: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "7px 12px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.1)",
                      fontSize: 13,
                      fontWeight: 700,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <LogoMark size={18} variant="dark" />
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>Gosellify Portal</span>
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      padding: "6px 11px",
                      borderRadius: 999,
                      background: "var(--color-accent)",
                      color: "var(--color-dark)",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Sample view
                  </span>
                </div>

                {/* Screen tabs */}
                <div style={{ overflowX: "auto", borderBottom: "2px solid var(--color-line)" }}>
                  <div style={{ display: "flex", gap: 6, padding: 8, minWidth: "max-content" }}>
                    {screens.map((s, i) => {
                      const Icon = s.icon;
                      const on = i === screen;
                      return (
                        <button key={s.name} type="button" className="v4ps-tab" aria-pressed={on} onClick={() => pick(i)}>
                          <Icon aria-hidden="true" />
                          {s.name}
                          {on && auto && <span key={i} aria-hidden="true" className="v4ps-tabbar run" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Screen body */}
                <div style={{ padding: "clamp(16px, 2.2vw, 30px)", minHeight: 420 }}>
                  <div key={screen} className="slide-up-in">
                    {screen === 0 && <DashboardScreen />}
                    {screen === 1 && <OrdersScreen />}
                    {screen === 2 && <ProfitScreen />}
                    {screen === 3 && <HealthScreen />}
                  </div>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
