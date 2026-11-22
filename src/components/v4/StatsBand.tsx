import React from "react";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";

interface Stat {
  to: number;
  prefix: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { to: 12, prefix: "$", suffix: "M+", label: "Client revenue managed" },
  { to: 2, prefix: "$", suffix: "M+", label: "Profit made for clients" },
  { to: 55, prefix: "", suffix: "+", label: "Active stores" },
  { to: 250, prefix: "", suffix: "+", label: "Clients served" },
];

export default function StatsBand() {
  return (
    <section className="bg-navy grid-dots-dark" style={{ color: "#fff", position: "relative", overflow: "hidden" }}>
      <div className="blob" aria-hidden="true" style={{ width: 420, height: 420, background: "rgba(21,96,255,0.45)", top: -200, left: "30%" }} />
      <div className="container-wide" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "36px 28px", paddingTop: 64, paddingBottom: 64 }}>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 110}>
            <div style={{ borderLeft: "3px solid var(--color-accent)", paddingLeft: 22 }}>
              <div style={{ fontWeight: 800, fontSize: "clamp(48px, 5.4vw, 88px)", letterSpacing: "-0.04em", lineHeight: 1, color: "var(--color-accent)" }}>
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div style={{ color: "#c9d6f7", marginTop: 10, fontWeight: 700, fontSize: 17 }}>{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
