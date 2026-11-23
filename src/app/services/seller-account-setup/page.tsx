import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaAmazon, FaArrowRight, FaBoxOpen, FaEbay, FaEtsy, FaPlus, FaShopify, FaStore } from "react-icons/fa";
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

type Step = { title: string; text: string; who: string };

const STEPS: Step[] = [
  {
    title: "Tell us where you stand",
    text: "Fill in the short form below. It asks which marketplaces you want, your business type, your country and what you already have. No documents, no numbers.",
    who: "You, about 1 minute",
  },
  {
    title: "We check you against the official list",
    text: "We compare your answers with what each marketplace asks for today and send back a plain checklist: what is ready, what is missing and what to fix first.",
    who: "Our team",
  },
  {
    title: "Close the gaps",
    text: "No company or tax ID yet? Our company filing and tax filing teams can help with the LLC, the EIN and the tax side. You open the bank account in your own name.",
    who: "You and our team",
  },
  {
    title: "Prepare the application, then you verify",
    text: "We prepare the application with your real details so every name and address matches your documents. You submit it and you do the identity verification yourself.",
    who: "You, with our guidance",
  },
  {
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

const HERO_POINTS: string[] = [
  "The account is opened in your name or your company name.",
  "We use your real details only.",
  "You hold the main login.",
];

const OWN_RULES: { title: string; text: string }[] = [
  { title: "You own it", text: "Your name or your company, your bank account, your email, your login." },
  { title: "You verify it", text: "The owner does the identity check with their own ID. Nobody stands in for you." },
  { title: "No approval promises", text: "The marketplace decides. We make sure you apply with complete, matching and true details." },
];

const tabCss = MARKETS.map(
  (_, i) => `
.sas-picker:has(#sas-m-${i}:checked) .sas-tab-${i} { border-color: var(--color-primary); color: var(--color-primary); box-shadow: inset 0 0 0 1px var(--color-primary); }
.sas-picker:has(#sas-m-${i}:checked) .sas-panel-${i} { display: flex; }`
).join("");

const css = `
.sas-radio { position: absolute; opacity: 0; width: 1px; height: 1px; pointer-events: none; }
.sas-tab { position: relative; display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 8px; border: 1px solid var(--color-line); background: #fff; color: var(--color-dark); font-weight: 700; font-size: 15px; cursor: pointer; transition: border-color .15s; }
.sas-tab:hover { border-color: var(--color-primary); }
.sas-tab:has(.sas-radio:focus-visible) { outline: 3px solid var(--color-primary); outline-offset: 2px; }
.sas-panel { display: none; flex-wrap: wrap; align-items: flex-start; gap: 28px 48px; padding: clamp(20px, 2.6vw, 32px); border-radius: 10px; background: #fff; border: 1px solid var(--color-line); }
.sas-list { margin: 0; padding-left: 20px; display: grid; gap: 8px; color: var(--color-dark); }
.sas-inline { color: var(--color-primary); font-weight: 600; text-decoration: underline; text-underline-offset: 3px; overflow-wrap: anywhere; }
.sas-inline:hover { color: var(--color-dark); }
.sas-light-link { color: #fff; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
.sas-step { padding: 16px 0; border-top: 1px solid var(--color-line); }
.sas-faq { border-top: 1px solid var(--color-line); }
.sas-faq summary { list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 0; cursor: pointer; font-size: 17px; font-weight: 700; line-height: 1.4; color: var(--color-dark); }
.sas-faq summary:hover { color: var(--color-primary); }
.sas-faq summary::-webkit-details-marker { display: none; }
.sas-faq h3 { margin: 0; font: inherit; letter-spacing: inherit; }
.sas-plus { flex-shrink: 0; font-size: 13px; color: var(--color-text-light); display: flex; }
.sas-faq[open] .sas-plus { transform: rotate(45deg); }
${tabCss}
`;

const readLeft: React.CSSProperties = { marginLeft: "max(0px, calc((100% - 1200px) / 2))" };

export default function SellerAccountSetupPage() {
  return (
    <>
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      {/* Hero */}
      <section style={{ background: "#fff", padding: "clamp(36px, 5vw, 64px) 0 clamp(48px, 6vw, 80px)" }}>
        <div className="container-main">
          <div style={{ maxWidth: 760 }}>
            <span className="g-eyebrow">Seller account setup</span>
            <h1 className="g-h1" style={{ marginTop: 10 }}>
              Seller account setup, in your own name
            </h1>
            <p className="g-lead" style={{ marginTop: 16 }}>
              <BrandName /> is an Amazon seller account setup service that also covers Walmart Marketplace, Temu, eBay, Etsy and Shopify. We check that you have what the marketplace asks for, prepare your application and guide you through identity verification. You own and control the account from day one.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
              <a href="#setup-form" className="btn-primary">
                Start my account setup <FaArrowRight aria-hidden="true" />
              </a>
              <a href="#what-they-ask" className="btn-outline">
                See what each marketplace asks for
              </a>
            </div>
            <ul className="sas-list" style={{ marginTop: 26, color: "var(--color-text-light)" }}>
              {HERO_POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="typo-small" style={{ marginTop: 18 }}>
              The marketplace decides every application. We do not promise approval, and we do not buy or sell seller accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Marketplace picker */}
      <section id="what-they-ask" className="g-section bg-tint" style={{ scrollMarginTop: 80 }}>
        <div className="container-main">
          <h2 className="g-h2">What each marketplace asks for</h2>
          <p className="g-lead" style={{ marginTop: 12, maxWidth: 720 }}>
            Pick a marketplace. Each list comes from that marketplace&apos;s own pages, and each one links to the source so you can check it yourself.
          </p>
          <p className="typo-small" style={{ marginTop: 8 }}>Last reviewed: {REVIEWED}</p>

          <div className="sas-picker" style={{ marginTop: 24 }}>
            <div role="radiogroup" aria-label="Choose a marketplace" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
              {MARKETS.map((m, i) => {
                const Icon = m.icon;
                return (
                  <label key={m.name} className={`sas-tab sas-tab-${i}`}>
                    <input type="radio" name="sas-market" id={`sas-m-${i}`} className="sas-radio" defaultChecked={i === 0} />
                    <Icon aria-hidden="true" />
                    {m.name}
                  </label>
                );
              })}
            </div>

            {MARKETS.map((m, i) => (
              <div key={m.name} className={`sas-panel sas-panel-${i}`}>
                <div style={{ flex: "1.3 1 440px", minWidth: 0 }}>
                  <h3 className="g-h3">{m.heading}</h3>
                  <p style={{ marginTop: 8, color: "var(--color-text-light)" }}>{m.intro}</p>
                  <ul className="sas-list" style={{ marginTop: 14 }}>
                    {m.asks.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ flex: "1 1 300px", minWidth: 0 }}>
                  <h4 className="typo-h4">Good to know</h4>
                  <p style={{ marginTop: 6, fontSize: 16, color: "var(--color-text-light)" }}>{m.note}</p>
                  <h4 className="typo-h4" style={{ marginTop: 18 }}>Official source</h4>
                  <ul style={{ listStyle: "none", margin: "6px 0 0", padding: 0, display: "grid", gap: 6 }}>
                    {m.sources.map((s) => (
                      <li key={s.href}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="sas-inline">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="typo-small" style={{ marginTop: 12 }}>
                    Last reviewed: {REVIEWED}. Rules and fees change, so the official page always wins.
                  </p>
                  <p style={{ marginTop: 14 }}>
                    <a href="#setup-form" className="sas-inline">
                      Check if I am ready
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 22, fontSize: 16, color: "var(--color-text-light)", maxWidth: 800 }}>
            Missing a company or a tax ID? See{" "}
            <Link href="/services/company-filing" className="sas-inline">
              LLC and EIN filing
            </Link>{" "}
            and{" "}
            <Link href="/services/tax-filing" className="sas-inline">
              tax filing
            </Link>
            . We are not part of any marketplace and each marketplace makes its own decision on every application.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-read" style={readLeft}>
          <h2 className="g-h2">Five steps to your own account</h2>
          <p className="g-lead" style={{ marginTop: 12 }}>
            We do the checking and the preparation. You stay the owner, and you do the parts only an owner can do.
          </p>
          <ol style={{ listStyle: "none", margin: "20px 0 0", padding: 0, borderBottom: "1px solid var(--color-line)" }}>
            {STEPS.map((s, i) => (
              <li key={s.title} className="sas-step">
                <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.4 }}>
                  {i + 1}. {s.title}
                </h3>
                <p style={{ marginTop: 4, color: "var(--color-text-light)" }}>{s.text}</p>
                <p className="typo-small" style={{ marginTop: 4 }}>Who does it: {s.who}</p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 18, color: "var(--color-text-light)" }}>
            Related services:{" "}
            <Link href="/services/company-filing" className="sas-inline">
              company filing (LLC formation and EIN)
            </Link>{" "}
            and{" "}
            <Link href="/services/tax-filing" className="sas-inline">
              tax filing
            </Link>
            .
          </p>
        </div>
      </section>

      {/* We do not buy or sell seller accounts */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "32px 56px" }}>
            <div style={{ flex: "1.5 1 480px", minWidth: 0, maxWidth: 720 }}>
              <h2 className="g-h2">We do not buy or sell seller accounts</h2>
              <p style={{ marginTop: 14 }}>
                We do not buy, sell, rent, broker or transfer seller accounts. We do not open accounts in someone else&apos;s name or with made-up details. The safe route is your own account, opened with your real details.
              </p>
              <p style={{ marginTop: 14, color: "var(--color-text-light)" }}>
                Amazon staff say on the{" "}
                <a className="sas-inline" href="https://sellercentral.amazon.com/seller-forums/discussions/t/4c313c7e-87de-4922-8a8c-64c73ec77a73" target="_blank" rel="noopener noreferrer">
                  official Seller Forums
                </a>{" "}
                that seller accounts are generally not transferable. Walmart&apos;s{" "}
                <a className="sas-inline" href="https://marketplacelearn.walmart.com/guides/Policies%20%26%20standards/Performance/Marketplace-Seller-Code-of-Conduct" target="_blank" rel="noopener noreferrer">
                  Marketplace Seller Code of Conduct
                </a>{" "}
                bans account brokering and account switching, and warns that using transferred accounts to get around its rules can end in suspension or termination. A bought account can be closed at any time, with your stock and your payouts inside it.
              </p>
              <p style={{ marginTop: 14, color: "var(--color-text-light)" }}>
                Want to buy or sell a whole ecommerce business? Ask the marketplace about its official ownership-change process and get legal advice first. We can help prepare a store for that, but we do not broker accounts.
              </p>
              <p className="typo-small" style={{ marginTop: 12 }}>Last reviewed: {REVIEWED}</p>
            </div>

            <dl style={{ flex: "1 1 300px", minWidth: 0, borderBottom: "1px solid var(--color-line)" }}>
              {OWN_RULES.map((r) => (
                <div key={r.title} style={{ borderTop: "1px solid var(--color-line)", padding: "14px 0" }}>
                  <dt style={{ fontWeight: 700, color: "var(--color-dark)" }}>{r.title}</dt>
                  <dd style={{ marginTop: 2, fontSize: 16, color: "var(--color-text-light)" }}>{r.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <SetupForm />

      {/* FAQ */}
      <section className="g-section bg-tint">
        <div className="container-read" style={readLeft}>
          <h2 className="g-h2">Seller account setup questions</h2>
          <p className="g-lead" style={{ marginTop: 12, marginBottom: 20 }}>
            If yours is not here,{" "}
            <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="sas-inline">
              message us on WhatsApp
            </a>{" "}
            or{" "}
            <Link href="/faq" className="sas-inline">
              see all questions
            </Link>
            .
          </p>
          <div style={{ borderBottom: "1px solid var(--color-line)" }}>
            {FAQS.map((f, i) => (
              <details key={f.q} className="sas-faq" open={i === 0}>
                <summary>
                  <h3>{f.q}</h3>
                  <span className="sas-plus" aria-hidden="true">
                    <FaPlus />
                  </span>
                </summary>
                <p style={{ paddingBottom: 18, color: "var(--color-text-light)" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy on-dark" style={{ padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div className="container-main">
          <h2 className="g-h2" style={{ maxWidth: 720 }}>
            Once the account is open, we can run the store
          </h2>
          <p className="g-lead" style={{ marginTop: 12, maxWidth: 680 }}>
            <BrandName dark /> can manage the store for you on profit share. You pay from profit, with no contract. See our{" "}
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
            <Link href="/profit-check" className="btn-primary">
              Start the 2-minute Profit Check <FaArrowRight aria-hidden="true" />
            </Link>
            <a href="#setup-form" className="btn-outline-white">
              Start my account setup
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
