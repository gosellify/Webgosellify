import type { Metadata } from "next";
import HomeStyles from "@/components/v6/home/HomeStyles";
import Hero from "@/components/v6/home/Hero";
import Services from "@/components/v6/home/Services";
import Portal from "@/components/v6/home/Portal";
import Daily from "@/components/v6/home/Daily";
import Paid from "@/components/v6/home/Paid";
import Founder from "@/components/v6/home/Founder";
import Start from "@/components/v6/home/Start";
import Team from "@/components/v6/home/Team";
import Faq from "@/components/v6/home/Faq";
import FinalCta from "@/components/v6/home/FinalCta";
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
      <Services />
      <Portal />
      <Daily />
      <Paid />
      <Founder />
      <Start />
      <Team />
      <Faq />
      <FinalCta />
    </>
  );
}
