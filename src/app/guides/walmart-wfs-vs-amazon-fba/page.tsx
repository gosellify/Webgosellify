import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import GuideLayout, { TocItem } from "@/components/guides/GuideLayout";

const TITLE = "Walmart WFS vs Amazon FBA: how they compare";
const DESCRIPTION =
  "A plain comparison of the two fulfillment programs: who can join, what they handle, and how fees are structured.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
};

const SRC = {
  wfsOverview:
    "https://marketplacelearn.walmart.com/guides/Getting%20started/Walmart%20Fulfillment%20Services%20(WFS)/walmart-fulfillment-services-wfs-overview",
  wfsFees: "https://marketplacelearn.walmart.com/guides/WFS-fees",
  wfsPricing: "https://marketplace.walmart.com/walmart-fulfillment-services-pricing/",
  walmartReferral: "https://marketplace.walmart.com/referral-fees/",
  walmartMcs: "https://marketplace.walmart.com/multichannel-solutions",
  fba: "https://sell.amazon.com/fulfillment-by-amazon",
  fbaFeesGuide: "https://sell.amazon.com/blog/fba-fees-guide",
  amazonPricing: "https://sell.amazon.com/pricing",
  amazonMcf: "https://sell.amazon.com/fulfillment-by-amazon/fba-multi-channel",
};

const toc: TocItem[] = [
  { id: "answer", label: "The short answer" },
  { id: "how-wfs-works", label: "How Walmart WFS works" },
  { id: "how-fba-works", label: "How Amazon FBA works" },
  { id: "comparison", label: "Side-by-side comparison" },
  { id: "fees", label: "WFS fees and FBA fees" },
  { id: "risks", label: "Risks and policy points" },
  { id: "other-channels", label: "Other channels and third-party fulfilment" },
  { id: "who-fits", label: "Who each program fits" },
  { id: "managed", label: "When a managed service helps" },
  { id: "faq", label: "FAQ" },
];

interface Faq {
  q: string;
  a: string;
}

const faqs: Faq[] = [
  {
    q: "Is WFS cheaper than FBA?",
    a: "It depends on the product. Both programs price fulfillment by size and weight and charge storage by cubic foot, so the same item can come out cheaper on one and dearer on the other. Walmart has no monthly seller fee, while the Amazon Professional plan is $39.99 a month. Run your own item through both official calculators before you decide.",
  },
  {
    q: "Can I use WFS and FBA at the same time?",
    a: "Yes. They are separate programs on separate marketplaces. Many sellers send part of their stock to Walmart for Walmart.com orders and part to Amazon for Amazon orders. You need a seller account on each marketplace and you manage two sets of inventory.",
  },
  {
    q: "What are the main Walmart WFS fees?",
    a: "A fulfillment fee per unit based on shipping weight, a monthly storage fee per cubic foot, extra storage charges for stock that sits too long, and fees for returns, removal, disposal and prep. Walmart publishes the full table in its WFS fees guide. There is no signup or monthly subscription fee for WFS.",
  },
  {
    q: "Do I need to be approved on Walmart Marketplace before I can use WFS?",
    a: "You need a Walmart Marketplace seller account. Walmart says new sellers create the account in Seller Center, and existing sellers set up WFS from the WFS section of Seller Center by adding contact, billing and returns details.",
  },
  {
    q: "Can WFS ship my Amazon orders, or FBA ship my Walmart orders?",
    a: "Each company has a multichannel product. Walmart Multichannel Solutions ships orders from other channels out of WFS stock, and Amazon Multichannel Fulfillment does the same out of FBA stock. Each marketplace has its own rules about how orders may be shipped, so read those rules before you send one marketplace's orders through the other's network.",
  },
  {
    q: "What is the best fulfillment service for Walmart sellers?",
    a: "There is no single best one. WFS suits items that sell steadily and fit Walmart's size and product rules. Shipping orders yourself or through a third-party warehouse suits items WFS does not accept, slow sellers and stock you also sell on other channels. Many sellers use a mix.",
  },
  {
    q: "How long does Walmart take to receive WFS inventory?",
    a: "Walmart says receiving typically takes 2 business days. It can take up to 10 business days for items that need unplanned prep, or that arrive during sales events, holidays or the peak months of October to December.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  dateModified: "2026-11-23",
  author: { "@type": "Organization", name: "Gosellify", url: "https://gosellify.com" },
  publisher: { "@type": "Organization", name: "Gosellify", url: "https://gosellify.com" },
  mainEntityOfPage: "https://gosellify.com/guides/walmart-wfs-vs-amazon-fba",
};

type ExtProps = { href: string; children: ReactNode };

function Ext({ href, children }: ExtProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function WfsVsFbaGuide() {
  return (
    <GuideLayout slug="walmart-wfs-vs-amazon-fba" toc={toc}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <h2 id="answer" style={{ marginTop: 24 }}>The short answer</h2>
      <p>
        Walmart Fulfillment Services (WFS) and Fulfillment by Amazon (FBA) do the same job. You send stock to the marketplace&apos;s warehouses, and the marketplace stores it, ships each order and handles customer service and returns. In the WFS vs FBA choice, the real question is where your buyers are: WFS serves Walmart.com orders and FBA serves Amazon orders.
      </p>
      <p>
        The fee structures look alike, but the numbers, size limits and storage rules differ. Most sellers who list on both marketplaces end up using both programs, each for its own orders.
      </p>
      <div className="guide-note">
        <p>
          <strong>Last reviewed: November 2026.</strong> Fees and rules change. Every number below links to the official page we read it on. Check that page before you make a buying decision.
        </p>
      </div>

      <h2 id="how-wfs-works">How Walmart WFS works</h2>
      <p>
        WFS is Walmart&apos;s own fulfillment program for Marketplace sellers. According to Walmart&apos;s <Ext href={SRC.wfsOverview}>WFS overview</Ext>, the program stores your stock, picks, packs and ships Walmart.com orders, and takes care of all customer support and returns for those orders.
      </p>
      <p>The steps Walmart lists are simple:</p>
      <ol>
        <li>Create a Marketplace seller account, or open the WFS section of Seller Center and add your contact, billing and returns details.</li>
        <li>Add new items as Walmart-fulfilled, or convert your current listings.</li>
        <li>Create a shipping plan. Walmart tells you where to send the stock.</li>
        <li>Track the shipment. Receiving typically takes 2 business days and can take up to 10 in busy periods.</li>
      </ol>
      <p>Walmart also sets limits on what WFS will take:</p>
      <ul>
        <li>Items up to 500 lb and up to 120 x 105 x 93 inches, packaging included.</li>
        <li>No perishable or regulated items that need temperature control, and nothing on Walmart&apos;s prohibited products lists.</li>
        <li>Stock must ship from inside the US, or clear customs before it reaches a Walmart facility.</li>
      </ul>
      <p>
        Walmart states there are no signup or monthly subscription fees for WFS, and no minimum or maximum amount of stock.
      </p>

      <h2 id="how-fba-works">How Amazon FBA works</h2>
      <p>
        FBA is the Amazon version. On its <Ext href={SRC.fba}>Fulfillment by Amazon page</Ext>, Amazon says it stores your inventory, picks, packs and ships orders, and handles customer service and returns for you. FBA offers qualify for Prime shipping.
      </p>
      <ol>
        <li>Open a selling account and register for FBA in Seller Central.</li>
        <li>Check FBA product restrictions, then create a listing as FBA or switch an existing one.</li>
        <li>Prepare, pack and label your stock with the Send to Amazon workflow, and ship it in.</li>
        <li>Amazon receives the stock and fulfills orders as they come.</li>
      </ol>
      <p>
        An Amazon selling account has its own cost. The <Ext href={SRC.amazonPricing}>Amazon pricing page</Ext> lists the Individual plan at $0.99 per item sold and the Professional plan at $39.99 per month, before selling fees.
      </p>

      <h2 id="comparison">Side-by-side comparison</h2>
      <div className="guide-table">
        <table style={{ minWidth: 560 }}>
          <thead>
            <tr>
              <th scope="col">Point</th>
              <th scope="col">Walmart WFS</th>
              <th scope="col">Amazon FBA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Orders it serves</strong></td>
              <td>Walmart.com orders. Other channels through Walmart Multichannel Solutions.</td>
              <td>Amazon orders. Other channels through Amazon Multichannel Fulfillment.</td>
            </tr>
            <tr>
              <td><strong>What it handles</strong></td>
              <td>Storage, pick, pack, ship, customer support and returns.</td>
              <td>Storage, pick, pack, ship, customer service and returns.</td>
            </tr>
            <tr>
              <td><strong>Account needed</strong></td>
              <td>Walmart Marketplace seller account with WFS set up in Seller Center.</td>
              <td>Amazon selling account registered for FBA in Seller Central.</td>
            </tr>
            <tr>
              <td><strong>Monthly account fee</strong></td>
              <td>None. Walmart says there are no setup or monthly fees.</td>
              <td>Professional plan $39.99 a month, or Individual plan $0.99 per item sold.</td>
            </tr>
            <tr>
              <td><strong>Fulfillment fee</strong></td>
              <td>Per unit, by shipping weight, with add-ons for some item types.</td>
              <td>Per unit, based on price, weight and dimensions.</td>
            </tr>
            <tr>
              <td><strong>Storage fee</strong></td>
              <td>Monthly, per cubic foot. Higher for stock held over 30 days in October to December.</td>
              <td>Monthly, per cubic foot, on your daily average volume. Rates vary by season.</td>
            </tr>
            <tr>
              <td><strong>Old stock</strong></td>
              <td>Long-term storage rates start after 365 days.</td>
              <td>Aged inventory charge on items stored more than 181 days.</td>
            </tr>
            <tr>
              <td><strong>Referral fee</strong></td>
              <td>Charged by Walmart on each sale, by category. Separate from WFS.</td>
              <td>Charged by Amazon on each sale, by category. Separate from FBA.</td>
            </tr>
            <tr>
              <td><strong>Shopper-facing benefit</strong></td>
              <td>&quot;Fulfilled by Walmart&quot; tag and fast delivery promise.</td>
              <td>Prime eligibility.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Sources: <Ext href={SRC.wfsOverview}>Walmart WFS overview</Ext>, <Ext href={SRC.wfsFees}>Walmart WFS fees</Ext>, <Ext href={SRC.walmartReferral}>Walmart referral fees</Ext>, <Ext href={SRC.fba}>Amazon FBA</Ext>, <Ext href={SRC.amazonPricing}>Amazon pricing</Ext>.
      </p>

      <h2 id="fees">WFS fees and FBA fees</h2>
      <p>
        Both programs charge in the same four layers: the marketplace&apos;s referral fee on the sale, a fulfillment fee per unit, a storage fee per month, and extra charges for returns, removals and old stock. The layers match. The numbers do not.
      </p>

      <h3>Walmart WFS fees</h3>
      <p>
        Walmart publishes its rates in the <Ext href={SRC.wfsFees}>WFS fees guide</Ext>. The guide says the rates are effective as of April 2025 and can change. These are the base fulfillment fees for standard items when we read the page:
      </p>
      <div className="guide-table">
        <table style={{ minWidth: 560 }}>
          <thead>
            <tr>
              <th scope="col">Shipping weight</th>
              <th scope="col">WFS fulfillment fee per unit</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1 lb or less</td><td>$3.45</td></tr>
            <tr><td>2 lb</td><td>$4.95</td></tr>
            <tr><td>3 lb</td><td>$5.45</td></tr>
            <tr><td>4 to 20 lb</td><td>$5.75 plus $0.40 per lb over 4 lb</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><strong>Add-ons:</strong> $0.50 for apparel, $0.50 for hazmat items, $1 for items priced under $10, and oversize surcharges.</li>
        <li><strong>Storage:</strong> $0.75 per cubic foot per month. In October to December, stock held more than 30 days pays an extra $1.50 per cubic foot.</li>
        <li><strong>Long-term storage:</strong> $2.25 per cubic foot per month for stock held 366 to 450 days, and $7.50 after 450 days.</li>
        <li><strong>Other:</strong> return processing, removal, disposal and prep fees. The guide lists each one, including the heavier weight tiers.</li>
      </ul>
      <p>
        Shipping weight is not always the scale weight. Walmart uses the larger of unit weight and dimensional weight for most items, so a light but bulky product pays more. Use the estimator on the <Ext href={SRC.wfsPricing}>WFS pricing page</Ext> for your exact item.
      </p>

      <h3>Amazon FBA fees</h3>
      <p>
        Amazon describes the fee types on its <Ext href={SRC.fba}>FBA page</Ext> and in its <Ext href={SRC.fbaFeesGuide}>FBA fees guide</Ext>, and keeps the current rate tables in Seller Central. We do not repeat rate numbers we could not read on an open official page this month. The fee types are:
      </p>
      <ul>
        <li><strong>Fulfillment fee:</strong> per unit, based on the item&apos;s price, weight and dimensions. Amazon notes lower rates for products priced under $10.</li>
        <li><strong>Monthly storage:</strong> per cubic foot, on your daily average volume. Amazon says rates vary by season and can be higher in holiday months.</li>
        <li><strong>Aged inventory:</strong> a monthly charge on items stored more than 181 days.</li>
        <li><strong>Returns processing:</strong> charged on some customer returns.</li>
        <li><strong>Removal, disposal or liquidation:</strong> a per-item charge to pull stock out.</li>
        <li><strong>Inbound placement:</strong> a separate charge Amazon lists for its FBA inbound placement service.</li>
      </ul>
      <p>
        On top of these sit the selling plan fee and the referral fee. Amazon&apos;s <Ext href={SRC.amazonPricing}>pricing page</Ext> says the referral fee is a percentage of the total price or a minimum amount, whichever is greater, and it varies by category.
      </p>
      <div className="guide-note">
        <p>
          Want to test one product? Put your own cost, price and fees into our <Link href="/tools/profit-calculator">Amazon and Walmart profit calculator</Link>. It shows profit per unit, margin and ROI from the numbers you type in.
        </p>
      </div>

      <h2 id="risks">Risks and policy points</h2>
      <ul>
        <li><strong>Slow stock costs more in both programs.</strong> Amazon&apos;s aged inventory charge starts after 181 days. Walmart adds a peak-season charge after 30 days and long-term rates after 365 days. Send what you can sell, not what you can afford to buy.</li>
        <li><strong>Prep mistakes are billed.</strong> Walmart lists unplanned prep charges, for example $0.65 per unit for a missing or wrong label and $0.80 for a missing or wrong poly bag. Bad prep also slows receiving.</li>
        <li><strong>Peak season is slower.</strong> Walmart says receiving can take up to 10 business days from October 1 to December 31. Ship holiday stock early.</li>
        <li><strong>Not every product is allowed.</strong> Both programs have restricted and prohibited product lists. Check the item before you buy inventory.</li>
        <li><strong>You still own the listing and the account.</strong> The program ships the box. Pricing, stock planning, listing quality and account health stay with you.</li>
      </ul>

      <h2 id="other-channels">Other channels and third-party fulfilment</h2>
      <p>
        Both companies will ship orders that come from somewhere else. <Ext href={SRC.walmartMcs}>Walmart Multichannel Solutions</Ext> uses your WFS stock to fill orders from channels such as Amazon, eBay, Shopify, Temu, TikTok Shop and your own site. Walmart says these orders go out in unbranded packaging, with standard delivery in 3 to 5 business days or expedited in 2, and no referral fee on non-Walmart orders. <Ext href={SRC.amazonMcf}>Amazon Multichannel Fulfillment</Ext> uses FBA stock for orders from your own website and other stores, with standard delivery in three business days and expedited in two.
      </p>
      <p>
        Each marketplace sets its own rules for how its orders may be shipped. Walmart&apos;s own page tells sellers to check each marketplace&apos;s policies. Do that before you route one marketplace&apos;s orders through the other&apos;s network.
      </p>
      <p>
        You also do not have to use either program. Third-party fulfilment for Walmart Marketplace means you keep stock in your own space or in a 3PL warehouse and ship each order yourself. That route makes sense for items WFS will not accept, for slow sellers that would rack up storage fees, and for stock you want to share across several channels.
      </p>

      <h2 id="who-fits">Who each program fits</h2>
      <h3>WFS fits you if</h3>
      <ul>
        <li>You already sell on Walmart Marketplace, or have been approved to.</li>
        <li>Your items sell steadily and fit the size and product rules.</li>
        <li>You want the &quot;Fulfilled by Walmart&quot; tag and fast delivery without running a warehouse.</li>
      </ul>
      <h3>FBA fits you if</h3>
      <ul>
        <li>Most of your sales are on Amazon and Prime eligibility matters for your product.</li>
        <li>Your stock turns fast enough to stay clear of the aged inventory charge.</li>
        <li>You are fine paying the Amazon selling plan fee on top of fulfillment costs.</li>
      </ul>
      <h3>Use both, or neither, if</h3>
      <ul>
        <li>You sell on both marketplaces. Split stock between the two programs by where each item sells.</li>
        <li>Your item is oversized, restricted or slow. Ship it yourself or through a 3PL.</li>
      </ul>

      <h2 id="managed">When a managed service helps</h2>
      <p>
        You can run WFS or FBA yourself. The official tools are free, and one or two products are easy to manage. A team starts to help when the work grows: many SKUs, shipping plans every week, prep and labeling rules, restock timing and fee checks on every item.
      </p>
      <p>
        That is the work we do at Gosellify. Our <Link href="/services/walmart-wfs">Walmart WFS service</Link> and <Link href="/services/amazon-fba">Amazon FBA management service</Link> cover product research, prep, shipments and day-to-day store management. Our <Link href="/services/3pl-warehouse">3PL warehouse service</Link> covers stock that should not go into WFS or FBA. We work on a pay from profit model, and we do not promise sales or profit. No one honestly can.
      </p>
      <p>
        Not sure which route fits your budget? Take the <Link href="/profit-check">2-minute Profit Check</Link> and we will send you a plan for your store.
      </p>

      <h2 id="faq">FAQ</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
      <p>
        Official pages used for this guide: <Ext href={SRC.wfsOverview}>Walmart WFS overview</Ext>, <Ext href={SRC.wfsFees}>WFS fees</Ext>, <Ext href={SRC.wfsPricing}>WFS pricing</Ext>, <Ext href={SRC.walmartReferral}>Walmart referral fees</Ext>, <Ext href={SRC.walmartMcs}>Walmart Multichannel Solutions</Ext>, <Ext href={SRC.fba}>Fulfillment by Amazon</Ext>, <Ext href={SRC.fbaFeesGuide}>Amazon FBA fees guide</Ext>, <Ext href={SRC.amazonPricing}>Amazon pricing</Ext> and <Ext href={SRC.amazonMcf}>Amazon Multichannel Fulfillment</Ext>.
      </p>
    </GuideLayout>
  );
}
