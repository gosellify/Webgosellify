import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Walmart Account Management - Gosellify",
  robots: { index: false, follow: true },
};

/** This service page has moved to Walmart Account Management. */
export default function MovedPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/services/walmart-management" />
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container-main text-center">
          <p className="typo-body">
            This page has moved.{" "}
            <Link href="/services/walmart-management" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
              Go to Walmart Account Management
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
