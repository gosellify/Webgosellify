import type { Metadata } from "next";
import HomeStyles from "@/components/v5/HomeStyles";
import Hero from "@/components/v5/Hero";
import Manage from "@/components/v5/Manage";
import FounderNote from "@/components/v5/FounderNote";
import PortalView from "@/components/v5/PortalView";
import DailyWork from "@/components/v5/DailyWork";
import HowPaid from "@/components/v5/HowPaid";
import HowStart from "@/components/v5/HowStart";
import Team from "@/components/v5/Team";
import Faq from "@/components/v5/Faq";
import Contact from "@/components/v5/Contact";
import { homeFaqs } from "@/components/v5/faqData";

export const metadata: Metadata = {
  title: { absolute: "Ecommerce Management Service for Amazon & Walmart Sellers | Gosellify" },
  description:
    "Gosellify runs Amazon and Walmart stores for their owners: listings, orders, returns, account health. Pay from profit and check every order in your portal.",
  alternates: { canonical: "/" },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gosellify LLC",
  url: "https://www.gosellify.com",
  logo: "https://www.gosellify.com/icon.svg",
  telephone: "+1-307-393-8789",
  email: "info@gosellify.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  founder: { "@type": "Person", name: "Muhammad Jamshed" },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61555382275675",
    "https://www.youtube.com/@gosellify",
    "https://linkedin.com/company/gosellify/",
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <HomeStyles />
      <Hero />
      <Manage />
      <FounderNote />
      <PortalView />
      <DailyWork />
      <HowPaid />
      <HowStart />
      <Team />
      <Faq />
      <Contact />
    </>
  );
}
