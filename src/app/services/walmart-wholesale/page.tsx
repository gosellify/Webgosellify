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
  { left: "Finding authorized distributors is slow.", right: "We contact distributors, check that they are authorized for the brand, and compare pricing and reliability before you order." },
  { left: "Brand approvals on Walmart need paperwork.", right: "We prepare the documents Walmart asks for, such as invoices and authorization letters from the distributor. Walmart and the brand decide the outcome." },
  { left: "You are not sure Walmart is worth it next to Amazon.", right: "We check demand, competing offers and fees for each product before you buy stock, so the decision is made per product." },
  { left: "Other sellers undercut the price.", right: "We follow the brand's MAP policy and set repricing rules based on your margin, so we do not chase the price below cost." },
  { left: "Inventory across suppliers is hard to follow.", right: "We track stock, sales rate and reorder points for every supplier and tell you when to reorder." },
  { left: "Walmart's compliance rules are strict.", right: "We check listing quality, shipping speed and defect rates daily and act when a metric starts to slip." },
];

const steps: TitledItem[] = [
  { title: "Research and approval", desc: "We find brands worth selling, apply for the approvals that are needed and open distributor accounts in your company's name." },
  { title: "Source and order", desc: "You fund the stock. Orders are placed with authorized distributors, checked on arrival, and every invoice is kept." },
  { title: "List and price", desc: "Products are listed with complete content and priced against cost, fees and competing offers." },
  { title: "Fulfill and reorder", desc: "Orders ship through WFS or our US warehouses. We replenish what sells and add new brands step by step." },
];

const whatYouGet: TitledItem[] = [
  { title: "Brand approval paperwork", desc: "We prepare and submit the documents needed for brand and category approval on Walmart. Approval is decided by Walmart and the brand." },
  { title: "Supplier sourcing", desc: "We look for authorized distributors and check each one for authenticity, pricing and reliability." },
  { title: "Inventory management", desc: "Demand forecasts, reorder points and tracking for every SKU, so less of your capital sits in slow stock." },
  { title: "Pricing", desc: "Competitive analysis, margin-based repricing and MAP compliance." },
  { title: "WFS prep", desc: "Products prepped, labeled and shipped to Walmart's WFS fulfillment centers from our US warehouses." },
  { title: "Account health", desc: "Performance metrics reviewed daily. Intellectual property complaints are answered with the purchase records we keep." },
  { title: "Customer support", desc: "Buyer messages, returns and refunds handled by our support team." },
  { title: "Catalog growth", desc: "New brands and categories are added once the current ones sell steadily." },
];

const comparison: Cell[][] = [
  ["Brand approval paperwork", "Included", "You apply yourself", "Varies by agency"],
  ["Distributor sourcing and checks", "Included", "You do it", "Varies by agency"],
  ["Inventory management and forecasting", "Included", "Your own spreadsheets", "Varies by agency"],
  ["Pricing and repricing", "Included", "You do it", "Varies by agency"],
  ["WFS prep and shipping", "Included", "You arrange it", "Varies by agency"],
  ["Account health monitoring", "Daily", "You do it", "Varies by agency"],
  ["Multi-supplier coordination", "Included", "You do it", "Varies by agency"],
  ["Fee model", "Profit share, paid from profit", "No fee, your own time", "Ask each agency"],
  ["WhatsApp support", "Yes", "Not applicable", "Varies by agency"],
];

const faqs = [
  {
    question: "What is Walmart wholesale selling?",
    answer: "Wholesale on Walmart means buying branded products in bulk from authorized distributors and reselling them on Walmart Marketplace. You sell established brands that already have demand, and you hold real stock with real invoices.",
  },
  {
    question: "How do you get brand approvals on Walmart?",
    answer: "For brands or categories that need approval, we submit the documents Walmart asks for, such as distributor invoices and letters of authorization. We cannot promise approval, because Walmart and the brand owner decide.",
  },
  {
    question: "How much capital do I need for wholesale?",
    answer: "The minimum is $3,000 to $5,000 working capital depending on the business model. Wholesale needs stock bought in advance, so more capital lets you carry more products and reach distributor minimum orders.",
  },
  {
    question: "What profit can I expect?",
    answer: "We do not promise a margin or a return. It depends on the brand, the distributor price, Walmart's fees and competing sellers. We calculate expected profit per product before you buy and show the real result per order in the Portal.",
  },
  {
    question: "How do you find reliable distributors?",
    answer: "We check that a supplier is an authorized source for the brand, compare pricing, and look at how reliably they ship and how they handle returns. We do not buy from unauthorized or grey market sources.",
  },
  {
    question: "Is Walmart worth it next to Amazon?",
    answer: "It depends on the product. Some products face fewer competing sellers on Walmart, others sell too slowly. We check each product before you put money into it.",
  },
  {
    question: "What about MAP pricing policies?",
    answer: "We follow each brand's Minimum Advertised Price policy. Breaking MAP can cost you the brand's authorization, so our repricing rules stay inside the allowed range.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There is no contract and no lock-in. Your supplier accounts and your inventory are yours.",
  },
];

export default function WalmartWholesalePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Walmart wholesale"
        title="Walmart wholesale store management service"
        lead="You sell established brands on Walmart Marketplace. We source from authorized distributors, prep stock for WFS and manage your wholesale store daily. You fund the stock."
        points={["Authorized distributors only", "Brand approval paperwork", "WFS prep in our US warehouses", "Daily store management", "Pay from profit", "No contract, cancel anytime"]}
        secondaryHref="/pricing"
        note="We are an independent agency and not part of Walmart. We do not promise brand approvals, sales or profit."
      />

      <ServiceSection eyebrow="Where sellers get stuck" title="Common wholesale problems and what we do about them" tint>
        <TwoColRows leftHead="The problem" rightHead="What we do" rows={problems} />
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="How we build a Walmart wholesale store">
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What the wholesale service covers" tint>
        <FeatureList items={whatYouGet} />
      </ServiceSection>

      <ProfitShareBlock subject="Walmart wholesale stores" />

      <ServiceConfidence />

      <ServiceSection eyebrow="Comparison" title="Gosellify, doing wholesale yourself, or another agency" lead="A plain list of who does what. Ask any agency you consider the same questions.">
        <PlainTable columns={["What you need", "Gosellify", "Doing it yourself", "Other agencies"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Walmart wholesale" tint />

      <RelatedLinks
        links={[
          { href: "/services/walmart-management", label: "Walmart marketplace management services" },
          { href: "/services/walmart-wfs", label: "Walmart WFS prep and fulfillment" },
          { href: "/services/amazon-wholesale", label: "Amazon wholesale store management" },
        ]}
      />

      <CTASection />
    </>
  );
}
