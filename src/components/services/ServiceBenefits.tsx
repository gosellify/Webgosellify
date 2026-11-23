const benefitItems: { title: string; content: string }[] = [
  {
    title: "The store stays yours",
    content:
      "The seller account is in your name and under your control. We work inside it with the access you give us, and you can remove that access at any time.",
  },
  {
    title: "One team does the daily work",
    content:
      "Our operations team in Multan, Pakistan handles product research, listings, orders, returns and buyer messages. You do not need to hire or train anyone.",
  },
  {
    title: "You see the numbers we see",
    content:
      "Every managed store runs on the Gosellify Portal, connected through the marketplace's official API. Sales, costs and profit are tracked per order.",
  },
  {
    title: "You pay from profit",
    content:
      "Managed stores are on a profit share. There is no management fee until the store makes profit, no contract, and you can cancel anytime.",
  },
  {
    title: "You can reach us",
    content:
      "Gosellify LLC, 30 N Gould St Ste R, Sheridan, WY 82801. Phone and WhatsApp +1 307 393 8789. Email info@gosellify.com.",
  },
];

export default function ServiceBenefits() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <div className="container-main">
        <div style={{ maxWidth: 760, marginBottom: 24 }}>
          <span className="g-eyebrow">Working with us</span>
          <h2 className="g-h2" style={{ marginTop: 8 }}>What to expect from Gosellify</h2>
        </div>
        <dl style={{ maxWidth: 980 }}>
          {benefitItems.map((item) => (
            <div
              key={item.title}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
                gap: "4px 40px",
                padding: "16px 0",
                borderTop: "1px solid var(--color-line)",
              }}
            >
              <dt style={{ fontWeight: 700, color: "var(--color-dark)" }}>{item.title}</dt>
              <dd style={{ color: "var(--color-text-light)" }}>{item.content}</dd>
            </div>
          ))}
        </dl>
        <hr className="rule" style={{ maxWidth: 980 }} />
      </div>
    </section>
  );
}
