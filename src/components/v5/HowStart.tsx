import Link from "next/link";

type Step = { title: string; text: string };

const steps: Step[] = [
  { title: "Discussion", text: "You tell us about your store, or the store you want to open. We agree on the marketplace, the business model and the terms. Plan for $3,000 to $5,000 of working capital, depending on the model." },
  { title: "Access", text: "You add us as a user on your seller account and we connect the store to the Gosellify Portal through the marketplace's official API. You get your own portal login." },
  { title: "Planning", text: "We write a plan for your marketplace and model: which products, what prices and how orders will be fulfilled." },
  { title: "Growth", text: "Our team runs the store every day. You can follow orders, stock and account health in the portal." },
  { title: "Calculation", text: "At the end of each month we close the numbers. You see every sale and cost, and our share is paid from the profit." },
];

const css = `
.v5steps { list-style: none; counter-reset: v5s; max-width: 860px; }
.v5steps li { counter-increment: v5s; display: grid; grid-template-columns: 44px minmax(0, 1fr); gap: 0 16px; padding: 20px 0; border-top: 1px solid var(--color-line); }
.v5steps li:last-child { border-bottom: 1px solid var(--color-line); }
.v5steps li::before { content: counter(v5s); font-size: 28px; font-weight: 800; line-height: 1.1; color: var(--color-primary); }
.v5steps p { color: var(--color-text-light); margin-top: 4px; }
`;

export default function HowStart() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <style>{css}</style>
      <div className="container-main">
        <div className="v5-head">
          <h2 className="g-h2">How we start</h2>
          <p className="g-lead">Five steps, in this order. The first one is a short form and a conversation.</p>
        </div>
        <ol className="v5steps">
          {steps.map((s) => (
            <li key={s.title}>
              <div>
                <h3 className="g-h3">{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p style={{ marginTop: 28 }}>
          <Link href="/profit-check" className="btn-primary">
            Get a plan for my store
          </Link>
        </p>
      </div>
    </section>
  );
}
