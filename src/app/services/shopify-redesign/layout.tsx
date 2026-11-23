import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shopify Store Redesign & UX Design Service",
  description:
    "Shopify store redesign focused on conversion: data-driven UX, modern design and a mobile-first layout for a store that already has traffic.",
  alternates: { canonical: "/services/shopify-redesign" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
