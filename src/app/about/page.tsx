import type { Metadata } from "next";
import Link from "next/link";
import { FaBuilding, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUserTie, FaUsers } from "react-icons/fa";
import type { ReactNode } from "react";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/motion/Reveal";
import { ServiceHero, ServiceSection } from "@/components/services/ServiceBlocks";
import { pickIcon, tileClass } from "@/components/services/serviceIcons";

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

const factIcons: ReactNode[] = [<FaBuilding key="c" />, <FaMapMarkerAlt key="a" />, <FaUserTie key="f" />, <FaUsers key="t" />, <FaPhoneAlt key="p" />, <FaEnvelope key="e" />];

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
      <ServiceHero
        eyebrow="About us"
        title="About Gosellify, an ecommerce store management agency"
        lead="We manage Walmart Marketplace and Amazon stores for sellers. Our team does the daily work: product research, listings, pricing, order fulfillment, returns and account health."
      >
        <div className="sv-grid" style={{ marginTop: 48, textAlign: "left" }}>
          {companyFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={(index % 3) * 60}>
              <div className="g-card" style={{ padding: 22, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span className={tileClass(index)} aria-hidden="true">{factIcons[index]}</span>
                <div style={{ minWidth: 0 }}>
                  <span className="typo-small" style={{ display: "block", fontWeight: 700 }}>{fact.label}</span>
                  <span style={{ display: "block", fontWeight: 700, color: "var(--color-dark)", lineHeight: 1.45, overflowWrap: "anywhere" }}>{fact.value}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </ServiceHero>

      {/* Founder story */}
      <section className="g-section bg-tint">
        <div className="container-main">
          <Reveal>
            <div
              style={{ background: "#fff", border: "1px solid var(--color-line)", borderRadius: 16, padding: "clamp(22px, 3.4vw, 44px)", display: "flex", flexWrap: "wrap", gap: "32px 48px", alignItems: "center", maxWidth: 1080, margin: "0 auto" }}
            >
              <div style={{ flex: "1 1 420px", minWidth: 0 }}>
                <span className="g-eyebrow">Founder&apos;s story</span>
                <h2 className="g-h2" style={{ margin: "14px 0 16px" }}>
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

              <figure style={{ flex: "0 1 380px", minWidth: 0, margin: 0 }}>
                <div style={{ borderRadius: 16, overflow: "hidden", background: "#fff", boxShadow: "0 18px 40px rgba(10,27,77,0.14)" }}>
                  <img
                    src="/images/about/muhammad-jamshed.webp"
                    alt="Muhammad Jamshed, founder of Gosellify, working on a laptop"
                    width={922}
                    height={922}
                    loading="lazy"
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                </div>
                <figcaption className="typo-small" style={{ marginTop: "10px", textAlign: "center" }}>
                  Muhammad Jamshed, founder of Gosellify.
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <ServiceSection eyebrow="Our rules" title="How we work">
        <div className="sv-grid">
          {howWeWork.map((line, index) => (
            <Reveal key={line} delay={(index % 3) * 60}>
              <div className="g-card" style={{ padding: 24 }}>
                <span className={tileClass(index)} aria-hidden="true">{pickIcon(line)}</span>
                <p style={{ marginTop: 16, color: "var(--color-dark)", fontWeight: 600, lineHeight: 1.55 }}>{line}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="typo-body" style={{ marginTop: "28px", textAlign: "center" }}>
          See <Link href="/pricing" className="link-underline" style={{ color: "var(--color-primary)" }}>how pay from profit works</Link> or
          read the <Link href="/faq" className="link-underline" style={{ color: "var(--color-primary)" }}>questions sellers ask us</Link>.
        </p>
      </ServiceSection>

      {/* Team */}
      <ServiceSection
        eyebrow="Our team"
        title="The people behind Gosellify"
        lead="These are the people who lead each department and work on client stores."
        tint
      >
        <div className="sv-grid">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={(index % 3) * 60}>
              <div className="g-card" style={{ padding: "28px 22px", textAlign: "center" }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  loading="lazy"
                  style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", border: "3px solid var(--color-primary-light)", margin: "0 auto", display: "block" }}
                />
                <h3 className="g-h3" style={{ marginTop: 16 }}>{member.name}</h3>
                <p className="typo-small" style={{ fontWeight: 700, color: "var(--color-primary)", marginTop: 2 }}>{member.title}</p>
                <p className="typo-small" style={{ marginTop: 8 }}>{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ServiceSection>

      <CTASection />
    </>
  );
}
