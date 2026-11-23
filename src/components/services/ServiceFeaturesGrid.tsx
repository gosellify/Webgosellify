import { FeatureList, ServiceSection } from "@/components/services/ServiceBlocks";
import type { TitledItem } from "@/components/services/ServiceBlocks";

const features: { title: string; description: string }[] = [
  { title: "Product research", description: "We look for products with steady demand and check cost, fees and restrictions before anything is listed." },
  { title: "Listings", description: "Titles, descriptions, attributes and images are written and kept up to date by our team." },
  { title: "Pricing", description: "Prices are reviewed against cost, fees and competing offers so a sale is not made at a loss." },
  { title: "Order fulfillment", description: "Orders are processed daily. Stock that passes through our US warehouses gets same-day prep and shipping." },
  { title: "Returns", description: "Returned items are received, checked and restocked or written off, and the result is recorded against the order." },
  { title: "Customer messages", description: "Buyer questions and complaints are answered by our support team in your store's name." },
  { title: "Account health", description: "We review performance metrics, listing issues and policy notices daily and act on them." },
  { title: "Profit and loss per order", description: "Product cost, marketplace fees, shipping and prep are recorded per order, with refunds included." },
  { title: "A named manager", description: "One person on our team is your contact. They answer your questions and report on the store." },
];

const cards: TitledItem[] = features.map((feature) => ({ title: feature.title, desc: feature.description }));

/* What store management includes: nine cards with icon tiles. */
export default function ServiceFeaturesGrid() {
  return (
    <ServiceSection
      eyebrow="Included"
      title="What store management includes"
      lead="The same daily work applies to every store we manage, whichever marketplace it is on."
      tint
    >
      <FeatureList items={cards} cols={3} />
    </ServiceSection>
  );
}
