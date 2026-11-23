import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "./guides";

export const metadata: Metadata = {
  title: "Seller guides for Amazon, Walmart and Temu",
  description: "Plain, practical guides for marketplace sellers: Walmart approval, selling on Temu, WFS vs FBA, wholesale vs arbitrage, plus a free profit calculator.",
  robots: { index: false, follow: false },
};

export default function GuidesPage() {
  return (
    <section style={{ background: "#fff", padding: "clamp(36px, 5vw, 64px) 0 clamp(48px, 6vw, 80px)" }}>
      <div className="container-read">
        <span className="g-eyebrow">Guides and free tools</span>
        <h1 className="g-h1" style={{ marginTop: 10 }}>
          Seller guides for Amazon, Walmart and Temu
        </h1>
        <p className="g-lead" style={{ marginTop: 14 }}>
          Straight answers for Amazon, Walmart and Temu sellers, written by the team that runs the stores. Each guide links to the official rules so you can check them yourself.
        </p>

        <ul style={{ listStyle: "none", margin: "28px 0 0", padding: 0, borderBottom: "1px solid var(--color-line)" }}>
          {guides.map((g) => (
            <li key={g.slug} style={{ borderTop: "1px solid var(--color-line)", padding: "18px 0" }}>
              <p className="typo-small">
                {g.tag}. {g.minutes} min read. Last reviewed: {g.reviewed}
              </p>
              <h2 className="g-h3" style={{ marginTop: 4 }}>
                <Link href={`/guides/${g.slug}`} className="link-underline" style={{ color: "var(--color-dark)" }}>
                  {g.title}
                </Link>
              </h2>
              <p style={{ marginTop: 6, color: "var(--color-text-light)" }}>{g.description}</p>
            </li>
          ))}
          <li style={{ borderTop: "1px solid var(--color-line)", padding: "18px 0" }}>
            <p className="typo-small">Free tool</p>
            <h2 className="g-h3" style={{ marginTop: 4 }}>
              <Link href="/tools/profit-calculator" className="link-underline" style={{ color: "var(--color-dark)" }}>
                Amazon and Walmart profit calculator
              </Link>
            </h2>
            <p style={{ marginTop: 6, color: "var(--color-text-light)" }}>
              Type in your own numbers and see profit per unit, margin and ROI.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
