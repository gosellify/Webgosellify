import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaTimes, FaWhatsapp } from "react-icons/fa";
import { BrandName } from "@/components/brand/Logo";
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
      {children}
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

type Manage = { title: string; desc: string; href?: string; linkLabel?: string };

const manage: Manage[] = [
  {
    title: "Account application help",
    desc: "We check your business details and documents and walk you through the Seller Center sign-up. Temu makes the decision.",
    href: "/services/seller-account-setup",
    linkLabel: "Seller account setup",
  },
  {
    title: "Product selection",
    desc: "We look for products that suit the Temu shopper and still leave profit after product cost, shipping and Temu's terms.",
  },
  {
    title: "Listings",
    desc: "Titles, images, attributes and variations, added one by one or in bulk, and fixed when a listing gets flagged.",
  },
  {
    title: "Pricing",
    desc: "Prices set from your real landed cost. We review them as costs and competition change, so you do not sell at a loss.",
    href: "/tools/profit-calculator",
    linkLabel: "Try the profit calculator",
  },
  {
    title: "Order fulfilment",
    desc: "Orders are picked, packed and shipped from stock in the US, and tracking goes back to the order.",
    href: "/services/3pl-warehouse",
    linkLabel: "3PL and warehousing",
  },
  {
    title: "Customer service",
    desc: "Buyer messages, returns and refund requests are answered by our team.",
  },
  {
    title: "Account health",
    desc: "We watch late shipments, tracking, listing issues and policy notices daily and act before they grow.",
  },
  {
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
.tmu-ext { color: var(--color-primary); font-weight: 600; text-decoration: underline; text-underline-offset: 3px; overflow-wrap: anywhere; }
.tmu-ext:hover { color: var(--color-dark); }
.tmu-hero { display: grid; grid-template-columns: minmax(0, 1fr); gap: 36px 56px; align-items: start; }
@media (min-width: 1040px) { .tmu-hero { grid-template-columns: minmax(0, 6fr) minmax(0, 5fr); } }
.tmu-two { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr)); gap: 32px 56px; }
.tmu-list { margin: 0; padding-left: 20px; display: grid; gap: 10px; color: var(--color-text-light); }
.tmu-plain { list-style: none; margin: 0; padding: 0; }
.tmu-plain li { display: flex; gap: 12px; align-items: flex-start; padding: 11px 0; border-top: 1px solid var(--color-line); }
.tmu-manage { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); column-gap: 56px; }
.tmu-mrow { padding: 16px 0; border-top: 1px solid var(--color-line); }
.tmu-table { width: 100%; border-collapse: collapse; background: #fff; }
.tmu-table th, .tmu-table td { padding: 14px 16px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--color-line); font-size: 15px; line-height: 1.5; }
.tmu-table thead th { background: var(--color-light-gray); color: var(--color-dark); font-weight: 700; white-space: nowrap; }
.tmu-table tbody th { font-weight: 700; color: var(--color-dark); }
.tmu-table td { color: var(--color-text-light); }
.tmu-table tbody tr:last-child th, .tmu-table tbody tr:last-child td { border-bottom: 0; }
.tmu-frame { border: 1px solid var(--color-line); border-radius: 10px; overflow: hidden; background: #fff; }
`;

function CellView({ c }: { c: Cell }) {
  return (
    <>
      {c.text}
      {c.link ? (
        <span style={{ display: "block", marginTop: 6, fontSize: 14 }}>
          <Ext href={c.link.href}>{c.link.label}</Ext>
        </span>
      ) : null}
      {c.internal ? (
        <span style={{ display: "block", marginTop: 6, fontSize: 14 }}>
          <Link href={c.internal.href} className="tmu-ext">
            {c.internal.label}
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
      <section style={{ background: "#fff", padding: "clamp(36px, 5vw, 64px) 0 clamp(48px, 6vw, 80px)" }}>
        <div className="container-main">
          <div className="tmu-hero">
            <div style={{ minWidth: 0 }}>
              <span className="g-eyebrow">Temu store management</span>
              <h1 className="g-h1" style={{ marginTop: 10 }}>
                Temu store management for sellers with stock in the US
              </h1>
              <p className="g-lead" style={{ marginTop: 16 }}>
                <BrandName /> manages your Temu store for you: account application help, product selection, listings,
                pricing, order fulfilment, customer service and account health. It is for sellers who hold, or will
                hold, inventory in the US. Our US warehouses can store, prep and ship it.
              </p>
              <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link href="/profit-check" className="btn-primary">
                  Check my profit <FaArrowRight aria-hidden="true" />
                </Link>
                <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FaWhatsapp aria-hidden="true" /> Ask on WhatsApp
                </a>
              </div>
              <ul className="tmu-list" style={{ marginTop: 26 }}>
                <li>US inventory only.</li>
                <li>No dropshipping on Temu.</li>
                <li>You own the account, the stock and the payouts.</li>
              </ul>
              <p className="typo-small" style={{ marginTop: 18 }}>
                We are an independent agency. We are not part of Temu and we cannot promise that Temu will approve an
                application. Last reviewed: November 2026.
              </p>
            </div>
            <figure style={{ minWidth: 0, margin: 0 }}>
              <div className="tmu-frame">
                <img
                  src="/images/portal/store-overview.jpg"
                  width={1228}
                  height={690}
                  alt="Store overview screen of the Gosellify Portal showing sales, orders, units and a daily sales chart for a Walmart store"
                  loading="eager"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </div>
              <figcaption className="typo-small" style={{ marginTop: 10 }}>
                The Gosellify Portal, from our own Walmart store. Screenshot taken November 23, 2026. This is not a Temu
                screen. We track every managed store in the same portal.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* How selling on Temu works */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <h2 className="g-h2">How selling on Temu works</h2>
          <p className="g-lead" style={{ marginTop: 12, maxWidth: 760 }}>
            There are two models people talk about when they say &quot;sell on Temu&quot;. Only one of them matters for
            a seller with stock in the US.
          </p>

          <div className="tmu-two" style={{ marginTop: 32 }}>
            <div style={{ minWidth: 0 }}>
              <p className="typo-small" style={{ fontWeight: 700, color: "var(--color-primary)" }}>The model we manage</p>
              <h3 className="g-h3" style={{ marginTop: 4 }}>
                Local seller: you hold stock in the US
              </h3>
              <p style={{ marginTop: 10, color: "var(--color-text-light)" }}>
                Temu&apos;s Local Seller Program is for eligible local businesses that sell through local warehousing
                and delivery. You register in Seller Center, list your products, and orders ship from inventory that
                is already in the country.
              </p>
              <ul className="tmu-list" style={{ marginTop: 14 }}>
                <li>
                  Temu&apos;s US seller page shows three sign-up steps: create an account, complete the application,
                  get the result. <Ext href={SRC.sellerCenter}>Temu Seller Center</Ext>
                </li>
                <li>
                  The same page says Temu does not provide logistics services directly, so shipping is on the seller
                  or a logistics partner.
                </li>
                <li>
                  Temu teaches registration, products, orders, logistics and returns in its own academy.{" "}
                  <Ext href={SRC.academy}>Temu Seller Academy</Ext>
                </li>
              </ul>
            </div>

            <div style={{ minWidth: 0 }}>
              <p className="typo-small" style={{ fontWeight: 700 }}>Not what we manage</p>
              <h3 className="g-h3" style={{ marginTop: 4 }}>
                Fully managed: goods shipped from China
              </h3>
              <p style={{ marginTop: 10, color: "var(--color-text-light)" }}>
                This is the model Temu became known for. Suppliers, mostly factories in China, hand goods to Temu, and
                the goods ship from China to the shopper. It is built for manufacturers, not for a US seller with
                local stock.
              </p>
              <ul className="tmu-list" style={{ marginTop: 14 }}>
                <li>
                  Caixin reported in May 2025 that Temu stopped offering this model for shipments to US buyers.{" "}
                  <Ext href={SRC.caixin}>Caixin Global</Ext>
                </li>
                <li>
                  Temu&apos;s seller site has a separate sign-up path for sellers registered in the Chinese Mainland
                  or Hong Kong.
                </li>
                <li>
                  Dropshipping is a third idea people ask about. One trade guide says Temu does not officially
                  support it, and we do not offer it. <Ext href={SRC.worldfirst}>WorldFirst guide</Ext>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="g-h3" style={{ marginTop: 44 }}>
            How Temu opened to US sellers
          </h3>
          <div
            style={{ marginTop: 14, overflowX: "auto", border: "1px solid var(--color-line)", borderRadius: 10, background: "#fff" }}
            tabIndex={0}
            role="region"
            aria-label="Timeline of Temu opening to US sellers"
          >
            <table className="tmu-table" style={{ minWidth: 640 }}>
              <thead>
                <tr>
                  <th scope="col">When</th>
                  <th scope="col">What changed</th>
                  <th scope="col">Source</th>
                </tr>
              </thead>
              <tbody>
                {moments.map((m) => (
                  <tr key={m.when}>
                    <th scope="row" style={{ whiteSpace: "nowrap" }}>{m.when}</th>
                    <td>{m.what}</td>
                    <td>
                      <Ext href={m.src.href}>{m.src.label}</Ext>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="typo-small" style={{ marginTop: 12, maxWidth: 760 }}>
            Programs, rules and fees change. Always confirm the current terms in{" "}
            <Ext href={SRC.sellerCenter}>Temu Seller Center</Ext> before you apply or list. Last reviewed: November
            2026.
          </p>
        </div>
      </section>

      {/* What we manage */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <h2 className="g-h2">What we manage for you</h2>
          <p className="g-lead" style={{ marginTop: 12, maxWidth: 680 }}>
            The same daily work our team does for Amazon and Walmart stores, set up for a Temu seller account.
          </p>
          <div className="tmu-manage" style={{ marginTop: 28 }}>
            {manage.map((m) => (
              <div key={m.title} className="tmu-mrow">
                <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.4 }}>{m.title}</h3>
                <p style={{ marginTop: 4, fontSize: 16, color: "var(--color-text-light)" }}>
                  {m.desc}
                  {m.href && m.linkLabel ? (
                    <>
                      {" "}
                      <Link href={m.href} className="tmu-ext">
                        {m.linkLabel}
                      </Link>
                    </>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <h2 className="g-h2">Who it fits, and who it does not</h2>
          <div className="tmu-two" style={{ marginTop: 28 }}>
            <div style={{ minWidth: 0 }}>
              <h3 className="g-h3">A good fit</h3>
              <ul className="tmu-plain" style={{ marginTop: 12 }}>
                {fits.map((t) => (
                  <li key={t}>
                    <FaCheck aria-hidden="true" style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 6, fontSize: 14 }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ minWidth: 0 }}>
              <h3 className="g-h3">Not a fit</h3>
              <ul className="tmu-plain" style={{ marginTop: 12 }}>
                {noFits.map((t) => (
                  <li key={t}>
                    <FaTimes aria-hidden="true" style={{ color: "var(--color-text-light)", flexShrink: 0, marginTop: 6, fontSize: 14 }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ marginTop: 24, fontSize: 16, color: "var(--color-text-light)", maxWidth: 760 }}>
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
        </div>
      </section>

      {/* How we start */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-read" style={{ marginLeft: "max(0px, calc((100% - 1200px) / 2))" }}>
          <h2 className="g-h2">How we start</h2>
          <p className="g-lead" style={{ marginTop: 12 }}>
            Five steps from first message to a managed store. Timing depends on Temu&apos;s review and on when your
            stock lands.
          </p>
          <ol style={{ marginTop: 18, paddingLeft: 22 }}>
            {steps.map((s) => (
              <li key={s.title} style={{ marginTop: 14, paddingLeft: 4 }}>
                <strong style={{ color: "var(--color-dark)" }}>{s.title}.</strong>{" "}
                <span style={{ color: "var(--color-text-light)" }}>{s.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Comparison */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <h2 className="g-h2">Temu next to Amazon and Walmart</h2>
          <p className="g-lead" style={{ marginTop: 12, maxWidth: 760 }}>
            A short comparison with facts we could confirm on each marketplace&apos;s own pages. No fee numbers, because
            they change.
          </p>
          <div
            style={{ marginTop: 24, overflowX: "auto", borderRadius: 10, border: "1px solid var(--color-line)", background: "#fff" }}
            tabIndex={0}
            role="region"
            aria-label="Comparison of Temu, Amazon and Walmart"
          >
            <table className="tmu-table" style={{ minWidth: 820 }}>
              <thead>
                <tr>
                  <th scope="col">Topic</th>
                  <th scope="col">Temu</th>
                  <th scope="col">Amazon</th>
                  <th scope="col">Walmart</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" style={{ width: "19%" }}>{r.label}</th>
                    <td>
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
          <p className="typo-small" style={{ marginTop: 12 }}>
            Last reviewed: November 2026. More background on the Temu program:{" "}
            <Ext href={SRC.shipstation}>ShipStation seller guide</Ext>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-read" style={{ marginLeft: "max(0px, calc((100% - 1200px) / 2))" }}>
          <h2 className="g-h2">Temu seller questions</h2>
          <p className="g-lead" style={{ marginTop: 12, marginBottom: 20 }}>
            If yours is not here,{" "}
            <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="tmu-ext">
              message us on WhatsApp
            </a>
            .
          </p>
          <TemuFaqList />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy on-dark" style={{ padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div className="container-main">
          <h2 className="g-h2" style={{ maxWidth: 720 }}>
            See if Temu makes profit for your products
          </h2>
          <p className="g-lead" style={{ marginTop: 12, maxWidth: 640 }}>
            Answer a few quick questions. A manager reviews them and replies with a plan for your store. No contract.
            Cancel anytime.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
            <Link href="/profit-check" className="btn-primary">
              Start the 2-minute Profit Check <FaArrowRight aria-hidden="true" />
            </Link>
            <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
