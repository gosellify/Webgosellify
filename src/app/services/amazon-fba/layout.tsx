import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Amazon FBA Management Service for Private Label",
  description:
    "Amazon FBA management service for private label brands: product research, supplier sourcing, listings, PPC, inventory planning and Brand Registry.",
  alternates: { canonical: "/services/amazon-fba" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
