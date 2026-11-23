import Link from "next/link";

type Row = { name: string; handle: string; models: string; href: string };

const rows: Row[] = [
  { name: "Amazon", handle: "Product research, listings, pricing, orders, returns, customer messages, account health", models: "FBA, wholesale, 2-step dropshipping", href: "/services/amazon" },
  { name: "Walmart", handle: "Listings, pricing, order processing, returns, customer messages, daily account health checks", models: "WFS, wholesale, 2-step dropshipping", href: "/services/walmart-management" },
  { name: "Temu", handle: "Store setup, listings and orders for sellers who ship from stock held in the US", models: "US stock", href: "/services/temu" },
  { name: "eBay", handle: "Listings, orders, returns and buyer messages", models: "Dropshipping", href: "/services/ebay-dropshipping" },
  { name: "Etsy", handle: "Listings, orders and buyer messages", models: "Dropshipping", href: "/services/etsy-dropshipping" },
  { name: "Shopify", handle: "Store build or redesign, themes, apps and marketing for your own website", models: "Your own store", href: "/services/shopify" },
];

const css = `
.v5tbl-wrap { overflow-x: auto; border: 1px solid var(--color-line); border-radius: 8px; }
.v5tbl { width: 100%; min-width: 680px; border-collapse: collapse; font-size: 16px; line-height: 1.5; }
.v5tbl th, .v5tbl td { text-align: left; vertical-align: top; padding: 14px 18px; border-bottom: 1px solid var(--color-line); }
.v5tbl thead th { font-size: 13px; font-weight: 700; letter-spacing: 0.4px; text-transform: uppercase; color: var(--color-text-light); background: var(--color-light-gray); padding-top: 11px; padding-bottom: 11px; }
.v5tbl tbody tr:last-child th, .v5tbl tbody tr:last-child td { border-bottom: 0; }
.v5tbl tbody th { font-weight: 700; color: var(--color-dark); white-space: nowrap; }
.v5tbl td { color: var(--color-text-light); }
.v5tbl td:last-child { white-space: nowrap; text-align: right; }
`;

export default function Manage() {
  return (
    <section className="g-section v5-top-rule" style={{ background: "#fff" }}>
      <style>{css}</style>
      <div className="container-main">
        <div className="v5-head">
          <h2 className="g-h2">What we manage</h2>
          <p className="g-lead">
            Most owners come to us for Walmart marketplace management services or Amazon store management services. The same ecommerce management service covers four more places to sell.
          </p>
        </div>

        <div className="v5tbl-wrap" tabIndex={0} role="region" aria-label="Marketplaces we manage">
          <table className="v5tbl">
            <thead>
              <tr>
                <th scope="col">Marketplace</th>
                <th scope="col">What we handle</th>
                <th scope="col">Models</th>
                <th scope="col" style={{ position: "relative" }}>
                  <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Link</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name}>
                  <th scope="row">{r.name}</th>
                  <td>{r.handle}</td>
                  <td>{r.models}</td>
                  <td>
                    <Link href={r.href} className="v5-link" aria-label={`${r.name} details`}>
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="v5-p" style={{ marginTop: 20, maxWidth: 820 }}>
          We also run a{" "}
          <Link href="/services/3pl-warehouse" className="v5-link">3PL warehouse service</Link>, help with{" "}
          <Link href="/services/seller-account-setup" className="v5-link">seller account setup</Link>,{" "}
          <Link href="/services/company-filing" className="v5-link">company filing</Link> and{" "}
          <Link href="/services/tax-filing" className="v5-link">tax filing</Link>.
        </p>
      </div>
    </section>
  );
}
