import React from "react";
import Link from "next/link";
import { FaArrowRight, FaClock, FaRegCalendarCheck } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { guides, GuideMeta } from "@/app/guides/guides";

export interface TocItem {
  id: string;
  label: string;
}

type Props = {
  slug: string;
  toc: TocItem[];
  children: React.ReactNode;
};

/** Shared page frame for every guide: hero, sticky table of contents, article column, related guides and CTA. */
export default function GuideLayout({ slug, toc, children }: Props) {
  const meta: GuideMeta | undefined = guides.find((g) => g.slug === slug);
  const others: GuideMeta[] = guides.filter((g) => g.slug !== slug).slice(0, 3);
  if (!meta) return null;

  return (
    <>
      <style>{`
.guide-body h2 { font-size: clamp(26px, 2.6vw, 38px); line-height: 1.12; font-weight: 800; letter-spacing: -0.03em; color: var(--color-dark); margin: 56px 0 16px; scroll-margin-top: 110px; }
.guide-body h3 { font-size: 22px; line-height: 1.25; font-weight: 800; color: var(--color-dark); margin: 32px 0 10px; }
.guide-body p { font-size: 18px; line-height: 1.75; color: var(--color-text-light); margin: 0 0 18px; }
.guide-body ul, .guide-body ol { margin: 0 0 20px 22px; font-size: 18px; line-height: 1.75; color: var(--color-text-light); }
.guide-body li { margin-bottom: 8px; }
.guide-body ul { list-style: disc; } .guide-body ol { list-style: decimal; }
.guide-body a { color: var(--color-primary); font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
.guide-body strong { color: var(--color-dark); }
.guide-body table { width: 100%; border-collapse: collapse; font-size: 16px; }
.guide-body th { text-align: left; background: var(--color-dark); color: #fff; padding: 14px 16px; font-weight: 800; }
.guide-body td { padding: 14px 16px; border-bottom: 1px solid var(--color-line); color: var(--color-text-light); vertical-align: top; }
.guide-table { overflow-x: auto; border: 2px solid var(--color-line); border-radius: 18px; margin: 0 0 24px; }
.guide-note { background: var(--color-primary-light); border: 2px solid var(--color-line); border-radius: 18px; padding: 20px 22px; margin: 0 0 24px; }
.guide-note p { margin: 0; color: var(--color-dark); }
.guide-toc a { display: block; padding: 9px 14px; border-radius: 10px; color: var(--color-dark); font-weight: 700; font-size: 15px; text-decoration: none; transition: background-color .2s, padding-left .2s; }
.guide-toc a:hover { background: var(--color-primary-light); padding-left: 20px; }
.guide-side { display: none; }
@media (min-width: 1100px) { .guide-side { display: block; position: sticky; top: 110px; align-self: start; } }
      `}</style>

      <section className="bg-tint grid-dots" style={{ position: "relative", overflow: "hidden" }}>
        <div className="blob" aria-hidden="true" style={{ width: 460, height: 460, background: "rgba(21,96,255,0.2)", top: -220, right: -100 }} />
        <div className="container-main" style={{ position: "relative", paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(40px, 5vw, 72px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", fontSize: 14, fontWeight: 700, marginBottom: 18 }}>
            <Link href="/guides" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Guides</Link>
            <span aria-hidden="true" style={{ color: "var(--color-text-light)" }}>/</span>
            <span style={{ background: "var(--color-dark)", color: "#fff", padding: "4px 12px", borderRadius: 999 }}>{meta.tag}</span>
          </div>
          <h1 className="g-h1" style={{ fontSize: "clamp(36px, 4.6vw, 72px)", maxWidth: 1100 }}>{meta.title}</h1>
          <p className="g-lead" style={{ maxWidth: 760, marginTop: 18 }}>{meta.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px", marginTop: 22, fontSize: 15, fontWeight: 700, color: "var(--color-text-light)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><FaClock aria-hidden="true" /> {meta.minutes} min read</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><FaRegCalendarCheck aria-hidden="true" /> Last reviewed: {meta.reviewed}</span>
            <span>By the Gosellify team</span>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container-main" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 56, paddingTop: 24, paddingBottom: "clamp(64px, 8vw, 120px)" }}>
          <div className="guide-grid" style={{ display: "grid", gap: 64 }}>
            <style>{`@media (min-width: 1100px) { .guide-grid { grid-template-columns: 300px minmax(0, 860px); } }`}</style>
            <aside className="guide-side">
              <div style={{ border: "2px solid var(--color-line)", borderRadius: 20, padding: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--color-primary)", padding: "6px 14px 10px" }}>In this guide</div>
                <nav className="guide-toc" aria-label="In this guide">
                  {toc.map((t) => (
                    <a key={t.id} href={`#${t.id}`}>{t.label}</a>
                  ))}
                </nav>
              </div>
              <div className="bg-navy" style={{ borderRadius: 20, padding: 22, marginTop: 16, color: "#fff" }}>
                <div style={{ fontWeight: 800, fontSize: 20, lineHeight: 1.2, marginBottom: 8 }}>Want a team to do this for you?</div>
                <p style={{ color: "#c9d6f7", fontSize: 15, marginBottom: 14 }}>Answer 5 quick questions and get a plan for your store.</p>
                <Link href="/profit-check" className="btn-accent" style={{ padding: "13px 18px", fontSize: 15 }}>
                  Check my profit <FaArrowRight className="btn-arrow" size={12} />
                </Link>
              </div>
            </aside>
            <article className="guide-body" style={{ minWidth: 0 }}>{children}</article>
          </div>
        </div>
      </section>

      <section className="g-section bg-tint">
        <div className="container-main">
          <span className="g-eyebrow">Keep reading</span>
          <h2 className="g-h2" style={{ fontSize: "clamp(30px, 3.4vw, 50px)", margin: "14px 0 32px" }}>More seller guides</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 18 }}>
            {others.map((g, i) => (
              <Reveal key={g.slug} delay={i * 100}>
                <Link href={`/guides/${g.slug}`} className="g-card" style={{ display: "flex", flexDirection: "column", gap: 12, padding: 28, height: "100%", textDecoration: "none", color: "var(--color-dark)" }}>
                  <span style={{ alignSelf: "flex-start", fontSize: 12, fontWeight: 800, letterSpacing: 1.4, textTransform: "uppercase", color: "var(--color-primary)" }}>{g.tag}</span>
                  <span className="g-h3">{g.title}</span>
                  <span style={{ color: "var(--color-text-light)", fontSize: 16 }}>{g.description}</span>
                  <span style={{ marginTop: "auto", fontWeight: 800, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 8 }}>Read the guide <FaArrowRight size={12} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
