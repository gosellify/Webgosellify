import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "eBay Dropshipping & Store Management Service",
  description:
    "eBay dropshipping and store management: listing optimization for Cassini search, automated repricing, account health and daily order handling.",
  alternates: { canonical: "/services/ebay-dropshipping" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
