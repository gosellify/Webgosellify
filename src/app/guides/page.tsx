import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaCalculator } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { guides } from "./guides";

export const metadata: Metadata = {
  title: "Seller guides for Amazon, Walmart and Temu",
  description: "Plain, practical guides for marketplace sellers: Walmart approval, selling on Temu, WFS vs FBA, wholesale vs arbitrage, plus a free profit calculator.",
};

export default function GuidesPage() {
  return (
    <>
      <section className="bg-tint grid-dots" style={{ position: "relative", overflow: "hidden" }}>
        <div className="blob" aria-hidden="true" style={{ width: 520, height: 520, background: "rgba(255,178,26,0.22)", top: -240, right: -120 }} />
        <div className="container-main" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 110px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <span className="g-eyebrow">Guides and free tools</span>
          <h1 className="g-h1" style={{ marginTop: 16, maxWidth: 1000 }}>
            Learn before you <span className="mark-amber">invest.</span>
          </h1>
          <p className="g-lead" style={{ maxWidth: 680, marginTop: 20 }}>
            Straight answers for Amazon, Walmart and Temu sellers, written by the team that runs the stores. Each guide links to the official rules so you can check them yourself.
          </p>
        </div>
      </section>

      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(360px, 100%), 1fr))", gap: 22 }}>
          {guides.map((g, i) => (
            <Reveal key={g.slug} delay={i * 90}>
              <Link href={`/guides/${g.slug}`} className="g-card" style={{ display: "flex", flexDirection: "column", gap: 14, padding: 32, height: "100%", textDecoration: "none", color: "var(--color-dark)" }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, fontWeight: 800 }}>
                  <span style={{ background: "var(--color-dark)", color: "#fff", padding: "5px 12px", borderRadius: 999 }}>{g.tag}</span>
                  <span style={{ color: "var(--color-text-light)" }}>{g.minutes} min read</span>
                </span>
                <span className="g-h3" style={{ fontSize: "clamp(24px, 2.2vw, 30px)" }}>{g.title}</span>
                <span style={{ color: "var(--color-text-light)", fontSize: 17 }}>{g.description}</span>
                <span style={{ marginTop: "auto", fontWeight: 800, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Read the guide <FaArrowRight size={12} />
                </span>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={guides.length * 90}>
            <Link href="/tools/profit-calculator" className="g-card-dark" style={{ display: "flex", flexDirection: "column", gap: 14, padding: 32, height: "100%", textDecoration: "none", color: "#fff", background: "var(--color-dark)" }}>
              <span style={{ width: 54, height: 54, borderRadius: 16, background: "var(--color-accent)", color: "var(--color-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                <FaCalculator aria-hidden="true" />
              </span>
              <span className="g-h3" style={{ fontSize: "clamp(24px, 2.2vw, 30px)" }}>Amazon and Walmart profit calculator</span>
              <span style={{ color: "#c9d6f7", fontSize: 17 }}>Type in your own numbers and see profit per unit, margin and ROI.</span>
              <span style={{ marginTop: "auto", fontWeight: 800, color: "var(--color-accent)", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Open the free tool <FaArrowRight size={12} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
