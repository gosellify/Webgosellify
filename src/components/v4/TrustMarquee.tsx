import React from "react";

const items: string[] = ["Amazon", "Walmart", "eBay", "Shopify", "Etsy", "Temu", "FBA", "WFS", "Wholesale", "2-step dropshipping", "Private label", "3PL warehouse", "Account health"];

function Row() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
      {items.map((t, i) => (
        <span key={t} style={{ display: "inline-flex", alignItems: "center" }}>
          <span style={{ padding: "0 26px" }}>{t}</span>
          <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", background: i % 2 === 0 ? "var(--color-accent)" : "var(--color-primary)", display: "inline-block" }} />
        </span>
      ))}
    </span>
  );
}

export default function TrustMarquee() {
  return (
    <div className="marquee-wrap" style={{ overflow: "hidden", borderTop: "2px solid var(--color-line)", borderBottom: "2px solid var(--color-line)", background: "#fff" }}>
      <div className="marquee" style={{ padding: "22px 0", fontWeight: 800, fontSize: "clamp(20px, 2vw, 30px)", letterSpacing: "-0.02em", color: "var(--color-dark)" }}>
        <Row />
        <span aria-hidden="true">
          <Row />
        </span>
      </div>
    </div>
  );
}
