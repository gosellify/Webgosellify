import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Etsy Dropshipping & Shop Management Service",
  description:
    "Etsy shop management with print-on-demand: original designs, listings tuned for Etsy search, order fulfillment and daily shop operations.",
  alternates: { canonical: "/services/etsy-dropshipping" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
