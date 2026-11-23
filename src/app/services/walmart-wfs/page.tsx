import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import {
  ServiceHero,
  ServiceSection,
  TwoColRows,
  StepList,
  FeatureList,
  PlainTable,
  ProfitShareBlock,
  RelatedLinks,
} from "@/components/services/ServiceBlocks";
import type { Cell, TextRow, TitledItem } from "@/components/services/ServiceBlocks";

const problems: TextRow[] = [
  { left: "WFS prep requirements are confusing.", right: "We prep WFS shipments in our US warehouses: labeling, packaging, poly bags and bundles, following Walmart's WFS prep guide for each item." },
  { left: "Inbound shipping is expensive.", right: "We build the shipping plan, choose the carrier and pack cartons or pallets to Walmart's spec, so stock is not sent twice." },
  { left: "Storage fees eat into margin.", right: "We forecast demand, send stock in sensible quantities and flag slow items before they sit too long." },
  { left: "The Pro Seller badge is hard to earn.", right: "Walmart awards the badge by its own criteria. We work on the parts a seller controls: listing quality, response time and order defect rate." },
  { left: "Items keep going out of stock.", right: "We track sales rate and lead time and tell you when to reorder." },
  { left: "WFS returns are hard to follow.", right: "Walmart handles the physical return for WFS orders. We track each return and look for products with a pattern of returns." },
];

const steps: TitledItem[] = [
  { title: "Prep and label", desc: "Each product is prepped to Walmart's WFS standards: barcodes, packaging and labels." },
  { title: "Ship to WFS", desc: "We create the inbound shipping plan and send the stock to the Walmart fulfillment center Walmart assigns." },
  { title: "Walmart fulfills", desc: "Walmart stores, picks, packs and ships the orders. Delivery speed and badges on the listing are set by Walmart." },
  { title: "Replenish and manage", desc: "We reorder, add new items, watch storage costs and keep the listings and account in good order." },
];

const whatYouGet: TitledItem[] = [
  { title: "Product prep", desc: "Labeling, packaging, poly bagging and bundling to Walmart's WFS standards, done in our US warehouses." },
  { title: "Inbound shipping", desc: "Shipping plans created, carrier selected, cartons and pallets built to spec." },
  { title: "Inventory planning", desc: "Demand forecasts, reorder points and seasonal stocking, so you neither run out nor overstock." },
  { title: "Storage cost control", desc: "WFS charges storage fees. We rotate inventory and manage aged stock. Check Walmart's current WFS fee schedule for rates." },
  { title: "Listing optimization", desc: "Titles, attributes and content kept complete and accurate for items fulfilled by WFS." },
  { title: "Customer support", desc: "Walmart ships WFS orders. We handle buyer messages, feedback, returns coordination and escalations." },
  { title: "Account health", desc: "We monitor seller metrics daily and work on issues early." },
  { title: "Catalog growth", desc: "We work out which products suit WFS and add them step by step." },
];

const comparison: Cell[][] = [
  ["WFS product prep", "Included", "You learn and do it", "Varies by agency"],
  ["Inbound shipping plans", "Included", "You do it", "Varies by agency"],
  ["Inventory forecasting and planning", "Included", "You do it", "Varies by agency"],
  ["Storage fee monitoring", "Included", "You monitor", "Varies by agency"],
  ["Work toward Pro Seller criteria", "Included, badge decided by Walmart", "You do it", "Varies by agency"],
  ["Listing optimization for WFS", "Included", "You do it", "Varies by agency"],
  ["Returns and customer service handling", "Included", "You handle", "Varies by agency"],
  ["Fee model", "Profit share, paid from profit", "No fee, your own time", "Ask each agency"],
  ["WhatsApp support", "Yes", "Not applicable", "Varies by agency"],
];

const faqs = [
  {
    question: "What is Walmart Fulfillment Services (WFS)?",
    answer: "WFS is Walmart's own fulfillment program for Marketplace sellers. You send inventory to Walmart's fulfillment centers and Walmart handles storage, picking, packing, shipping and customer returns.",
  },
  {
    question: "How is WFS different from Amazon FBA?",
    answer: "The idea is the same, but the fees, the prep rules and the labeling standards are Walmart's own. Compare the current official fee schedules of both programs for your products before you decide.",
  },
  {
    question: "What are WFS prep requirements?",
    answer: "Walmart publishes prep, labeling and packaging requirements for WFS, with extra rules for some product types. We prep each item to those requirements before it ships. Read Walmart's current WFS guide for the details.",
  },
  {
    question: "How much does WFS cost?",
    answer: "Walmart charges fulfillment and storage fees that depend on product size, weight and how long stock is stored. We do not quote Walmart's fees here because they change. Check the current WFS fee schedule in Seller Center.",
  },
  {
    question: "What is the Pro Seller badge?",
    answer: "It is a badge Walmart gives to sellers who meet its performance criteria. Walmart decides who gets it. We manage the metrics a seller controls, but we cannot promise the badge.",
  },
  {
    question: "Can you help me expand from FBA to WFS?",
    answer: "Yes. We handle listing setup, inventory prep, shipping plans and ongoing management. Most sellers treat WFS as an extra sales channel, not a replacement for FBA.",
  },
  {
    question: "What happens with returns on WFS?",
    answer: "Walmart handles the physical return for WFS orders. We manage customer communication and track return rates by product to find quality or listing accuracy problems.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "You need $3,000 to $5,000 working capital depending on the business model. WFS needs stock bought in advance, so plan for inventory cost.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There is no contract and no lock-in period. Your inventory in Walmart's warehouses stays yours whether or not you use our service.",
  },
];

export default function WalmartWFSPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Walmart Fulfillment Services (WFS)"
        title="Walmart WFS prep and fulfillment management"
        lead="With WFS, your products are stored in Walmart's fulfillment centers and Walmart ships the orders. We handle the work before and around that: prep to Walmart standards, inbound shipping plans, listings and inventory."
        points={["Prep to Walmart WFS standards", "Inbound shipping plans", "Inventory planning", "Listing optimization", "Pay from profit", "No contract, cancel anytime"]}
        secondaryHref="/pricing"
        note="We are an independent agency and not part of Walmart. Fees, badges and delivery promises on WFS are set by Walmart."
      />

      <ServiceSection eyebrow="Where sellers get stuck" title="Common WFS problems and what we do about them" tint>
        <TwoColRows leftHead="The problem" rightHead="What we do" rows={problems} />
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="How we manage your WFS operation">
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What the WFS service covers" tint>
        <FeatureList items={whatYouGet} />
      </ServiceSection>

      <ProfitShareBlock subject="WFS stores" />

      <ServiceConfidence />

      <ServiceSection eyebrow="Comparison" title="Gosellify, managing WFS yourself, or another agency" lead="A plain list of who does what. Ask any agency you consider the same questions.">
        <PlainTable columns={["What you need", "Gosellify", "Managing WFS yourself", "Other agencies"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about WFS" tint />

      <RelatedLinks
        links={[
          { href: "/services/walmart-management", label: "Walmart marketplace management services", desc: "Full daily management of a Walmart store." },
          { href: "/services/3pl-warehouse", label: "3PL fulfillment and warehousing", desc: "FBA and WFS prep, storage and shipping from our US warehouses." },
          { href: "/services/walmart-wholesale", label: "Walmart wholesale store management" },
        ]}
      />

      <CTASection />
    </>
  );
}
