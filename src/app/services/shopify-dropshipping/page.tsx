import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import { ServiceHero, ServiceSection, TwoColRows, FeatureList, PlainTable, RelatedLinks } from "@/components/services/ServiceBlocks";
import type { Cell, TextRow, TitledItem } from "@/components/services/ServiceBlocks";

const problems: TextRow[] = [
  { left: "You do not know which niche to choose.", right: "We research niches using trend data, competition and margin calculations, and explain why we suggest one." },
  { left: "Suppliers are unreliable.", right: "We check each supplier for product quality, shipping speed and reliability before connecting them to your store." },
  { left: "The store looks unprofessional.", right: "We design a branded store with a logo, consistent colors and a clear layout." },
  { left: "No traffic after launch.", right: "We set up SEO basics and social sales channels. Paid ads are available as a separate service. A new store still has to earn its traffic." },
  { left: "Order fulfillment is manual work.", right: "We set up order automation, so orders go to the supplier and tracking syncs back to the customer." },
  { left: "The store cannot grow past first sales.", right: "We set up analytics and the basic structure for upsells and retargeting, so you can build on it later." },
];

const included: TitledItem[] = [
  { title: "Niche and product research", desc: "Product research using trend analysis, competitor study and margin calculations." },
  { title: "Supplier checks and sourcing", desc: "Suppliers from AliExpress, CJ Dropshipping, Spocket and US-based sources, each checked for quality, shipping speed and reliability." },
  { title: "Product import", desc: "Bulk product import with titles, descriptions, images and variants written for your store." },
  { title: "Automated fulfillment", desc: "Order processing set up so orders are sent to suppliers and tracking numbers sync automatically." },
  { title: "Branded store design", desc: "A storefront with your logo, brand colors and a clear layout." },
  { title: "Sales channel integration", desc: "Connection to Facebook Shop, Instagram Shopping, TikTok and Google Shopping." },
];

const comparison: Cell[][] = [
  ["Niche and product research", "Included", "You do it"],
  ["Supplier checks", "Included", "You find and check suppliers"],
  ["Branded store design", "Included", "You design it or use a template"],
  ["Automated fulfillment setup", "Included", "You set it up"],
  ["App configuration", "Included", "You do it"],
  ["Timeline", "Written before we start", "Your own pace"],
  ["Support after launch", "30 days included", "Not applicable"],
  ["WhatsApp support", "Yes", "Not applicable"],
];

const faqs = [
  {
    question: "What is Shopify dropshipping and how does it work?",
    answer: "You sell products in your own online store without holding stock. When a customer orders, the supplier ships the product to the customer. You pay the supplier after the sale, so you do not buy inventory in advance. You still carry the cost of ads, apps and refunds.",
  },
  {
    question: "How long does it take to set up a dropshipping store?",
    answer: "It depends on the number of products and the amount of customization. We give you a written timeline before we start. Setup includes store design, product import, supplier setup, app configuration and testing.",
  },
  {
    question: "Do you help with finding products?",
    answer: "Yes. Our research team looks at trends, competition and search demand to find products with a workable margin after product cost, shipping and transaction fees. No one can promise that a product will sell.",
  },
  {
    question: "Which suppliers do you work with?",
    answer: "AliExpress, CJ Dropshipping, Spocket, Zendrop and US or EU based suppliers. We check each supplier before adding them to your store and prefer the ones that ship faster.",
  },
  {
    question: "Can order fulfillment be automated?",
    answer: "Yes. We set it up with apps such as DSers or Zendrop. When a customer orders, the order goes to the supplier with the shipping details, and tracking is updated for the customer.",
  },
  {
    question: "What profit can I expect with dropshipping?",
    answer: "We do not promise a margin or sales. Profit depends on the niche, the product, your ad costs and refunds. We calculate the expected margin per product so you can decide with real numbers.",
  },
  {
    question: "Do you provide marketing for the store?",
    answer: "The dropshipping service covers store setup and product sourcing. Facebook Ads, Google Ads and social media marketing are separate services.",
  },
  {
    question: "What happens after my store is launched?",
    answer: "You get 30 days of support for any issues. After that, we offer monthly management for order processing, customer support, product updates and store improvements.",
  },
];

export default function ShopifyDropshippingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Shopify dropshipping"
        title="Shopify dropshipping store setup service"
        lead="A ready-to-sell Shopify dropshipping store: product selection, checked suppliers, store design and automated order fulfillment, with no inventory bought in advance."
        points={["Product and niche research", "Checked suppliers", "Automated order fulfillment", "30 days of support after launch"]}
        primaryLabel="Ask for a quote"
        primaryHref="/contact"
        note="We are an independent agency and not part of Shopify. We build the store. We do not promise sales or profit."
      />

      <ServiceSection eyebrow="Where new stores get stuck" title="Common dropshipping problems and what we do about them" tint>
        <TwoColRows leftHead="The problem" rightHead="What we do" rows={problems} />
      </ServiceSection>

      <ServiceSection eyebrow="Included" title="What the store setup covers">
        <FeatureList items={included} />
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify and building it yourself" lead="Building the store yourself costs less money and more time. Here is what each route involves." tint>
        <PlainTable columns={["What you need", "Gosellify", "Building it yourself"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Shopify dropshipping" />

      <RelatedLinks
        tint
        links={[
          { href: "/services/shopify-marketing", label: "Shopify marketing" },
          { href: "/services/shopify-development", label: "Shopify store development" },
          { href: "/services/shopify", label: "All Shopify services" },
        ]}
      />

      <CTASection />
    </>
  );
}
