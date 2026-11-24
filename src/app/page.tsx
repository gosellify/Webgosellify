import type { Metadata } from "next";
import Hero from "@/components/v7/Hero";
import { Fit, HowYouPay, MarketplaceRow, PortalSection, Process, ProofBand, Services, WhoDoesWhat } from "@/components/v7/Sections";
import { FinalCta, HomeFaq } from "@/components/v7/FaqAndCta";
import { FAQS, PHONE } from "@/components/v7/data";

export const metadata: Metadata = {
  title: { absolute: "Walmart & Amazon Store Management Services | Gosellify" },
  description:
    "Gosellify is a Walmart and Amazon store management agency. We run your marketplace store every day: products, listings, orders, shipping and account health. Pay from profit and track every dollar in your own portal.",
  keywords: [
    "walmart marketplace management services",
    "walmart store management services",
    "walmart account management services",
    "amazon store management services",
    "amazon store management agency",
    "amazon fba management service",
    "ecommerce management service",
    "walmart marketplace agency",
    "walmart dropshipping automation",
    "temu store management",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Walmart & Amazon Store Management Services | Gosellify",
    description: "We run your Walmart and Amazon store every day. You pay from profit and see every dollar in your own portal.",
    url: "https://www.gosellify.com/",
    siteName: "Gosellify",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.gosellify.com/#business",
      name: "Gosellify",
      legalName: "Gosellify LLC",
      url: "https://www.gosellify.com/",
      telephone: PHONE,
      email: "info@gosellify.com",
      foundingDate: "2024-01-10",
      address: {
        "@type": "PostalAddress",
        streetAddress: "30 N Gould St Ste R",
        addressLocality: "Sheridan",
        addressRegion: "WY",
        postalCode: "82801",
        addressCountry: "US",
      },
      areaServed: "US",
      description: "Walmart, Amazon, Temu, eBay, Etsy and Shopify store management agency paid from profit.",
      makesOffer: [
        "Walmart store management",
        "Walmart WFS management",
        "Amazon store management",
        "Temu store management",
        "Seller account setup, LLC and EIN",
        "Account reinstatement",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <MarketplaceRow />
      <ProofBand />
      <Services />
      <WhoDoesWhat />
      <PortalSection />
      <HowYouPay />
      <Process />
      <Fit />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
