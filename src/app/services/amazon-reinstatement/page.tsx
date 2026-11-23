import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/home/CTASection";
import {
  ServiceHero,
  ServiceSection,
  StepList,
  PlainList,
  PlainTable,
  RelatedLinks,
  ServiceNote,
} from "@/components/services/ServiceBlocks";
import type { Cell, TitledItem } from "@/components/services/ServiceBlocks";

const suspensionTypes: string[] = [
  "Inauthentic item claims",
  "Intellectual property and trademark complaints",
  "Policy violations",
  "High order defect rate",
  "Linked account issues",
  "Appeals that were already denied",
];

const steps: TitledItem[] = [
  { title: "Case analysis", desc: "We read your suspension notice, account history and metrics to find the root cause." },
  { title: "Evidence", desc: "We collect the documents that support your case, such as invoices and supplier records." },
  { title: "Plan of action and appeal", desc: "We write a plan of action for your case that covers the root cause, the corrections made and the steps to prevent a repeat, and submit the appeal." },
  { title: "Follow-up", desc: "We follow up with Amazon's seller performance team and answer further questions until Amazon gives a final decision." },
];

const comparison: Cell[][] = [
  ["Plan of action written for your case", "Yes", "You write it", "Varies by firm"],
  ["Knowledge of Amazon seller policy", "Daily work for our team", "Your own research", "Varies by firm"],
  ["Evidence gathering and documentation", "Included", "You do it", "Varies by firm"],
  ["Work on previously denied appeals", "Yes", "You do it", "Varies by firm"],
  ["Advice after reinstatement", "Included", "Not applicable", "Varies by firm"],
  ["First case review", "Free", "Not applicable", "Ask each firm"],
];

const faqs = [
  { question: "Why was my Amazon account suspended?", answer: "Common reasons include inauthentic item claims, intellectual property complaints, policy violations, a high order defect rate, linked accounts or restricted products. We read your notice to find the exact cause and build the appeal around it." },
  { question: "How long does reinstatement take?", answer: "It depends on the case and on Amazon. We cannot promise a date. We start on the appeal as soon as we have your documents." },
  { question: "Can you help if my appeal was already denied?", answer: "Yes. We review what was submitted before, find the weak points, gather stronger evidence and write a new appeal." },
  { question: "What is a plan of action (POA)?", answer: "It is a document for Amazon that explains the root cause of the problem, what you have corrected and what you will do to prevent it. A vague or copied plan of action is often rejected." },
  { question: "Do you guarantee reinstatement?", answer: "No. The final decision is Amazon's and nobody can guarantee it. If we think a case cannot be helped, we tell you before any work starts." },
  { question: "What do you need from me to start?", answer: "The suspension notice, any previous appeals, invoices for the affected products and a short description of your business. We will also need access to the account's performance notifications." },
  { question: "How much does it cost?", answer: "The price depends on the case. The first review is free, and we give you a written quote before any work starts." },
];

export default function AmazonReinstatementPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Amazon account suspended"
        title="Amazon account reinstatement and appeal service"
        lead="Help with a suspended or deactivated Amazon seller account: a root cause review, a plan of action and appeal written for your case, and follow-up with Amazon."
        primaryLabel="Ask for a free case review"
        primaryHref="/contact"
        note="We are an independent agency and not part of Amazon. The decision on every appeal is Amazon's, and we do not guarantee reinstatement."
      />

      <ServiceSection eyebrow="Cases we work on" title="Reasons for suspension we handle" tint>
        <PlainList items={suspensionTypes} />
      </ServiceSection>

      <ServiceSection eyebrow="The process" title="How the appeal works">
        <StepList steps={steps} />
        <div style={{ marginTop: 28 }}>
          <ServiceNote title="What we do not promise">
            <p>
              We do not promise a result or a date. We do not use invented documents, and we will not write an appeal
              that says something untrue. If the root cause is real, the plan of action has to fix it.
            </p>
          </ServiceNote>
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Comparison" title="Gosellify, appealing yourself, or a law firm" lead="A plain list of who does what. Ask any firm you consider the same questions." tint>
        <PlainTable columns={["What you need", "Gosellify", "Appealing yourself", "Law firms"]} rows={comparison} />
      </ServiceSection>

      <ServiceFAQ faqs={faqs} title="Questions about Amazon account reinstatement" />

      <RelatedLinks
        tint
        links={[
          { href: "/services/amazon", label: "Amazon store management services" },
          { href: "/services/amazon-wholesale", label: "Amazon wholesale store management" },
          { href: "/contact", label: "Contact us about your case" },
        ]}
      />

      <CTASection />
    </>
  );
}
