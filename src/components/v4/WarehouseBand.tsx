import type { ComponentType, CSSProperties } from "react";
import Link from "next/link";
import { FaArrowRight, FaBoxOpen, FaSearch, FaTruck, FaWarehouse } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

const phrases: string[] = [
  "Same-day prep and shipping",
  "FBA and WFS prep",
  "Inspection and repacking",
  "Direct to customer",
  "Discounted labels",
];

type Tile = { icon: ComponentType<{ style?: CSSProperties }>; title: string; text: string };

const tiles: Tile[] = [
  { icon: FaBoxOpen, title: "FBA and WFS prep", text: "We prep and label your stock for Amazon FBA and Walmart WFS." },
  { icon: FaSearch, title: "Inspection and repacking", text: "Every order is inspected and repacked in plain packaging before it ships." },
  { icon: FaWarehouse, title: "Storage and inventory", text: "Your stock is stored and tracked in our US warehouses." },
  { icon: FaTruck, title: "Direct-to-customer shipping", text: "Orders go straight to your customer with discounted shipping labels." },
];

function Row({ outline, reverse }: { outline: boolean; reverse: boolean }) {
  const textStyle: CSSProperties = outline
    ? { color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.55)" }
    : { color: "#fff" };
  return (
    <div className="marquee-wrap" style={{ overflow: "hidden" }}>
      <div className={reverse ? "marquee rev" : "marquee"} style={{ animationDuration: reverse ? "52s" : "44s" }}>
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1 ? "true" : undefined} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            {phrases.map((p) => (
              <span key={p} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
                <span
                  className="v4wh-phrase"
                  style={{
                    fontSize: "clamp(40px, 7.4vw, 124px)",
                    fontWeight: 800,
                    letterSpacing: "-0.045em",
                    lineHeight: 1.12,
                    whiteSpace: "nowrap",
                    ...textStyle,
                  }}
                >
                  {p}
                </span>
                <span
                  aria-hidden="true"
                  className="pulse-dot"
                  style={{ width: "clamp(14px, 1.6vw, 26px)", height: "clamp(14px, 1.6vw, 26px)", borderRadius: "50%", background: "var(--color-accent)", margin: "0 clamp(20px, 3vw, 52px)", flexShrink: 0 }}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WarehouseBand() {
  return (
    <section className="g-section bg-navy on-dark" style={{ overflow: "hidden" }}>
      <style>{`
        .v4wh-phrase { transition: color .3s; }
        .v4wh-phrase:hover { color: var(--color-accent) !important; -webkit-text-stroke-color: var(--color-accent) !important; }
        @keyframes v4wh-drive { 0% { transform: translateX(-6px); } 50% { transform: translateX(6px); } 100% { transform: translateX(-6px); } }
        .v4wh-tile .v4wh-icon { width: 60px; height: 60px; border-radius: 18px; background: rgba(255,255,255,0.08); color: var(--color-accent); display: flex; align-items: center; justify-content: center; font-size: 26px; transition: background-color .35s, color .35s, transform .35s; }
        .v4wh-tile .v4wh-icon svg { animation: v4wh-drive 3.2s ease-in-out infinite; }
        .v4wh-tile:hover .v4wh-icon { background: var(--color-accent); color: var(--color-dark); transform: rotate(-8deg) scale(1.1); }
        .v4wh-tile .v4wh-line { height: 3px; width: 44px; border-radius: 2px; background: var(--color-accent); transition: width .45s cubic-bezier(.2,.8,.2,1); }
        .v4wh-tile:hover .v4wh-line { width: 100%; }
      `}</style>

      <div className="container-wide" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
        <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <div style={{ flex: "1 1 520px", minWidth: 0 }}>
            <span className="g-eyebrow on-dark">Our US warehouses</span>
            <h2 className="g-h2" style={{ marginTop: 18 }}>
              Your orders, packed and <span className="t-amber">out the door.</span>
            </h2>
          </div>
          <p className="g-lead" style={{ flex: "0 1 440px", minWidth: 0 }}>
            FBA, WFS, dropshipping or direct to customer. Our own warehouses handle every selling method.
          </p>
        </Reveal>
      </div>

      <div style={{ display: "grid", gap: "clamp(6px, 1vw, 14px)" }}>
        <Row outline={false} reverse={false} />
        <Row outline reverse />
      </div>

      <div className="container-wide" style={{ marginTop: "clamp(40px, 5vw, 80px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(270px, 100%), 1fr))", gap: "clamp(14px, 1.6vw, 24px)" }}>
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 110} style={{ minWidth: 0 }}>
              <div className="g-card-dark v4wh-tile" style={{ height: "100%", padding: "clamp(22px, 2.2vw, 34px)", display: "flex", flexDirection: "column", gap: 16 }}>
                <span className="v4wh-icon" aria-hidden="true">
                  <t.icon style={{ animationDelay: `${i * 0.4}s` }} />
                </span>
                <h3 className="g-h3">{t.title}</h3>
                <p style={{ color: "#c9d6f7", fontSize: 16, lineHeight: 1.6 }}>{t.text}</p>
                <span className="v4wh-line" aria-hidden="true" style={{ marginTop: "auto" }} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} style={{ marginTop: "clamp(28px, 3.5vw, 48px)", display: "flex", flexWrap: "wrap", gap: 14 }}>
          <Link href="/services/3pl-warehouse" className="btn-outline-white">
            See the 3PL warehouse service <FaArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
