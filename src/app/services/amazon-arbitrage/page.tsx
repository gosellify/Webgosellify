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
  ServiceNote,
} from "@/components/services/ServiceBlocks";
import type { Cell, TextRow, TitledItem } from "@/components/services/ServiceBlocks";

const AMAZON_POLICY_URL = "https://sellercentral.amazon.com/help/hub/reference/external/G201808410";

const problems: TextRow[] = [
  { left: "You do not know where to start.", right: "We set up the store's catalog, list the first products and run the daily work from the first order." },
  { left: "You do not want to buy a large stock up front.", right: "In this model products are bought when a customer orders. You still need $3,000 to $5,000 working capital to pay for those purchases until Amazon pays out." },
  { left: "Product research takes hours every day.", right: "Our team researches products daily and checks cost, fees, brand restrictions and intellectual property risk before listing." },
  { left: "A wrong product can bring a complaint.", right: "We screen brands before listing and keep the purchase record for every order. Screening lowers the risk. It does not remove it." },
  { left: "You already have a full-time job.", right: "We handle orders, returns, buyer messages and ads. You check the numbers in the Gosellify Portal when you want." },
  { left: "You do not want to pay a fee before the store earns.", right: "Managed stores are on a profit share. There is no management fee until the store makes profit." },
];

const steps: TitledItem[] = [
  { title: "We list products", desc: "We research products and list them on your Amazon store." },
  { title: "A customer orders", desc: "When an order comes in, we buy the product from a US supplier and have it delivered to our US warehouse." },
  { title: "Receive, inspect, repack", desc: "At our US warehouse the product is received, inspected and repacked. The supplier's invoice and packing slip are removed." },
  { title: "Ship to the customer", desc: "We ship the order to your customer with tracking, and record cost, fees and profit against the order." },
];

const whatYouGet: TitledItem[] = [
  { title: "Product sourcing", desc: "Daily product research across US suppliers, with cost, fee and restriction checks before anything is listed." },
  { title: "Listings and pricing", desc: "Listings created and kept accurate, with repricing rules based on your margin." },
  { title: "Order fulfillment", desc: "Each order is purchased, received at our US warehouse, inspected, repacked and shipped." },
  { title: "Returns and refunds", desc: "Returns are received, checked and restocked or written off, and the result is recorded against the order." },
  { title: "Purchase records", desc: "We keep the purchase record for every order, so the source of a product can be shown if Amazon asks." },
  { title: "Buyer communication", desc: "Buyer messages, A-to-z claims and feedback are handled by our support team." },
  { title: "PPC campaigns", desc: "Sponsored Products ads where they make sense, with spend counted in the order's profit." },
  { title: "Catalog growth", desc: "We start with a small catalog and add products as the store proves what sells." },
];

const comparison: Cell[][] = [
  ["Daily product sourcing", "Included", "You do it", "Varies by agency"],
  ["Listings and repricing", "Included", "You do it", "Varies by agency"],
  ["Order purchasing", "Included", "You do it daily", "Varies by agency"],
  ["Warehouse receiving, inspection and repacking", "At our own US warehouses", "You arrange it", "Varies by agency"],
  ["Brand and IP screening", "Included", "You do it", "Varies by agency"],
  ["Returns and refund management", "Included", "You handle", "Varies by agency"],
  ["Fee model", "Profit share, paid from profit", "No fee, your own time", "Ask each agency"],
  ["WhatsApp support", "Yes", "Not applicable", "Varies by agency"],
];

const faqs = [
  {
    question: "Is Amazon 2-step dropshipping allowed by Amazon?",
    answer: "We do not claim that it is. Amazon's Drop Shipping Policy says that buying products from another online retailer and having that retailer ship directly to customers is not allowed, and that you must be the seller of record. Read the policy in Seller Central and decide for yourself before choosing this model.",
  },
  {
    question: "How is this different from regular dropshipping?",
    answer: "In regular dropshipping the supplier ships straight to the customer. In our 2-step service every order is delivered to our US warehouse first, where it is received, inspected and repacked before we ship it to the customer.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "You need $3,000 to $5,000 working capital depending on the business model. The money pays for products when customers order, until Amazon pays out to you.",
  },
  {
    question: "What profit can I expect?",
    answer: "We do not promise a profit figure, a margin or a date. Results depend on products, capital and competition. The Portal shows profit and loss for every order after product cost, Amazon fees, shipping and prep.",
  },
  {
    question: "What if a product gets an IP complaint?",
    answer: "We screen brands before listing. If a complaint still comes, we remove the listing, answer the complaint with the records we have and replace the product. We cannot promise that complaints will never happen.",
  },
  {
    question: "Where do you source products from?",
    answer: "We buy new products from US wholesalers, distributors and retailers, and keep the purchase record for every order.",
  },
  {
    question: "How does profit sharing work?",
    answer: "We take a share of the profit the store makes. There is no management fee until the store makes profit. You fund the store's own costs, such as products and Amazon fees.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There is no contract and no lock-in period. The seller account is yours.",
  },
];

export default function AmazonArbitragePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Amazon 2-step dropshipping"
        title="Amazon 2-step dropshipping store management"
        lead="We source and list products on your Amazon store. When a customer orders, we buy the product, receive it at our US warehouses, inspect and repack it, and ship it to the customer. We also handle returns, buyer messages and account health."
        points={["Products bought when a customer orders", "Received and inspected at our US warehouses", "Daily store management", "Pay from profit", "No contract, cancel anytime"]}
        secondaryHref="/pricing"
        note="We are an independent agency and not part of Amazon. Read the risk note on this page before you choose this model."
      />

      <ServiceSection eyebrow="The model" title="What 2-step dropshipping means" tint>
        <div style={{ maxWidth: 760, display: "grid", gap: 14, color: "var(--color-text-light)" }}>
          <p>
            A customer orders from your Amazon store. We buy the item from a US supplier and have it delivered to our
            US warehouse. There it is received, inspected and repacked, and then we ship it to your customer.
          </p>
          <p>
            The two steps are supplier to warehouse, then warehouse to customer. You do not hold a large stock, but
            you do pay for each product before Amazon pays you.
          </p>
        </div>
        <div style={{ marginTop: 28 }}>
          <ServiceNote title="Risk note: read Amazon's policy first">
            <p>
              Amazon&apos;s Drop Shipping Policy says that buying products from another online retailer and having
              that retailer ship directly to customers is not allowed, and that you must be the seller of record of
              your products.
            </p>
            <p>
              We do not claim that this model is approved by Amazon or free of risk. Amazon enforces its own rules
              and can restrict a listing or an account. Read the policy yourself and ask us any question before you
              start.
            </p>
            <p>
              <a href={AMAZON_POLICY_URL} target="_blank" rel="noopener noreferrer" className="link-underline" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                Amazon Drop Shipping Policy (Seller Central)
              </a>
            </p>
            <p className="typo-small">Last reviewed: November 2026.</p>
          </ServiceNote>
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="How an order moves">
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection eyebrow="Where sellers get stuck" title="Common problems and what we do about them" tint>
        <TwoColRows leftHead="The problem" rightHead="What we do" rows={problems} />
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What our Amazon store management covers">
        <FeatureList items={whatYouGet} />
      </ServiceSection>

      <ServiceConfidence />

      <ProfitShareBlock subject="Amazon stores" />

      <ServiceSection eyebrow="Comparison" title="Gosellify, doing it yourself, or another agency" lead="A plain list of who does what. Ask any agency you consider the same questions." tint>
        <PlainTable columns={["What you need", "Gosellify", "Doing it yourself", "Other agencies"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Amazon 2-step dropshipping" />

      <RelatedLinks
        tint
        links={[
          { href: "/services/amazon-wholesale", label: "Amazon wholesale store management", desc: "Selling brands bought in bulk from authorized distributors." },
          { href: "/services/amazon-fba", label: "Amazon FBA management service", desc: "Private label brands fulfilled by Amazon." },
          { href: "/services/3pl-warehouse", label: "3PL fulfillment and warehousing", desc: "Receiving, prep and shipping from our US warehouses." },
        ]}
      />

      <CTASection />
    </>
  );
}
