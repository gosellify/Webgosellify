"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaAmazon,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCopy,
  FaEbay,
  FaEnvelope,
  FaEtsy,
  FaExclamationCircle,
  FaLock,
  FaShopify,
  FaStore,
  FaWhatsapp,
} from "react-icons/fa";
import { BrandName } from "@/components/brand/Logo";

const ENDPOINT = process.env.NEXT_PUBLIC_LEADS_ENDPOINT || "";
const WHATSAPP = "https://wa.me/13073938789";
const LEAD_EMAIL = "muhammadjamshed@gosellify.com";
const TOTAL_STEPS = 7;

type IconType = typeof FaStore;

type Option = { value: string; label: string; sub?: string; icon?: IconType };

type Answers = {
  marketplaces: string[];
  account: string;
  model: string;
  capital: string;
  sales: string;
  goal: string;
};

type Contact = {
  name: string;
  email: string;
  phone: string;
  store: string;
  message: string;
};

type SingleKey = "account" | "model" | "capital" | "sales" | "goal";
type ContactKey = keyof Contact;
type RequiredKey = "name" | "email" | "phone";
type Phase = "form" | "manual" | "failed" | "success";

const MARKETPLACES: Option[] = [
  { value: "Amazon", label: "Amazon", sub: "FBA, wholesale or 2-step dropshipping", icon: FaAmazon },
  { value: "Walmart", label: "Walmart", sub: "Marketplace, WFS or wholesale", icon: FaStore },
  { value: "eBay", label: "eBay", sub: "Managed dropshipping store", icon: FaEbay },
  { value: "Shopify", label: "Shopify", sub: "Your own branded store", icon: FaShopify },
  { value: "Etsy", label: "Etsy", sub: "Managed dropshipping store", icon: FaEtsy },
];

const ACCOUNT: Option[] = [
  { value: "Yes, and it is selling", label: "Yes, and it is selling", sub: "Orders are coming in now" },
  { value: "Yes, approved but no sales yet", label: "Yes, approved but no sales yet", sub: "The account is open and ready" },
  { value: "Not yet", label: "Not yet", sub: "I still need an account or store" },
];

const MODEL_MARKET: Option[] = [
  { value: "2-step dropshipping", label: "2-step dropshipping", sub: "No upfront inventory" },
  { value: "Wholesale", label: "Wholesale", sub: "Branded products from distributors" },
  { value: "FBA or WFS", label: "FBA or WFS", sub: "Stored and shipped by the marketplace" },
  { value: "Not sure yet", label: "Not sure yet", sub: "Recommend the best one for me" },
];

const MODEL_SHOPIFY: Option[] = [
  { value: "New dropshipping store", label: "New dropshipping store", sub: "A store built and ready to sell" },
  { value: "Redesign my store", label: "Redesign my store", sub: "A better look that sells more" },
  { value: "Marketing and growth", label: "Marketing and growth", sub: "SEO, ads and more traffic" },
  { value: "Not sure yet", label: "Not sure yet", sub: "Recommend the best one for me" },
];

const CAPITAL: Option[] = [
  { value: "Under $3,000", label: "Under $3,000" },
  { value: "$3,000 to $5,000", label: "$3,000 to $5,000" },
  { value: "$5,000 to $15,000", label: "$5,000 to $15,000" },
  { value: "$15,000 or more", label: "$15,000 or more" },
];

const SALES: Option[] = [
  { value: "No sales yet", label: "No sales yet" },
  { value: "Under $10,000", label: "Under $10,000" },
  { value: "$10,000 to $50,000", label: "$10,000 to $50,000" },
  { value: "Over $50,000", label: "Over $50,000" },
];

const GOAL: Option[] = [
  { value: "Start my first store", label: "Start my first store" },
  { value: "Grow sales on my current store", label: "Grow sales on my current store" },
  { value: "Add another marketplace", label: "Add another marketplace" },
  { value: "Fix account health or a suspension", label: "Fix account health or a suspension" },
];

type StepInfo = { title: string; hint: string };

const STEP_INFO: StepInfo[] = [
  { title: "Where do you want to sell?", hint: "Pick one or more. You can change this later." },
  { title: "Do you have a seller account or store?", hint: "This tells us where to start." },
  { title: "Which business model fits you?", hint: "Not sure? Pick the last option and we will suggest one." },
  {
    title: "How much working capital can you put in?",
    hint: "Marketplaces pay out later, so capital covers product and shipping until then.",
  },
  { title: "What are your monthly sales now?", hint: "A rough number is fine." },
  { title: "What is your main goal?", hint: "Pick the one that matters most right now." },
  { title: "Where should we send your plan?", hint: "A real person on our team reads every Profit Check." },
];

type Tile = { title: string; text: string };

const TILES: Tile[] = [
  {
    title: "Pay from profit",
    text: "No management fee until your store makes profit.",
  },
  {
    title: "No contract, cancel anytime",
    text: "You stay because the store works, not because of paperwork.",
  },
  {
    title: "Your own live dashboard",
    text: "Follow your store in your own dashboard at any time.",
  },
];

const linkButton: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "none",
  border: 0,
  padding: 0,
  font: "inherit",
  fontSize: 15,
  fontWeight: 700,
  color: "var(--color-primary)",
  cursor: "pointer",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fieldError(key: RequiredKey, contact: Contact): string {
  const v = contact[key].trim();
  if (key === "name") {
    if (v.length === 0) return "Enter your full name.";
    if (v.length < 2) return "Your name looks too short. Enter your full name.";
    return "";
  }
  if (key === "email") {
    if (v.length === 0) return "Enter your email address.";
    if (!EMAIL_RE.test(v)) return "This email does not look right. Use a format like name@example.com.";
    return "";
  }
  if (v.length === 0) return "Enter your WhatsApp or phone number.";
  if (v.replace(/\D/g, "").length < 7) return "This number looks too short. Include your country code.";
  return "";
}

function buildSummary(a: Answers, c: Contact): string {
  const lines: string[] = [
    "Gosellify Profit Check",
    "",
    `Name: ${c.name.trim()}`,
    `Email: ${c.email.trim()}`,
    `WhatsApp or phone: ${c.phone.trim()}`,
    `Store name or link: ${c.store.trim() || "Not given"}`,
    "",
    `Wants to sell on: ${a.marketplaces.join(", ")}`,
    `Seller account or store: ${a.account}`,
    `Business model: ${a.model}`,
    `Working capital: ${a.capital}`,
    `Monthly sales now: ${a.sales}`,
    `Main goal: ${a.goal}`,
  ];
  if (c.message.trim()) {
    lines.push("", `Message: ${c.message.trim()}`);
  }
  return lines.join("\n");
}

const CSS = `
.pcf-opt { display: flex; align-items: center; gap: 12px; width: 100%; min-width: 0; text-align: left; padding: 13px 16px; border-radius: 8px; border: 1px solid var(--color-line); background: #fff; color: var(--color-dark); cursor: pointer; font-family: inherit; transition: border-color .15s, background-color .15s; }
.pcf-opt:hover { border-color: var(--color-primary); }
.pcf-opt[aria-pressed="true"] { border-color: var(--color-primary); background: var(--color-light-gray); box-shadow: inset 0 0 0 1px var(--color-primary); }
.pcf-opt .pcf-ico { flex-shrink: 0; display: flex; align-items: center; font-size: 18px; color: var(--color-text-light); }
.pcf-opt[aria-pressed="true"] .pcf-ico { color: var(--color-primary); }
.pcf-opt .pcf-sub { display: block; font-size: 14px; font-weight: 400; line-height: 1.4; margin-top: 2px; color: var(--color-text-light); }
.pcf-mark { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-text-light); background: #fff; font-size: 10px; color: transparent; }
.pcf-mark.sq { border-radius: 4px; }
.pcf-opt[aria-pressed="true"] .pcf-mark { background: var(--color-primary); border-color: var(--color-primary); color: #fff; }
.pcf-input { width: 100%; min-width: 0; padding: 11px 13px; font-size: 16px; font-family: inherit; color: var(--color-dark); background: #fff; border: 1px solid var(--color-line); border-radius: 8px; outline: none; transition: border-color .15s; }
.pcf-input::placeholder { color: var(--color-text-light); opacity: 1; }
.pcf-input:hover { border-color: var(--color-text-light); }
.pcf-input:focus { border-color: var(--color-primary); box-shadow: inset 0 0 0 1px var(--color-primary); }
.pcf-input[aria-invalid="true"] { border-color: var(--color-dark); }
.pcf-next[disabled], .pcf-next[disabled]:hover { background: var(--color-line); border-color: var(--color-line); color: var(--color-dark); cursor: not-allowed; }
.pcf-row { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; padding: 10px 0; border-top: 1px solid var(--color-line); }
`;

type OptionButtonProps = {
  option: Option;
  selected: boolean;
  multi: boolean;
  onPick: (value: string, byPointer: boolean) => void;
  onEnterWhenSelected: () => void;
};

function OptionButton({ option, selected, multi, onPick, onEnterWhenSelected }: OptionButtonProps) {
  const Icon = option.icon;
  return (
    <button
      type="button"
      className="pcf-opt"
      aria-pressed={selected}
      onClick={(e) => onPick(option.value, e.detail > 0)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && selected) {
          e.preventDefault();
          onEnterWhenSelected();
        }
      }}
    >
      <span className={multi ? "pcf-mark sq" : "pcf-mark"} aria-hidden="true">
        <FaCheck />
      </span>
      <span style={{ minWidth: 0, flex: 1 }}>
        <span style={{ display: "block", fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>{option.label}</span>
        {option.sub ? <span className="pcf-sub">{option.sub}</span> : null}
      </span>
      {Icon ? (
        <span className="pcf-ico" aria-hidden="true">
          <Icon />
        </span>
      ) : null}
    </button>
  );
}

type FieldProps = {
  id: string;
  label: string;
  optional?: boolean;
  error: string;
  children: React.ReactNode;
};

function Field({ id, label, optional = false, error, children }: FieldProps) {
  return (
    <div style={{ minWidth: 0 }}>
      <label htmlFor={id} style={{ display: "block", fontSize: 15, fontWeight: 700, color: "var(--color-dark)", marginBottom: 6 }}>
        {label}
        {optional ? <span style={{ fontWeight: 400, color: "var(--color-text-light)" }}> (optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 6, fontSize: 14, fontWeight: 700, lineHeight: 1.4, color: "var(--color-dark)" }}
        >
          <FaExclamationCircle aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }} />
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}

type TicketRow = { label: string; value: string };

function Ticket({ rows, name, done, filled }: { rows: TicketRow[]; name: string; done: boolean; filled: number }) {
  return (
    <div style={{ background: "#fff", border: "1px solid var(--color-line)", borderRadius: 10, padding: "20px 22px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
        <h2 className="g-h3">Your answers</h2>
        <span className="typo-small">{done ? "Ready to send" : `${filled} of ${TOTAL_STEPS} filled`}</span>
      </div>
      <div aria-live="polite">
        {rows.map((r) => (
          <div key={r.label} className="pcf-row">
            <span style={{ fontSize: 14, color: "var(--color-text-light)", flexShrink: 0 }}>{r.label}</span>
            <span
              style={{
                fontSize: 15,
                fontWeight: r.value ? 700 : 400,
                color: r.value ? "var(--color-dark)" : "var(--color-text-light)",
                textAlign: "right",
                minWidth: 0,
                overflowWrap: "anywhere",
              }}
            >
              {r.value || "Not answered yet"}
            </span>
          </div>
        ))}
        <div className="pcf-row">
          <span style={{ fontSize: 14, color: "var(--color-text-light)", flexShrink: 0 }}>Name</span>
          <span
            style={{
              fontSize: 15,
              fontWeight: name.trim() ? 700 : 400,
              color: name.trim() ? "var(--color-dark)" : "var(--color-text-light)",
              textAlign: "right",
              minWidth: 0,
              overflowWrap: "anywhere",
            }}
          >
            {name.trim() || "Not answered yet"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProfitCheckForm() {
  const [step, setStep] = useState<number>(0);
  const [phase, setPhase] = useState<Phase>("form");
  const [sending, setSending] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Answers>({ marketplaces: [], account: "", model: "", capital: "", sales: "", goal: "" });
  const [contact, setContact] = useState<Contact>({ name: "", email: "", phone: "", store: "", message: "" });
  const [touched, setTouched] = useState<Record<RequiredKey, boolean>>({ name: false, email: false, phone: false });
  const [nudge, setNudge] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [copyFailed, setCopyFailed] = useState<boolean>(false);

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const moved = useRef<boolean>(false);
  const advanceTimer = useRef<number | null>(null);
  const copyTimer = useRef<number | null>(null);

  const shopifyOnly = answers.marketplaces.length === 1 && answers.marketplaces[0] === "Shopify";
  const modelOptions = shopifyOnly ? MODEL_SHOPIFY : MODEL_MARKET;

  const errors: Record<RequiredKey, string> = {
    name: fieldError("name", contact),
    email: fieldError("email", contact),
    phone: fieldError("phone", contact),
  };
  const contactValid = !errors.name && !errors.email && !errors.phone;

  const stepValid = (s: number): boolean => {
    if (s === 0) return answers.marketplaces.length > 0;
    if (s === 1) return answers.account !== "";
    if (s === 2) return answers.model !== "";
    if (s === 3) return answers.capital !== "";
    if (s === 4) return answers.sales !== "";
    if (s === 5) return answers.goal !== "";
    return contactValid;
  };

  const filled = [0, 1, 2, 3, 4, 5, 6].filter((s) => stepValid(s)).length;
  const summary = buildSummary(answers, contact);
  const subject = `NEW LEAD | Gosellify Profit Check | ${contact.name.trim()} | ${answers.marketplaces.join(", ")} | ${answers.capital}`;
  const waHref = `${WHATSAPP}?text=${encodeURIComponent(summary)}`;
  const mailHref = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;

  useEffect(() => {
    return () => {
      if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    };
  }, []);

  // After the visitor moves between screens, bring the new question into view and focus it.
  useEffect(() => {
    if (!moved.current) return;
    const top = topRef.current;
    if (top && top.getBoundingClientRect().top < 96) {
      top.scrollIntoView({ block: "start" });
    }
    const h = headingRef.current;
    if (h) h.focus({ preventScroll: true });
  }, [step, phase]);

  const clearAdvance = () => {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  };

  const goTo = (s: number) => {
    clearAdvance();
    moved.current = true;
    setNudge(false);
    setStep(Math.max(0, Math.min(TOTAL_STEPS - 1, s)));
  };

  const next = () => {
    if (!stepValid(step)) {
      setNudge(true);
      return;
    }
    if (step < TOTAL_STEPS - 1) goTo(step + 1);
  };

  const toggleMarketplace = (value: string) => {
    setNudge(false);
    setAnswers((prev) => {
      const has = prev.marketplaces.includes(value);
      const list = has ? prev.marketplaces.filter((m) => m !== value) : [...prev.marketplaces, value];
      const ordered = MARKETPLACES.map((m) => m.value).filter((v) => list.includes(v));
      const wasShopifyOnly = prev.marketplaces.length === 1 && prev.marketplaces[0] === "Shopify";
      const isShopifyOnly = ordered.length === 1 && ordered[0] === "Shopify";
      // The model choices differ for a Shopify-only plan, so an old pick may no longer exist.
      const model = wasShopifyOnly !== isShopifyOnly && prev.model !== "Not sure yet" ? "" : prev.model;
      return { ...prev, marketplaces: ordered, model };
    });
  };

  const pickSingle = (key: SingleKey, value: string, byPointer: boolean) => {
    setNudge(false);
    setAnswers((prev) => ({ ...prev, [key]: value }));
    clearAdvance();
    if (byPointer) {
      const from = step;
      moved.current = true;
      advanceTimer.current = window.setTimeout(() => {
        advanceTimer.current = null;
        setStep((cur) => (cur === from && from < TOTAL_STEPS - 1 ? from + 1 : cur));
      }, 480);
    }
  };

  const setField = (key: ContactKey, value: string) => {
    setContact((prev) => ({ ...prev, [key]: value }));
  };

  const touch = (key: RequiredKey) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const firstIncomplete = (): number => {
    for (let s = 0; s < TOTAL_STEPS - 1; s += 1) {
      if (!stepValid(s)) return s;
    }
    return -1;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setTouched({ name: true, email: true, phone: true });
    if (!contactValid) {
      const firstBad: RequiredKey = errors.name ? "name" : errors.email ? "email" : "phone";
      const el = document.getElementById(`pc-${firstBad}`);
      if (el) el.focus();
      return;
    }
    const missing = firstIncomplete();
    if (missing >= 0) {
      goTo(missing);
      setNudge(true);
      return;
    }
    moved.current = true;
    if (!ENDPOINT) {
      setPhase("manual");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "profit-check", submittedAt: new Date().toISOString(), answers, contact }),
      });
      setPhase(res.ok ? "success" : "failed");
    } catch {
      setPhase("failed");
    } finally {
      setSending(false);
    }
  };

  const copyAnswers = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setCopyFailed(false);
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopyFailed(true);
    }
  };

  const backToEdit = () => {
    moved.current = true;
    setPhase("form");
    setStep(TOTAL_STEPS - 1);
  };

  // Enter continues when the step is valid. Buttons, links and fields keep their own Enter behaviour.
  const nextRef = useRef<() => void>(() => undefined);
  useEffect(() => {
    nextRef.current = next;
  });
  const choosing = phase === "form" && step < TOTAL_STEPS - 1;
  useEffect(() => {
    if (!choosing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || e.defaultPrevented) return;
      const el = e.target instanceof HTMLElement ? e.target : null;
      const tag = el ? el.tagName : "";
      if (tag === "BUTTON" || tag === "A" || tag === "TEXTAREA" || tag === "INPUT" || tag === "SELECT") return;
      e.preventDefault();
      nextRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [choosing]);

  const rows: TicketRow[] = [
    { label: "Sell on", value: answers.marketplaces.join(", ") },
    { label: "Account", value: answers.account },
    { label: "Model", value: answers.model },
    { label: "Capital", value: answers.capital },
    { label: "Monthly sales", value: answers.sales },
    { label: "Goal", value: answers.goal },
  ];

  const info = STEP_INFO[step];
  const showErr = (key: RequiredKey): string => (touched[key] ? errors[key] : "");
  const optionList: React.CSSProperties = { display: "grid", gap: 10, maxWidth: 560 };

  const renderSingle = (key: SingleKey, options: Option[]) => (
    <div style={optionList}>
      {options.map((o) => (
        <OptionButton
          key={o.value}
          option={o}
          multi={false}
          selected={answers[key] === o.value}
          onPick={(v, byPointer) => pickSingle(key, v, byPointer)}
          onEnterWhenSelected={next}
        />
      ))}
    </div>
  );

  const sendButtons = (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
        <a className="btn-primary" href={waHref} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp aria-hidden="true" /> Send on WhatsApp
        </a>
        <a className="btn-outline" href={mailHref}>
          <FaEnvelope aria-hidden="true" /> Send by email
        </a>
      </div>
      <p className="typo-small" style={{ marginTop: 12, maxWidth: 560 }}>
        WhatsApp opens a chat with your answers filled in. Email opens your email app with a ready draft.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 20px", marginTop: 20 }}>
        <button type="button" className="link-underline" style={linkButton} onClick={copyAnswers}>
          {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy my answers"}</span>
        </button>
        <button type="button" className="link-underline" style={linkButton} onClick={backToEdit}>
          <FaArrowLeft aria-hidden="true" /> Edit my answers
        </button>
      </div>
      {copyFailed ? (
        <p role="alert" style={{ marginTop: 12, fontSize: 14, fontWeight: 700, color: "var(--color-dark)" }}>
          Your browser blocked the copy. Use the WhatsApp or email button instead.
        </p>
      ) : null}
    </>
  );

  return (
    <>
      <style>{CSS}</style>

      <section aria-label="Profit Check" style={{ background: "#fff", padding: "clamp(32px, 4vw, 56px) 0 clamp(48px, 6vw, 80px)" }}>
        <div className="container-main">
          <div ref={topRef} style={{ scrollMarginTop: 96 }}>
            <p className="typo-small" style={{ fontWeight: 700, color: "var(--color-dark)" }}>
              <span className="g-eyebrow" style={{ marginRight: 12 }}>Profit Check</span>
              <span aria-live="polite">
                {phase === "form" ? `Step ${step + 1} of ${TOTAL_STEPS}` : phase === "success" ? "Sent" : "Last step"}
              </span>
            </p>
            <hr className="rule" style={{ marginTop: 14 }} />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "36px 56px", marginTop: 32 }}>
            {/* left: question */}
            <div style={{ flex: "1.6 1 480px", minWidth: 0 }}>
              {phase === "form" ? (
                <div key={`step-${step}`}>
                  <h1 ref={headingRef} tabIndex={-1} className="g-h1" style={{ outline: "none", maxWidth: 640 }}>
                    {info.title}
                  </h1>
                  <p className="g-lead" style={{ marginTop: 12, maxWidth: 600 }}>
                    {info.hint}
                  </p>

                  <div style={{ marginTop: 26 }}>
                    {step === 0 ? (
                      <div style={optionList}>
                        {MARKETPLACES.map((o) => (
                          <OptionButton
                            key={o.value}
                            option={o}
                            multi
                            selected={answers.marketplaces.includes(o.value)}
                            onPick={(v) => toggleMarketplace(v)}
                            onEnterWhenSelected={next}
                          />
                        ))}
                      </div>
                    ) : null}
                    {step === 1 ? renderSingle("account", ACCOUNT) : null}
                    {step === 2 ? renderSingle("model", modelOptions) : null}
                    {step === 3 ? renderSingle("capital", CAPITAL) : null}
                    {step === 4 ? renderSingle("sales", SALES) : null}
                    {step === 5 ? renderSingle("goal", GOAL) : null}

                    {step === 6 ? (
                      <form id="pc-contact-form" onSubmit={submit} noValidate style={{ maxWidth: 640 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 16 }}>
                          <Field id="pc-name" label="Full name" error={showErr("name")}>
                            <input
                              id="pc-name"
                              name="name"
                              type="text"
                              className="pcf-input"
                              autoComplete="name"
                              required
                              aria-required="true"
                              aria-invalid={showErr("name") !== ""}
                              aria-describedby={showErr("name") ? "pc-name-error" : undefined}
                              value={contact.name}
                              onChange={(e) => setField("name", e.target.value)}
                              onBlur={() => touch("name")}
                            />
                          </Field>
                          <Field id="pc-email" label="Email" error={showErr("email")}>
                            <input
                              id="pc-email"
                              name="email"
                              type="email"
                              inputMode="email"
                              className="pcf-input"
                              autoComplete="email"
                              required
                              aria-required="true"
                              aria-invalid={showErr("email") !== ""}
                              aria-describedby={showErr("email") ? "pc-email-error" : undefined}
                              value={contact.email}
                              onChange={(e) => setField("email", e.target.value)}
                              onBlur={() => touch("email")}
                            />
                          </Field>
                          <Field id="pc-phone" label="WhatsApp or phone" error={showErr("phone")}>
                            <input
                              id="pc-phone"
                              name="phone"
                              type="tel"
                              inputMode="tel"
                              className="pcf-input"
                              autoComplete="tel"
                              placeholder="+1 555 000 0000"
                              required
                              aria-required="true"
                              aria-invalid={showErr("phone") !== ""}
                              aria-describedby={showErr("phone") ? "pc-phone-error" : undefined}
                              value={contact.phone}
                              onChange={(e) => setField("phone", e.target.value)}
                              onBlur={() => touch("phone")}
                            />
                          </Field>
                          <Field id="pc-store" label="Store name or link" optional error="">
                            <input
                              id="pc-store"
                              name="store"
                              type="text"
                              className="pcf-input"
                              autoComplete="organization"
                              value={contact.store}
                              onChange={(e) => setField("store", e.target.value)}
                            />
                          </Field>
                        </div>
                        <div style={{ marginTop: 16 }}>
                          <Field id="pc-message" label="Anything else we should know?" optional error="">
                            <textarea
                              id="pc-message"
                              name="message"
                              rows={3}
                              maxLength={1000}
                              className="pcf-input"
                              autoComplete="off"
                              style={{ resize: "vertical", minHeight: 96, lineHeight: 1.5 }}
                              value={contact.message}
                              onChange={(e) => setField("message", e.target.value)}
                            />
                          </Field>
                        </div>
                      </form>
                    ) : null}
                  </div>

                  {nudge && !stepValid(step) && step < TOTAL_STEPS - 1 ? (
                    <p
                      role="alert"
                      style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, fontSize: 15, fontWeight: 700, color: "var(--color-dark)" }}
                    >
                      <FaExclamationCircle aria-hidden="true" />
                      {step === 0 ? "Pick at least one place to sell." : "Pick one option to continue."}
                    </p>
                  ) : null}

                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 14px", marginTop: 26 }}>
                    {step > 0 ? (
                      <button type="button" className="btn-outline" onClick={() => goTo(step - 1)}>
                        <FaArrowLeft aria-hidden="true" /> Back
                      </button>
                    ) : null}
                    {step < TOTAL_STEPS - 1 ? (
                      <button type="button" className="btn-primary pcf-next" onClick={next} aria-disabled={!stepValid(step)}>
                        Continue <FaArrowRight aria-hidden="true" />
                      </button>
                    ) : (
                      <button type="submit" form="pc-contact-form" className="btn-primary pcf-next" disabled={sending}>
                        {sending ? "Sending your Profit Check" : "Get my Profit Check"}
                        <FaArrowRight aria-hidden="true" />
                      </button>
                    )}
                  </div>

                  <p className="typo-small" style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 20 }}>
                    <FaLock aria-hidden="true" style={{ flexShrink: 0 }} />
                    No payment details asked. Takes about 2 minutes.
                  </p>
                </div>
              ) : null}

              {phase === "manual" ? (
                <div key="manual">
                  <h1 ref={headingRef} tabIndex={-1} className="g-h1" style={{ outline: "none", maxWidth: 640 }}>
                    One last step: send your Profit Check
                  </h1>
                  <p className="g-lead" style={{ marginTop: 12, maxWidth: 600 }}>
                    Your Profit Check is not sent yet. Pick how you want to send it. Your answers are already filled in, so you only need to press send.
                  </p>
                  {sendButtons}
                </div>
              ) : null}

              {phase === "failed" ? (
                <div key="failed">
                  <div
                    role="alert"
                    style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 16px", borderRadius: 8, border: "1px solid var(--color-dark)", background: "#fff", marginBottom: 24, maxWidth: 640 }}
                  >
                    <FaExclamationCircle aria-hidden="true" style={{ color: "var(--color-dark)", fontSize: 18, flexShrink: 0, marginTop: 4 }} />
                    <p style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.5, color: "var(--color-dark)" }}>
                      The form could not be sent. Your answers are safe on this page. Send them now on WhatsApp or by email with the buttons below.
                    </p>
                  </div>
                  <h1 ref={headingRef} tabIndex={-1} className="g-h1" style={{ outline: "none", maxWidth: 640 }}>
                    Send your Profit Check another way
                  </h1>
                  {sendButtons}
                </div>
              ) : null}

              {phase === "success" ? (
                <div key="success">
                  <p style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "var(--color-primary)", marginBottom: 10 }}>
                    <FaCheck aria-hidden="true" /> Sent
                  </p>
                  <h1 ref={headingRef} tabIndex={-1} className="g-h1" style={{ outline: "none", maxWidth: 640 }}>
                    Your Profit Check is with our team.
                  </h1>
                  <p className="g-lead" style={{ marginTop: 12, maxWidth: 600 }}>
                    Thank you{contact.name.trim() ? `, ${contact.name.trim().split(" ")[0]}` : ""}. The <BrandName /> team will review your answers and contact you with a plan. Have a question now? Message us on WhatsApp.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
                    <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : null}
            </div>

            {/* right: answers so far */}
            <aside aria-label="Your Profit Check so far" style={{ flex: "1 1 320px", minWidth: 0, maxWidth: 440 }}>
              <Ticket rows={rows} name={contact.name} done={phase !== "form"} filled={filled} />
              <p className="typo-small" style={{ marginTop: 12 }}>
                This box fills in as you answer. Nothing is sent until the last step.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section aria-label="How working with us starts" className="bg-tint" style={{ padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div className="container-main">
          <h2 className="g-h2">What you should know before you send it</h2>
          <dl style={{ marginTop: 20, maxWidth: 760 }}>
            {TILES.map((t) => (
              <div key={t.title} style={{ borderTop: "1px solid var(--color-line)", padding: "14px 0", display: "flex", flexWrap: "wrap", gap: "4px 24px" }}>
                <dt style={{ flex: "0 0 240px", fontWeight: 700, color: "var(--color-dark)" }}>{t.title}</dt>
                <dd style={{ flex: "1 1 280px", minWidth: 0, color: "var(--color-text-light)" }}>{t.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
