"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaComments, FaLock, FaClipboardList, FaChartLine, FaCalculator, FaArrowRight, FaCheck } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { BrandName } from "@/components/brand/Logo";

type Step = { title: string; desc: string; detail: string; icon: IconType };

const steps: Step[] = [
  {
    title: "Discussion",
    desc: "We discuss your requirements and agree on needs and pricing.",
    detail: "No contract. Cancel anytime.",
    icon: FaComments,
  },
  {
    title: "Get access",
    desc: "You share store access and the portal credentials we need.",
    detail: "You stay the owner of the store.",
    icon: FaLock,
  },
  {
    title: "Planning",
    desc: "We build a plan for maximum profit output.",
    detail: "Built for your marketplace and business model.",
    icon: FaClipboardList,
  },
  {
    title: "Growth",
    desc: "We execute the plan and start generating profit.",
    detail: "Our team runs the store every day.",
    icon: FaChartLine,
  },
  {
    title: "Calculation",
    desc: "We report every sale and you pay from profits.",
    detail: "No management fee until the store makes profit.",
    icon: FaCalculator,
  },
];

const NODE = 56;

const css = `
.v4pt-grid { display: grid; gap: clamp(40px, 6vw, 110px); grid-template-columns: minmax(0, 1fr); }
.v4pt-steps { position: relative; padding-left: 76px; display: grid; gap: clamp(20px, 2.4vw, 36px); min-width: 0; }
.v4pt-rail { position: absolute; left: 26px; top: 0; bottom: 0; width: 4px; border-radius: 4px; background: var(--color-line); overflow: hidden; }
.v4pt-railfill { position: absolute; left: 0; top: 0; width: 100%; border-radius: 4px; background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary) 55%, var(--color-accent) 100%); will-change: height; }
.v4pt-step { position: relative; min-width: 0; }
.v4pt-node { position: absolute; left: -76px; top: 28px; width: ${NODE}px; height: ${NODE}px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 20px; background: #fff; color: var(--color-primary); border: 3px solid var(--color-primary); transition: background-color .4s, color .4s, border-color .4s, transform .4s cubic-bezier(.2,.9,.3,1.4), box-shadow .4s; z-index: 1; }
.v4pt-node.on { background: var(--color-primary); color: #fff; transform: scale(1.12); box-shadow: 0 0 0 8px rgba(21,96,255,0.16); }
.v4pt-node.last { border-color: var(--color-accent); color: var(--color-dark); }
.v4pt-node.last.on { background: var(--color-accent); color: var(--color-dark); box-shadow: 0 0 0 8px rgba(255,178,26,0.28); }
.v4pt-card { padding: clamp(22px, 2.6vw, 40px); display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px 28px; opacity: .55; }
.v4pt-card.on { opacity: 1; border-color: var(--color-primary); box-shadow: 0 24px 50px rgba(10,27,77,0.12); }
.v4pt-card.last { background: var(--color-dark); border-color: var(--color-dark); color: #fff; }
.v4pt-card.last.on { border-color: var(--color-accent); }
.v4pt-card.last:hover { border-color: var(--color-accent); }
.v4pt-card.last .icon-tile { background: var(--color-accent); color: var(--color-dark); }
.v4pt-card.last:hover .icon-tile { background: #fff; color: var(--color-dark); }
.v4pt-card.last .v4pt-desc { color: #c9d6f7; }
.v4pt-card.last .v4pt-kicker { color: var(--color-accent); }
.v4pt-card.last .v4pt-detail { color: #fff; border-top-color: rgba(255,255,255,0.16); }
.v4pt-kicker { font-size: 13px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: var(--color-primary); margin-bottom: 8px; }
.v4pt-desc { font-size: clamp(17px, 1.3vw, 20px); line-height: 1.5; color: var(--color-text-light); }
.v4pt-detail { display: flex; align-items: center; gap: 10px; margin-top: 18px; padding-top: 16px; border-top: 2px solid var(--color-line); font-size: 15px; font-weight: 700; color: var(--color-dark); }
.v4pt-big { font-size: clamp(110px, 13vw, 220px); font-weight: 800; line-height: .82; letter-spacing: -0.07em; font-variant-numeric: tabular-nums; }
@media (max-width: 520px) {
  .v4pt-steps { padding-left: 58px; }
  .v4pt-rail { left: 20px; }
  .v4pt-node { left: -58px; width: 44px; height: 44px; font-size: 16px; }
}
@media (min-width: 1080px) {
  .v4pt-grid { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); align-items: start; }
  .v4pt-left { position: sticky; top: 120px; }
}
`;

export default function ProcessTimeline() {
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [fill, setFill] = useState<number>(0);
  const [reached, setReached] = useState<number>(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = stepsRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = Math.max(0, Math.min(r.height, window.innerHeight * 0.58 - r.top));
      let count = 0;
      nodeRefs.current.forEach((n) => {
        if (!n) return;
        const nr = n.getBoundingClientRect();
        const center = nr.top - r.top + nr.height / 2;
        if (px >= center) count += 1;
      });
      setFill(Math.round(px));
      setReached(count);
    };
    const onScroll = () => {
      if (raf === 0) raf = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== 0) window.cancelAnimationFrame(raf);
    };
  }, []);

  const current = Math.max(1, reached);
  const currentStep = steps[current - 1];
  const isLast = current === steps.length;

  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <style>{css}</style>
      <div className="container-main">
        <div className="v4pt-grid">
          {/* Left: sticky headline */}
          <div className="v4pt-left" style={{ minWidth: 0 }}>
            <Reveal>
              <span className="g-eyebrow" style={{ marginBottom: 20 }}>
                How it works
              </span>
              <h2 className="g-h2" style={{ marginBottom: 22 }}>
                Five steps from first call to <span className="t-blue">first profit.</span>
              </h2>
              <p className="g-lead" style={{ maxWidth: 520, marginBottom: 30 }}>
                Getting started with <BrandName /> is simple. You talk to us once, share access, and we take it from
                there.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px" }}>
                <Link href="/profit-check" className="btn-accent">
                  Start the 2-minute Profit Check <FaArrowRight className="btn-arrow" aria-hidden="true" />
                </Link>
                <a
                  href="https://wa.me/13073938789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  style={{ fontWeight: 800, fontSize: 16, color: "var(--color-dark)", textDecoration: "none" }}
                >
                  Or ask on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div
                aria-hidden="true"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-end",
                  gap: "10px 22px",
                  marginTop: "clamp(32px, 4vw, 60px)",
                  paddingTop: "clamp(24px, 3vw, 36px)",
                  borderTop: "2px solid var(--color-line)",
                }}
              >
                <div style={{ overflow: "hidden", paddingBottom: 8 }}>
                  <span key={current} className="v4pt-big slide-up-in" style={{ display: "inline-block", color: "var(--color-dark)" }}>
                    <span style={{ color: "var(--color-line)" }}>0</span>
                    <span className={isLast ? "mark-amber" : "t-blue"}>{current}</span>
                  </span>
                </div>
                <div style={{ minWidth: 0, paddingBottom: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--color-text-light)" }}>
                    Step {current} of {steps.length}
                  </div>
                  <div key={currentStep.title} className="slide-up-in" style={{ fontSize: "clamp(24px, 2.4vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                    {currentStep.title}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: steps */}
          <div ref={stepsRef} className="v4pt-steps">
            <div className="v4pt-rail" aria-hidden="true">
              <div className="v4pt-railfill" style={{ height: fill }} />
            </div>
            {steps.map((s, i) => {
              const Icon = s.icon;
              const on = i < reached;
              const last = i === steps.length - 1;
              return (
                <div key={s.title} className="v4pt-step">
                  <div
                    ref={(el) => {
                      nodeRefs.current[i] = el;
                    }}
                    aria-hidden="true"
                    className={`v4pt-node${on ? " on" : ""}${last ? " last" : ""}`}
                  >
                    {i + 1}
                  </div>
                  <Reveal from="right" delay={60}>
                    <div className={`g-card v4pt-card${on ? " on" : ""}${last ? " last" : ""}`}>
                      <span className="icon-tile">
                        <Icon aria-hidden="true" />
                      </span>
                      <div style={{ flex: "1 1 280px", minWidth: 0 }}>
                        <div className="v4pt-kicker">Step {i + 1}</div>
                        <h3 style={{ fontSize: "clamp(26px, 2.6vw, 40px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 12 }}>
                          {s.title}
                        </h3>
                        <p className="v4pt-desc">{s.desc}</p>
                        <div className="v4pt-detail">
                          <span
                            aria-hidden="true"
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              background: last ? "var(--color-accent)" : "var(--color-primary)",
                              color: last ? "var(--color-dark)" : "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 11,
                              flexShrink: 0,
                            }}
                          >
                            <FaCheck />
                          </span>
                          {s.detail}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
