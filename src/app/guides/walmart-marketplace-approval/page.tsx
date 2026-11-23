import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GuideLayout, { TocItem } from "@/components/guides/GuideLayout";
import { guides, GuideMeta } from "@/app/guides/guides";

const SLUG = "walmart-marketplace-approval";
const meta: GuideMeta | undefined = guides.find((g) => g.slug === SLUG);
const TITLE: string = meta ? meta.title : "How to get approved on Walmart Marketplace";
const DESCRIPTION: string = meta ? meta.description : "What Walmart asks for, how the application works, and the common reasons sellers get rejected.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
};

/** Official Walmart pages this guide was checked against (opened November 2026). */
const SRC = {
  before: "https://marketplacelearn.walmart.com/guides/Getting%20started/Onboarding/Before-you-start-selling-on-Walmart-Marketplace",
  verify: "https://marketplacelearn.walmart.com/guides/onboarding-business-verification",
  onboarding: "https://marketplacelearn.walmart.com/guides/Getting%20started/Onboarding/Complete-onboarding-in-Seller-Center",
  registration: "https://marketplace.walmart.com/seller-registration-guide/",
  pricing: "https://marketplace.walmart.com/pricing/",
  conduct: "https://marketplacelearn.walmart.com/guides/Policies%20%26%20standards/Performance/Marketplace-Seller-Code-of-Conduct",
  standards: "https://marketplacelearn.walmart.com/guides/Policies%20%26%20standards/Performance/Seller-performance-standards",
  hold: "https://marketplacelearn.walmart.com/guides/Taxes%20&%20payments/Payments/new-seller-payment-hold-policy",
  signup: "https://seller.walmart.com/signup",
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
  { id: "requirements", label: "Walmart seller requirements" },
  { id: "application", label: "The application, step by step" },
  { id: "rejections", label: "Why applications get rejected" },
  { id: "after-approval", label: "What happens after approval" },
  { id: "fees", label: "Costs and fees" },
  { id: "managed-service", label: "When a managed service helps" },
  { id: "faq", label: "Questions sellers ask" },
];

interface Faq {
  q: string;
  a: string;
}

const faqs: Faq[] = [
  {
    q: "How long does Walmart Marketplace approval take?",
    a: "Walmart's onboarding guide says business verification can take from a few minutes to a few business days. It can take longer if Walmart asks for more documents or an identity check. After you add inventory, Walmart says account setup may need up to four hours to finalize.",
  },
  {
    q: "Can I apply to Walmart Marketplace with my Social Security Number?",
    a: "No. Walmart's requirements page asks for a Business Tax ID or a Business License Number and says a Social Security Number is not accepted. You need a registered business first.",
  },
  {
    q: "Why did Walmart reject my seller application?",
    a: "Walmart does not always give a detailed reason. The causes its own pages point to are business details that do not match your official documents, unclear ID or document uploads, an identity check that was not finished within seven days, and payment setup that was not finished within 30 days. Missing basics, such as selling history, product IDs or a US returns address, can also hold you back.",
  },
  {
    q: "Can I buy an approved Walmart seller account instead of applying?",
    a: "No. Walmart's Marketplace Seller Code of Conduct prohibits account brokering and any activity that transfers, sells or purchases seller accounts to get around its policies or enforcement. It can lead to suspension or termination. Apply in your own business's name.",
  },
  {
    q: "Do I need a US warehouse to sell on Walmart Marketplace?",
    a: "You need either Walmart Fulfillment Services (WFS) or a US warehouse that ships to consumers and can handle returns. Walmart also requires a US return center before you can sell.",
  },
  {
    q: "Is there a monthly fee to sell on Walmart Marketplace?",
    a: "Walmart's pricing page says there are no setup or monthly fees. You pay a referral fee on each completed sale, and the rate depends on the category and the sale price. WFS and advertising are optional and cost extra.",
  },
  {
    q: "What does a Walmart Marketplace consultant actually do?",
    a: "A Walmart Marketplace consultant or management team checks your documents before you apply, then handles the work after approval: listings, pricing, orders, customer messages and account health. No consultant can approve your application or promise that Walmart will. That decision belongs to Walmart.",
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

export default function WalmartApprovalGuidePage() {
  return (
    <GuideLayout slug={SLUG} toc={toc}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <h2 id="short-answer" style={{ marginTop: 24 }}>The short answer</h2>
      <p>
        To get approved on Walmart Marketplace you need a registered business with a tax ID, documents that prove the business name and address, a personal photo ID, some online selling history, products with real UPC or GTIN codes, and a way to ship and take returns inside the US. You apply for free in Seller Center, and Walmart checks your details against government records. Most problems come from details that do not match your documents, so the best preparation is boring: get every name, number and address identical before you start.
      </p>
      <div className="guide-note">
        <p>
          <strong>Last reviewed: November 2026.</strong> Walmart changes its rules and fees. Every rule below links to the official Walmart page we read, so you can check the current version yourself. Nothing here is a promise that Walmart will approve you.
        </p>
      </div>

      <h2 id="requirements">Walmart seller requirements</h2>
      <p>
        Walmart lists its minimum requirements on the <Ext href={SRC.before}>Before you start selling</Ext> page in Seller Help. This is what it asks for from every seller.
      </p>
      <div className="guide-table">
        <table style={{ minWidth: 560 }}>
          <thead>
            <tr>
              <th>What Walmart asks for</th>
              <th>What it means for you</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Business Tax ID or Business License Number</strong></td>
              <td>You must apply as a business. Walmart says a Social Security Number is not accepted.</td>
            </tr>
            <tr>
              <td><strong>Business entity classification</strong></td>
              <td>Know your entity type (for example LLC or corporation) and enter it the way it was registered.</td>
            </tr>
            <tr>
              <td><strong>A copy of a personal ID</strong></td>
              <td>A government photo ID for the applicant or legal representative, front and back.</td>
            </tr>
            <tr>
              <td><strong>Documents that verify business name and address</strong></td>
              <td>For example a business license or registration certificate. Walmart may also ask for proof of address, such as a utility bill.</td>
            </tr>
            <tr>
              <td><strong>History of marketplace or ecommerce success</strong></td>
              <td>Walmart wants sellers who have sold online before. It does not publish a minimum sales number on this page.</td>
            </tr>
            <tr>
              <td><strong>Products with GTIN or UPC codes</strong></td>
              <td>Codes should come from a GS1 Company Prefix. Walmart has a GTIN exemption request for items with no product ID, such as some private label goods.</td>
            </tr>
            <tr>
              <td><strong>A compliant catalog</strong></td>
              <td>Nothing you list may break the Prohibited Products Policy.</td>
            </tr>
            <tr>
              <td><strong>US fulfillment with returns</strong></td>
              <td>Either Walmart Fulfillment Services (WFS) or a US warehouse that ships to consumers, can take returns and can meet the Seller Performance Standards.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Walmart&apos;s <Ext href={SRC.registration}>seller registration guide</Ext> adds two points. Your tax registration has to match your IRS records or government documents exactly. And sellers based outside the US need extra documents that depend on the country, so read the list for your country before you apply.
      </p>

      <h2 id="application">The Walmart Marketplace application, step by step</h2>
      <p>
        The whole Walmart Marketplace application happens online in Seller Center. Walmart describes the steps in its guide to <Ext href={SRC.onboarding}>completing onboarding in Seller Center</Ext>.
      </p>
      <ol>
        <li>
          <strong>Create your account.</strong> Sign up at <Ext href={SRC.signup}>seller.walmart.com/signup</Ext> with a business email. Signing up is free.
        </li>
        <li>
          <strong>Complete business verification.</strong> Enter your legal business name, entity type, business phone number and state business registration number, then your own details exactly as they appear on your ID. Walmart checks this with federal and state records. See the <Ext href={SRC.verify}>business verification guide</Ext>.
        </li>
        <li>
          <strong>Upload your documents.</strong> Photo ID is required. Files must be PNG, JPG or PDF and under 5MB each. Phone photos are fine if they are clear and have no glare.
        </li>
        <li>
          <strong>Pass the identity check if asked.</strong> Walmart may ask you to scan your ID and face with your device camera. You must finish this within seven days of the notice, or Walmart closes the account.
        </li>
        <li>
          <strong>Set up payouts.</strong> Walmart does not pay by ACH direct deposit. You choose its Marketplace Wallet or an approved third-party payout provider. You have 30 days after finishing your business details to complete this, or the application is declined and you must apply again.
        </li>
        <li>
          <strong>Set up your store.</strong> Add your display name and customer service contact, choose WFS or your own shipping, and add a US return center. Then add your first items.
        </li>
      </ol>
      <p>
        Walmart says verification can take from a few minutes to a few business days, and you cannot move to store setup until it succeeds. There is also an optional express setup that imports your business details and listings from another marketplace you already sell on.
      </p>

      <h2 id="rejections">Why Walmart rejects seller applications</h2>
      <p>
        &quot;Why did Walmart reject my seller application?&quot; is one of the most common questions we hear. Walmart does not publish a full list of rejection reasons, so we will not pretend to have one. But its own help pages name the things that cause delays, failed verification and declined accounts. These are the ones to check first.
      </p>
      <ul>
        <li>
          <strong>Details that do not match your documents.</strong> Walmart says information must match your official business documents or verification may be delayed. If you see an EIN validation error, re-enter the business details exactly as printed, including punctuation and suffixes like LLC.
        </li>
        <li>
          <strong>Applying as a person, not a business.</strong> An SSN is not accepted in place of a Business Tax ID.
        </li>
        <li>
          <strong>Poor document uploads.</strong> Blurry, dark or glared photos, missing back side of the ID, or files over 5MB.
        </li>
        <li>
          <strong>Missing the seven-day identity check.</strong> If Walmart asks for it and you do not finish in time, the account is closed.
        </li>
        <li>
          <strong>Leaving payment setup unfinished.</strong> After 30 days the account is declined and you start over.
        </li>
        <li>
          <strong>No selling history.</strong> A brand new business with no online sales does not meet the &quot;history of ecommerce success&quot; requirement.
        </li>
        <li>
          <strong>Products without valid IDs, or restricted products.</strong> No GS1 codes and no exemption, or items on the prohibited list.
        </li>
        <li>
          <strong>No US returns address.</strong> A US return center is required to sell.
        </li>
      </ul>
      <p>
        If verification fails, Walmart&apos;s advice is to check that your details match your documents and to contact Seller Support through the Help button in Seller Center.
      </p>
      <div className="guide-note">
        <p>
          <strong>Do not buy an account to skip the line.</strong> Walmart&apos;s <Ext href={SRC.conduct}>Marketplace Seller Code of Conduct</Ext> prohibits account brokering and any activity that transfers, sells or purchases seller accounts to get around its policies or enforcement, and it treats misrepresenting who owns an account as a violation. The result can be suspension or termination. We do not buy, sell or transfer seller accounts. Apply under your own business.
        </p>
      </div>

      <h2 id="after-approval">What happens after approval</h2>
      <p>
        Approval is the start of the work, not the end. Here is what to expect in the first weeks.
      </p>
      <h3>Your items go live</h3>
      <p>
        Items can only be published once account setup is complete. Walmart notes that setup may take up to four hours to finalize after you add inventory. You can add items one at a time, by matching existing Walmart listings, by bulk upload, or through the API.
      </p>
      <h3>Your first payouts are held for a while</h3>
      <p>
        Walmart applies a <Ext href={SRC.hold}>new seller payment hold</Ext>. It starts on the day of your first shipped or delivered order. For US sellers the delay is up to 14 days, and for sellers incorporated outside the US it is up to 21 days. The page says the hold ends once 90 days have passed since that first order and you have received $7,500 in payments. Plan your cash flow around this.
      </p>
      <h3>Walmart measures your performance</h3>
      <p>
        Every seller must meet the <Ext href={SRC.standards}>Seller Performance Standards</Ext>. Walmart warns that missing them may lead to suppressed listings, suspension or termination. These were the targets at our last review.
      </p>
      <div className="guide-table">
        <table style={{ minWidth: 420 }}>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Walmart&apos;s standard</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>On-time delivery rate</td><td>90% or above</td></tr>
            <tr><td>Valid tracking rate</td><td>99% or above</td></tr>
            <tr><td>Seller response rate</td><td>95% or above</td></tr>
            <tr><td>Cancellation rate</td><td>2% or below</td></tr>
            <tr><td>Negative feedback rate</td><td>2% or below</td></tr>
            <tr><td>Item not received rate</td><td>2% or below</td></tr>
            <tr><td>Late shipment rate</td><td>5% or below</td></tr>
            <tr><td>Return rate</td><td>6% or below</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="fees">Costs and fees</h2>
      <p>
        Walmart&apos;s <Ext href={SRC.pricing}>pricing page</Ext> says there are no setup or monthly fees. You pay a referral fee on each completed sale. The rate depends on the product category and the sale price. When we last checked, the listed rates ran from 3% to 20%, and many common categories, such as home and kitchen, toys and pet supplies, were listed at 15%.
      </p>
      <p>
        WFS fulfillment and storage, and advertising, are optional and billed separately. Those numbers change, so read the current fee schedule on the pricing page before you price a product. You can test your own numbers in our <Link href="/tools/profit-calculator">profit calculator</Link>.
      </p>

      <h2 id="managed-service">When a managed service helps</h2>
      <p>
        You can do everything in this guide yourself, and many sellers do. A managed service makes sense in two cases. The first is when you are not sure your business documents are in order and want someone to check them before you apply. The second is after approval, when the daily work of listings, orders, tracking and customer replies starts to cost you more time than it is worth.
      </p>
      <p>
        Our <Link href="/services/seller-account-setup">seller account setup</Link> service prepares your documents and walks the application with you, in your own business&apos;s name. Our <Link href="/services/walmart-management">Walmart marketplace management services</Link> then run the store day to day and keep an eye on the performance standards above. We cannot approve an application and we do not promise that Walmart will. We are an independent team, not part of Walmart.
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

      <h2 id="sources" style={{ fontSize: 24 }}>Official sources we checked</h2>
      <ul>
        <li><Ext href={SRC.before}>Walmart Seller Help: Before you start selling on Walmart Marketplace</Ext></li>
        <li><Ext href={SRC.verify}>Walmart Seller Help: Onboarding business verification</Ext></li>
        <li><Ext href={SRC.onboarding}>Walmart Seller Help: Complete onboarding in Seller Center</Ext></li>
        <li><Ext href={SRC.registration}>Walmart Marketplace: Seller registration guide</Ext></li>
        <li><Ext href={SRC.pricing}>Walmart Marketplace: Pricing and referral fees</Ext></li>
        <li><Ext href={SRC.standards}>Walmart Seller Help: Seller Performance Standards</Ext></li>
        <li><Ext href={SRC.hold}>Walmart Seller Help: New seller payment hold policy</Ext></li>
        <li><Ext href={SRC.conduct}>Walmart Seller Help: Marketplace Seller Code of Conduct</Ext></li>
      </ul>
    </GuideLayout>
  );
}
