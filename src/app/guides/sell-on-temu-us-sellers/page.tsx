import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GuideLayout, { TocItem } from "@/components/guides/GuideLayout";
import { guides, GuideMeta } from "@/app/guides/guides";

const SLUG = "sell-on-temu-us-sellers";
const meta: GuideMeta | undefined = guides.find((g) => g.slug === SLUG);
const TITLE: string = meta ? meta.title : "How to sell on Temu as a US seller";
const DESCRIPTION: string = meta ? meta.description : "How the Temu local seller program works, what you need to join, and how orders are fulfilled.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
};

/** Pages this guide was checked against (opened November 2026). Temu's own pages first, trade press second. */
const SRC = {
  sellerCenter: "https://seller.temu.com/",
  academy: "https://seller.temu.com/seller-academy/index.html",
  temuAward: "https://www.retaildive.com/press-release/20260205-temu-wins-gold-stevie-award-for-local-seller-program/",
  temuShopify: "https://www.aap.com.au/aapreleases/cision20251215ae47278",
  shopifyApp: "https://apps.shopify.com/temu",
  modernRetail: "https://www.modernretail.co/technology/temu-is-making-it-easier-for-u-s-sellers-to-join-its-fast-growing-marketplace/",
  shipstation: "https://www.shipstation.com/blog/temus-local-seller-program-a-shipstation-sellers-guide/",
  shopifyGuide: "https://www.shopify.com/blog/how-to-sell-on-temu",
};

type ExtProps = { href: string; children: React.ReactNode };

function Ext({ href, children }: ExtProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const toc: TocItem[] = [
  { id: "short-answer", label: "The short answer" },
  { id: "local-seller-program", label: "The Temu local seller program" },
  { id: "requirements", label: "Temu seller requirements" },
  { id: "register", label: "Open a Temu seller account" },
  { id: "fulfillment", label: "How orders are fulfilled" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "after-approval", label: "What happens after approval" },
  { id: "fees", label: "Temu seller fees" },
  { id: "managed-service", label: "When a managed service helps" },
  { id: "faq", label: "Questions sellers ask" },
];

interface Faq {
  q: string;
  a: string;
}

const faqs: Faq[] = [
  {
    q: "Can US sellers sell on Temu?",
    a: "Yes. Temu runs a Local Seller Program for businesses that hold stock in the US and ship it themselves. Modern Retail reported in November 2024 that Temu confirmed US sellers no longer need an invitation, and the Temu Seller Center sign-up form has a United States seller option.",
  },
  {
    q: "How long does it take to open a Temu seller account?",
    a: "Temu's Seller Center says creating the account takes about one minute, the application about ten minutes, and that applications are normally reviewed within one business day. It can take longer if your documents need another look.",
  },
  {
    q: "What documents do I need for a Temu seller account?",
    a: "Guides from ShipStation and Modern Retail describe the same basics: your registered business name, EIN and business address as shown on your IRS letter, a valid government photo ID for the business representative, and proof of address such as a utility bill. The form itself shows the exact list for your business type.",
  },
  {
    q: "How much are Temu seller fees?",
    a: "Temu says its Local Seller Program has no registration fees. We could not find a public Temu page that lists a commission rate, so we do not quote one. Check the fee terms shown in Seller Center and in your seller agreement before you list.",
  },
  {
    q: "Does Temu ship my orders for me?",
    a: "Not in the local seller program. Temu's Seller Center says it does not provide logistics services directly. You ship from your own US stock or through a 3PL, and Temu connects with outside logistics and shipping tools.",
  },
  {
    q: "Can I sell on Temu from my Shopify store?",
    a: "Temu announced a Shopify app in December 2025 that syncs products, inventory and orders between a Shopify store and Temu. You still need an approved Temu seller account and you still fulfil the orders.",
  },
  {
    q: "Can I use dropshipping from overseas on Temu's local seller program?",
    a: "The program is built around local stock. Temu describes it as local businesses selling and fulfilling orders inside their own market. If your products ship from another country, this program is not the right fit.",
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
  mainEntityOfPage: `https://gosellify.com/guides/${SLUG}`,
};

export default function SellOnTemuGuidePage() {
  return (
    <GuideLayout slug={SLUG} toc={toc}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <h2 id="short-answer" style={{ marginTop: 24 }}>The short answer</h2>
      <p>
        US businesses can sell on Temu through its Local Seller Program. You register a Temu seller account at Seller Center with your business details and a photo ID, wait for Temu to review the application, then list products and ship orders from stock you already hold in the US. Temu brings the shoppers. You handle the stock, the shipping and the returns.
      </p>
      <div className="guide-note">
        <p>
          <strong>Last reviewed: November 2026.</strong> Temu publishes far less public seller documentation than Amazon or Walmart, and much of it sits behind the Seller Center login. We link the page behind each point and we say clearly where we could not confirm a number. Nothing here is a promise that Temu will approve you or that you will make sales.
        </p>
      </div>

      <h2 id="local-seller-program">What the Temu local seller program is</h2>
      <p>
        Temu started in the US in 2022 with goods shipped from overseas. In 2024 it added a second model for local businesses. In its own <Ext href={SRC.temuShopify}>December 2025 announcement</Ext>, Temu describes the Local Seller Program as a way for local businesses to sell and fulfil orders inside their own market, which makes delivery faster for shoppers. The same announcement lists the United States among 37 countries where the program runs.
      </p>
      <p>
        At first, US sellers needed an invite code. <Ext href={SRC.modernRetail}>Modern Retail reported in November 2024</Ext> that Temu had dropped that step and confirmed US sellers can apply directly. A <Ext href={SRC.temuAward}>Temu press release from February 2026</Ext> says sellers can list in more than 600 product categories, from pantry goods to furniture.
      </p>

      <h2 id="requirements">Temu seller requirements</h2>
      <p>
        Temu does not publish a full public checklist. Its <Ext href={SRC.academy}>Seller Academy</Ext> only says to prepare your documents in advance, and the application form shows the exact list for your business type. The details below come from the public sign-up page and from two trade guides that walked through the US form: <Ext href={SRC.shipstation}>ShipStation (July 2026)</Ext> and <Ext href={SRC.modernRetail}>Modern Retail</Ext>.
      </p>
      <div className="guide-table">
        <table style={{ minWidth: 560 }}>
          <thead>
            <tr>
              <th>What you need</th>
              <th>Details</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>A US selling location</strong></td>
              <td>The sign-up form asks which country you sell from. Sellers registered in mainland China or Hong Kong use a separate link.</td>
              <td>Temu Seller Center</td>
            </tr>
            <tr>
              <td><strong>A business type</strong></td>
              <td>The form offers sole proprietorship, corporation, partnership or individual.</td>
              <td>ShipStation</td>
            </tr>
            <tr>
              <td><strong>Business name, EIN and address</strong></td>
              <td>For business types, these should match your IRS EIN letter (CP 575), including the suffix such as LLC or Inc.</td>
              <td>ShipStation</td>
            </tr>
            <tr>
              <td><strong>Photo ID of the representative</strong></td>
              <td>Valid, not expired, unedited, all four corners visible. JPG or PNG under 4 MB.</td>
              <td>ShipStation</td>
            </tr>
            <tr>
              <td><strong>Proof of address</strong></td>
              <td>For example a water or electricity bill.</td>
              <td>Modern Retail</td>
            </tr>
            <tr>
              <td><strong>Store name and logo</strong></td>
              <td>Asked for during the application.</td>
              <td>Modern Retail</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        You also need the practical side in place before you apply: stock inside the US, a way to ship it with tracking, and a returns address.
      </p>

      <h2 id="register">How to open a Temu seller account, step by step</h2>
      <p>
        Registration happens at <Ext href={SRC.sellerCenter}>seller.temu.com</Ext>. Temu&apos;s own page gives the timing: about one minute to create the account, about ten minutes for the application, and a result in about a day. It adds that applications are normally reviewed within one business day.
      </p>
      <ol>
        <li>
          <strong>Create the account.</strong> Choose &quot;United States seller&quot;, enter an email or phone number and set a password.
        </li>
        <li>
          <strong>Choose your business location and type.</strong> Pick the type that matches how your business is actually registered.
        </li>
        <li>
          <strong>Enter your business registration details.</strong> Copy the name, EIN and address from your IRS letter character by character.
        </li>
        <li>
          <strong>Verify the representative.</strong> Choose the ID type, upload a clear photo of the ID and enter the person&apos;s details.
        </li>
        <li>
          <strong>Finish shop setup.</strong> Add your store name and logo, then submit.
        </li>
        <li>
          <strong>Wait for the result.</strong> If Temu asks for more documents, answer quickly and send clean scans.
        </li>
      </ol>

      <h2 id="fulfillment">How Temu orders are fulfilled</h2>
      <p>
        This is the part that surprises sellers who know Amazon FBA. Temu&apos;s <Ext href={SRC.sellerCenter}>Seller Center page</Ext> says plainly that Temu does not provide logistics services directly. Instead it connects with outside logistics options and offers flexible return settings so you can control your costs.
      </p>
      <p>In practice that means:</p>
      <ul>
        <li>You hold the stock in the US, in your own space or at a 3PL warehouse.</li>
        <li>You pack and ship each order and upload tracking.</li>
        <li>You can connect order and shipping software instead of working by hand. ShipStation lists itself, ShipBob, Rithum and Linnworks as connected tools, and USPS, UPS and DHL as carriers.</li>
        <li>If you run a Shopify store, <Ext href={SRC.shopifyApp}>Temu&apos;s Shopify app</Ext> syncs products, inventory and orders.</li>
      </ul>
      <p>
        <Ext href={SRC.shopifyGuide}>Shopify&apos;s guide for US sellers</Ext> reports that Temu expects free standard shipping for the shopper, which means the shipping cost comes out of your price. It also reports that sellers must provide tracking and meet delivery targets. We could not confirm the exact shipping deadlines on a public Temu page, so read the shipping rules inside Seller Center before you set your handling time.
      </p>

      <h2 id="mistakes">Common mistakes that slow down or sink an application</h2>
      <p>
        Temu does not publish a list of rejection reasons. These are the avoidable problems that follow from the requirements above.
      </p>
      <ul>
        <li><strong>Name or EIN typed differently from the IRS letter.</strong> A missing &quot;LLC&quot; or a different address format is enough to cause a mismatch.</li>
        <li><strong>A bad ID photo.</strong> Cropped corners, glare, an expired ID, an edited image or a file over the size limit.</li>
        <li><strong>The wrong business type.</strong> Choosing &quot;individual&quot; when you are registered as a company, or the other way round.</li>
        <li><strong>The wrong region.</strong> The US form is for US sellers. Sellers registered in mainland China or Hong Kong have a different entry.</li>
        <li><strong>No US stock.</strong> The program is for local fulfilment. Planning to ship each order from overseas does not fit it.</li>
        <li><strong>Pricing without shipping.</strong> If shipping is free for the shopper, your price has to carry it.</li>
        <li><strong>Assuming the fees.</strong> Do not copy a commission number from a blog post. Read your own agreement.</li>
      </ul>
      <div className="guide-note">
        <p>
          <strong>Apply in your own business&apos;s name.</strong> We do not buy, sell or transfer seller accounts on any marketplace, and we do not recommend anyone who does. An account that does not match the real owner is a risk to your money and your stock.
        </p>
      </div>

      <h2 id="after-approval">What happens after approval</h2>
      <p>
        Once the account is approved you add tax and bank details, set up shipping, and start listing. The <Ext href={SRC.academy}>Temu Seller Academy</Ext> has free courses for each of these steps: adding tax information, adding a bank account, adding products one by one or in bulk, shipping settings, confirming shipment and product ads.
      </p>
      <p>
        Shopify&apos;s guide notes that Temu reviews listings before they go public, so allow time between uploading and going live. ShipStation&apos;s guide says many sellers are live within 72 hours of approval, and that US sellers have also been able to sell into Canada since December 2025. Treat those as reported figures, not promises. Your first weeks should go on a small, well-priced catalog and clean, on-time shipping.
      </p>

      <h2 id="fees">Temu seller fees</h2>
      <p>
        Here is what we could verify. Temu&apos;s own <Ext href={SRC.temuAward}>February 2026 press release</Ext> says the Local Seller Program has no registration fees. Shopify&apos;s guide reports that Temu does not currently charge listing fees.
      </p>
      <p>
        Here is what we could not verify. We did not find a public Temu page that states a commission or referral rate for US local sellers, so we are not going to quote one. Numbers you see on blogs may be out of date or may apply to a different selling model. Check the fee terms in <Ext href={SRC.sellerCenter}>Temu Seller Center</Ext> and in your seller agreement, then add your shipping, packaging, returns and any 3PL cost before you set a price.
      </p>

      <h2 id="managed-service">When a managed service helps</h2>
      <p>
        Temu is simple to join and harder to run well. Prices on the platform are low, so small mistakes in shipping cost or returns eat the margin fast. If you already sell on Amazon or Walmart and have US stock, you may be able to add Temu yourself with an order tool and an hour a day.
      </p>
      <p>
        A managed service is worth a look when you do not have the staff to list, price, ship and answer buyers every day, or when you want Temu run next to your other stores by one team. Our <Link href="/services/temu">Temu store management</Link> covers listings, pricing, orders and daily account care. If you are starting from zero, our <Link href="/services/seller-account-setup">seller account setup</Link> service helps you prepare the documents and apply in your own business&apos;s name. We are an independent team, not part of Temu, and we cannot promise approval or sales.
      </p>
      <p>
        <Link href="/profit-check" className="btn-primary">
          Start the 2-minute Profit Check <FaArrowRight className="btn-arrow" size={12} aria-hidden="true" />
        </Link>
      </p>

      <h2 id="faq">Questions sellers ask</h2>
      {faqs.map((f) => (
        <React.Fragment key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </React.Fragment>
      ))}

      <h2 id="sources" style={{ fontSize: 24 }}>Sources we checked</h2>
      <ul>
        <li><Ext href={SRC.sellerCenter}>Temu Seller Center (official sign-up page)</Ext></li>
        <li><Ext href={SRC.academy}>Temu Seller Academy (official)</Ext></li>
        <li><Ext href={SRC.temuShopify}>Temu press release, December 2025: Shopify app and Local Seller Program</Ext></li>
        <li><Ext href={SRC.temuAward}>Temu press release, February 2026: Local Seller Program</Ext></li>
        <li><Ext href={SRC.modernRetail}>Modern Retail, November 2024: Temu opens to US sellers without an invite</Ext></li>
        <li><Ext href={SRC.shipstation}>ShipStation, July 2026: Temu&apos;s Local Seller Program guide</Ext></li>
        <li><Ext href={SRC.shopifyGuide}>Shopify, June 2026: How to sell on Temu, guide for US sellers</Ext></li>
      </ul>
    </GuideLayout>
  );
}
