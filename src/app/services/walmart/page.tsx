import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import { ServiceHero, ServiceSection, RelatedLinks } from "@/components/services/ServiceBlocks";
import type { RelatedLink } from "@/components/services/ServiceBlocks";

const services: RelatedLink[] = [
  {
    href: "/services/walmart-management",
    label: "Walmart account management",
    desc: "Complete store management on Walmart Marketplace: product research, listings, pricing, order fulfillment, returns and account health, tracked in the Gosellify Portal.",
  },
  {
    href: "/services/walmart-wfs",
    label: "Walmart WFS",
    desc: "Walmart Fulfillment Services. We prep your products, plan inventory shipments and manage listings for Walmart's fulfillment network.",
  },
  {
    href: "/services/walmart-wholesale",
    label: "Walmart wholesale",
    desc: "Source branded products from authorized distributors and sell them on Walmart Marketplace. We handle supplier contact, pricing and daily account management.",
  },
];

const faqs = [
  {
    question: "How is Walmart Marketplace different from Amazon?",
    answer: "Walmart has its own application process, listing rules, fee schedule and seller performance standards. Check Walmart's current fee schedule and seller requirements on its official Marketplace pages before you decide, because they change.",
  },
  {
    question: "What are the requirements to sell on Walmart?",
    answer: "Walmart reviews every seller application and sets its own requirements, which change over time. Read the current list on Walmart's official Marketplace site. We help you prepare the application, but the decision is Walmart's.",
  },
  {
    question: "How long does it take to get approved on Walmart?",
    answer: "Review time is decided by Walmart and we cannot promise a date. Once the account is approved, we set up the store and start listing.",
  },
  {
    question: "What is Walmart Fulfillment Services (WFS)?",
    answer: "WFS is Walmart's own fulfillment program. You send inventory to Walmart's fulfillment centers and Walmart stores, packs and ships the orders. We handle the prep and the shipping plans.",
  },
  {
    question: "Can I sell on both Amazon and Walmart?",
    answer: "Yes. We manage each store separately. Selling on two marketplaces means your income does not depend on one account.",
  },
  {
    question: "What if my Walmart seller application gets rejected?",
    answer: "We look at the reason Walmart gives, help you correct what can be corrected, and help you apply again if Walmart allows it. We cannot guarantee approval.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "You need $3,000 to $5,000 working capital depending on the business model.",
  },
];

export default function WalmartPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Walmart Marketplace"
        title="Walmart account management services for sellers"
        lead="We manage Walmart Marketplace stores for sellers: full store management, WFS and wholesale. This page explains the three models so you can see which one fits your store."
        secondaryHref="/pricing"
        note="We are an independent agency. We are not part of Walmart and we cannot promise that Walmart will approve a seller application."
      />

      <ServiceSection eyebrow="About the marketplace" title="Selling on Walmart Marketplace" tint>
        <div style={{ maxWidth: 760, display: "grid", gap: 14, color: "var(--color-text-light)" }}>
          <p>
            Walmart Marketplace lets approved third-party sellers list products on Walmart.com. Walmart reviews each
            application, and it expects sellers to meet its standards for shipping, tracking and customer service.
          </p>
          <p>
            For many sellers it is a second channel next to Amazon. The listing format, the search ranking and the
            seller metrics are different, so a Walmart store needs its own setup and its own daily routine.
          </p>
          <p>
            Gosellify helps you prepare the application, set up the store, find products and run daily operations.
            We also run our own Walmart store, so the work is familiar to our team.
          </p>
        </div>
      </ServiceSection>

      <RelatedLinks title="Our Walmart services" links={services} />

      <ServiceFeaturesGrid />

      <ServiceBenefits />

      <ServiceFAQ faqs={faqs} title="Questions about selling on Walmart" tint />

      <CTASection />
    </>
  );
}
