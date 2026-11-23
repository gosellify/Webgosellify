import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Amazon Account Reinstatement & Appeal Service",
  description:
    "Help with a suspended or deactivated Amazon seller account: root cause review, a custom plan of action and appeal, and follow-up with Amazon.",
  alternates: { canonical: "/services/amazon-reinstatement" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
