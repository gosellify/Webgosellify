import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "3PL Fulfillment & On-Demand Warehousing",
  description:
    "3PL fulfillment and on-demand warehousing from our US warehouses: FBA and WFS prep, storage, returns and same-day prep and shipping. No monthly fee.",
  alternates: { canonical: "/services/3pl-warehouse" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
