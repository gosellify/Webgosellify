import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import {
  ServiceHero,
  ServiceSection,
  TwoColRows,
  FeatureList,
  PlainTable,
  ProfitShareBlock,
  RelatedLinks,
  ServiceNote,
} from "@/components/services/ServiceBlocks";
import type { Cell, TextRow, TitledItem } from "@/components/services/ServiceBlocks";

const problems: TextRow[] = [
  { left: "eBay search is hard to understand.", right: "eBay's search engine is called Cassini. We complete item specifics, write clear titles, choose the right category and keep handling times short, which are the things a seller controls." },
  { left: "Account health is slipping.", right: "We check defect rate, late shipments and open cases daily and act before they become a restriction." },
  { left: "Repricing takes hours.", right: "Repricing tools adjust prices within rules you approve, with a minimum margin so an item is not sold at a loss." },
  { left: "Feedback is hard to manage.", right: "We ask for feedback after delivery, answer negative feedback politely and fix the cause." },
  { left: "Returns cost you money.", right: "Accurate listings and quick shipping prevent many returns. When one happens, we process it and arrange the supplier credit." },
  { left: "You want Top Rated Seller status.", right: "eBay decides that status by its own criteria. We manage the metrics it looks at, such as on-time shipping, tracking and defect rate." },
];

const whatYouGet: TitledItem[] = [
  { title: "Product sourcing", desc: "Research to find items with demand and a workable margin, from wholesale suppliers." },
  { title: "Listing optimization for Cassini search", desc: "Titles, complete item specifics, correct categories and competitive prices." },
  { title: "Automated repricing", desc: "Repricing tools that follow rules you approve and protect a minimum margin." },
  { title: "Account health", desc: "Daily checks of defect rate, late shipments, cases and policy notices." },
  { title: "Seller level", desc: "We manage the metrics eBay uses for seller levels. The level itself is decided by eBay." },
  { title: "Customer support", desc: "Buyer messages answered, cases handled and feedback requested." },
  { title: "Returns management", desc: "Buyer communication, refund processing, supplier coordination and restocking." },
  { title: "Growth", desc: "More products, new categories and, if it suits you, other eBay country sites and promoted listings." },
];

const comparison: Cell[][] = [
  ["Listing optimization for Cassini search", "Included", "You do it", "Varies by agency"],
  ["Automated repricing", "Included", "Manual or your own software", "Varies by agency"],
  ["Work toward Top Rated Seller criteria", "Included, status decided by eBay", "You do it", "Varies by agency"],
  ["Account health monitoring", "Daily", "You do it", "Varies by agency"],
  ["Brand and VeRO checks before listing", "Included", "You do it", "Varies by agency"],
  ["Feedback and defect rate management", "Included", "Your time", "Varies by agency"],
  ["Other eBay country sites", "On request", "You do it", "Varies by agency"],
  ["Returns and refund processing", "Included", "You handle", "Varies by agency"],
  ["A named account manager", "Yes", "Not applicable", "Varies by agency"],
  ["WhatsApp support", "Yes", "Not applicable", "Varies by agency"],
];

const faqs = [
  {
    question: "Is dropshipping allowed on eBay?",
    answer: "eBay has its own drop shipping policy and enforces it. Read the current policy on eBay's website before you start. You are the seller of record, so you are responsible for delivery time and customer service. We source from wholesale suppliers and we do not claim that any model is approved by eBay.",
  },
  {
    question: "What is Cassini and why does it matter?",
    answer: "Cassini is the name of eBay's search engine. It decides which listings buyers see first. We focus on what a seller controls: complete item specifics, clear titles, competitive prices, short handling time and good seller metrics.",
  },
  {
    question: "How do you prevent account restrictions?",
    answer: "We check account health metrics daily and screen products against brands in eBay's VeRO program before listing. This lowers the risk. It does not remove it, and we cannot guarantee that an account will never be restricted.",
  },
  {
    question: "What profit can I expect from eBay dropshipping?",
    answer: "We do not promise a margin or a date. Results depend on category, sourcing and competition. The Gosellify Portal records cost, fees and profit for each order.",
  },
  {
    question: "How does automated repricing work?",
    answer: "Repricing tools watch competing prices and adjust your listings within rules you approve. A minimum margin stops an item from being sold at a loss, and a maximum price keeps it competitive.",
  },
  {
    question: "Can you manage more than one eBay country site?",
    answer: "Yes, on request. Each country site has its own buyers, fees and rules, so we set each one up separately.",
  },
  {
    question: "What happens if my account gets restricted?",
    answer: "We find the cause, prepare the appeal with supporting documents, correct the problem and follow the case until eBay decides. The decision is eBay's.",
  },
  {
    question: "How long does it take to reach Top Rated Seller?",
    answer: "eBay sets the requirements and reviews seller levels on its own schedule. Check the current requirements on eBay's seller pages. We manage the metrics, but we cannot promise the status.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "You need $3,000 to $5,000 working capital depending on the business model.",
  },
];

export default function EbayDropshippingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="eBay dropshipping and store management"
        title="eBay dropshipping and store management service"
        lead="We manage eBay stores day to day: listing optimization for Cassini search, automated repricing, account health, customer service and order handling."
        points={["Listing optimization for Cassini search", "Automated repricing", "Daily account health checks", "Daily order handling"]}
        secondaryHref="/pricing"
        note="We are an independent agency and not part of eBay. We do not promise sales, profit or a seller level."
      />

      <ServiceSection eyebrow="About the marketplace" title="How eBay differs from Amazon and Walmart" tint>
        <div style={{ maxWidth: 760, display: "grid", gap: 14, color: "var(--color-text-light)" }}>
          <p>
            eBay buyers often search for deals, used and hard-to-find items, and eBay offers both fixed-price and
            auction listings. Its search, fees and seller standards are its own.
          </p>
          <p>
            eBay runs separate sites for several countries, so one product can be offered in more than one market.
            Check eBay&apos;s current fee pages for the selling fees in your category.
          </p>
        </div>
        <div style={{ marginTop: 28 }}>
          <ServiceNote title="Read eBay's drop shipping policy first">
            <p>
              eBay publishes a drop shipping policy that says which sourcing methods are allowed. Read the current
              version on eBay&apos;s website before you choose this model. We do not claim that it is free of risk.
            </p>
          </ServiceNote>
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Where sellers get stuck" title="Common eBay problems and what we do about them">
        <TwoColRows leftHead="The problem" rightHead="What we do" rows={problems} />
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What our eBay store management covers" tint>
        <FeatureList items={whatYouGet} />
      </ServiceSection>

      <ProfitShareBlock subject="eBay stores" />

      <ServiceSection eyebrow="Comparison" title="Gosellify, managing it yourself, or another agency" lead="A plain list of who does what. Ask any agency you consider the same questions." tint>
        <PlainTable columns={["What you need", "Gosellify", "Managing it yourself", "Other agencies"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about eBay store management" />

      <RelatedLinks
        tint
        links={[
          { href: "/services/etsy-dropshipping", label: "Etsy shop management" },
          { href: "/services/walmart-management", label: "Walmart marketplace management services" },
          { href: "/services/amazon", label: "Amazon store management services" },
        ]}
      />

      <CTASection />
    </>
  );
}
