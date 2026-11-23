import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import { ServiceHero, ServiceSection, RelatedLinks } from "@/components/services/ServiceBlocks";
import type { RelatedLink } from "@/components/services/ServiceBlocks";

const services: RelatedLink[] = [
  {
    href: "/services/shopify-dropshipping",
    label: "Shopify dropshipping store setup",
    desc: "A ready-to-sell dropshipping store: niche research, supplier sourcing, product import, store design and order automation.",
  },
  {
    href: "/services/shopify-development",
    label: "Shopify store development",
    desc: "A full store build with theme setup, products, payments, shipping and basic SEO, plus ongoing management if you want it.",
  },
  {
    href: "/services/shopify-redesign",
    label: "Shopify store redesign",
    desc: "A redesign of an existing store: clearer layout, faster pages and a better mobile experience.",
  },
  {
    href: "/services/shopify-theme-development",
    label: "Shopify theme development",
    desc: "A custom theme built from scratch on Online Store 2.0 to match your brand.",
  },
  {
    href: "/services/shopify-app-development",
    label: "Shopify app development",
    desc: "Custom apps and integrations for needs that off-the-shelf apps do not cover.",
  },
  {
    href: "/services/shopify-marketing",
    label: "Shopify store marketing",
    desc: "SEO, Google Ads, Meta Ads and email marketing, planned and managed by one team.",
  },
];

const faqs = [
  {
    question: "How long does it take to build a Shopify store?",
    answer: "It depends on the number of products and how much custom work is needed. A custom theme or a redesign takes longer than a standard store setup. We give you a written timeline before we start.",
  },
  {
    question: "Do you help with product sourcing and niche selection?",
    answer: "Yes. For dropshipping stores we research niches and products and look at competition, margins and trends before we recommend anything.",
  },
  {
    question: "Can you redesign my existing Shopify store?",
    answer: "Yes. We audit your current store, find where visitors drop off, and plan the redesign. Your existing products and data stay in place.",
  },
  {
    question: "When is a custom Shopify theme worth it?",
    answer: "A custom theme makes sense when a ready-made theme cannot show your products the way you need, or when you rely on many apps to fill gaps. For a new store, a good ready-made theme is often enough, and we will tell you so.",
  },
  {
    question: "Do you offer ongoing Shopify store management?",
    answer: "Yes. We offer ongoing marketing, advertising management, SEO, content and store maintenance.",
  },
  {
    question: "Why Shopify instead of selling only on marketplaces?",
    answer: "On your own Shopify store you control the brand, the customer list and the store experience. The trade-off is that you must bring your own traffic, which a marketplace gives you. Many sellers do both.",
  },
];

export default function ShopifyPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Shopify services"
        title="Shopify development and marketing services"
        lead="Shopify services in one place for your own brand: dropshipping store setup, store development, redesign, custom theme and app development, and marketing."
        primaryLabel="Ask for a quote"
        primaryHref="/contact"
        note="We are an independent agency and not part of Shopify."
      />

      <ServiceSection eyebrow="About the platform" title="Your own store, your own brand" tint>
        <div style={{ maxWidth: 760, display: "grid", gap: 14, color: "var(--color-text-light)" }}>
          <p>
            Shopify is a hosted platform for running your own online store. Unlike a marketplace listing, the store,
            the brand and the customer data are yours.
          </p>
          <p>
            It comes with themes, apps and built-in payments, so it works for a small dropshipping store as well as
            for a larger brand with a big catalog.
          </p>
          <p>
            Gosellify builds, redesigns and markets Shopify stores. We quote each project before we start, so you
            know the price and the timeline.
          </p>
        </div>
      </ServiceSection>

      <RelatedLinks title="Our Shopify services" links={services} />

      <ServiceBenefits />

      <ServiceFAQ faqs={faqs} title="Questions about our Shopify services" tint />

      <CTASection />
    </>
  );
}
