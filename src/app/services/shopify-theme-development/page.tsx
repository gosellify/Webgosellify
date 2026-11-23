import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import { ServiceHero, ServiceSection, PlainTable, RelatedLinks } from "@/components/services/ServiceBlocks";
import type { Cell } from "@/components/services/ServiceBlocks";

const includedItems: string[] = [
  "Custom Liquid template development",
  "Online Store 2.0 JSON templates and app blocks",
  "Responsive design for mobile, tablet and desktop",
  "Custom homepage sections and blocks",
  "Product page with gallery and variants",
  "Collection page with filtering and sorting",
  "Cart drawer or cart page",
  "Header and footer with mega menu",
  "Blog templates and article pages",
  "Speed optimization",
  "Semantic HTML and schema markup for SEO",
  "Theme editor documentation and training",
];

const notIncludedItems: string[] = [
  "Ongoing content writing or copywriting",
  "Product photography or image creation",
  "Third-party app subscriptions",
  "Marketing campaign setup or management",
  "Inventory management or order fulfillment",
  "Domain purchase or hosting fees",
];

const comparison: Cell[][] = [
  ["Design", "Made for your brand only", "Shared with other stores that use the theme"],
  ["Online Store 2.0 architecture", "Yes", "Depends on the theme"],
  ["Custom sections and blocks", "Built to your needs", "What the theme offers"],
  ["Unused code", "Only what your store uses", "Features for many kinds of stores"],
  ["Cost", "Higher up front, quoted before we start", "Lower up front"],
  ["Time to launch", "Weeks", "Days"],
  ["Support", "30 days of bug fixes included", "From the theme's developer"],
];

function Column({ title, items, note }: { title: string; items: string[]; note?: string }) {
  return (
    <div style={{ minWidth: 0 }}>
      <h3 className="g-h3" style={{ paddingBottom: 10, borderBottom: "1px solid var(--color-dark)" }}>{title}</h3>
      <ul style={{ listStyle: "none" }}>
        {items.map((item) => (
          <li key={item} style={{ padding: "10px 0", borderBottom: "1px solid var(--color-line)", color: "var(--color-text-light)" }}>
            {item}
          </li>
        ))}
      </ul>
      {note ? <p className="typo-small" style={{ marginTop: 10 }}>{note}</p> : null}
    </div>
  );
}

const faqs = [
  {
    question: "Why get a custom theme instead of a pre-built one?",
    answer: "A custom theme is built for your products and customers, carries only the code your store uses, and can include features you would otherwise need apps for. It costs more and takes longer than a ready-made theme, so it suits stores that have outgrown one.",
  },
  {
    question: "How long does custom Shopify theme development take?",
    answer: "It depends on the number of templates and custom features. A custom theme is a project of several weeks. We give you a written timeline after we understand your requirements.",
  },
  {
    question: "Do you build themes on Online Store 2.0?",
    answer: "Yes. Our custom themes use Shopify Online Store 2.0 with JSON templates, app blocks and sections on every page, so you can change the store from the theme editor without touching code.",
  },
  {
    question: "Can I customize the theme myself after development?",
    answer: "Yes. We build the theme for the Shopify theme editor, with clear section settings and labels, and we give you documentation and training.",
  },
  {
    question: "Will the custom theme be fast and SEO-friendly?",
    answer: "We write minimal code, optimize assets, use semantic HTML and add structured data. Page speed also depends on your images and the apps you install afterwards.",
  },
  {
    question: "Do you convert Figma or PSD designs to Shopify themes?",
    answer: "Yes. We convert design files from Figma, Adobe XD, Sketch or PSD into working Shopify themes that follow the design closely and stay responsive.",
  },
  {
    question: "What about support after the theme is delivered?",
    answer: "You get 30 days of bug-fix support after delivery. For later needs we offer monthly maintenance, which can include theme updates and new features.",
  },
  {
    question: "Can you add features that standard themes do not have?",
    answer: "Yes. Examples are product configurators, advanced filtering, loyalty point displays, subscription flows and mega menus.",
  },
];

export default function ShopifyThemeDevelopmentPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Shopify theme development"
        title="Custom Shopify theme development service"
        lead="Custom Shopify themes built from scratch on Online Store 2.0: a design that matches your brand, fast pages and sections your team can edit without a developer."
        points={["Built on Online Store 2.0", "Responsive on every screen", "Sections you can edit yourself", "30 days of bug fixes after delivery"]}
        primaryLabel="Ask for a quote"
        primaryHref="/contact"
        note="We are an independent agency and not part of Shopify."
      />

      <ServiceSection eyebrow="Scope of work" title="What is included in a custom theme, and what is not" lead="Here is exactly what you get and what falls outside the scope." tint>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "28px 48px", maxWidth: 980 }}>
          <Column title="Included" items={includedItems} />
          <Column title="Not included" items={notIncludedItems} note="These can be added as separate services if needed." />
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="A custom theme and a pre-made theme" lead="A pre-made theme is the right choice for many new stores. This table shows the trade-off.">
        <PlainTable columns={["", "Custom theme", "Pre-made theme"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about custom Shopify themes" tint />

      <RelatedLinks
        links={[
          { href: "/services/shopify-redesign", label: "Shopify store redesign" },
          { href: "/services/shopify-app-development", label: "Custom Shopify app development" },
          { href: "/services/shopify", label: "All Shopify services" },
        ]}
      />

      <CTASection />
    </>
  );
}
