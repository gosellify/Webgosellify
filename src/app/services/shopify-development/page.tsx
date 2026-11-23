import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import { ServiceHero, ServiceSection, FeatureList, PlainList, PlainTable, RelatedLinks } from "@/components/services/ServiceBlocks";
import type { Cell, TitledItem } from "@/components/services/ServiceBlocks";

const included: TitledItem[] = [
  { title: "Store setup and configuration", desc: "Domain, theme installation, navigation, pages, policies, shipping zones and tax settings." },
  { title: "Theme customization", desc: "A Shopify theme adjusted to your brand: colors, fonts, layouts, custom sections and homepage design." },
  { title: "App setup", desc: "Apps for email marketing, reviews, upsells, loyalty programs and subscriptions installed and configured." },
  { title: "Payment gateway setup", desc: "Shopify Payments, PayPal, Stripe or a regional gateway, with currencies and tax settings for the places you sell." },
  { title: "SEO and speed basics", desc: "Meta titles and descriptions, image alt text, sitemap submission, Google Search Console setup and image optimization." },
  { title: "Product listing", desc: "Bulk import or manual entry, with titles, descriptions, images and variants." },
  { title: "Migration", desc: "Moving products, customers, orders and URL redirects from WooCommerce, Magento, BigCommerce or another platform." },
  { title: "Ongoing management", desc: "Monthly management on request: product updates, order processing, customer support, design changes and app updates." },
];

const projectTypes: string[] = [
  "New store builds from scratch: theme, products, payments, shipping and launch setup",
  "Customization of premium and free themes to match a brand",
  "Multi-app setups, for example email marketing, subscriptions and loyalty apps",
  "Platform migrations from WooCommerce, Magento, BigCommerce and others",
];

const comparison: Cell[][] = [
  ["Work on ecommerce stores only", "Yes", "Varies by freelancer"],
  ["Full store setup from start to finish", "Included", "Varies by freelancer"],
  ["Payment gateway configuration", "Included", "Varies by freelancer"],
  ["SEO basics", "Included", "Varies by freelancer"],
  ["Speed optimization", "Included", "Varies by freelancer"],
  ["Timeline", "Written before we start", "Ask each freelancer"],
  ["Support after launch", "30 days included", "Ask each freelancer"],
  ["WhatsApp support", "Yes", "Varies by freelancer"],
];

const faqs = [
  {
    question: "How long does it take to build a Shopify store?",
    answer: "It depends on the size of the catalog and the amount of custom work. We give you a written timeline before we start. Custom features or a large catalog take longer than a standard setup.",
  },
  {
    question: "Do you handle product listing and content?",
    answer: "Yes. We import products in bulk by CSV or enter them by hand. Each listing gets a title, description, images and variants.",
  },
  {
    question: "Can you migrate my store from another platform to Shopify?",
    answer: "Yes. We migrate stores from WooCommerce, Magento, BigCommerce, Wix, Squarespace and other platforms, and set up URL redirects so existing links keep working.",
  },
  {
    question: "What payment gateways do you set up?",
    answer: "Shopify Payments, PayPal, Stripe and regional gateways your business needs. Which gateways are available to you depends on your country and company, and the gateway decides on approval.",
  },
  {
    question: "Do you offer ongoing store management?",
    answer: "Yes. Monthly management can include product updates, order processing, customer support, design changes, app management and performance checks.",
  },
  {
    question: "What is included in the SEO setup?",
    answer: "Keyword research, meta titles and descriptions for the main pages, image alt text, sitemap submission, Google Search Console setup, schema markup and image optimization. We do not promise rankings.",
  },
  {
    question: "Can you integrate third-party apps and tools?",
    answer: "Yes. We install and configure Shopify apps for email marketing, reviews, upsells, subscriptions and loyalty programs, and we can build custom API integrations.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Every project includes 30 days of support for bug fixes, small adjustments and questions. After that, we offer monthly maintenance.",
  },
];

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Shopify development"
        title="Shopify store development and management"
        lead="We build Shopify stores and manage them afterwards if you want: store build, design, app setup and ongoing support, for a one-product brand or a large catalog."
        points={["Full store setup", "Theme customization", "App and payment setup", "30 days of support after launch"]}
        primaryLabel="Ask for a quote"
        primaryHref="/contact"
        note="We are an independent agency and not part of Shopify."
      />

      <ServiceSection eyebrow="Included" title="What the store build covers" tint>
        <FeatureList items={included} />
      </ServiceSection>

      <ServiceSection eyebrow="Our work" title="Kinds of Shopify projects we take on">
        <PlainList items={projectTypes} />
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify and hiring a freelancer" lead="A freelancer can be the right choice for a small job. Ask the same questions either way." tint>
        <PlainTable columns={["What you need", "Gosellify", "A freelancer"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Shopify store development" />

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
