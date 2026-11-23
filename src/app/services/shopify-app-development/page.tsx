import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import { ServiceHero, ServiceSection, FeatureList, PlainTable, RelatedLinks } from "@/components/services/ServiceBlocks";
import type { Cell, TitledItem } from "@/components/services/ServiceBlocks";

const appTypes: TitledItem[] = [
  { title: "Private apps", desc: "Custom apps built for one store and its business logic: inventory handling, custom pricing rules, order routing or internal workflows." },
  { title: "Public apps", desc: "Apps for the Shopify App Store. We handle architecture, development and the submission. Shopify reviews every app and decides on approval." },
  { title: "Checkout extensions", desc: "Checkout UI extensions such as custom fields, post-purchase offers, payment customizations and delivery date pickers." },
  { title: "API integrations", desc: "Connections between Shopify and ERPs, CRMs, shipping carriers, accounting software or your own backend, using the REST and GraphQL APIs." },
];

const comparison: Cell[][] = [
  ["Experience with the Shopify APIs", "Our regular work", "Varies by developer"],
  ["Checkout extensions", "Yes", "Varies by developer"],
  ["From design to deployment", "Included", "Varies by developer"],
  ["App Store submission support", "Included", "Varies by developer"],
  ["Security practices (OAuth, HMAC verification)", "Included", "Varies by developer"],
  ["Monitoring after launch", "Offered", "Varies by developer"],
  ["Timeline and price", "Written before we start", "Ask each developer"],
  ["WhatsApp support", "Yes", "Varies by developer"],
];

const faqs = [
  {
    question: "What types of Shopify apps can you build?",
    answer: "Private custom apps, public apps for the App Store, embedded admin apps, checkout extensions, theme app extensions and headless storefronts using the Storefront API.",
  },
  {
    question: "What technologies do you use for Shopify app development?",
    answer: "Node.js with Remix or Express, React for the frontend, Prisma for the database and Shopify's API libraries. We work with the Admin API in REST and GraphQL and with the Storefront API.",
  },
  {
    question: "How long does it take to develop a custom Shopify app?",
    answer: "It depends on the features and the number of integrations. A small app can take a few weeks and a large one several months. We give you an estimate after we understand your requirements.",
  },
  {
    question: "Can you integrate Shopify with my existing systems?",
    answer: "Yes. We build integrations with ERPs such as NetSuite and SAP, CRMs such as Salesforce and HubSpot, shipping carriers, accounting software such as QuickBooks and internal tools, using APIs and webhooks.",
  },
  {
    question: "Do you help with Shopify App Store submission?",
    answer: "Yes. We prepare the app for Shopify's review requirements, write the listing content, prepare screenshots and a demo store, and answer reviewer feedback. Approval is decided by Shopify.",
  },
  {
    question: "How do you handle app security and data privacy?",
    answer: "We implement OAuth authentication, HMAC verification, encrypted data storage and rate limiting, and follow Shopify's security guidance. We build the data handling with GDPR and CCPA requirements in mind.",
  },
  {
    question: "Can you maintain and update the app after launch?",
    answer: "Yes. Maintenance can include updates for new Shopify API versions, bug fixes, performance work, new features and monitoring.",
  },
  {
    question: "What does custom Shopify app development cost?",
    answer: "Simple apps start around $2,000 to $5,000, medium-complexity apps range from $5,000 to $15,000, and larger solutions can cost more than $15,000. You get a detailed quote once we understand the scope.",
  },
];

export default function ShopifyAppDevelopmentPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Shopify app development"
        title="Custom Shopify app development service"
        lead="Custom Shopify app development for needs that off-the-shelf apps do not cover: private and public apps, API integrations and checkout extensions."
        points={["Private and public apps", "Checkout extensions", "API integrations", "Written quote before we start"]}
        primaryLabel="Discuss your app idea"
        primaryHref="/contact"
        note="We are an independent agency and not part of Shopify."
      />

      <ServiceSection eyebrow="What we build" title="Types of apps we build" tint>
        <FeatureList items={appTypes} />
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify and a general developer" lead="A plain list. Ask any developer you consider the same questions.">
        <PlainTable columns={["What you need", "Gosellify", "General developers"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Shopify app development" tint />

      <RelatedLinks
        links={[
          { href: "/services/shopify-theme-development", label: "Custom Shopify theme development" },
          { href: "/services/shopify-development", label: "Shopify store development" },
          { href: "/services/shopify", label: "All Shopify services" },
        ]}
      />

      <CTASection />
    </>
  );
}
