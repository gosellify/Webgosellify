import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import GuideLayout, { TocItem } from "@/components/guides/GuideLayout";

const TITLE = "Amazon wholesale vs online arbitrage: which fits your capital";
const DESCRIPTION =
  "How the two models work, what each one needs from you, and the risks to know before you start.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const SRC = {
  dropPolicy: "https://sellercentral.amazon.com/help/hub/reference/external/G201808410",
  dropBlog: "https://sell.amazon.com/blog/dropshipping-on-amazon",
  dropForum: "https://sellercentral.amazon.com/forums/t/drop-shipping-policy-reminder/839620",
  reselling: "https://sell.amazon.com/blog/reselling",
  resellingGuide: "https://sell.amazon.com/blog/guide-to-reselling",
  wholesalers: "https://sell.amazon.com/blog/how-to-find-wholesalers",
  wholesaleHowTo: "https://sell.amazon.com/blog/ask/how-to-sell-wholesale-on-amazon",
  pricing: "https://sell.amazon.com/pricing",
  fba: "https://sell.amazon.com/fulfillment-by-amazon",
};

const toc: TocItem[] = [
  { id: "answer", label: "The short answer" },
  { id: "how-wholesale-works", label: "How Amazon wholesale works" },
  { id: "how-arbitrage-works", label: "How online arbitrage works" },
  { id: "dropshipping-policy", label: "Amazon dropshipping policy" },
  { id: "comparison", label: "Side-by-side comparison" },
  { id: "costs", label: "Costs and fees" },
  { id: "risks", label: "Risks of each model" },
  { id: "capital", label: "Which fits your capital" },
  { id: "managed", label: "When a managed service helps" },
  { id: "faq", label: "FAQ" },
];

interface Faq {
  q: string;
  a: string;
}

const faqs: Faq[] = [
  {
    q: "Is online arbitrage allowed on Amazon?",
    a: "Amazon's own reselling guide describes retail arbitrage as a way to source products, as long as you follow its selling guidelines. It also warns that you may need documents such as invoices to sell those products. So the model is not banned, but you carry the proof of where each item came from, and some brands and categories need approval before you can list.",
  },
  {
    q: "Is dropshipping allowed on Amazon?",
    a: "Yes, if you follow the Drop Shipping Policy. Amazon says you must be the seller of record, nothing in the parcel may identify a third party, and you must handle returns and customer service. Amazon also states that drop-shipping retail-to-retail is prohibited.",
  },
  {
    q: "Can I buy from another online store and have it shipped straight to my Amazon customer?",
    a: "Not in the way most people mean it. Amazon's policy update names this exact practice as not permitted when the parcel, packing slip or invoice shows the other retailer or anyone other than you. A normal retail order arrives in the retailer's box with the retailer's paperwork, so it breaks the rule.",
  },
  {
    q: "What is Amazon 2 step dropshipping?",
    a: "It is a seller term, not an Amazon program. The item is bought from a retailer, sent to a prep warehouse, checked and repacked, then shipped to the customer under the seller's name. Repacking deals with the packaging rule. It does not by itself answer the other part of Amazon's wording, which describes the seller of record as owning the product before the customer buys it. Holding stock before you list it is the lower-risk way to run it.",
  },
  {
    q: "What invoices does Amazon want from wholesale sellers?",
    a: "Amazon's wholesale guidance lists an invoice dated within the last 180 days, with the supplier's name and address, your name and address matching your selling account, an itemized product list and a combined purchase of at least 10 units. For some products Amazon may also ask for a letter from the brand.",
  },
  {
    q: "Which needs more money to start, wholesale or arbitrage?",
    a: "Wholesale usually needs more. Amazon's reselling guide says wholesale usually takes a larger upfront investment, while retail arbitrage needs little initial investment. Suppliers often set minimum order quantities, and arbitrage lets you buy a few units at a time.",
  },
  {
    q: "Do I need an LLC to sell wholesale on Amazon?",
    a: "Amazon's guide to finding wholesalers says you typically need a registered business such as an LLC, and you might also need a reseller license or other permits. Suppliers will often ask for your business license and tax identification number before they open an account for you.",
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
  mainEntityOfPage: "https://gosellify.com/guides/amazon-wholesale-vs-arbitrage",
};

type ExtProps = { href: string; children: ReactNode };

function Ext({ href, children }: ExtProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function WholesaleVsArbitrageGuide() {
  return (
    <GuideLayout slug="amazon-wholesale-vs-arbitrage" toc={toc}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <h2 id="answer" style={{ marginTop: 24 }}>The short answer</h2>
      <p>
        In the Amazon wholesale vs arbitrage choice, capital and paperwork decide. Wholesale means buying in bulk from a brand or its distributor. It needs more money up front and a registered business, but it gives you repeat supply and the invoices Amazon asks for. Online arbitrage means buying discounted items from online retailers and reselling them. It starts with less money, but supply is one-off and your proof of sourcing is weaker.
      </p>
      <p>
        If you have limited capital and time to hunt deals, arbitrage is the easier door. If you have more capital and want a store that can reorder the same products each month, wholesale is the steadier model.
      </p>
      <div className="guide-note">
        <p>
          <strong>Last reviewed: November 2026.</strong> Amazon changes its rules and fees. Each rule below links to the Amazon page we read it on. Read the current policy yourself before you spend money on stock.
        </p>
      </div>

      <h2 id="how-wholesale-works">How Amazon wholesale works</h2>
      <p>
        You open an account with a brand or one of its distributors, buy existing branded products in bulk at a wholesale price, and sell them on the product pages that already exist on Amazon. You own the stock. You can send it to FBA or ship orders yourself.
      </p>
      <p>
        Amazon&apos;s guide on <Ext href={SRC.wholesalers}>how to find wholesalers</Ext> sets out what to expect:
      </p>
      <ul>
        <li><strong>Buy from the right source.</strong> For branded products, Amazon says to source directly from the brand or one of its direct distributors or wholesalers. It also says auctions and liquidation are not valid sources of supply.</li>
        <li><strong>Have business papers ready.</strong> Suppliers ask for a business license and tax ID. Amazon says you typically need a registered business such as an LLC and might need a reseller license or permits.</li>
        <li><strong>Ask about minimum orders.</strong> Suppliers set minimum order quantities, and the unit cost usually drops as the order gets bigger.</li>
        <li><strong>Keep the invoices.</strong> Amazon treats invoices as proof of authenticity. Its checklist: dated within the last 180 days, supplier name and address, your name and address matching your selling account, an itemized list and at least 10 units in total.</li>
        <li><strong>Start with a trial order.</strong> A small first order gives you an invoice you may need for approval before you commit to more.</li>
      </ul>

      <h2 id="how-arbitrage-works">How online arbitrage works</h2>
      <p>
        Online arbitrage is retail arbitrage done on websites instead of in shops. You find a product selling below its Amazon price at an online retailer, buy it, receive it, and resell it on Amazon. Amazon&apos;s <Ext href={SRC.resellingGuide}>reselling guide</Ext> describes retail arbitrage as buying clearance or discounted products from retail stores and reselling them at a higher price, and notes that many resellers start this way because it needs little initial investment.
      </p>
      <p>
        Amazon&apos;s <Ext href={SRC.reselling}>guidelines for resellers</Ext> add two cautions. You might need additional documents, such as invoices, to sell retail-sourced products. And you should keep purchase orders, invoices and receipts for every product, because they support you if a customer or Amazon asks for proof.
      </p>
      <p>
        The work is different from wholesale. There is no supplier account to win. There is a daily search for deals, and every deal runs out.
      </p>

      <h2 id="dropshipping-policy">Amazon dropshipping policy: what it allows and forbids</h2>
      <p>
        Many people mix up online arbitrage with dropshipping, so this part matters. In arbitrage as described above, the stock reaches you first. In dropshipping, a third party ships the order to the customer for you.
      </p>
      <p>
        Amazon allows dropshipping only inside its <Ext href={SRC.dropPolicy}>Drop Shipping Policy</Ext>. Amazon&apos;s <Ext href={SRC.dropBlog}>dropshipping guide</Ext> lists what you must do:
      </p>
      <ul>
        <li><strong>Be the seller of record.</strong> You need an agreement with your supplier that identifies you as the seller of record. Amazon explains this as owning the products before customers buy them, setting the price, recording the sale as your revenue and handling sales tax.</li>
        <li><strong>Show no third party.</strong> Products, packaging, packing slips and invoices must be free of anything that identifies someone other than you.</li>
        <li><strong>Own the after-sale work.</strong> You accept and process returns and provide the customer service.</li>
      </ul>
      <p>What Amazon forbids is just as clear:</p>
      <ul>
        <li>Amazon&apos;s <Ext href={SRC.dropForum}>policy update for sellers</Ext> says you may not buy products from another online retailer and have that retailer ship directly to the customer, if the shipment does not identify you as the seller of record or if anyone other than you appears on the packing slip, invoice or outer packaging.</li>
        <li>The same update says you may not ship orders with any paperwork or packaging that shows a seller name or contact details other than your own.</li>
        <li>Amazon&apos;s <Ext href={SRC.reselling}>reselling guidelines</Ext> put it in one line: drop-shipping retail-to-retail is prohibited.</li>
      </ul>
      <p>
        Amazon says breaking the policy harms your account health and can cost you the ability to fulfil orders yourself.
      </p>
      <div className="guide-note">
        <p>
          <strong>About &quot;Amazon 2 step dropshipping&quot;.</strong> This is a seller term, not an Amazon program. The item goes from a retailer to a prep warehouse, is checked and repacked, then ships under the seller&apos;s name. Repacking handles the packaging rule. It does not by itself settle the seller of record rule, because Amazon describes the seller of record as owning the product before the customer buys it. The lower-risk version is to buy and hold the stock first, then list it. Read the policy and decide with open eyes.
        </p>
      </div>

      <h2 id="comparison">Side-by-side comparison</h2>
      <div className="guide-table">
        <table style={{ minWidth: 560 }}>
          <thead>
            <tr>
              <th scope="col">Point</th>
              <th scope="col">Wholesale</th>
              <th scope="col">Online arbitrage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Where stock comes from</strong></td>
              <td>The brand or its direct distributors.</td>
              <td>Online retailers, at a discount.</td>
            </tr>
            <tr>
              <td><strong>Capital to start</strong></td>
              <td>Higher. Suppliers set minimum orders.</td>
              <td>Lower. You can buy a few units.</td>
            </tr>
            <tr>
              <td><strong>Paperwork you hold</strong></td>
              <td>Supplier invoices, and sometimes a brand authorization letter.</td>
              <td>Retail receipts and order confirmations.</td>
            </tr>
            <tr>
              <td><strong>Business setup</strong></td>
              <td>Registered business, tax ID, often a reseller license.</td>
              <td>An Amazon selling account. Keep full purchase records.</td>
            </tr>
            <tr>
              <td><strong>Repeat supply</strong></td>
              <td>Yes. You reorder the same products.</td>
              <td>No. Each deal ends when the discount ends.</td>
            </tr>
            <tr>
              <td><strong>Daily work</strong></td>
              <td>Supplier outreach, reorders, stock planning.</td>
              <td>Deal hunting, small purchases, prep.</td>
            </tr>
            <tr>
              <td><strong>Main risk</strong></td>
              <td>Brand approval and cash tied up in stock.</td>
              <td>Authenticity complaints you cannot answer with a distributor invoice.</td>
            </tr>
            <tr>
              <td><strong>Fulfillment</strong></td>
              <td>FBA or ship yourself.</td>
              <td>FBA or ship yourself, after the stock reaches you.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="costs">Costs and fees</h2>
      <p>
        Amazon charges the same fees whichever way you source. What changes is your buying cost and how much cash sits in stock.
      </p>
      <ul>
        <li><strong>Selling plan.</strong> The <Ext href={SRC.pricing}>Amazon pricing page</Ext> lists the Individual plan at $0.99 per item sold and the Professional plan at $39.99 per month.</li>
        <li><strong>Referral fee.</strong> A percentage of the total price or a minimum amount, whichever is greater. The rate depends on the category. The same page has the full table.</li>
        <li><strong>FBA fees, if you use FBA.</strong> A fulfillment fee per unit, monthly storage, an aged inventory charge after 181 days, and charges for returns, removals and inbound placement. See the <Ext href={SRC.fba}>FBA page</Ext> for the current list.</li>
        <li><strong>Dropshipping.</strong> Amazon says there are no Amazon fees specific to dropshipping. Normal selling fees still apply.</li>
        <li><strong>Your own costs.</strong> Inbound shipping, prep, returns you cannot resell, and for wholesale any supplier membership or account fees.</li>
      </ul>
      <p>
        We do not quote a typical margin for either model. It depends on the product. Put your own numbers into our <Link href="/tools/profit-calculator">profit calculator</Link> before you buy.
      </p>

      <h2 id="risks">Risks of each model</h2>
      <h3>Online arbitrage risks</h3>
      <ul>
        <li><strong>Authenticity complaints.</strong> Amazon says sellers are responsible for selling authentic products. Its invoice checklist asks for the name and address of a manufacturer or distributor. A retail store receipt may not meet that checklist, so a complaint is harder to answer.</li>
        <li><strong>Brand and category gating.</strong> Some products and categories need approval before you can list. Amazon says approval can require a letter from the brand or a manufacturer or distributor invoice. A retail receipt may not be accepted.</li>
        <li><strong>Supply runs out.</strong> A good deal lasts days. You cannot build steady monthly sales on one clearance sale.</li>
        <li><strong>Policy line.</strong> Shipping from the retailer straight to the customer is the practice Amazon prohibits. Stock must come to you or your warehouse first.</li>
      </ul>
      <h3>Wholesale risks</h3>
      <ul>
        <li><strong>Brand approval.</strong> A supplier account does not mean Amazon will let you list the brand. Check that you can list the product before you pay for a full order.</li>
        <li><strong>Minimum orders.</strong> Minimum order quantities tie up cash. If the price drops or more sellers join the listing, you hold the stock.</li>
        <li><strong>Supplier quality.</strong> Amazon advises checking a supplier&apos;s business license and brand authorization letter. A fake distributor leaves you with stock and invoices Amazon will not accept.</li>
        <li><strong>Slow stock.</strong> Bulk stock that sits in FBA past 181 days starts to pay the aged inventory charge.</li>
      </ul>

      <h2 id="capital">Which fits your capital</h2>
      <h3>Online arbitrage fits you if</h3>
      <ul>
        <li>Your budget is small and you want to learn Amazon with little money at risk.</li>
        <li>You have hours each week to hunt for deals.</li>
        <li>You accept that some brands will be closed to you and that you must keep every receipt.</li>
      </ul>
      <h3>Wholesale fits you if</h3>
      <ul>
        <li>You have enough capital to meet minimum orders and wait for stock to sell.</li>
        <li>You have a registered business and the tax papers suppliers ask for.</li>
        <li>You want products you can reorder, with invoices that stand up when Amazon asks.</li>
      </ul>
      <p>
        Many sellers start with arbitrage to learn the fees and the listing rules, then move their profit into wholesale accounts. That path is common. It is not a promise of results.
      </p>

      <h2 id="managed">When a managed service helps</h2>
      <p>
        You can do both models alone. The work that wears people down is the volume: product research every day, supplier emails, invoices on file, prep, shipments and account health checks. If you have capital but not the hours, a team can run that work while you keep ownership of the account and the money.
      </p>
      <p>
        At Gosellify we run stores for owners. See our <Link href="/services/amazon-wholesale">Amazon wholesale service</Link>, our <Link href="/services/amazon-arbitrage">Amazon arbitrage service</Link> and our <Link href="/services/amazon-fba">Amazon FBA management service</Link>. Orders that are not in FBA go through our US warehouses, as covered on the <Link href="/services/3pl-warehouse">3PL warehouse page</Link>. We work on a pay from profit model. We do not guarantee approval, sales or profit, and no honest service can.
      </p>
      <p>
        Want to know which model fits your budget? Take the <Link href="/profit-check">2-minute Profit Check</Link>.
      </p>

      <h2 id="faq">FAQ</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
      <p>
        Official pages used for this guide: <Ext href={SRC.dropPolicy}>Amazon Drop Shipping Policy</Ext>, <Ext href={SRC.dropBlog}>Amazon&apos;s dropshipping guide</Ext>, <Ext href={SRC.dropForum}>Amazon&apos;s drop shipping policy update</Ext>, <Ext href={SRC.reselling}>guidelines for reselling</Ext>, <Ext href={SRC.resellingGuide}>reselling business guide</Ext>, <Ext href={SRC.wholesalers}>how to find wholesalers</Ext>, <Ext href={SRC.wholesaleHowTo}>how to sell wholesale on Amazon</Ext>, <Ext href={SRC.pricing}>Amazon pricing</Ext> and <Ext href={SRC.fba}>Fulfillment by Amazon</Ext>.
      </p>
    </GuideLayout>
  );
}
