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
  FaShieldAlt,
  FaShopify,
  FaStore,
  FaWhatsapp,
} from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
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

const CSS = `
.sasf-opt { display: flex; align-items: center; gap: 14px; width: 100%; min-width: 0; text-align: left; padding: 18px 18px; border-radius: 18px; border: 2px solid rgba(255,255,255,0.16); background: rgba(255,255,255,0.05); color: #fff; cursor: pointer; font-family: inherit; transition: transform .25s cubic-bezier(.2,.8,.2,1), background-color .25s, border-color .25s, color .25s, box-shadow .25s; }
.sasf-opt:hover { transform: translateY(-3px); border-color: rgba(255,178,26,0.75); background: rgba(255,255,255,0.1); }
.sasf-opt:active { transform: translateY(0) scale(.99); }
.sasf-opt[aria-pressed="true"] { background: #fff; color: #0A1B4D; border-color: #FFB21A; box-shadow: 0 18px 40px rgba(0,0,0,0.28), 0 0 0 4px rgba(255,178,26,0.22); }
.sasf-ico { width: 46px; height: 46px; border-radius: 14px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 21px; background: rgba(255,255,255,0.1); color: #FFB21A; transition: background-color .25s, color .25s, transform .3s cubic-bezier(.2,.8,.2,1); }
.sasf-opt:hover .sasf-ico { transform: rotate(-8deg) scale(1.08); }
.sasf-opt[aria-pressed="true"] .sasf-ico { background: #EEF4FF; color: #1560FF; }
.sasf-sub { display: block; font-size: 14px; font-weight: 500; line-height: 1.4; margin-top: 3px; color: #C9D6F7; transition: color .25s; }
.sasf-opt[aria-pressed="true"] .sasf-sub { color: #46557F; }
.sasf-mark { width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; margin-left: auto; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(255,255,255,0.3); font-size: 12px; color: transparent; transition: border-color .25s, background-color .25s; }
.sasf-mark.sq { border-radius: 8px; }
.sasf-opt[aria-pressed="true"] .sasf-mark { background: #FFB21A; border-color: #FFB21A; color: #0A1B4D; animation: sasf-pop .4s cubic-bezier(.2,.9,.3,1.4) both; }
@keyframes sasf-pop { 0% { transform: scale(.3); } 70% { transform: scale(1.25); } 100% { transform: scale(1); } }
@keyframes sasf-shake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
@keyframes sasf-ring { 0% { transform: scale(.4); opacity: 0; } 60% { transform: scale(1.12); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
.sasf-chip { padding: 11px 16px; border-radius: 999px; border: 2px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: #fff; font-family: inherit; font-size: 15px; font-weight: 700; line-height: 1.2; cursor: pointer; transition: transform .2s, background-color .2s, border-color .2s, color .2s; }
.sasf-chip:hover { transform: translateY(-2px); border-color: rgba(255,178,26,0.75); }
.sasf-chip[aria-pressed="true"] { background: #FFB21A; border-color: #FFB21A; color: #0A1B4D; }
.sasf-tri { flex: 1 1 96px; min-width: 0; padding: 14px 12px; border-radius: 14px; border: 2px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.05); color: #fff; font-family: inherit; font-size: 16px; font-weight: 800; line-height: 1.2; cursor: pointer; transition: transform .2s, background-color .2s, border-color .2s, color .2s, box-shadow .2s; }
.sasf-tri:hover { transform: translateY(-2px); border-color: rgba(255,178,26,0.75); }
.sasf-tri[aria-pressed="true"] { background: #fff; border-color: #FFB21A; color: #0A1B4D; box-shadow: 0 0 0 4px rgba(255,178,26,0.22); }
.sasf-input { width: 100%; min-width: 0; padding: 15px 16px; font-size: 16px; font-family: inherit; font-weight: 600; color: #0A1B4D; background: #fff; border: 2px solid transparent; border-radius: 14px; outline: none; transition: border-color .2s, box-shadow .2s; }
.sasf-input::placeholder { color: #8B97B8; font-weight: 500; }
.sasf-input:focus { border-color: #FFB21A; box-shadow: 0 0 0 4px rgba(255,178,26,0.28); }
.sasf-input[aria-invalid="true"] { border-color: #FFB21A; }
.sasf-back { display: inline-flex; align-items: center; gap: 10px; padding: 16px 20px; border-radius: 14px; border: 2px solid transparent; background: transparent; color: #C9D6F7; font-family: inherit; font-size: 16px; font-weight: 800; line-height: 1; cursor: pointer; transition: color .2s, background-color .2s, transform .2s; }
.sasf-back:hover { color: #fff; background: rgba(255,255,255,0.08); transform: translateX(-3px); }
.sasf-next[disabled] { animation: none; opacity: .45; cursor: not-allowed; box-shadow: none; }
.sasf-shake { animation: sasf-shake .3s ease both; }
.sasf-big { display: flex; align-items: center; gap: 16px; min-width: 0; padding: 22px 22px; border-radius: 20px; text-decoration: none; font-family: inherit; text-align: left; cursor: pointer; transition: transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s, background-color .25s, border-color .25s; }
.sasf-big:hover { transform: translateY(-4px); }
.sasf-big.amber { background: #FFB21A; color: #0A1B4D; border: 2px solid #FFB21A; }
.sasf-big.amber:hover { box-shadow: 0 18px 40px rgba(255,178,26,0.45); }
.sasf-big.white { background: #fff; color: #0A1B4D; border: 2px solid #fff; }
.sasf-big.white:hover { box-shadow: 0 18px 40px rgba(0,0,0,0.3); border-color: #FFB21A; }
.sasf-ghost { display: inline-flex; align-items: center; gap: 10px; padding: 14px 20px; border-radius: 14px; border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.06); color: #fff; font-family: inherit; font-size: 15px; font-weight: 800; line-height: 1; cursor: pointer; transition: background-color .2s, color .2s, border-color .2s, transform .2s; }
.sasf-ghost:hover { background: #fff; color: #0A1B4D; transform: translateY(-2px); }
.sasf-row { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; padding: 11px 0; border-bottom: 1px dashed #D9E2F5; }
.sasf-card-tilt { transform: rotate(1.5deg); transition: transform .5s cubic-bezier(.2,.8,.2,1); }
.sasf-card-tilt:hover { transform: rotate(0deg) scale(1.01); }
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
      {Icon ? (
        <span className="sasf-ico" aria-hidden="true">
          <Icon />
        </span>
      ) : null}
      <span style={{ minWidth: 0 }}>
        <span style={{ display: "block", fontSize: 18, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.01em" }}>{option.label}</span>
        {option.sub ? <span className="sasf-sub">{option.sub}</span> : null}
      </span>
      <span className={multi ? "sasf-mark sq" : "sasf-mark"} aria-hidden="true">
        <FaCheck />
      </span>
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
      <label htmlFor={id} style={{ display: "block", fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
        {label}
        {optional ? <span style={{ fontWeight: 600, color: "#C9D6F7" }}> (optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="slide-up-in"
          style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 8, fontSize: 14, fontWeight: 700, lineHeight: 1.4, color: "var(--color-accent)" }}
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
    <div className="float-a">
      <div
        className="sasf-card-tilt"
        style={{ background: "#fff", borderRadius: 26, boxShadow: "0 40px 80px rgba(0,0,0,0.38)", color: "var(--color-dark)" }}
      >
        <div style={{ padding: "24px 26px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--color-primary)" }}>Live preview</p>
            <p style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15 }}>Your setup request</p>
          </div>
          <span
            key={done ? "ready" : "draft"}
            className={done ? "stamp-in" : undefined}
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: 10,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              background: done ? "var(--color-accent)" : "var(--color-primary-light)",
              color: "var(--color-dark)",
              transform: done ? "rotate(-6deg)" : "none",
            }}
          >
            {done ? "Ready to send" : `${filled} of ${TOTAL_STEPS} filled`}
          </span>
        </div>

        <div style={{ padding: "0 26px 8px" }} aria-live="polite">
          {rows.map((r) => (
            <div key={r.label} className="sasf-row">
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-light)", flexShrink: 0 }}>{r.label}</span>
              {r.value ? (
                <span key={r.value} className="slide-up-in" style={{ fontSize: 15, fontWeight: 800, textAlign: "right", minWidth: 0, overflowWrap: "anywhere" }}>
                  {r.value}
                </span>
              ) : (
                <span aria-hidden="true" style={{ width: 84, height: 10, borderRadius: 6, background: "var(--color-primary-light)", alignSelf: "center" }} />
              )}
            </div>
          ))}
        </div>

        <div style={{ margin: "14px 18px 0", padding: "16px 18px", borderRadius: 18, background: "var(--color-primary-light)" }}>
          <p style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, fontWeight: 800, marginBottom: 10 }}>
            <FaShieldAlt aria-hidden="true" style={{ color: "var(--color-primary)", flexShrink: 0 }} />
            This form never asks for
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 6 }}>
            {NEVER.map((n) => (
              <li key={n} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, fontWeight: 600, color: "var(--color-text-light)" }}>
                <FaLock aria-hidden="true" style={{ fontSize: 11, color: "var(--color-dark)", flexShrink: 0 }} />
                {n}
              </li>
            ))}
          </ul>
        </div>
        <p style={{ padding: "14px 26px 22px", fontSize: 13, fontWeight: 600, lineHeight: 1.5, color: "var(--color-text-light)" }}>
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
  const pct = phase === "form" ? Math.round(((step + 1) / TOTAL_STEPS) * 100) : 100;
  const showErr = (key: RequiredKey): string => (touched[key] ? errors[key] : "");
  const bigHeading: React.CSSProperties = { fontSize: "clamp(30px, 3.8vw, 58px)", lineHeight: 1.04, fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", outline: "none" };
  const optionGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 14 };

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
      <p id={labelId} style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
        {label}
      </p>
      <div role="group" aria-labelledby={labelId} style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 16, marginTop: 30 }}>
        <a className="sasf-big amber" href={waHref} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp aria-hidden="true" style={{ fontSize: 34, flexShrink: 0 }} />
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>Send on WhatsApp</span>
            <span style={{ display: "block", fontSize: 14, fontWeight: 600, marginTop: 3 }}>Opens a chat with your answers filled in</span>
          </span>
          <FaArrowRight aria-hidden="true" className="btn-arrow" style={{ marginLeft: "auto", flexShrink: 0 }} />
        </a>
        <a className="sasf-big white" href={mailHref}>
          <FaEnvelope aria-hidden="true" style={{ fontSize: 30, flexShrink: 0, color: "var(--color-primary)" }} />
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>Send by email</span>
            <span style={{ display: "block", fontSize: 14, fontWeight: 600, marginTop: 3, color: "var(--color-text-light)" }}>Opens your email app with a ready draft</span>
          </span>
          <FaArrowRight aria-hidden="true" className="btn-arrow" style={{ marginLeft: "auto", flexShrink: 0 }} />
        </a>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 16px", marginTop: 20 }}>
        <button type="button" className="sasf-ghost" onClick={copyAnswers}>
          {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy my answers"}</span>
        </button>
        <button type="button" className="sasf-back" onClick={backToEdit}>
          <FaArrowLeft aria-hidden="true" /> Edit my answers
        </button>
      </div>
      {copyFailed ? (
        <p role="alert" style={{ marginTop: 12, fontSize: 14, fontWeight: 700, color: "var(--color-accent)" }}>
          Your browser blocked the copy. Use the WhatsApp or email button instead.
        </p>
      ) : null}
    </>
  );

  return (
    <section
      id="setup-form"
      className="g-section bg-navy grid-dots-dark on-dark"
      aria-label="Seller account setup request"
      style={{ overflow: "hidden", scrollMarginTop: 80 }}
    >
      <style>{CSS}</style>
      <span aria-hidden="true" className="blob" style={{ width: 460, height: 460, background: "rgba(21,96,255,0.4)", top: -160, right: -120 }} />
      <span aria-hidden="true" className="blob" style={{ width: 340, height: 340, background: "rgba(255,178,26,0.14)", bottom: -140, left: -100, animationDelay: "-6s" }} />

      <div className="container-wide" style={{ position: "relative" }}>
        <Reveal style={{ maxWidth: 980, marginBottom: "clamp(28px, 4vw, 52px)" }}>
          <span className="g-eyebrow on-dark" style={{ marginBottom: 18 }}>
            Start your setup
          </span>
          <h2 className="g-h2">
            Tell us where you stand. <span className="t-amber">We send back your checklist.</span>
          </h2>
          <p className="g-lead" style={{ marginTop: 18, maxWidth: 720 }}>
            Six short questions. The <BrandName dark /> team reads your answers and replies with what you have, what is missing and what to do next.
          </p>
        </Reveal>

        {/* progress */}
        <div ref={topRef} style={{ scrollMarginTop: 96 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 20px", marginBottom: 14 }}>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.8, textTransform: "uppercase", color: "var(--color-accent)" }}>Setup request</span>
            <span style={{ fontSize: 15, fontWeight: 800, color: "#fff", fontVariantNumeric: "tabular-nums" }}>
              {phase === "form" ? `Step ${step + 1} of ${TOTAL_STEPS}` : phase === "success" ? "Sent" : "Last step"}
            </span>
          </div>
          <div
            role="progressbar"
            aria-label="Setup request progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={pct}
            style={{ height: 10, borderRadius: 8, background: "rgba(255,255,255,0.12)", overflow: "hidden" }}
          >
            <div
              style={{
                width: `${pct}%`,
                height: "100%",
                borderRadius: 8,
                background: "var(--color-accent)",
                boxShadow: "0 0 18px rgba(255,178,26,0.6)",
                transition: "width .6s cubic-bezier(.2,.8,.2,1)",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "clamp(36px, 5vw, 88px)", marginTop: "clamp(28px, 4vw, 56px)" }}>
          {/* left: question */}
          <div style={{ flex: "1.5 1 520px", minWidth: 0 }}>
            {phase === "form" ? (
              <div key={`step-${step}`} className="slide-up-in">
                <p style={{ fontSize: 15, fontWeight: 800, color: "var(--color-accent)", marginBottom: 12 }}>Question {step + 1}</p>
                <h3 ref={headingRef} tabIndex={-1} style={bigHeading}>
                  {info.title}
                </h3>
                <p className="g-lead" style={{ marginTop: 14, maxWidth: 640 }}>
                  {info.hint}
                </p>

                <div style={{ marginTop: 28 }}>
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
                    <div style={{ maxWidth: 640 }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
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
                    <div style={{ display: "grid", gap: 26, maxWidth: 640 }}>
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
                        <div className="slide-up-in" style={{ marginTop: 18, maxWidth: 640 }}>
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
                    <form id="sas-contact-form" onSubmit={submit} noValidate>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 18 }}>
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
                      <div style={{ marginTop: 18 }}>
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
                        <p id="sas-message-note" style={{ marginTop: 8, fontSize: 14, fontWeight: 600, color: "#C9D6F7" }}>
                          Do not type passwords, ID numbers or bank numbers in this box.
                        </p>
                      </div>
                    </form>
                  ) : null}
                </div>

                {nudge && !stepValid(step) && step < TOTAL_STEPS - 1 ? (
                  <p
                    role="alert"
                    className="sasf-shake"
                    style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18, fontSize: 15, fontWeight: 700, color: "var(--color-accent)" }}
                  >
                    <FaExclamationCircle aria-hidden="true" />
                    {nudgeText}
                  </p>
                ) : null}

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 14px", marginTop: 30 }}>
                  {step > 0 ? (
                    <button type="button" className="sasf-back" onClick={() => goTo(step - 1)}>
                      <FaArrowLeft aria-hidden="true" /> Back
                    </button>
                  ) : null}
                  {step < TOTAL_STEPS - 1 ? (
                    <button
                      type="button"
                      className="btn-accent sasf-next"
                      onClick={next}
                      aria-disabled={!stepValid(step)}
                      style={stepValid(step) ? undefined : { animation: "none", opacity: 0.55 }}
                    >
                      Continue <FaArrowRight aria-hidden="true" className="btn-arrow" />
                    </button>
                  ) : (
                    <button type="submit" form="sas-contact-form" className="btn-accent sasf-next" disabled={sending}>
                      {sending ? "Sending your request" : "Send my setup request"}
                      <FaArrowRight aria-hidden="true" className="btn-arrow" />
                    </button>
                  )}
                </div>

                <p style={{ display: "flex", alignItems: "flex-start", gap: 9, marginTop: 26, fontSize: 14, fontWeight: 600, lineHeight: 1.5, color: "#C9D6F7", maxWidth: 640 }}>
                  <FaLock aria-hidden="true" style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }} />
                  We never ask for passwords, ID numbers, bank numbers or document uploads on this form. Takes about 1 minute.
                </p>
              </div>
            ) : null}

            {phase === "manual" ? (
              <div key="manual" className="slide-up-in">
                <p style={{ fontSize: 15, fontWeight: 800, color: "var(--color-accent)", marginBottom: 12 }}>Your answers are ready</p>
                <h3 ref={headingRef} tabIndex={-1} style={bigHeading}>
                  One last step: send your setup request
                </h3>
                <p className="g-lead" style={{ marginTop: 16, maxWidth: 640 }}>
                  Your request is not sent yet. Pick how you want to send it. Your answers are already filled in, so you only need to press send.
                </p>
                {sendButtons}
              </div>
            ) : null}

            {phase === "failed" ? (
              <div key="failed" className="slide-up-in">
                <div
                  role="alert"
                  style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "18px 20px", borderRadius: 18, border: "2px solid var(--color-accent)", background: "rgba(255,178,26,0.1)", marginBottom: 26, maxWidth: 720 }}
                >
                  <FaExclamationCircle aria-hidden="true" style={{ color: "var(--color-accent)", fontSize: 22, flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.5, color: "#fff" }}>
                    The form could not be sent. Your answers are safe on this page. Send them now on WhatsApp or by email with the buttons below.
                  </p>
                </div>
                <h3 ref={headingRef} tabIndex={-1} style={bigHeading}>
                  Send your setup request another way
                </h3>
                {sendButtons}
              </div>
            ) : null}

            {phase === "success" ? (
              <div key="success" className="slide-up-in">
                <span
                  aria-hidden="true"
                  style={{ width: 84, height: 84, borderRadius: "50%", background: "var(--color-accent)", color: "var(--color-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, marginBottom: 24, animation: "sasf-ring .6s cubic-bezier(.2,.9,.3,1.2) both" }}
                >
                  <FaCheck />
                </span>
                <h3 ref={headingRef} tabIndex={-1} style={bigHeading}>
                  Your setup request is sent
                </h3>
                <p className="g-lead" style={{ marginTop: 16, maxWidth: 640 }}>
                  Thank you{contact.name.trim() ? `, ${contact.name.trim()}` : ""}. Our team will read your answers and reply by email or WhatsApp with your checklist. We will never ask for your password.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 28 }}>
                  <a className="btn-outline-white" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          {/* right: live brief */}
          <div style={{ flex: "1 1 360px", minWidth: 0, maxWidth: 520 }}>
            <Brief rows={rows} done={phase !== "form"} filled={filled} />
          </div>
        </div>
      </div>
    </section>
  );
}
