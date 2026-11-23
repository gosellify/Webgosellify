import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import { ServiceHero, ServiceSection, TwoColRows, FeatureList, PlainTable, RelatedLinks } from "@/components/services/ServiceBlocks";
import type { Cell, TextRow, TitledItem } from "@/components/services/ServiceBlocks";

const changes: TextRow[] = [
  { left: "Page speed", right: "We compress images, remove unused code and apps, and add lazy loading, so pages load faster." },
  { left: "Path to purchase", right: "We place calls to action clearly, simplify navigation and checkout steps, and add the trust information buyers look for." },
  { left: "Mobile experience", right: "We design for the phone first, with touch-friendly navigation, and then for larger screens." },
];

const included: TitledItem[] = [
  { title: "UX audit", desc: "A review of your current store using analytics, heatmaps, session recordings and user flows to find where visitors leave." },
  { title: "Conversion-focused layout", desc: "Clear calls to action, trust information and a simpler checkout flow." },
  { title: "Speed optimization", desc: "Image compression, code cleanup, lazy loading, an app audit and removal of unused third-party scripts." },
  { title: "Mobile-first design", desc: "A responsive design that is planned for phone screens first." },
  { title: "Brand alignment", desc: "Consistent typography, colors, imagery and voice on every page." },
  { title: "Product and checkout pages", desc: "Better galleries, clearer copy and cross-sell recommendations on product pages, and fewer steps at checkout." },
];

const comparison: Cell[][] = [
  ["UX audit before design", "Included", "Varies by provider"],
  ["Focus on conversion, not only looks", "Yes", "Varies by provider"],
  ["Speed optimization", "Included", "Varies by provider"],
  ["Mobile-first approach", "Yes", "Varies by provider"],
  ["URLs and SEO data kept during redesign", "Yes", "Varies by provider"],
  ["Work done on a duplicate theme", "Yes, your live store keeps running", "Ask each provider"],
  ["Timeline", "Written after the audit", "Ask each provider"],
  ["WhatsApp support", "Yes", "Varies by provider"],
];

const faqs = [
  {
    question: "How long does a Shopify store redesign take?",
    answer: "It depends on the scope. A theme-based redesign is quicker than a custom one with new layouts and features. We give you a written timeline after the audit.",
  },
  {
    question: "Will I lose my SEO rankings during the redesign?",
    answer: "We keep existing URLs, set up redirects where a URL has to change, and carry over meta data and on-page SEO elements. That protects what you have. No one can promise that rankings will not move.",
  },
  {
    question: "Can you redesign my store without changing the theme?",
    answer: "Yes. We can work inside your existing theme by changing the CSS, Liquid templates and sections. If the theme is outdated or slow, we may suggest a newer one.",
  },
  {
    question: "How do you make sure the redesign helps conversions?",
    answer: "We start with an audit of your analytics and user behavior, and base design decisions on what the data shows. We do not promise a specific conversion rate.",
  },
  {
    question: "Will my store have downtime during the redesign?",
    answer: "We work on a duplicate theme, so your live store keeps running. When you approve the redesign, we publish the new theme.",
  },
  {
    question: "Do you provide mobile-responsive designs?",
    answer: "Yes. All our redesigns are planned for mobile first, and we test on several devices and screen sizes.",
  },
  {
    question: "What if I do not like the redesign?",
    answer: "You see design mockups before any development, with up to 3 rounds of revisions in the design phase. Your existing store is not touched until you approve the final version.",
  },
  {
    question: "Can you also improve my store speed during the redesign?",
    answer: "Yes. Speed work is part of every redesign: images, code, lazy loading and an audit of third-party apps.",
  },
];

export default function ShopifyRedesignPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Shopify redesign"
        title="Shopify store redesign and UX design service"
        lead="A redesign for a Shopify store that already has traffic: a UX audit based on your own data, a cleaner design and a mobile-first layout. Your live store keeps running while we work."
        points={["UX audit first", "Mobile-first layout", "Speed optimization", "URLs and SEO data kept"]}
        primaryLabel="Ask for a store audit"
        primaryHref="/contact"
        note="We are an independent agency and not part of Shopify. We do not promise a conversion rate or a sales increase."
      />

      <ServiceSection eyebrow="What changes" title="The three areas a redesign works on" tint>
        <TwoColRows leftHead="Area" rightHead="What we do" rows={changes} />
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What the redesign covers">
        <FeatureList items={included} />
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify and other redesign services" lead="A plain list. Ask any provider you consider the same questions." tint>
        <PlainTable columns={["What you need", "Gosellify", "Other redesign services"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about a Shopify redesign" />

      <RelatedLinks
        tint
        links={[
          { href: "/services/shopify-theme-development", label: "Custom Shopify theme development" },
          { href: "/services/shopify-marketing", label: "Shopify marketing" },
          { href: "/services/shopify", label: "All Shopify services" },
        ]}
      />

      <CTASection />
    </>
  );
}
