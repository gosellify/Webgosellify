import type { ComponentType, CSSProperties } from "react";
import Link from "next/link";
import { FaArrowRight, FaChartLine, FaLock, FaStore, FaUserTie } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

type Audience = {
  icon: ComponentType<{ style?: CSSProperties }>;
  tag: string;
  title: string;
  short: string;
  more: string;
  href: string;
  cta: string;
};

const audiences: Audience[] = [
  {
    icon: FaStore,
    tag: "No store yet",
    title: "First-time sellers",
    short: "Start the right way from day one.",
    more: "We guide you through seller account setup and start you on a low-risk model, so you learn the business without betting big.",
    href: "/profit-check",
    cta: "Check my profit",
  },
  {
    icon: FaChartLine,
    tag: "Existing store",
    title: "Sellers who want to scale",
    short: "Your store sells. Now make it grow.",
    more: "We audit your store, optimize listings, pricing and ads, then scale what works across your catalog.",
    href: "/services",
    cta: "See our services",
  },
  {
    icon: FaUserTie,
    tag: "Zero work from you",
    title: "Busy owners",
    short: "You own the store. We run it.",
    more: "A dedicated account manager is your single point of contact. Our team handles everything and reports back to you.",
    href: "/profit-check",
    cta: "Check my profit",
  },
  {
    icon: FaLock,
    tag: "Account down",
    title: "Suspended sellers",
    short: "Get help to sell again.",
    more: "Our reinstatement team reviews your case, prepares the appeal and works to get your Amazon account selling again.",
    href: "/services/amazon-reinstatement",
    cta: "Get reinstatement help",
  },
];

export default function WhoFor() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <style>{`
        .v4who-row { display: flex; flex-direction: column; gap: 18px; }
        .v4who-item { min-width: 0; display: flex; }
        .v4who-card { position: relative; overflow: hidden; width: 100%; display: flex; flex-direction: column; gap: 14px; padding: clamp(24px, 2.4vw, 36px); border-radius: 28px; border: 2px solid var(--color-line); background: #fff; color: var(--color-dark); text-decoration: none; transition: background-color .45s, border-color .45s, color .45s, box-shadow .45s; }
        .v4who-card::before { content: ""; position: absolute; right: -60px; bottom: -60px; width: 190px; height: 190px; border-radius: 50%; background: var(--color-primary-light); transition: transform .6s cubic-bezier(.2,.8,.2,1), background-color .45s; }
        .v4who-card > * { position: relative; }
        .v4who-num { font-size: 14px; font-weight: 800; letter-spacing: 1.4px; color: var(--color-primary); transition: color .45s; }
        .v4who-short { color: var(--color-text-light); font-size: 17px; font-weight: 600; transition: color .45s; }
        .v4who-more { display: grid; grid-template-rows: 1fr; transition: grid-template-rows .5s cubic-bezier(.2,.8,.2,1), opacity .4s; }
        .v4who-more > div { overflow: hidden; }
        .v4who-more p { font-size: 16px; line-height: 1.6; color: var(--color-text-light); transition: color .45s; }
        .v4who-cta { margin-top: auto; padding-top: 10px; display: inline-flex; align-items: center; gap: 10px; font-weight: 800; font-size: 16px; }
        .v4who-cta svg { transition: transform .3s; }
        .v4who-card:hover .v4who-cta svg, .v4who-card:focus-visible .v4who-cta svg { transform: translateX(6px); }
        .v4who-card:hover, .v4who-card:focus-visible { background: var(--color-dark); border-color: var(--color-dark); color: #fff; box-shadow: 0 30px 60px rgba(10,27,77,0.25); }
        .v4who-card:hover::before, .v4who-card:focus-visible::before { transform: scale(1.5); background: var(--color-primary); }
        .v4who-card:hover .v4who-num, .v4who-card:focus-visible .v4who-num { color: var(--color-accent); }
        .v4who-card:hover .v4who-short, .v4who-card:focus-visible .v4who-short, .v4who-card:hover .v4who-more p, .v4who-card:focus-visible .v4who-more p { color: #c9d6f7; }
        .v4who-card:hover .icon-tile, .v4who-card:focus-visible .icon-tile { background: var(--color-accent); color: var(--color-dark); transform: rotate(-8deg) scale(1.1); }
        @media (min-width: 700px) {
          .v4who-row { flex-direction: row; flex-wrap: wrap; }
          .v4who-item { flex: 1 1 calc(50% - 9px); }
        }
        @media (min-width: 1180px) and (hover: hover) {
          .v4who-row { flex-wrap: nowrap; min-height: 460px; }
          .v4who-item { flex: 1 1 0; transition: flex-grow .55s cubic-bezier(.2,.8,.2,1); }
          .v4who-item:hover, .v4who-item:focus-within { flex-grow: 2.1; }
          .v4who-more { grid-template-rows: 0fr; opacity: 0; }
          .v4who-item:hover .v4who-more, .v4who-item:focus-within .v4who-more { grid-template-rows: 1fr; opacity: 1; }
        }
        @media (min-width: 1180px) and (hover: none) {
          .v4who-item { flex: 1 1 calc(25% - 14px); }
        }
      `}</style>
      <div className="container-main">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 28, marginBottom: "clamp(36px, 5vw, 72px)" }}>
          <Reveal style={{ flex: "1 1 560px", minWidth: 0 }}>
            <span className="g-eyebrow">Who we work with</span>
            <h2 className="g-h2" style={{ marginTop: 18 }}>
              Built for sellers <span className="t-blue">at every stage.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} style={{ flex: "0 1 420px", minWidth: 0 }}>
            <p className="g-lead">Pick the card that sounds like you. We start from where you are today.</p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="v4who-row">
            {audiences.map((a, i) => (
              <div key={a.title} className="v4who-item">
                <Link href={a.href} className="v4who-card">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <span className="icon-tile" aria-hidden="true">
                      <a.icon />
                    </span>
                    <span className="v4who-num">0{i + 1}</span>
                  </div>
                  <span style={{ alignSelf: "flex-start", marginTop: 10, background: "var(--color-accent)", color: "var(--color-dark)", fontSize: 13, fontWeight: 800, padding: "6px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>
                    {a.tag}
                  </span>
                  <h3 className="g-h3" style={{ color: "inherit" }}>{a.title}</h3>
                  <p className="v4who-short">{a.short}</p>
                  <div className="v4who-more">
                    <div>
                      <p>{a.more}</p>
                    </div>
                  </div>
                  <span className="v4who-cta">
                    {a.cta} <FaArrowRight aria-hidden="true" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
