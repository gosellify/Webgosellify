"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { FaBuilding, FaClock, FaEnvelope, FaPhoneAlt, FaUsers, FaWhatsapp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";
import { ServiceHero } from "@/components/services/ServiceBlocks";
import { tileClass } from "@/components/services/serviceIcons";

type Detail = { label: string; lines: string[]; href?: string; external?: boolean };

const details: Detail[] = [
  {
    label: "Company address",
    lines: ["Gosellify LLC", "30 N Gould St Ste R", "Sheridan, WY 82801"],
  },
  {
    label: "Operations team",
    lines: ["Multan, Pakistan"],
  },
  {
    label: "Phone",
    lines: ["+1 307 393 8789"],
    href: "tel:+13073938789",
  },
  {
    label: "WhatsApp",
    lines: ["+1 307 393 8789"],
    href: "https://wa.me/13073938789",
    external: true,
  },
  {
    label: "Email",
    lines: ["info@gosellify.com"],
    href: "mailto:info@gosellify.com",
  },
  {
    label: "Hours",
    lines: ["Online 11 PM to 3 PM US Central"],
  },
];

const detailIcons: ReactNode[] = [<FaBuilding key="a" />, <FaUsers key="t" />, <FaPhoneAlt key="p" />, <FaWhatsapp key="w" />, <FaEnvelope key="e" />, <FaClock key="h" />];

const fieldStyle = {
  width: "100%",
  padding: "14px 16px",
  fontSize: "16px",
  borderRadius: "12px",
  border: "1px solid var(--color-line)",
  background: "#fff",
  color: "var(--color-dark)",
  fontFamily: "inherit",
} as const;

const labelStyle = { display: "block", fontSize: "14px", fontWeight: 700, color: "var(--color-dark)", marginBottom: "6px" } as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <ServiceHero
        eyebrow="Contact"
        title="Contact our ecommerce management team"
        lead="Ask us about your store or about our services. WhatsApp is the fastest way to reach us. You can also call, email or use the form."
        primaryLabel="Message us on WhatsApp"
        primaryHref="https://wa.me/13073938789"
        secondaryHref="#message"
        secondaryLabel="Use the form"
      />

      <section className="g-section bg-tint" style={{ paddingTop: "clamp(48px, 5vw, 72px)" }}>
        <div className="container-main">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 40px", alignItems: "flex-start" }}>
            {/* Left: Details */}
            <div style={{ flex: "1 1 380px", minWidth: 0 }}>
              <h2 className="g-h2" style={{ marginBottom: "18px" }}>
                Where to find us
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 14 }}>
                {details.map((d, index) => (
                  <div key={d.label} className="g-card" style={{ padding: 20, display: "flex", gap: 14, alignItems: "flex-start", minWidth: 0 }}>
                    <span className={tileClass(index)} aria-hidden="true">{detailIcons[index]}</span>
                    <div style={{ minWidth: 0 }}>
                      <span className="typo-small" style={{ display: "block", fontWeight: 700 }}>
                        {d.label}
                      </span>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.external ? "_blank" : undefined}
                          rel={d.external ? "noopener noreferrer" : undefined}
                          className="link-underline"
                          style={{ color: "var(--color-primary)", fontWeight: 700, overflowWrap: "anywhere" }}
                        >
                          {d.lines[0]}
                        </a>
                      ) : (
                        d.lines.map((line) => (
                          <span key={line} style={{ display: "block", fontWeight: 600, color: "var(--color-dark)", lineHeight: 1.45 }}>
                            {line}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div id="message" style={{ flex: "1 1 380px", minWidth: 0, background: "#fff", border: "1px solid var(--color-line)", borderRadius: 16, padding: "clamp(20px, 3vw, 32px)", scrollMarginTop: 100 }}>
              <h2 className="g-h2" style={{ marginBottom: "18px" }}>
                Send us a message
              </h2>
              {submitted && (
                <div
                  role="status"
                  style={{
                    padding: "12px",
                    borderRadius: "12px",
                    background: "var(--color-primary-light)",
                    border: "1px solid var(--color-primary)",
                    color: "var(--color-dark)",
                    fontSize: "15px",
                    fontWeight: 600,
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <label>
                  <span style={labelStyle}>Your name</span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    style={fieldStyle}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>
                <label>
                  <span style={labelStyle}>Email address</span>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    style={fieldStyle}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </label>
                <label>
                  <span style={labelStyle}>Subject</span>
                  <input
                    type="text"
                    placeholder="Subject"
                    style={fieldStyle}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </label>
                <label>
                  <span style={labelStyle}>Your message</span>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    style={{ ...fieldStyle, resize: "none" }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </label>
                <button type="submit" className="btn-accent" style={{ width: "100%" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
