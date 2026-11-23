const features: { title: string; description: string }[] = [
  { title: "Product research", description: "We look for products with steady demand and check cost, fees and restrictions before anything is listed." },
  { title: "Listings", description: "Titles, descriptions, attributes and images are written and kept up to date by our team." },
  { title: "Pricing", description: "Prices are reviewed against cost, fees and competing offers so a sale is not made at a loss." },
  { title: "Order fulfillment", description: "Orders are processed daily. Stock that passes through our US warehouses gets same-day prep and shipping." },
  { title: "Returns", description: "Returned items are received, checked and restocked or written off, and the result is recorded against the order." },
  { title: "Customer messages", description: "Buyer questions and complaints are answered by our support team in your store's name." },
  { title: "Account health", description: "We review performance metrics, listing issues and policy notices daily and act on them." },
  { title: "Profit and loss per order", description: "Product cost, marketplace fees, shipping and prep are recorded per order, with refunds included." },
  { title: "A named manager", description: "One person on our team is your contact. They answer your questions and report on the store." },
];

/* What store management includes. A plain list, no icons. */
export default function ServiceFeaturesGrid() {
  return (
    <section className="g-section bg-tint">
      <div className="container-main">
        <div style={{ maxWidth: 760, marginBottom: 24 }}>
          <span className="g-eyebrow">Included</span>
          <h2 className="g-h2" style={{ marginTop: 8 }}>What store management includes</h2>
          <p className="g-lead" style={{ marginTop: 12 }}>
            The same daily work applies to every store we manage, whichever marketplace it is on.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "0 40px" }}>
          {features.map((feature) => (
            <div key={feature.title} style={{ padding: "14px 0", borderTop: "1px solid var(--color-line)" }}>
              <h3 className="g-h3">{feature.title}</h3>
              <p style={{ marginTop: 4, fontSize: 16, color: "var(--color-text-light)" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
