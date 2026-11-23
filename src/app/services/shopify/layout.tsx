import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shopify Development & Marketing Services",
  description:
    "Shopify services in one place: dropshipping store setup, store redesign, custom theme and app development, and marketing for your own brand.",
  alternates: { canonical: "/services/shopify" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
