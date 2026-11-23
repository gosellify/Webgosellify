type Item = { term: string; text: string };

const items: Item[] = [
  { term: "Order-level profit and loss", text: "Each order with its sale price, marketplace fees, product cost and what was left." },
  { term: "Monthly statements and invoices", text: "A closed statement for every month, and the invoice for our share built from it." },
  { term: "Account health, checked daily", text: "Late shipments, cancellations and other metrics the marketplace judges the account on." },
  { term: "A separate connection for each store", text: "Every store has its own encrypted connection through the marketplace's official API." },
  { term: "Access by role, with change history", text: "Each person has their own login and role. Changes are recorded with who made them." },
];

const css = `
.v5dl { display: grid; grid-template-columns: 1fr; margin-top: 40px; border-top: 1px solid var(--color-line); }
.v5dl > div { padding: 16px 0; border-bottom: 1px solid var(--color-line); }
.v5dl dt { font-weight: 700; color: var(--color-dark); }
.v5dl dd { color: var(--color-text-light); margin-top: 2px; }
@media (min-width: 800px) {
  .v5dl > div { display: grid; grid-template-columns: minmax(0, 4fr) minmax(0, 7fr); gap: 32px; }
  .v5dl dd { margin-top: 0; }
}
`;

export default function PortalView() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <style>{css}</style>
      <div className="container-main">
        <div className="v5-head">
          <h2 className="g-h2">See your store the way we see it</h2>
          <p className="g-lead">Every store we manage runs on the Gosellify Portal. You get your own login to it from the first day.</p>
        </div>

        <figure className="v5-frame">
          <img
            src="/images/portal/store-profit.jpg"
            width={1228}
            height={372}
            loading="lazy"
            alt="Profit and loss page in the Gosellify Portal for November 2026 so far: sales $27,510.15, Walmart fees $4,134.61, product, labels and prep $20,207.52, sold at a loss $198.07, profit $3,168.02."
          />
          <figcaption>Profit and loss for November 2026 so far, from our own store. Every managed store has this page.</figcaption>
        </figure>

        <dl className="v5dl">
          {items.map((it) => (
            <div key={it.term}>
              <dt>{it.term}</dt>
              <dd>{it.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
