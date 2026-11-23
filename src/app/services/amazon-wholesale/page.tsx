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
  { left: "You cannot find reliable distributors.", right: "We contact distributors, check that they are authorized for the brand and keep every invoice. We do not buy from grey market sources." },
  { left: "Brand approval requests get rejected.", right: "We handle the outreach and the paperwork, including invoices and authorization letters. Amazon and the brand decide the outcome." },
  { left: "You think wholesale needs a very large budget.", right: "The minimum is $3,000 to $5,000 working capital. We check demand, margin and competition for each SKU before you buy, and grow the catalog from what sells." },
  { left: "FBA prep takes your time.", right: "Labeling, poly bagging, bundling and shipment plans are done in our US warehouses." },
  { left: "You keep losing the Buy Box.", right: "We set repricing rules based on your margin, so we compete for the Buy Box without selling below cost." },
  { left: "Managing many suppliers is messy.", right: "We track every brand, SKU, reorder point and supplier in one place." },
];

const steps: TitledItem[] = [
  { title: "Research and approval", desc: "We find brands worth selling, contact distributors and prepare the approval paperwork for your account." },
  { title: "Source and order", desc: "You fund the stock. We negotiate bulk pricing, place the orders and arrange delivery to our US warehouses." },
  { title: "Prep and launch", desc: "FBA prep, labeling and shipment plans. Products go live with accurate listings and repricing rules." },
  { title: "Reorder and grow", desc: "We reorder what sells, drop what does not and add brands step by step." },
];

const whatYouGet: TitledItem[] = [
  { title: "Brand approval paperwork", desc: "We contact brands and distributors and submit the documents Amazon asks for. Approval is decided by Amazon and the brand." },
  { title: "Supplier negotiation", desc: "Bulk pricing, minimum order quantities and payment terms with authorized distributors." },
  { title: "FBA prep and shipping", desc: "Labeling, poly bagging, bundling and shipment plan creation in our US warehouses." },
  { title: "Inventory management", desc: "Stock tracking, reorder alerts and demand forecasts, so less capital sits in slow stock." },
  { title: "Repricing", desc: "Repricing rules that follow competing offers while holding your target margin." },
  { title: "Account health", desc: "Performance metrics and policy notices reviewed daily. Distributor invoices are kept ready in case Amazon asks for them." },
  { title: "Customer support", desc: "Buyer messages, returns, A-to-z claims and feedback handled by our support team." },
  { title: "Catalog growth", desc: "More brands and categories once the first ones sell steadily." },
];

const comparison: Cell[][] = [
  ["Brand approval paperwork", "Included", "You do it", "Varies by agency"],
  ["Supplier negotiation and bulk pricing", "Included", "You negotiate", "Varies by agency"],
  ["FBA prep, labeling and shipment plans", "At our own US warehouses", "You do it", "Varies by agency"],
  ["Repricing", "Included", "Manual or your own software", "Varies by agency"],
  ["Inventory forecasting and reorder alerts", "Included", "You do it", "Varies by agency"],
  ["Account health monitoring", "Daily", "You check", "Varies by agency"],
  ["Multi-brand portfolio management", "Included", "You do it", "Varies by agency"],
  ["Fee model", "Profit share, paid from profit", "No fee, your own time", "Ask each agency"],
  ["WhatsApp support", "Yes", "Not applicable", "Varies by agency"],
];

const faqs = [
  {
    question: "Is Amazon wholesale safe from suspensions?",
    answer: "No model is free of risk. Wholesale lowers some risks, because products come from authorized distributors with invoices you can show Amazon. Complaints and policy issues can still happen, and we deal with them using the records we keep.",
  },
  {
    question: "How much capital do I need to start wholesale?",
    answer: "The minimum is $3,000 to $5,000 working capital depending on the business model. Wholesale means buying inventory in advance, so more capital lets you carry more brands and meet distributor minimum orders.",
  },
  {
    question: "What profit can I expect?",
    answer: "We do not promise a margin or a return. We calculate expected profit per product before you buy, using landed cost, Amazon fees and competing offers, and we show the real result per order in the Portal.",
  },
  {
    question: "How do you get brand approvals?",
    answer: "We contact brands and authorized distributors, handle the paperwork and submit it to Amazon. We cannot promise approval for any brand, because the brand and Amazon decide.",
  },
  {
    question: "What if a product stops selling or margins drop?",
    answer: "We check each product before purchase. If the market changes afterwards, we adjust the price or sell the stock off. Spreading capital over several brands means one slow product does not decide the result.",
  },
  {
    question: "Do I need a warehouse or do you handle FBA prep?",
    answer: "We handle it. Labeling, poly bagging, bundling and shipment plans are done in our US warehouses, and the stock is sent on to Amazon's fulfillment centers.",
  },
  {
    question: "How is wholesale different from private label?",
    answer: "Private label means creating your own brand, which takes more capital and time. Wholesale means selling established brands bought at distributor prices. You share the listing with other sellers, so pricing and stock discipline matter.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There is no contract, no lock-in period and no exit fee. Your supplier accounts and your inventory are yours.",
  },
];

export default function AmazonWholesalePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Amazon wholesale"
        title="Amazon wholesale store management service"
        lead="We handle brand approval paperwork, sourcing from authorized distributors, FBA prep and daily store management for Amazon wholesale sellers. You fund the stock and own the account."
        points={["Authorized distributors only", "Brand approval paperwork", "FBA prep in our US warehouses", "Daily store management", "Pay from profit", "No contract, cancel anytime"]}
        secondaryHref="/pricing"
        note="We are an independent agency and not part of Amazon. We do not promise brand approvals, sales or profit."
      />

      <ServiceSection eyebrow="Where sellers get stuck" title="Common wholesale problems and what we do about them" tint>
        <TwoColRows leftHead="The problem" rightHead="What we do" rows={problems} />
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="How we build an Amazon wholesale store">
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What the wholesale service covers" tint>
        <FeatureList items={whatYouGet} />
      </ServiceSection>

      <ProfitShareBlock subject="Amazon wholesale stores" />

      <ServiceConfidence />

      <ServiceSection eyebrow="Comparison" title="Gosellify, doing wholesale yourself, or another agency" lead="A plain list of who does what. Ask any agency you consider the same questions.">
        <PlainTable columns={["What you need", "Gosellify", "Doing it yourself", "Other agencies"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Amazon wholesale" tint />

      <RelatedLinks
        links={[
          { href: "/services/amazon-fba", label: "Amazon FBA management service" },
          { href: "/services/walmart-wholesale", label: "Walmart wholesale store management" },
          { href: "/services/3pl-warehouse", label: "FBA prep at our US warehouses" },
        ]}
      />

      <CTASection />
    </>
  );
}
