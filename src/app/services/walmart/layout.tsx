import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Walmart Account Management Services for Sellers",
  description:
    "Walmart account management services for marketplace sellers: full store management, WFS and wholesale. See which Walmart model fits your store.",
  alternates: { canonical: "/services/walmart" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
