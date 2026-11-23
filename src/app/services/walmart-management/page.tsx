import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import TechnologySection from "@/components/home/TechnologySection";
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
  { left: "You are new to Walmart and do not know its rules.", right: "We run our own Walmart store and manage client stores, so the listing rules, seller metrics and daily routines are familiar work for our team." },
  { left: "Walmart works differently from Amazon.", right: "Listing structure, search ranking and seller metrics are different. We build each store for Walmart instead of copying an Amazon setup." },
  { left: "Listings do not rank.", right: "We complete attributes, write clear titles and descriptions, and keep prices competitive, which are the things Walmart's listing quality checks look at." },
  { left: "Traffic is lower in some categories.", right: "We combine organic listing work, Walmart Sponsored Products and pricing so each product gets a fair chance to sell." },
  { left: "Fulfillment choices are confusing.", right: "WFS, our US warehouses, or your own fulfillment each have trade-offs. We choose per product and run the daily flow." },
  { left: "Account health standards are strict.", right: "We check order defect rate, on-time shipping and valid tracking every day and act when a metric starts to slip." },
];

const steps: TitledItem[] = [
  { title: "Store audit", desc: "We review your listings, metrics, pricing and competition and write down what needs fixing." },
  { title: "Fix and optimize", desc: "Listings are rewritten, prices adjusted, fulfillment set up and open account health issues worked on." },
  { title: "Launch and advertise", desc: "New products are added and, where it makes sense, Sponsored Products campaigns are started." },
  { title: "Daily management", desc: "Orders, returns, buyer messages, pricing and account health are handled every day. You get regular reports and can check the Portal anytime." },
];

const whatYouGet: TitledItem[] = [
  { title: "Walmart listing management", desc: "Titles, bullet points, descriptions and attributes written for Walmart search and kept up to date." },
  { title: "Buy Box pricing", desc: "Price monitoring and repricing rules based on your margin, so we compete for the Buy Box without selling at a loss." },
  { title: "Order fulfillment", desc: "Every order tracked, processed and shipped, whether it goes through WFS, our US warehouses or your own fulfillment." },
  { title: "Customer service and returns", desc: "Buyer messages answered, returns processed and feedback followed up by our support team." },
  { title: "Account health", desc: "Order defect rate, on-time shipping and valid tracking reviewed daily, with issues flagged and worked on early." },
  { title: "Walmart advertising", desc: "Sponsored Products setup, keyword targeting, bids and budget, with spend recorded against each order's profit." },
  { title: "Catalog growth", desc: "New categories and products are added step by step, based on what is already selling in your store." },
  { title: "Reporting", desc: "Order-level profit and loss and a monthly statement in the Gosellify Portal." },
];

const comparison: Cell[][] = [
  ["Walmart listing optimization", "Included", "Your own time", "Varies by agency"],
  ["Buy Box pricing and repricing", "Included", "Manual or your own software", "Varies by agency"],
  ["Daily order and fulfillment management", "Included", "You do it", "Varies by agency"],
  ["Walmart PPC campaign management", "Included", "You do it", "Varies by agency"],
  ["Account health monitoring", "Daily", "You do it", "Varies by agency"],
  ["Customer service and returns handling", "Included", "You do it", "Varies by agency"],
  ["Fee model", "Profit share, paid from profit", "No fee, your own time", "Ask each agency"],
  ["WhatsApp support", "Yes", "Not applicable", "Varies by agency"],
];

const faqs = [
  {
    question: "How is selling on Walmart different from Amazon?",
    answer: "Walmart has its own listing requirements, search ranking and seller performance standards. A store that works on Amazon cannot simply be copied over. Our team sets up and runs each store for Walmart specifically.",
  },
  {
    question: "Do I need an existing Walmart Seller account?",
    answer: "Yes, you need an approved Walmart Seller Center account in your own name. If you do not have one yet, we can guide you through the application. We cannot promise that Walmart will approve it, because that decision is Walmart's.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "You need $3,000 to $5,000 working capital depending on the business model. The money covers products and fulfillment while you wait for marketplace payouts.",
  },
  {
    question: "What profit can I expect on Walmart?",
    answer: "We do not promise a profit figure or a return. Results depend on products, capital, category and competition. The Portal shows profit and loss for every order, so you can judge the store on real numbers.",
  },
  {
    question: "Can you manage my Walmart store alongside my Amazon store?",
    answer: "Yes. We manage each store separately, with its own listings, pricing and daily routine. Selling on two marketplaces also means your income does not depend on one account.",
  },
  {
    question: "What if my account health metrics drop?",
    answer: "We check account health metrics daily. If shipping speed, order defect rate or response time starts to slip, we find the cause and correct it. We cannot guarantee that an account will never be suspended.",
  },
  {
    question: "Do you handle Walmart advertising?",
    answer: "Yes. We manage Walmart Sponsored Products campaigns, including keyword research, bids, budgets and performance reporting.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There is no contract and no lock-in period. The seller account is yours and stays with you.",
  },
];

export default function WalmartManagementPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Walmart store management"
        title="Walmart marketplace management services"
        lead="We manage your Walmart Marketplace store day to day: listing management, Buy Box pricing, orders, ads, customer service and account health. The account stays in your name and you see every figure in the Gosellify Portal."
        points={["Full store management", "Walmart listing management", "Walmart PPC management", "Daily account health checks", "Pay from profit", "No contract, cancel anytime"]}
        secondaryHref="/pricing"
        note="We are an independent agency. We are not part of Walmart and we do not promise sales, profit or account approval."
      />

      <ServiceSection eyebrow="Where sellers get stuck" title="Common problems and what we do about them" tint>
        <TwoColRows leftHead="The problem" rightHead="What we do" rows={problems} />
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="How our Walmart account management works">
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What our Walmart management services cover" lead="From listing creation to customer service, the daily work of the store is done by our team." tint>
        <FeatureList items={whatYouGet} />
      </ServiceSection>

      <ProfitShareBlock subject="Walmart stores" />

      <ServiceConfidence />

      <TechnologySection />

      <ServiceSection eyebrow="Comparison" title="Gosellify, doing it yourself, or another agency" lead="A plain list of who does what. Ask any agency you consider the same questions." tint>
        <PlainTable columns={["What you need", "Gosellify", "Doing it yourself", "Other agencies"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Walmart management" />

      <RelatedLinks
        tint
        links={[
          { href: "/services/walmart-wfs", label: "Walmart WFS prep and fulfillment", desc: "Product prep and inbound shipping for Walmart Fulfillment Services." },
          { href: "/services/walmart-wholesale", label: "Walmart wholesale store management", desc: "Selling established brands sourced from authorized distributors." },
          { href: "/services/3pl-warehouse", label: "3PL fulfillment and warehousing", desc: "Storage, prep and shipping from our US warehouses." },
        ]}
      />

      <CTASection />
    </>
  );
}
