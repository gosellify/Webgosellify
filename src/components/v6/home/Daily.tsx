import React from "react";
import { FaBoxOpen, FaChartLine, FaClipboardList, FaComments, FaSearch, FaShieldAlt, FaTags, FaTimes, FaTruck, FaUndo, FaWarehouse } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

type Tone = "" | "amber" | "navy";
type Task = { term: string; text: string; icon: React.ReactNode; tone: Tone };

const tasks: Task[] = [
  { term: "Product research", text: "We look for products with steady demand and enough margin left after fees and shipping.", icon: <FaSearch />, tone: "" },
  { term: "Listings and optimization", text: "We write and upload listings, then improve titles, images and attributes as data comes in.", icon: <FaClipboardList />, tone: "amber" },
  { term: "Pricing and repricing", text: "We set prices against cost and competition, and change them when either one moves.", icon: <FaTags />, tone: "navy" },
  { term: "Order processing", text: "Orders are confirmed and sent for fulfillment on the day they arrive.", icon: <FaBoxOpen />, tone: "" },
  { term: "Shipping and fulfillment", text: "Stock held in our US warehouses gets same-day prep and shipping.", icon: <FaTruck />, tone: "amber" },
  { term: "Returns", text: "We handle return requests, refunds and returned stock.", icon: <FaUndo />, tone: "navy" },
  { term: "Customer support", text: "We answer buyer messages inside the marketplace's response window.", icon: <FaComments />, tone: "" },
  { term: "Inventory management", text: "We watch stock levels and reorder before items run out.", icon: <FaWarehouse />, tone: "amber" },
  { term: "Account health", text: "We check the account's metrics every day and act when one starts to slip.", icon: <FaShieldAlt />, tone: "navy" },
  { term: "Monthly profit reports", text: "At month end we close the books and you get a statement that matches the portal.", icon: <FaChartLine />, tone: "" },
];

const notDone: string[] = [
  "We do not promise sales or profit.",
  "We do not buy or sell seller accounts. The account is yours, in your name.",
  "We do not pass your marketplace password around. Access is given per person and logged.",
  "We do not lock you into a contract.",
];

export default function Daily() {
  return (
    <section className="g-section bg-tint">
      <div className="container-main">
        <Reveal className="h6-head">
          <p className="g-eyebrow">Daily work</p>
          <h2 className="g-h2">What we do every day</h2>
          <p className="g-lead">Ten jobs that keep a marketplace store running. Our team does all of them, and you can see the result of each in the portal.</p>
        </Reveal>
        <div className="h6-day">
          <ul className="h6-tasks">
            {tasks.map((t, i) => (
              <li key={t.term}>
                <Reveal delay={(i % 2) * 70} style={{ height: "100%" }}>
                  <div className="g-card h6-task">
                    <span className={`icon-tile${t.tone ? ` ${t.tone}` : ""}`} aria-hidden="true">
                      {t.icon}
                    </span>
                    <div>
                      <b>{t.term}</b>
                      <span>{t.text}</span>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={120} className="h6-not">
            <span className="icon-tile navy" aria-hidden="true">
              <FaTimes />
            </span>
            <h3 className="g-h3" style={{ marginTop: 16 }}>
              What we do not do
            </h3>
            <ul>
              {notDone.map((n) => (
                <li key={n}>
                  <i className="h6-x" aria-hidden="true">
                    <FaTimes />
                  </i>
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
