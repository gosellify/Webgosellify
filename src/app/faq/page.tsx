import Link from "next/link";
import { FaComments } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";
import { ServiceHero } from "@/components/services/ServiceBlocks";

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "What is 2-step dropshipping and is it allowed?",
    answer:
      "In 2-step dropshipping we buy a product after your customer orders it, receive it at our US warehouse, inspect it, and ship it to the customer ourselves. Each marketplace has its own seller policies, and our process is built to follow them. We are not lawyers, so for legal or tax questions about your own business please ask a qualified professional.",
  },
  {
    question: "How do you keep order fulfillment compliant?",
    answer:
      "Every order is routed through our US warehouse, inspected, and shipped in plain, unbranded packaging with no third-party invoices or marketing inserts, following each marketplace's packaging and fulfillment policies. Orders are never shipped directly from another retailer to a marketplace customer.",
  },
  {
    question: "Is 2-step dropshipping still profitable after shipping and warehouse costs?",
    answer:
      "It can be, but not for every product. When we research products we count the warehouse and shipping cost before we list anything, and we only pick products where a margin is left after those costs. Some orders still lose money, and you will see those in the Portal too.",
  },
  {
    question: "How much profit can I expect?",
    answer:
      "We cannot promise a number. Profit depends on the marketplace, the products, your working capital and the season. You can see every order, every cost and the profit for your store in the Gosellify Portal, so you never have to guess how it is going.",
  },
  {
    question: "Why do I need capital if dropshipping needs no upfront inventory?",
    answer:
      "The marketplace pays you some time after the customer orders, not on the same day. Until then the products are bought with your own funds. You need $3,000 to $5,000 working capital depending on the business model.",
  },
  {
    question: "Can I use my own address as the warehouse?",
    answer:
      "Yes. If you can receive products and ship them to customers yourself, you do not need to pay for a third-party warehouse.",
  },
  {
    question: "Where do you source products?",
    answer:
      "We source new, authentic products from reputable US wholesalers, authorized distributors and retailers, and keep purchase records for every order so authenticity can always be proven.",
  },
  {
    question: "Will you manage my whole store?",
    answer:
      "Yes. We handle product research, sourcing, listings, order management, shipping, returns and customer support. You own the store and the seller account.",
  },
  {
    question: "What if my store does not make a profit?",
    answer:
      "Then you pay us no management fee. We work on pay from profit, so our fee only starts when the store makes profit. There is no contract and you can cancel anytime. We do not guarantee profit, and the money you spend on products is your own business cost.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        eyebrow="FAQ"
        title="Ecommerce management service: questions and answers"
        lead="These are the questions sellers ask us most before they start. The answers are short and plain."
      />

      <section className="g-section bg-tint" style={{ paddingTop: "clamp(48px, 5vw, 72px)" }}>
        <div className="container-main">
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            {faqs.map((item, index) => (
              <details key={item.question} className="sv-faq" open={index === 0}>
                <summary>
                  <h2 style={{ fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: 0 }}>{item.question}</h2>
                </summary>
                <p className="sv-faq-a">{item.answer}</p>
              </details>
            ))}
          </div>

          <div
            style={{ maxWidth: "860px", margin: "28px auto 0", background: "#fff", border: "1px solid var(--color-line)", borderRadius: 16, padding: "22px 24px", display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center" }}
          >
            <span className="icon-tile amber" aria-hidden="true"><FaComments /></span>
            <div style={{ flex: "1 1 260px", minWidth: 0 }}>
              <h2 className="g-h3" style={{ marginBottom: "4px" }}>Still have a question?</h2>
              <p className="typo-body">
                Message us on{" "}
                <a
                  href="https://wa.me/13073938789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  style={{ color: "var(--color-primary)", fontWeight: 700 }}
                >
                  WhatsApp
                </a>{" "}
                or use the{" "}
                <Link href="/contact" className="link-underline" style={{ color: "var(--color-primary)", fontWeight: 700 }}>
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
