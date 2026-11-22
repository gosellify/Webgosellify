"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaPlus, FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

type Faq = { q: string; a: string; link?: { href: string; label: string } };

const faqs: Faq[] = [
  {
    q: "How much capital do I need to start?",
    a: "Minimum $3,000-$5,000 working capital depending on your business model. Marketplaces pay you after orders are delivered, so you need funds to buy products when customers order. The more capital you have, the faster we can scale your store.",
  },
  {
    q: "Do I need an existing seller account?",
    a: "You need an approved seller account to sell on a marketplace. If you do not have one yet, we guide you through the application step by step.",
  },
  {
    q: "What ROI can I expect?",
    a: "Our average ROI is 35%. Most stores land between 30% and 40% after all expenses: shipping, warehouse and marketplace fees. Your result depends on your product category and fulfillment method.",
    link: { href: "/success-story", label: "See client results" },
  },
  {
    q: "Can you manage more than one marketplace for me?",
    a: "Yes. Many of our clients sell on both Amazon and Walmart. We manage each store on its own, with a strategy made for that marketplace. Selling on more than one also spreads your risk. If one account has an issue, the other keeps earning.",
  },
  {
    q: "What if my account health metrics drop?",
    a: "We monitor your account health metrics daily. If any metric trends down, we take corrective action right away, whether it is shipping speed, order defect rate or customer response time. Prevention is always easier than reinstatement.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, no contracts and no lock-in periods. We earn your business every month through results. You are free to leave whenever you choose.",
  },
  {
    q: "How do you get paid?",
    a: "We work on profit share. You pay from profit, so there is no management fee until your store makes profit.",
    link: { href: "/pricing", label: "See how pricing works" },
  },
  {
    q: "How fast can we start?",
    a: "Start with the 2-minute Profit Check. A manager reviews your answers and replies with a plan for your store. On our 2-step dropshipping service, we set up your store and start selling within 7 days.",
    link: { href: "/profit-check", label: "Start the Profit Check" },
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <style>{`
        .v4faq-grid { display: grid; grid-template-columns: 1fr; gap: clamp(32px, 5vw, 96px); align-items: start; }
        @media (min-width: 1040px) {
          .v4faq-grid { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); }
          .v4faq-side { position: sticky; top: 120px; }
        }
        .v4faq-item { border: 2px solid var(--color-line); border-radius: 22px; background: #fff; transition: border-color .3s, box-shadow .3s, background-color .3s; }
        .v4faq-item:hover { border-color: var(--color-primary); }
        .v4faq-item.open { border-color: var(--color-dark); box-shadow: 8px 8px 0 var(--color-accent); }
        .v4faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: clamp(18px, 2vw, 26px) clamp(18px, 2.2vw, 30px); background: none; border: none; cursor: pointer; text-align: left; font-family: inherit; font-size: clamp(17px, 1.5vw, 22px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.25; color: var(--color-dark); border-radius: 20px; }
        .v4faq-plus { width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; background: var(--color-primary-light); color: var(--color-primary); transition: transform .45s cubic-bezier(.2,.8,.2,1), background-color .3s, color .3s; }
        .v4faq-btn:hover .v4faq-plus { background: var(--color-primary); color: #fff; }
        .v4faq-item.open .v4faq-plus { transform: rotate(135deg); background: var(--color-dark); color: var(--color-accent); }
        .v4faq-panel { display: grid; grid-template-rows: 0fr; visibility: hidden; transition: grid-template-rows .45s cubic-bezier(.2,.8,.2,1), visibility 0s linear .45s; }
        .v4faq-item.open .v4faq-panel { grid-template-rows: 1fr; visibility: visible; transition: grid-template-rows .45s cubic-bezier(.2,.8,.2,1), visibility 0s; }
        .v4faq-panel > div { overflow: hidden; min-height: 0; }
        .v4faq-body { padding: 0 clamp(18px, 2.2vw, 30px) clamp(20px, 2.2vw, 28px); opacity: 0; transform: translateY(-8px); transition: opacity .35s, transform .35s; }
        .v4faq-item.open .v4faq-body { opacity: 1; transform: none; transition-delay: .1s; }
        @keyframes v4faq-wave { 0%, 100% { transform: rotate(0); } 20% { transform: rotate(-14deg); } 40% { transform: rotate(12deg); } 60% { transform: rotate(-8deg); } 80% { transform: rotate(6deg); } }
        .v4faq-wa svg:first-child { animation: v4faq-wave 2.6s ease-in-out infinite; font-size: 20px; }
      `}</style>
      <div className="container-main">
        <div className="v4faq-grid">
          <div className="v4faq-side">
            <Reveal from="left">
              <span className="g-eyebrow">FAQ</span>
              <h2 className="g-h2" style={{ marginTop: 18 }}>
                Questions <span className="mark-amber">before you start.</span>
              </h2>
              <p className="g-lead" style={{ marginTop: 22, maxWidth: 480 }}>
                Short, straight answers. If yours is not here, message us on WhatsApp. We reply 24/7.
              </p>
              <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
                <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-navy v4faq-wa">
                  <FaWhatsapp aria-hidden="true" /> Ask on WhatsApp
                </a>
                <Link href="/faq" className="link-underline" style={{ fontWeight: 800, color: "var(--color-dark)", textDecoration: "none" }}>
                  See all questions
                </Link>
              </div>
            </Reveal>
          </div>

          <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={Math.min(i, 5) * 70}>
                  <div className={isOpen ? "v4faq-item open" : "v4faq-item"}>
                    <h3 style={{ margin: 0 }}>
                      <button
                        type="button"
                        id={`v4faq-q-${i}`}
                        className="v4faq-btn"
                        aria-expanded={isOpen}
                        aria-controls={`v4faq-a-${i}`}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                      >
                        <span>{f.q}</span>
                        <span className="v4faq-plus" aria-hidden="true">
                          <FaPlus />
                        </span>
                      </button>
                    </h3>
                    <div id={`v4faq-a-${i}`} role="region" aria-labelledby={`v4faq-q-${i}`} className="v4faq-panel">
                      <div>
                        <div className="v4faq-body">
                          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text-light)", maxWidth: 720 }}>{f.a}</p>
                          {f.link ? (
                            <Link
                              href={f.link.href}
                              className="link-underline"
                              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 14, fontWeight: 800, color: "var(--color-primary)", textDecoration: "none" }}
                            >
                              {f.link.label} <FaArrowRight aria-hidden="true" style={{ fontSize: 13 }} />
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
