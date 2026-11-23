import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Custom Shopify App Development Service",
  description:
    "Custom Shopify app development: private and public apps, API integrations and checkout extensions for needs that off-the-shelf apps do not cover.",
  alternates: { canonical: "/services/shopify-app-development" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
