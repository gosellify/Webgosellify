/* The real Gosellify Portal screenshot. No counters, no invented figures. */
export default function ServiceConfidence() {
  return (
    <section className="g-section bg-tint">
      <div className="container-main">
        <div style={{ maxWidth: 760, marginBottom: 24 }}>
          <span className="g-eyebrow">What you will see</span>
          <h2 className="g-h2" style={{ marginTop: 8 }}>Every managed store gets this dashboard</h2>
          <p className="g-lead" style={{ marginTop: 12 }}>
            Every store we manage runs on the Gosellify Portal, connected through the marketplace&apos;s official API.
            You log in and see the same sales, orders and profit figures our team works from.
          </p>
        </div>
        <figure style={{ maxWidth: 980 }}>
          <div style={{ border: "1px solid var(--color-line)", borderRadius: 8, overflow: "hidden", background: "#fff" }}>
            <img
              src="/images/portal/store-overview.jpg"
              alt="Gosellify Portal store overview showing sales, orders, units, average order value and a daily sales chart for the last 30 days"
              width={1228}
              height={690}
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
          <figcaption className="typo-small" style={{ marginTop: 10 }}>
            The Gosellify Portal, from our own Walmart store, last 30 days. Screenshot taken November 23, 2026.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
