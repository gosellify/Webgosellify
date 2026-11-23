import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Client Success Stories & Store Case Studies",
  description:
    "A real screenshot from our own Walmart store in the Gosellify Portal, and figures from three client stores we manage. Results differ from store to store.",
  alternates: { canonical: "/success-story" },
};

type Story = {
  store: string;
  sales: string;
  roi: string;
  lastMonth: string;
  defectRate: string;
  health: string;
};

const clientStories: Story[] = [
  {
    store: "Thompson's store",
    sales: "$691,224 sales in 11 months",
    roi: "35% ROI",
    lastMonth: "Over $95,000 in last month sales",
    defectRate: "0.02% order defect rate",
    health: "Zero account health issues",
  },
  {
    store: "Celena's store",
    sales: "$153,438 sales in 4 months",
    roi: "35% ROI",
    lastMonth: "Over $58,200 in last month sales",
    defectRate: "0.02% order defect rate",
    health: "Zero account health issues",
  },
  {
    store: "Joseph's store",
    sales: "$8,780 sales in 2 days",
    roi: "25% ROI",
    lastMonth: "Over $50,000 in last month sales",
    defectRate: "0.02% order defect rate",
    health: "Zero account health issues",
  },
];

const th = {
  padding: "12px 16px",
  fontWeight: 700,
  color: "var(--color-dark)",
  borderBottom: "1px solid var(--color-line)",
} as const;

export default function SuccessStoryPage() {
  return (
    <>
      {/* Intro and real screenshot */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <span className="g-eyebrow" style={{ marginBottom: "10px" }}>Results</span>
          <h1 className="g-h1" style={{ maxWidth: "820px", marginBottom: "16px" }}>
            Client success stories and store case studies
          </h1>
          <p className="g-lead" style={{ maxWidth: "720px", marginBottom: "32px" }}>
            We start with a real screenshot from our own store. Below it are figures from three
            client stores we manage.
          </p>

          <figure style={{ margin: 0, maxWidth: "1000px" }}>
            <div style={{ border: "1px solid var(--color-line)", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
              <img
                src="/images/portal/store-overview.jpg"
                alt="Store overview in the Gosellify Portal for the last 30 days: sales $44,247.83, 1,663 orders, 1,963 units, average order $26.61, with a daily sales chart"
                width={1228}
                height={690}
                loading="eager"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
            <figcaption className="typo-small" style={{ marginTop: "8px" }}>
              Our own Walmart store in the Gosellify Portal, last 30 days. Screenshot taken November 23, 2026.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Client stores */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <h2 className="g-h2" style={{ marginBottom: "10px" }}>
            Three client stores
          </h2>
          <p className="typo-body" style={{ maxWidth: "720px", marginBottom: "24px" }}>
            Results differ from store to store. Past results do not promise future results.
          </p>

          <div style={{ overflowX: "auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: "10px" }}>
            <table style={{ width: "100%", minWidth: "820px", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr className="typo-small">
                  <th scope="col" style={th}>Store</th>
                  <th scope="col" style={th}>Sales</th>
                  <th scope="col" style={th}>ROI</th>
                  <th scope="col" style={th}>Last month</th>
                  <th scope="col" style={th}>Order defect rate</th>
                  <th scope="col" style={th}>Account health</th>
                </tr>
              </thead>
              <tbody>
                {clientStories.map((story, i) => {
                  const td = {
                    padding: "14px 16px",
                    verticalAlign: "top",
                    fontSize: "15px",
                    borderBottom: i === clientStories.length - 1 ? "none" : "1px solid var(--color-line)",
                  } as const;
                  return (
                    <tr key={story.store}>
                      <th scope="row" style={{ ...td, fontWeight: 700, whiteSpace: "nowrap" }}>{story.store}</th>
                      <td style={td}>{story.sales}</td>
                      <td style={td}>{story.roi}</td>
                      <td style={td}>{story.lastMonth}</td>
                      <td style={td}>{story.defectRate}</td>
                      <td style={td}>{story.health}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="typo-body" style={{ maxWidth: "720px", marginTop: "24px" }}>
            Want to know what is realistic for your store?{" "}
            <Link href="/profit-check" className="link-underline" style={{ color: "var(--color-primary)", fontWeight: 700 }}>
              Start the Profit Check
            </Link>{" "}
            and we will tell you plainly.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
