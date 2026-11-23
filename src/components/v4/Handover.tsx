"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaSearch,
  FaClipboardList,
  FaTags,
  FaBoxOpen,
  FaTruck,
  FaUndo,
  FaHeadset,
  FaWarehouse,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { BrandName } from "@/components/brand/Logo";

type Task = { label: string; icon: IconType };

const tasks: Task[] = [
  { label: "Product research", icon: FaSearch },
  { label: "Listings and optimization", icon: FaClipboardList },
  { label: "Pricing and repricing", icon: FaTags },
  { label: "Order processing", icon: FaBoxOpen },
  { label: "Shipping and fulfillment", icon: FaTruck },
  { label: "Returns", icon: FaUndo },
  { label: "Customer support", icon: FaHeadset },
  { label: "Inventory management", icon: FaWarehouse },
  { label: "Account health", icon: FaShieldAlt },
  { label: "Monthly profit reports", icon: FaChartLine },
];

const STAGGER_MS = 110;

const css = `
@keyframes v4ho-pop { 0% { transform: scale(.7); opacity: 0; } 60% { transform: scale(1.12); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
.v4ho-grid { display: grid; gap: clamp(36px, 5vw, 88px); grid-template-columns: minmax(0, 1fr); align-items: center; }
@media (min-width: 1080px) { .v4ho-grid { grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); } }
.v4ho-list { display: grid; gap: 8px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 1500px) { .v4ho-list { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.v4ho-row { display: flex; align-items: center; gap: 12px; width: 100%; min-width: 0; padding: 12px 14px; border-radius: 16px; border: 1px solid var(--color-line); background: #fff; color: var(--color-dark); font: inherit; text-align: left; cursor: pointer; transition: background-color .3s, border-color .3s, transform .3s cubic-bezier(.2,.8,.2,1); }
.v4ho-row:hover { transform: translateX(4px); border-color: var(--color-primary); }
.v4ho-row.done { background: var(--color-primary-light); border-color: rgba(21,96,255,0.45); }
.v4ho-ico { width: 36px; height: 36px; border-radius: 11px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 15px; background: var(--color-primary-light); color: var(--color-primary); transition: background-color .3s, color .3s, transform .3s; }
.v4ho-row.done .v4ho-ico { background: var(--color-primary); color: #fff; transform: rotate(-8deg); }
.v4ho-switch { position: relative; width: 44px; height: 24px; border-radius: 999px; flex-shrink: 0; background: var(--color-line); transition: background-color .3s; }
.v4ho-row.done .v4ho-switch { background: var(--color-primary); }
.v4ho-knob { position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: var(--color-dark); transition: transform .35s cubic-bezier(.2,.9,.3,1.3), background-color .3s; }
.v4ho-row.done .v4ho-knob { transform: translateX(20px); background: #fff; }
.v4ho-tag { display: inline-flex; align-items: center; justify-content: center; min-width: 84px; padding: 5px 10px; border-radius: 999px; font-size: 12px; font-weight: 800; flex-shrink: 0; border: 1px solid var(--color-line); background: #fff; color: var(--color-dark); animation: v4ho-pop .35s cubic-bezier(.2,.8,.2,1) both; }
.v4ho-tag.done { background: var(--color-accent); border-color: var(--color-accent); color: var(--color-dark); }
.v4ho-stamp { display: inline-block; padding: 10px 20px; border: 4px solid var(--color-primary); border-radius: 14px; color: var(--color-primary); font-weight: 800; font-size: clamp(18px, 1.8vw, 26px); letter-spacing: 2px; text-transform: uppercase; background: #fff; box-shadow: 0 18px 40px rgba(10,27,77,0.16); white-space: nowrap; }
.v4ho-shine { background: linear-gradient(100deg, #1560ff 20%, #0a1b4d 50%, #1560ff 80%); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: shine 4s linear infinite; }
`;

function allFalse(): boolean[] {
  return tasks.map(() => false);
}

export default function Handover() {
  const [handed, setHanded] = useState<boolean[]>(allFalse);
  const sectionRef = useRef<HTMLElement | null>(null);
  const timers = useRef<number[]>([]);
  const interacted = useRef<boolean>(false);
  const autoPlayed = useRef<boolean>(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const flipAll = useCallback(
    (target: boolean, startDelay: number) => {
      clearTimers();
      tasks.forEach((_, i) => {
        const id = window.setTimeout(() => {
          setHanded((prev) => {
            if (prev[i] === target) return prev;
            const next = prev.slice();
            next[i] = target;
            return next;
          });
        }, startDelay + i * STAGGER_MS);
        timers.current.push(id);
      });
    },
    [clearTimers]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !autoPlayed.current) {
            autoPlayed.current = true;
            io.disconnect();
            if (!interacted.current) flipAll(true, 700);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [flipAll]);

  useEffect(() => clearTimers, [clearTimers]);

  const remaining = handed.filter((h) => !h).length;
  const allDone = remaining === 0;

  const toggle = (i: number) => {
    interacted.current = true;
    clearTimers();
    setHanded((prev) => {
      const next = prev.slice();
      next[i] = !next[i];
      return next;
    });
  };

  const onMain = () => {
    interacted.current = true;
    flipAll(!allDone, 0);
  };

  return (
    <section ref={sectionRef} className="g-section bg-tint grid-dots" style={{ overflow: "hidden", color: "var(--color-dark)" }}>
      <style>{css}</style>
      <div aria-hidden="true" className="blob" style={{ width: 520, height: 520, right: "-160px", top: "-160px", background: "rgba(21,96,255,0.14)" }} />
      <div aria-hidden="true" className="blob" style={{ width: 360, height: 360, left: "-120px", bottom: "-140px", background: "rgba(255,178,26,0.16)", animationDelay: "-6s" }} />

      <div className="container-main" style={{ position: "relative" }}>
        <div className="v4ho-grid">
          {/* Left: copy and counter */}
          <div style={{ minWidth: 0 }}>
            <Reveal>
              <span className="g-eyebrow" style={{ marginBottom: 20 }}>
                Done for you
              </span>
              <h2 className="g-h2" style={{ marginBottom: 22 }}>
                You own the store. <span className="v4ho-shine">We do the work.</span>
              </h2>
              <p className="g-lead" style={{ maxWidth: 560 }}>
                The store, the brand and the profit stay yours. <BrandName /> takes the daily work off your plate.
                Tap a task to hand it over, or hand over all ten.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div
                style={{
                  marginTop: "clamp(28px, 3vw, 44px)",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "18px 28px",
                  padding: "clamp(20px, 2.4vw, 32px)",
                  borderRadius: 26,
                  background: "#fff",
                  border: "2px solid var(--color-line)",
                  boxShadow: "0 18px 40px rgba(10,27,77,0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                    minWidth: 150,
                    overflow: "hidden",
                    paddingBottom: 4,
                  }}
                >
                  <span
                    key={remaining}
                    className="slide-up-in"
                    style={{
                      display: "inline-block",
                      fontSize: "clamp(72px, 8vw, 128px)",
                      fontWeight: 800,
                      lineHeight: 0.9,
                      letterSpacing: "-0.06em",
                      fontVariantNumeric: "tabular-nums",
                      color: allDone ? "var(--color-primary)" : "var(--color-dark)",
                    }}
                  >
                    {remaining}
                  </span>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text-light)" }}>/ {tasks.length}</span>
                </div>
                <div style={{ flex: "1 1 220px", minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 6 }}>
                    Tasks on your plate
                  </div>
                  <p style={{ fontSize: 16, lineHeight: 1.5, color: "var(--color-text-light)", marginBottom: 14 }}>
                    {allDone ? "Nothing left for you. We report every sale and you check the numbers." : "These are still yours to do every day."}
                  </p>
                  <div aria-hidden="true" style={{ height: 8, borderRadius: 999, background: "var(--color-line)", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${((tasks.length - remaining) / tasks.length) * 100}%`,
                        borderRadius: 999,
                        background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                        transition: "width .4s cubic-bezier(.2,.8,.2,1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 28 }}>
                <Link href="/profit-check" className="btn-accent">
                  Check my profit <FaArrowRight className="btn-arrow" aria-hidden="true" />
                </Link>
                <Link href="/pricing" className="btn-outline">
                  How pay from profit works
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: task card */}
          <Reveal from="right" style={{ minWidth: 0 }}>
            <div
              style={{
                position: "relative",
                borderRadius: 30,
                background: "#fff",
                border: "2px solid var(--color-line)",
                padding: "clamp(18px, 2.4vw, 34px)",
                boxShadow: "0 30px 70px rgba(10,27,77,0.12)",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 18 }}>
                <div style={{ fontWeight: 800, fontSize: "clamp(18px, 1.6vw, 22px)", color: "var(--color-dark)" }}>Who does what</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "var(--color-text-light)" }}>
                  <span className="pulse-dot" aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} />
                  {tasks.length - remaining} of {tasks.length} handed over
                </div>
              </div>

              <div className="v4ho-list">
                {tasks.map((t, i) => {
                  const Icon = t.icon;
                  const done = handed[i];
                  return (
                    <button
                      key={t.label}
                      type="button"
                      className={`v4ho-row${done ? " done" : ""}`}
                      aria-pressed={done}
                      aria-label={`${t.label}: done by ${done ? "Gosellify" : "you"}. Tap to switch.`}
                      onClick={() => toggle(i)}
                    >
                      <span className="v4ho-ico">
                        <Icon aria-hidden="true" />
                      </span>
                      <span style={{ flex: "1 1 auto", minWidth: 0, fontWeight: 700, fontSize: 15, lineHeight: 1.25 }}>{t.label}</span>
                      <span key={done ? "g" : "y"} className={`v4ho-tag${done ? " done" : ""}`}>
                        {done ? "Gosellify" : "You"}
                      </span>
                      <span className="v4ho-switch" aria-hidden="true">
                        <span className="v4ho-knob" />
                      </span>
                    </button>
                  );
                })}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px", marginTop: 22 }}>
                <button
                  type="button"
                  onClick={onMain}
                  className={allDone ? "btn-outline" : "btn-accent"}
                  style={{ fontFamily: "inherit", flex: "1 1 240px" }}
                >
                  {allDone ? (
                    <>
                      <FaUndo aria-hidden="true" /> Take them back
                    </>
                  ) : (
                    <>
                      Hand it all over <FaArrowRight className="btn-arrow" aria-hidden="true" />
                    </>
                  )}
                </button>
                <span style={{ flex: "1 1 200px", minWidth: 0, display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--color-text-light)" }}>
                  <FaCheck aria-hidden="true" style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                  No management fee until the store makes profit.
                </span>
              </div>

              {allDone && (
                <div aria-hidden="true" style={{ position: "absolute", top: -22, right: "clamp(8px, 3vw, 36px)", pointerEvents: "none" }}>
                  <span className="v4ho-stamp stamp-in">Done for you</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
