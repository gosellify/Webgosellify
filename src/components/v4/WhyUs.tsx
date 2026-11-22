import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import { BrandName } from "@/components/brand/Logo";
import { FaHeadset, FaUserTie } from "react-icons/fa";

const azSteps: string[] = ["Product research", "Listings", "Orders", "Fulfillment", "Returns", "Customer support"];
const scaleBars: number[] = [22, 30, 38, 48, 58, 68, 80, 90, 100];

type Stat = { to: number; prefix: string; suffix: string; label: string };

const stats: Stat[] = [
  { to: 12, prefix: "$", suffix: "M+", label: "Revenue managed" },
  { to: 55, prefix: "", suffix: "+", label: "Active stores" },
  { to: 250, prefix: "", suffix: "+", label: "Clients" },
  { to: 24, prefix: "", suffix: "/7", label: "Support" },
];

export default function WhyUs() {
  return (
    <section className="g-section bg-tint grid-dots">
      <style>{`
        .v4why-grid { display: grid; grid-template-columns: 1fr; gap: clamp(14px, 1.6vw, 24px); }
        .v4why-tile { min-width: 0; height: 100%; padding: clamp(24px, 2.4vw, 38px); display: flex; flex-direction: column; gap: 14px; overflow: hidden; position: relative; }
        .v4why-tile p { color: var(--color-text-light); font-size: 16px; line-height: 1.6; }
        .v4why-tile.navy { background: var(--color-dark); border-color: var(--color-dark); color: #fff; }
        .v4why-tile.navy p { color: #c9d6f7; }
        .v4why-tile.navy:hover { border-color: var(--color-accent); }
        .v4why-vis { margin-top: auto; padding-top: 14px; }
        @media (min-width: 720px) {
          .v4why-grid { grid-template-columns: repeat(6, 1fr); }
          .v4why-c1, .v4why-c2 { grid-column: span 3; }
          .v4why-c3, .v4why-c4, .v4why-c5 { grid-column: span 2; }
          .v4why-c6 { grid-column: span 6; }
        }
        @media (min-width: 1180px) {
          .v4why-grid { grid-template-columns: repeat(12, 1fr); }
          .v4why-c1 { grid-column: span 7; }
          .v4why-c2 { grid-column: span 5; }
          .v4why-c3, .v4why-c4, .v4why-c5 { grid-column: span 4; }
          .v4why-c6 { grid-column: span 12; }
          .v4why-c6 .v4why-tile { flex-direction: row; align-items: center; gap: 48px; }
          .v4why-c6 .v4why-vis { margin-top: 0; padding-top: 0; flex: 1 1 50%; }
          .v4why-c6 .v4why-copy { flex: 1 1 50%; }
        }
        @keyframes v4why-chip { 0%, 12% { background: var(--color-accent); color: var(--color-dark); transform: translateY(-3px); } 20%, 100% { background: var(--color-primary-light); color: var(--color-dark); transform: none; } }
        .v4why-chip { padding: 9px 14px; border-radius: 999px; font-size: 14px; font-weight: 800; background: var(--color-primary-light); color: var(--color-dark); animation: v4why-chip 7.2s linear infinite; white-space: nowrap; }
        @keyframes v4why-dot { 0%, 80%, 100% { transform: translateY(0); opacity: .4; } 40% { transform: translateY(-6px); opacity: 1; } }
        .v4why-typing span { width: 8px; height: 8px; border-radius: 50%; background: var(--color-primary); display: inline-block; animation: v4why-dot 1.3s ease-in-out infinite; }
        @keyframes v4why-bubble { 0%, 8% { opacity: 0; transform: translateY(10px) scale(.95); } 16%, 88% { opacity: 1; transform: none; } 96%, 100% { opacity: 0; transform: translateY(-6px); } }
        .v4why-bubble { animation: v4why-bubble 6s ease-in-out infinite; }
        @keyframes v4why-draw { 0% { stroke-dashoffset: var(--len); } 45%, 85% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: var(--len); } }
        .v4why-draw { stroke-dasharray: var(--len); stroke-dashoffset: var(--len); animation: v4why-draw 4.5s ease-in-out infinite; }
        @keyframes v4why-coin { 0% { transform: translateY(-34px); opacity: 0; } 25% { opacity: 1; } 60%, 100% { transform: translateY(0); opacity: 1; } }
        .v4why-coin { animation: v4why-coin 3s cubic-bezier(.3,1.4,.5,1) infinite; }
        @keyframes v4why-ring { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(3.2); opacity: 0; } }
        .v4why-ring { position: absolute; inset: 0; border-radius: 50%; background: var(--color-accent); animation: v4why-ring 1.8s ease-out infinite; }
        @keyframes v4why-hand { to { transform: rotate(360deg); } }
        @keyframes v4why-bar { 0% { transform: scaleY(.1); } 40%, 80% { transform: scaleY(1); } 100% { transform: scaleY(.1); } }
        .v4why-bar { flex: 1; border-radius: 8px 8px 0 0; transform-origin: bottom; animation: v4why-bar 5s cubic-bezier(.2,.8,.2,1) infinite; }
        .v4why-stat { transition: transform .3s cubic-bezier(.2,.8,.2,1); }
        .v4why-stat:hover { transform: translateY(-6px); }
      `}</style>
      <div className="container-main">
        <Reveal style={{ maxWidth: 980, marginBottom: "clamp(36px, 5vw, 72px)" }}>
          <span className="g-eyebrow">Why choose us</span>
          <h2 className="g-h2" style={{ marginTop: 18 }}>
            Why sellers trust <BrandName />.
          </h2>
          <p className="g-lead" style={{ marginTop: 20, maxWidth: 720 }}>
            We are a full-service ecommerce management company with our own warehouses, proven systems and a team that runs your store every day.
          </p>
        </Reveal>

        <div className="v4why-grid">
          <Reveal className="v4why-c1">
            <div className="g-card v4why-tile">
              <h3 className="g-h3">Complete A to Z management</h3>
              <p style={{ maxWidth: 560 }}>
                Product research, listing optimization, order processing, fulfillment, shipping, returns and customer support. We handle every part, so you do not lift a finger.
              </p>
              <div className="v4why-vis" aria-hidden="true" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {azSteps.map((s, i) => (
                  <span key={s} className="v4why-chip" style={{ animationDelay: `${i * 1.2}s` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="v4why-c2" delay={110}>
            <div className="g-card v4why-tile navy">
              <h3 className="g-h3" style={{ color: "#fff" }}>Dedicated account manager</h3>
              <p>One personal manager is your single point of contact, backed by a full operations team.</p>
              <div className="v4why-vis" aria-hidden="true" style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
                <span style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--color-accent)", color: "var(--color-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  <FaUserTie />
                </span>
                <div style={{ display: "grid", gap: 8, minWidth: 0 }}>
                  <span className="v4why-bubble" style={{ justifySelf: "start", background: "#fff", color: "var(--color-dark)", fontSize: 14, fontWeight: 700, padding: "10px 14px", borderRadius: "16px 16px 16px 4px" }}>
                    Your weekly report is ready.
                  </span>
                  <span className="v4why-typing" style={{ justifySelf: "start", display: "inline-flex", gap: 5, background: "rgba(255,255,255,0.12)", padding: "12px 14px", borderRadius: "16px 16px 16px 4px" }}>
                    <span style={{ background: "#fff" }} />
                    <span style={{ background: "#fff", animationDelay: ".15s" }} />
                    <span style={{ background: "#fff", animationDelay: ".3s" }} />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="v4why-c3">
            <div className="g-card v4why-tile">
              <h3 className="g-h3">Risk-free growth model</h3>
              <p>You pay from profit. There is no management fee until your store makes profit.</p>
              <div className="v4why-vis" aria-hidden="true" style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
                <svg width="150" height="70" viewBox="0 0 150 70" fill="none" style={{ maxWidth: "100%" }}>
                  <polyline className="v4why-draw" style={{ ["--len" as string]: 220 }} points="4,62 34,50 58,54 86,32 110,36 144,8" stroke="var(--color-primary)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="v4why-coin" style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--color-accent)", border: "4px solid var(--color-dark)", flexShrink: 0 }} />
              </div>
            </div>
          </Reveal>

          <Reveal className="v4why-c4" delay={110}>
            <div className="g-card v4why-tile">
              <h3 className="g-h3">24/7 support and monitoring</h3>
              <p>Our operations team works around the clock, including weekends and holidays, with a direct WhatsApp line.</p>
              <div className="v4why-vis" aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "var(--color-dark)", color: "#fff", padding: "10px 16px 10px 14px", borderRadius: 999, fontSize: 14, fontWeight: 800 }}>
                  <span style={{ position: "relative", width: 12, height: 12, flexShrink: 0 }}>
                    <span className="v4why-ring" />
                    <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--color-accent)" }} />
                  </span>
                  Online now
                </span>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                  <circle cx="23" cy="23" r="20" stroke="var(--color-primary)" strokeWidth="4" />
                  <line x1="23" y1="23" x2="23" y2="10" stroke="var(--color-dark)" strokeWidth="4" strokeLinecap="round" style={{ transformOrigin: "23px 23px", animation: "v4why-hand 6s linear infinite" }} />
                  <line x1="23" y1="23" x2="31" y2="23" stroke="var(--color-dark)" strokeWidth="4" strokeLinecap="round" style={{ transformOrigin: "23px 23px", animation: "v4why-hand 36s linear infinite" }} />
                </svg>
                <FaHeadset style={{ fontSize: 30, color: "var(--color-primary)" }} />
              </div>
            </div>
          </Reveal>

          <Reveal className="v4why-c5" delay={220}>
            <div className="g-card v4why-tile">
              <h3 className="g-h3">Account health first</h3>
              <p>We follow every marketplace guideline and watch your health metrics all the time.</p>
              <div className="v4why-vis" aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <svg width="64" height="74" viewBox="0 0 64 74" fill="none">
                  <path d="M32 4 L58 14 V36 C58 52 46 64 32 70 C18 64 6 52 6 36 V14 Z" fill="var(--color-primary-light)" stroke="var(--color-primary)" strokeWidth="5" strokeLinejoin="round" />
                  <polyline className="v4why-draw" style={{ ["--len" as string]: 46 }} points="20,37 29,46 45,28" stroke="var(--color-dark)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 14, fontWeight: 800, background: "var(--color-primary-light)", padding: "9px 14px", borderRadius: 999 }}>Zero account health issues</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="v4why-c6">
            <div className="g-card v4why-tile">
              <div className="v4why-copy" style={{ display: "grid", gap: 14, minWidth: 0 }}>
                <h3 className="g-h3">Scalable and flexible</h3>
                <p style={{ maxWidth: 560 }}>
                  Our systems are built to grow as your business grows. Scale without hiring a team or going through a learning curve.
                </p>
              </div>
              <div className="v4why-vis" aria-hidden="true">
                <div style={{ display: "flex", alignItems: "flex-end", gap: "clamp(6px, 1vw, 14px)", height: 130, borderBottom: "3px solid var(--color-dark)" }}>
                  {scaleBars.map((h, i) => (
                    <span
                      key={h}
                      className="v4why-bar"
                      style={{ height: `${h}%`, background: i === scaleBars.length - 1 ? "var(--color-accent)" : "var(--color-primary)", opacity: i === scaleBars.length - 1 ? 1 : 0.3 + i * 0.08, animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ marginTop: "clamp(40px, 5vw, 80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "clamp(14px, 1.6vw, 24px)" }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} from="zoom" style={{ minWidth: 0 }}>
              <div className="v4why-stat" style={{ borderTop: "4px solid var(--color-accent)", paddingTop: 18 }}>
                <div style={{ fontSize: "clamp(44px, 5vw, 84px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1, color: "var(--color-dark)" }}>
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div style={{ marginTop: 10, fontSize: 16, fontWeight: 700, color: "var(--color-text-light)" }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
