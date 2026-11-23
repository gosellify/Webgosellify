"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaAmazon,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaChartLine,
  FaCopy,
  FaEbay,
  FaEnvelope,
  FaEtsy,
  FaExclamationCircle,
  FaHandHoldingUsd,
  FaLock,
  FaShopify,
  FaStore,
  FaUnlockAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
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

type Tile = { icon: IconType; title: string; text: string };

const TILES: Tile[] = [
  {
    icon: FaHandHoldingUsd,
    title: "Pay from profit",
    text: "No management fee until your store makes profit.",
  },
  {
    icon: FaUnlockAlt,
    title: "No contract, cancel anytime",
    text: "You stay because the store works, not because of paperwork.",
  },
  {
    icon: FaChartLine,
    title: "Your own live dashboard",
    text: "Follow your store in your own dashboard at any time.",
  },
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
.pcf-opt { display: flex; align-items: center; gap: 14px; width: 100%; min-width: 0; text-align: left; padding: 18px 18px; border-radius: 18px; border: 2px solid var(--color-line); background: #fff; color: var(--color-dark); cursor: pointer; font-family: inherit; transition: transform .25s cubic-bezier(.2,.8,.2,1), background-color .25s, border-color .25s, color .25s, box-shadow .25s; }
.pcf-opt:hover { transform: translateY(-3px); border-color: var(--color-primary); box-shadow: 0 14px 30px rgba(10,27,77,0.1); }
.pcf-opt:active { transform: translateY(0) scale(.99); }
.pcf-opt:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 3px; }
.pcf-opt[aria-pressed="true"] { background: var(--color-primary-light); color: var(--color-dark); border-color: var(--color-primary); box-shadow: 0 18px 40px rgba(10,27,77,0.12), 0 0 0 4px rgba(21,96,255,0.16); }
.pcf-opt .pcf-ico { width: 46px; height: 46px; border-radius: 14px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 21px; background: var(--color-primary-light); color: var(--color-primary); transition: background-color .25s, color .25s, transform .3s cubic-bezier(.2,.8,.2,1); }
.pcf-opt:hover .pcf-ico { transform: rotate(-8deg) scale(1.08); }
.pcf-opt[aria-pressed="true"] .pcf-ico { background: var(--color-primary); color: #fff; }
.pcf-opt .pcf-sub { display: block; font-size: 14px; font-weight: 500; line-height: 1.4; margin-top: 3px; color: var(--color-text-light); transition: color .25s; }
.pcf-mark { width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; margin-left: auto; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(10,27,77,0.4); background: #fff; font-size: 12px; color: transparent; transition: border-color .25s, background-color .25s; }
.pcf-mark.sq { border-radius: 8px; }
.pcf-opt[aria-pressed="true"] .pcf-mark { background: var(--color-primary); border-color: var(--color-primary); color: #fff; animation: pcf-pop .4s cubic-bezier(.2,.9,.3,1.4) both; }
@keyframes pcf-pop { 0% { transform: scale(.3); } 70% { transform: scale(1.25); } 100% { transform: scale(1); } }
@keyframes pcf-shake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
@keyframes pcf-ring { 0% { transform: scale(.4); opacity: 0; } 60% { transform: scale(1.12); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
@keyframes pcf-draw { to { stroke-dashoffset: 0; } }
@keyframes pcf-halo { 0% { transform: scale(1); opacity: .55; } 100% { transform: scale(1.9); opacity: 0; } }
.pcf-input { width: 100%; min-width: 0; padding: 15px 16px; font-size: 16px; font-family: inherit; font-weight: 600; color: var(--color-dark); background: #fff; border: 2px solid var(--color-line); border-radius: 14px; outline: none; transition: border-color .2s, box-shadow .2s; }
.pcf-input::placeholder { color: var(--color-text-light); font-weight: 500; opacity: 1; }
.pcf-input:hover { border-color: rgba(21,96,255,0.55); }
.pcf-input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 4px rgba(21,96,255,0.22); }
.pcf-input[aria-invalid="true"] { border-color: var(--color-dark); }
.pcf-input[aria-invalid="true"]:focus { border-color: var(--color-primary); }
.pcf-next[disabled], .pcf-next[aria-disabled="true"], .pcf-next[disabled]:hover, .pcf-next[aria-disabled="true"]:hover { animation: none; background: var(--color-line); border-color: var(--color-line); color: var(--color-dark); box-shadow: none; }
.pcf-next[disabled] { cursor: not-allowed; }
.pcf-next[disabled]:hover { transform: none; }
.pcf-next[disabled]::after { display: none; }
.pcf-shake { animation: pcf-shake .3s ease both; }
.pcf-big { display: flex; align-items: center; gap: 16px; min-width: 0; padding: 22px 22px; border-radius: 20px; text-decoration: none; font-family: inherit; text-align: left; cursor: pointer; transition: transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s, background-color .25s, border-color .25s; }
.pcf-big:hover { transform: translateY(-4px); }
.pcf-big.amber { background: var(--color-accent); color: var(--color-dark); border: 2px solid var(--color-accent); }
.pcf-big.amber:hover { box-shadow: 0 18px 40px rgba(255,178,26,0.45); }
.pcf-big.white { background: #fff; color: var(--color-dark); border: 2px solid var(--color-line); }
.pcf-big.white:hover { box-shadow: 0 18px 40px rgba(10,27,77,0.14); border-color: var(--color-primary); }
.pcf-row { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; padding: 11px 0; border-bottom: 1px dashed rgba(255,255,255,0.22); }
.pcf-sec { overflow: hidden; overflow: clip; }
.pcf-ticket-tilt { transform: rotate(2deg); transition: transform .5s cubic-bezier(.2,.8,.2,1); }
.pcf-ticket-tilt:hover { transform: rotate(0deg) scale(1.01); }
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
      {Icon ? (
        <span className="pcf-ico" aria-hidden="true">
          <Icon />
        </span>
      ) : null}
      <span style={{ minWidth: 0 }}>
        <span style={{ display: "block", fontSize: 18, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.01em" }}>{option.label}</span>
        {option.sub ? <span className="pcf-sub">{option.sub}</span> : null}
      </span>
      <span className={multi ? "pcf-mark sq" : "pcf-mark"} aria-hidden="true">
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
      <label htmlFor={id} style={{ display: "block", fontSize: 15, fontWeight: 800, color: "var(--color-dark)", marginBottom: 8 }}>
        {label}
        {optional ? <span style={{ fontWeight: 600, color: "var(--color-text-light)" }}> (optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="slide-up-in"
          style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 8, fontSize: 14, fontWeight: 700, lineHeight: 1.4, color: "var(--color-dark)" }}
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
    <div className="float-a">
      <div
        className="pcf-ticket-tilt"
        style={{ background: "var(--color-dark)", borderRadius: 26, boxShadow: "0 36px 70px rgba(10,27,77,0.3)", color: "#fff", position: "relative" }}
      >
        <div style={{ padding: "24px 26px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--color-accent)" }}>Live preview</p>
            <p style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15 }}>Your Profit Check</p>
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
              background: done ? "var(--color-accent)" : "rgba(255,255,255,0.12)",
              color: done ? "var(--color-dark)" : "#fff",
              transform: done ? "rotate(-8deg)" : "none",
            }}
          >
            {done ? "Ready to send" : `${filled} of ${TOTAL_STEPS} filled`}
          </span>
        </div>

        {/* perforation */}
        <div aria-hidden="true" style={{ position: "relative", height: 22 }}>
          <span style={{ position: "absolute", left: -11, top: 0, width: 22, height: 22, borderRadius: "50%", background: "var(--color-primary-light)" }} />
          <span style={{ position: "absolute", right: -11, top: 0, width: 22, height: 22, borderRadius: "50%", background: "var(--color-primary-light)" }} />
          <span style={{ position: "absolute", left: 22, right: 22, top: 10, borderTop: "2px dashed rgba(255,255,255,0.28)" }} />
        </div>

        <div style={{ padding: "8px 26px 8px" }} aria-live="polite">
          {rows.map((r) => (
            <div key={r.label} className="pcf-row">
              <span style={{ fontSize: 13, fontWeight: 700, color: "#C9D6F7", flexShrink: 0 }}>{r.label}</span>
              {r.value ? (
                <span
                  key={r.value}
                  className="slide-up-in"
                  style={{ fontSize: 15, fontWeight: 800, textAlign: "right", minWidth: 0, overflowWrap: "anywhere" }}
                >
                  {r.value}
                </span>
              ) : (
                <span aria-hidden="true" style={{ width: 84, height: 10, borderRadius: 6, background: "rgba(255,255,255,0.16)", alignSelf: "center" }} />
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: "16px 26px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#C9D6F7" }}>Prepared for</p>
            <p style={{ fontSize: 17, fontWeight: 800, overflowWrap: "anywhere" }}>{name.trim() || "You"}</p>
          </div>
          {/* decorative ticket stripes */}
          <div aria-hidden="true" style={{ display: "flex", gap: 3, alignItems: "stretch", height: 38 }}>
            {[3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3].map((w, i) => (
              <span key={i} style={{ width: w * 2, background: i % 5 === 4 ? "var(--color-accent)" : "#fff", borderRadius: 1 }} />
            ))}
          </div>
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
  const pct = phase === "form" ? Math.round(((step + 1) / TOTAL_STEPS) * 100) : 100;
  const showErr = (key: RequiredKey): string => (touched[key] ? errors[key] : "");

  const renderSingle = (key: SingleKey, options: Option[]) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 14 }}>
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 16, marginTop: 30 }}>
        <a className="pcf-big amber" href={waHref} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp aria-hidden="true" style={{ fontSize: 34, flexShrink: 0 }} />
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>Send on WhatsApp</span>
            <span style={{ display: "block", fontSize: 14, fontWeight: 600, marginTop: 3 }}>Opens a chat with your answers filled in</span>
          </span>
          <FaArrowRight aria-hidden="true" className="btn-arrow" style={{ marginLeft: "auto", flexShrink: 0 }} />
        </a>
        <a className="pcf-big white" href={mailHref}>
          <FaEnvelope aria-hidden="true" style={{ fontSize: 30, flexShrink: 0, color: "var(--color-primary)" }} />
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>Send by email</span>
            <span style={{ display: "block", fontSize: 14, fontWeight: 600, marginTop: 3, color: "var(--color-text-light)" }}>Opens your email app with a ready draft</span>
          </span>
          <FaArrowRight aria-hidden="true" className="btn-arrow" style={{ marginLeft: "auto", flexShrink: 0 }} />
        </a>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 16px", marginTop: 20 }}>
        <button type="button" className="btn-outline" onClick={copyAnswers}>
          {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy my answers"}</span>
        </button>
        <button type="button" className="btn-outline" onClick={backToEdit}>
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

      <section
        className="bg-tint grid-dots pcf-sec"
        aria-label="Profit Check"
        style={{ position: "relative", minHeight: "calc(100vh - 110px)", padding: "clamp(36px, 5vw, 72px) 0 clamp(64px, 8vw, 120px)" }}
      >
        <span aria-hidden="true" className="blob" style={{ width: 460, height: 460, background: "rgba(21,96,255,0.1)", top: -160, right: -120 }} />
        <span aria-hidden="true" className="blob" style={{ width: 340, height: 340, background: "rgba(255,178,26,0.22)", bottom: -140, left: -100, animationDelay: "-6s" }} />

        <div className="container-wide" style={{ position: "relative" }}>
          {/* progress */}
          <div ref={topRef} style={{ scrollMarginTop: 96 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 20px", marginBottom: 14 }}>
              <span className="g-eyebrow" style={{ color: "var(--color-primary-dark)" }}>Profit Check</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: "var(--color-dark)", fontVariantNumeric: "tabular-nums" }}>
                {phase === "form" ? `Step ${step + 1} of ${TOTAL_STEPS}` : phase === "success" ? "Sent" : "Last step"}
              </span>
            </div>
            <div
              role="progressbar"
              aria-label="Profit Check progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
              style={{ height: 10, borderRadius: 8, background: "var(--color-line)", overflow: "hidden" }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: "100%",
                  borderRadius: 8,
                  background: "var(--color-accent)",
                                    transition: "width .6s cubic-bezier(.2,.8,.2,1)",
                }}
              />
            </div>
            <div aria-hidden="true" style={{ display: "flex", gap: 6, marginTop: 10 }}>
              {STEP_INFO.map((s, i) => (
                <span
                  key={s.title}
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: 2,
                    background: phase !== "form" || i <= step ? "var(--color-accent)" : "var(--color-line)",
                    transition: "background-color .4s",
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "clamp(36px, 5vw, 88px)", marginTop: "clamp(32px, 4.5vw, 64px)" }}>
            {/* left: question */}
            <div style={{ flex: "1.5 1 520px", minWidth: 0 }}>
              {phase === "form" ? (
                <div key={`step-${step}`} className="slide-up-in">
                  <p style={{ fontSize: 15, fontWeight: 800, color: "var(--color-primary-dark)", marginBottom: 12 }}>
                    Question {step + 1}
                  </p>
                  <h1
                    ref={headingRef}
                    tabIndex={-1}
                    style={{ fontSize: "clamp(34px, 4.6vw, 68px)", lineHeight: 1.02, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--color-dark)", outline: "none" }}
                  >
                    {info.title}
                  </h1>
                  <p className="g-lead" style={{ marginTop: 16, maxWidth: 640 }}>
                    {info.hint}
                  </p>

                  <div style={{ marginTop: 30 }}>
                    {step === 0 ? (
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 14 }}>
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
                      <form id="pc-contact-form" onSubmit={submit} noValidate>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 18 }}>
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
                        <div style={{ marginTop: 18 }}>
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
                      className="pcf-shake"
                      style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18, fontSize: 15, fontWeight: 700, color: "var(--color-dark)" }}
                    >
                      <FaExclamationCircle aria-hidden="true" />
                      {step === 0 ? "Pick at least one place to sell." : "Pick one option to continue."}
                    </p>
                  ) : null}

                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 14px", marginTop: 30 }}>
                    {step > 0 ? (
                      <button type="button" className="btn-outline" onClick={() => goTo(step - 1)}>
                        <FaArrowLeft aria-hidden="true" /> Back
                      </button>
                    ) : null}
                    {step < TOTAL_STEPS - 1 ? (
                      <button
                        type="button"
                        className="btn-accent pcf-next"
                        onClick={next}
                        aria-disabled={!stepValid(step)}
                      >
                        Continue <FaArrowRight aria-hidden="true" className="btn-arrow" />
                      </button>
                    ) : (
                      <button type="submit" form="pc-contact-form" className="btn-accent pcf-next" disabled={sending}>
                        {sending ? "Sending your Profit Check" : "Get my Profit Check"}
                        <FaArrowRight aria-hidden="true" className="btn-arrow" />
                      </button>
                    )}
                    {step < TOTAL_STEPS - 1 ? (
                      <span className="hidden md:inline" style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-light)" }}>
                        or press Enter
                      </span>
                    ) : null}
                  </div>

                  <p style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 26, fontSize: 14, fontWeight: 600, color: "var(--color-text-light)" }}>
                    <FaLock aria-hidden="true" style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                    No payment details asked. Takes about 2 minutes.
                  </p>
                </div>
              ) : null}

              {phase === "manual" ? (
                <div key="manual" className="slide-up-in">
                  <p style={{ fontSize: 15, fontWeight: 800, color: "var(--color-primary-dark)", marginBottom: 12 }}>Your answers are ready</p>
                  <h1
                    ref={headingRef}
                    tabIndex={-1}
                    style={{ fontSize: "clamp(34px, 4.6vw, 68px)", lineHeight: 1.02, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--color-dark)", outline: "none" }}
                  >
                    One last step: send your Profit Check
                  </h1>
                  <p className="g-lead" style={{ marginTop: 16, maxWidth: 640 }}>
                    Your Profit Check is not sent yet. Pick how you want to send it. Your answers are already filled in, so you only need to press send.
                  </p>
                  {sendButtons}
                </div>
              ) : null}

              {phase === "failed" ? (
                <div key="failed" className="slide-up-in">
                  <div
                    role="alert"
                    style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "18px 20px", borderRadius: 18, border: "2px solid var(--color-accent)", background: "#fff", marginBottom: 26, maxWidth: 720 }}
                  >
                    <FaExclamationCircle aria-hidden="true" style={{ color: "var(--color-dark)", fontSize: 22, flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.5, color: "var(--color-dark)" }}>
                      The form could not be sent. Your answers are safe on this page. Send them now on WhatsApp or by email with the buttons below.
                    </p>
                  </div>
                  <h1
                    ref={headingRef}
                    tabIndex={-1}
                    style={{ fontSize: "clamp(32px, 4.2vw, 60px)", lineHeight: 1.04, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--color-dark)", outline: "none" }}
                  >
                    Send your Profit Check another way
                  </h1>
                  {sendButtons}
                </div>
              ) : null}

              {phase === "success" ? (
                <div key="success" className="slide-up-in">
                  <div aria-hidden="true" style={{ position: "relative", width: 104, height: 104, marginBottom: 28 }}>
                    <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--color-accent)", animation: "pcf-halo 1.6s ease-out .3s 2 both" }} />
                    <span
                      style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", animation: "pcf-ring .6s cubic-bezier(.2,.9,.3,1.2) both" }}
                    >
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <path
                          d="M12 27 L22 37 L41 16"
                          stroke="#0A1B4D"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="48"
                          strokeDashoffset="48"
                          style={{ animation: "pcf-draw .5s ease-out .45s forwards" }}
                        />
                      </svg>
                    </span>
                  </div>
                  <h1
                    ref={headingRef}
                    tabIndex={-1}
                    style={{ fontSize: "clamp(34px, 4.6vw, 68px)", lineHeight: 1.02, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--color-dark)", outline: "none" }}
                  >
                    Your Profit Check is with our team.
                  </h1>
                  <p className="g-lead" style={{ marginTop: 16, maxWidth: 620 }}>
                    Thank you{contact.name.trim() ? `, ${contact.name.trim().split(" ")[0]}` : ""}. The <BrandName /> team will review your answers and contact you with a plan. Have a question now? Message us on WhatsApp.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 30 }}>
                    <a className="btn-accent" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : null}
            </div>

            {/* right: live ticket */}
            <aside aria-label="Your Profit Check so far" style={{ flex: "1 1 360px", minWidth: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto", padding: "6px 8px 0" }}>
              <Ticket rows={rows} name={contact.name} done={phase !== "form"} filled={filled} />
              <p style={{ marginTop: 26, fontSize: 14, fontWeight: 600, lineHeight: 1.5, color: "var(--color-text-light)", textAlign: "center" }}>
                This card fills in as you answer. Nothing is sent until the last step.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section aria-label="Why sellers start with a Profit Check" style={{ background: "#fff", padding: "clamp(48px, 6vw, 88px) 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
            {TILES.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.title} delay={i * 110}>
                  <div className="g-card" style={{ padding: "26px 26px", display: "flex", gap: 18, alignItems: "flex-start", height: "100%" }}>
                    <span className="icon-tile" aria-hidden="true">
                      <Icon />
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <h2 className="g-h3" style={{ color: "var(--color-dark)" }}>
                        {t.title}
                      </h2>
                      <p style={{ marginTop: 8, fontSize: 16, lineHeight: 1.55, color: "var(--color-text-light)" }}>{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
