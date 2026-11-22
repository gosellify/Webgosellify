import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { LogoMark } from "@/components/brand/Logo";

export default function FinalCTA() {
  return (
    <section className="g-section bg-navy grid-dots-dark on-dark" style={{ overflow: "hidden", textAlign: "center" }}>
      <style>{`
        .v4cta-logo { display: inline-flex; position: relative; }
        .v4cta-logo svg { overflow: visible; width: clamp(96px, 11vw, 168px); height: auto; }
        @keyframes v4cta-fly {
          0%, 30% { transform: translateX(0); opacity: 1; }
          55% { transform: translateX(46px); opacity: 0; }
          56% { transform: translateX(-26px); opacity: 0; }
          80%, 100% { transform: translateX(0); opacity: 1; }
        }
        .v4cta-logo .logo-arrow { animation: v4cta-fly 2.6s cubic-bezier(.5,0,.2,1) infinite; }
        @keyframes v4cta-trail { 0%, 30% { transform: scaleX(0); opacity: 0; } 45% { transform: scaleX(1); opacity: .9; } 60%, 100% { transform: scaleX(1) translateX(60px); opacity: 0; } }
        .v4cta-trail { position: absolute; left: 100%; height: 4px; border-radius: 2px; background: var(--color-accent); transform-origin: left; animation: v4cta-trail 2.6s cubic-bezier(.5,0,.2,1) infinite; }
        @keyframes v4cta-ring { 0% { transform: translate(-50%,-50%) scale(.6); opacity: .5; } 100% { transform: translate(-50%,-50%) scale(1.6); opacity: 0; } }
        .v4cta-ring { position: absolute; left: 50%; top: 50%; width: clamp(160px, 18vw, 280px); height: clamp(160px, 18vw, 280px); border-radius: 50%; border: 2px solid rgba(255,255,255,0.35); animation: v4cta-ring 3.2s ease-out infinite; pointer-events: none; }
        .v4cta-big { font-size: clamp(56px, 11vw, 190px); line-height: .92; font-weight: 800; letter-spacing: -0.055em; color: #fff; }
        .v4cta-btn { font-size: clamp(17px, 1.4vw, 20px) !important; padding: 22px 36px !important; border-radius: 18px !important; }
      `}</style>
      <span aria-hidden="true" className="blob" style={{ width: 520, height: 520, background: "var(--color-primary)", opacity: 0.45, top: -180, left: "-6%" }} />
      <span aria-hidden="true" className="blob" style={{ width: 420, height: 420, background: "var(--color-accent)", opacity: 0.16, bottom: -180, right: "4%", animationDelay: "-5s" }} />
      <span aria-hidden="true" className="blob" style={{ width: 360, height: 360, background: "var(--color-primary)", opacity: 0.3, bottom: -120, left: "38%", animationDelay: "-10s" }} />

      <div className="container-main" style={{ position: "relative" }}>
        <Reveal from="zoom">
          <span className="v4cta-logo">
            <span aria-hidden="true" className="v4cta-ring" />
            <span aria-hidden="true" className="v4cta-ring" style={{ animationDelay: "1.6s" }} />
            <LogoMark size={160} variant="dark" />
            <span aria-hidden="true" className="v4cta-trail" style={{ top: "42%", width: 46 }} />
            <span aria-hidden="true" className="v4cta-trail" style={{ top: "58%", width: 28, animationDelay: ".08s" }} />
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="v4cta-big" style={{ marginTop: "clamp(24px, 3vw, 44px)" }}>
            Ready? <span className="shine-text">Go</span> sell.
          </h2>
        </Reveal>

        <Reveal delay={240}>
          <p className="g-lead" style={{ maxWidth: 640, margin: "clamp(22px, 2.6vw, 36px) auto 0" }}>
            Answer 5 quick questions. A manager reviews them and replies with a plan for your store.
          </p>
        </Reveal>

        <Reveal delay={360} style={{ marginTop: "clamp(30px, 3.4vw, 48px)", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          <Link href="/profit-check" className="btn-accent v4cta-btn">
            Start the Profit Check <FaArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
          <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-outline-white v4cta-btn">
            <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={460}>
          <p style={{ marginTop: 26, fontSize: 15, fontWeight: 600, color: "#c9d6f7" }}>
            No management fee until your store makes profit. No contract. Cancel anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
