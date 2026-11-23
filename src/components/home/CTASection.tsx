import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-navy" style={{ padding: "clamp(56px, 6vw, 84px) 0" }}>
      <div className="container-main center">
        <h2 className="g-h2" style={{ color: "#fff", maxWidth: 720, margin: "0 auto" }}>
          Tell us about your store
        </h2>
        <p className="g-lead" style={{ color: "#c9d6f7", maxWidth: 620, marginTop: 12 }}>
          Answer a few questions in the Profit Check and we will reply with an honest view of what we can and cannot do for it.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px 28px" }}>
          <Link href="/profit-check" className="btn-accent">
            Start the Profit Check <FaArrowRight className="btn-arrow" aria-hidden="true" style={{ fontSize: 13 }} />
          </Link>
          <a
            href="https://wa.me/13073938789"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            <FaWhatsapp aria-hidden="true" /> Or message us on WhatsApp
          </a>
        </div>
        <p className="typo-small" style={{ color: "#c9d6f7", marginTop: 20 }}>
          Online 11 PM to 3 PM US Central
        </p>
      </div>
    </section>
  );
}
