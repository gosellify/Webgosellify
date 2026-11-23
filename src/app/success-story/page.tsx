import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";
import ScreenShowcase from "@/components/v6/ScreenShowcase";
import { ServiceHero, ServiceSection } from "@/components/services/ServiceBlocks";

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

export default function SuccessStoryPage() {
  return (
    <>
      {/* Intro and real screenshot */}
      <ServiceHero
        eyebrow="Results"
        title="Client success stories and store case studies"
        lead="We start with a real screenshot from our own store. Below it are figures from three client stores we manage."
      >
        <div style={{ marginTop: 24 }}>
          <ScreenShowcase
            variant="overview"
            eager
            caption="Our own Walmart store in the Gosellify Portal, last 30 days. Screenshot taken November 23, 2026."
          />
        </div>
      </ServiceHero>

      {/* Client stores */}
      <ServiceSection
        eyebrow="Client stores"
        title="Three client stores"
        lead="Results differ from store to store. Past results do not promise future results."
        tint
      >
        <div style={{ maxWidth: 1100, overflowX: "auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: 16 }}>
          <table className="sv-table" style={{ minWidth: 820 }}>
            <thead>
              <tr>
                <th scope="col">Store</th>
                <th scope="col">Sales</th>
                <th scope="col">ROI</th>
                <th scope="col">Last month</th>
                <th scope="col">Order defect rate</th>
                <th scope="col">Account health</th>
              </tr>
            </thead>
            <tbody>
              {clientStories.map((story) => (
                <tr key={story.store} className="row-hover">
                  <th scope="row" style={{ background: "transparent", fontSize: 15, padding: "14px 18px", borderTop: "1px solid var(--color-line)", whiteSpace: "nowrap", verticalAlign: "top" }}>{story.store}</th>
                  <td>{story.sales}</td>
                  <td>{story.roi}</td>
                  <td>{story.lastMonth}</td>
                  <td>{story.defectRate}</td>
                  <td>{story.health}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="typo-body" style={{ maxWidth: "720px", marginTop: "28px", textAlign: "center" }}>
          Want to know what is realistic for your store?{" "}
          <Link href="/profit-check" className="link-underline" style={{ color: "var(--color-primary)", fontWeight: 700 }}>
            Start the Profit Check
          </Link>{" "}
          and we will tell you plainly.
        </p>
      </ServiceSection>

      <CTASection />
    </>
  );
}
