import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Walmart WFS Prep & Fulfillment Management",
  description:
    "Walmart Fulfillment Services (WFS) handled for you: product prep to Walmart standards, inbound shipping plans, listing optimization and inventory.",
  alternates: { canonical: "/services/walmart-wfs" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
