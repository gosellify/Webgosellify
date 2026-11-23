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
  { left: "You do not know which product to sell.", right: "Each product idea is checked for demand, competition, margin and supplier reliability before you spend on stock. Some products still fail, and we say so when the data points that way." },
  { left: "Ads spend money without sales.", right: "Our PPC team reviews bids and search terms daily, adds negative keywords and tracks ad cost for each SKU." },
  { left: "The listing is hard to find.", right: "We write titles, bullets, backend search terms and A+ Content for both Amazon search and the buyer reading the page." },
  { left: "Inventory keeps running out.", right: "We track sales rate, supplier lead time and season, and send reorder alerts early." },
  { left: "Brand Registry feels complicated.", right: "We guide you through the trademark step, file the Brand Registry application and set up the tools it opens. Approval is decided by Amazon." },
  { left: "Other sellers copy or hijack the listing.", right: "With Brand Registry in place we monitor the listing and report violations through Amazon's own tools." },
];

const steps: TitledItem[] = [
  { title: "Research and validate", desc: "Market analysis to find products with demand and room for a new brand. Each product is checked before you invest." },
  { title: "Source and launch", desc: "Supplier search, price negotiation, product photos and listing. The product goes live with complete content." },
  { title: "Advertise and improve", desc: "PPC campaigns bring traffic. We test listing content and adjust until the numbers settle." },
  { title: "Manage and expand", desc: "Daily management, inventory planning and, when the first product is stable, new products for the same brand." },
];

const whatYouGet: TitledItem[] = [
  { title: "Product research", desc: "Demand, competition depth and margin calculations for every product idea, using market research tools and our own checks." },
  { title: "PPC management", desc: "Sponsored Products, Sponsored Brands and Sponsored Display, reviewed daily, with ad cost tracked per SKU." },
  { title: "Listing optimization", desc: "Titles, bullets, backend search terms and descriptions, tested and revised." },
  { title: "A+ Content", desc: "Brand content with clear layouts, comparison charts and product detail." },
  { title: "Inventory planning", desc: "Sales rate tracking, lead time calculations and seasonal forecasts, with early reorder alerts." },
  { title: "Brand Registry", desc: "Trademark guidance, application and setup of A+ Content, Sponsored Brands and Brand Analytics." },
  { title: "Account health", desc: "Performance metrics and policy notices reviewed daily and acted on early." },
  { title: "Product line growth", desc: "New products and categories once the first product is stable." },
];

const comparison: Cell[][] = [
  ["Product validation before launch", "Included", "You do it", "Varies by agency"],
  ["PPC bid review", "Daily", "When you have time", "Varies by agency"],
  ["A+ Content and listing tests", "Included", "You write it", "Varies by agency"],
  ["Inventory forecasting and reorder alerts", "Included", "You do it", "Varies by agency"],
  ["Brand Registry setup", "Included", "You do it", "Varies by agency"],
  ["Supplier sourcing and price negotiation", "Included", "You do it", "Varies by agency"],
  ["Account health monitoring", "Daily", "You check", "Varies by agency"],
  ["Fee model", "Profit share, paid from profit", "No fee, your own time", "Ask each agency"],
  ["WhatsApp support", "Yes", "Not applicable", "Varies by agency"],
];

const faqs = [
  {
    question: "How is this different from dropshipping or wholesale?",
    answer: "FBA private label means you own the brand and the listing. In wholesale you resell another company's brand and share the listing with other sellers. Private label takes more capital and more time, and in return you control the price and the product.",
  },
  {
    question: "How much capital do I need to get started?",
    answer: "The minimum for any model is $3,000 to $5,000 working capital. Private label usually needs more than that, because you pay for a first production run, photography and launch advertising. We give you a budget estimate for your product before you commit.",
  },
  {
    question: "When will I start seeing profit?",
    answer: "We do not promise a date. A new brand needs time for research, sourcing, launch and ad tuning, and the first months often run at a loss. We show you the real numbers each month so you can decide whether to continue.",
  },
  {
    question: "What if my first product fails?",
    answer: "We check products before launch, but markets change. If a product underperforms, we review the data, change the listing, the ads and the price. If that does not work, we sell off the stock and move the capital to a better product.",
  },
  {
    question: "How do you manage PPC?",
    answer: "We create Sponsored Products, Sponsored Brands and Sponsored Display campaigns and review ad cost per SKU every day. Bids are adjusted, converting keywords get more budget and wasted spend is cut.",
  },
  {
    question: "What happens if I run out of stock?",
    answer: "Running out of stock hurts ranking and wastes ad spend. We track sales rate, supplier lead times and seasonal patterns to calculate reorder dates and alert you early.",
  },
  {
    question: "Do you help with Brand Registry and trademarks?",
    answer: "Yes. We guide you through trademark filing, submit the Brand Registry application and set up the tools it opens. Approval and timing are decided by the trademark office and by Amazon.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There is no contract, no lock-in period and no exit fee. The brand and the account are yours.",
  },
];

export default function AmazonFBAPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Amazon FBA management"
        title="Amazon FBA management service for private label"
        lead="Product research, supplier sourcing, listing creation, PPC campaigns, inventory planning and Brand Registry, handled by our team daily. You own the brand and the account."
        points={["Product research and validation", "Daily PPC review", "A+ Content", "Brand Registry setup", "Pay from profit", "No contract, cancel anytime"]}
        secondaryHref="/pricing"
        note="We are an independent agency and not part of Amazon. We do not promise sales, ranking or profit."
      />

      <ServiceSection eyebrow="Where sellers get stuck" title="Common FBA problems and what we do about them" tint>
        <TwoColRows leftHead="The problem" rightHead="What we do" rows={problems} />
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="How we build an FBA brand with you">
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What the FBA management service covers" tint>
        <FeatureList items={whatYouGet} />
      </ServiceSection>

      <ProfitShareBlock subject="FBA brands" />

      <ServiceConfidence />

      <ServiceSection eyebrow="Comparison" title="Gosellify, doing it yourself, or another agency" lead="Running an FBA brand means research, ads, inventory, listings and account health at the same time. Here is who does what.">
        <PlainTable columns={["What you need", "Gosellify", "Doing it yourself", "Other agencies"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Amazon FBA management" tint />

      <RelatedLinks
        links={[
          { href: "/services/amazon-wholesale", label: "Amazon wholesale store management" },
          { href: "/services/3pl-warehouse", label: "FBA prep at our US warehouses" },
          { href: "/services/amazon", label: "All Amazon store management services" },
        ]}
      />

      <CTASection />
    </>
  );
}
