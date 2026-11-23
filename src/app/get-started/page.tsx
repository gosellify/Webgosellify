import type { Metadata } from "next";
import { FaCheckCircle, FaClock, FaLock, FaWhatsapp } from "react-icons/fa";
import LeadForm from "./LeadForm";

export const metadata: Metadata = {
  title: "Get a Free Walmart & Amazon Store Plan",
  description:
    "Tell us about your Walmart, Amazon or Temu store in 3 minutes. Gosellify replies within one business day with a free plan for managing and growing your store.",
  alternates: { canonical: "/get-started" },
};

const promises = [
  { icon: FaClock, text: "Reply within one business day" },
  { icon: FaCheckCircle, text: "Free plan, no obligation" },
  { icon: FaLock, text: "Your answers stay private" },
];

export default function GetStartedPage() {
  return (
    <div className="bg-light-gray">
      <section className="container-main grid gap-10 py-14 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="flex flex-col gap-5 lg:sticky lg:top-32">
          <span className="g-eyebrow">Free store plan</span>
          <h1 className="text-3xl font-extrabold leading-tight text-dark sm:text-4xl">
            Tell us about your store. We will send you a plan.
          </h1>
          <p className="text-lg text-text-light">
            A few quick questions about your marketplace, account and budget. A Gosellify manager reviews every answer
            and contacts you with the right model, the expected setup time and the profit share.
          </p>
          <ul className="flex flex-col gap-3">
            {promises.map((p) => (
              <li key={p.text} className="flex items-center gap-3 font-semibold text-dark">
                <p.icon className="text-primary" /> {p.text}
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/13073938789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            <FaWhatsapp /> Prefer to talk first? Message us on WhatsApp
          </a>
        </div>
        <LeadForm />
      </section>
    </div>
  );
}
