import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
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

type Related = { href: string; label: string };

/** Service pages shown under a guide, by guide tag. Guides are not published yet, so they do not link to each other. */
const RELATED: Record<string, Related[]> = {
  Walmart: [
    { href: "/services/walmart-management", label: "Walmart marketplace management services" },
    { href: "/services/seller-account-setup", label: "Seller account setup" },
    { href: "/services/walmart-wfs", label: "Walmart WFS" },
  ],
  Temu: [
    { href: "/services/temu", label: "Temu store management" },
    { href: "/services/seller-account-setup", label: "Seller account setup" },
    { href: "/services/3pl-warehouse", label: "3PL and warehousing" },
  ],
  Comparison: [
    { href: "/services/walmart-wfs", label: "Walmart WFS" },
    { href: "/services/amazon-fba", label: "Amazon FBA management service" },
    { href: "/services/3pl-warehouse", label: "3PL and warehousing" },
  ],
  Amazon: [
    { href: "/services/amazon-wholesale", label: "Amazon wholesale" },
    { href: "/services/amazon-arbitrage", label: "2-step dropshipping on Amazon" },
    { href: "/services/amazon", label: "Amazon store management services" },
  ],
};

const FALLBACK: Related[] = [{ href: "/services", label: "All services" }];

/** Shared page frame for every guide: title block, table of contents, article column and related services. */
export default function GuideLayout({ slug, toc, children }: Props) {
  const meta: GuideMeta | undefined = guides.find((g) => g.slug === slug);
  if (!meta) return null;
  const related: Related[] = RELATED[meta.tag] ?? FALLBACK;

  return (
    <>
      <style>{`
.guide-body h2 { font-size: clamp(22px, 2.2vw, 28px); line-height: 1.25; font-weight: 800; letter-spacing: -0.015em; color: var(--color-dark); margin: 44px 0 12px; scroll-margin-top: 100px; }
.guide-body h3 { font-size: 20px; line-height: 1.3; font-weight: 700; color: var(--color-dark); margin: 28px 0 8px; }
.guide-body p { font-size: 17px; line-height: 1.7; color: var(--color-text-light); margin: 0 0 16px; }
.guide-body ul, .guide-body ol { margin: 0 0 18px 22px; font-size: 17px; line-height: 1.7; color: var(--color-text-light); }
.guide-body li { margin-bottom: 6px; }
.guide-body ul { list-style: disc; } .guide-body ol { list-style: decimal; }
.guide-body a { color: var(--color-primary); font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
.guide-body a.btn-accent, .guide-body a.btn-primary { color: #fff; font-weight: 700; text-decoration: none; }
.guide-body strong { color: var(--color-dark); }
.guide-body table { width: 100%; border-collapse: collapse; font-size: 15px; }
.guide-body th { text-align: left; background: var(--color-light-gray); color: var(--color-dark); padding: 12px 14px; font-weight: 700; border-bottom: 1px solid var(--color-line); }
.guide-body td { padding: 12px 14px; border-bottom: 1px solid var(--color-line); color: var(--color-text-light); vertical-align: top; }
.guide-body tr:last-child td { border-bottom: 0; }
.guide-table { overflow-x: auto; border: 1px solid var(--color-line); border-radius: 10px; margin: 0 0 22px; }
.guide-note { background: var(--color-light-gray); border: 1px solid var(--color-line); border-radius: 10px; padding: 16px 18px; margin: 0 0 22px; }
.guide-note p { margin: 0; color: var(--color-dark); }
.guide-toc { margin: 0; padding-left: 20px; }
.guide-toc li { margin-top: 4px; }
.guide-toc a { color: var(--color-primary); font-size: 16px; text-decoration: underline; text-underline-offset: 3px; }
      `}</style>

      <section style={{ background: "#fff" }}>
        <div className="container-read" style={{ paddingTop: "clamp(36px, 5vw, 64px)" }}>
          <span className="g-eyebrow">{meta.tag} guide</span>
          <h1 className="g-h1" style={{ marginTop: 10 }}>{meta.title}</h1>
          <p className="g-lead" style={{ marginTop: 14 }}>{meta.description}</p>
          <p className="typo-small" style={{ marginTop: 14 }}>
            By the Gosellify team. {meta.minutes} min read. Last reviewed: {meta.reviewed}
          </p>
          <hr className="rule" style={{ marginTop: 24 }} />
          <nav aria-label="In this guide" style={{ marginTop: 20 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "var(--color-dark)" }}>In this guide</p>
            <ol className="guide-toc">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container-read" style={{ paddingTop: 8, paddingBottom: "clamp(48px, 6vw, 80px)" }}>
          <article className="guide-body" style={{ minWidth: 0 }}>{children}</article>
        </div>
      </section>

      <section className="bg-tint" style={{ padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div className="container-read">
          <h2 className="g-h2">Related services</h2>
          <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0, borderBottom: "1px solid var(--color-line)" }}>
            {related.map((r) => (
              <li key={r.href} style={{ borderTop: "1px solid var(--color-line)", padding: "12px 0" }}>
                <Link href={r.href} className="link-underline" style={{ fontWeight: 600, color: "var(--color-primary)" }}>
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 22, color: "var(--color-text-light)" }}>
            Want a team to do this for you? Answer a few quick questions and we reply with a plan for your store.
          </p>
          <div style={{ marginTop: 16 }}>
            <Link href="/profit-check" className="btn-primary">
              Check my profit <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
