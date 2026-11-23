import { FeatureList, ServiceSection } from "@/components/services/ServiceBlocks";
import type { TitledItem } from "@/components/services/ServiceBlocks";

const benefitItems: { title: string; content: string }[] = [
  {
    title: "The store stays yours",
    content:
      "The seller account is in your name and under your control. We work inside it with the access you give us, and you can remove that access at any time.",
  },
  {
    title: "One team does the daily work",
    content:
      "Our operations team in Multan, Pakistan handles product research, listings, orders, returns and buyer messages. You do not need to hire or train anyone.",
  },
  {
    title: "You see the numbers we see",
    content:
      "Every managed store runs on the Gosellify Portal, connected through the marketplace's official API. Sales, costs and profit are tracked per order.",
  },
  {
    title: "You pay from profit",
    content:
      "Managed stores are on a profit share. There is no management fee until the store makes profit, no contract, and you can cancel anytime.",
  },
  {
    title: "You can reach us",
    content:
      "Gosellify LLC, 30 N Gould St Ste R, Sheridan, WY 82801. Phone and WhatsApp +1 307 393 8789. Email info@gosellify.com.",
  },
];

const cards: TitledItem[] = benefitItems.map((item) => ({ title: item.title, desc: item.content }));

export default function ServiceBenefits() {
  return (
    <ServiceSection eyebrow="Working with us" title="What to expect from Gosellify">
      <FeatureList items={cards} cols={3} />
    </ServiceSection>
  );
}
