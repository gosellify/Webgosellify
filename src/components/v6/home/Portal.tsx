import { FaCheck } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import ScreenShowcase from "@/components/v6/ScreenShowcase";

type Item = { term: string; text: string };

const items: Item[] = [
  { term: "Order-level profit and loss", text: "Each order with its sale price, marketplace fees, product cost and what was left." },
  { term: "Monthly statements and invoices", text: "A closed statement for every month, and the invoice for our share built from it." },
  { term: "Account health, checked daily", text: "Late shipments, cancellations and other metrics the marketplace judges the account on." },
  { term: "A separate connection for each store", text: "Every store has its own encrypted connection through the marketplace's official API." },
  { term: "Access by role, with change history", text: "Each person has their own login and role. Changes are recorded with who made them." },
];

export default function Portal() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <div className="container-main h6-portal">
        <Reveal>
          <p className="g-eyebrow">The Gosellify Portal</p>
          <h2 className="g-h2">See your store the way we see it</h2>
          <p className="g-lead">Every store we manage runs on the Gosellify Portal. You get your own login to it from the first day.</p>
          <ul className="h6-checks">
            {items.map((it) => (
              <li key={it.term}>
                <i className="h6-check" aria-hidden="true">
                  <FaCheck />
                </i>
                <div>
                  <b>{it.term}</b>
                  <span>{it.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} style={{ minWidth: 0 }}>
          <ScreenShowcase variant="profit" caption="Profit and loss for November 2026 so far, from our own Walmart store. Every managed store has this page." />
        </Reveal>
      </div>
    </section>
  );
}
