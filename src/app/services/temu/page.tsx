import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaBoxOpen,
  FaChartLine,
  FaCheck,
  FaClipboardList,
  FaExternalLinkAlt,
  FaHeadset,
  FaSearch,
  FaShieldAlt,
  FaStore,
  FaTags,
  FaTimes,
  FaUserTie,
  FaWarehouse,
  FaWhatsapp,
} from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { BrandName } from "@/components/brand/Logo";
import TemuHeroVisual from "./TemuHeroVisual";
import TemuFaqList from "./TemuFaqList";
import { temuFaqs } from "./faqs";

export const metadata: Metadata = {
  title: "Temu Store Management Service",
  description:
    "Temu store management for sellers who hold inventory in the US. Gosellify helps with the seller account application, product selection, listings, pricing, order fulfilment from our US warehouses, customer service and account health. No dropshipping, no approval promises.",
  alternates: { canonical: "/services/temu" },
};

const SRC = {
  sellerCenter: "https://seller.temu.com/",
  academy: "https://seller.temu.com/seller-academy/index.html",
  dc360:
    "https://www.digitalcommerce360.com/2026/04/30/sell-locally-and-now-into-regional-markets-temus-local-seller-program-explained-2026-update/",
  modernRetail: "https://www.modernretail.co/technology/temu-is-making-it-easier-for-u-s-sellers-to-join-its-fast-growing-marketplace/",
  justStyle: "https://www.just-style.com/news/temu-confirms-end-of-dtc-parcels-from-china-to-us-consumers",
  caixin:
    "https://www.caixinglobal.com/2025-05-07/chinas-e-commerce-giants-adjust-prices-and-rethink-delivery-models-as-us-tariffs-on-low-value-parcels-bite-102316948.html",
  shipstation: "https://www.shipstation.com/blog/temus-local-seller-program-a-shipstation-sellers-guide/",
  worldfirst: "https://worldfirst.com/uk/marketplace-sellers/e-commerce-guides/temu-dropshipping",
  amazonFba: "https://sell.amazon.com/fulfillment-by-amazon",
  amazonSell: "https://sell.amazon.com/",
  walmartWfs: "https://marketplace.walmart.com/walmart-fulfillment-services/",
  walmartSell: "https://marketplace.walmart.com/",
};

type Src = { label: string; href: string };

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="tmu-ext">
      {children} <FaExternalLinkAlt aria-hidden="true" style={{ fontSize: "0.72em" }} />
    </a>
  );
}

type Moment = { when: string; what: string; src: Src };

const moments: Moment[] = [
  {
    when: "Early 2024",
    what: "Temu starts its Local Seller Program: eligible local businesses sell through local warehousing and delivery.",
    src: { label: "Digital Commerce 360 (sponsored article)", href: SRC.dc360 },
  },
  {
    when: "November 2024",
    what: "US sellers can register without an invitation, after a period of invite-only access.",
    src: { label: "Modern Retail", href: SRC.modernRetail },
  },
  {
    when: "May 2025",
    what: "Temu tells trade press that US sales are handled by locally based sellers, with orders fulfilled inside the country.",
    src: { label: "Just Style", href: SRC.justStyle },
  },
  {
    when: "December 2025",
    what: "US-based sellers in the program can also sell to shoppers in Canada.",
    src: { label: "Digital Commerce 360 (sponsored article)", href: SRC.dc360 },
  },
];

type Manage = { icon: IconType; title: string; desc: string; href?: string; linkLabel?: string };

const manage: Manage[] = [
  {
    icon: FaUserTie,
    title: "Account application help",
    desc: "We check your business details and documents and walk you through the Seller Center sign-up. Temu makes the decision.",
    href: "/services/seller-account-setup",
    linkLabel: "Seller account setup",
  },
  {
    icon: FaSearch,
    title: "Product selection",
    desc: "We look for products that suit the Temu shopper and still leave profit after product cost, shipping and Temu's terms.",
  },
  {
    icon: FaClipboardList,
    title: "Listings",
    desc: "Titles, images, attributes and variations, added one by one or in bulk, and fixed when a listing gets flagged.",
  },
  {
    icon: FaTags,
    title: "Pricing",
    desc: "Prices set from your real landed cost. We review them as costs and competition change, so you do not sell at a loss.",
    href: "/tools/profit-calculator",
    linkLabel: "Try the profit calculator",
  },
  {
    icon: FaBoxOpen,
    title: "Order fulfilment",
    desc: "Orders are picked, packed and shipped from stock in the US, and tracking goes back to the order.",
    href: "/services/3pl-warehouse",
    linkLabel: "3PL and warehousing",
  },
  {
    icon: FaHeadset,
    title: "Customer service",
    desc: "Buyer messages, returns and refund requests are answered by our team, with 24/7 support for you.",
  },
  {
    icon: FaShieldAlt,
    title: "Account health",
    desc: "We watch late shipments, tracking, listing issues and policy notices daily and act before they grow.",
  },
  {
    icon: FaChartLine,
    title: "Reporting in the Portal",
    desc: "Orders, costs and profit for your store are tracked in the Gosellify Portal, so you see what we see.",
  },
];

const fits: string[] = [
  "You have, or will have, inventory inside the US.",
  "You have a registered business and can pass Temu's own checks.",
  "You are a brand, wholesaler or reseller with authentic products and invoices.",
  "You already sell on Amazon or Walmart and want one more channel for the same stock.",
  "You want a team to run the daily work while you keep ownership of the account.",
];

const noFits: string[] = [
  "You want to dropship on Temu with no stock. We do not offer that.",
  "You want someone to promise that Temu will approve you. Nobody honest can.",
  "You want to buy or rent a seller account. We do not do that on any marketplace.",
  "You want guaranteed sales or a fixed income. Results depend on product, price and stock.",
  "You cannot place inventory in the US at all.",
];

type Step = { title: string; desc: string };

const steps: Step[] = [
  {
    title: "2-minute Profit Check",
    desc: "Answer a few questions about your products, stock and budget. A manager reviews them and replies with a plan.",
  },
  {
    title: "Account and documents",
    desc: "If you do not have a Temu seller account yet, we help you prepare and submit the application in Seller Center.",
  },
  {
    title: "Stock into the US",
    desc: "Use your own space, or send inventory to our US warehouses. We receive, count and store it.",
  },
  {
    title: "Products and listings",
    desc: "We pick the first products, build the listings and set prices from your landed cost.",
  },
  {
    title: "Daily management",
    desc: "Orders, customer messages, account health and reports, every day. You follow it in the Portal.",
  },
];

type Cell = { text: string; link?: Src; internal?: Src };
type CompareRow = { label: string; temu: Cell; amazon: Cell; walmart: Cell };

const compare: CompareRow[] = [
  {
    label: "Marketplace-run fulfilment",
    temu: {
      text: "Temu's US seller page says Temu does not provide logistics services directly. Sellers ship orders themselves or through a logistics partner.",
      link: { label: "seller.temu.com", href: SRC.sellerCenter },
    },
    amazon: {
      text: "FBA: Amazon stores your stock, packs and ships orders, and handles customer service and returns.",
      link: { label: "sell.amazon.com", href: SRC.amazonFba },
    },
    walmart: {
      text: "WFS: Walmart stores your stock, packs and ships orders, and handles customer questions and returns.",
      link: { label: "marketplace.walmart.com", href: SRC.walmartWfs },
    },
  },
  {
    label: "How we fulfil for you",
    temu: { text: "From stock held in the US, in your space or in our US warehouses." },
    amazon: { text: "Through FBA, or from our US warehouses." },
    walmart: { text: "Through WFS, or from our US warehouses." },
  },
  {
    label: "Fees",
    temu: { text: "Not quoted here. Check the current terms in Seller Center.", link: { label: "Temu Seller Center", href: SRC.sellerCenter } },
    amazon: { text: "Not quoted here. Check the current fee schedule.", link: { label: "sell.amazon.com", href: SRC.amazonSell } },
    walmart: { text: "Not quoted here. Check the current fee schedule.", link: { label: "marketplace.walmart.com", href: SRC.walmartSell } },
  },
  {
    label: "Who approves sellers",
    temu: { text: "Temu. We help you apply." },
    amazon: { text: "Amazon. We help you apply." },
    walmart: { text: "Walmart. We help you apply." },
  },
  {
    label: "Our service page",
    temu: { text: "You are here." },
    amazon: { text: "Amazon store management services.", internal: { label: "Amazon services", href: "/services/amazon" } },
    walmart: { text: "Walmart marketplace management services.", internal: { label: "Walmart management", href: "/services/walmart-management" } },
  },
];

const css = `
.tmu-ext { color: var(--color-primary); font-weight: 800; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; display: inline-flex; align-items: center; gap: 6px; transition: color .2s; overflow-wrap: anywhere; }
.tmu-ext:hover { color: var(--color-dark); }
.on-dark .tmu-ext { color: var(--color-accent); }
.on-dark .tmu-ext:hover { color: #fff; }
.tmu-hero { display: grid; grid-template-columns: minmax(0, 1fr); gap: clamp(48px, 5vw, 88px); align-items: center; }
@media (min-width: 1100px) { .tmu-hero { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); } }
.tmu-chip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; border: 2px solid var(--color-line); background: #fff; font-size: 14px; font-weight: 800; transition: border-color .25s, transform .25s; }
.tmu-chip:hover { border-color: var(--color-primary); transform: translateY(-3px); }
.tmu-models { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr)); gap: clamp(18px, 2vw, 28px); }
.tmu-model { padding: clamp(24px, 2.6vw, 40px); height: 100%; position: relative; overflow: hidden; }
.tmu-model.main { border-color: var(--color-dark); box-shadow: 10px 10px 0 var(--color-accent); }
.tmu-model.main:hover { box-shadow: 14px 14px 0 var(--color-accent); border-color: var(--color-dark); }
.tmu-tag { display: inline-block; padding: 5px 12px; border-radius: 999px; font-size: 12px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }
.tmu-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
.tmu-list li { display: flex; gap: 12px; align-items: flex-start; font-size: 16.5px; line-height: 1.5; }
.tmu-tick { width: 24px; height: 24px; flex-shrink: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; margin-top: 1px; }
.tmu-time { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr)); gap: 0; }
.tmu-moment { position: relative; height: 100%; padding: 26px 22px 30px 0; border-top: 3px solid var(--color-dark); }
.tmu-moment::before { content: ""; position: absolute; top: -10px; left: 0; width: 17px; height: 17px; border-radius: 50%; background: var(--color-accent); border: 3px solid var(--color-dark); transition: transform .3s; }
.tmu-moment:hover::before { transform: scale(1.35); }
.tmu-manage { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(290px, 100%), 1fr)); gap: clamp(14px, 1.6vw, 22px); }
.tmu-mcard { padding: clamp(22px, 2.2vw, 32px); height: 100%; display: flex; flex-direction: column; }
.tmu-fit { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr)); gap: clamp(18px, 2vw, 28px); }
.tmu-fitcol { padding: clamp(24px, 2.8vw, 44px); border-radius: 28px; height: 100%; }
.tmu-steps { display: grid; grid-template-columns: minmax(0, 1fr); gap: clamp(36px, 5vw, 96px); align-items: start; }
@media (min-width: 1040px) { .tmu-steps { grid-template-columns: minmax(0, 4fr) minmax(0, 8fr); } .tmu-steps-side { position: sticky; top: 120px; } }
.tmu-step { display: flex; gap: clamp(16px, 2vw, 28px); align-items: flex-start; padding: clamp(18px, 2vw, 28px) 0; border-bottom: 2px solid var(--color-line); transition: padding-left .3s, border-color .3s; }
.tmu-step:hover { padding-left: 14px; border-color: var(--color-primary); }
.tmu-num { width: clamp(52px, 5vw, 72px); height: clamp(52px, 5vw, 72px); flex-shrink: 0; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: clamp(22px, 2.2vw, 32px); font-weight: 800; background: var(--color-primary-light); color: var(--color-primary); transition: background-color .3s, color .3s, transform .3s cubic-bezier(.2,.8,.2,1); }
.tmu-step:hover .tmu-num { background: var(--color-dark); color: var(--color-accent); transform: rotate(-6deg); }
.tmu-table { width: 100%; min-width: 860px; border-collapse: separate; border-spacing: 0; background: #fff; }
.tmu-table th, .tmu-table td { padding: 18px 20px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--color-line); font-size: 15.5px; line-height: 1.5; }
.tmu-table thead th { background: var(--color-dark); color: #fff; font-size: 16px; font-weight: 800; white-space: nowrap; }
.tmu-table thead th.hl { background: var(--color-primary); }
.tmu-table tbody th { font-weight: 800; width: 19%; }
.tmu-table tbody td.hl { background: var(--color-primary-light); }
.tmu-table tbody tr { transition: background-color .25s; }
.tmu-table tbody tr:hover { background: #f7faff; }
.tmu-table tbody tr:last-child th, .tmu-table tbody tr:last-child td { border-bottom: 0; }
.tmu-faq { display: grid; grid-template-columns: minmax(0, 1fr); gap: clamp(32px, 5vw, 96px); align-items: start; }
@media (min-width: 1040px) { .tmu-faq { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); } .tmu-faq-side { position: sticky; top: 120px; } }
.tmu-cta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 28px 48px; }
@keyframes tmu-slide { from { background-position: 0 0; } to { background-position: 56px 0; } }
.tmu-belt { height: 10px; background-image: repeating-linear-gradient(90deg, var(--color-accent) 0 28px, transparent 28px 56px); animation: tmu-slide 1.4s linear infinite; }
@media (prefers-reduced-motion: reduce) { .tmu-belt { animation: none; } }
`;

function CellView({ c }: { c: Cell }) {
  return (
    <>
      {c.text}
      {c.link ? (
        <span style={{ display: "block", marginTop: 8, fontSize: 14 }}>
          <Ext href={c.link.href}>{c.link.label}</Ext>
        </span>
      ) : null}
      {c.internal ? (
        <span style={{ display: "block", marginTop: 8, fontSize: 14 }}>
          <Link href={c.internal.href} className="tmu-ext">
            {c.internal.label} <FaArrowRight aria-hidden="true" style={{ fontSize: "0.72em" }} />
          </Link>
        </span>
      ) : null}
    </>
  );
}

export default function TemuServicePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: temuFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section className="g-section grid-dots" style={{ background: "#fff", overflow: "hidden", paddingTop: "clamp(56px, 6vw, 104px)" }}>
        <div aria-hidden="true" className="blob" style={{ width: 460, height: 460, right: "-140px", top: "-120px", background: "rgba(21,96,255,0.16)" }} />
        <div className="container-wide" style={{ position: "relative" }}>
          <div className="tmu-hero">
            <div style={{ minWidth: 0 }}>
              <Reveal>
                <span className="g-eyebrow">New service · Temu</span>
                <h1 className="g-h1" style={{ marginTop: 20, fontSize: "clamp(40px, 5.4vw, 86px)" }}>
                  Temu store management, <span className="mark-amber">run from US stock.</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="g-lead" style={{ marginTop: 26, maxWidth: 720 }}>
                  <BrandName /> manages your Temu store for you: account application help, product selection, listings,
                  pricing, order fulfilment, customer service and account health. It is for sellers who hold, or will
                  hold, inventory in the US. Our US warehouses can store, prep and ship it.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 14 }}>
                  <Link href="/profit-check" className="btn-accent">
                    Check my profit <FaArrowRight className="btn-arrow" aria-hidden="true" />
                  </Link>
                  <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FaWhatsapp aria-hidden="true" /> Ask on WhatsApp
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <span className="tmu-chip">
                    <FaWarehouse aria-hidden="true" className="t-blue" /> US inventory only
                  </span>
                  <span className="tmu-chip">
                    <FaTimes aria-hidden="true" className="t-blue" /> No dropshipping on Temu
                  </span>
                  <span className="tmu-chip">
                    <FaStore aria-hidden="true" className="t-blue" /> You own the account
                  </span>
                </div>
                <p style={{ marginTop: 22, fontSize: 14, color: "var(--color-text-light)", maxWidth: 680 }}>
                  We are an independent agency. We are not part of Temu and we cannot promise that Temu will approve an
                  application. Last reviewed: November 2026.
                </p>
              </Reveal>
            </div>
            <Reveal from="right" delay={150} style={{ minWidth: 0, paddingBottom: 24 }}>
              <TemuHeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How selling on Temu works */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <Reveal>
            <span className="g-eyebrow">The basics</span>
            <h2 className="g-h2" style={{ marginTop: 18, maxWidth: 1000 }}>
              How selling on Temu works
            </h2>
            <p className="g-lead" style={{ marginTop: 22, maxWidth: 820 }}>
              There are two models people talk about when they say &quot;sell on Temu&quot;. Only one of them matters for
              a seller with stock in the US.
            </p>
          </Reveal>

          <div className="tmu-models" style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
            <Reveal from="left" style={{ minWidth: 0 }}>
              <div className="g-card tmu-model main">
                <span className="tmu-tag" style={{ background: "var(--color-dark)", color: "#fff" }}>
                  The model we manage
                </span>
                <h3 className="g-h3" style={{ marginTop: 16 }}>
                  Local seller: you hold stock in the US
                </h3>
                <p style={{ marginTop: 12, fontSize: 16.5, lineHeight: 1.6, color: "var(--color-text-light)" }}>
                  Temu&apos;s Local Seller Program is for eligible local businesses that sell through local warehousing
                  and delivery. You register in Seller Center, list your products, and orders ship from inventory that
                  is already in the country.
                </p>
                <ul className="tmu-list" style={{ marginTop: 20 }}>
                  <li>
                    <span className="tmu-tick" aria-hidden="true" style={{ background: "var(--color-primary)", color: "#fff" }}>
                      <FaCheck />
                    </span>
                    <span>
                      Temu&apos;s US seller page shows three sign-up steps: create an account, complete the application,
                      get the result. <Ext href={SRC.sellerCenter}>Temu Seller Center</Ext>
                    </span>
                  </li>
                  <li>
                    <span className="tmu-tick" aria-hidden="true" style={{ background: "var(--color-primary)", color: "#fff" }}>
                      <FaCheck />
                    </span>
                    <span>
                      The same page says Temu does not provide logistics services directly, so shipping is on the seller
                      or a logistics partner.
                    </span>
                  </li>
                  <li>
                    <span className="tmu-tick" aria-hidden="true" style={{ background: "var(--color-primary)", color: "#fff" }}>
                      <FaCheck />
                    </span>
                    <span>
                      Temu teaches registration, products, orders, logistics and returns in its own academy.{" "}
                      <Ext href={SRC.academy}>Temu Seller Academy</Ext>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal from="right" delay={120} style={{ minWidth: 0 }}>
              <div className="g-card tmu-model">
                <span className="tmu-tag" style={{ background: "var(--color-primary-light)", color: "var(--color-primary)" }}>
                  Not what we manage
                </span>
                <h3 className="g-h3" style={{ marginTop: 16 }}>
                  Fully managed: goods shipped from China
                </h3>
                <p style={{ marginTop: 12, fontSize: 16.5, lineHeight: 1.6, color: "var(--color-text-light)" }}>
                  This is the model Temu became known for. Suppliers, mostly factories in China, hand goods to Temu, and
                  the goods ship from China to the shopper. It is built for manufacturers, not for a US seller with
                  local stock.
                </p>
                <ul className="tmu-list" style={{ marginTop: 20 }}>
                  <li>
                    <span className="tmu-tick" aria-hidden="true" style={{ background: "var(--color-dark)", color: "#fff" }}>
                      <FaCheck />
                    </span>
                    <span>
                      Caixin reported in May 2025 that Temu stopped offering this model for shipments to US buyers.{" "}
                      <Ext href={SRC.caixin}>Caixin Global</Ext>
                    </span>
                  </li>
                  <li>
                    <span className="tmu-tick" aria-hidden="true" style={{ background: "var(--color-dark)", color: "#fff" }}>
                      <FaCheck />
                    </span>
                    <span>
                      Temu&apos;s seller site has a separate sign-up path for sellers registered in the Chinese Mainland
                      or Hong Kong.
                    </span>
                  </li>
                  <li>
                    <span className="tmu-tick" aria-hidden="true" style={{ background: "var(--color-dark)", color: "#fff" }}>
                      <FaCheck />
                    </span>
                    <span>
                      Dropshipping is a third idea people ask about. One trade guide says Temu does not officially
                      support it, and we do not offer it. <Ext href={SRC.worldfirst}>WorldFirst guide</Ext>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h3 className="g-h3" style={{ marginTop: "clamp(48px, 5vw, 80px)", marginBottom: 34 }}>
              How Temu opened to US sellers
            </h3>
          </Reveal>
          <div className="tmu-time">
            {moments.map((m, i) => (
              <Reveal key={m.when} delay={i * 110} style={{ minWidth: 0 }}>
                <div className="tmu-moment">
                  <div style={{ fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: 800, letterSpacing: "-0.02em" }}>{m.when}</div>
                  <p style={{ marginTop: 8, fontSize: 15.5, lineHeight: 1.55, color: "var(--color-text-light)" }}>{m.what}</p>
                  <p style={{ marginTop: 10, fontSize: 13.5 }}>
                    <Ext href={m.src.href}>{m.src.label}</Ext>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-light)", maxWidth: 900 }}>
              Programs, rules and fees change. Always confirm the current terms in{" "}
              <Ext href={SRC.sellerCenter}>Temu Seller Center</Ext> before you apply or list. Last reviewed: November
              2026.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we manage */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-wide">
          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 48px" }}>
              <div style={{ minWidth: 0, flex: "1 1 520px" }}>
                <span className="g-eyebrow">Temu store management service</span>
                <h2 className="g-h2" style={{ marginTop: 18 }}>
                  What we <span className="t-blue">manage</span> for you
                </h2>
              </div>
              <p className="g-lead" style={{ flex: "1 1 420px", maxWidth: 620, minWidth: 0 }}>
                The same daily work our team does for Amazon and Walmart stores, set up for a Temu seller account.
              </p>
            </div>
          </Reveal>
          <div className="tmu-manage" style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
            {manage.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.title} delay={(i % 4) * 80} style={{ minWidth: 0 }}>
                  <div className="g-card tmu-mcard">
                    <div className="icon-tile" aria-hidden="true">
                      <Icon />
                    </div>
                    <h3 style={{ marginTop: 18, fontSize: 21, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{m.title}</h3>
                    <p style={{ marginTop: 10, fontSize: 15.5, lineHeight: 1.6, color: "var(--color-text-light)", flex: "1 1 auto" }}>{m.desc}</p>
                    {m.href && m.linkLabel ? (
                      <Link
                        href={m.href}
                        className="link-underline"
                        style={{ alignSelf: "flex-start", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 15, color: "var(--color-primary)", textDecoration: "none" }}
                      >
                        {m.linkLabel} <FaArrowRight aria-hidden="true" style={{ fontSize: 12 }} />
                      </Link>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="g-section bg-navy grid-dots-dark on-dark" style={{ overflow: "hidden" }}>
        <div aria-hidden="true" className="blob" style={{ width: 480, height: 480, left: "-140px", bottom: "-160px", background: "rgba(21,96,255,0.35)" }} />
        <div className="container-main" style={{ position: "relative" }}>
          <Reveal>
            <span className="g-eyebrow on-dark">Honest fit check</span>
            <h2 className="g-h2" style={{ marginTop: 18, maxWidth: 980 }}>
              Who it fits, and who it <span className="t-amber">does not</span>
            </h2>
          </Reveal>
          <div className="tmu-fit" style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
            <Reveal from="left" style={{ minWidth: 0 }}>
              <div className="tmu-fitcol" style={{ background: "#fff", color: "var(--color-dark)" }}>
                <h3 className="g-h3" style={{ color: "var(--color-dark)" }}>
                  A good fit
                </h3>
                <ul className="tmu-list" style={{ marginTop: 22 }}>
                  {fits.map((t) => (
                    <li key={t}>
                      <span className="tmu-tick" aria-hidden="true" style={{ background: "var(--color-primary)", color: "#fff" }}>
                        <FaCheck />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal from="right" delay={120} style={{ minWidth: 0 }}>
              <div className="tmu-fitcol" style={{ background: "var(--color-dark-light)", border: "1px solid rgba(255,255,255,0.14)" }}>
                <h3 className="g-h3">Not a fit</h3>
                <ul className="tmu-list" style={{ marginTop: 22, color: "#c9d6f7" }}>
                  {noFits.map((t) => (
                    <li key={t}>
                      <span className="tmu-tick" aria-hidden="true" style={{ background: "rgba(255,255,255,0.12)", color: "var(--color-accent)" }}>
                        <FaTimes />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p style={{ marginTop: 28, fontSize: 16, color: "#c9d6f7", maxWidth: 860 }}>
              Want a model without your own stock? Look at{" "}
              <Link href="/services/amazon-arbitrage" className="tmu-ext">
                2-step dropshipping on Amazon
              </Link>{" "}
              or{" "}
              <Link href="/services/walmart-management" className="tmu-ext">
                Walmart management services
              </Link>{" "}
              instead.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How we start */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <div className="tmu-steps">
            <div className="tmu-steps-side">
              <Reveal from="left">
                <span className="g-eyebrow">Getting started</span>
                <h2 className="g-h2" style={{ marginTop: 18 }}>
                  How we <span className="mark-amber">start</span>
                </h2>
                <p className="g-lead" style={{ marginTop: 22, maxWidth: 460 }}>
                  Five steps from first message to a managed store. Timing depends on Temu&apos;s review and on when
                  your stock lands.
                </p>
                <div aria-hidden="true" style={{ marginTop: 30, maxWidth: 420, borderRadius: 999, overflow: "hidden", background: "var(--color-dark)", padding: "8px 0" }}>
                  <div className="tmu-belt" />
                </div>
              </Reveal>
            </div>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, minWidth: 0, borderTop: "2px solid var(--color-line)" }}>
              {steps.map((s, i) => (
                <li key={s.title}>
                  <Reveal delay={i * 80}>
                    <div className="tmu-step">
                      <span className="tmu-num" aria-hidden="true">
                        {i + 1}
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <h3 className="g-h3">{s.title}</h3>
                        <p style={{ marginTop: 8, fontSize: 16.5, lineHeight: 1.6, color: "var(--color-text-light)", maxWidth: 680 }}>{s.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="g-section bg-tint">
        <div className="container-wide">
          <Reveal>
            <span className="g-eyebrow">Side by side</span>
            <h2 className="g-h2" style={{ marginTop: 18 }}>
              Temu next to Amazon and Walmart
            </h2>
            <p className="g-lead" style={{ marginTop: 22, maxWidth: 820 }}>
              A short comparison with facts we could confirm on each marketplace&apos;s own pages. No fee numbers, because
              they change.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div
              style={{ marginTop: "clamp(28px, 3.4vw, 48px)", overflowX: "auto", borderRadius: 24, border: "2px solid var(--color-dark)", background: "#fff" }}
              tabIndex={0}
              role="region"
              aria-label="Comparison of Temu, Amazon and Walmart"
            >
              <table className="tmu-table">
                <thead>
                  <tr>
                    <th scope="col">
                      <span style={{ fontWeight: 600, color: "#c9d6f7" }}>Topic</span>
                    </th>
                    <th scope="col" className="hl">
                      Temu
                    </th>
                    <th scope="col">Amazon</th>
                    <th scope="col">Walmart</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((r) => (
                    <tr key={r.label}>
                      <th scope="row">{r.label}</th>
                      <td className="hl">
                        <CellView c={r.temu} />
                      </td>
                      <td>
                        <CellView c={r.amazon} />
                      </td>
                      <td>
                        <CellView c={r.walmart} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 18, fontSize: 14, color: "var(--color-text-light)" }}>
              Last reviewed: November 2026. More background on the Temu program:{" "}
              <Ext href={SRC.shipstation}>ShipStation seller guide</Ext>
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <div className="tmu-faq">
            <div className="tmu-faq-side">
              <Reveal from="left">
                <span className="g-eyebrow">FAQ</span>
                <h2 className="g-h2" style={{ marginTop: 18 }}>
                  Temu seller questions, <span className="mark-amber">answered straight.</span>
                </h2>
                <p className="g-lead" style={{ marginTop: 22, maxWidth: 480 }}>
                  If yours is not here, message us on WhatsApp. We reply 24/7.
                </p>
                <div style={{ marginTop: 30 }}>
                  <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-navy">
                    <FaWhatsapp aria-hidden="true" /> Ask on WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
            <TemuFaqList />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-blue on-dark" style={{ position: "relative", overflow: "hidden", padding: "clamp(56px, 6vw, 96px) 0" }}>
        <div aria-hidden="true" className="blob" style={{ width: 420, height: 420, right: "-100px", top: "-160px", background: "rgba(255,178,26,0.35)" }} />
        <div className="container-main" style={{ position: "relative" }}>
          <Reveal from="zoom">
            <div className="tmu-cta">
              <div style={{ minWidth: 0, flex: "1 1 560px" }}>
                <h2 className="g-h2">
                  See if Temu makes <span className="shine-text">profit</span> for your products.
                </h2>
                <p style={{ marginTop: 18, fontSize: "clamp(17px, 1.4vw, 21px)", lineHeight: 1.55, color: "#fff", maxWidth: 700 }}>
                  Answer a few quick questions. A manager reviews them and replies with a plan for your store. No
                  contract. Cancel anytime.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link href="/profit-check" className="btn-accent">
                  Start the 2-minute Profit Check <FaArrowRight className="btn-arrow" aria-hidden="true" />
                </Link>
                <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
                  <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
