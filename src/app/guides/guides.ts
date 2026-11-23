export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  tag: string;
  minutes: number;
  reviewed: string;
}

/** Add a guide here and create src/app/guides/<slug>/page.tsx for it. */
export const guides: GuideMeta[] = [
  {
    slug: "walmart-marketplace-approval",
    title: "How to get approved on Walmart Marketplace",
    description: "What Walmart asks for, how the application works, and the common reasons sellers get rejected.",
    tag: "Walmart",
    minutes: 8,
    reviewed: "November 2026",
  },
  {
    slug: "sell-on-temu-us-sellers",
    title: "How to sell on Temu as a US seller",
    description: "How the Temu local seller program works, what you need to join, and how orders are fulfilled.",
    tag: "Temu",
    minutes: 7,
    reviewed: "November 2026",
  },
  {
    slug: "walmart-wfs-vs-amazon-fba",
    title: "Walmart WFS vs Amazon FBA: how they compare",
    description: "A plain comparison of the two fulfillment programs: who can join, what they handle, and how fees are structured.",
    tag: "Comparison",
    minutes: 9,
    reviewed: "November 2026",
  },
  {
    slug: "amazon-wholesale-vs-arbitrage",
    title: "Amazon wholesale vs online arbitrage: which fits your capital",
    description: "How the two models work, what each one needs from you, and the risks to know before you start.",
    tag: "Amazon",
    minutes: 8,
    reviewed: "November 2026",
  },
];
