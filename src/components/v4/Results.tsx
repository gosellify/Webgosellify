import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import Tilt from "@/components/motion/Tilt";

type CaseStudy = {
  name: string;
  period: string;
  sales: number;
  roi: string;
  lastMonth: string;
  bars: number[];
  dark: boolean;
};

const cases: CaseStudy[] = [
  {
    name: "Thompson's store",
    period: "Sales in 11 months",
    sales: 691224,
    roi: "35% ROI",
    lastMonth: "$95,000+ last month",
    bars: [18, 24, 30, 38, 44, 52, 60, 70, 78, 88, 100],
    dark: true,
  },
  {
    name: "Celena's store",
    period: "Sales in 4 months",
    sales: 153438,
    roi: "35% ROI",
    lastMonth: "$58,200+ last month",
    bars: [22, 34, 44, 52, 62, 72, 80, 88, 94, 100],
    dark: false,
  },
  {
    name: "Joseph's store",
    period: "Sales in the first 2 days",
    sales: 8780,
    roi: "25% ROI",
    lastMonth: "$50,000+ last month",
    bars: [14, 20, 26, 36, 44, 56, 66, 78, 90, 100],
    dark: false,
  },
];

export default function Results() {
  return (
    <section className="g-section" style={{ background: "#fff", overflow: "hidden" }}>
      <style>{`
        .reveal:not(.in) .v4res-bar { animation: none; transform: scaleY(.08); }
        .v4res-card { transition: box-shadow .35s, border-color .35s; }
        .v4res-card:hover { box-shadow: 0 34px 70px rgba(10,27,77,0.2); border-color: var(--color-primary); }
        .v4res-card:hover .v4res-bar { background: var(--color-accent); }
        .v4res-bar { transition: background-color .3s; }
        @keyframes v4res-glow { 0%,100% { opacity: .35; transform: scale(1); } 50% { opacity: .7; transform: scale(1.15); } }
      `}</style>
      <div className="container-main">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 28, marginBottom: "clamp(36px, 5vw, 72px)" }}>
          <Reveal style={{ flex: "1 1 520px", minWidth: 0 }}>
            <span className="g-eyebrow">Client success stories</span>
            <h2 className="g-h2" style={{ marginTop: 18 }}>
              Real stores. <span className="mark-amber">Real numbers.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} style={{ flex: "0 1 460px", minWidth: 0 }}>
            <p className="g-lead">
              Three stores we manage. Every one kept a 0.02% order defect rate and had zero account health issues.
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "clamp(18px, 2vw, 32px)" }}>
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 140} from="zoom" style={{ minWidth: 0 }}>
              <Tilt max={7} style={{ height: "100%" }}>
                <article
                  className="v4res-card"
                  style={{
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 28,
                    padding: "clamp(24px, 2.6vw, 40px)",
                    background: c.dark ? "var(--color-dark)" : "#fff",
                    color: c.dark ? "#fff" : "var(--color-dark)",
                    border: c.dark ? "2px solid var(--color-dark)" : "2px solid var(--color-line)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 22,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -70,
                      right: -70,
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background: c.dark ? "var(--color-primary)" : "var(--color-primary-light)",
                      animation: "v4res-glow 6s ease-in-out infinite",
                      animationDelay: `${i * 0.8}s`,
                    }}
                  />
                  <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <h3 className="g-h3" style={{ color: "inherit" }}>{c.name}</h3>
                    <span style={{ background: "var(--color-accent)", color: "var(--color-dark)", fontWeight: 800, fontSize: 14, padding: "8px 14px", borderRadius: 999, whiteSpace: "nowrap" }}>
                      {c.roi}
                    </span>
                  </div>

                  <div style={{ position: "relative" }}>
                    <div style={{ fontSize: "clamp(40px, 4.2vw, 68px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1 }}>
                      <CountUp to={c.sales} prefix="$" duration={2000} />
                    </div>
                    <div style={{ marginTop: 8, fontSize: 15, fontWeight: 700, color: c.dark ? "#c9d6f7" : "var(--color-text-light)" }}>{c.period}</div>
                  </div>

                  <div style={{ position: "relative" }}>
                    <div
                      aria-hidden="true"
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: 6,
                        height: 120,
                        padding: "14px 14px 0",
                        borderRadius: 18,
                        background: c.dark ? "rgba(255,255,255,0.06)" : "var(--color-primary-light)",
                      }}
                    >
                      {c.bars.map((h, b) => (
                        <span
                          key={b}
                          className="bar-grow v4res-bar"
                          style={{
                            flex: 1,
                            height: `${h}%`,
                            borderRadius: "6px 6px 0 0",
                            background: b === c.bars.length - 1 ? "var(--color-accent)" : c.dark ? "#fff" : "var(--color-primary)",
                            opacity: b === c.bars.length - 1 ? 1 : 0.35 + (b / c.bars.length) * 0.65,
                            animationDelay: `${300 + i * 140 + b * 70}ms`,
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ marginTop: 6, fontSize: 11, fontWeight: 700, letterSpacing: 0.4, color: c.dark ? "#c9d6f7" : "var(--color-text-light)" }}>
                      Chart is an illustration of the trend
                    </div>
                  </div>

                  <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
                    {[c.lastMonth, "0.02% defect rate"].map((p) => (
                      <span
                        key={p}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 14,
                          fontWeight: 700,
                          padding: "8px 14px",
                          borderRadius: 999,
                          background: c.dark ? "rgba(255,255,255,0.1)" : "var(--color-primary-light)",
                          color: c.dark ? "#fff" : "var(--color-dark)",
                        }}
                      >
                        <FaCheck aria-hidden="true" style={{ fontSize: 11, color: c.dark ? "var(--color-accent)" : "var(--color-primary)" }} />
                        {p}
                      </span>
                    ))}
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} style={{ marginTop: "clamp(32px, 4vw, 56px)", textAlign: "center" }}>
          <Link href="/success-story" className="btn-outline">
            See all success stories <FaArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
