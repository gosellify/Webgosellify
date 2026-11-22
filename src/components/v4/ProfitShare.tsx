import Link from "next/link";
import { FaArrowRight, FaCheck, FaStore, FaUserTie } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { LogoMark } from "@/components/brand/Logo";

const points: string[] = [
  "No management fee until your store makes profit",
  "No contract",
  "Cancel anytime",
];

const coinDelays: number[] = [0, 0.7, 1.4, 2.1];

export default function ProfitShare() {
  return (
    <section className="g-section bg-blue" style={{ color: "#fff", overflow: "hidden" }}>
      <style>{`
        @keyframes v4ps-left { 0% { left: 50%; top: 0%; opacity: 0; transform: translate(-50%,-50%) scale(.5); } 15% { opacity: 1; transform: translate(-50%,-50%) scale(1); } 85% { opacity: 1; } 100% { left: 25%; top: 100%; opacity: 0; transform: translate(-50%,-50%) scale(.7); } }
        @keyframes v4ps-right { 0% { left: 50%; top: 0%; opacity: 0; transform: translate(-50%,-50%) scale(.5); } 15% { opacity: 1; transform: translate(-50%,-50%) scale(1); } 85% { opacity: 1; } 100% { left: 75%; top: 100%; opacity: 0; transform: translate(-50%,-50%) scale(.7); } }
        @keyframes v4ps-flow { to { stroke-dashoffset: -28; } }
        @keyframes v4ps-bump { 0%,100% { transform: scale(1); } 50% { transform: scale(1.035); } }
        @keyframes v4ps-ring { 0% { box-shadow: 0 0 0 0 rgba(255,178,26,0.55); } 100% { box-shadow: 0 0 0 22px rgba(255,178,26,0); } }
        .v4ps-coin { position: absolute; width: 26px; height: 26px; border-radius: 50%; background: var(--color-accent); border: 3px solid #fff; box-shadow: 0 6px 14px rgba(10,27,77,0.35); opacity: 0; }
        .v4ps-coin.l { animation: v4ps-left 2.8s cubic-bezier(.5,0,.5,1) infinite; }
        .v4ps-coin.r { animation: v4ps-right 2.8s cubic-bezier(.5,0,.5,1) infinite; }
        .v4ps-line { stroke-dasharray: 8 6; animation: v4ps-flow 1s linear infinite; }
        .v4ps-box { background: var(--color-dark); border-radius: 24px; border: 2px solid rgba(255,255,255,0.14); transition: transform .35s cubic-bezier(.2,.8,.2,1), border-color .35s; }
        .v4ps-box:hover { transform: translateY(-6px); border-color: var(--color-accent); }
        .v4ps-target { animation: v4ps-bump 2.8s ease-in-out infinite; }
        .v4ps-source { animation: v4ps-ring 2.8s ease-out infinite; }
      `}</style>
      <span aria-hidden="true" className="blob" style={{ width: 460, height: 460, background: "var(--color-dark)", opacity: 0.35, top: -160, left: -120 }} />
      <span aria-hidden="true" className="blob" style={{ width: 380, height: 380, background: "#fff", opacity: 0.12, bottom: -160, right: "8%", animationDelay: "-6s" }} />

      <div className="container-main" style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px, 6vw, 96px)" }}>
        <div style={{ flex: "1 1 520px", minWidth: 0 }}>
          <Reveal>
            <span className="g-eyebrow on-dark" style={{ color: "#fff" }}>Profit share pricing</span>
            <h2 className="g-h1" style={{ color: "#fff", marginTop: 20 }}>
              We get paid when <span className="t-amber">you get paid.</span>
            </h2>
            <p className="g-lead" style={{ color: "#fff", marginTop: 24, maxWidth: 560 }}>
              You pay from profit. If your store has not made profit yet, you do not pay a management fee.
            </p>
          </Reveal>

          <ul style={{ listStyle: "none", marginTop: 32, display: "grid", gap: 14 }}>
            {points.map((p, i) => (
              <li key={p}>
                <Reveal delay={150 + i * 110} from="left" style={{ display: "flex", alignItems: "center", gap: 14, fontSize: "clamp(17px, 1.4vw, 21px)", fontWeight: 700 }}>
                  <span aria-hidden="true" style={{ width: 34, height: 34, flexShrink: 0, borderRadius: "50%", background: "var(--color-accent)", color: "var(--color-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
                    <FaCheck />
                  </span>
                  {p}
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={480} style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href="/profit-check" className="btn-accent">
              Check my profit <FaArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
            <Link href="/pricing" className="btn-outline-white">
              See how pricing works
            </Link>
          </Reveal>
        </div>

        <Reveal from="right" delay={150} style={{ flex: "1 1 440px", minWidth: 0 }}>
          <div role="img" aria-label="Profit from your store flows to you and to Gosellify" style={{ maxWidth: 620, margin: "0 auto" }}>
            <div className="v4ps-box v4ps-source" style={{ width: "min(320px, 86%)", margin: "0 auto", padding: "22px 24px", display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ width: 54, height: 54, borderRadius: 16, background: "var(--color-accent)", color: "var(--color-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                <FaStore aria-hidden="true" />
              </span>
              <span style={{ fontSize: "clamp(18px, 1.6vw, 22px)", fontWeight: 800, lineHeight: 1.2 }}>Your store&apos;s profit</span>
            </div>

            <div aria-hidden="true" style={{ position: "relative", height: "clamp(110px, 12vw, 170px)" }}>
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0 }}>
                <line className="v4ps-line" x1="50" y1="0" x2="25" y2="100" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <line className="v4ps-line" x1="50" y1="0" x2="75" y2="100" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              </svg>
              {coinDelays.map((d) => (
                <span key={`l${d}`} className="v4ps-coin l" style={{ animationDelay: `${d}s` }} />
              ))}
              {coinDelays.map((d) => (
                <span key={`r${d}`} className="v4ps-coin r" style={{ animationDelay: `${d + 0.35}s` }} />
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(12px, 2vw, 24px)" }}>
              <div className="v4ps-box v4ps-target" style={{ padding: "clamp(18px, 2vw, 28px)", textAlign: "center" }}>
                <span style={{ width: 60, height: 60, margin: "0 auto 14px", borderRadius: "50%", background: "#fff", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>
                  <FaUserTie aria-hidden="true" />
                </span>
                <div style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 800 }}>You</div>
                <div style={{ fontSize: 14, color: "#c9d6f7", marginTop: 4 }}>The store owner</div>
              </div>
              <div className="v4ps-box v4ps-target" style={{ padding: "clamp(18px, 2vw, 28px)", textAlign: "center", animationDelay: ".35s" }}>
                <span style={{ width: 60, height: 60, margin: "0 auto 14px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <LogoMark size={34} variant="dark" />
                </span>
                <div style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 800 }}>
                  <span className="t-amber">Go</span>sellify
                </div>
                <div style={{ fontSize: 14, color: "#c9d6f7", marginTop: 4 }}>Paid from profit only</div>
              </div>
            </div>
            <p style={{ marginTop: 16, textAlign: "center", fontSize: 13, color: "#fff", opacity: 0.85 }}>
              Picture only. It does not show the size of each share.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
