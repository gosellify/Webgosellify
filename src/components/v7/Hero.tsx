import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { START_HREF, WHATSAPP } from "./data";

const ticks = [
  "Pay from profit, not a big upfront fee",
  "Same-day shipping warehouse",
  "Your own live client portal",
  "No long-term contract",
];

const lines = [
  { label: "Sales", value: "$10,000.00" },
  { label: "Walmart fees", value: "-$1,500.00" },
  { label: "Product cost", value: "-$5,500.00" },
  { label: "Shipping labels", value: "-$1,200.00" },
  { label: "Prep and packing", value: "-$300.00" },
];

/** First screen: what we do, how you pay, one clear next step. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f8ff_0%,#ffffff_100%)]">
      <div className="container-main grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <span className="g-eyebrow">Walmart and Amazon store management agency</span>
          <h1 className="text-[34px] font-extrabold leading-[1.1] text-dark sm:text-[44px] lg:text-[52px]">
            Walmart &amp; Amazon store management services, <span className="text-primary">done for you.</span>
          </h1>
          <p className="max-w-[580px] text-lg text-text-light">
            We run your marketplace store every day: products, listings, pricing, orders, shipping, returns and
            account health. You see every order, cost and dollar in your own Gosellify Portal, and you pay us a share of
            the profit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={START_HREF} className="btn-accent" style={{ fontSize: 17, padding: "17px 28px" }}>
              Get my free store plan <FaArrowRight size={14} />
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 17, padding: "16px 24px" }}>
              <FaWhatsapp size={19} /> Chat on WhatsApp
            </a>
          </div>
          <p className="text-sm text-text-light">3-minute form. We reply within one business day with a plan for your store.</p>
          <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {ticks.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[15px] font-semibold text-dark">
                <FaCheckCircle className="shrink-0 text-primary" size={15} /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_30px_60px_-20px_rgba(10,27,77,0.25)] sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-text-light">Monthly statement</p>
                <p className="text-lg font-extrabold text-dark">Your store · October</p>
              </div>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-dark">Example</span>
            </div>
            <div className="mt-6 flex flex-col divide-y divide-line">
              {lines.map((l) => (
                <div key={l.label} className="flex justify-between py-3 text-[15px]">
                  <span className="text-text-light">{l.label}</span>
                  <span className="font-semibold tabular-nums text-dark">{l.value}</span>
                </div>
              ))}
              <div className="flex justify-between py-3 text-[16px] font-extrabold text-dark">
                <span>Profit</span>
                <span className="tabular-nums">$1,500.00</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-primary-light p-4">
                <p className="text-xs font-bold text-text-light">You keep (60%)</p>
                <p className="text-2xl font-extrabold tabular-nums text-primary">$900</p>
              </div>
              <div className="rounded-2xl bg-light-gray p-4">
                <p className="text-xs font-bold text-text-light">Gosellify share (40%)</p>
                <p className="text-2xl font-extrabold tabular-nums text-dark">$600</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-text-light">
              Example only. Your share is agreed before we start. A month with a loss has no share, and the loss carries into
              next month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
