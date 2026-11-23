import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shopify Store Development & Management",
  description:
    "Shopify store development and management: store build, design, app setup and ongoing support for brands of any size, from one product to large catalogs.",
  alternates: { canonical: "/services/shopify-development" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
