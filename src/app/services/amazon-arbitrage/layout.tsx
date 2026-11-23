import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Amazon 2-Step Dropshipping Store Management",
  description:
    "Done-for-you Amazon 2-step dropshipping: we source and list products, buy when a customer orders, inspect and rebox at our US warehouses, then ship.",
  alternates: { canonical: "/services/amazon-arbitrage" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
