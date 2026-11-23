"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { FaArrowLeft, FaArrowRight, FaCheck, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const ENDPOINT = process.env.NEXT_PUBLIC_LEADS_ENDPOINT || "https://portal.gosellify.com/api/leads";
const WHATSAPP_NUMBER = "13073938789";

type Opt = { value: string; label: string; sub?: string };

const NEEDS: Opt[] = [
  { value: "manage", label: "Run my existing store", sub: "I have a seller account and want it managed" },
  { value: "start", label: "Start a new store", sub: "I want to start selling and need the full setup" },
  { value: "setup", label: "Seller account, LLC or EIN setup", sub: "Help me open the company or the seller account" },
  { value: "reinstate", label: "Get a suspended account back", sub: "My account is suspended or deactivated" },
  { value: "warehouse", label: "Prep and shipping (3PL)", sub: "I need a warehouse to prep and ship orders" },
  { value: "shopify", label: "Shopify store build or redesign", sub: "Build, fix or grow a Shopify site" },
];

const MARKETS: Opt[] = [
  { value: "walmart", label: "Walmart" },
  { value: "amazon", label: "Amazon" },
  { value: "temu", label: "Temu" },
  { value: "ebay", label: "eBay" },
  { value: "etsy", label: "Etsy" },
  { value: "shopify", label: "Shopify" },
  { value: "tiktok", label: "TikTok Shop" },
  { value: "unsure", label: "Not sure yet" },
];

const ACCOUNT_STATUS: Opt[] = [
  { value: "selling", label: "Approved and selling" },
  { value: "approved_no_sales", label: "Approved, no sales yet" },
  { value: "pending", label: "Applied, waiting for approval" },
  { value: "none", label: "No account yet" },
  { value: "suspended", label: "Suspended or deactivated" },
];

const SALES: Opt[] = [
  { value: "0", label: "No sales yet" },
  { value: "lt5k", label: "Under $5,000 a month" },
  { value: "5-20k", label: "$5,000 - $20,000 a month" },
  { value: "20-50k", label: "$20,000 - $50,000 a month" },
  { value: "50k+", label: "Over $50,000 a month" },
];

const CAPITAL: Opt[] = [
  { value: "lt3k", label: "Under $3,000" },
  { value: "3-5k", label: "$3,000 - $5,000" },
  { value: "5-10k", label: "$5,000 - $10,000" },
  { value: "10-25k", label: "$10,000 - $25,000" },
  { value: "25k+", label: "Over $25,000" },
];

const MODEL: Opt[] = [
  { value: "dropship", label: "Buy after the order (2-step / dropshipping)" },
  { value: "wholesale", label: "Wholesale or bulk stock" },
  { value: "private_label", label: "My own brand / private label" },
  { value: "fba_wfs", label: "FBA or WFS (marketplace warehouse)" },
  { value: "advise", label: "Advise me" },
];

const COMPANY: Opt[] = [
  { value: "us_llc_ein", label: "US LLC with EIN" },
  { value: "us_person", label: "US person, no company yet" },
  { value: "non_us_company", label: "Company outside the US" },
  { value: "nothing", label: "No company yet, outside the US" },
];

const TIMELINE: Opt[] = [
  { value: "now", label: "Right away" },
  { value: "2w", label: "In the next 2 weeks" },
  { value: "1m", label: "Within a month" },
  { value: "research", label: "Just researching" },
];

const CONTACT_WAY: Opt[] = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "call", label: "Phone call" },
  { value: "email", label: "Email" },
];

const HEARD: Opt[] = [
  { value: "google", label: "Google search" },
  { value: "youtube", label: "YouTube" },
  { value: "social", label: "Facebook / Instagram / LinkedIn" },
  { value: "fiverr", label: "Fiverr" },
  { value: "referral", label: "A friend or client" },
  { value: "other", label: "Other" },
];

type Answers = {
  need: string;
  markets: string[];
  accountStatus: string;
  sales: string;
  storeAge: string;
  suspendedOn: string;
  suspensionReason: string;
  capital: string;
  model: string;
  company: string;
  timeline: string;
  goal: string;
};

type Contact = {
  name: string;
  email: string;
  phone: string;
  country: string;
  storeLink: string;
  preferred: string;
  heardFrom: string;
  notes: string;
};

type StepId = "need" | "markets" | "account" | "money" | "company" | "contact";

const EMPTY_ANSWERS: Answers = {
  need: "", markets: [], accountStatus: "", sales: "", storeAge: "", suspendedOn: "", suspensionReason: "",
  capital: "", model: "", company: "", timeline: "", goal: "",
};
const EMPTY_CONTACT: Contact = {
  name: "", email: "", phone: "", country: "", storeLink: "", preferred: "whatsapp", heardFrom: "", notes: "",
};

function labelOf(list: Opt[], v: string) {
  return list.find((o) => o.value === v)?.label ?? v;
}

/** Which steps this visitor sees, based on what they need. */
function stepsFor(need: string): StepId[] {
  if (need === "shopify") return ["need", "money", "contact"];
  if (need === "warehouse") return ["need", "markets", "money", "contact"];
  if (need === "setup") return ["need", "markets", "company", "contact"];
  return ["need", "markets", "account", "money", "company", "contact"];
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function Choice({ opt, selected, onClick, multi }: { opt: Opt; selected: boolean; onClick: () => void; multi?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition-colors ${
        selected ? "border-primary bg-primary-light" : "border-line bg-white hover:border-primary/50"
      }`}
    >
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center ${multi ? "rounded-md" : "rounded-full"} border-2 ${
          selected ? "border-primary bg-primary text-white" : "border-line"
        }`}
      >
        {selected ? <FaCheck size={10} /> : null}
      </span>
      <span>
        <span className="block font-bold text-dark">{opt.label}</span>
        {opt.sub ? <span className="block text-sm text-text-light">{opt.sub}</span> : null}
      </span>
    </button>
  );
}

function Pills({ list, value, onPick }: { list: Opt[]; value: string; onPick: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {list.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onPick(o.value)}
          aria-pressed={value === o.value}
          className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
            value === o.value ? "border-primary bg-primary text-white" : "border-line bg-white text-dark hover:border-primary/50"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-bold text-dark">{label}</span>
      {children}
      {hint ? <span className="text-xs text-text-light">{hint}</span> : null}
    </label>
  );
}

const INPUT = "w-full rounded-xl border-2 border-line bg-white px-4 py-3 text-[15px] text-dark outline-none focus:border-primary";

export default function LeadForm() {
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"form" | "sending" | "done" | "failed">("form");
  const [showErrors, setShowErrors] = useState(false);
  const [hp, setHp] = useState("");
  const startedAt = useRef<number>(0);
  const topRef = useRef<HTMLDivElement>(null);
  const tracking = useRef<Record<string, string>>({});

  useEffect(() => {
    startedAt.current = Date.now();
    const params = new URLSearchParams(window.location.search);
    const t: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"].forEach((k) => {
      const v = params.get(k);
      if (v) t[k] = v.slice(0, 200);
    });
    if (document.referrer) t.referrer = document.referrer.slice(0, 300);
    const need = params.get("need");
    if (need && NEEDS.some((n) => n.value === need)) setAnswers((a) => ({ ...a, need }));
    const market = params.get("marketplace");
    if (market && MARKETS.some((m) => m.value === market)) setAnswers((a) => ({ ...a, markets: [market] }));
    tracking.current = t;
  }, []);

  const steps = useMemo(() => stepsFor(answers.need), [answers.need]);
  const step = steps[Math.min(index, steps.length - 1)];
  const isLast = index >= steps.length - 1;

  const set = <K extends keyof Answers>(k: K, v: Answers[K]) => setAnswers((a) => ({ ...a, [k]: v }));
  const setC = <K extends keyof Contact>(k: K, v: Contact[K]) => setContact((c) => ({ ...c, [k]: v }));

  const accountSuspended = answers.need === "reinstate" || answers.accountStatus === "suspended";
  const hasStore = answers.accountStatus === "selling" || answers.accountStatus === "approved_no_sales";

  const stepValid = (s: StepId): boolean => {
    switch (s) {
      case "need":
        return !!answers.need;
      case "markets":
        return answers.markets.length > 0;
      case "account":
        if (!answers.accountStatus) return false;
        if (answers.accountStatus === "selling" && !answers.sales) return false;
        return true;
      case "money":
        return answers.need === "shopify" ? !!answers.timeline : !!answers.capital && !!answers.timeline;
      case "company":
        return !!answers.company;
      case "contact":
        return (
          contact.name.trim().length > 1 &&
          EMAIL_RE.test(contact.email.trim()) &&
          contact.phone.replace(/\D/g, "").length >= 7 &&
          contact.country.trim().length > 1
        );
    }
  };

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const next = () => {
    if (!stepValid(step)) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    setIndex((i) => Math.min(i + 1, steps.length - 1));
    scrollTop();
  };
  const back = () => {
    setShowErrors(false);
    setIndex((i) => Math.max(i - 1, 0));
    scrollTop();
  };

  const toggleMarket = (v: string) => {
    const has = answers.markets.includes(v);
    if (has) return set("markets", answers.markets.filter((m) => m !== v));
    if (v === "unsure") return set("markets", ["unsure"]);
    set("markets", [...answers.markets.filter((m) => m !== "unsure"), v]);
  };

  const summary = useMemo(() => {
    const lines = [
      `Need: ${labelOf(NEEDS, answers.need)}`,
      answers.markets.length ? `Marketplaces: ${answers.markets.map((m) => labelOf(MARKETS, m)).join(", ")}` : "",
      answers.accountStatus ? `Account: ${labelOf(ACCOUNT_STATUS, answers.accountStatus)}` : "",
      answers.sales ? `Monthly sales: ${labelOf(SALES, answers.sales)}` : "",
      answers.capital ? `Capital: ${labelOf(CAPITAL, answers.capital)}` : "",
      answers.timeline ? `Start: ${labelOf(TIMELINE, answers.timeline)}` : "",
      contact.name ? `Name: ${contact.name}` : "",
    ];
    return lines.filter(Boolean).join("\n");
  }, [answers, contact.name]);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Gosellify, I just filled the store form.\n${summary}`)}`;

  const submit = async () => {
    if (!stepValid("contact")) {
      setShowErrors(true);
      return;
    }
    setPhase("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "website-get-started",
          page: window.location.pathname,
          answers,
          contact,
          tracking: tracking.current,
          elapsedMs: Date.now() - startedAt.current,
          website: hp,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setPhase("done");
      scrollTop();
    } catch {
      setPhase("failed");
    }
  };

  if (phase === "done") {
    return (
      <div ref={topRef} className="rounded-3xl border border-line bg-white p-8 text-center shadow-sm sm:p-12">
        <FaCheckCircle className="mx-auto text-primary" size={48} />
        <h2 className="mt-4 text-2xl font-extrabold text-dark">Thank you, {contact.name.split(" ")[0] || "we got it"}!</h2>
        <p className="mx-auto mt-3 max-w-[480px] text-text-light">
          Your answers are with our team. We will reach you by {labelOf(CONTACT_WAY, contact.preferred).toLowerCase()} within one
          business day with a plan for your store.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-accent mt-6 inline-flex">
          <FaWhatsapp size={18} /> Want a faster reply? Message us on WhatsApp
        </a>
      </div>
    );
  }

  const total = steps.length;
  const err = showErrors && !stepValid(step);

  return (
    <div ref={topRef} className="scroll-mt-28 rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm font-semibold text-text-light">
          <span>Step {index + 1} of {total}</span>
          <span>About 3 minutes</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-light-gray">
          <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
      </div>

      {step === "need" && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold text-dark">What do you need help with?</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {NEEDS.map((o) => (
              <Choice key={o.value} opt={o} selected={answers.need === o.value} onClick={() => setAnswers((x) => ({ ...x, need: o.value, accountStatus: o.value === "reinstate" ? "suspended" : x.accountStatus === "suspended" ? "" : x.accountStatus }))} />
            ))}
          </div>
        </div>
      )}

      {step === "markets" && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold text-dark">Which marketplaces?</h2>
          <p className="text-text-light">Pick all that apply.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {MARKETS.map((o) => (
              <Choice key={o.value} opt={o} multi selected={answers.markets.includes(o.value)} onClick={() => toggleMarket(o.value)} />
            ))}
          </div>
        </div>
      )}

      {step === "account" && (
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold text-dark">Where is your seller account today?</h2>
          <Pills list={ACCOUNT_STATUS} value={answers.accountStatus} onPick={(v) => set("accountStatus", v)} />
          {answers.accountStatus === "selling" && (
            <Field label="Roughly how much does the store sell each month?">
              <Pills list={SALES} value={answers.sales} onPick={(v) => set("sales", v)} />
            </Field>
          )}
          {hasStore && (
            <Field label="How old is the account?" hint="Optional">
              <Pills
                list={[
                  { value: "lt3m", label: "Under 3 months" },
                  { value: "3-12m", label: "3-12 months" },
                  { value: "1y+", label: "Over a year" },
                ]}
                value={answers.storeAge}
                onPick={(v) => set("storeAge", v)}
              />
            </Field>
          )}
          {accountSuspended && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="When was it suspended?" hint="Optional">
                <input type="date" className={INPUT} value={answers.suspendedOn} onChange={(e) => set("suspendedOn", e.target.value)} />
              </Field>
              <Field label="What reason did the marketplace give?" hint="Optional">
                <input className={INPUT} maxLength={200} value={answers.suspensionReason} onChange={(e) => set("suspensionReason", e.target.value)} placeholder="e.g. late shipments, IP complaint" />
              </Field>
            </div>
          )}
        </div>
      )}

      {step === "money" && (
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold text-dark">
            {answers.need === "shopify" ? "When do you want to start?" : "Budget and timing"}
          </h2>
          {answers.need !== "shopify" && (
            <Field label="How much can you put into products (working capital)?" hint="Marketplaces pay after delivery, so this money buys the first orders.">
              <Pills list={CAPITAL} value={answers.capital} onPick={(v) => set("capital", v)} />
            </Field>
          )}
          {answers.need !== "shopify" && answers.need !== "warehouse" && (
            <Field label="Which way do you want to sell?" hint="Optional">
              <Pills list={MODEL} value={answers.model} onPick={(v) => set("model", v)} />
            </Field>
          )}
          <Field label="When do you want to start?">
            <Pills list={TIMELINE} value={answers.timeline} onPick={(v) => set("timeline", v)} />
          </Field>
          <Field label="What would make this a win for you?" hint="Optional. For example: $2,000 profit a month, or a hands-off store.">
            <input className={INPUT} maxLength={200} value={answers.goal} onChange={(e) => set("goal", e.target.value)} />
          </Field>
        </div>
      )}

      {step === "company" && (
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold text-dark">Do you have a company?</h2>
          <p className="text-text-light">Walmart and Amazon ask for business details. This tells us what setup you need.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {COMPANY.map((o) => (
              <Choice key={o.value} opt={o} selected={answers.company === o.value} onClick={() => set("company", o.value)} />
            ))}
          </div>
        </div>
      )}

      {step === "contact" && (
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-extrabold text-dark">Where should we send your plan?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name">
              <input className={INPUT} autoComplete="name" maxLength={100} value={contact.name} onChange={(e) => setC("name", e.target.value)} />
            </Field>
            <Field label="Email">
              <input className={INPUT} type="email" autoComplete="email" maxLength={150} value={contact.email} onChange={(e) => setC("email", e.target.value)} />
            </Field>
            <Field label="WhatsApp or phone number" hint="With country code, e.g. +1 307 393 8789">
              <input className={INPUT} type="tel" autoComplete="tel" maxLength={30} value={contact.phone} onChange={(e) => setC("phone", e.target.value)} />
            </Field>
            <Field label="Country you live in">
              <input className={INPUT} autoComplete="country-name" maxLength={60} value={contact.country} onChange={(e) => setC("country", e.target.value)} />
            </Field>
          </div>
          <Field label="Store link" hint="Optional. Your Walmart, Amazon or Shopify store URL.">
            <input className={INPUT} type="url" maxLength={300} value={contact.storeLink} onChange={(e) => setC("storeLink", e.target.value)} />
          </Field>
          <Field label="Best way to reach you">
            <Pills list={CONTACT_WAY} value={contact.preferred} onPick={(v) => setC("preferred", v)} />
          </Field>
          <Field label="How did you hear about us?" hint="Optional">
            <Pills list={HEARD} value={contact.heardFrom} onPick={(v) => setC("heardFrom", v)} />
          </Field>
          <Field label="Anything else we should know?" hint="Optional">
            <textarea className={`${INPUT} min-h-[96px]`} maxLength={1000} value={contact.notes} onChange={(e) => setC("notes", e.target.value)} />
          </Field>
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Website <input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
            </label>
          </div>
          <p className="text-xs text-text-light">
            We use your answers only to plan your store and contact you. We never share them. See our{" "}
            <a href="/privacy-policy" className="underline">privacy policy</a>.
          </p>
        </div>
      )}

      {err ? (
        <p role="alert" className="mt-5 rounded-xl bg-accent/15 px-4 py-3 text-sm font-semibold text-dark">
          {step === "contact"
            ? "Please add your name, a valid email, a phone number and your country."
            : "Please choose an answer to continue."}
        </p>
      ) : null}

      {phase === "failed" ? (
        <div role="alert" className="mt-5 rounded-xl bg-accent/15 px-4 py-3 text-sm text-dark">
          <p className="font-semibold">We could not send the form. Please try again, or send your answers on WhatsApp.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-bold text-primary">
            <FaWhatsapp /> Send on WhatsApp
          </a>
        </div>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-3">
        {index > 0 ? (
          <button type="button" onClick={back} className="btn-outline" style={{ padding: "13px 20px" }}>
            <FaArrowLeft size={12} /> Back
          </button>
        ) : (
          <span />
        )}
        {isLast ? (
          <button type="button" onClick={submit} disabled={phase === "sending"} className="btn-accent" style={{ padding: "15px 26px" }}>
            {phase === "sending" ? "Sending..." : "Get my free plan"} <FaArrowRight size={13} />
          </button>
        ) : (
          <button type="button" onClick={next} className="btn-primary" style={{ padding: "15px 26px" }}>
            Continue <FaArrowRight size={13} />
          </button>
        )}
      </div>
    </div>
  );
}
