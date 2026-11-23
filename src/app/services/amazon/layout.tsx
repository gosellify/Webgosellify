import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Amazon Store Management Services for Sellers",
  description:
    "Amazon store management services from one agency: FBA, wholesale, 2-step dropshipping and account reinstatement. Compare the models and pick one.",
  alternates: { canonical: "/services/amazon" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
