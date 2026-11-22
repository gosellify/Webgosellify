import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { BrandName, LogoMark } from "@/components/brand/Logo";

const benefits: string[] = [
  "No cap on earnings",
  "Monthly commission payouts",
  "Dedicated affiliate dashboard",
  "Marketing materials provided",
  "Personal affiliate manager",
];

type Node = { x: number; y: number; r: number; amber: boolean };

const hub = { x: 240, y: 180 };

const nodes: Node[] = [
  { x: 70, y: 70, r: 22, amber: false },
  { x: 410, y: 60, r: 26, amber: true },
  { x: 440, y: 200, r: 20, amber: false },
  { x: 380, y: 310, r: 24, amber: false },
  { x: 110, y: 300, r: 26, amber: true },
  { x: 40, y: 190, r: 18, amber: false },
  { x: 240, y: 40, r: 16, amber: false },
];

export default function Affiliate() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <style>{`
        @keyframes v4aff-line { 0% { stroke-dashoffset: 260; opacity: 0; } 8% { opacity: 1; } 40%, 82% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
        .v4aff-line { stroke-dasharray: 260; stroke-dashoffset: 260; animation: v4aff-line 7s ease-in-out infinite; }
        @keyframes v4aff-node { 0%, 8% { transform: scale(0); } 22% { transform: scale(1.18); } 30%, 86% { transform: scale(1); } 100% { transform: scale(0); } }
        .v4aff-node { transform-box: fill-box; transform-origin: center; animation: v4aff-node 7s ease-in-out infinite; }
        @keyframes v4aff-pulse { 0% { transform: scale(1); opacity: .5; } 100% { transform: scale(2.1); opacity: 0; } }
        .v4aff-pulse { transform-box: fill-box; transform-origin: center; animation: v4aff-pulse 2.6s ease-out infinite; }
        @supports not (offset-path: path("M 0 0 L 1 1")) { .v4aff-pkt { display: none; } }
        @keyframes v4aff-pkt { 0% { offset-distance: 100%; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { offset-distance: 0%; opacity: 0; } }
        .v4aff-card { transition: box-shadow .4s, transform .4s cubic-bezier(.2,.8,.2,1); }
        .v4aff-card:hover { box-shadow: 14px 14px 0 var(--color-accent); transform: translate(-6px, -6px); }
        .v4aff-li { transition: transform .25s; }
        .v4aff-li:hover { transform: translateX(6px); }
      `}</style>
      <div className="container-main">
        <Reveal>
          <div
            className="v4aff-card"
            style={{
              border: "3px solid var(--color-dark)",
              borderRadius: 36,
              background: "#fff",
              padding: "clamp(28px, 4.5vw, 80px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "clamp(32px, 5vw, 80px)",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <span className="g-eyebrow">Affiliate program</span>
              <h2 className="g-h2" style={{ marginTop: 18 }}>
                Refer a seller. Earn <span className="mark-amber">$1,000+ a month</span> per referral.*
              </h2>
              <p className="g-lead" style={{ marginTop: 22, maxWidth: 620 }}>
                No selling required. Refer clients to <BrandName /> and earn recurring monthly commissions. Our top affiliates earn $5,000+ per month with just a few referrals.
              </p>
              <ul style={{ listStyle: "none", marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "12px 24px" }}>
                {benefits.map((b) => (
                  <li key={b} className="v4aff-li" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, fontWeight: 700 }}>
                    <span aria-hidden="true" style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>
                      <FaCheck />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 36 }}>
                <Link href="/referral" className="btn-navy">
                  Join the affiliate program <FaArrowRight className="btn-arrow" aria-hidden="true" />
                </Link>
              </div>
              <p style={{ marginTop: 20, fontSize: 13, color: "var(--color-text-light)", maxWidth: 560 }}>
                *Commission depends on the clients you refer and how their stores perform. Earnings are not guaranteed.
              </p>
            </div>

            <div aria-hidden="true" style={{ flex: "1 1 400px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
                <svg viewBox="0 0 480 360" width="100%" style={{ display: "block", overflow: "visible" }}>
                  <circle className="v4aff-pulse" cx={hub.x} cy={hub.y} r="44" fill="var(--color-primary)" />
                  <circle className="v4aff-pulse" cx={hub.x} cy={hub.y} r="44" fill="var(--color-primary)" style={{ animationDelay: "1.3s" }} />
                  {nodes.map((n, i) => (
                    <g key={`${n.x}-${n.y}`}>
                      <line
                        className="v4aff-line"
                        x1={hub.x}
                        y1={hub.y}
                        x2={n.x}
                        y2={n.y}
                        stroke="var(--color-dark)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        style={{ animationDelay: `${i * 0.35}s` }}
                      />
                      <circle
                        className="v4aff-pkt"
                        r="6"
                        fill="var(--color-accent)"
                        stroke="var(--color-dark)"
                        strokeWidth="2"
                        style={{
                          offsetPath: `path("M ${hub.x} ${hub.y} L ${n.x} ${n.y}")`,
                          animation: "v4aff-pkt 2.4s linear infinite",
                          animationDelay: `${1.2 + i * 0.4}s`,
                          opacity: 0,
                        }}
                      />
                      <circle
                        className="v4aff-node"
                        cx={n.x}
                        cy={n.y}
                        r={n.r}
                        fill={n.amber ? "var(--color-accent)" : "var(--color-primary-light)"}
                        stroke="var(--color-dark)"
                        strokeWidth="3"
                        style={{ animationDelay: `${0.5 + i * 0.35}s` }}
                      />
                      <circle
                        className="v4aff-node"
                        cx={n.x}
                        cy={n.y}
                        r={n.r / 3}
                        fill="var(--color-dark)"
                        style={{ animationDelay: `${0.6 + i * 0.35}s` }}
                      />
                    </g>
                  ))}
                  <circle cx={hub.x} cy={hub.y} r="50" fill="var(--color-dark)" />
                </svg>
                <span className="float-a" style={{ position: "absolute", left: "50%", top: "50%", marginLeft: -26, marginTop: -23, display: "flex" }}>
                  <LogoMark size={52} variant="dark" />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
