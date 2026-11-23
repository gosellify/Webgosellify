import type { Metadata } from "next";
import CTASection from "@/components/home/CTASection";

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

export default function ReferralPage() {
  return (
    <>
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <span className="g-eyebrow" style={{ marginBottom: "10px" }}>Referral program</span>
          <h1 className="g-h1" style={{ maxWidth: "820px", marginBottom: "16px" }}>
            Affiliate referral program for ecommerce sellers
          </h1>
          <p className="g-lead" style={{ maxWidth: "720px", marginBottom: "24px" }}>
            Know a seller who needs help running their store? Introduce them to us. We pay you a
            monthly commission for each referred client while they stay active.
          </p>
          <a
            href="https://wa.me/13073938789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Join on WhatsApp
          </a>
        </div>
      </section>

      <section className="g-section bg-tint">
        <div className="container-main">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 56px" }}>
            <div style={{ flex: "1 1 380px", minWidth: 0 }}>
              <h2 className="g-h2" style={{ marginBottom: "16px" }}>
                How it works
              </h2>
              <ol style={{ listStyle: "none", borderTop: "1px solid var(--color-line)" }}>
                {steps.map((step, i) => (
                  <li key={step.title} style={{ padding: "14px 0", borderBottom: "1px solid var(--color-line)" }}>
                    <h3 className="typo-h4">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="typo-body">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div style={{ flex: "1 1 380px", minWidth: 0 }}>
              <h2 className="g-h2" style={{ marginBottom: "16px" }}>
                What to expect
              </h2>
              <ul style={{ listStyle: "none", borderTop: "1px solid var(--color-line)" }}>
                {terms.map((term) => (
                  <li key={term} className="typo-body" style={{ padding: "14px 0", borderBottom: "1px solid var(--color-line)" }}>
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
