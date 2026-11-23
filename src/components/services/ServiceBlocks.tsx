import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaInfoCircle, FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { pickIcon, tileClass } from "@/components/services/serviceIcons";

/* Building blocks shared by the service pages and the other inner pages (V6: centered, cards with solid icon tiles). */

const WHATSAPP = "https://wa.me/13073938789";
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const KIT_CSS = `
.sv-body > * { margin-left: auto; margin-right: auto; }
.sv-body > h3 { text-align: center; }
.sv-grid { --c: var(--sv-cols, 3); display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.sv-grid > * { flex: 0 0 calc((100% - (var(--c) - 1) * 20px) / var(--c)); max-width: calc((100% - (var(--c) - 1) * 20px) / var(--c)); min-width: 0; }
.sv-grid .g-card { height: 100%; }
@media (max-width: 1040px) { .sv-grid { --c: 2; } }
@media (max-width: 640px) { .sv-grid { --c: 1; gap: 14px; } .sv-grid > * { flex-basis: 100%; max-width: 100%; } }
.sv-steps { list-style: none; display: grid; grid-template-columns: repeat(var(--sv-cols, 4), minmax(0, 1fr)); gap: 36px 20px; }
.sv-step { position: relative; text-align: center; padding: 0 6px; min-width: 0; }
.sv-step-num { position: relative; z-index: 1; width: 48px; height: 48px; border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; background: var(--color-primary); color: #fff; font-weight: 800; font-size: 18px; }
.sv-step:nth-child(3n+2) .sv-step-num { background: var(--color-accent); color: var(--color-dark); }
.sv-step:nth-child(3n) .sv-step-num { background: var(--color-dark); }
.sv-step::after { content: ""; position: absolute; top: 23px; left: calc(50% + 34px); width: calc(100% - 48px); height: 2px; background: var(--color-line); }
.sv-step:last-child::after, .sv-steps.wrap3 .sv-step:nth-child(3n)::after, .sv-steps.wrap4 .sv-step:nth-child(4n)::after { display: none; }
@media (max-width: 860px) {
  .sv-steps { grid-template-columns: minmax(0, 1fr); gap: 0; max-width: 560px; margin: 0 auto; }
  .sv-step { text-align: left; padding: 0 0 26px 66px; min-height: 48px; }
  .sv-step-num { position: absolute; left: 0; top: 0; margin: 0; }
  .sv-step::after, .sv-steps.wrap3 .sv-step:nth-child(3n)::after, .sv-steps.wrap4 .sv-step:nth-child(4n)::after { display: block; top: 52px; bottom: 4px; left: 23px; width: 2px; height: auto; }
  .sv-step:last-child::after { display: none !important; }
  .sv-step:last-child { padding-bottom: 0; }
}
.sv-pair { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); overflow: hidden; }
.sv-pair > div { padding: 22px 24px; min-width: 0; }
.sv-pair > div:first-child { background: var(--color-primary-light); }
@media (max-width: 760px) { .sv-pair { grid-template-columns: minmax(0, 1fr); } .sv-pair > div { padding: 18px 18px; } }
.sv-tag { display: block; font-size: 12px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px; }
.sv-table { width: 100%; min-width: 560px; border-collapse: collapse; }
.sv-table th { text-align: left; padding: 14px 18px; font-size: 14px; font-weight: 800; color: var(--color-dark); background: var(--color-primary-light); vertical-align: bottom; }
.sv-table td { text-align: left; padding: 14px 18px; font-size: 15px; line-height: 1.5; color: var(--color-text-light); border-top: 1px solid var(--color-line); vertical-align: top; }
.sv-table td:first-child { color: var(--color-dark); font-weight: 700; }
.sv-table.hl th:nth-child(2) { color: var(--color-primary); }
.sv-table.hl td:nth-child(2) { color: var(--color-dark); font-weight: 600; }
.sv-faq { background: #fff; border: 1px solid var(--color-line); border-radius: 14px; transition: border-color .2s; }
.sv-faq + .sv-faq { margin-top: 12px; }
.sv-faq[open], .sv-faq:hover { border-color: var(--color-primary); }
.sv-faq summary { list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 22px; font-weight: 700; color: var(--color-dark); line-height: 1.45; }
.sv-faq summary::-webkit-details-marker { display: none; }
.sv-faq summary::after { content: "+"; flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--color-primary-light); color: var(--color-primary); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 18px; line-height: 1; }
.sv-faq[open] summary::after { content: "\\2212"; background: var(--color-primary); color: #fff; }
.sv-faq-a { padding: 0 22px 20px; color: var(--color-text-light); }
.sv-chips { list-style: none; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 12px; }
.sv-chips li { display: inline-flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 600; color: var(--color-dark); background: #fff; border: 1px solid var(--color-line); border-radius: 999px; padding: 7px 14px 7px 8px; line-height: 1.3; }
.sv-chips li > span { width: 22px; height: 22px; border-radius: 50%; background: var(--color-primary); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 10px; flex-shrink: 0; }
.sv-link-card { display: flex; flex-direction: column; height: 100%; padding: 24px; text-decoration: none; color: inherit; }
.sv-link-card .sv-more { margin-top: auto; padding-top: 14px; display: inline-flex; align-items: center; gap: 8px; color: var(--color-primary); font-weight: 700; font-size: 15px; }
.sv-form-panel { background: #fff; border: 1px solid var(--color-line); border-radius: 16px; }
`;

/* The shared styles. React keeps one copy in the page however many blocks render it. */
export function KitStyles() {
  return (
    <style href="gosellify-sv-kit" precedence="default">
      {KIT_CSS}
    </style>
  );
}

function colsFor(count: number): number {
  if (count <= 1) return 1;
  if (count === 2 || count === 4) return 2;
  if (count % 3 === 0 || count === 5) return 3;
  if (count % 4 === 0 || count === 7) return 4;
  return 3;
}

function colsVar(cols: number): CSSProperties {
  return { "--sv-cols": cols } as CSSProperties;
}

interface HeroProps {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  points?: string[];
  note?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /* Extra content under the buttons, for example a screenshot showcase. */
  children?: ReactNode;
}

export function ServiceHero({ eyebrow, title, lead, points, note, primaryLabel, primaryHref, secondaryLabel, secondaryHref, children }: HeroProps) {
  const primary = primaryHref ?? "/profit-check";
  return (
    <section className="g-section" style={{ background: "#fff", paddingTop: "clamp(48px, 5vw, 72px)", paddingBottom: "clamp(48px, 5vw, 72px)" }}>
      <KitStyles />
      <div className="container-main center">
        <span className="g-eyebrow">{eyebrow}</span>
        <h1 className="g-h1" style={{ margin: "18px auto 0", maxWidth: 860 }}>{title}</h1>
        <p className="g-lead" style={{ marginTop: 18, maxWidth: 720 }}>{lead}</p>
        <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {primary.startsWith("#") || primary.startsWith("http") ? (
            <a href={primary} className="btn-accent" {...(primary.startsWith("http") ? external : {})}>{primaryLabel ?? "Check my profit"} <FaArrowRight className="btn-arrow" aria-hidden="true" style={{ fontSize: 13 }} /></a>
          ) : (
            <Link href={primary} className="btn-accent">{primaryLabel ?? "Check my profit"} <FaArrowRight className="btn-arrow" aria-hidden="true" style={{ fontSize: 13 }} /></Link>
          )}
          {secondaryHref && !secondaryHref.startsWith("http") ? (
            <Link href={secondaryHref} className="btn-outline">{secondaryLabel ?? "See pricing"}</Link>
          ) : (
            <a href={secondaryHref ?? WHATSAPP} {...external} className="btn-outline"><FaWhatsapp aria-hidden="true" /> {secondaryLabel ?? "Ask on WhatsApp"}</a>
          )}
        </div>
        {points && points.length > 0 ? (
          <ul className="sv-chips" style={{ margin: "30px auto 0", maxWidth: 900 }}>
            {points.map((point) => (
              <li key={point}>
                <span aria-hidden="true"><FaCheck /></span>
                {point}
              </li>
            ))}
          </ul>
        ) : null}
        {note ? <p className="typo-small" style={{ margin: "22px auto 0", maxWidth: 680 }}>{note}</p> : null}
        {children}
      </div>
    </section>
  );
}

interface SectionProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tint?: boolean;
  id?: string;
  children: ReactNode;
}

export function ServiceSection({ eyebrow, title, lead, tint, id, children }: SectionProps) {
  return (
    <section id={id} className={tint ? "g-section bg-tint" : "g-section"} style={tint ? undefined : { background: "#fff" }}>
      <KitStyles />
      <div className="container-main">
        <Reveal className="center" style={{ marginBottom: 40 }}>
          {eyebrow ? <span className="g-eyebrow">{eyebrow}</span> : null}
          <h2 className="g-h2" style={{ margin: eyebrow ? "14px auto 0" : "0 auto", maxWidth: 760 }}>{title}</h2>
          {lead ? <p className="g-lead" style={{ marginTop: 12, maxWidth: 680 }}>{lead}</p> : null}
        </Reveal>
        <div className="sv-body">{children}</div>
      </div>
    </section>
  );
}

export interface TextRow {
  left: string;
  right: string;
}

/* One card per row: the difficulty on a tint half, what we do about it on the white half. */
export function TwoColRows({ leftHead, rightHead, rows }: { leftHead: string; rightHead: string; rows: TextRow[] }) {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gap: 14 }}>
      {rows.map((row, index) => (
        <Reveal key={row.left} delay={Math.min(index, 4) * 50}>
          <div className="g-card sv-pair">
            <div>
              <span className="sv-tag" style={{ color: "var(--color-text-light)" }}>{leftHead}</span>
              <p style={{ fontWeight: 700, color: "var(--color-dark)", lineHeight: 1.45 }}>{row.left}</p>
            </div>
            <div>
              <span className="sv-tag" style={{ color: "var(--color-primary)" }}>{rightHead}</span>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.6, fontSize: 16 }}>{row.right}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export interface TitledItem {
  title: string;
  desc: string;
}

/* Ordered steps: a horizontal stepper on desktop, stacked on mobile. */
export function StepList({ steps }: { steps: TitledItem[] }) {
  const count = steps.length;
  const cols = count <= 5 ? count : count === 6 || count === 9 ? 3 : 4;
  const wrap = count <= 5 ? "" : cols === 3 ? " wrap3" : " wrap4";
  return (
    <Reveal>
      <ol className={`sv-steps${wrap}`} style={colsVar(cols)}>
        {steps.map((step, index) => (
          <li key={step.title} className="sv-step">
            <span className="sv-step-num" aria-hidden="true">{index + 1}</span>
            <h3 className="g-h3">{step.title}</h3>
            <p style={{ marginTop: 6, color: "var(--color-text-light)", fontSize: 16, lineHeight: 1.6 }}>{step.desc}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

/* What is included: cards with a solid icon tile, a bold title and a short line. */
export function FeatureList({ items, cols }: { items: TitledItem[]; cols?: number }) {
  return (
    <div className="sv-grid" style={colsVar(cols ?? colsFor(items.length))}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={(index % 4) * 60}>
          <div className="g-card" style={{ padding: 24 }}>
            <span className={tileClass(index)} aria-hidden="true">{pickIcon(item.title)}</span>
            <h3 className="g-h3" style={{ marginTop: 16 }}>{item.title}</h3>
            <p style={{ marginTop: 6, color: "var(--color-text-light)", fontSize: 16, lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* Short lines as a two-column check list inside one card. */
export function PlainList({ items }: { items: string[] }) {
  return (
    <Reveal style={{ maxWidth: 900 }}>
      <ul
        className="sv-form-panel"
        style={{ listStyle: "none", padding: "14px 26px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "0 36px" }}
      >
        {items.map((item) => (
          <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "11px 0", color: "var(--color-dark)", fontSize: 16, lineHeight: 1.5 }}>
            <span aria-hidden="true" style={{ flexShrink: 0, marginTop: 2, width: 22, height: 22, borderRadius: "50%", background: "var(--color-primary)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>
              <FaCheck />
            </span>
            <span style={{ minWidth: 0 }}>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export type Cell = string | boolean;

function cellText(cell: Cell): string {
  if (cell === true) return "Yes";
  if (cell === false) return "No";
  return cell;
}

/* Table with a tint header and a rounded border. The first column is the row label. Booleans print as Yes / No. */
export function PlainTable({ columns, rows, note }: { columns: string[]; rows: Cell[][]; note?: ReactNode }) {
  const highlight = columns[1] === "Gosellify";
  return (
    <div style={{ maxWidth: 1000 }}>
      <div style={{ overflowX: "auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: 16 }}>
        <table className={highlight ? "sv-table hl" : "sv-table"}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={cellText(row[0])} className="row-hover">
                {row.map((cell, index) => (
                  <td key={`${cellText(row[0])}-${columns[index]}`}>{cellText(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="typo-small" style={{ marginTop: 14, textAlign: "center" }}>{note}</p> : null}
    </div>
  );
}

/* A note card with an amber icon tile, for risk notes and things we do not promise. */
export function ServiceNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      style={{ maxWidth: 860, margin: "0 auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: 16, padding: "22px 24px", display: "flex", flexWrap: "wrap", gap: 18, alignItems: "flex-start", textAlign: "left" }}
    >
      <span className="icon-tile amber" aria-hidden="true"><FaInfoCircle /></span>
      <div style={{ flex: "1 1 260px", minWidth: 0 }}>
        <h3 className="g-h3">{title}</h3>
        <div style={{ marginTop: 8, color: "var(--color-text-light)", display: "grid", gap: 10, fontSize: 16 }}>{children}</div>
      </div>
    </div>
  );
}

const profitPoints: TitledItem[] = [
  { title: "Pay from profit", desc: "No management fee until the store makes profit." },
  { title: "No contract", desc: "You can cancel anytime." },
  { title: "Working capital", desc: "$3,000 to $5,000 depending on the business model." },
];

/* How we charge for managed stores. */
export function ProfitShareBlock({ tint, subject }: { tint?: boolean; subject: string }) {
  return (
    <ServiceSection eyebrow="What it costs" title="You pay from profit" tint={tint}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FeatureList items={profitPoints} cols={3} />
      </div>
      <div style={{ maxWidth: 760, margin: "28px auto 0", display: "grid", gap: 12, color: "var(--color-text-light)", textAlign: "center" }}>
        <p>
          We manage {subject} on a profit share. There is no management fee until the store makes profit, there is no
          contract, and you can cancel anytime.
        </p>
        <p>
          You fund the store&apos;s own costs, such as products and marketplace fees. To start you need $3,000 to
          $5,000 working capital depending on the business model.
        </p>
        <p style={{ marginTop: 8 }}>
          <Link href="/pricing" className="btn-outline">
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

/* Link cards with an icon tile and an arrow. */
export function LinkCards({ links, cols, more }: { links: RelatedLink[]; cols?: number; more?: string }) {
  return (
    <div className="sv-grid" style={colsVar(cols ?? colsFor(links.length))}>
      {links.map((link, index) => (
        <Reveal key={link.href + link.label} delay={(index % 4) * 60}>
          <Link href={link.href} className="g-card sv-link-card">
            <span className={tileClass(index)} aria-hidden="true">{pickIcon(link.label)}</span>
            <span className="g-h3" style={{ display: "block", marginTop: 16 }}>{link.label}</span>
            {link.desc ? <span style={{ display: "block", marginTop: 6, color: "var(--color-text-light)", fontSize: 16, lineHeight: 1.6 }}>{link.desc}</span> : null}
            <span className="sv-more">{more ?? "Read more"} <FaArrowRight className="btn-arrow" aria-hidden="true" style={{ fontSize: 12 }} /></span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function RelatedLinks({ title, links, tint }: { title?: string; links: RelatedLink[]; tint?: boolean }) {
  return (
    <ServiceSection title={title ?? "Related services"} tint={tint}>
      <LinkCards links={links} />
    </ServiceSection>
  );
}
