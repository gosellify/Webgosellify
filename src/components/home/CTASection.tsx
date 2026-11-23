import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-navy" style={{ padding: "56px 0" }}>
      <div className="container-main">
        <h2 className="g-h2" style={{ color: "#fff", marginBottom: "10px" }}>
          Tell us about your store
        </h2>
        <p className="g-lead" style={{ color: "#c9d6f7", maxWidth: "620px", marginBottom: "24px" }}>
          Answer a few questions in the Profit Check and we will reply with an honest view of what we can and cannot do for it.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px" }}>
          <Link href="/profit-check" className="btn-accent">
            Start the Profit Check
          </Link>
          <a
            href="https://wa.me/13073938789"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Or message us on WhatsApp
          </a>
        </div>
        <p className="typo-small" style={{ color: "#c9d6f7", marginTop: "18px" }}>
          Online 11 PM to 3 PM US Central
        </p>
      </div>
    </section>
  );
}
