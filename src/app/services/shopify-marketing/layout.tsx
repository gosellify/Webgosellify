import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shopify Marketing: SEO, Google Ads & Meta Ads",
  description:
    "Shopify marketing under one roof: SEO, Google Ads, Meta Ads and email marketing, planned and managed by one team to bring traffic and sales.",
  alternates: { canonical: "/services/shopify-marketing" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
