import { KitStyles } from "@/components/services/ServiceBlocks";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
  title?: string;
  tint?: boolean;
}

/* Rounded accordion rows. Uses native details/summary, so every answer is in the page HTML. */
export default function ServiceFAQ({ faqs, title, tint }: ServiceFAQProps) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className={tint ? "g-section bg-tint" : "g-section"} style={tint ? undefined : { background: "#fff" }}>
      <KitStyles />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="container-main">
        <div className="center" style={{ marginBottom: 32 }}>
          <span className="g-eyebrow" style={tint ? { background: "#fff" } : undefined}>FAQ</span>
          <h2 className="g-h2" style={{ margin: "14px auto 0", maxWidth: 760 }}>{title ?? "Questions and answers"}</h2>
        </div>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {faqs.map((item, index) => (
            <details key={item.question} className="sv-faq" open={index === 0}>
              <summary>{item.question}</summary>
              <p className="sv-faq-a">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
