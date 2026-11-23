"use client";

import React, { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { FaBoxOpen, FaCheck, FaClipboardList, FaStore, FaTruck, FaWarehouse } from "react-icons/fa";
import Tilt from "@/components/motion/Tilt";

type Stage = { label: string; note: string; icon: IconType };

const stages: Stage[] = [
  { label: "Order received", note: "A shopper buys on Temu", icon: FaClipboardList },
  { label: "Picked", note: "From your stock in the US", icon: FaWarehouse },
  { label: "Packed", note: "Checked and labelled", icon: FaBoxOpen },
  { label: "Shipped", note: "Tracking added to the order", icon: FaTruck },
  { label: "Delivered", note: "Order closed, profit logged", icon: FaCheck },
];

type Row = { id: string; item: string; offset: number };

const rows: Row[] = [
  { id: "#..2041", item: "Storage bins, 6 pack", offset: 0 },
  { id: "#..2042", item: "Bamboo drawer organizer", offset: 3 },
  { id: "#..2043", item: "Microfiber cloths, 24 pack", offset: 1 },
];

const STEP_MS = 1900;

export default function TemuHeroVisual() {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => setStep((s) => (s + 1) % stages.length), STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  const pct = (step / (stages.length - 1)) * 100;

  return (
    <div style={{ position: "relative" }}>
      <style>{`
        .tmuh-stage { display: flex; align-items: center; gap: 14px; padding: 12px 14px; border-radius: 16px; border: 1px solid transparent; transition: background-color .4s, border-color .4s, transform .4s cubic-bezier(.2,.8,.2,1); }
        .tmuh-stage.now { background: var(--color-primary-light); border-color: var(--color-primary); transform: translateX(6px); }
        .tmuh-ico { width: 40px; height: 40px; flex-shrink: 0; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 16px; background: var(--color-primary-light); color: var(--color-primary); transition: background-color .4s, color .4s; }
        .tmuh-stage.done .tmuh-ico { background: var(--color-dark); color: #fff; }
        .tmuh-stage.now .tmuh-ico { background: var(--color-primary); color: #fff; }
        .tmuh-pill { display: inline-block; padding: 4px 11px; border-radius: 999px; font-size: 12px; font-weight: 800; background: var(--color-dark); color: #fff; white-space: nowrap; }
        .tmuh-label { font-size: 11px; font-weight: 800; letter-spacing: 1.3px; text-transform: uppercase; color: var(--color-text-light); }
        @media (max-width: 520px) { .tmuh-note { display: none; } }
      `}</style>
      <Tilt max={4}>
        <div
          style={{
            borderRadius: 26,
            background: "#fff",
            color: "var(--color-dark)",
            border: "2px solid var(--color-dark)",
            boxShadow: "12px 12px 0 var(--color-accent)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              padding: "14px 18px",
              background: "var(--color-dark)",
              color: "#fff",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 15, minWidth: 0 }}>
              <FaStore aria-hidden="true" style={{ color: "var(--color-accent)" }} /> Your Temu store · Orders
            </span>
            <span
              style={{
                padding: "4px 10px",
                borderRadius: 999,
                background: "var(--color-accent)",
                color: "var(--color-dark)",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Sample view
            </span>
          </div>

          <div style={{ padding: "clamp(16px, 2vw, 26px)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
              <span className="tmuh-label">Order #..2041</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 800 }}>
                <span
                  className="pulse-dot"
                  aria-hidden="true"
                  style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-primary)", display: "inline-block" }}
                />
                Live flow
              </span>
            </div>
            <div aria-hidden="true" style={{ height: 8, borderRadius: 999, background: "var(--color-primary-light)", marginBottom: 14, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${Math.max(pct, 6)}%`,
                  borderRadius: 999,
                  background: "var(--color-primary)",
                  transition: step === 0 ? "none" : "width .7s cubic-bezier(.2,.8,.2,1)",
                }}
              />
            </div>

            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 4 }}>
              {stages.map((s, i) => {
                const Icon = s.icon;
                const cls = i === step ? "tmuh-stage now" : i < step ? "tmuh-stage done" : "tmuh-stage";
                return (
                  <li key={s.label} className={cls}>
                    <span className="tmuh-ico" aria-hidden="true">
                      <Icon />
                    </span>
                    <span style={{ minWidth: 0, flex: "1 1 auto" }}>
                      <span style={{ display: "block", fontSize: 16, fontWeight: 800, lineHeight: 1.2 }}>{s.label}</span>
                      <span className="tmuh-note" style={{ display: "block", fontSize: 13.5, color: "var(--color-text-light)" }}>
                        {s.note}
                      </span>
                    </span>
                    {i < step ? (
                      <FaCheck aria-hidden="true" style={{ color: "var(--color-primary)", fontSize: 13, flexShrink: 0 }} />
                    ) : null}
                  </li>
                );
              })}
            </ol>

            <div style={{ marginTop: 14, borderTop: "1px solid var(--color-line)", paddingTop: 12, display: "grid", gap: 8 }}>
              {rows.map((r) => {
                const st = stages[(step + r.offset) % stages.length];
                return (
                  <div key={r.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, fontSize: 14 }}>
                    <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      <b style={{ fontVariantNumeric: "tabular-nums" }}>{r.id}</b>{" "}
                      <span style={{ color: "var(--color-text-light)" }}>{r.item}</span>
                    </span>
                    <span className="tmuh-pill">{st.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Tilt>

      <div
        className="float-a"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "clamp(-18px, -1vw, -6px)",
          bottom: -22,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 16px",
          borderRadius: 16,
          background: "var(--color-primary)",
          color: "#fff",
          fontSize: 13.5,
          fontWeight: 800,
          boxShadow: "0 18px 36px rgba(10,27,77,0.25)",
        }}
      >
        <FaWarehouse /> Ships from US stock
      </div>
    </div>
  );
}
