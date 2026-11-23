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

const differences: TitledItem[] = [
  { title: "Buyers expect original work", desc: "Etsy is built around handmade, vintage and custom items. Generic resale products do not belong there, so we work with original designs." },
  { title: "Etsy search has its own logic", desc: "Tags, titles, attributes, listing quality and shop history all matter. A listing written for Amazon does not carry over." },
  { title: "Print-on-demand", desc: "With print-on-demand, an item such as a shirt, mug or print is made only when it is ordered and is shipped by the production partner." },
  { title: "Niches matter", desc: "A shop does better when it serves one clear niche than when it lists a bit of everything." },
];

const whatYouGet: TitledItem[] = [
  { title: "Shop setup and branding", desc: "Shop creation with policies, banner, branding and an about section." },
  { title: "Product listing creation", desc: "Listings with mockups, clear descriptions and considered pricing." },
  { title: "Etsy SEO", desc: "Keyword research, long-tail titles, all available tags used and accurate attributes." },
  { title: "Print-on-demand setup", desc: "Connection to a print-on-demand provider such as Printful, Printify or Gooten, chosen for quality and margin in your niche." },
  { title: "Order fulfillment", desc: "Orders routed to the production partner, tracking uploaded and quality followed up." },
  { title: "Customer service", desc: "Buyer messages answered, returns handled and refunds processed." },
  { title: "Etsy Ads and marketing", desc: "Ad budget management, seasonal sale planning and coupon campaigns." },
  { title: "Growth", desc: "New product lines and niches, added from what the shop's own data shows." },
];

const steps: TitledItem[] = [
  { title: "Strategy and setup", desc: "We research your niche, set up the Etsy shop and plan the first products." },
  { title: "Design and list", desc: "Our team creates original designs and mockups and writes the listings." },
  { title: "Launch and promote", desc: "Products go live, with Etsy Ads if you choose. Orders route to the print-on-demand partner." },
  { title: "Manage and add", desc: "We add products, adjust ad spend and keep the shop's service metrics in order." },
];

const comparison: Cell[][] = [
  ["Etsy search optimization", "Included", "You do it", "Varies by agency"],
  ["Print-on-demand integration and management", "Included", "You set it up", "Varies by agency"],
  ["Original design creation", "By our own team", "You design", "Varies by agency"],
  ["Tags and attributes per listing", "Included", "You do it", "Varies by agency"],
  ["Work toward Star Seller criteria", "Included, badge decided by Etsy", "You do it", "Varies by agency"],
  ["Etsy Ads campaign management", "Included", "You do it", "Varies by agency"],
  ["Seasonal planning", "Included", "You do it", "Varies by agency"],
  ["Customer service and review follow-up", "Included", "Your time", "Varies by agency"],
  ["A named account manager", "Yes", "Not applicable", "Varies by agency"],
  ["WhatsApp support", "Yes", "Not applicable", "Varies by agency"],
];

const faqs = [
  {
    question: "Is dropshipping allowed on Etsy?",
    answer: "Etsy has its own rules about what may be sold as handmade and about working with production partners, so read its current seller policy before you start. The model we use is print-on-demand with original designs, where a production partner makes the item. We do not do generic retail dropshipping on Etsy.",
  },
  {
    question: "Do I need any design skills?",
    answer: "No. Our design team creates the product designs. You approve them before we upload.",
  },
  {
    question: "How is Etsy SEO different from Amazon or Google?",
    answer: "Etsy search looks at how well a listing matches the query, the listing's quality, the shop's history and the buyer experience. Tags and titles carry a lot of weight. We write each listing for Etsy specifically.",
  },
  {
    question: "How long until I see my first sale?",
    answer: "We cannot promise a date. A new shop needs time for its listings to be found, and some niches move faster than others. We show you views, visits and orders so you can follow progress.",
  },
  {
    question: "What products do you list on Etsy?",
    answer: "Typical print-on-demand products are custom shirts, personalized gifts such as mugs and tumblers, wall art prints, tote bags and home decor. We choose products from search demand in your niche.",
  },
  {
    question: "How much does it cost to start?",
    answer: "Etsy charges listing and transaction fees. Check the current figures on Etsy's fees page. With print-on-demand you do not buy stock in advance. You need a budget for our service and, if you want ads, an Etsy Ads budget.",
  },
  {
    question: "What is Star Seller?",
    answer: "Star Seller is a badge Etsy gives to shops that meet its service criteria for shipping, replies and reviews. Etsy sets the criteria and decides who gets the badge. We manage the metrics, but we cannot promise the badge.",
  },
  {
    question: "Can you manage my existing Etsy shop?",
    answer: "Yes. We audit your listings, fix titles, tags and attributes, improve photos and plan new products. We do not promise a traffic or sales increase.",
  },
];

export default function EtsyDropshippingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Etsy shop management"
        title="Etsy dropshipping and shop management service"
        lead="Etsy shop management with print-on-demand: original designs made by our team, listings written for Etsy search, order fulfillment through a production partner and daily shop operations."
        points={["Original designs", "No stock bought in advance", "Listings written for Etsy search", "Daily shop operations"]}
        primaryLabel="Talk to us about your shop"
        primaryHref="/contact"
        note="We are an independent agency and not part of Etsy. We do not promise sales, profit or a badge."
      />

      <ServiceSection eyebrow="About the marketplace" title="Why Etsy is different from other marketplaces" tint>
        <FeatureList items={differences} />
        <div style={{ marginTop: 28 }}>
          <ServiceNote title="Read Etsy's seller policy first">
            <p>
              Etsy has rules about what counts as handmade, about working with production partners and about what a
              shop must disclose. Read the current policy on Etsy&apos;s website. We do not claim that any model is
              approved by Etsy.
            </p>
          </ServiceNote>
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What we handle for your Etsy shop">
        <FeatureList items={whatYouGet} />
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="From setup to daily management" tint>
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify, doing it yourself, or another agency" lead="A plain list of who does what. Ask any agency you consider the same questions.">
        <PlainTable columns={["What you need", "Gosellify", "Doing it yourself", "Other agencies"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Etsy shop management" tint />

      <RelatedLinks
        links={[
          { href: "/services/ebay-dropshipping", label: "eBay store management" },
          { href: "/services/shopify-dropshipping", label: "Shopify dropshipping store setup" },
          { href: "/pricing", label: "How our pricing works" },
        ]}
      />

      <CTASection />
    </>
  );
}
