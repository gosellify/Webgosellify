export type HomeFaq = { q: string; a: string; link?: { href: string; label: string } };

export const homeFaqs: HomeFaq[] = [
  {
    q: "How do you get paid?",
    a: "We work on profit share. Our share is paid from the profit after each month is closed, so there is no management fee until your store makes profit.",
    link: { href: "/pricing", label: "How pricing works" },
  },
  {
    q: "Do you guarantee profit?",
    a: "No. Nobody can honestly guarantee sales or profit on a marketplace. What we can promise is the daily work, and that you will see every order and every cost, including the months that go badly.",
  },
  {
    q: "Can I see my store's numbers?",
    a: "Yes. You get your own login to the Gosellify Portal. It shows each order with its fees, product cost and profit, a statement for every month, and the account health of your store.",
  },
  {
    q: "How much capital do I need to start?",
    a: "Plan for $3,000 to $5,000 of working capital, depending on the business model. Marketplaces pay you after orders are delivered, so you need funds to buy products when customers order.",
  },
  {
    q: "Do I need an existing seller account?",
    a: "You need an approved seller account in your own name to sell on a marketplace. If you do not have one yet, we guide you through the application step by step. We do not buy or sell accounts.",
    link: { href: "/services/seller-account-setup", label: "Seller account setup" },
  },
  {
    q: "Can you manage more than one marketplace for me?",
    a: "Yes. We manage each store on its own, with a plan made for that marketplace. An owner who sells on both Amazon and Walmart sees both stores in the same portal.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There is no contract and no lock-in period. You are free to leave whenever you choose, and the seller account stays yours.",
  },
];
