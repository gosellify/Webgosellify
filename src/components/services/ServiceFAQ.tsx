interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
  title?: string;
  tint?: boolean;
}

/* Plain question list. Uses native details/summary, so every answer is in the page HTML. */
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="container-main">
        <h2 className="g-h2" style={{ marginBottom: 20 }}>{title ?? "Questions and answers"}</h2>
        <div style={{ maxWidth: 760 }}>
          {faqs.map((item, index) => (
            <details key={item.question} open={index === 0} style={{ borderTop: "1px solid var(--color-line)", padding: "14px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 700, color: "var(--color-dark)", lineHeight: 1.45 }}>
                {item.question}
              </summary>
              <p style={{ marginTop: 8, color: "var(--color-text-light)" }}>{item.answer}</p>
            </details>
          ))}
          <hr className="rule" />
        </div>
      </div>
    </section>
  );
}
