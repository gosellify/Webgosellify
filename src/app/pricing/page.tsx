import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";
import ScreenShowcase from "@/components/v6/ScreenShowcase";
import { FeatureList, LinkCards, ServiceHero, ServiceSection } from "@/components/services/ServiceBlocks";
import type { RelatedLink, TitledItem } from "@/components/services/ServiceBlocks";

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

const payCards: TitledItem[] = payFromProfit.map((item) => ({ title: item.q, desc: item.a }));
const managementLinks: RelatedLink[] = managementServices.map((service) => ({ href: service.href, label: service.title, desc: service.description }));

export default function PricingPage() {
  return (
    <>
      {/* Intro */}
      <ServiceHero
        eyebrow="Pricing"
        title="Pricing: profit share store management"
        lead="Our store management is paid from profit. You pay no management fee until your store makes profit. After that we take a share of the profit. There is no contract and you can cancel anytime."
        primaryLabel="Start the Profit Check"
        secondaryHref="https://wa.me/13073938789"
        secondaryLabel="Ask about pricing on WhatsApp"
        points={["No management fee until profit", "No contract", "Cancel anytime"]}
        note="We cannot promise sales or profit. Every store and every product is different. What we do commit to is showing you every order and every cost in your dashboard."
      />

      {/* Pay from profit explained */}
      <ServiceSection eyebrow="The model" title="How pay from profit works" tint>
        <FeatureList items={payCards} cols={3} />
        <div style={{ marginTop: 40, overflow: "hidden" }}>
          <ScreenShowcase
            variant="profit"
            caption="This is how profit is counted. November profit and loss so far for our own Walmart store in the Gosellify Portal. Screenshot taken November 23, 2026."
          />
        </div>
      </ServiceSection>

      {/* Management services */}
      <ServiceSection
        eyebrow="Paid from profit"
        title="Store management services paid from profit"
        lead="These services use the profit share model described above."
      >
        <LinkCards links={managementLinks} cols={3} />
      </ServiceSection>

      {/* Other services */}
      <ServiceSection
        eyebrow="Fixed prices"
        title="Other services and prices"
        lead="These are separate services with their own prices. Government and state fees are extra."
        tint
      >
        <div style={{ maxWidth: 1040, overflowX: "auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: 16 }}>
          <table className="sv-table" style={{ minWidth: 640 }}>
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Price</th>
                <th scope="col">What it covers</th>
              </tr>
            </thead>
            <tbody>
              {otherServices.map((service) => (
                <tr key={service.title} className="row-hover">
                  <td style={{ width: "26%" }}>
                    <Link href={service.href} className="link-underline" style={linkStyle}>
                      {service.title}
                    </Link>
                  </td>
                  <td style={{ whiteSpace: "nowrap", fontWeight: 700, color: "var(--color-dark)" }}>{service.price}</td>
                  <td>{service.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ServiceSection>

      <CTASection />
    </>
  );
}
