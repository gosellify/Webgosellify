import Link from "next/link";
import { FaArrowRight, FaWallet } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

type Step = { title: string; text: string };

const steps: Step[] = [
  { title: "Discussion", text: "You tell us about your store, or the store you want to open. We agree on the marketplace, the business model and the terms." },
  { title: "Access", text: "You add us as a user on your seller account. We connect the store to the Gosellify Portal through the marketplace's official API, and you get your own login." },
  { title: "Planning", text: "We write a plan for your marketplace and model: which products, what prices and how orders will be fulfilled." },
  { title: "Growth", text: "Our team runs the store every day. You can follow orders, stock and account health in the portal." },
  { title: "Calculation", text: "At the end of each month we close the numbers. You see every sale and cost, and our share is paid from the profit." },
];

export default function Start() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <div className="container-main">
        <Reveal className="h6-head">
          <p className="g-eyebrow">Getting started</p>
          <h2 className="g-h2">How we start</h2>
          <p className="g-lead">Five steps, in this order. The first one is a short form and a conversation.</p>
        </Reveal>
        <Reveal>
          <ol className="h6-steps">
            {steps.map((s, i) => (
              <li key={s.title} className={`h6-step${i === steps.length - 1 ? " last" : ""}`}>
                <span className="h6-dot" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="h6-capital">
          <div className="h6-capital-text">
            <span className="icon-tile" aria-hidden="true">
              <FaWallet />
            </span>
            <p>
              <b>Capital to plan for:</b> $3,000 to $5,000 of working capital, depending on the business model.
            </p>
          </div>
          <Link href="/profit-check" className="btn-primary">
            Start the Profit Check
            <FaArrowRight size={12} className="btn-arrow" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
