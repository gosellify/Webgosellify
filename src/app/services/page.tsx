import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";
import { LinkCards, ServiceHero, ServiceSection } from "@/components/services/ServiceBlocks";

export const metadata: Metadata = {
  title: "Ecommerce Management Services for Online Sellers",
  description:
    "All Gosellify services in one place: Amazon and Walmart store management, Shopify development, 3PL warehousing and other ecommerce management services.",
  alternates: { canonical: "/services" },
};

type Service = { title: string; description: string; href: string };
type Group = { heading: string; intro: string; services: Service[] };

const groups: Group[] = [
  {
    heading: "Walmart Marketplace",
    intro: "Walmart management services for sellers who want the daily work done for them.",
    services: [
      {
        title: "Walmart management",
        description: "Product research, listings, pricing, order fulfillment and daily store operations.",
        href: "/services/walmart-management",
      },
      {
        title: "Walmart WFS",
        description: "Product prep, shipments to Walmart Fulfillment Services and inventory planning.",
        href: "/services/walmart-wfs",
      },
      {
        title: "Walmart wholesale",
        description: "Branded products bought from authorized distributors and sold on your Walmart store.",
        href: "/services/walmart-wholesale",
      },
      {
        title: "All Walmart services",
        description: "An overview of everything we do for Walmart sellers.",
        href: "/services/walmart",
      },
    ],
  },
  {
    heading: "Amazon",
    intro: "Amazon store management for three business models.",
    services: [
      {
        title: "Amazon 2-step dropshipping",
        description: "Also known as Amazon arbitrage. No upfront inventory. We buy a product after a customer orders it, then inspect and ship it from our warehouse.",
        href: "/services/amazon-arbitrage",
      },
      {
        title: "Amazon wholesale",
        description: "Upfront inventory is required. Products are bought from authorized distributors. We handle research, suppliers, inventory and FBA prep.",
        href: "/services/amazon-wholesale",
      },
      {
        title: "Amazon FBA",
        description: "Product research, listings, advertising and inventory planning for FBA stores.",
        href: "/services/amazon-fba",
      },
      {
        title: "All Amazon services",
        description: "An overview of everything we do for Amazon sellers.",
        href: "/services/amazon",
      },
    ],
  },
  {
    heading: "Shopify, eBay, Etsy and Temu",
    intro: "Store building and management on other platforms.",
    services: [
      {
        title: "Shopify development",
        description: "Store setup, design, theme work and app integration.",
        href: "/services/shopify-development",
      },
      {
        title: "Shopify dropshipping",
        description: "Product selection, listings and order handling for a Shopify dropshipping store.",
        href: "/services/shopify-dropshipping",
      },
      {
        title: "eBay dropshipping",
        description: "Listings, repricing, orders and account health for your eBay store.",
        href: "/services/ebay-dropshipping",
      },
      {
        title: "Etsy dropshipping",
        description: "Listings, print-on-demand and fulfillment for your Etsy store.",
        href: "/services/etsy-dropshipping",
      },
      {
        title: "Temu store management",
        description: "Product selection, listings, pricing and order fulfilment on Temu.",
        href: "/services/temu",
      },
    ],
  },
  {
    heading: "Warehouse and business setup",
    intro: "Services that support a store, whether or not we manage it.",
    services: [
      {
        title: "3PL warehouse",
        description: "We run our US warehouses ourselves. FBA prep, WFS prep, storage and 2-step dropshipping support, with same-day prep and shipping.",
        href: "/services/3pl-warehouse",
      },
      {
        title: "Seller account setup",
        description: "Help with applying for your own Amazon, Walmart or Temu seller account.",
        href: "/services/seller-account-setup",
      },
      {
        title: "Company filing",
        description: "US LLC formation, EIN and registered agent.",
        href: "/services/company-filing",
      },
      {
        title: "Tax filing",
        description: "Federal and state returns, sales tax and bookkeeping.",
        href: "/services/tax-filing",
      },
      {
        title: "Account reinstatement",
        description: "Help with appeals for suspended Amazon seller accounts. The marketplace makes the final decision.",
        href: "/services/amazon-reinstatement",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Services"
        title="Ecommerce management services for online sellers"
        lead={
          <>
            This is everything we do, on one page. Store management is paid from profit, with no
            management fee until the store makes profit. See{" "}
            <Link href="/pricing" className="link-underline" style={{ color: "var(--color-primary)" }}>
              pricing
            </Link>{" "}
            for how that works.
          </>
        }
      />

      {groups.map((group, index) => (
        <ServiceSection key={group.heading} title={group.heading} lead={group.intro} tint={index % 2 === 0}>
          <LinkCards
            links={group.services.map((service) => ({ href: service.href, label: service.title, desc: service.description }))}
          />
        </ServiceSection>
      ))}

      <CTASection />
    </>
  );
}
