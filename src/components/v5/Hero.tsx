import Link from "next/link";

const css = `
.v5hero { padding: clamp(40px, 5vw, 72px) 0 clamp(48px, 6vw, 80px); }
.v5hero-grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
@media (min-width: 1000px) { .v5hero-grid { grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); gap: 56px; } }
.v5hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 20px; margin-top: 28px; }
.v5hero-note { margin-top: 18px; padding-left: 12px; border-left: 3px solid var(--color-accent); font-size: 15px; line-height: 1.5; color: var(--color-dark); }
`;

export default function Hero() {
  return (
    <section className="v5hero" style={{ background: "#fff" }}>
      <style>{css}</style>
      <div className="container-main v5hero-grid">
        <div>
          <p className="g-eyebrow">Ecommerce management service</p>
          <h1 className="g-h1" style={{ marginTop: 12 }}>
            Amazon and Walmart store management, run by a team you can check on
          </h1>
          <p className="g-lead" style={{ marginTop: 18 }}>
            We do the daily work of your store: product research, listings, pricing, orders, returns, customer messages and account health. You get a login to the same portal our team works in, so you can see every order and what it earned. We are paid a share of the profit after each month is closed.
          </p>
          <div className="v5hero-actions">
            <Link href="/profit-check" className="btn-primary">
              Get a plan for my store
            </Link>
            <a href="tel:+13073938789" className="v5-link">
              or call +1 307 393 8789
            </a>
          </div>
          <p className="v5hero-note">No management fee until your store makes profit. No contract.</p>
        </div>

        <figure className="v5-frame">
          <img
            src="/images/portal/store-overview.jpg"
            width={1228}
            height={690}
            loading="eager"
            alt="Store overview page in the Gosellify Portal for a Walmart store, last 30 days: sales $44,247.83, 1,663 orders, 1,963 units sold, average order value $26.61, and a daily sales chart."
          />
          <figcaption>Our own Walmart store in the Gosellify Portal, last 30 days. Screenshot taken November 23, 2026.</figcaption>
        </figure>
      </div>
    </section>
  );
}
