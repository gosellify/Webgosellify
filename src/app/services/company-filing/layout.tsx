import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "US LLC Formation, EIN & ITIN Filing Service",
  description:
    "US LLC formation, EIN, ITIN and UK LTD filing for international ecommerce sellers. We handle the paperwork remotely so you can open seller accounts.",
  alternates: { canonical: "/services/company-filing" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
