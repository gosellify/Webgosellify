import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shopify Dropshipping Store Setup Service",
  description:
    "A ready-to-sell Shopify dropshipping store: product selection, vetted suppliers, store design and automated order fulfillment with no inventory.",
  alternates: { canonical: "/services/shopify-dropshipping" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
