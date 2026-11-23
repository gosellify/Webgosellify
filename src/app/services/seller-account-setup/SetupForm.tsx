"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaAmazon,
  FaArrowLeft,
  FaArrowRight,
  FaBoxOpen,
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
const TOTAL_STEPS = 6;

type IconType = typeof FaStore;

type Option = { value: string; label: string; sub?: string; icon?: IconType };

type Answers = {
  marketplaces: string[];
  business: string;
  country: string;
  taxId: string;
  bank: string;
  soldBefore: string;
  soldWhere: string;
};

type Contact = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type TriKey = "taxId" | "bank";
type ContactKey = keyof Contact;
type RequiredKey = "name" | "email" | "phone";
type Phase = "form" | "manual" | "failed" | "success";

const MARKETPLACES: Option[] = [
  { value: "Amazon", label: "Amazon", sub: "Seller Central account", icon: FaAmazon },
  { value: "Walmart Marketplace", label: "Walmart Marketplace", sub: "Seller Center account", icon: FaStore },
  { value: "Temu", label: "Temu", sub: "Seller Center account", icon: FaBoxOpen },
  { value: "eBay", label: "eBay", sub: "Personal or business seller account", icon: FaEbay },
  { value: "Etsy", label: "Etsy", sub: "Your own Etsy shop", icon: FaEtsy },
  { value: "Shopify", label: "Shopify store", sub: "Your own store and payments", icon: FaShopify },
];

const BUSINESS: Option[] = [
  { value: "LLC or company", label: "Yes, an LLC or company", sub: "It is registered and I have the papers" },
  { value: "Sole proprietor", label: "Yes, as a sole proprietor", sub: "I trade under my own name" },
  { value: "Not yet", label: "Not yet", sub: "I still need to register a business" },
];

const TRI: string[] = ["Yes", "No", "Not sure"];

const SOLD: Option[] = [
  { value: "Yes", label: "Yes, I have sold online", sub: "On a marketplace or my own store" },
  { value: "No", label: "No, this is my first store", sub: "I am starting from zero" },
];

const COUNTRIES: string[] = ["United States", "United Kingdom", "Canada", "United Arab Emirates", "Pakistan", "India"];

type StepInfo = { title: string; hint: string };

const STEP_INFO: StepInfo[] = [
  { title: "Where do you want a seller account?", hint: "Pick one or more. Every account is opened in your own name or your own company name." },
  { title: "Do you have a registered business?", hint: "Some marketplaces accept individuals. Others ask for a registered business." },
  { title: "Which country is the owner in?", hint: "The rules and documents change with the country of the owner and the business." },
  { title: "Do you have a tax ID and a business bank account?", hint: "Only yes, no or not sure. Never type the numbers here." },
  { title: "Have you sold online before?", hint: "Some marketplaces look at your selling history when they review an application." },
  { title: "Where should we send your checklist?", hint: "A real person on our team reads every request." },
];

const NEVER: string[] = [
  "Passwords or login codes",
  "ID or passport numbers",
  "Bank account or card numbers",
  "Document uploads on this form",
];

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

function soldText(a: Answers): string {
  if (a.soldBefore === "") return "";
  if (a.soldBefore === "No") return "No, first store";
  const where = a.soldWhere.trim();
  return where ? `Yes: ${where}` : "Yes";
}

function buildSummary(a: Answers, c: Contact): string {
  const lines: string[] = [
    "Gosellify Seller Account Setup",
    "",
    `Name: ${c.name.trim()}`,
    `Email: ${c.email.trim()}`,
    `WhatsApp or phone: ${c.phone.trim()}`,
    "",
    `Wants an account on: ${a.marketplaces.join(", ")}`,
    `Registered business: ${a.business}`,
    `Country of the owner: ${a.country.trim()}`,
    `EIN or tax ID: ${a.taxId}`,
    `Business bank account: ${a.bank}`,
    `Sold online before: ${soldText(a)}`,
  ];
  if (c.message.trim()) {
    lines.push("", `Message: ${c.message.trim()}`);
  }
  return lines.join("\n");
}

const headingStyle: React.CSSProperties = { fontSize: 24, lineHeight: 1.25, outline: "none", maxWidth: 600 };

const CSS = `
.sasf-opt { display: flex; align-items: center; gap: 12px; width: 100%; min-width: 0; text-align: left; padding: 13px 16px; border-radius: 8px; border: 1px solid var(--color-line); background: #fff; color: var(--color-dark); cursor: pointer; font-family: inherit; transition: border-color .15s, background-color .15s; }
.sasf-opt:hover { border-color: var(--color-primary); }
.sasf-opt[aria-pressed="true"] { border-color: var(--color-primary); background: var(--color-light-gray); box-shadow: inset 0 0 0 1px var(--color-primary); }
.sasf-ico { flex-shrink: 0; display: flex; align-items: center; font-size: 18px; color: var(--color-text-light); }
.sasf-opt[aria-pressed="true"] .sasf-ico { color: var(--color-primary); }
.sasf-sub { display: block; font-size: 14px; font-weight: 400; line-height: 1.4; margin-top: 2px; color: var(--color-text-light); }
.sasf-mark { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-text-light); background: #fff; font-size: 10px; color: transparent; }
.sasf-mark.sq { border-radius: 4px; }
.sasf-opt[aria-pressed="true"] .sasf-mark { background: var(--color-primary); border-color: var(--color-primary); color: #fff; }
.sasf-chip, .sasf-tri { padding: 9px 14px; border-radius: 8px; border: 1px solid var(--color-line); background: #fff; color: var(--color-dark); font-family: inherit; font-size: 15px; font-weight: 600; line-height: 1.2; cursor: pointer; transition: border-color .15s; }
.sasf-tri { flex: 1 1 90px; min-width: 0; font-weight: 700; padding: 11px 12px; }
.sasf-chip:hover, .sasf-tri:hover { border-color: var(--color-primary); }
.sasf-chip[aria-pressed="true"], .sasf-tri[aria-pressed="true"] { border-color: var(--color-primary); color: var(--color-primary); background: var(--color-light-gray); box-shadow: inset 0 0 0 1px var(--color-primary); }
.sasf-input { width: 100%; min-width: 0; padding: 11px 13px; font-size: 16px; font-family: inherit; color: var(--color-dark); background: #fff; border: 1px solid var(--color-line); border-radius: 8px; outline: none; transition: border-color .15s; }
.sasf-input::placeholder { color: var(--color-text-light); opacity: 1; }
.sasf-input:hover { border-color: var(--color-text-light); }
.sasf-input:focus { border-color: var(--color-primary); box-shadow: inset 0 0 0 1px var(--color-primary); }
.sasf-input[aria-invalid="true"] { border-color: var(--color-dark); }
.sasf-next[disabled], .sasf-next[disabled]:hover { background: var(--color-line); border-color: var(--color-line); color: var(--color-dark); cursor: not-allowed; }
.sasf-link { display: inline-flex; align-items: center; gap: 8px; background: none; border: 0; padding: 0; font-family: inherit; font-size: 15px; font-weight: 700; color: var(--color-primary); cursor: pointer; text-decoration: underline; text-underline-offset: 3px; }
.sasf-row { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; padding: 10px 0; border-top: 1px solid var(--color-line); }
`;

type OptionButtonProps = {
  option: Option;
  selected: boolean;
  multi: boolean;
  onPick: (value: string, byPointer: boolean) => void;
};

function OptionButton({ option, selected, multi, onPick }: OptionButtonProps) {
  const Icon = option.icon;
  return (
    <button type="button" className="sasf-opt" aria-pressed={selected} onClick={(e) => onPick(option.value, e.detail > 0)}>
      <span className={multi ? "sasf-mark sq" : "sasf-mark"} aria-hidden="true">
        <FaCheck />
      </span>
      <span style={{ minWidth: 0, flex: 1 }}>
        <span style={{ display: "block", fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>{option.label}</span>
        {option.sub ? <span className="sasf-sub">{option.sub}</span> : null}
      </span>
      {Icon ? (
        <span className="sasf-ico" aria-hidden="true">
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

type BriefRow = { label: string; value: string };

function Brief({ rows, done, filled }: { rows: BriefRow[]; done: boolean; filled: number }) {
  return (
    <div style={{ background: "#fff", border: "1px solid var(--color-line)", borderRadius: 10, padding: "20px 22px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
        <h3 className="g-h3">Your answers</h3>
        <span className="typo-small">{done ? "Ready to send" : `${filled} of ${TOTAL_STEPS} filled`}</span>
      </div>
      <div aria-live="polite">
        {rows.map((r) => (
          <div key={r.label} className="sasf-row">
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
      </div>
      <div style={{ borderTop: "1px solid var(--color-line)", paddingTop: 14, marginTop: 4 }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "var(--color-dark)" }}>This form never asks for</p>
        <ul style={{ margin: "6px 0 0", paddingLeft: 18, fontSize: 14, color: "var(--color-text-light)" }}>
          {NEVER.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="typo-small" style={{ marginTop: 10 }}>
          The account is opened in your name or your company name. You hold the login.
        </p>
      </div>
    </div>
  );
}

export default function SetupForm() {
  const [step, setStep] = useState<number>(0);
  const [phase, setPhase] = useState<Phase>("form");
  const [sending, setSending] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Answers>({ marketplaces: [], business: "", country: "", taxId: "", bank: "", soldBefore: "", soldWhere: "" });
  const [contact, setContact] = useState<Contact>({ name: "", email: "", phone: "", message: "" });
  const [touched, setTouched] = useState<Record<RequiredKey, boolean>>({ name: false, email: false, phone: false });
  const [nudge, setNudge] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [copyFailed, setCopyFailed] = useState<boolean>(false);

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const moved = useRef<boolean>(false);
  const advanceTimer = useRef<number | null>(null);
  const copyTimer = useRef<number | null>(null);

  const errors: Record<RequiredKey, string> = {
    name: fieldError("name", contact),
    email: fieldError("email", contact),
    phone: fieldError("phone", contact),
  };
  const contactValid = !errors.name && !errors.email && !errors.phone;

  const stepValid = (s: number): boolean => {
    if (s === 0) return answers.marketplaces.length > 0;
    if (s === 1) return answers.business !== "";
    if (s === 2) return answers.country.trim().length >= 2;
    if (s === 3) return answers.taxId !== "" && answers.bank !== "";
    if (s === 4) return answers.soldBefore !== "";
    return contactValid;
  };

  const filled = [0, 1, 2, 3, 4, 5].filter((s) => stepValid(s)).length;
  const summary = buildSummary(answers, contact);
  const subject = `NEW LEAD | Gosellify Seller Account Setup | ${contact.name.trim()} | ${answers.marketplaces.join(", ")}`;
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
    if (top) {
      const y = top.getBoundingClientRect().top;
      if (y < 96 || y > window.innerHeight * 0.6) top.scrollIntoView({ block: "start" });
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
      return { ...prev, marketplaces: ordered };
    });
  };

  const pickBusiness = (value: string, byPointer: boolean) => {
    setNudge(false);
    setAnswers((prev) => ({ ...prev, business: value }));
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

  const setCountry = (value: string) => {
    setNudge(false);
    setAnswers((prev) => ({ ...prev, country: value }));
  };

  const pickTri = (key: TriKey, value: string) => {
    setNudge(false);
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const pickSold = (value: string) => {
    setNudge(false);
    setAnswers((prev) => ({ ...prev, soldBefore: value, soldWhere: value === "No" ? "" : prev.soldWhere }));
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
      const el = document.getElementById(`sas-${firstBad}`);
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
        body: JSON.stringify({ source: "seller-account-setup", submittedAt: new Date().toISOString(), answers, contact }),
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

  const rows: BriefRow[] = [
    { label: "Account on", value: answers.marketplaces.join(", ") },
    { label: "Business", value: answers.business },
    { label: "Country", value: answers.country.trim() },
    { label: "Tax ID", value: answers.taxId },
    { label: "Business bank", value: answers.bank },
    { label: "Sold before", value: soldText(answers) },
  ];

  const info = STEP_INFO[step];
  const showErr = (key: RequiredKey): string => (touched[key] ? errors[key] : "");
  const optionGrid: React.CSSProperties = { display: "grid", gap: 10, maxWidth: 560 };

  const nudgeText =
    step === 0
      ? "Pick at least one marketplace."
      : step === 2
        ? "Type the country or pick one above."
        : step === 3
          ? "Answer both questions to continue."
          : "Pick one option to continue.";

  const triRow = (key: TriKey, label: string, labelId: string) => (
    <div style={{ minWidth: 0 }}>
      <p id={labelId} style={{ fontSize: 16, fontWeight: 700, color: "var(--color-dark)", marginBottom: 8 }}>
        {label}
      </p>
      <div role="group" aria-labelledby={labelId} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {TRI.map((t) => (
          <button key={t} type="button" className="sasf-tri" aria-pressed={answers[key] === t} onClick={() => pickTri(key, t)}>
            {t}
          </button>
        ))}
      </div>
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
        <button type="button" className="sasf-link" onClick={copyAnswers}>
          {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy my answers"}</span>
        </button>
        <button type="button" className="sasf-link" onClick={backToEdit}>
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
    <section id="setup-form" className="g-section" aria-label="Seller account setup request" style={{ scrollMarginTop: 80, background: "#fff" }}>
      <style>{CSS}</style>

      <div className="container-main">
        <h2 className="g-h2">Tell us where you stand and we send back your checklist</h2>
        <p className="g-lead" style={{ marginTop: 12, maxWidth: 700 }}>
          Six short questions. The <BrandName /> team reads your answers and replies with what you have, what is missing and what to do next.
        </p>

        <div ref={topRef} style={{ scrollMarginTop: 96, marginTop: 28 }}>
          <p className="typo-small" style={{ fontWeight: 700, color: "var(--color-dark)" }}>
            <span className="g-eyebrow" style={{ marginRight: 12 }}>Setup request</span>
            <span aria-live="polite">
              {phase === "form" ? `Step ${step + 1} of ${TOTAL_STEPS}` : phase === "success" ? "Sent" : "Last step"}
            </span>
          </p>
          <hr className="rule" style={{ marginTop: 14 }} />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "36px 56px", marginTop: 28 }}>
          {/* left: question */}
          <div style={{ flex: "1.6 1 480px", minWidth: 0 }}>
            {phase === "form" ? (
              <div key={`step-${step}`}>
                <h3 ref={headingRef} tabIndex={-1} className="g-h3" style={headingStyle}>
                  {info.title}
                </h3>
                <p style={{ marginTop: 8, maxWidth: 600, color: "var(--color-text-light)" }}>{info.hint}</p>

                <div style={{ marginTop: 22 }}>
                  {step === 0 ? (
                    <div style={optionGrid}>
                      {MARKETPLACES.map((o) => (
                        <OptionButton key={o.value} option={o} multi selected={answers.marketplaces.includes(o.value)} onPick={(v) => toggleMarketplace(v)} />
                      ))}
                    </div>
                  ) : null}

                  {step === 1 ? (
                    <div style={optionGrid}>
                      {BUSINESS.map((o) => (
                        <OptionButton key={o.value} option={o} multi={false} selected={answers.business === o.value} onPick={pickBusiness} />
                      ))}
                    </div>
                  ) : null}

                  {step === 2 ? (
                    <div style={{ maxWidth: 560 }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                        {COUNTRIES.map((c) => (
                          <button key={c} type="button" className="sasf-chip" aria-pressed={answers.country === c} onClick={() => setCountry(c)}>
                            {c}
                          </button>
                        ))}
                      </div>
                      <Field id="sas-country" label="Country of the owner" error="">
                        <input
                          id="sas-country"
                          name="country"
                          type="text"
                          className="sasf-input"
                          autoComplete="country-name"
                          placeholder="Type your country"
                          maxLength={60}
                          value={answers.country}
                          onChange={(e) => setCountry(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              next();
                            }
                          }}
                        />
                      </Field>
                    </div>
                  ) : null}

                  {step === 3 ? (
                    <div style={{ display: "grid", gap: 22, maxWidth: 560 }}>
                      {triRow("taxId", "Do you have an EIN or tax ID?", "sas-tax-label")}
                      {triRow("bank", "Do you have a business bank account?", "sas-bank-label")}
                    </div>
                  ) : null}

                  {step === 4 ? (
                    <>
                      <div style={optionGrid}>
                        {SOLD.map((o) => (
                          <OptionButton key={o.value} option={o} multi={false} selected={answers.soldBefore === o.value} onPick={(v) => pickSold(v)} />
                        ))}
                      </div>
                      {answers.soldBefore === "Yes" ? (
                        <div style={{ marginTop: 16, maxWidth: 560 }}>
                          <Field id="sas-where" label="Where did you sell?" optional error="">
                            <input
                              id="sas-where"
                              name="soldWhere"
                              type="text"
                              className="sasf-input"
                              autoComplete="off"
                              placeholder="For example: eBay, my own Shopify store"
                              maxLength={120}
                              value={answers.soldWhere}
                              onChange={(e) => setAnswers((prev) => ({ ...prev, soldWhere: e.target.value }))}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  next();
                                }
                              }}
                            />
                          </Field>
                        </div>
                      ) : null}
                    </>
                  ) : null}

                  {step === 5 ? (
                    <form id="sas-contact-form" onSubmit={submit} noValidate style={{ maxWidth: 640 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 16 }}>
                        <Field id="sas-name" label="Full name" error={showErr("name")}>
                          <input
                            id="sas-name"
                            name="name"
                            type="text"
                            className="sasf-input"
                            autoComplete="name"
                            required
                            aria-required="true"
                            aria-invalid={showErr("name") !== ""}
                            aria-describedby={showErr("name") ? "sas-name-error" : undefined}
                            value={contact.name}
                            onChange={(e) => setField("name", e.target.value)}
                            onBlur={() => touch("name")}
                          />
                        </Field>
                        <Field id="sas-email" label="Email" error={showErr("email")}>
                          <input
                            id="sas-email"
                            name="email"
                            type="email"
                            inputMode="email"
                            className="sasf-input"
                            autoComplete="email"
                            required
                            aria-required="true"
                            aria-invalid={showErr("email") !== ""}
                            aria-describedby={showErr("email") ? "sas-email-error" : undefined}
                            value={contact.email}
                            onChange={(e) => setField("email", e.target.value)}
                            onBlur={() => touch("email")}
                          />
                        </Field>
                        <Field id="sas-phone" label="WhatsApp or phone" error={showErr("phone")}>
                          <input
                            id="sas-phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            className="sasf-input"
                            autoComplete="tel"
                            placeholder="+1 555 000 0000"
                            required
                            aria-required="true"
                            aria-invalid={showErr("phone") !== ""}
                            aria-describedby={showErr("phone") ? "sas-phone-error" : undefined}
                            value={contact.phone}
                            onChange={(e) => setField("phone", e.target.value)}
                            onBlur={() => touch("phone")}
                          />
                        </Field>
                      </div>
                      <div style={{ marginTop: 16 }}>
                        <Field id="sas-message" label="Anything else we should know?" optional error="">
                          <textarea
                            id="sas-message"
                            name="message"
                            rows={3}
                            maxLength={1000}
                            className="sasf-input"
                            autoComplete="off"
                            aria-describedby="sas-message-note"
                            style={{ resize: "vertical", minHeight: 96, lineHeight: 1.5 }}
                            value={contact.message}
                            onChange={(e) => setField("message", e.target.value)}
                          />
                        </Field>
                        <p id="sas-message-note" className="typo-small" style={{ marginTop: 6 }}>
                          Do not type passwords, ID numbers or bank numbers in this box.
                        </p>
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
                    {nudgeText}
                  </p>
                ) : null}

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 14px", marginTop: 26 }}>
                  {step > 0 ? (
                    <button type="button" className="btn-outline" onClick={() => goTo(step - 1)}>
                      <FaArrowLeft aria-hidden="true" /> Back
                    </button>
                  ) : null}
                  {step < TOTAL_STEPS - 1 ? (
                    <button type="button" className="btn-primary sasf-next" onClick={next} aria-disabled={!stepValid(step)}>
                      Continue <FaArrowRight aria-hidden="true" />
                    </button>
                  ) : (
                    <button type="submit" form="sas-contact-form" className="btn-primary sasf-next" disabled={sending}>
                      {sending ? "Sending your request" : "Send my setup request"}
                      <FaArrowRight aria-hidden="true" />
                    </button>
                  )}
                </div>

                <p className="typo-small" style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 20, maxWidth: 600 }}>
                  <FaLock aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }} />
                  We never ask for passwords, ID numbers, bank numbers or document uploads on this form. Takes about 1 minute.
                </p>
              </div>
            ) : null}

            {phase === "manual" ? (
              <div key="manual">
                <h3 ref={headingRef} tabIndex={-1} className="g-h3" style={headingStyle}>
                  One last step: send your setup request
                </h3>
                <p style={{ marginTop: 8, maxWidth: 600, color: "var(--color-text-light)" }}>
                  Your request is not sent yet. Pick how you want to send it. Your answers are already filled in, so you only need to press send.
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
                <h3 ref={headingRef} tabIndex={-1} className="g-h3" style={headingStyle}>
                  Send your setup request another way
                </h3>
                {sendButtons}
              </div>
            ) : null}

            {phase === "success" ? (
              <div key="success">
                <p style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "var(--color-primary)", marginBottom: 8 }}>
                  <FaCheck aria-hidden="true" /> Sent
                </p>
                <h3 ref={headingRef} tabIndex={-1} className="g-h3" style={headingStyle}>
                  Your setup request is sent
                </h3>
                <p style={{ marginTop: 8, maxWidth: 600, color: "var(--color-text-light)" }}>
                  Thank you{contact.name.trim() ? `, ${contact.name.trim()}` : ""}. Our team will read your answers and reply by email or WhatsApp with your checklist. We will never ask for your password.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
                  <a className="btn-outline" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          {/* right: answers so far */}
          <div style={{ flex: "1 1 320px", minWidth: 0, maxWidth: 440 }}>
            <Brief rows={rows} done={phase !== "form"} filled={filled} />
          </div>
        </div>
      </div>
    </section>
  );
}
