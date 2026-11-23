export type TemuFaq = { q: string; a: string; link?: { href: string; label: string; external?: boolean } };

export const temuFaqs: TemuFaq[] = [
  {
    q: "What is Temu store management?",
    a: "It is a done-for-you service for your Temu seller account. Our team handles product selection, listings, pricing, order fulfilment from US stock, customer messages, account health and reporting. You own the account, the stock and the payouts.",
  },
  {
    q: "Can US sellers sell on Temu?",
    a: "Yes. Temu has a sign-up path for United States sellers in its Seller Center, and trade press reported in November 2024 that US sellers no longer need an invitation to register. Temu reviews each application and decides who is accepted. Nobody outside Temu can promise an approval.",
    link: { href: "https://seller.temu.com/", label: "Temu Seller Center (official)", external: true },
  },
  {
    q: "What do I need to open a Temu seller account?",
    a: "Guides to the US sign-up flow list a business type, your legal business name, EIN and registered business address for a registered business, and an ID check of the business representative. Temu can ask for more, and the list can change, so confirm it in Seller Center before you apply. We help you prepare and check the application. We do not buy or sell seller accounts.",
    link: { href: "/services/seller-account-setup", label: "Seller account setup" },
  },
  {
    q: "Can I dropship on Temu?",
    a: "We do not offer dropshipping on Temu. The program for US sellers is built around local warehousing and delivery, and at least one trade guide says Temu does not officially support dropshipping. Our Temu service is only for sellers who hold, or will hold, their own inventory in the US.",
  },
  {
    q: "Do I need inventory in the US?",
    a: "For our service, yes. Orders are shipped from stock that is already in the US. If you do not have your own space, our US warehouses can receive, store, prep and ship it with same-day prep and shipping.",
    link: { href: "/services/3pl-warehouse", label: "See 3PL and warehousing" },
  },
  {
    q: "What does Temu automation mean?",
    a: "People use the phrase for a hands-off Temu store. In our case it means a real team does the daily work for you and tracks it in the Gosellify Portal. It does not mean bots, and it does not mean guaranteed income. Results depend on your products, prices and stock.",
  },
  {
    q: "How much does it cost to sell on Temu?",
    a: "We do not quote Temu fees here because terms can change and can differ by seller. Check the current terms inside Temu Seller Center before you list. For our own work, we use profit share: you pay from profit, with no contract.",
    link: { href: "/pricing", label: "See how our pricing works" },
  },
  {
    q: "Can you manage Temu together with my Amazon and Walmart stores?",
    a: "Yes. Many clients sell on more than one marketplace. We manage each store on its own, and the same US stock can serve orders from different stores when it sits in our warehouses.",
    link: { href: "/services", label: "See all services" },
  },
];
