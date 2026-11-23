import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import {
  ServiceHero,
  ServiceSection,
  StepList,
  FeatureList,
  PlainTable,
  RelatedLinks,
  ServiceNote,
} from "@/components/services/ServiceBlocks";
import type { Cell, TitledItem } from "@/components/services/ServiceBlocks";

const AMAZON_POLICY_URL = "https://sellercentral.amazon.com/help/hub/reference/external/G201808410";

const warehousePoints: TitledItem[] = [
  { title: "Operated by us", desc: "Our own team receives, stores and ships your stock. We do not pass it to another company's warehouse." },
  { title: "Same-day prep and shipping", desc: "Orders received before the daily cutoff are prepped and shipped the same business day." },
  { title: "Inventory you can check", desc: "Stock levels, receiving history and outbound shipments are recorded and visible to you online." },
];

const whatYouGet: TitledItem[] = [
  { title: "Receiving and inspection", desc: "We receive your items from wholesale suppliers, manufacturers, retail stores or returns. Each item is inspected and logged on arrival." },
  { title: "Storage and inventory", desc: "Storage with inventory tracking, so you know what you have and when to reorder." },
  { title: "Pick, pack and ship", desc: "Same-day fulfillment for orders received before the cutoff, with tracking numbers uploaded to your store." },
  { title: "FBA and WFS prep", desc: "Labeling, bundling, poly bagging, bubble wrapping and carton packing to Amazon FBA and Walmart WFS requirements." },
  { title: "Receive, inspect and repack", desc: "For 2-step orders, the supplier shipment arrives at our warehouse, is inspected and repacked, and then ships to your customer." },
  { title: "Return processing", desc: "We receive customer returns, check condition, repack for resale or FBA re-shipment and update your inventory." },
];

const steps: TitledItem[] = [
  { title: "Ship to us", desc: "Send your products from any supplier, manufacturer or store to our warehouse. We receive and inspect every item." },
  { title: "We store and prep", desc: "Items are logged into inventory, stored and prepped to your instructions: FBA labels, poly bags, bundles." },
  { title: "An order comes in", desc: "We pick, pack and ship the same day, or send stock in bulk to Amazon FBA or Walmart WFS." },
  { title: "Delivered", desc: "Tracking updates automatically. Returns come back to our warehouse, not to you." },
];

const comparison: Cell[][] = [
  ["Who runs the warehouse", "Our own team", "Amazon", "Depends on the 3PL"],
  ["Monthly storage fee", "None", "Check Amazon's FBA fee schedule", "Depends on the 3PL"],
  ["Pricing", "Flat rates listed below", "Check Amazon's FBA fee schedule", "Depends on the 3PL"],
  ["Amazon FBA and Walmart WFS prep", "Yes", "Not applicable", "Depends on the 3PL"],
  ["Receive, inspect and repack for 2-step orders", "Yes", "No", "Depends on the 3PL"],
  ["Fulfillment for more than one marketplace", "Yes", "Check Amazon's current programs", "Depends on the 3PL"],
  ["Return handling", "$2 per return", "Check Amazon's FBA fee schedule", "Depends on the 3PL"],
  ["WhatsApp support", "Yes", "No", "Depends on the 3PL"],
];

const generalServices: Cell[][] = [
  ["Receive items", "Free", "We receive your items from any source"],
  ["Process your items", "$2 per parcel", "We process your items for shipment"],
  ["Oversize item process", "$3 per parcel", "Oversize items from 10 lbs up to 25 lbs"],
  ["Return handling", "$2 per return", "We receive your returned parcel and prepare it for shipping"],
  ["FBA and WFS prep", "$0.50 per item", "Labeling and bundling your items for FBA and WFS"],
  ["Photography", "$15 per item", "10 photos of your item from different positions"],
];

const boxPrices: Cell[][] = [
  ["Poly bag", "$1.00", "Up to 11 x 13 in"],
  ["Small box", "$1.30", "Up to 12 x 9 x 6 in"],
  ["Medium box", "$2.00", "Up to 18 x 12 x 12 in"],
  ["Large box", "$5.00", "Up to 28 x 18 x 18 in"],
];

const faqs = [
  {
    question: "Where are your warehouses located?",
    answer: "Our warehouses are in the United States and we operate them ourselves. Contact us for the receiving address for your shipments.",
  },
  {
    question: "Do you charge monthly storage fees?",
    answer: "No. We do not charge a monthly fee. You pay for the services you use, at the flat rates listed on this page.",
  },
  {
    question: "What is FBA prep and do you offer it?",
    answer: "FBA prep means preparing products to Amazon's Fulfillment by Amazon requirements: labeling, poly bagging, bundling and carton packing. We offer FBA prep at $0.50 per item, and we also do Walmart WFS prep.",
  },
  {
    question: "How does 2-step fulfillment work with your warehouse?",
    answer: "Your supplier ships products to our warehouse. We receive and inspect them, remove the supplier's invoice, repack and ship to your customer. If you sell on Amazon, read Amazon's Drop Shipping Policy before you use this model.",
  },
  {
    question: "How fast do you process orders?",
    answer: "Orders received before our daily cutoff are prepped and shipped the same business day.",
  },
  {
    question: "Can I track my inventory?",
    answer: "Yes. Stock levels, receiving history and outbound shipments are recorded and you can view them online.",
  },
  {
    question: "Do you handle returns?",
    answer: "Yes. We receive customer returns at our warehouse, check the item, repack it for resale or FBA re-shipment and update your inventory. The flat rate is $2 per return.",
  },
  {
    question: "What shipping carriers do you use?",
    answer: "We ship customer orders with USPS, UPS, FedEx and DHL, and choose the carrier for each shipment by speed, cost and destination.",
  },
];

export default function ThreePLWarehousePage() {
  return (
    <>
      <ServiceHero
        eyebrow="3PL warehouse"
        title="3PL fulfillment and on-demand warehousing"
        lead="FBA prep, WFS prep, storage, returns and direct-to-customer shipping from our own US warehouses. Flat rates, no monthly fee, and same-day prep and shipping."
        points={["Our own US warehouses", "Same-day prep and shipping", "No monthly fee", "FBA and WFS prep"]}
        primaryLabel="See the price list"
        primaryHref="#pricing"
        note="Third-party fulfillment for Walmart Marketplace, Amazon, Shopify, eBay and Etsy sellers. Prices on this page were last reviewed in November 2026."
      />

      <ServiceSection eyebrow="Our warehouses" title="Our own US warehouses, run by our own team" lead="We operate the warehouses ourselves. That gives us direct control over how your stock is received, stored and shipped." tint>
        <FeatureList items={warehousePoints} />
      </ServiceSection>

      <ServiceSection eyebrow="Services" title="Warehouse and fulfillment services">
        <FeatureList items={whatYouGet} />
        <div style={{ marginTop: 28 }}>
          <ServiceNote title="If you sell on Amazon">
            <p>
              Amazon&apos;s Drop Shipping Policy says that buying products from another online retailer and having
              that retailer ship directly to customers is not allowed, and that you must be the seller of record.
              Read the policy before you use 2-step fulfillment for an Amazon store. We do not claim that any
              fulfillment model is approved by Amazon.
            </p>
            <p>
              <a href={AMAZON_POLICY_URL} target="_blank" rel="noopener noreferrer" className="link-underline" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                Amazon Drop Shipping Policy (Seller Central)
              </a>
            </p>
          </ServiceNote>
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="From receiving to delivered" tint>
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection id="pricing" eyebrow="Price list" title="Flat rate pricing" lead="No monthly fee. You pay for the services you use.">
        <h3 className="g-h3" style={{ marginBottom: 12 }}>General services</h3>
        <PlainTable columns={["Service", "Price", "What it covers"]} rows={generalServices} />
        <h3 className="g-h3" style={{ margin: "32px 0 12px" }}>Box prices</h3>
        <PlainTable
          columns={["Box type", "Price", "Size"]}
          rows={boxPrices}
          note="Need something that is not listed? Message us on WhatsApp at +1 307 393 8789 with your requirements and we will send a quote."
        />
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify warehouse, Amazon FBA and other 3PLs" lead="We list our own terms and point you to the official fee schedules for the rest, because those change." tint>
        <PlainTable columns={["What you need", "Gosellify", "Amazon FBA", "Other 3PLs"]} rows={comparison} />
      </ServiceSection>

      <ServiceBenefits />

      <ServiceConfidence />

      <ServiceFAQ faqs={faqs} title="Questions about our 3PL warehouse" />

      <RelatedLinks
        tint
        links={[
          { href: "/services/walmart-wfs", label: "Walmart WFS prep and fulfillment" },
          { href: "/services/amazon-fba", label: "Amazon FBA management service" },
          { href: "/services/walmart-management", label: "Walmart marketplace management services" },
        ]}
      />

      <CTASection />
    </>
  );
}
