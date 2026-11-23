import React from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaAmazon,
  FaStore,
  FaShopify,
  FaEbay,
  FaWarehouse,
  FaTags,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { BrandName } from "@/components/brand/Logo";

type Tone = "plain" | "navy" | "blue";

type Service = {
  icon: IconType;
  title: string;
  desc: string;
  href: string;
  tone: Tone;
  tag?: string;
};

const services: Service[] = [
  {
    icon: FaAmazon,
    title: "Amazon management",
    desc: "FBA, wholesale and 2-step dropshipping, run end to end by our team.",
    href: "/services/amazon",
    tone: "navy",
    tag: "Most popular",
  },
  {
    icon: FaStore,
    title: "Walmart management",
    desc: "Product research, listings, pricing, orders, returns and account health.",
    href: "/services/walmart-management",
    tone: "blue",
    tag: "Full store management",
  },
  {
    icon: FaShopify,
    title: "Shopify services",
    desc: "Dropshipping stores, redesigns, custom themes, apps and marketing.",
    href: "/services/shopify",
    tone: "plain",
  },
  {
    icon: FaEbay,
    title: "eBay and Etsy",
    desc: "Product research, optimized listings, orders and customer service.",
    href: "/services/ebay-dropshipping",
    tone: "plain",
  },
  {
    icon: FaWarehouse,
    title: "3PL warehouse",
    desc: "Receiving, storage, FBA and WFS prep. Same-day prep and shipping from our US warehouses.",
    href: "/services/3pl-warehouse",
    tone: "plain",
  },
  {
    icon: FaTags,
    title: "Temu store management",
    desc: "Your Temu store run for you, with US stock stored and shipped from our warehouses.",
    href: "/services/temu",
    tone: "plain",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Account setup, LLC and tax",
    desc: "Open your own seller account the right way, with company formation, EIN and tax filing.",
    href: "/services/seller-account-setup",
    tone: "plain",
  },
  {
    icon: FaShieldAlt,
    title: "Account reinstatement",
    desc: "Suspended Amazon account? We find the root cause and write the appeal.",
    href: "/services/amazon-reinstatement",
    tone: "plain",
  },
];

const css = `
.v4sg-grid { display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); }
@media (min-width: 1280px) { .v4sg-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.v4sg-card { position: relative; overflow: hidden; display: flex; flex-direction: column; flex: 1 1 auto; min-width: 0; padding: clamp(24px, 2.2vw, 34px); text-decoration: none; color: var(--color-dark); }
.v4sg-card::before { content: ""; position: absolute; right: -70px; top: -70px; width: 180px; height: 180px; border-radius: 50%; background: var(--color-primary-light); transform: scale(0); transition: transform .55s cubic-bezier(.2,.8,.2,1); pointer-events: none; }
.v4sg-card:hover::before { transform: scale(1); }
.v4sg-card > * { position: relative; }
.v4sg-desc { color: var(--color-text-light); }
.v4sg-more { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: auto; padding-top: 18px; border-top: 2px solid var(--color-line); font-weight: 800; font-size: 15px; color: var(--color-primary); transition: border-color .35s; }
.v4sg-arrow { width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 14px; background: var(--color-primary-light); color: var(--color-primary); transition: transform .35s cubic-bezier(.2,.8,.2,1), background-color .35s, color .35s; }
.v4sg-card:hover .v4sg-arrow { transform: translateX(8px); background: var(--color-accent); color: var(--color-dark); }
.v4sg-card:hover .v4sg-more { border-color: var(--color-primary); }
.v4sg-tag { display: inline-flex; align-items: center; gap: 8px; padding: 7px 12px; border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; white-space: nowrap; }

.v4sg-navy { background: var(--color-dark); border-color: var(--color-dark); color: #fff; }
.v4sg-navy:hover { border-color: var(--color-accent); }
.v4sg-navy::before { background: rgba(255,178,26,0.16); }
.v4sg-navy .v4sg-desc { color: #c9d6f7; }
.v4sg-navy .icon-tile { background: var(--color-accent); color: var(--color-dark); }
.v4sg-navy:hover .icon-tile { background: #fff; color: var(--color-dark); }
.v4sg-navy .v4sg-more { color: #fff; border-top-color: rgba(255,255,255,0.16); }
.v4sg-navy:hover .v4sg-more { border-top-color: var(--color-accent); }
.v4sg-navy .v4sg-arrow { background: rgba(255,255,255,0.12); color: #fff; }
.v4sg-navy .v4sg-tag { background: var(--color-accent); color: var(--color-dark); }

.v4sg-blue { background: var(--color-primary); border-color: var(--color-primary); color: #fff; }
.v4sg-blue:hover { border-color: var(--color-dark); }
.v4sg-blue::before { background: rgba(255,255,255,0.14); }
.v4sg-blue .v4sg-desc { color: #fff; }
.v4sg-blue .icon-tile { background: #fff; color: var(--color-primary); }
.v4sg-blue:hover .icon-tile { background: var(--color-dark); color: #fff; }
.v4sg-blue .v4sg-more { color: #fff; border-top-color: rgba(255,255,255,0.3); }
.v4sg-blue:hover .v4sg-more { border-top-color: #fff; }
.v4sg-blue .v4sg-arrow { background: rgba(255,255,255,0.18); color: #fff; }
.v4sg-blue .v4sg-tag { background: var(--color-dark); color: #fff; }

.v4sg-ring { position: absolute; border-radius: 50%; border: 3px dashed rgba(21,96,255,0.28); pointer-events: none; }
.v4sg-ring-b { border: 2px dashed rgba(255,178,26,0.7); animation-direction: reverse; animation-duration: 60s; }
`;

function toneClass(tone: Tone): string {
  if (tone === "navy") return " v4sg-navy";
  if (tone === "blue") return " v4sg-blue";
  return "";
}

export default function ServicesGrid() {
  return (
    <section className="g-section bg-tint grid-dots" style={{ overflow: "hidden" }}>
      <style>{css}</style>

      {/* Decoration */}
      <div
        aria-hidden="true"
        className="v4sg-ring spin-slow"
        style={{ width: "min(760px, 90vw)", height: "min(760px, 90vw)", right: "-220px", top: "-260px" }}
      />
      <div
        aria-hidden="true"
        className="v4sg-ring v4sg-ring-b spin-slow"
        style={{ width: "min(520px, 70vw)", height: "min(520px, 70vw)", right: "-100px", top: "-140px" }}
      />
      <div
        aria-hidden="true"
        className="blob"
        style={{ width: 420, height: 420, left: "-140px", bottom: "-120px", background: "rgba(21,96,255,0.16)" }}
      />

      <div className="container-wide" style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "28px 64px",
            marginBottom: "clamp(40px, 5vw, 72px)",
          }}
        >
          <Reveal style={{ flex: "1 1 560px", minWidth: 0, maxWidth: 900 }}>
            <span className="g-eyebrow" style={{ marginBottom: 20 }}>
              All ecommerce services, one team
            </span>
            <h2 className="g-h2">
              Everything your store needs, <span className="t-blue">under one roof.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} style={{ flex: "1 1 380px", minWidth: 0, maxWidth: 520 }}>
            <p className="g-lead" style={{ marginBottom: 20 }}>
              <BrandName /> runs the store, the warehouse and the paperwork. You deal with one team, not five
              vendors.
            </p>
            <Link
              href="/services"
              className="link-underline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 800,
                fontSize: 16,
                color: "var(--color-dark)",
                textDecoration: "none",
              }}
            >
              See all services <FaArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="v4sg-grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 4) * 90 + Math.floor(i / 4) * 60} style={{ display: "flex", minWidth: 0 }}>
                <Link href={s.href} className={`g-card v4sg-card${toneClass(s.tone)}`}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 12,
                      marginBottom: 26,
                    }}
                  >
                    <span className="icon-tile">
                      <Icon aria-hidden="true" />
                    </span>
                    {s.tag ? (
                      <span className="v4sg-tag">{s.tag}</span>
                    ) : (
                      <span
                        aria-hidden="true"
                        style={{ fontSize: 14, fontWeight: 800, letterSpacing: 1, color: "var(--color-text-light)", opacity: 0.6 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <h3 className="g-h3" style={{ marginBottom: 10 }}>
                    {s.title}
                  </h3>
                  <p className="v4sg-desc" style={{ fontSize: 16, lineHeight: 1.55, marginBottom: 26 }}>
                    {s.desc}
                  </p>
                  <span className="v4sg-more">
                    Learn more
                    <span className="v4sg-arrow">
                      <FaArrowRight aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div
            style={{
              marginTop: "clamp(36px, 4vw, 56px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              padding: "clamp(20px, 2.4vw, 30px) clamp(22px, 3vw, 40px)",
              borderRadius: 24,
              background: "#fff",
              border: "2px solid var(--color-line)",
            }}
          >
            <p style={{ flex: "1 1 360px", minWidth: 0, fontSize: "clamp(17px, 1.5vw, 22px)", fontWeight: 800, lineHeight: 1.3 }}>
              Not sure which service fits? <span className="mark-amber">Pay from profit</span>, no contract, cancel
              anytime.
            </p>
            <Link href="/profit-check" className="btn-accent">
              Check my profit <FaArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
