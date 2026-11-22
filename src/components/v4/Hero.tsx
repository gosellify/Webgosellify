"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaBoxOpen, FaChartLine, FaCheck, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import Tilt from "@/components/motion/Tilt";
import CountUp from "@/components/motion/CountUp";

const words: string[] = ["Amazon", "Walmart", "eBay", "Shopify", "Etsy"];

interface FeedRow {
  store: string;
  id: string;
  sale: string;
  profit: string;
}

const feed: FeedRow[] = [
  { store: "Walmart", id: "#..4821", sale: "$64.99", profit: "+$16.94" },
  { store: "Amazon", id: "#..1190", sale: "$38.50", profit: "+$10.78" },
  { store: "eBay", id: "#..7742", sale: "$112.00", profit: "+$30.60" },
  { store: "Shopify", id: "#..0318", sale: "$29.99", profit: "+$10.79" },
  { store: "Walmart", id: "#..4822", sale: "$21.47", profit: "+$4.57" },
  { store: "Amazon", id: "#..1191", sale: "$84.90", profit: "+$24.95" },
  { store: "Etsy", id: "#..5506", sale: "$46.00", profit: "+$15.90" },
];

const bars: number[] = [32, 44, 58, 50, 66, 60, 78, 72, 88, 100];

export default function Hero() {
  const [w, setW] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const a = window.setInterval(() => setW((v) => (v + 1) % words.length), 2400);
    const b = window.setInterval(() => setTick((v) => v + 1), 2200);
    return () => {
      window.clearInterval(a);
      window.clearInterval(b);
    };
  }, []);

  const visible: FeedRow[] = [0, 1, 2, 3].map((i) => feed[(tick + i) % feed.length]);

  return (
    <section className="grid-dots" style={{ position: "relative", overflow: "hidden", background: "#fff" }}>
      <div className="blob" aria-hidden="true" style={{ width: 620, height: 620, background: "rgba(21,96,255,0.22)", top: -220, right: -120 }} />
      <div className="blob" aria-hidden="true" style={{ width: 460, height: 460, background: "rgba(255,178,26,0.22)", bottom: -200, left: -140, animationDelay: "-6s" }} />

      <div className="container-wide" style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 72px", paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(72px, 8vw, 128px)" }}>
        <div style={{ flex: "1 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>
          <span className="slide-up-in" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, background: "var(--color-primary-light)", color: "var(--color-primary)", fontWeight: 800, fontSize: 14, padding: "9px 16px", borderRadius: 999, border: "1px solid var(--color-line)" }}>
            <span className="pulse-dot" style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} />
            Amazon, Walmart, eBay, Shopify and Etsy management agency
          </span>

          <h1 className="g-h1" style={{ fontSize: "clamp(40px, 5vw, 84px)" }}>
            Your{" "}
            <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBottom: "0.08em" }}>
              <span key={w} className="word-in t-blue">
                {words[w]}
              </span>
            </span>{" "}
            store, fully managed.
            <br />
            Your profit, <span className="mark-amber">fully visible.</span>
          </h1>

          <p className="g-lead slide-up-in" style={{ maxWidth: 620, animationDelay: ".15s" }}>
            We run your ecommerce stores from product research to delivery. You pay from profit, and you see every order, cost and dollar in your own dashboard.
          </p>

          <div className="slide-up-in" style={{ display: "flex", flexWrap: "wrap", gap: 14, animationDelay: ".25s" }}>
            <Link href="/profit-check" className="btn-accent" style={{ fontSize: 18, padding: "20px 30px" }}>
              Start the 2-minute Profit Check <FaArrowRight className="btn-arrow" size={15} />
            </Link>
            <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 18, padding: "18px 26px" }}>
              <FaWhatsapp size={20} /> Quick WhatsApp
            </a>
          </div>

          <div className="slide-up-in" style={{ display: "flex", flexWrap: "wrap", gap: "10px 26px", fontSize: 15, fontWeight: 700, color: "var(--color-text-light)", animationDelay: ".35s" }}>
            {["No upfront management fee", "No contract", "Dedicated account manager", "24/7 support"].map((t) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--color-primary)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <FaCheck size={10} />
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ flex: "1.1 1 560px", minWidth: 0, position: "relative", padding: "34px 0 46px" }}>
          <div aria-hidden="true" className="spin-slow" style={{ position: "absolute", inset: "-4% 6%", border: "2px dashed var(--color-line)", borderRadius: "50%" }} />
          <Tilt max={7}>
            <div style={{ position: "relative", background: "var(--color-dark)", color: "#fff", borderRadius: 30, padding: "clamp(20px, 2.4vw, 34px)", boxShadow: "0 50px 100px rgba(10,27,77,0.38)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFB21A" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#1560FF" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#2A4590" }} />
                  <span style={{ fontWeight: 700, fontSize: 15, marginLeft: 8 }}>Gosellify Portal</span>
                </span>
                <span style={{ fontSize: 12, fontWeight: 800, color: "var(--color-dark)", background: "var(--color-accent)", padding: "5px 12px", borderRadius: 999 }}>Sample view</span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
                <div style={{ flex: "1.2 1 260px", minWidth: 0 }}>
                  <div style={{ fontSize: 14, color: "#c9d6f7", fontWeight: 600 }}>Total revenue</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 18 }}>
                    <span style={{ fontWeight: 800, fontSize: "clamp(34px, 3.4vw, 54px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                      <CountUp to={691224} prefix="$" duration={2200} />
                    </span>
                    <span style={{ fontWeight: 800, fontSize: 14, color: "var(--color-accent)" }}>35% ROI</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 170 }}>
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        className="bar-grow"
                        style={{ flex: 1, height: `${h}%`, borderRadius: "8px 8px 0 0", background: i === bars.length - 1 ? "#FFB21A" : i > 5 ? "#1560FF" : "#2A4590", animationDelay: `${0.3 + i * 0.07}s` }}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ flex: "1 1 240px", minWidth: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#c9d6f7", marginBottom: 2 }}>
                    <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFB21A", display: "inline-block" }} />
                    Live order feed
                  </div>
                  {visible.map((r, i) => (
                    <div key={`${tick}-${i}`} className={i === 0 ? "slide-up-in" : undefined} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, background: i === 0 ? "#1a3380" : "var(--color-dark-light)", borderRadius: 12, padding: "11px 14px", fontSize: 14 }}>
                      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                        <span style={{ fontWeight: 800 }}>{r.store}</span>
                        <span style={{ fontSize: 12, color: "#c9d6f7" }}>
                          {r.id} · {r.sale}
                        </span>
                      </span>
                      <span style={{ fontWeight: 800, color: "#FFB21A", fontVariantNumeric: "tabular-nums" }}>{r.profit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10, marginTop: 20 }}>
                <div style={{ background: "var(--color-dark-light)", borderRadius: 14, padding: "12px 14px" }}>
                  <div style={{ fontSize: 12, color: "#c9d6f7", fontWeight: 600 }}>Orders</div>
                  <div style={{ fontWeight: 800, fontSize: 20 }}>
                    <CountUp to={20768} duration={2200} />
                  </div>
                </div>
                <div style={{ background: "var(--color-dark-light)", borderRadius: 14, padding: "12px 14px" }}>
                  <div style={{ fontSize: 12, color: "#c9d6f7", fontWeight: 600 }}>Profit</div>
                  <div style={{ fontWeight: 800, fontSize: 20 }}>
                    <CountUp to={241928} prefix="$" duration={2200} />
                  </div>
                </div>
                <div style={{ background: "var(--color-primary)", borderRadius: 14, padding: "12px 14px" }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>Account health</div>
                  <div style={{ fontWeight: 800, fontSize: 20 }}>Good</div>
                </div>
              </div>
            </div>
          </Tilt>

          <div className="float-a" style={{ position: "absolute", top: 0, right: "2%", background: "#fff", border: "2px solid var(--color-line)", borderRadius: 18, padding: "12px 16px", boxShadow: "0 20px 44px rgba(10,27,77,0.2)", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 42, height: 42, borderRadius: 12, background: "var(--color-primary-light)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaBoxOpen size={20} />
            </span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-light)" }}>Shipped same day</span>
              <span style={{ fontWeight: 800, fontSize: 15, color: "var(--color-dark)" }}>Order packed and out</span>
            </span>
          </div>
          <div className="float-b" style={{ position: "absolute", bottom: 0, left: "0%", background: "#fff", border: "2px solid var(--color-line)", borderRadius: 18, padding: "12px 16px", boxShadow: "0 20px 44px rgba(10,27,77,0.2)", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 42, height: 42, borderRadius: 12, background: "var(--color-accent)", color: "var(--color-dark)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaChartLine size={20} />
            </span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-light)" }}>Profit on every order</span>
              <span style={{ fontWeight: 800, fontSize: 15, color: "var(--color-dark)" }}>Tracked to the cent</span>
            </span>
          </div>
          <div className="float-a" style={{ position: "absolute", bottom: 2, right: "8%", background: "var(--color-primary)", color: "#fff", borderRadius: 16, padding: "10px 14px", boxShadow: "0 20px 44px rgba(21,96,255,0.4)", display: "flex", alignItems: "center", gap: 10, animationDelay: "-3s", fontWeight: 800, fontSize: 14 }}>
            <FaShieldAlt size={16} /> Health checked daily
          </div>
        </div>
      </div>
    </section>
  );
}
