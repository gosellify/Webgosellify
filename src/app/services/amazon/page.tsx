import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import { ServiceHero, ServiceSection, RelatedLinks } from "@/components/services/ServiceBlocks";
import type { RelatedLink } from "@/components/services/ServiceBlocks";

const services: RelatedLink[] = [
  {
    href: "/services/amazon-fba",
    label: "Amazon FBA",
    desc: "Fulfillment by Amazon for private label brands. We handle product research, sourcing, listings, ads and inventory planning. Amazon stores, packs and ships.",
  },
  {
    href: "/services/amazon-wholesale",
    label: "Amazon wholesale",
    desc: "Branded products bought in bulk from authorized distributors and sold on Amazon. We handle supplier contact, approvals paperwork, prep and account management.",
  },
  {
    href: "/services/amazon-arbitrage",
    label: "Amazon 2-step dropshipping",
    desc: "Products are bought when a customer orders, then received, inspected and repacked at our US warehouses before shipping. Read the risk note on that page first.",
  },
  {
    href: "/services/amazon-reinstatement",
    label: "Amazon account reinstatement",
    desc: "For a suspended or deactivated account: root cause review, a plan of action and appeal, and follow-up with Amazon. The decision is Amazon's.",
  },
];

const faqs = [
  {
    question: "How much does it cost to start selling on Amazon?",
    answer: "Amazon charges its own selling plan and referral fees. Check the current figures on Amazon's official pricing page. On top of that you need working capital of $3,000 to $5,000 depending on the business model. Our management is paid from profit.",
  },
  {
    question: "Which Amazon business model is best for beginners?",
    answer: "It depends on your capital and how much risk you accept. Wholesale uses established brands and real stock with distributor invoices. Private label FBA needs more capital and time. 2-step dropshipping needs less stock but carries policy risk that you should read about first.",
  },
  {
    question: "Do I need a US LLC to sell on Amazon?",
    answer: "Amazon accepts sellers from many countries, so an LLC is not always required. Many international sellers still form a US LLC for banking and tax reasons. We offer LLC formation as a separate service.",
  },
  {
    question: "How long does it take to set up an Amazon store?",
    answer: "Account verification is done by Amazon and its timing is not in our hands. Once the account is active, we set up the catalog and listings and start daily management.",
  },
  {
    question: "Can you help if my Amazon account is suspended?",
    answer: "Yes. We review the suspension reason, write a plan of action, submit the appeal and follow up. We cannot guarantee reinstatement, because the decision is Amazon's.",
  },
  {
    question: "What kind of results can I expect?",
    answer: "We do not promise sales, profit or a return. Results depend on the model, the products and your capital. The Gosellify Portal shows profit and loss for every order, so you judge the store on real numbers.",
  },
];

export default function AmazonPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Amazon seller services"
        title="Amazon store management services for sellers"
        lead="We manage Amazon stores for sellers: FBA, wholesale, 2-step dropshipping and account reinstatement. This page compares the models so you can pick the one that fits your capital and your risk level."
        secondaryHref="/pricing"
        note="We are an independent agency. We are not part of Amazon and we do not promise sales, profit or account approval."
      />

      <ServiceSection eyebrow="About the marketplace" title="Selling on Amazon as a third-party seller" tint>
        <div style={{ maxWidth: 760, display: "grid", gap: 14, color: "var(--color-text-light)" }}>
          <p>
            Amazon lets third-party sellers list products next to its own. Sellers can ship orders themselves or send
            stock to Amazon&apos;s fulfillment centers through FBA.
          </p>
          <p>
            The main choice is the business model. Wholesale, private label and 2-step dropshipping need different
            amounts of capital, carry different risks and involve different daily work.
          </p>
          <p>
            At Gosellify we handle store setup, product sourcing, daily operations and advertising. The account stays
            in your name, and you see every order&apos;s profit and loss in the Gosellify Portal.
          </p>
        </div>
      </ServiceSection>

      <RelatedLinks title="Our Amazon services" links={services} />

      <ServiceFeaturesGrid />

      <ServiceBenefits />

      <ServiceFAQ faqs={faqs} title="Questions about selling on Amazon" tint />

      <CTASection />
    </>
  );
}
