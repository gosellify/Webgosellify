"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import { temuFaqs } from "./faqs";

export default function TemuFaqList() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div style={{ minWidth: 0, display: "grid", gap: 12, textAlign: "left" }}>
      <style>{`
        .tmuf-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 22px; background: none; border: none; cursor: pointer; text-align: left; font-family: inherit; font-size: 17px; font-weight: 700; line-height: 1.4; color: var(--color-dark); }
        .tmuf-btn:hover { color: var(--color-primary); }
        .tmuf-row { background: #fff; border: 1px solid var(--color-line); border-radius: 14px; transition: border-color .2s; }
        .tmuf-row:hover, .tmuf-row.open { border-color: var(--color-primary); }
        .tmuf-ico { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; background: var(--color-primary-light); color: var(--color-primary); }
        .tmuf-row.open .tmuf-ico { background: var(--color-primary); color: #fff; }
      `}</style>
      {temuFaqs.map((f, i) => {
        const isOpen = open === i;
        const linkStyle: React.CSSProperties = { display: "inline-block", marginTop: 10, fontWeight: 600, color: "var(--color-primary)" };
        return (
          <div key={f.q} className={isOpen ? "tmuf-row open" : "tmuf-row"}>
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
                <span aria-hidden="true" className="tmuf-ico">
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
            </h3>
            <div id={`tmuf-a-${i}`} role="region" aria-labelledby={`tmuf-q-${i}`} hidden={!isOpen} style={{ padding: "0 22px 20px" }}>
              <p style={{ color: "var(--color-text-light)" }}>{f.a}</p>
              {f.link ? (
                f.link.external ? (
                  <a href={f.link.href} target="_blank" rel="noopener noreferrer" className="link-underline" style={linkStyle}>
                    {f.link.label}
                  </a>
                ) : (
                  <Link href={f.link.href} className="link-underline" style={linkStyle}>
                    {f.link.label}
                  </Link>
                )
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
