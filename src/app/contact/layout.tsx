import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Our Ecommerce Management Team",
  description:
    "Talk to the Gosellify team about Amazon, Walmart, eBay or Shopify store management. Reach us by WhatsApp, phone, email or the contact form.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
