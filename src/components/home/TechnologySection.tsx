const features: { title: string; desc: string }[] = [
  {
    title: "Connected through the marketplace's official API",
    desc: "Orders, items, inventory, prices, returns and payments sync from each store's own connection.",
  },
  {
    title: "Separate, encrypted connections",
    desc: "Every store has its own encrypted credentials. One store's data is not mixed with another's.",
  },
  {
    title: "Role-based access",
    desc: "Team members see only the stores and tasks assigned to them, and changes are recorded in an audit history.",
  },
  {
    title: "Profit and loss per order",
    desc: "Product cost, marketplace fees, shipping and prep are tracked per order, with a monthly statement for every store.",
  },
  {
    title: "Client dashboard",
    desc: "You see your own stores' performance, monthly statements and invoices in a private login.",
  },
  {
    title: "Account health checks",
    desc: "Performance metrics, listing issues and policy alerts are reviewed daily.",
  },
];

export default function TechnologySection() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <div className="container-main">
        <div style={{ maxWidth: 760, marginBottom: 24 }}>
          <span className="g-eyebrow">Our own software</span>
          <h2 className="g-h2" style={{ marginTop: 8 }}>Every store runs on the Gosellify Portal</h2>
          <p className="g-lead" style={{ marginTop: 12 }}>
            We built the Portal for our own stores first. It connects each store through the marketplace&apos;s
            official API, so our team and the store owner look at the same figures.
          </p>
        </div>
        <dl style={{ maxWidth: 980 }}>
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
                gap: "4px 40px",
                padding: "14px 0",
                borderTop: "1px solid var(--color-line)",
              }}
            >
              <dt style={{ fontWeight: 700, color: "var(--color-dark)" }}>{feature.title}</dt>
              <dd style={{ color: "var(--color-text-light)" }}>{feature.desc}</dd>
            </div>
          ))}
        </dl>
        <hr className="rule" style={{ maxWidth: 980 }} />
      </div>
    </section>
  );
}
