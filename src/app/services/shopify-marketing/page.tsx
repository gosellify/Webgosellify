import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import { ServiceHero, ServiceSection, FeatureList, PlainTable, RelatedLinks } from "@/components/services/ServiceBlocks";
import type { Cell, TitledItem } from "@/components/services/ServiceBlocks";

const marketingChannels: TitledItem[] = [
  { title: "SEO", desc: "On-page, technical and content SEO to build organic traffic over time and reduce dependence on paid ads." },
  { title: "Google Ads", desc: "Search, Shopping, Display and Performance Max campaigns, with regular bid and negative keyword work." },
  { title: "Meta Ads", desc: "Facebook and Instagram campaigns with audience targeting, creative testing and retargeting." },
  { title: "Email marketing", desc: "Automated flows in Klaviyo or your own tool: welcome series, abandoned cart, post-purchase, win-back and promotions." },
  { title: "TikTok Ads", desc: "Short video ad campaigns with conversion tracking." },
  { title: "SMS marketing", desc: "Text campaigns for sales, cart recovery and offers to subscribers who agreed to receive them." },
];

const comparison: Cell[][] = [
  ["Work on Shopify stores", "Our regular work", "Varies by agency"],
  ["SEO, ads and email planned together", "Yes", "Varies by agency"],
  ["Analytics and pixel setup", "Included", "Varies by agency"],
  ["Ad creative design", "Included", "Varies by agency"],
  ["Email automation flows", "Included", "Varies by agency"],
  ["Reporting", "Monthly, with spend and return per channel", "Ask each agency"],
  ["Contract", "No long-term contract", "Ask each agency"],
];

const faqs = [
  {
    question: "Which marketing channel is best for my Shopify store?",
    answer: "It depends on your product, audience and budget. Meta Ads suit visual products. Google Ads reach people who are already searching. SEO builds traffic slowly over time. We look at your store and suggest a mix.",
  },
  {
    question: "How much should I spend on marketing?",
    answer: "We suggest a starting ad spend of at least $500 to $1,000 per month for each channel, so there is enough data to learn from. Our management fee is separate from ad spend.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Paid ads produce data from the first days, but a profitable campaign usually takes weeks of testing. SEO takes months. We do not promise results by a date, and we report progress regularly.",
  },
  {
    question: "Do you create ad creatives and copy?",
    answer: "Yes. Our team designs ad creatives, edits video and writes copy, and tests several versions against each other.",
  },
  {
    question: "How do you track and measure performance?",
    answer: "We set up the Meta Pixel, Google Analytics 4, Google Tag Manager and Shopify analytics, and track return on ad spend, cost per order and conversion rate for each channel. You receive a monthly report.",
  },
  {
    question: "Can you help with email marketing automation?",
    answer: "Yes. We set up email automation in Klaviyo or the platform you prefer: welcome series, abandoned cart, post-purchase, win-back, browse abandonment and promotional campaigns for audience segments.",
  },
  {
    question: "Do you offer Shopify-specific SEO?",
    answer: "Yes. We handle technical SEO such as canonical tags, site speed, structured data and URL structure, and on-page SEO such as product descriptions, collection pages, blog content and meta tags.",
  },
  {
    question: "What return on ad spend can I expect?",
    answer: "We do not promise a return on ad spend. It depends on your product, price, margin and market. We set a target from your margins and report the real figure every month.",
  },
];

export default function ShopifyMarketingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Shopify marketing"
        title="Shopify marketing: SEO, Google Ads and Meta Ads"
        lead="Shopify marketing under one roof: SEO, Google Ads, Meta Ads and email marketing, planned and managed by one team. No long-term contract, and a monthly report that shows spend and return."
        points={["SEO", "Google Ads and Meta Ads", "Email marketing", "No long-term contract"]}
        primaryLabel="Ask for a marketing review"
        primaryHref="/contact"
        note="We are an independent agency. We do not promise traffic, sales or a return on ad spend."
      />

      <ServiceSection eyebrow="Channels" title="Marketing channels we cover" tint>
        <FeatureList items={marketingChannels} />
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify and a general marketing agency" lead="A plain list. Ask any agency you consider the same questions.">
        <PlainTable columns={["What you need", "Gosellify", "General marketing agencies"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Shopify marketing" tint />

      <RelatedLinks
        links={[
          { href: "/services/shopify-redesign", label: "Shopify store redesign" },
          { href: "/services/shopify-dropshipping", label: "Shopify dropshipping store setup" },
          { href: "/services/shopify", label: "All Shopify services" },
        ]}
      />

      <CTASection />
    </>
  );
}
