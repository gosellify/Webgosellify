import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ecommerce Management Service FAQ & Answers",
  description:
    "Plain answers about our ecommerce management service: 2-step dropshipping, product sourcing, ROI, order fulfillment and how we run your store.",
  alternates: { canonical: "/faq" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
