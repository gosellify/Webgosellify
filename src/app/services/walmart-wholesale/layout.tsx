import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Walmart Wholesale Store Management Service",
  description:
    "Sell established brands on Walmart Marketplace. We source from authorized distributors, prep stock for WFS and manage your wholesale store daily.",
  alternates: { canonical: "/services/walmart-wholesale" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
