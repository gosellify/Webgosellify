type Task = { term: string; text: string };

const tasks: Task[] = [
  { term: "Product research", text: "We look for products with steady demand and enough margin left after fees and shipping." },
  { term: "Listings and optimization", text: "We write and upload listings, then improve titles, images and attributes as data comes in." },
  { term: "Pricing and repricing", text: "We set prices against cost and competition, and change them when either one moves." },
  { term: "Order processing", text: "Orders are confirmed and sent for fulfillment on the day they arrive." },
  { term: "Shipping and fulfillment", text: "Stock held in our US warehouses gets same-day prep and shipping." },
  { term: "Returns", text: "We handle return requests, refunds and returned stock." },
  { term: "Customer support", text: "We answer buyer messages inside the marketplace's response window." },
  { term: "Inventory management", text: "We watch stock levels and reorder before items run out." },
  { term: "Account health", text: "We check the account's metrics every day and act when one starts to slip." },
  { term: "Monthly profit reports", text: "At month end we close the books and you get a statement that matches the portal." },
];

const notDone: string[] = [
  "We do not promise sales or profit.",
  "We do not buy or sell seller accounts. The account is yours, in your name.",
  "We do not pass your marketplace password around. Access is given per person and logged.",
  "We do not lock you into a contract.",
];

const css = `
.v5day { display: grid; grid-template-columns: 1fr; gap: 48px; }
@media (min-width: 1040px) { .v5day { grid-template-columns: minmax(0, 1fr) 320px; gap: 64px; align-items: start; } }
.v5day-list { list-style: none; display: grid; grid-template-columns: 1fr; gap: 0 48px; }
@media (min-width: 700px) { .v5day-list { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.v5day-list li { position: relative; padding: 14px 0 14px 28px; border-bottom: 1px solid var(--color-line); color: var(--color-text-light); }
.v5day-list li::before { content: ""; position: absolute; left: 3px; top: 21px; width: 11px; height: 6px; border-left: 2px solid var(--color-primary); border-bottom: 2px solid var(--color-primary); transform: rotate(-45deg); }
.v5day-list b { display: block; color: var(--color-dark); font-weight: 700; }
.v5not { border: 1px solid var(--color-line); border-radius: 8px; padding: 22px 24px; }
.v5not ul { list-style: none; margin-top: 10px; }
.v5not li { position: relative; padding: 9px 0 9px 22px; color: var(--color-dark); font-size: 16px; line-height: 1.5; }
.v5not li + li { border-top: 1px solid var(--color-line); }
.v5not li::before { content: ""; position: absolute; left: 0; top: 21px; width: 11px; height: 2px; background: var(--color-text-light); }
`;

export default function DailyWork() {
  return (
    <section className="g-section v5-top-rule" style={{ background: "#fff" }}>
      <style>{css}</style>
      <div className="container-main">
        <div className="v5-head">
          <h2 className="g-h2">What we do every day</h2>
          <p className="g-lead">Ten jobs that keep a marketplace store running. Our team does all of them, and you can see the result of each in the portal.</p>
        </div>
        <div className="v5day">
          <ul className="v5day-list">
            {tasks.map((t) => (
              <li key={t.term}>
                <b>{t.term}</b>
                {t.text}
              </li>
            ))}
          </ul>
          <div className="v5not">
            <h3 className="g-h3">What we do not do</h3>
            <ul>
              {notDone.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
