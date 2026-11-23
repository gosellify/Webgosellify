import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Pricing: Profit Share Store Management",
  description:
    "Gosellify works on a profit share model. You pay from profit, with no management fee before the store makes profit. See what each service covers.",
  alternates: { canonical: "/pricing" },
};

type Row = { title: string; description: string; href: string; price?: string };

const payFromProfit: { q: string; a: string }[] = [
  {
    q: "What you pay us",
    a: "A share of the profit your store makes. We agree the share with you before we start. We do not publish one number here because it depends on the store and the business model.",
  },
  {
    q: "When you pay",
    a: "Only after the store makes profit. There is no management fee before that.",
  },
  {
    q: "How profit is counted",
    a: "Sales, minus marketplace fees, minus product, prep and shipping costs. Every order is recorded in the Gosellify Portal, and you can see the same numbers we see.",
  },
  {
    q: "What you pay for yourself",
    a: "The products your store sells. You need $3,000 to $5,000 working capital depending on the business model, because the marketplace pays you some time after the customer orders.",
  },
  {
    q: "Contract",
    a: "There is no contract. You can cancel anytime.",
  },
];

const managementServices: Row[] = [
  {
    title: "Walmart management",
    description: "Listings, pricing, order fulfillment and daily operations for your Walmart store.",
    href: "/services/walmart-management",
  },
  {
    title: "Walmart WFS",
    description: "Product prep, shipments to Walmart Fulfillment Services and inventory planning.",
    href: "/services/walmart-wfs",
  },
  {
    title: "Amazon 2-step dropshipping",
    description: "No upfront inventory. We buy a product only after a customer orders it, then prep and ship it from our warehouse.",
    href: "/services/amazon-arbitrage",
  },
  {
    title: "Amazon wholesale",
    description: "Branded products bought from authorized distributors, with purchase invoices kept for every order.",
    href: "/services/amazon-wholesale",
  },
  {
    title: "Amazon FBA",
    description: "Product research, listings, advertising and inventory planning for FBA stores.",
    href: "/services/amazon-fba",
  },
  {
    title: "eBay dropshipping",
    description: "Listings, repricing, orders and account health for your eBay store.",
    href: "/services/ebay-dropshipping",
  },
];

const otherServices: Row[] = [
  {
    title: "3PL warehouse service",
    price: "Per service",
    description: "FBA prep, WFS prep, storage, 2-step dropshipping and direct-to-customer shipping from our own US warehouses. Same-day order processing.",
    href: "/services/3pl-warehouse",
  },
  {
    title: "Company filing LLC & LTD",
    price: "$100 + state fee",
    description: "US LLC formation, EIN ($50), ITIN ($250) and registered agent.",
    href: "/services/company-filing",
  },
  {
    title: "Tax filing",
    price: "From $100",
    description: "Federal and state returns, sales tax and bookkeeping.",
    href: "/services/tax-filing",
  },
  {
    title: "Account reinstatement",
    price: "Case-based",
    description: "Help with appeals for suspended Amazon and Walmart seller accounts. The marketplace makes the final decision.",
    href: "/services/amazon-reinstatement",
  },
  {
    title: "Shopify services",
    price: "Project-based",
    description: "Store setup, redesign, theme development, app development and marketing.",
    href: "/services/shopify",
  },
  {
    title: "Etsy dropshipping",
    price: "Contact us",
    description: "Etsy store management: listings, print-on-demand and fulfillment.",
    href: "/services/etsy-dropshipping",
  },
  {
    title: "Walmart wholesale and dropshipping",
    price: "Contact us",
    description: "Walmart wholesale sourcing and 2-step dropshipping management.",
    href: "/services/walmart-wholesale",
  },
];

const linkStyle = { color: "var(--color-primary)", fontWeight: 700 } as const;

export default function PricingPage() {
  return (
    <>
      {/* Intro */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <span className="g-eyebrow" style={{ marginBottom: "10px" }}>Pricing</span>
          <h1 className="g-h1" style={{ maxWidth: "820px", marginBottom: "16px" }}>
            Pricing: profit share store management
          </h1>
          <p className="g-lead" style={{ maxWidth: "720px", marginBottom: "14px" }}>
            Our store management is paid from profit. You pay no management fee until your store
            makes profit. After that we take a share of the profit. There is no contract and you
            can cancel anytime.
          </p>
          <p className="typo-body" style={{ maxWidth: "720px", marginBottom: "24px" }}>
            We cannot promise sales or profit. Every store and every product is different. What we
            do commit to is showing you every order and every cost in your dashboard.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px" }}>
            <Link href="/profit-check" className="btn-accent">
              Start the Profit Check
            </Link>
            <a
              href="https://wa.me/13073938789"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
              style={linkStyle}
            >
              Ask about pricing on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Pay from profit explained */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <h2 className="g-h2" style={{ marginBottom: "20px" }}>
            How pay from profit works
          </h2>
          <dl style={{ maxWidth: "860px", borderTop: "1px solid var(--color-line)" }}>
            {payFromProfit.map((item) => (
              <div
                key={item.q}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px 24px",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--color-line)",
                }}
              >
                <dt style={{ flex: "0 0 220px", fontWeight: 700, color: "var(--color-dark)" }}>{item.q}</dt>
                <dd className="typo-body" style={{ flex: "1 1 320px", minWidth: 0 }}>{item.a}</dd>
              </div>
            ))}
          </dl>

          <figure style={{ margin: "36px 0 0", maxWidth: "980px" }}>
            <div style={{ border: "1px solid var(--color-line)", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
              <img
                src="/images/portal/store-profit.jpg"
                alt="Profit and loss view in the Gosellify Portal showing sales, Walmart fees, product, labels and prep costs, and profit for November 2026 so far"
                width={1228}
                height={372}
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
            <figcaption className="typo-small" style={{ marginTop: "8px" }}>
              This is how profit is counted. November profit and loss so far for our own Walmart
              store in the Gosellify Portal. Screenshot taken November 23, 2026.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Management services */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <h2 className="g-h2" style={{ marginBottom: "10px" }}>
            Store management services paid from profit
          </h2>
          <p className="g-lead" style={{ maxWidth: "720px", marginBottom: "24px" }}>
            These services use the profit share model described above.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
              gap: "0 40px",
              borderTop: "1px solid var(--color-line)",
            }}
          >
            {managementServices.map((service) => (
              <div key={service.title} style={{ padding: "18px 0", borderBottom: "1px solid var(--color-line)" }}>
                <h3 className="g-h3" style={{ marginBottom: "4px" }}>
                  <Link href={service.href} style={{ color: "inherit", textDecoration: "none" }}>
                    {service.title}
                  </Link>
                </h3>
                <p className="typo-body" style={{ marginBottom: "6px" }}>{service.description}</p>
                <Link href={service.href} className="link-underline" style={{ ...linkStyle, fontSize: "15px" }}>
                  Read about {service.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <h2 className="g-h2" style={{ marginBottom: "10px" }}>
            Other services and prices
          </h2>
          <p className="g-lead" style={{ maxWidth: "720px", marginBottom: "24px" }}>
            These are separate services with their own prices. Government and state fees are extra.
          </p>
          <div style={{ overflowX: "auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: "10px" }}>
            <table style={{ width: "100%", minWidth: "640px", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr>
                  <th scope="col" className="typo-small" style={{ padding: "12px 16px", fontWeight: 700, color: "var(--color-dark)", borderBottom: "1px solid var(--color-line)" }}>Service</th>
                  <th scope="col" className="typo-small" style={{ padding: "12px 16px", fontWeight: 700, color: "var(--color-dark)", borderBottom: "1px solid var(--color-line)" }}>Price</th>
                  <th scope="col" className="typo-small" style={{ padding: "12px 16px", fontWeight: 700, color: "var(--color-dark)", borderBottom: "1px solid var(--color-line)" }}>What it covers</th>
                </tr>
              </thead>
              <tbody>
                {otherServices.map((service, i) => {
                  const border = i === otherServices.length - 1 ? "none" : "1px solid var(--color-line)";
                  return (
                    <tr key={service.title}>
                      <td style={{ padding: "14px 16px", borderBottom: border, verticalAlign: "top", width: "26%" }}>
                        <Link href={service.href} className="link-underline" style={linkStyle}>
                          {service.title}
                        </Link>
                      </td>
                      <td style={{ padding: "14px 16px", borderBottom: border, verticalAlign: "top", whiteSpace: "nowrap", fontWeight: 600 }}>
                        {service.price}
                      </td>
                      <td className="typo-small" style={{ padding: "14px 16px", borderBottom: border, verticalAlign: "top", fontSize: "15px" }}>
                        {service.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
