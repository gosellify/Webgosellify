import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Amazon Wholesale Store Management Service",
  description:
    "We handle brand approvals, authorized distributor sourcing, FBA prep and daily store management for Amazon wholesale sellers. You fund the stock.",
  alternates: { canonical: "/services/amazon-wholesale" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
