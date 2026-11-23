import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

type Point = { term: string; text: string; tone: "" | "amber" | "navy" };

const points: Point[] = [
  { term: "What you pay for", text: "Product cost and shipping are yours, because the stock and the store belong to you. This is your working capital.", tone: "" },
  { term: "What we are paid", text: "Our share comes out of the profit, after the month is closed and the statement is in your portal. There is no management fee before the store makes profit.", tone: "amber" },
  { term: "How long you stay", text: "As long as it works for you. There is no contract, and you can leave at any time.", tone: "navy" },
];

export default function Paid() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <div className="container-main">
        <Reveal className="h6-head">
          <p className="g-eyebrow">Pay from profit</p>
          <h2 className="g-h2">How we are paid</h2>
          <p className="g-lead">We work on profit share. If the store does not make profit in a month, we do not earn a management fee for that month.</p>
        </Reveal>
        <div className="h6-pay">
          {points.map((p, i) => (
            <Reveal key={p.term} delay={i * 80}>
              <div className="g-card h6-pay-card">
                <span className={`icon-tile h6-num${p.tone ? ` ${p.tone}` : ""}`} aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="g-h3">{p.term}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="h6-foot">
          <Link href="/pricing" className="h6-link">
            Read how pricing works
            <FaArrowRight size={12} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
