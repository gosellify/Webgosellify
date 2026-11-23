import Link from "next/link";
import { homeFaqs } from "./faqData";

const css = `
.v5faq { display: grid; grid-template-columns: 1fr; gap: 28px; }
@media (min-width: 960px) { .v5faq { grid-template-columns: minmax(0, 4fr) minmax(0, 7fr); gap: 64px; } }
.v5faq details { border-top: 1px solid var(--color-line); }
.v5faq details:last-child { border-bottom: 1px solid var(--color-line); }
.v5faq summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: baseline; gap: 20px; padding: 16px 0; font-weight: 700; color: var(--color-dark); }
.v5faq summary::-webkit-details-marker { display: none; }
.v5faq summary::after { content: "+"; flex-shrink: 0; font-weight: 400; font-size: 22px; line-height: 1; color: var(--color-primary); }
.v5faq details[open] summary::after { content: "\\2212"; }
.v5faq summary:hover { color: var(--color-primary); }
.v5faq-a { padding: 0 40px 18px 0; color: var(--color-text-light); }
`;

export default function Faq() {
  return (
    <section className="g-section bg-tint">
      <style>{css}</style>
      <div className="container-main v5faq">
        <div>
          <h2 className="g-h2">Questions owners ask us first</h2>
          <p className="v5-p" style={{ marginTop: 12 }}>
            Short answers here. There are more on the{" "}
            <Link href="/faq" className="v5-link">FAQ page</Link>.
          </p>
        </div>
        <div>
          {homeFaqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="v5faq-a">
                <p>{f.a}</p>
                {f.link && (
                  <p style={{ marginTop: 8 }}>
                    <Link href={f.link.href} className="v5-link">{f.link.label}</Link>
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
