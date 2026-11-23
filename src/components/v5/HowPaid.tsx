import Link from "next/link";

type Point = { term: string; text: string };

const points: Point[] = [
  { term: "What you pay for", text: "Product cost and shipping are yours, because the stock and the store belong to you. This is your working capital." },
  { term: "What we are paid", text: "Our share comes out of the profit, after the month is closed and the statement is in your portal. There is no management fee before the store makes profit." },
  { term: "How long you stay", text: "As long as it works for you. There is no contract, and you can leave at any time." },
];

const css = `
.v5pay { display: grid; grid-template-columns: 1fr; gap: 28px; }
@media (min-width: 960px) { .v5pay { grid-template-columns: minmax(0, 4fr) minmax(0, 7fr); gap: 64px; } }
.v5pay dl > div { padding: 18px 0; border-top: 1px solid var(--color-line); }
.v5pay dl > div:last-child { border-bottom: 1px solid var(--color-line); }
.v5pay dt { font-weight: 700; color: var(--color-dark); }
.v5pay dd { color: var(--color-text-light); margin-top: 2px; }
`;

export default function HowPaid() {
  return (
    <section className="g-section bg-tint">
      <style>{css}</style>
      <div className="container-main v5pay">
        <div>
          <h2 className="g-h2">How we are paid</h2>
          <p className="g-lead" style={{ marginTop: 12 }}>
            We work on profit share. If the store does not make profit in a month, we do not earn a management fee for that month.
          </p>
          <p style={{ marginTop: 16 }}>
            <Link href="/pricing" className="v5-link">Read how pricing works</Link>
          </p>
        </div>
        <dl>
          {points.map((p) => (
            <div key={p.term}>
              <dt>{p.term}</dt>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
