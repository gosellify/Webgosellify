"use client";

import { useState } from "react";
import CTASection from "@/components/home/CTASection";

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
      <section className="g-section" style={{ background: "#fff", paddingBottom: "40px" }}>
        <div className="container-main">
          <span className="g-eyebrow" style={{ marginBottom: "10px" }}>Contact</span>
          <h1 className="g-h1" style={{ maxWidth: "820px", marginBottom: "16px" }}>
            Contact our ecommerce management team
          </h1>
          <p className="g-lead" style={{ maxWidth: "720px" }}>
            Ask us about your store or about our services. WhatsApp is the fastest way to reach
            us. You can also call, email or use the form.
          </p>
        </div>
      </section>

      <section className="bg-tint" style={{ padding: "56px 0 72px" }}>
        <div className="container-main">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 56px", alignItems: "flex-start" }}>
            {/* Left: Details */}
            <div style={{ flex: "1 1 380px", minWidth: 0 }}>
              <h2 className="g-h2" style={{ marginBottom: "16px" }}>
                Where to find us
              </h2>
              <div style={{ borderTop: "1px solid var(--color-line)" }}>
                {details.map((d) => (
                  <div
                    key={d.label}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "2px 24px",
                      padding: "14px 0",
                      borderBottom: "1px solid var(--color-line)",
                    }}
                  >
                    <span className="typo-small" style={{ flex: "0 0 150px", fontWeight: 700, color: "var(--color-dark)", paddingTop: "3px" }}>
                      {d.label}
                    </span>
                    <span style={{ flex: "1 1 200px", minWidth: 0 }}>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.external ? "_blank" : undefined}
                          rel={d.external ? "noopener noreferrer" : undefined}
                          className="link-underline"
                          style={{ color: "var(--color-primary)", fontWeight: 600 }}
                        >
                          {d.lines[0]}
                        </a>
                      ) : (
                        d.lines.map((line) => (
                          <span key={line} style={{ display: "block" }}>
                            {line}
                          </span>
                        ))
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ flex: "1 1 380px", minWidth: 0 }}>
              <h2 className="g-h2" style={{ marginBottom: "16px" }}>
                Send us a message
              </h2>
              {submitted && (
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    background: "#fff",
                    border: "1px solid var(--color-line)",
                    color: "var(--color-dark)",
                    fontSize: "15px",
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button type="submit" className="btn-primary" style={{ width: "100%" }}>
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
