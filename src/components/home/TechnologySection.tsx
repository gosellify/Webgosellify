import {
  FaSyncAlt,
  FaLock,
  FaUserShield,
  FaChartLine,
  FaFileInvoiceDollar,
  FaClipboardCheck,
} from "react-icons/fa";

const features = [
  {
    icon: FaSyncAlt,
    title: "Connected to Walmart's Seller API",
    desc: "Orders, items, inventory, prices, returns and payments sync automatically from each store's own connection.",
  },
  {
    icon: FaLock,
    title: "Encrypted, separate connections",
    desc: "Every store has its own encrypted credentials, and one store's data is never mixed with another's.",
  },
  {
    icon: FaUserShield,
    title: "Role-based access",
    desc: "Team members see only the stores and tasks assigned to them, and every change is recorded in an audit history.",
  },
  {
    icon: FaChartLine,
    title: "Order-level profit & loss",
    desc: "Product cost, marketplace fees, shipping and prep tracked per order, with a monthly P&L for every store.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Client dashboards & statements",
    desc: "Clients see their own stores' performance, monthly statements and invoices in a private portal.",
  },
  {
    icon: FaClipboardCheck,
    title: "Account health monitoring",
    desc: "Performance metrics, listing issues and policy alerts reviewed daily to keep every account in good standing.",
  },
];

export default function TechnologySection() {
  return (
    <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
      <div className="container-main">
        <div className="section-header text-center" style={{ maxWidth: "680px", margin: "0 auto 32px" }}>
          <span className="typo-label" style={{ display: "block", marginBottom: "8px" }}>
            Our Technology
          </span>
          <h2 className="typo-h2" style={{ marginBottom: "12px" }}>
            Every Store Runs on the Gosellify Portal
          </h2>
          <p className="typo-body">
            Our own ecommerce operations platform connects each client&apos;s store through the
            marketplace&apos;s official APIs, so our team works from accurate, real-time data and every
            client sees exactly what is happening in their store.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "22px",
                boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)",
              }}
            >
              <feature.icon style={{ fontSize: "26px", color: "var(--color-primary)", marginBottom: "12px" }} />
              <h3 className="typo-h3" style={{ marginBottom: "6px", fontSize: "18px" }}>
                {feature.title}
              </h3>
              <p className="typo-body" style={{ fontSize: "15px" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
