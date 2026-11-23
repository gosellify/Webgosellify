"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { temuFaqs } from "./faqs";

export default function TemuFaqList() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
      <style>{`
        .tmuf-item { border: 2px solid var(--color-line); border-radius: 22px; background: #fff; transition: border-color .3s, box-shadow .3s; }
        .tmuf-item:hover { border-color: var(--color-primary); }
        .tmuf-item.open { border-color: var(--color-dark); box-shadow: 8px 8px 0 var(--color-accent); }
        .tmuf-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: clamp(18px, 2vw, 26px) clamp(18px, 2.2vw, 30px); background: none; border: none; cursor: pointer; text-align: left; font-family: inherit; font-size: clamp(17px, 1.5vw, 22px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.25; color: var(--color-dark); border-radius: 20px; }
        .tmuf-plus { width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; background: var(--color-primary-light); color: var(--color-primary); transition: transform .45s cubic-bezier(.2,.8,.2,1), background-color .3s, color .3s; }
        .tmuf-btn:hover .tmuf-plus { background: var(--color-primary); color: #fff; }
        .tmuf-item.open .tmuf-plus { transform: rotate(135deg); background: var(--color-dark); color: var(--color-accent); }
        .tmuf-panel { display: grid; grid-template-rows: 0fr; visibility: hidden; transition: grid-template-rows .45s cubic-bezier(.2,.8,.2,1), visibility 0s linear .45s; }
        .tmuf-item.open .tmuf-panel { grid-template-rows: 1fr; visibility: visible; transition: grid-template-rows .45s cubic-bezier(.2,.8,.2,1), visibility 0s; }
        .tmuf-panel > div { overflow: hidden; min-height: 0; }
        .tmuf-body { padding: 0 clamp(18px, 2.2vw, 30px) clamp(20px, 2.2vw, 28px); }
      `}</style>
      {temuFaqs.map((f, i) => {
        const isOpen = open === i;
        const linkStyle: React.CSSProperties = {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginTop: 14,
          fontWeight: 800,
          color: "var(--color-primary)",
          textDecoration: "none",
        };
        return (
          <Reveal key={f.q} delay={Math.min(i, 5) * 60}>
            <div className={isOpen ? "tmuf-item open" : "tmuf-item"}>
              <h3 style={{ margin: 0 }}>
                <button
                  type="button"
                  id={`tmuf-q-${i}`}
                  className="tmuf-btn"
                  aria-expanded={isOpen}
                  aria-controls={`tmuf-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="tmuf-plus" aria-hidden="true">
                    <FaPlus />
                  </span>
                </button>
              </h3>
              <div id={`tmuf-a-${i}`} role="region" aria-labelledby={`tmuf-q-${i}`} className="tmuf-panel">
                <div>
                  <div className="tmuf-body">
                    <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text-light)", maxWidth: 760 }}>{f.a}</p>
                    {f.link ? (
                      f.link.external ? (
                        <a href={f.link.href} target="_blank" rel="noopener noreferrer" className="link-underline" style={linkStyle}>
                          {f.link.label} <FaArrowRight aria-hidden="true" style={{ fontSize: 13 }} />
                        </a>
                      ) : (
                        <Link href={f.link.href} className="link-underline" style={linkStyle}>
                          {f.link.label} <FaArrowRight aria-hidden="true" style={{ fontSize: 13 }} />
                        </Link>
                      )
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
