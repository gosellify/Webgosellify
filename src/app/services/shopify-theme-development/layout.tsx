import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Custom Shopify Theme Development Service",
  description:
    "Custom Shopify themes built from scratch on Online Store 2.0: brand-matched design, fast pages and sections your team can edit without a developer.",
  alternates: { canonical: "/services/shopify-theme-development" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
