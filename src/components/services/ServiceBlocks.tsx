import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

/* Plain building blocks shared by the service pages (V5: flat, left-aligned, no effects). */

const WHATSAPP = "https://wa.me/13073938789";

const thStyle: CSSProperties = {
  textAlign: "left",
  padding: "12px 14px",
  fontSize: 14,
  fontWeight: 700,
  color: "var(--color-dark)",
  borderBottom: "1px solid var(--color-dark)",
  verticalAlign: "bottom",
};

const tdStyle: CSSProperties = {
  textAlign: "left",
  padding: "12px 14px",
  fontSize: 15,
  lineHeight: 1.5,
  color: "var(--color-text-light)",
  borderBottom: "1px solid var(--color-line)",
  verticalAlign: "top",
};

interface HeroProps {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  points?: string[];
  note?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ServiceHero({ eyebrow, title, lead, points, note, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: HeroProps) {
  return (
    <section className="g-section" style={{ background: "#fff", paddingBottom: "clamp(40px, 4vw, 56px)" }}>
      <div className="container-main">
        <div style={{ maxWidth: 800 }}>
          <span className="g-eyebrow">{eyebrow}</span>
          <h1 className="g-h1" style={{ marginTop: 10 }}>{title}</h1>
          <p className="g-lead" style={{ marginTop: 16 }}>{lead}</p>
          {points && points.length > 0 ? (
            <ul style={{ listStyle: "none", marginTop: 20, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "8px 28px" }}>
              {points.map((point) => (
                <li key={point} style={{ fontSize: 16, color: "var(--color-dark)", paddingLeft: 14, borderLeft: "2px solid var(--color-primary)", lineHeight: 1.45 }}>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href={primaryHref ?? "/profit-check"} className="btn-primary">{primaryLabel ?? "Check my profit"}</Link>
            {secondaryHref ? (
              <Link href={secondaryHref} className="btn-outline">{secondaryLabel ?? "See pricing"}</Link>
            ) : (
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline">Ask on WhatsApp</a>
            )}
          </div>
          {note ? <p className="typo-small" style={{ marginTop: 18, maxWidth: 680 }}>{note}</p> : null}
        </div>
      </div>
    </section>
  );
}

interface SectionProps {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  tint?: boolean;
  id?: string;
  children: ReactNode;
}

export function ServiceSection({ eyebrow, title, lead, tint, id, children }: SectionProps) {
  return (
    <section id={id} className={tint ? "g-section bg-tint" : "g-section"} style={tint ? undefined : { background: "#fff" }}>
      <div className="container-main">
        <div style={{ maxWidth: 760, marginBottom: 28 }}>
          {eyebrow ? <span className="g-eyebrow">{eyebrow}</span> : null}
          <h2 className="g-h2" style={{ marginTop: eyebrow ? 8 : 0 }}>{title}</h2>
          {lead ? <p className="g-lead" style={{ marginTop: 12 }}>{lead}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export interface TextRow {
  left: string;
  right: string;
}

/* Two plain text columns per row: the difficulty on the left, what we do about it on the right. */
export function TwoColRows({ leftHead, rightHead, rows }: { leftHead: string; rightHead: string; rows: TextRow[] }) {
  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
    gap: "6px 40px",
    padding: "16px 0",
    borderTop: "1px solid var(--color-line)",
  };
  return (
    <div style={{ maxWidth: 980 }}>
      <div className="hidden md:block" aria-hidden="true">
        <div style={{ ...grid, borderTop: "0", paddingTop: 0 }}>
          <span className="typo-small" style={{ fontWeight: 700, color: "var(--color-dark)" }}>{leftHead}</span>
          <span className="typo-small" style={{ fontWeight: 700, color: "var(--color-dark)" }}>{rightHead}</span>
        </div>
      </div>
      {rows.map((row) => (
        <div key={row.left} style={grid}>
          <p style={{ fontWeight: 700, color: "var(--color-dark)", lineHeight: 1.5 }}>{row.left}</p>
          <p style={{ color: "var(--color-text-light)", lineHeight: 1.6 }}>{row.right}</p>
        </div>
      ))}
      <hr className="rule" />
    </div>
  );
}

export interface TitledItem {
  title: string;
  desc: string;
}

/* Ordered steps as a plain numbered list. */
export function StepList({ steps }: { steps: TitledItem[] }) {
  return (
    <ol style={{ listStyle: "none", maxWidth: 760 }}>
      {steps.map((step, index) => (
        <li key={step.title} style={{ display: "flex", gap: 16, padding: "16px 0", borderTop: "1px solid var(--color-line)" }}>
          <span style={{ flexShrink: 0, width: 28, fontWeight: 800, color: "var(--color-primary)" }}>{index + 1}.</span>
          <div style={{ minWidth: 0 }}>
            <h3 className="g-h3">{step.title}</h3>
            <p style={{ marginTop: 4, color: "var(--color-text-light)" }}>{step.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* What is included: titles with a short description, separated by thin rules. No icons. */
export function FeatureList({ items }: { items: TitledItem[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "0 48px" }}>
      {items.map((item) => (
        <div key={item.title} style={{ padding: "16px 0", borderTop: "1px solid var(--color-line)" }}>
          <h3 className="g-h3">{item.title}</h3>
          <p style={{ marginTop: 4, color: "var(--color-text-light)", fontSize: 16, lineHeight: 1.6 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function PlainList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", maxWidth: 760 }}>
      {items.map((item) => (
        <li key={item} style={{ padding: "10px 0", borderTop: "1px solid var(--color-line)", color: "var(--color-dark)" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export type Cell = string | boolean;

function cellText(cell: Cell): string {
  if (cell === true) return "Yes";
  if (cell === false) return "No";
  return cell;
}

/* Plain table. The first column is the row label. Booleans print as Yes / No, no coloured marks. */
export function PlainTable({ columns, rows, note }: { columns: string[]; rows: Cell[][]; note?: ReactNode }) {
  return (
    <div style={{ maxWidth: 980 }}>
      <div style={{ overflowX: "auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: 8 }}>
        <table style={{ width: "100%", minWidth: 520, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col" style={thStyle}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={cellText(row[0])}>
                {row.map((cell, index) => (
                  <td
                    key={`${cellText(row[0])}-${columns[index]}`}
                    style={index === 0 ? { ...tdStyle, color: "var(--color-dark)", fontWeight: 600 } : tdStyle}
                  >
                    {cellText(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="typo-small" style={{ marginTop: 12 }}>{note}</p> : null}
    </div>
  );
}

/* A plain note with a left rule, for risk notes and things we do not promise. */
export function ServiceNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ maxWidth: 760, background: "#fff", border: "1px solid var(--color-line)", borderLeft: "3px solid var(--color-dark)", borderRadius: 8, padding: "20px 22px" }}>
      <h3 className="g-h3">{title}</h3>
      <div style={{ marginTop: 8, color: "var(--color-text-light)", display: "grid", gap: 10 }}>{children}</div>
    </div>
  );
}

/* How we charge for managed stores. Plain text, no banner. */
export function ProfitShareBlock({ tint, subject }: { tint?: boolean; subject: string }) {
  return (
    <ServiceSection eyebrow="What it costs" title="You pay from profit" tint={tint}>
      <div style={{ maxWidth: 760, display: "grid", gap: 14, color: "var(--color-text-light)" }}>
        <p>
          We manage {subject} on a profit share. There is no management fee until the store makes profit, there is no
          contract, and you can cancel anytime.
        </p>
        <p>
          You fund the store&apos;s own costs, such as products and marketplace fees. To start you need $3,000 to
          $5,000 working capital depending on the business model.
        </p>
        <p>
          <Link href="/pricing" className="link-underline" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
            Read how pricing works
          </Link>
        </p>
      </div>
    </ServiceSection>
  );
}

export interface RelatedLink {
  href: string;
  label: string;
  desc?: string;
}

export function RelatedLinks({ title, links, tint }: { title?: string; links: RelatedLink[]; tint?: boolean }) {
  return (
    <ServiceSection title={title ?? "Related services"} tint={tint}>
      <ul style={{ listStyle: "none", maxWidth: 760 }}>
        {links.map((link) => (
          <li key={link.href} style={{ padding: "14px 0", borderTop: "1px solid var(--color-line)" }}>
            <Link href={link.href} className="link-underline" style={{ color: "var(--color-primary)", fontWeight: 700 }}>
              {link.label}
            </Link>
            {link.desc ? <p style={{ marginTop: 4, color: "var(--color-text-light)", fontSize: 16 }}>{link.desc}</p> : null}
          </li>
        ))}
      </ul>
    </ServiceSection>
  );
}
