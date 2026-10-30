import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Gosellify",
  description: "How Gosellify collects, uses and protects seller, customer and website information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">Legal</span>
            <h1 className="typo-h1">Privacy Policy</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
        <div className="container-main" style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p className="typo-body" style={{ marginBottom: "24px", color: "#777" }}>
            Effective date: October 31, 2026
          </p>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"Who we are"}</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            {"Gosellify LLC (\"Gosellify\", \"we\", \"us\") provides ecommerce management services for sellers on marketplaces such as Walmart Marketplace and Amazon, and operates the Gosellify Portal, our private operations platform used by our team and our clients. This policy explains what information we collect, how we use and protect it, and the choices you have."}
          </p>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"Information we collect"}</h2>
          <ul className="typo-body" style={{ margin: "0 0 24px", paddingLeft: "20px", listStyle: "disc" }}>
            <li style={{ marginBottom: "6px" }}>{"Contact and business details you give us, such as your name, email address, phone number, company name and billing details."}</li>
            <li style={{ marginBottom: "6px" }}>{"Information you share through our website forms, WhatsApp, email or calls."}</li>
            <li style={{ marginBottom: "6px" }}>{"Basic website usage data, such as pages visited and device or browser type, used to keep the website working and improve it."}</li>
          </ul>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"Marketplace data accessed on behalf of sellers"}</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            {"When a seller authorizes Gosellify to manage their store, we access that store's data through the marketplace's official APIs. This can include listings and items, inventory, prices, orders, returns, payments and settlement reports, performance metrics and account notifications. We access this data only with the seller's authorization and only to provide the services that seller asked us for."}
          </p>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"How we use marketplace and customer data"}</h2>
          <ul className="typo-body" style={{ margin: "0 0 24px", paddingLeft: "20px", listStyle: "disc" }}>
            <li style={{ marginBottom: "6px" }}>{"To manage the seller's store: listings, pricing, inventory, order processing, fulfillment, returns and customer service."}</li>
            <li style={{ marginBottom: "6px" }}>{"To prepare reports, profit and loss statements and invoices for that seller."}</li>
            <li style={{ marginBottom: "6px" }}>{"Customer (buyer) information such as names and shipping addresses is used only to fulfill, ship and support that customer's order. We do not use buyer information for marketing, we do not contact buyers outside the marketplace's messaging rules, and we never sell or rent it."}</li>
            <li style={{ marginBottom: "6px" }}>{"Each seller's data is kept separate and is never shared with or used for any other seller."}</li>
          </ul>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"How we protect information"}</h2>
          <ul className="typo-body" style={{ margin: "0 0 24px", paddingLeft: "20px", listStyle: "disc" }}>
            <li style={{ marginBottom: "6px" }}>{"Marketplace credentials and access tokens are stored encrypted and are only used by our servers; they are never shown in the browser or written to logs."}</li>
            <li style={{ marginBottom: "6px" }}>{"Access is role-based: team members can only see the stores and tasks assigned to them, and clients can only see their own stores."}</li>
            <li style={{ marginBottom: "6px" }}>{"Important actions are recorded in an audit history."}</li>
            <li style={{ marginBottom: "6px" }}>{"Data is transmitted over encrypted connections (HTTPS) and hosted with reputable infrastructure providers."}</li>
          </ul>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"Sharing"}</h2>
          <ul className="typo-body" style={{ margin: "0 0 24px", paddingLeft: "20px", listStyle: "disc" }}>
            <li style={{ marginBottom: "6px" }}>{"We do not sell personal information."}</li>
            <li style={{ marginBottom: "6px" }}>{"We share information only with service providers that help us run our services (for example hosting, email and shipping carriers), only as needed and under appropriate confidentiality obligations."}</li>
            <li style={{ marginBottom: "6px" }}>{"We may disclose information if required by law or to protect our rights, our clients or the public."}</li>
          </ul>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"Retention and deletion"}</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            {"We keep information only as long as needed to provide our services, meet legal and accounting obligations, and resolve disputes. When a seller ends their relationship with us, we disconnect their store and stop accessing their marketplace data; the seller can also revoke our access at any time from their marketplace account. Customer information is kept only as long as needed to complete and support orders and for required records. You can ask us to delete your personal information by contacting us."}
          </p>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"Your choices"}</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            {"You can request access to, correction of, or deletion of your personal information, and you can opt out of marketing messages at any time. Sellers can revoke Gosellify's marketplace access at any time."}
          </p>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"Changes to this policy"}</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            {"We may update this policy from time to time. The latest version will always be posted on this page with its effective date."}
          </p>
          <h2 className="typo-h3" style={{ marginBottom: "10px" }}>{"Contact us"}</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            {"Questions about this policy or your data: info@gosellify.com or +1 307 393 8789 (call or WhatsApp)."}
          </p>
        </div>
      </section>
    </>
  );
}
