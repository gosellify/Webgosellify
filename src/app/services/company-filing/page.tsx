import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import {
  ServiceHero,
  ServiceSection,
  StepList,
  FeatureList,
  PlainTable,
  RelatedLinks,
  ServiceNote,
} from "@/components/services/ServiceBlocks";
import type { Cell, TitledItem } from "@/components/services/ServiceBlocks";

const included: TitledItem[] = [
  { title: "LLC or LTD formation", desc: "Articles of Organization filed with the state you choose, usually Wyoming, Delaware or New Mexico. For a UK LTD we file with Companies House." },
  { title: "EIN and ITIN application", desc: "We prepare and submit your EIN application to the IRS. For non-residents who need one, we prepare the ITIN application with the required documents." },
  { title: "Registered agent", desc: "A registered agent with a physical address in your state of formation, to receive legal mail for the company." },
  { title: "Business bank account", desc: "We explain which banks and fintech providers accept your kind of company, and help you prepare the application. The provider decides whether to open the account." },
  { title: "Reseller certificate", desc: "A sales tax permit application, so you can buy inventory for resale from wholesalers." },
  { title: "Operating agreement", desc: "A written operating agreement that sets out your LLC's ownership and how it is run." },
];

const steps: TitledItem[] = [
  { title: "First conversation", desc: "We ask about your goals, suggest a state and entity type, and explain the steps and costs." },
  { title: "You send documents", desc: "You provide basic ID documents. We prepare the formation paperwork for you to sign." },
  { title: "We file", desc: "State filing, EIN application, registered agent and operating agreement." },
  { title: "You receive the company documents", desc: "You get the formation documents and EIN letter, which marketplaces and banks ask for." },
];

const packages: Cell[][] = [
  ["LLC formation", "$100 plus the state fee", "Articles of Organization filing, operating agreement, registered agent for one year, documents delivered digitally"],
  ["EIN application", "$50", "Form SS-4 preparation, IRS EIN application, confirmation letter"],
  ["ITIN application", "$250", "Form W-7 and document preparation. Processing time is set by the IRS."],
  ["Complete business setup", "Custom quote", "LLC formation and EIN, help with the bank account application, reseller certificate, business address, marketplace seller registration and ITIN support"],
];

const states: TitledItem[] = [
  { title: "Wyoming", desc: "Chosen by many online sellers, including non-residents. Gosellify LLC is registered in Wyoming." },
  { title: "Delaware", desc: "Often chosen by larger companies and by companies that plan to raise investment." },
  { title: "New Mexico", desc: "Often chosen by owners who want low yearly upkeep." },
];

const comparison: Cell[][] = [
  ["Experience with ecommerce sellers", "Our daily work", "Varies by provider"],
  ["EIN and ITIN handling", "Offered", "Varies by provider"],
  ["Help with the bank account application", "Offered", "Varies by provider"],
  ["Marketplace registration guidance", "Offered", "Varies by provider"],
  ["Process for non-residents", "Yes, handled remotely", "Varies by provider"],
  ["Registered agent", "Included for the first year", "Varies by provider"],
  ["Ongoing compliance reminders", "Offered", "Varies by provider"],
  ["WhatsApp support", "Yes", "Varies by provider"],
];

const faqs = [
  {
    question: "Can a non-US resident form a US LLC?",
    answer: "Yes. You do not need US citizenship, a green card or a visa to own a US LLC, and the filing can be done remotely.",
  },
  {
    question: "Which state is best for my ecommerce LLC?",
    answer: "Wyoming, Delaware and New Mexico are common choices for online sellers. They differ in yearly fees, reporting duties and privacy rules, and those details change. We go through the current rules with you and suggest one for your situation.",
  },
  {
    question: "What is an EIN and do I need one?",
    answer: "An EIN (Employer Identification Number) is the tax ID the IRS gives a business. Banks and marketplaces such as Amazon and Walmart ask for it. We prepare and submit the application.",
  },
  {
    question: "How long does the whole process take?",
    answer: "It depends on the state and on the IRS, and we cannot promise a date. State filing is usually the quick part. The EIN and especially the ITIN depend on IRS processing times. We tell you the current estimate before you order.",
  },
  {
    question: "Can you help open a US bank account remotely?",
    answer: "We help you choose a bank or fintech provider that accepts non-resident owners and prepare the documents. The provider decides whether to open the account, and we cannot guarantee approval.",
  },
  {
    question: "What is a reseller certificate?",
    answer: "A reseller certificate lets you buy inventory for resale from wholesalers without paying sales tax on that purchase. Rules differ by state. We handle the application.",
  },
  {
    question: "What ongoing compliance is required?",
    answer: "Most states ask for an annual report or a yearly fee, and a foreign-owned LLC also has federal filings each year. We send reminders and can handle the filings. See our tax filing service for the federal side.",
  },
  {
    question: "Do you offer support after formation?",
    answer: "Yes. We offer annual report filing, registered agent renewal and compliance reminders.",
  },
];

export default function CompanyFilingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Company filing, EIN and ITIN"
        title="US LLC formation, EIN and ITIN filing service"
        lead="US LLC formation, EIN, ITIN and UK LTD filing for international ecommerce sellers. We handle the paperwork remotely, so you have the company documents that Amazon, Walmart, Shopify, eBay and Etsy ask for."
        points={["LLC formation from $100 plus the state fee", "EIN application $50", "ITIN application $250", "Handled remotely"]}
        primaryLabel="See the prices"
        primaryHref="#packages"
        note="We are a filing service, not a law firm or a tax adviser. For legal or tax advice about your own situation, speak to a licensed professional."
      />

      <ServiceSection eyebrow="Included" title="What the company filing service covers" tint>
        <FeatureList items={included} />
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="How the filing works">
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection id="packages" eyebrow="Prices" title="What it costs" lead="Our fee is listed for each service. State fees are paid on top and go to the state." tint>
        <PlainTable columns={["Service", "Our fee", "What you get"]} rows={packages} note="Prices last reviewed in November 2026. Message us on WhatsApp at +1 307 393 8789 for a quote on the complete setup." />
      </ServiceSection>

      <ServiceSection eyebrow="Choosing a state" title="Wyoming, Delaware or New Mexico" lead="The three states differ in yearly fees, reporting duties and privacy rules. We go through the current rules with you before you choose.">
        <FeatureList items={states} />
        <div style={{ marginTop: 28 }}>
          <ServiceNote title="Why we do not print state fees here">
            <p>
              State fees and reporting rules change. We would rather send you the current figure from the state&apos;s
              own website than leave an old number on this page.
            </p>
          </ServiceNote>
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify and general filing services" lead="General filing services form companies for every kind of business. We do it for online sellers. Ask any provider the same questions." tint>
        <PlainTable columns={["What you need", "Gosellify", "General filing services"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about LLC formation, EIN and ITIN" />

      <RelatedLinks
        tint
        links={[
          { href: "/services/tax-filing", label: "Business tax filing and bookkeeping", desc: "Yearly returns for LLCs, including non-resident owners." },
          { href: "/services/seller-account-setup", label: "Seller account setup", desc: "Help opening marketplace seller accounts in your own name." },
          { href: "/services/walmart", label: "Walmart account management services" },
        ]}
      />

      <CTASection />
    </>
  );
}
