import Link from "next/link";
import {
  FaAmazon,
  FaArrowRight,
  FaBalanceScale,
  FaBoxOpen,
  FaCheck,
  FaFileSignature,
  FaShopify,
  FaStore,
  FaTimes,
  FaUnlockAlt,
  FaWarehouse,
} from "react-icons/fa";
import { SiEbay, SiEtsy } from "react-icons/si";
import Reveal from "@/components/motion/Reveal";
import { PROOF, START_HREF } from "./data";

/* ----------------------------------------------------------------- Proof */

export function ProofBand() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-main grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
        {PROOF.map((p, i) => (
          <Reveal key={p.label} delay={i * 80} className="flex flex-col gap-1 border-l-2 border-accent pl-4">
            <span className="text-3xl font-extrabold text-dark sm:text-4xl">{p.value}</span>
            <span className="text-[15px] font-semibold text-dark">{p.label}</span>
            <span className="text-xs text-text-light">{p.note}</span>
          </Reveal>
        ))}
      </div>
      <p className="container-main pb-6 text-xs text-text-light">
        Order and sales figures come from the Gosellify Portal across the Walmart stores we manage.
      </p>
    </section>
  );
}

/* -------------------------------------------------------------- Services */

const services = [
  { icon: FaStore, title: "Walmart store management", href: "/services/walmart-management", text: "Daily operations for your Walmart Marketplace store: products, listings, pricing, orders, returns and account health." },
  { icon: FaBoxOpen, title: "Walmart WFS", href: "/services/walmart-wfs", text: "Walmart Fulfillment Services: inventory planning, prep and inbound shipments, done for you." },
  { icon: FaAmazon, title: "Amazon store management", href: "/services/amazon", text: "Amazon FBA and FBM management: product research, listings, PPC, pricing and account health." },
  { icon: FaStore, title: "Temu store management", href: "/services/temu", text: "Your Temu seller store run for you, with US stock shipped from our warehouse." },
  { icon: SiEbay, title: "eBay and Etsy stores", href: "/services/ebay-dropshipping", text: "Listings, orders and customer service for eBay and Etsy shops." },
  { icon: FaShopify, title: "Shopify stores", href: "/services/shopify", text: "Shopify store builds, redesigns, apps and the day-to-day running of your shop." },
  { icon: FaFileSignature, title: "Seller account setup, LLC and EIN", href: "/services/seller-account-setup", text: "Company formation, EIN and help with the Walmart or Amazon seller application." },
  { icon: FaUnlockAlt, title: "Account reinstatement", href: "/services/amazon-reinstatement", text: "Suspended account? We find the root cause and write a clear plan of action." },
  { icon: FaWarehouse, title: "Prep and same-day shipping", href: "/services/3pl-warehouse", text: "Receiving, prep, packing and same-day shipping for marketplace orders." },
];

export function Services() {
  return (
    <section id="services" className="bg-light-gray py-20">
      <div className="container-main">
        <div className="max-w-[720px]">
          <span className="g-eyebrow">Ecommerce management services</span>
          <h2 className="mt-3 text-3xl font-extrabold text-dark sm:text-4xl">One team for your whole marketplace business</h2>
          <p className="mt-3 text-lg text-text-light">
            Walmart and Amazon are our main focus. We also run Temu, eBay, Etsy and Shopify stores, so one team can handle
            every channel you sell on.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 70}>
              <Link href={s.href} className="g-card group flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <s.icon size={20} />
                </span>
                <h3 className="text-lg font-bold text-dark">{s.title}</h3>
                <p className="text-[15px] text-text-light">{s.text}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Learn more <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Who does what */

const ours = [
  "Find products that sell and still leave profit",
  "Create and optimize listings",
  "Set and update prices",
  "Process every order the same day",
  "Buy, prep, pack and ship with tracking",
  "Handle returns and customer messages",
  "Watch account health every day",
  "Send a monthly statement and one invoice",
];
const yours = [
  "Keep the seller account in your name",
  "Fund product purchases (working capital)",
  "Agree the plan and the profit share",
  "Check your numbers in the portal any time",
];

export function WhoDoesWhat() {
  return (
    <section className="py-20">
      <div className="container-main grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="g-eyebrow">Done for you</span>
          <h2 className="mt-3 text-3xl font-extrabold text-dark sm:text-4xl">You own the store. We do the daily work.</h2>
          <p className="mt-3 text-lg text-text-light">
            Clear roles from day one, so nothing falls between two people. This is exactly what we take off your plate.
          </p>
          <Link href={START_HREF} className="btn-accent mt-6 inline-flex" style={{ padding: "15px 24px" }}>
            Get my free store plan <FaArrowRight size={13} />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <Reveal className="rounded-2xl bg-dark p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Gosellify does</p>
            <ul className="mt-4 flex flex-col gap-3">
              {ours.map((t) => (
                <li key={t} className="flex gap-3 text-[15px]">
                  <FaCheck className="mt-1 shrink-0 text-accent" size={13} /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl border border-line bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">You do</p>
            <ul className="mt-4 flex flex-col gap-3">
              {yours.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-dark">
                  <FaCheck className="mt-1 shrink-0 text-primary" size={13} /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Pricing */

const payRules = [
  { title: "A share of real profit", text: "Profit is sales minus marketplace fees, product cost, labels and prep. We take the agreed share of that, not of your sales." },
  { title: "No share on a loss", text: "If a month ends in a loss, you pay no profit share, and the loss is carried into the next month before any share is due." },
  { title: "One statement, one invoice", text: "Early each month you get a statement with every order and cost, and one invoice. Nothing hidden." },
  { title: "Fixed fee when it fits", text: "Some services, like account setup or Shopify builds, are a fixed price. You know the price before we start." },
];

export function HowYouPay() {
  return (
    <section id="pricing" className="bg-light-gray py-20">
      <div className="container-main">
        <div className="max-w-[720px]">
          <span className="g-eyebrow">Profit share pricing</span>
          <h2 className="mt-3 text-3xl font-extrabold text-dark sm:text-4xl">We earn when your store earns</h2>
          <p className="mt-3 text-lg text-text-light">
            Store management is billed as a share of profit, agreed in writing before we start. Here is how it works.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {payRules.map((r, i) => (
            <Reveal key={r.title} delay={i * 70} className="rounded-2xl border border-line bg-white p-6">
              <FaBalanceScale className="text-primary" size={20} />
              <h3 className="mt-3 text-lg font-bold text-dark">{r.title}</h3>
              <p className="mt-2 text-[15px] text-text-light">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Process */

const steps = [
  { n: "01", title: "Tell us about your store", text: "Answer a few questions in our 3-minute form. It tells us your marketplace, account, capital and goals." },
  { n: "02", title: "Free strategy call", text: "Within one business day we call or WhatsApp you with a plan, the right model for your store and the profit share." },
  { n: "03", title: "Setup and first listings", text: "We connect your store to the Gosellify Portal and start listing products, usually in the first 1-2 weeks." },
  { n: "04", title: "We run it, you track it", text: "Our team handles the daily work. You watch orders and profit live, and get one statement each month." },
];

export function Process() {
  return (
    <section className="py-20">
      <div className="container-main">
        <div className="max-w-[720px]">
          <span className="g-eyebrow">How it works</span>
          <h2 className="mt-3 text-3xl font-extrabold text-dark sm:text-4xl">From first message to first order</h2>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="relative rounded-2xl border border-line bg-white p-6">
              <span className="text-4xl font-extrabold text-primary/25">{s.n}</span>
              <h3 className="mt-2 text-lg font-bold text-dark">{s.title}</h3>
              <p className="mt-2 text-[15px] text-text-light">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- Fit */

const goodFit = [
  "You have an approved Walmart or Amazon seller account, or want help getting one",
  "You can put at least $3,000-$5,000 into inventory",
  "You want the store run for you, with full visibility",
  "You think long term: months, not days",
];
const notFit = [
  "You want guaranteed income or a fixed return",
  "You have no working capital for products",
  "You want to sell on someone else's account",
  "You want overnight results",
];

export function Fit() {
  return (
    <section className="bg-dark py-20 text-white">
      <div className="container-main">
        <div className="max-w-[720px]">
          <span className="g-eyebrow on-dark">Is Gosellify right for you?</span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">We are honest about who we can help</h2>
          <p className="mt-3 text-lg text-white/75">We only take stores we believe can make profit. That keeps our results, and yours, real.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="font-bold text-accent">A good fit</p>
            <ul className="mt-4 flex flex-col gap-3">
              {goodFit.map((t) => (
                <li key={t} className="flex gap-3 text-[15px]"><FaCheck className="mt-1 shrink-0 text-accent" size={13} /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="font-bold text-white/80">Not a fit</p>
            <ul className="mt-4 flex flex-col gap-3">
              {notFit.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-white/80"><FaTimes className="mt-1 shrink-0 text-white/50" size={13} /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link href={START_HREF} className="btn-accent mt-8 inline-flex" style={{ padding: "15px 24px" }}>
          Check if my store is a fit <FaArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Marketplace row */

export function MarketplaceRow() {
  const items = [
    { icon: FaStore, name: "Walmart" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaStore, name: "Temu" },
    { icon: SiEbay, name: "eBay" },
    { icon: SiEtsy, name: "Etsy" },
    { icon: FaShopify, name: "Shopify" },
  ];
  return (
    <div className="container-main flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8 text-text-light">
      <span className="text-sm font-semibold">Marketplaces we manage:</span>
      {items.map((m) => (
        <span key={m.name} className="flex items-center gap-2 text-lg font-bold text-dark/80">
          <m.icon size={18} /> {m.name}
        </span>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- Portal */

const portalFeatures = [
  { title: "Every order, live", text: "Orders, stock, prices and returns sync from your store's own connection." },
  { title: "Profit on every order", text: "Product cost, marketplace fees, label and prep are tracked per order." },
  { title: "Monthly statement and invoice", text: "One clear statement each month, the same numbers we bill from." },
  { title: "Account health, daily", text: "Late shipments, listing issues and policy alerts are checked every day." },
];

const sampleRows = [
  { po: "#..4821", item: "Storage bins, 4 pack", sale: "$34.99", profit: "+$7.12" },
  { po: "#..4822", item: "Desk lamp", sale: "$27.49", profit: "+$5.40" },
  { po: "#..4823", item: "Kitchen scale", sale: "$19.99", profit: "+$4.05" },
];

export function PortalSection() {
  return (
    <section className="py-20">
      <div className="container-main grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="g-eyebrow">The Gosellify Portal</span>
          <h2 className="mt-3 text-3xl font-extrabold text-dark sm:text-4xl">See every order, cost and dollar</h2>
          <p className="mt-3 text-lg text-text-light">
            Every client gets a private login to our own portal. No spreadsheets sent once a month: you check your store
            whenever you want.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {portalFeatures.map((f) => (
              <div key={f.title}>
                <h3 className="flex items-center gap-2 font-bold text-dark">
                  <FaCheck className="text-primary" size={13} /> {f.title}
                </h3>
                <p className="mt-1 text-[15px] text-text-light">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Reveal from="right">
          <div className="rounded-3xl bg-dark p-6 text-white shadow-[0_30px_60px_-20px_rgba(10,27,77,0.45)] sm:p-8">
            <div className="flex items-center justify-between">
              <p className="font-bold">Store overview</p>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-bold text-white/70">Sample view</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: "Orders today", v: "38" },
                { k: "Ship by today", v: "12" },
                { k: "Late", v: "0" },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-2xl font-extrabold">{x.v}</p>
                  <p className="text-xs text-white/60">{x.k}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              {sampleRows.map((r) => (
                <div key={r.po} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10">
                  <span className="font-semibold">{r.po}</span>
                  <span className="hidden flex-1 px-4 text-white/70 sm:block">{r.item}</span>
                  <span className="tabular-nums text-white/80">{r.sale}</span>
                  <span className="ml-4 font-bold tabular-nums text-accent">{r.profit}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
