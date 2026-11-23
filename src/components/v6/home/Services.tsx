import React from "react";
import Link from "next/link";
import { FaAmazon, FaArrowRight, FaBuilding, FaEbay, FaShopify, FaShoppingBag, FaStore, FaUserCheck, FaWarehouse } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

type Tone = "" | "amber" | "navy";
type CardLink = { label: string; href: string; aria: string };
type Card = { title: string; text: string; icon: React.ReactNode; tone: Tone; links: CardLink[] };

const cards: Card[] = [
  { title: "Amazon", text: "FBA, wholesale and 2-step dropshipping stores, from listings to account health.", icon: <FaAmazon />, tone: "", links: [{ label: "Details", href: "/services/amazon", aria: "Amazon store management details" }] },
  { title: "Walmart", text: "WFS, wholesale and 2-step dropshipping stores, with daily account health checks.", icon: <FaStore />, tone: "amber", links: [{ label: "Details", href: "/services/walmart-management", aria: "Walmart account management details" }] },
  { title: "Temu", text: "Store setup, listings and orders for sellers who ship from stock held in the US.", icon: <FaShoppingBag />, tone: "navy", links: [{ label: "Details", href: "/services/temu", aria: "Temu store management details" }] },
  {
    title: "eBay and Etsy",
    text: "Listings, orders, returns and buyer messages for dropshipping stores.",
    icon: <FaEbay />,
    tone: "",
    links: [
      { label: "eBay", href: "/services/ebay-dropshipping", aria: "eBay store management details" },
      { label: "Etsy", href: "/services/etsy-dropshipping", aria: "Etsy store management details" },
    ],
  },
  { title: "Shopify", text: "Store build or redesign, themes, apps and marketing for your own website.", icon: <FaShopify />, tone: "amber", links: [{ label: "Details", href: "/services/shopify", aria: "Shopify store details" }] },
  { title: "3PL warehouse", text: "Stock held in our US warehouses, with same-day prep and shipping.", icon: <FaWarehouse />, tone: "navy", links: [{ label: "Details", href: "/services/3pl-warehouse", aria: "3PL warehouse details" }] },
  { title: "Seller account setup", text: "We guide you through opening a seller account in your own name.", icon: <FaUserCheck />, tone: "", links: [{ label: "Details", href: "/services/seller-account-setup", aria: "Seller account setup details" }] },
  {
    title: "Company and tax filing",
    text: "Company formation and EIN, then tax returns, sales tax and bookkeeping.",
    icon: <FaBuilding />,
    tone: "amber",
    links: [
      { label: "Company filing", href: "/services/company-filing", aria: "Company filing details" },
      { label: "Tax filing", href: "/services/tax-filing", aria: "Tax filing details" },
    ],
  },
];

export default function Services() {
  return (
    <section className="g-section bg-tint">
      <div className="container-main">
        <Reveal className="h6-head">
          <p className="g-eyebrow">Services</p>
          <h2 className="g-h2">What we manage</h2>
          <p className="g-lead">
            Most owners come to us for Walmart marketplace management services or Amazon store management services. The same ecommerce management service covers more places to sell, and the setup around them.
          </p>
        </Reveal>
        <div className="h6-svc">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 70}>
              <div className="g-card h6-svc-card">
                <span className={`icon-tile${c.tone ? ` ${c.tone}` : ""}`} aria-hidden="true">
                  {c.icon}
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="h6-svc-links">
                  {c.links.map((l) => (
                    <Link key={l.href} href={l.href} className={`h6-link${c.links.length === 1 ? " h6-stretch" : ""}`} aria-label={l.aria}>
                      {l.label}
                      <FaArrowRight size={11} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="h6-foot">
          <Link href="/services" className="h6-link">
            See all services
            <FaArrowRight size={12} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
