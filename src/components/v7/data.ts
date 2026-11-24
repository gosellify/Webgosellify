/**
 * Facts the home page repeats. Keep them true: every number here comes from
 * the Gosellify Portal (all managed Walmart stores, Nov 1-22, 2026) or from
 * company records. Update them here, in one place, when they change.
 */
export const WHATSAPP = "https://wa.me/13073938789";
export const PHONE = "+1 307 393 8789";
export const PHONE_HREF = "tel:+13073938789";
export const EMAIL = "info@gosellify.com";
export const START_HREF = "/get-started";

export const PROOF = [
  { value: "3,500+", label: "Orders handled for client stores", note: "Nov 1-22, 2026" },
  { value: "$90K+", label: "Client sales in those 3 weeks", note: "All managed stores" },
  { value: "100-200", label: "Parcels shipped every working day", note: "From our warehouse" },
  { value: "2024", label: "Gosellify LLC, a US company", note: "Registered in Wyoming" },
] as const;

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What does a Walmart or Amazon store management service include?",
    a: "Product research, listing creation and optimization, pricing, order processing, buying the product, prep, packing and shipping, tracking upload, returns, customer messages and daily account health checks. You see all of it in your own Gosellify Portal login.",
  },
  {
    q: "How do I pay Gosellify?",
    a: "Most clients pay a share of the profit their store makes, agreed before we start. Some accounts have a fixed monthly fee instead, or both. At the start of each month you get a statement that shows every sale and cost, and one invoice. A month with a loss has no profit share, and the loss is carried into the next month.",
  },
  {
    q: "How much money do I need to start?",
    a: "Plan for at least $3,000 to $5,000 of working capital. Marketplaces pay you some days after delivery, so this money buys products when orders come in. More capital lets the store grow faster.",
  },
  {
    q: "Do I need my own seller account?",
    a: "Yes. The seller account, the brand and the payouts stay in your name. If you do not have an account yet, we help you set up the company, EIN and the Walmart or Amazon application.",
  },
  {
    q: "Which marketplaces do you manage?",
    a: "Walmart and Amazon are our main focus. We also run Temu, eBay, Etsy and Shopify stores, and we build and fix Shopify sites.",
  },
  {
    q: "How fast can my store start selling?",
    a: "With an approved account and capital ready, the first listings usually go live in the first one to two weeks. Results depend on your category, capital and the marketplace, so we do not promise a fixed profit.",
  },
  {
    q: "Can I stop at any time?",
    a: "Yes. There is no long-term contract. You keep the account, the listings and the data.",
  },
  {
    q: "Can you help with a suspended account?",
    a: "Yes. We look for the root cause, write the plan of action and help you send the appeal. No one can promise reinstatement, but a clear, honest appeal gives you the best chance.",
  },
];
