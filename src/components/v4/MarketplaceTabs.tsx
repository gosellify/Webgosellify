"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaAmazon, FaStore, FaShopify, FaEbay, FaEtsy, FaArrowRight, FaCheck } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

type Row = { label: string; note: string; href: string };
type MockOrder = { id: string; item: string; status: string };
type Mock =
  | { kind: "bars"; stat: string; statLabel: string; caption: string; bars: number[] }
  | { kind: "orders"; stat: string; statLabel: string; caption: string; orders: MockOrder[] };

type Market = {
  name: string;
  icon: IconType;
  heading: string;
  desc: string;
  overview: string;
  rows: Row[];
  mock: Mock;
};

const AUTO_MS = 5000;

const markets: Market[] = [
  {
    name: "Amazon",
    icon: FaAmazon,
    heading: "Amazon, managed end to end.",
    desc: "We run FBA, wholesale and 2-step dropshipping stores. Product research, listings, repricing, orders and account health are all handled by our team.",
    overview: "/services/amazon",
    rows: [
      { label: "Amazon FBA", note: "Sourcing, prep and inventory management", href: "/services/amazon-fba" },
      { label: "Amazon wholesale", note: "Branded products from authorized distributors", href: "/services/amazon-wholesale" },
      { label: "2-step dropshipping", note: "No large inventory investment required", href: "/services/amazon-arbitrage" },
      { label: "Account reinstatement", note: "Root cause review and appeal", href: "/services/amazon-reinstatement" },
    ],
    mock: {
      kind: "bars",
      stat: "$4,860",
      statLabel: "Sales this week",
      caption: "Daily sales",
      bars: [42, 58, 51, 70, 64, 86, 100],
    },
  },
  {
    name: "Walmart",
    icon: FaStore,
    heading: "Walmart, run for you every day.",
    desc: "Complete store management on Walmart Marketplace: product research, listings, pricing, order fulfillment, returns and account health, tracked in the Gosellify Portal.",
    overview: "/services/walmart",
    rows: [
      { label: "Walmart management", note: "Daily operations for the whole store", href: "/services/walmart-management" },
      { label: "Walmart WFS", note: "Prep and inbound to Walmart Fulfillment Services", href: "/services/walmart-wfs" },
      { label: "Walmart wholesale", note: "Branded products from authorized distributors", href: "/services/walmart-wholesale" },
      { label: "All Walmart services", note: "Compare the models side by side", href: "/services/walmart" },
    ],
    mock: {
      kind: "orders",
      stat: "38",
      statLabel: "Orders today",
      caption: "Latest orders",
      orders: [
        { id: "#..7306", item: "Storage bins, 4 pack", status: "Shipped" },
        { id: "#..7307", item: "Desk lamp", status: "Packed" },
        { id: "#..7308", item: "Pet bowl set", status: "Sourced" },
        { id: "#..7309", item: "Shower caddy", status: "New" },
      ],
    },
  },
  {
    name: "Shopify",
    icon: FaShopify,
    heading: "Shopify stores, built and grown.",
    desc: "From a done-for-you dropshipping store to a full redesign, a custom theme or a custom app. Then ads, SEO and email to bring the traffic.",
    overview: "/services/shopify",
    rows: [
      { label: "Dropshipping store", note: "Niche research, suppliers and store design", href: "/services/shopify-dropshipping" },
      { label: "Store redesign", note: "Better UX and faster load times", href: "/services/shopify-redesign" },
      { label: "Theme development", note: "A custom theme built for your brand", href: "/services/shopify-theme-development" },
      { label: "Store marketing", note: "Google Ads, Facebook Ads, SEO and email", href: "/services/shopify-marketing" },
    ],
    mock: {
      kind: "bars",
      stat: "1,284",
      statLabel: "Store visits this week",
      caption: "Daily visits",
      bars: [36, 44, 62, 55, 78, 90, 100],
    },
  },
  {
    name: "eBay",
    icon: FaEbay,
    heading: "eBay, from research to returns.",
    desc: "We find high-demand items, write keyword-rich listings and keep prices competitive. Buyer messages, returns and account health are watched daily.",
    overview: "/services/ebay-dropshipping",
    rows: [
      { label: "eBay store management", note: "Product research and daily operations", href: "/services/ebay-dropshipping" },
      { label: "Listing optimization", note: "Titles, item specifics and categories", href: "/services/ebay-dropshipping" },
      { label: "Customer service and returns", note: "Messages, refunds and supplier follow-up", href: "/services/ebay-dropshipping" },
      { label: "3PL warehouse", note: "Same-day prep and shipping", href: "/services/3pl-warehouse" },
    ],
    mock: {
      kind: "orders",
      stat: "22",
      statLabel: "Orders today",
      caption: "Latest orders",
      orders: [
        { id: "#..1954", item: "Tool organizer", status: "Shipped" },
        { id: "#..1955", item: "Phone stand", status: "Shipped" },
        { id: "#..1956", item: "Garden hose reel", status: "Packed" },
        { id: "#..1957", item: "LED strip kit", status: "New" },
      ],
    },
  },
  {
    name: "Etsy",
    icon: FaEtsy,
    heading: "Etsy shops with original products.",
    desc: "Shop setup and branding, listings written for Etsy search, and print-on-demand products that are made only when ordered.",
    overview: "/services/etsy-dropshipping",
    rows: [
      { label: "Shop setup and branding", note: "Policies, banner and about section", href: "/services/etsy-dropshipping" },
      { label: "Etsy SEO listings", note: "Keyword research, titles, tags and attributes", href: "/services/etsy-dropshipping" },
      { label: "Print-on-demand setup", note: "Orders route to the print provider", href: "/services/etsy-dropshipping" },
      { label: "Etsy Ads and marketing", note: "Ad spend, seasonal sales and coupons", href: "/services/etsy-dropshipping" },
    ],
    mock: {
      kind: "bars",
      stat: "64",
      statLabel: "Orders this week",
      caption: "Daily orders",
      bars: [30, 48, 40, 66, 58, 82, 100],
    },
  },
];

const days: string[] = ["M", "T", "W", "T", "F", "S", "S"];

const css = `
@keyframes v4mt-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes v4mt-row { from { transform: translateX(-16px); opacity: 0; } to { transform: none; opacity: 1; } }
.v4mt-tab { position: relative; overflow: hidden; display: flex; align-items: center; gap: 12px; flex: 1 1 150px; min-width: 0; padding: 18px 20px; border-radius: 18px; border: 2px solid var(--color-line); background: #fff; color: var(--color-dark); font: inherit; font-weight: 800; font-size: 17px; cursor: pointer; text-align: left; transition: transform .3s cubic-bezier(.2,.8,.2,1), background-color .3s, color .3s, border-color .3s, box-shadow .3s; }
.v4mt-tab:hover { transform: translateY(-4px); border-color: var(--color-primary); }
.v4mt-tab[aria-pressed="true"] { background: var(--color-dark); border-color: var(--color-dark); color: #fff; box-shadow: 0 18px 36px rgba(10,27,77,0.22); }
.v4mt-tabicon { width: 38px; height: 38px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 19px; background: var(--color-primary-light); color: var(--color-primary); transition: background-color .3s, color .3s, transform .3s; }
.v4mt-tab[aria-pressed="true"] .v4mt-tabicon { background: var(--color-accent); color: var(--color-dark); transform: rotate(-8deg); }
.v4mt-bar { position: absolute; left: 0; bottom: 0; height: 4px; width: 100%; background: var(--color-accent); transform-origin: left; }
.v4mt-bar.run { animation: v4mt-fill ${AUTO_MS}ms linear both; }
.v4mt-row { display: flex; align-items: center; gap: 16px; padding: 18px 20px; border-radius: 16px; border: 2px solid var(--color-line); background: #fff; color: var(--color-dark); text-decoration: none; animation: v4mt-row .5s cubic-bezier(.2,.8,.2,1) both; transition: background-color .25s, border-color .25s, color .25s, transform .25s; }
.v4mt-row:hover { background: var(--color-primary); border-color: var(--color-primary); color: #fff; transform: translateX(6px); }
.v4mt-note { color: var(--color-text-light); transition: color .25s; }
.v4mt-row:hover .v4mt-note { color: #fff; }
.v4mt-go { margin-left: auto; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 13px; background: var(--color-primary-light); color: var(--color-primary); transition: transform .25s, background-color .25s, color .25s; }
.v4mt-row:hover .v4mt-go { background: var(--color-accent); color: var(--color-dark); transform: translateX(4px); }
.v4mt-order { animation: v4mt-row .5s cubic-bezier(.2,.8,.2,1) both; }
`;

function MockCard({ market }: { market: Market }) {
  const Icon = market.icon;
  const mock = market.mock;
  return (
    <div
      className="float-a"
      style={{
        position: "relative",
        borderRadius: 26,
        background: "var(--color-dark)",
        color: "#fff",
        padding: "clamp(20px, 2.2vw, 30px)",
        boxShadow: "0 36px 70px rgba(10,27,77,0.28)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
        <span
          style={{
            width: 42,
            height: 42,
            borderRadius: 13,
            background: "var(--color-accent)",
            color: "var(--color-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            flexShrink: 0,
          }}
        >
          <Icon aria-hidden="true" />
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.2 }}>Store A</div>
          <div style={{ fontSize: 13, color: "#c9d6f7" }}>{market.name} store</div>
        </div>
        <span
          style={{
            marginLeft: "auto",
            padding: "6px 11px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.28)",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: "#c9d6f7",
            whiteSpace: "nowrap",
          }}
        >
          Sample view
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px 12px", marginBottom: 20 }}>
        <span style={{ fontSize: "clamp(36px, 3.4vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>
          {mock.stat}
        </span>
        <span style={{ fontSize: 14, color: "#c9d6f7", fontWeight: 600 }}>{mock.statLabel}</span>
      </div>

      <div
        style={{
          borderRadius: 18,
          background: "var(--color-dark-light)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            color: "#c9d6f7",
            marginBottom: 14,
          }}
        >
          <span
            className="pulse-dot"
            aria-hidden="true"
            style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }}
          />
          {mock.caption}
        </div>

        {mock.kind === "bars" ? (
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 150 }} aria-hidden="true">
            {mock.bars.map((h, i) => (
              <div key={i} style={{ flex: "1 1 0", minWidth: 0, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 8 }}>
                <div
                  className="bar-grow"
                  style={{
                    height: `${h * 0.82}%`,
                    borderRadius: 8,
                    background: i === mock.bars.length - 1 ? "var(--color-accent)" : "var(--color-primary)",
                    animationDelay: `${i * 80}ms`,
                  }}
                />
                <span style={{ fontSize: 11, fontWeight: 700, textAlign: "center", color: "#c9d6f7" }}>{days[i]}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 8 }}>
            {mock.orders.map((o, i) => (
              <div
                key={o.id}
                className="v4mt-order"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.06)",
                  animationDelay: `${i * 110}ms`,
                  fontSize: 14,
                }}
              >
                <span style={{ fontWeight: 800, fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>{o.id}</span>
                <span style={{ color: "#c9d6f7", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {o.item}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    flexShrink: 0,
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 800,
                    background: o.status === "New" ? "var(--color-accent)" : o.status === "Shipped" ? "var(--color-primary)" : "rgba(255,255,255,0.14)",
                    color: o.status === "New" ? "var(--color-dark)" : "#fff",
                  }}
                >
                  {o.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 18, fontSize: 14, color: "#c9d6f7" }}>
        <span
          aria-hidden="true"
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "var(--color-primary)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            flexShrink: 0,
          }}
        >
          <FaCheck />
        </span>
        Managed daily by our team
      </div>
    </div>
  );
}

export default function MarketplaceTabs() {
  const [active, setActive] = useState<number>(0);
  const [auto, setAuto] = useState<boolean>(true);

  useEffect(() => {
    if (!auto) return;
    const id = window.setTimeout(() => {
      setActive((a) => (a + 1) % markets.length);
    }, AUTO_MS);
    return () => window.clearTimeout(id);
  }, [auto, active]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const market = markets[active];

  return (
    <section className="g-section" style={{ background: "#fff", overflow: "hidden" }}>
      <style>{css}</style>
      <div className="container-main">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px 64px",
            marginBottom: "clamp(32px, 4vw, 56px)",
          }}
        >
          <Reveal style={{ flex: "1 1 560px", minWidth: 0, maxWidth: 920 }}>
            <span className="g-eyebrow" style={{ marginBottom: 20 }}>
              Marketplaces
            </span>
            <h2 className="g-h2">
              One team for <span className="mark-amber">every marketplace</span> you sell on.
            </h2>
          </Reveal>
          <Reveal delay={120} style={{ flex: "1 1 340px", minWidth: 0, maxWidth: 460 }}>
            <p className="g-lead">Pick a marketplace to see what we do there. Each one has its own rules, so each one gets its own plan.</p>
          </Reveal>
        </div>

        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "clamp(24px, 3vw, 40px)" }}>
            {markets.map((m, i) => {
              const Icon = m.icon;
              const on = i === active;
              return (
                <button key={m.name} type="button" className="v4mt-tab" aria-pressed={on} onClick={() => pick(i)}>
                  <span className="v4mt-tabicon">
                    <Icon aria-hidden="true" />
                  </span>
                  {m.name}
                  {on && <span key={`${i}-${auto ? "a" : "s"}`} aria-hidden="true" className={`v4mt-bar${auto ? " run" : ""}`} />}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          key={market.name}
          className="slide-up-in"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "clamp(28px, 4vw, 72px)",
            padding: "clamp(22px, 3.4vw, 56px)",
            borderRadius: 32,
            background: "var(--color-primary-light)",
            border: "2px solid var(--color-line)",
          }}
        >
          <div style={{ flex: "1 1 520px", minWidth: 0 }}>
            <h3
              style={{
                fontSize: "clamp(26px, 2.8vw, 44px)",
                lineHeight: 1.06,
                fontWeight: 800,
                letterSpacing: "-0.035em",
                marginBottom: 16,
              }}
            >
              {market.heading}
            </h3>
            <p className="g-lead" style={{ maxWidth: 640, marginBottom: 28 }}>
              {market.desc}
            </p>
            <div style={{ display: "grid", gap: 10 }}>
              {market.rows.map((r, i) => (
                <Link key={r.label} href={r.href} className="v4mt-row" style={{ animationDelay: `${120 + i * 80}ms` }}>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: "block", fontWeight: 800, fontSize: 17, lineHeight: 1.25 }}>{r.label}</span>
                    <span className="v4mt-note" style={{ display: "block", fontSize: 14, lineHeight: 1.4 }}>
                      {r.note}
                    </span>
                  </span>
                  <span className="v4mt-go">
                    <FaArrowRight aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px", marginTop: 28 }}>
              <Link href="/profit-check" className="btn-accent">
                Check my profit <FaArrowRight className="btn-arrow" aria-hidden="true" />
              </Link>
              <Link
                href={market.overview}
                className="link-underline"
                style={{ fontWeight: 800, fontSize: 16, color: "var(--color-dark)", textDecoration: "none" }}
              >
                More about {market.name}
              </Link>
            </div>
          </div>

          <div style={{ flex: "1 1 360px", minWidth: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            <MockCard market={market} />
          </div>
        </div>
      </div>
    </section>
  );
}
