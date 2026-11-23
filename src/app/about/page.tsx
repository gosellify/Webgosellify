import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Our Ecommerce Store Management Agency",
  description:
    "Gosellify LLC is an ecommerce store management agency for Walmart and Amazon sellers. Read the founder's story, meet the team and see how we work.",
  alternates: { canonical: "/about" },
};

type Fact = { label: string; value: string };

const companyFacts: Fact[] = [
  { label: "Company", value: "Gosellify LLC, a US company registered in January 2024" },
  { label: "Business address", value: "30 N Gould St Ste R, Sheridan, WY 82801" },
  { label: "Founder", value: "Muhammad Jamshed" },
  { label: "Operations team", value: "Multan, Pakistan" },
  { label: "Phone and WhatsApp", value: "+1 307 393 8789" },
  { label: "Email", value: "info@gosellify.com" },
];

const howWeWork: string[] = [
  "Every store we manage runs on the Gosellify Portal, connected through the marketplace's official API.",
  "You pay from profit. There is no management fee until the store makes profit.",
  "There is no contract. You can cancel anytime.",
  "We run our own US warehouses with same-day prep and shipping.",
  "We work inside each marketplace's seller policies.",
];

type Member = { name: string; title: string; bio: string; photo: string };

const teamMembers: Member[] = [
  {
    name: "Muhammad Jamshed",
    title: "Founder & Head Of Business",
    bio: "Started Gosellify and leads the business.",
    photo: "/images/about/muhammad-jamshed-dp.webp",
  },
  {
    name: "Ahmad Ali",
    title: "Co-Founder",
    bio: "Head of operations.",
    photo: "/images/about/ahmad-ali.webp",
  },
  {
    name: "Muhammad Umar",
    title: "Manager, Amazon Arbitrage",
    bio: "Leads the Amazon department.",
    photo: "/images/about/muhammad-umar.webp",
  },
  {
    name: "Mohammad Amir",
    title: "Manager, Wholesale Department",
    bio: "Manages wholesale for Amazon, Walmart and eBay.",
    photo: "/images/about/mohammad-amir.webp",
  },
  {
    name: "Jakaria Islam",
    title: "Manager, Walmart Department",
    bio: "Leads the Walmart department.",
    photo: "/images/about/jakaria-islam.webp",
  },
  {
    name: "Mahbub H.",
    title: "Manager, Warehouse & Shipping",
    bio: "Manages our US warehouse operations and shipping.",
    photo: "/images/about/mahbub-h.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <span className="g-eyebrow" style={{ marginBottom: "10px" }}>About us</span>
          <h1 className="g-h1" style={{ maxWidth: "820px", marginBottom: "16px" }}>
            About Gosellify, an ecommerce store management agency
          </h1>
          <p className="g-lead" style={{ maxWidth: "720px", marginBottom: "36px" }}>
            We manage Walmart Marketplace and Amazon stores for sellers. Our team does the daily
            work: product research, listings, pricing, order fulfillment, returns and account
            health.
          </p>

          <div style={{ borderTop: "1px solid var(--color-line)", maxWidth: "820px" }}>
            {companyFacts.map((fact) => (
              <div
                key={fact.label}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2px 24px",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--color-line)",
                }}
              >
                <span className="typo-small" style={{ flex: "0 0 180px", fontWeight: 700, color: "var(--color-dark)", paddingTop: "3px" }}>
                  {fact.label}
                </span>
                <span style={{ flex: "1 1 260px", minWidth: 0 }}>{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 420px", minWidth: 0 }}>
              <h2 className="g-h2" style={{ marginBottom: "16px" }}>
                How Gosellify started
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                In 2018 I started as a freelance SEO on Fiverr. I worked with many clients and
                helped improve their dropshipping stores.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                In 2020 I learned Amazon dropshipping and worked on real stores. In 2022 I started
                my own business. It went well, so I decided to grow it with a team.
              </p>
              <p className="typo-body" style={{ marginBottom: "20px" }}>
                In January 2024 I registered the company in the USA as Gosellify LLC. Today our
                operations team works from Multan, Pakistan.
              </p>
              <p style={{ fontWeight: 700, color: "var(--color-dark)" }}>Muhammad Jamshed</p>
              <p className="typo-small">Founder &amp; Head Of Business, Gosellify</p>
            </div>

            <figure style={{ flex: "0 1 400px", minWidth: 0, margin: 0 }}>
              <div style={{ border: "1px solid var(--color-line)", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
                <img
                  src="/images/about/muhammad-jamshed.webp"
                  alt="Muhammad Jamshed, founder of Gosellify, working on a laptop"
                  width={922}
                  height={922}
                  loading="lazy"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </div>
              <figcaption className="typo-small" style={{ marginTop: "8px" }}>
                Muhammad Jamshed, founder of Gosellify.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="g-section" style={{ background: "#fff" }}>
        <div className="container-main">
          <div>
            <h2 className="g-h2" style={{ marginBottom: "16px" }}>
              How we work
            </h2>
            <ul style={{ listStyle: "none", maxWidth: "760px", borderTop: "1px solid var(--color-line)" }}>
              {howWeWork.map((line) => (
                <li key={line} style={{ padding: "12px 0", borderBottom: "1px solid var(--color-line)" }}>
                  {line}
                </li>
              ))}
            </ul>
            <p className="typo-body" style={{ marginTop: "18px" }}>
              See <Link href="/pricing" className="link-underline" style={{ color: "var(--color-primary)" }}>how pay from profit works</Link> or
              read the <Link href="/faq" className="link-underline" style={{ color: "var(--color-primary)" }}>questions sellers ask us</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <h2 className="g-h2" style={{ marginBottom: "10px" }}>
            The people behind Gosellify
          </h2>
          <p className="g-lead" style={{ maxWidth: "680px", marginBottom: "28px" }}>
            These are the people who lead each department and work on client stores.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: "0 32px",
              borderTop: "1px solid var(--color-line)",
            }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--color-line)",
                }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  width={72}
                  height={72}
                  loading="lazy"
                  style={{ width: "72px", height: "72px", borderRadius: "8px", objectFit: "cover", flexShrink: 0, border: "1px solid var(--color-line)" }}
                />
                <div style={{ minWidth: 0 }}>
                  <h3 className="typo-h4">{member.name}</h3>
                  <p className="typo-small" style={{ fontWeight: 600, color: "var(--color-dark)" }}>{member.title}</p>
                  <p className="typo-small">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
