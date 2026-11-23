"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import { temuFaqs } from "./faqs";

export default function TemuFaqList() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div style={{ minWidth: 0, borderBottom: "1px solid var(--color-line)" }}>
      <style>{`
        .tmuf-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 0; background: none; border: none; cursor: pointer; text-align: left; font-family: inherit; font-size: 17px; font-weight: 700; line-height: 1.4; color: var(--color-dark); }
        .tmuf-btn:hover { color: var(--color-primary); }
      `}</style>
      {temuFaqs.map((f, i) => {
        const isOpen = open === i;
        const linkStyle: React.CSSProperties = { display: "inline-block", marginTop: 10, fontWeight: 600, color: "var(--color-primary)" };
        return (
          <div key={f.q} style={{ borderTop: "1px solid var(--color-line)" }}>
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
                <span aria-hidden="true" style={{ flexShrink: 0, fontSize: 13, color: "var(--color-text-light)" }}>
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
            </h3>
            <div id={`tmuf-a-${i}`} role="region" aria-labelledby={`tmuf-q-${i}`} hidden={!isOpen} style={{ paddingBottom: 18 }}>
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
