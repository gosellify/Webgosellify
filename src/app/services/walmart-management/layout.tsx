import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Walmart Marketplace Management Services",
  description:
    "Walmart marketplace management services: listing management, Buy Box pricing, order handling, ads and account health, run daily by our team.",
  alternates: { canonical: "/services/walmart-management" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
