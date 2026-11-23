import type { Metadata } from "next";
import Link from "next/link";
import {
  FaAmazon,
  FaArrowRight,
  FaBan,
  FaBoxOpen,
  FaCheck,
  FaClipboardList,
  FaEbay,
  FaEtsy,
  FaExternalLinkAlt,
  FaFileInvoiceDollar,
  FaIdCard,
  FaKey,
  FaPlus,
  FaSearch,
  FaShieldAlt,
  FaShopify,
  FaStore,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { BrandName } from "@/components/brand/Logo";
import SetupForm from "./SetupForm";

export const metadata: Metadata = {
  title: "Seller Account Setup Service for Amazon, Walmart and Temu",
  description:
    "Seller account setup in your own name. We check what Amazon, Walmart Marketplace, Temu, eBay, Etsy and Shopify ask for, prepare your application and guide you through identity verification. We do not buy or sell accounts.",
  alternates: { canonical: "/services/seller-account-setup" },
};

const REVIEWED = "November 2026";

type IconType = typeof FaStore;

type Source = { label: string; href: string };

type Market = {
  name: string;
  icon: IconType;
  heading: string;
  intro: string;
  asks: string[];
  note: string;
  sources: Source[];
};

const MARKETS: Market[] = [
  {
    name: "Amazon",
    icon: FaAmazon,
    heading: "Amazon seller account setup",
    intro:
      "Amazon lists what to have ready before you register in its seller registration guide. You can register as a company or as an individual without an LLC.",
    asks: [
      "A government-issued ID, such as a passport",
      "Business licence or registration details, if you sell as a business",
      "A bank account in your name or your business name",
      "A credit card that can be charged internationally",
      "Tax information",
      "Proof of address dated within the last 180 days",
      "An identity check: a photo of your face and ID, or a video call with Amazon",
    ],
    note: "The guide says a US bank account is not required and that verification usually takes about three business days. Selling plan prices can change, so check the guide for the current ones.",
    sources: [{ label: "Amazon seller registration guide", href: "https://sell.amazon.com/sell/registration-guide" }],
  },
  {
    name: "Walmart",
    icon: FaStore,
    heading: "Walmart seller account approval",
    intro:
      "Walmart Marketplace reviews each application. It asks for a real business with a selling record, so this is where a readiness check matters most.",
    asks: [
      "A business tax ID or business licence number. A Social Security number is not accepted",
      "Documents that prove your business name and address",
      "A government-issued ID for the applicant or legal representative",
      "A history of marketplace or ecommerce success",
      "Products with GTIN or UPC codes",
      "A catalog that follows the Prohibited Products Policy",
      "Walmart Fulfillment Services or a US warehouse that can handle returns",
    ],
    note: "Walmart says your tax registration must match your official records exactly. It lists different documents for businesses outside the US. Signing up is free and a referral fee applies per sale, so check the current fee schedule.",
    sources: [
      {
        label: "Before you start selling on Walmart Marketplace",
        href: "https://marketplacelearn.walmart.com/guides/Getting%2520started/Onboarding/Before-you-start-selling-on-Walmart-Marketplace",
      },
      { label: "Walmart seller registration guide", href: "https://marketplace.walmart.com/seller-registration-guide/" },
    ],
  },
  {
    name: "Temu",
    icon: FaBoxOpen,
    heading: "Create a Temu seller account",
    intro:
      "Temu shows three steps on its Seller Center: create your account, complete your application, then wait for the result. The exact documents are shown inside the application.",
    asks: [
      "The country you sell from: where your business is registered or where you live",
      "An email address or phone number for the account",
      "A completed application inside Seller Center",
      "Business and identity details, as the application asks for them",
    ],
    note: "The public sign-up page shows a United States seller option and sends sellers registered in mainland China or Hong Kong to a separate page. Temu says applications are normally reviewed within one business day. We confirm the current document list with you when you start.",
    sources: [{ label: "Temu Seller Center", href: "https://seller.temu.com/" }],
  },
  {
    name: "eBay",
    icon: FaEbay,
    heading: "eBay seller account setup",
    intro:
      "eBay lets you register as an individual or as a registered business. The details and documents depend on which one you pick. The list below is for US business sellers.",
    asks: [
      "Legal business name and physical business address. No PO boxes",
      "An EIN for a registered business",
      "Identity details for owners or other stakeholders",
      "Business documents, such as an EIN letter, business licence or formation papers",
      "A checking account in the same name as your eBay account",
      "A business checking account if the eBay account is a business account",
    ],
    note: "eBay can ask you to verify again later, for example when your sales grow or your details change. Payouts can be delayed until your details are verified.",
    sources: [{ label: "eBay help: registering as a seller", href: "https://www.ebay.com/help/selling/getting-paid/getting-paid-items-youve-sold/registering-seller?id=4792" }],
  },
  {
    name: "Etsy",
    icon: FaEtsy,
    heading: "Etsy shop setup",
    intro: "An Etsy shop is opened from your own Etsy account. Etsy walks you through preferences, a shop name, your first listing, payment and security.",
    asks: [
      "An Etsy account, plus shop language, country and currency",
      "A shop name of 4 to 20 characters",
      "A bank account to receive payouts",
      "A credit or debit card for Etsy bills",
      "An identity check with a government ID and a selfie",
      "Two-factor authentication turned on",
      "At least one listing before the shop opens",
    ],
    note: "Etsy says the ID must match the name on your bank account. It charges a one-time shop set-up fee, so check the current amount on Etsy.",
    sources: [{ label: "Etsy help: how to open an Etsy shop", href: "https://help.etsy.com/hc/en-us/articles/115015672808-How-to-Open-an-Etsy-Shop" }],
  },
  {
    name: "Shopify",
    icon: FaShopify,
    heading: "Shopify store setup",
    intro:
      "A Shopify store is your own website, so there is no marketplace application. The checks come when you turn on Shopify Payments to take card payments.",
    asks: [
      "Business and personal details. The list depends on the country of your store",
      "Documents to verify your account",
      "A selfie and photo ID check, when Shopify asks for it",
      "A bank account that can receive payouts, and proof that it is yours if asked",
      "Two-step authentication turned on",
    ],
    note: "Shopify publishes a separate requirements list for each supported country. We check the one for your country before the store is built.",
    sources: [{ label: "Shopify help: Shopify Payments onboarding", href: "https://help.shopify.com/en/manual/payments/shopify-payments/onboarding" }],
  },
];

type Step = { icon: IconType; title: string; text: string; who: string };

const STEPS: Step[] = [
  {
    icon: FaClipboardList,
    title: "Tell us where you stand",
    text: "Fill in the short form below. It asks which marketplaces you want, your business type, your country and what you already have. No documents, no numbers.",
    who: "You, about 1 minute",
  },
  {
    icon: FaSearch,
    title: "We check you against the official list",
    text: "We compare your answers with what each marketplace asks for today and send back a plain checklist: what is ready, what is missing and what to fix first.",
    who: "Our team",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Close the gaps",
    text: "No company or tax ID yet? Our company filing and tax filing teams can help with the LLC, the EIN and the tax side. You open the bank account in your own name.",
    who: "You and our team",
  },
  {
    icon: FaIdCard,
    title: "Prepare the application, then you verify",
    text: "We prepare the application with your real details so every name and address matches your documents. You submit it and you do the identity verification yourself.",
    who: "You, with our guidance",
  },
  {
    icon: FaStore,
    title: "First store setup",
    text: "Once the marketplace opens your account, we help with the first setup: store profile, shipping and return settings, and your first listings.",
    who: "Our team, on your account",
  },
];

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "What is a seller account setup service?",
    a: "It is help with opening your own seller account. We check what the marketplace asks for, tell you what is missing, prepare the application with your real details and guide you through identity verification. The account is in your name or your company name, and you own and control it.",
  },
  {
    q: "Can you guarantee Walmart seller account approval?",
    a: "No. Walmart reviews every application and decides on its own. Nobody outside Walmart can promise an approval. What we can do is check your business against the published requirements first, so you apply with complete and matching details.",
  },
  {
    q: "What do I need for Amazon seller account setup?",
    a: "Amazon's registration guide lists a government-issued ID, a bank account, a credit card that can be charged internationally, tax information and a recent proof of address. A business also needs its licence or registration details. Amazon then checks your identity with a photo or a video call.",
  },
  {
    q: "Do I need an LLC to open a seller account?",
    a: "It depends on the marketplace. Amazon lets you register as an individual. Walmart asks for a business tax ID or business licence number and does not accept a Social Security number. If you need a company or an EIN, our company filing service can help.",
  },
  {
    q: "Can I create a Temu seller account from outside the US?",
    a: "Temu's public Seller Center page asks which country you sell from. When we last checked, it showed a United States seller option and a separate page for sellers registered in mainland China or Hong Kong. Check the sign-up page for your country, or ask us and we will look at it with you.",
  },
  {
    q: "Will you do the identity verification for me?",
    a: "No. The owner does the identity verification themselves, with their own ID. We explain what to expect and how to prepare your documents, but we never appear for you and never use made-up details.",
  },
  {
    q: "Can I buy a ready-made seller account from you?",
    a: "No. We do not buy, sell, rent, broker or transfer seller accounts. It breaks marketplace rules and puts your money at risk. The safe route is your own account.",
  },
  {
    q: "Who owns the account and the login?",
    a: "You do. The account is registered with your details, your bank account and your email. You hold the main login. If we help with setup or management later, you can give our team limited user access and remove it at any time.",
  },
  {
    q: "How much does seller account setup cost?",
    a: "It depends on how many marketplaces you want and what is missing, for example a company or a tax ID. Send the form and we will reply with a clear quote before any work starts.",
  },
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

type CheckRow = { label: string; state: "ok" | "todo" | "you" };

const HERO_ROWS: CheckRow[] = [
  { label: "Business registration", state: "ok" },
  { label: "EIN or tax ID", state: "ok" },
  { label: "Business bank account", state: "todo" },
  { label: "Government ID", state: "ok" },
  { label: "Proof of address", state: "ok" },
  { label: "Identity verification", state: "you" },
];

const HERO_POINTS: string[] = ["Your name or your company", "Real details only", "You hold the login"];

const tabCss = MARKETS.map(
  (_, i) => `
.sas-picker:has(#sas-m-${i}:checked) .sas-tab-${i} { background: var(--color-dark); border-color: var(--color-dark); color: #fff; box-shadow: 0 18px 36px rgba(10,27,77,0.22); }
.sas-picker:has(#sas-m-${i}:checked) .sas-tab-${i} .sas-tabicon { background: var(--color-accent); color: var(--color-dark); transform: rotate(-8deg); }
.sas-picker:has(#sas-m-${i}:checked) .sas-panel-${i} { display: flex; }`
).join("");

const css = `
@keyframes sas-row { from { transform: translateX(-16px); opacity: 0; } to { transform: none; opacity: 1; } }
@keyframes sas-panel { from { transform: translateY(18px); opacity: 0; } to { transform: none; opacity: 1; } }
@keyframes sas-scan { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
@keyframes sas-line { from { transform: scaleY(0); } to { transform: scaleY(1); } }
.sas-check { animation: sas-row .6s cubic-bezier(.2,.8,.2,1) both; }
.sas-scan { position: absolute; left: 0; right: 0; height: 2px; background: var(--color-accent); box-shadow: 0 0 18px rgba(255,178,26,0.8); animation: sas-scan 5s ease-in-out infinite; pointer-events: none; }
.sas-radio { position: absolute; opacity: 0; width: 1px; height: 1px; pointer-events: none; }
.sas-tab { position: relative; display: flex; align-items: center; gap: 12px; flex: 1 1 150px; min-width: 0; padding: 16px 18px; border-radius: 18px; border: 2px solid var(--color-line); background: #fff; color: var(--color-dark); font-weight: 800; font-size: 17px; cursor: pointer; transition: transform .3s cubic-bezier(.2,.8,.2,1), background-color .3s, color .3s, border-color .3s, box-shadow .3s; }
.sas-tab:hover { transform: translateY(-4px); border-color: var(--color-primary); }
.sas-tab:has(.sas-radio:focus-visible) { outline: 3px solid var(--color-primary); outline-offset: 3px; }
.sas-tabicon { width: 38px; height: 38px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 19px; background: var(--color-primary-light); color: var(--color-primary); transition: background-color .3s, color .3s, transform .3s; }
.sas-panel { display: none; flex-wrap: wrap; align-items: flex-start; gap: clamp(28px, 4vw, 72px); padding: clamp(22px, 3.4vw, 56px); border-radius: 32px; background: #fff; border: 2px solid var(--color-line); animation: sas-panel .5s cubic-bezier(.2,.8,.2,1) both; }
.sas-ask { display: flex; align-items: flex-start; gap: 14px; padding: 14px 16px; border-radius: 16px; border: 2px solid var(--color-line); background: #fff; font-size: 16px; font-weight: 700; line-height: 1.4; color: var(--color-dark); transition: transform .25s, border-color .25s, background-color .25s; }
.sas-ask:hover { transform: translateX(6px); border-color: var(--color-primary); background: var(--color-primary-light); }
.sas-tick { width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 11px; background: var(--color-primary); color: #fff; }
.sas-src { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 14px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.14); color: #fff; text-decoration: none; font-size: 15px; font-weight: 700; line-height: 1.35; transition: background-color .25s, color .25s, transform .25s, border-color .25s; }
.sas-src:hover { background: var(--color-accent); border-color: var(--color-accent); color: var(--color-dark); transform: translateY(-3px); }
.sas-steps { position: relative; display: grid; gap: 18px; }
.sas-steps::before { content: ""; position: absolute; left: 27px; top: 28px; bottom: 28px; width: 3px; border-radius: 2px; background: linear-gradient(var(--color-primary), var(--color-accent)); transform-origin: top; animation: sas-line 1.6s cubic-bezier(.2,.8,.2,1) both; }
.sas-step { position: relative; display: flex; align-items: flex-start; gap: clamp(16px, 2vw, 28px); }
.sas-stepnum { position: relative; z-index: 1; width: 58px; height: 58px; border-radius: 18px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 22px; background: var(--color-dark); color: var(--color-accent); border: 4px solid #fff; transition: transform .35s cubic-bezier(.2,.8,.2,1), background-color .35s; }
.sas-step:hover .sas-stepnum { transform: rotate(-8deg) scale(1.1); background: var(--color-primary); color: #fff; }
.sas-how { display: grid; grid-template-columns: 1fr; gap: clamp(32px, 5vw, 96px); align-items: start; }
@media (min-width: 1040px) {
  .sas-how { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); }
  .sas-sticky { position: sticky; top: 120px; }
}
.sas-rule { display: flex; align-items: flex-start; gap: 14px; padding: 18px 20px; border-radius: 18px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); transition: transform .3s, background-color .3s; }
.sas-rule:hover { transform: translateY(-4px); background: rgba(255,255,255,0.16); }
.sas-light-link { color: #fff; font-weight: 800; text-decoration: underline; text-decoration-color: var(--color-accent); text-decoration-thickness: 3px; text-underline-offset: 4px; }
.sas-light-link:hover { color: var(--color-accent); }
.sas-faq { border: 2px solid var(--color-line); border-radius: 22px; background: #fff; transition: border-color .3s, box-shadow .3s; }
.sas-faq:hover { border-color: var(--color-primary); }
.sas-faq[open] { border-color: var(--color-dark); box-shadow: 8px 8px 0 var(--color-accent); }
.sas-faq summary { list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: clamp(18px, 2vw, 26px) clamp(18px, 2.2vw, 30px); cursor: pointer; font-size: clamp(17px, 1.5vw, 22px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.25; color: var(--color-dark); border-radius: 20px; }
.sas-faq summary::-webkit-details-marker { display: none; }
.sas-faq h3 { margin: 0; font: inherit; letter-spacing: inherit; }
.sas-plus { width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; background: var(--color-primary-light); color: var(--color-primary); transition: transform .45s cubic-bezier(.2,.8,.2,1), background-color .3s, color .3s; }
.sas-faq summary:hover .sas-plus { background: var(--color-primary); color: #fff; }
.sas-faq[open] .sas-plus { transform: rotate(135deg); background: var(--color-dark); color: var(--color-accent); }
.sas-faq[open] .sas-faqbody { animation: sas-panel .4s cubic-bezier(.2,.8,.2,1) both; }
.sas-inline { color: var(--color-primary); font-weight: 800; text-decoration: none; }
${tabCss}
`;

function stateTag(state: CheckRow["state"]) {
  if (state === "ok") {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 11px", borderRadius: 999, fontSize: 12, fontWeight: 800, background: "var(--color-primary)", color: "#fff", whiteSpace: "nowrap" }}>
        <FaCheck aria-hidden="true" style={{ fontSize: 10 }} /> Ready
      </span>
    );
  }
  if (state === "todo") {
    return (
      <span style={{ padding: "5px 11px", borderRadius: 999, fontSize: 12, fontWeight: 800, background: "var(--color-accent)", color: "var(--color-dark)", whiteSpace: "nowrap" }}>To fix</span>
    );
  }
  return (
    <span style={{ padding: "5px 11px", borderRadius: 999, fontSize: 12, fontWeight: 800, background: "rgba(255,255,255,0.14)", color: "#fff", whiteSpace: "nowrap" }}>You do this</span>
  );
}

export default function SellerAccountSetupPage() {
  return (
    <>
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      {/* Hero */}
      <section className="g-section grid-dots" style={{ background: "#fff", overflow: "hidden", paddingTop: "clamp(48px, 6vw, 96px)" }}>
        <span aria-hidden="true" className="blob" style={{ width: 420, height: 420, background: "rgba(21,96,255,0.14)", top: -140, right: -80 }} />
        <div className="container-wide" style={{ position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px, 5vw, 88px)" }}>
            <div style={{ flex: "1.4 1 560px", minWidth: 0 }}>
              <Reveal>
                <span className="g-eyebrow" style={{ marginBottom: 22 }}>
                  Seller account setup
                </span>
                <h1 className="g-h1" style={{ fontSize: "clamp(40px, 5.6vw, 88px)" }}>
                  Seller account setup, in <span className="mark-amber">your own name.</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="g-lead" style={{ marginTop: 26, maxWidth: 720 }}>
                  <BrandName /> is an Amazon seller account setup service that also covers Walmart Marketplace, Temu, eBay, Etsy and Shopify. We check that you have what the marketplace asks for, prepare your application and guide you through identity verification. You own and control the account from day one.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 18px", marginTop: 34 }}>
                  <a href="#setup-form" className="btn-accent">
                    Start my account setup <FaArrowRight className="btn-arrow" aria-hidden="true" />
                  </a>
                  <a href="#what-they-ask" className="btn-outline">
                    See what each marketplace asks for
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <ul style={{ listStyle: "none", padding: 0, margin: "34px 0 0", display: "flex", flexWrap: "wrap", gap: "12px 26px" }}>
                  {HERO_POINTS.map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, fontWeight: 800, color: "var(--color-dark)" }}>
                      <span className="sas-tick" aria-hidden="true">
                        <FaCheck />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 20, fontSize: 15, fontWeight: 600, lineHeight: 1.55, color: "var(--color-text-light)", maxWidth: 640 }}>
                  The marketplace decides every application. We do not promise approval, and we do not buy or sell seller accounts.
                </p>
              </Reveal>
            </div>

            {/* readiness mock */}
            <Reveal from="right" delay={160} style={{ flex: "1 1 380px", minWidth: 0, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
              <div className="float-a">
                <div style={{ position: "relative", overflow: "hidden", borderRadius: 28, background: "var(--color-dark)", color: "#fff", padding: "clamp(20px, 2.4vw, 32px)", boxShadow: "0 40px 80px rgba(10,27,77,0.3)" }}>
                  <span className="sas-scan" aria-hidden="true" />
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                    <span style={{ width: 44, height: 44, borderRadius: 14, background: "var(--color-accent)", color: "var(--color-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                      <FaClipboardList aria-hidden="true" />
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 800, fontSize: 17, lineHeight: 1.2 }}>Readiness checklist</div>
                      <div style={{ fontSize: 13, color: "#C9D6F7" }}>Checked before you apply</div>
                    </div>
                    <span style={{ marginLeft: "auto", padding: "6px 11px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.28)", fontSize: 11, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "#C9D6F7", whiteSpace: "nowrap" }}>
                      Sample view
                    </span>
                  </div>
                  <div style={{ display: "grid", gap: 9 }}>
                    {HERO_ROWS.map((r, i) => (
                      <div
                        key={r.label}
                        className="sas-check"
                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "13px 14px", borderRadius: 14, background: "rgba(255,255,255,0.06)", animationDelay: `${300 + i * 130}ms` }}
                      >
                        <span style={{ fontSize: 15, fontWeight: 700, minWidth: 0 }}>{r.label}</span>
                        {stateTag(r.state)}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 18, fontSize: 14, color: "#C9D6F7" }}>
                    <span className="pulse-dot" aria-hidden="true" style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block", flexShrink: 0 }} />
                    One gap to close, then you are ready to apply
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marketplace picker */}
      <section id="what-they-ask" className="g-section bg-tint" style={{ overflow: "hidden", scrollMarginTop: 80 }}>
        <div className="container-main">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px", marginBottom: "clamp(32px, 4vw, 56px)" }}>
            <Reveal style={{ flex: "1 1 560px", minWidth: 0, maxWidth: 920 }}>
              <span className="g-eyebrow" style={{ marginBottom: 20 }}>
                Requirements
              </span>
              <h2 className="g-h2">
                What each marketplace <span className="mark-amber">asks for.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} style={{ flex: "1 1 340px", minWidth: 0, maxWidth: 480 }}>
              <p className="g-lead">Pick a marketplace. Each list comes from that marketplace&apos;s own pages, and each one links to the source so you can check it yourself.</p>
              <p style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 14px", borderRadius: 999, background: "#fff", border: "2px solid var(--color-line)", fontSize: 14, fontWeight: 800, color: "var(--color-dark)" }}>
                <span className="pulse-dot" aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-primary)", display: "inline-block" }} />
                Last reviewed: {REVIEWED}
              </p>
            </Reveal>
          </div>

          <div className="sas-picker">
            <Reveal>
              <div role="radiogroup" aria-label="Choose a marketplace" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "clamp(24px, 3vw, 40px)" }}>
                {MARKETS.map((m, i) => {
                  const Icon = m.icon;
                  return (
                    <label key={m.name} className={`sas-tab sas-tab-${i}`}>
                      <input type="radio" name="sas-market" id={`sas-m-${i}`} className="sas-radio" defaultChecked={i === 0} />
                      <span className="sas-tabicon">
                        <Icon aria-hidden="true" />
                      </span>
                      {m.name}
                    </label>
                  );
                })}
              </div>
            </Reveal>

            {MARKETS.map((m, i) => (
              <div key={m.name} className={`sas-panel sas-panel-${i}`}>
                <div style={{ flex: "1.3 1 520px", minWidth: 0 }}>
                  <h3 style={{ fontSize: "clamp(26px, 2.8vw, 44px)", lineHeight: 1.06, fontWeight: 800, letterSpacing: "-0.035em", marginBottom: 16 }}>{m.heading}</h3>
                  <p className="g-lead" style={{ maxWidth: 680, marginBottom: 26 }}>
                    {m.intro}
                  </p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
                    {m.asks.map((a) => (
                      <li key={a} className="sas-ask">
                        <span className="sas-tick" aria-hidden="true">
                          <FaCheck />
                        </span>
                        <span style={{ minWidth: 0 }}>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ flex: "1 1 340px", minWidth: 0, borderRadius: 24, background: "var(--color-dark)", color: "#fff", padding: "clamp(20px, 2.2vw, 30px)" }}>
                  <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Good to know</p>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "#C9D6F7" }}>{m.note}</p>
                  <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--color-accent)", margin: "24px 0 12px" }}>Official source</p>
                  <div style={{ display: "grid", gap: 10 }}>
                    {m.sources.map((s) => (
                      <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="sas-src">
                        <span style={{ minWidth: 0 }}>{s.label}</span>
                        <FaExternalLinkAlt aria-hidden="true" style={{ marginLeft: "auto", flexShrink: 0, fontSize: 13 }} />
                      </a>
                    ))}
                  </div>
                  <p style={{ marginTop: 16, fontSize: 13, fontWeight: 600, lineHeight: 1.5, color: "#C9D6F7" }}>
                    Last reviewed: {REVIEWED}. Rules and fees change, so the official page always wins.
                  </p>
                  <div style={{ marginTop: 22 }}>
                    <a href="#setup-form" className="btn-accent">
                      Check if I am ready <FaArrowRight className="btn-arrow" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Reveal>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.6, color: "var(--color-text-light)", maxWidth: 900 }}>
              Missing a company or a tax ID? See{" "}
              <Link href="/services/company-filing" className="sas-inline link-underline">
                LLC and EIN filing
              </Link>{" "}
              and{" "}
              <Link href="/services/tax-filing" className="sas-inline link-underline">
                tax filing
              </Link>
              . We are not part of any marketplace and each marketplace makes its own decision on every application.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <div className="sas-how">
            <div className="sas-sticky">
              <Reveal from="left">
                <span className="g-eyebrow">How it works</span>
                <h2 className="g-h2" style={{ marginTop: 18 }}>
                  Five steps to <span className="mark-amber">your own account.</span>
                </h2>
                <p className="g-lead" style={{ marginTop: 22, maxWidth: 500 }}>
                  We do the checking and the preparation. You stay the owner, and you do the parts only an owner can do.
                </p>
                <div style={{ marginTop: 30, display: "grid", gap: 12, maxWidth: 500 }}>
                  <Link href="/services/company-filing" className="g-card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", textDecoration: "none", color: "var(--color-dark)" }}>
                    <span className="icon-tile" aria-hidden="true">
                      <FaUserTie />
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: "block", fontSize: 17, fontWeight: 800 }}>Company filing</span>
                      <span style={{ display: "block", fontSize: 14, color: "var(--color-text-light)" }}>LLC formation and EIN</span>
                    </span>
                    <FaArrowRight aria-hidden="true" style={{ marginLeft: "auto", flexShrink: 0, color: "var(--color-primary)" }} />
                  </Link>
                  <Link href="/services/tax-filing" className="g-card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", textDecoration: "none", color: "var(--color-dark)" }}>
                    <span className="icon-tile" aria-hidden="true">
                      <FaFileInvoiceDollar />
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: "block", fontSize: 17, fontWeight: 800 }}>Tax filing</span>
                      <span style={{ display: "block", fontSize: 14, color: "var(--color-text-light)" }}>Help with the tax side of your business</span>
                    </span>
                    <FaArrowRight aria-hidden="true" style={{ marginLeft: "auto", flexShrink: 0, color: "var(--color-primary)" }} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <ol className="sas-steps" style={{ listStyle: "none", margin: 0, padding: 0, minWidth: 0 }}>
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title}>
                    <Reveal delay={Math.min(i, 4) * 80}>
                      <div className="sas-step">
                        <span className="sas-stepnum" aria-hidden="true">
                          <Icon />
                        </span>
                        <div className="g-card" style={{ flex: 1, minWidth: 0, padding: "clamp(18px, 2vw, 28px)" }}>
                          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 16px", marginBottom: 10 }}>
                            <h3 className="g-h3" style={{ color: "var(--color-dark)" }}>
                              <span className="t-blue">Step {i + 1}.</span> {s.title}
                            </h3>
                            <span style={{ padding: "6px 12px", borderRadius: 999, background: "var(--color-primary-light)", fontSize: 13, fontWeight: 800, color: "var(--color-dark)", whiteSpace: "nowrap" }}>{s.who}</span>
                          </div>
                          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--color-text-light)", maxWidth: 720 }}>{s.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* We do not buy or sell seller accounts */}
      <section className="g-section bg-blue on-dark" style={{ overflow: "hidden" }}>
        <span aria-hidden="true" className="blob" style={{ width: 420, height: 420, background: "rgba(10,27,77,0.5)", bottom: -160, right: -100 }} />
        <div className="container-main" style={{ position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "clamp(32px, 5vw, 88px)" }}>
            <Reveal from="left" style={{ flex: "1.2 1 520px", minWidth: 0 }}>
              <span aria-hidden="true" style={{ width: 64, height: 64, borderRadius: 20, background: "var(--color-accent)", color: "var(--color-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 24 }}>
                <FaBan />
              </span>
              <h2 className="g-h2">We do not buy or sell seller accounts.</h2>
              <p style={{ marginTop: 22, fontSize: "clamp(17px, 1.4vw, 21px)", lineHeight: 1.6, color: "#fff", maxWidth: 720 }}>
                We do not buy, sell, rent, broker or transfer seller accounts. We do not open accounts in someone else&apos;s name or with made-up details. The safe route is your own account, opened with your real details.
              </p>
              <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.65, color: "#fff", maxWidth: 720 }}>
                Amazon staff say on the{" "}
                <a className="sas-light-link" href="https://sellercentral.amazon.com/seller-forums/discussions/t/4c313c7e-87de-4922-8a8c-64c73ec77a73" target="_blank" rel="noopener noreferrer">
                  official Seller Forums
                </a>{" "}
                that seller accounts are generally not transferable. Walmart&apos;s{" "}
                <a className="sas-light-link" href="https://marketplacelearn.walmart.com/guides/Policies%20%26%20standards/Performance/Marketplace-Seller-Code-of-Conduct" target="_blank" rel="noopener noreferrer">
                  Marketplace Seller Code of Conduct
                </a>{" "}
                bans account brokering and account switching, and warns that using transferred accounts to get around its rules can end in suspension or termination. A bought account can be closed at any time, with your stock and your payouts inside it.
              </p>
              <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.65, color: "#fff", maxWidth: 720 }}>
                Want to buy or sell a whole ecommerce business? Ask the marketplace about its official ownership-change process and get legal advice first. We can help prepare a store for that, but we do not broker accounts.
              </p>
              <p style={{ marginTop: 16, fontSize: 14, fontWeight: 700, color: "#fff" }}>Last reviewed: {REVIEWED}</p>
            </Reveal>

            <div style={{ flex: "1 1 360px", minWidth: 0, display: "grid", gap: 14 }}>
              <Reveal from="right">
                <div className="sas-rule">
                  <FaKey aria-hidden="true" style={{ fontSize: 22, color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }} />
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontSize: 19, fontWeight: 800, color: "#fff" }}>You own it</h3>
                    <p style={{ marginTop: 4, fontSize: 16, lineHeight: 1.55, color: "#fff" }}>Your name or your company, your bank account, your email, your login.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal from="right" delay={100}>
                <div className="sas-rule">
                  <FaIdCard aria-hidden="true" style={{ fontSize: 22, color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }} />
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontSize: 19, fontWeight: 800, color: "#fff" }}>You verify it</h3>
                    <p style={{ marginTop: 4, fontSize: 16, lineHeight: 1.55, color: "#fff" }}>The owner does the identity check with their own ID. Nobody stands in for you.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal from="right" delay={200}>
                <div className="sas-rule">
                  <FaShieldAlt aria-hidden="true" style={{ fontSize: 22, color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }} />
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontSize: 19, fontWeight: 800, color: "#fff" }}>No approval promises</h3>
                    <p style={{ marginTop: 4, fontSize: 16, lineHeight: 1.55, color: "#fff" }}>The marketplace decides. We make sure you apply with complete, matching and true details.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <SetupForm />

      {/* FAQ */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <div className="sas-how">
            <div className="sas-sticky">
              <Reveal from="left">
                <span className="g-eyebrow">FAQ</span>
                <h2 className="g-h2" style={{ marginTop: 18 }}>
                  Seller account setup <span className="mark-amber">questions.</span>
                </h2>
                <p className="g-lead" style={{ marginTop: 22, maxWidth: 480 }}>
                  Short, straight answers. If yours is not here, message us on WhatsApp. We reply 24/7.
                </p>
                <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
                  <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-navy">
                    <FaWhatsapp aria-hidden="true" /> Ask on WhatsApp
                  </a>
                  <Link href="/faq" className="link-underline" style={{ fontWeight: 800, color: "var(--color-dark)", textDecoration: "none" }}>
                    See all questions
                  </Link>
                </div>
              </Reveal>
            </div>

            <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={Math.min(i, 5) * 60}>
                  <details className="sas-faq" open={i === 0}>
                    <summary>
                      <h3>{f.q}</h3>
                      <span className="sas-plus" aria-hidden="true">
                        <FaPlus />
                      </span>
                    </summary>
                    <div className="sas-faqbody" style={{ padding: "0 clamp(18px, 2.2vw, 30px) clamp(20px, 2.2vw, 28px)" }}>
                      <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text-light)", maxWidth: 720 }}>{f.a}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="g-section bg-tint" style={{ overflow: "hidden", paddingTop: 0 }}>
        <div className="container-main">
          <Reveal from="zoom">
            <div className="bg-navy grid-dots-dark on-dark" style={{ position: "relative", overflow: "hidden", borderRadius: 36, padding: "clamp(32px, 5vw, 88px)", marginTop: "clamp(72px, 9vw, 140px)" }}>
              <span aria-hidden="true" className="blob" style={{ width: 380, height: 380, background: "rgba(21,96,255,0.45)", top: -140, right: -80 }} />
              <div style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "28px 64px" }}>
                <div style={{ flex: "1 1 520px", minWidth: 0, maxWidth: 860 }}>
                  <h2 className="g-h2">
                    Account open? <span className="t-amber">Now let it earn.</span>
                  </h2>
                  <p className="g-lead" style={{ marginTop: 18, maxWidth: 680 }}>
                    Once your account is live, <BrandName dark /> can run the store for you on profit share. You pay from profit, with no contract. See our{" "}
                    <Link href="/services/walmart-management" className="sas-light-link">
                      Walmart management services
                    </Link>
                    ,{" "}
                    <Link href="/services/amazon" className="sas-light-link">
                      Amazon store management
                    </Link>{" "}
                    and{" "}
                    <Link href="/services/temu" className="sas-light-link">
                      Temu store management
                    </Link>
                    .
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                  <Link href="/profit-check" className="btn-accent">
                    Start the 2-minute Profit Check <FaArrowRight className="btn-arrow" aria-hidden="true" />
                  </Link>
                  <a href="#setup-form" className="btn-outline-white">
                    Start my account setup
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
