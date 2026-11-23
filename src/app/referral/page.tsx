import type { Metadata } from "next";
import CTASection from "@/components/home/CTASection";
import { PlainList, ServiceHero, ServiceSection, StepList } from "@/components/services/ServiceBlocks";
import type { TitledItem } from "@/components/services/ServiceBlocks";

export const metadata: Metadata = {
  title: "Affiliate Referral Program for Ecommerce Sellers",
  description:
    "Refer a seller to Gosellify and earn a monthly commission for each active referral. See how the affiliate referral program works and how to join.",
  alternates: { canonical: "/referral" },
};

const steps: { title: string; text: string }[] = [
  {
    title: "Message us",
    text: "Tell us on WhatsApp that you want to join the referral program.",
  },
  {
    title: "Introduce a seller",
    text: "Send us a seller who wants their Amazon, Walmart, eBay or Shopify store managed.",
  },
  {
    title: "Get paid monthly",
    text: "If the seller becomes a client, we pay you a commission every month for as long as that client stays active.",
  },
];

const terms: string[] = [
  "Commissions are paid monthly for each active referred client.",
  "The amount depends on the client's store. We cannot tell you a figure in advance.",
  "There is no limit on how many sellers you can refer.",
  "There are no guarantees of any amount.",
];

const stepItems: TitledItem[] = steps.map((step) => ({ title: step.title, desc: step.text }));

export default function ReferralPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Referral program"
        title="Affiliate referral program for ecommerce sellers"
        lead="Know a seller who needs help running their store? Introduce them to us. We pay you a monthly commission for each referred client while they stay active."
        primaryLabel="Join on WhatsApp"
        primaryHref="https://wa.me/13073938789"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />

      <ServiceSection eyebrow="Three steps" title="How it works" tint>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <StepList steps={stepItems} />
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="The terms" title="What to expect">
        <PlainList items={terms} />
      </ServiceSection>

      <CTASection />
    </>
  );
}
