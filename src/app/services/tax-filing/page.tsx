import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import {
  ServiceHero,
  ServiceSection,
  StepList,
  FeatureList,
  PlainList,
  PlainTable,
  RelatedLinks,
  ServiceNote,
} from "@/components/services/ServiceBlocks";
import type { Cell, TitledItem } from "@/components/services/ServiceBlocks";

const handled: TitledItem[] = [
  { title: "Federal and state tax returns", desc: "Annual income tax filing for an LLC, S-Corp or sole proprietorship, including Schedule C, Form 1065 and Form 1120-S." },
  { title: "Multi-state sales tax", desc: "A review of where your sales create a filing duty, registration in those states, and return filing on schedule." },
  { title: "Bookkeeping and profit and loss", desc: "Year-round bookkeeping for Amazon, Walmart, Shopify, eBay and Etsy sales, with transactions categorized for tax time." },
  { title: "Quarterly estimated taxes", desc: "We calculate estimated payments, remind you of the dates and prepare the vouchers." },
  { title: "1099-K reconciliation", desc: "Marketplaces report gross sales on Form 1099-K. We reconcile that figure with your real net income." },
  { title: "IRS letters", desc: "If the IRS writes to you about a return we prepared, we help you answer." },
];

const steps: TitledItem[] = [
  { title: "First conversation", desc: "We review your business structure, income sources, marketplace accounts and filing duties." },
  { title: "You send documents", desc: "You send marketplace reports, expense records and prior returns." },
  { title: "We prepare and you review", desc: "We prepare the returns and go through them with you before anything is filed." },
  { title: "Filed", desc: "We e-file and stay available for questions and notices about that return." },
];

const nonResident: string[] = [
  "Form 5472 with a pro forma Form 1120 for foreign-owned single-member LLCs",
  "Form 1040-NR where there is US-source income",
  "FBAR reporting for foreign bank accounts, where it applies",
  "A check of whether a tax treaty applies to you",
  "ITIN application support",
];

const deductions: string[] = [
  "Cost of goods sold",
  "Marketplace referral and fulfillment fees",
  "Storage and warehouse fees",
  "Shipping costs",
  "Advertising spend",
  "Software subscriptions",
  "Professional services",
  "Insurance premiums",
];

const comparison: Cell[][] = [
  ["Experience with ecommerce sellers", "Our daily work", "Varies by accountant"],
  ["Multi-state sales tax filing", "Offered", "Varies by accountant"],
  ["1099-K reconciliation", "Offered", "Varies by accountant"],
  ["Non-resident LLC filing (Form 5472)", "Offered", "Varies by accountant"],
  ["Year-round bookkeeping", "Offered", "Varies by accountant"],
  ["Quarterly estimated tax preparation", "Offered", "Varies by accountant"],
  ["Pricing", "Flat quote before work starts", "Ask each accountant"],
  ["WhatsApp support", "Yes", "Varies by accountant"],
];

const faqs = [
  {
    question: "Do I need to file taxes if my business lost money?",
    answer: "In most cases yes. A business usually still has to file in a loss year, and some forms carry penalties when they are missed. We check which forms apply to your company.",
  },
  {
    question: "What are the deadlines for ecommerce tax filing?",
    answer: "Deadlines depend on the entity type. Check the current dates on the IRS website. We tell you your dates when we review your business.",
  },
  {
    question: "How do you handle multi-state sales tax?",
    answer: "We look at your sales by state across all marketplaces, check each state's current economic nexus threshold, register where you need to, and file the returns on schedule.",
  },
  {
    question: "I am a non-US resident with a US LLC. What forms do I file?",
    answer: "A foreign-owned single-member LLC generally has to file Form 5472 with a pro forma Form 1120 every year, even with no US income, and the penalty for missing it is large. If you have US-source income, Form 1040-NR may also apply. We check your case and prepare the forms.",
  },
  {
    question: "What deductions can ecommerce sellers claim?",
    answer: "Common ones are cost of goods sold, marketplace fees, shipping, advertising, software, professional services, insurance and warehouse fees. What you can claim depends on your records and your situation.",
  },
  {
    question: "Do I need quarterly estimated tax payments?",
    answer: "The IRS expects estimated payments during the year from many business owners. We work out whether that applies to you, calculate the payments and remind you of the dates.",
  },
  {
    question: "What is a 1099-K and how does it affect me?",
    answer: "Marketplaces issue Form 1099-K to report your gross sales, which can include shipping, sales tax, returns and refunds. We reconcile it with your real net income so the return shows the right figure.",
  },
  {
    question: "How are you different from tax software or a general accountant?",
    answer: "We work with online sellers every day, so marketplace fee reports, FBA costs, multi-state sales tax and 1099-K reconciliation are routine for us. A general accountant may or may not have that experience, so ask.",
  },
];

export default function TaxFilingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Tax filing services"
        title="Business tax filing and bookkeeping service"
        lead="Federal and state returns, multi-state sales tax and bookkeeping for ecommerce sellers, LLCs and non-resident owners. Prices start at $100, and you get a flat quote before any work starts."
        points={["Federal and state returns", "Multi-state sales tax", "Non-resident LLC filings", "Flat quote before work starts"]}
        primaryLabel="Ask for a tax quote"
        primaryHref="/contact"
        note="This page is general information, not tax advice. Tax rules, forms and deadlines change, so we confirm what applies to you before filing."
      />

      <ServiceSection eyebrow="What we handle" title="Tax and bookkeeping work we do" tint>
        <FeatureList items={handled} />
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="How tax filing works">
        <StepList steps={steps} />
      </ServiceSection>

      <ServiceSection eyebrow="Non-resident sellers" title="International seller with a US LLC" lead="Non-resident LLC owners have filing duties that are easy to miss. These are the ones we check for you." tint>
        <PlainList items={nonResident} />
        <div style={{ marginTop: 28 }}>
          <ServiceNote title="About Form 5472">
            <p>
              A foreign-owned single-member LLC generally has to file Form 5472 every year, even when it had no US
              income. Read the IRS instructions for Form 5472 for the current rules and penalty, or ask us to check
              your case.
            </p>
          </ServiceNote>
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Deductions" title="Costs that online sellers often forget to record">
        <PlainList items={deductions} />
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify and a general accountant" lead="A plain list. Ask any accountant you consider the same questions." tint>
        <PlainTable columns={["What you need", "Gosellify", "General accountants"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about business tax filing" />

      <RelatedLinks
        tint
        links={[
          { href: "/services/company-filing", label: "US LLC formation, EIN and ITIN filing", desc: "Company formation for international sellers." },
          { href: "/services/amazon", label: "Amazon store management services" },
          { href: "/services/walmart", label: "Walmart account management services" },
        ]}
      />

      <CTASection />
    </>
  );
}
