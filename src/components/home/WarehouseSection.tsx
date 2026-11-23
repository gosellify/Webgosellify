"use client";

import Link from "next/link";

import { FaCheckCircle } from "react-icons/fa";

const warehouseFeatures = [
  "FBA Prep & WFS Prep",
  "Order Inspection & Repackaging",
  "Storage & Inventory",
  "Direct-to-Customer Shipping",
];

export default function WarehouseSection() {
  return (
    <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div className="container-main">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "center",
          }}
          className="warehouse-grid"
        >
          {/* Left - Text Content */}
          <div>
            <span className="typo-label" style={{ display: "block", marginBottom: "8px" }}>
              Our Warehouses
            </span>
            <h2 className="typo-h2" style={{ marginBottom: "12px" }}>
              Our US Warehouses, Run by Our Own Team
            </h2>
            <p className="typo-body" style={{ marginBottom: "16px" }}>
              No matter which selling method you use — FBA, WFS, dropshipping, or direct-to-customer — our
              US warehouses handle it all. We process thousands of orders monthly with same-day prep
              and shipping.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
              {warehouseFeatures.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FaCheckCircle style={{ fontSize: "13px", color: "var(--color-primary)", flexShrink: 0 }} />
                  <span className="typo-body" style={{ fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/services/3pl-warehouse" className="btn-primary">
              Get Warehouse Service
            </Link>
          </div>

          {/* Right - Summary panel */}
          <div
            style={{
              backgroundColor: "#EEF4FF",
              border: "1px solid #D9E2F5",
              borderRadius: "10px",
              padding: "28px 24px",
            }}
          >
            <p className="typo-h3" style={{ marginBottom: "8px" }}>
              One place for prep, storage and shipping
            </p>
            <p className="typo-body" style={{ margin: 0 }}>
              Stock arrives, gets inspected, prepped and stored. Orders go out the same day, and
              tracking is uploaded to your store.
            </p>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .warehouse-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
