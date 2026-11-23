import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Business Tax Filing & Bookkeeping Service",
  description:
    "Business tax filing for ecommerce sellers, LLCs and non-resident owners: federal and state returns, multi-state sales tax and bookkeeping support.",
  alternates: { canonical: "/services/tax-filing" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
