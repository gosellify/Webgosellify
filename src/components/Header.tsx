"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaArrowRight, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logo from "@/components/brand/Logo";

interface NavChild {
  name: string;
  href: string;
  desc: string;
}
interface NavItem {
  name: string;
  href: string;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  {
    name: "Amazon",
    href: "/services/amazon",
    children: [
      { name: "Amazon FBA", href: "/services/amazon-fba", desc: "Private label and FBA management" },
      { name: "Amazon Wholesale", href: "/services/amazon-wholesale", desc: "Full-service wholesale management" },
      { name: "2-Step Dropshipping", href: "/services/amazon-arbitrage", desc: "Low-risk arbitrage model" },
      { name: "Account Reinstatement", href: "/services/amazon-reinstatement", desc: "Suspended account recovery" },
    ],
  },
  {
    name: "Walmart",
    href: "/services/walmart",
    children: [
      { name: "Walmart Account Management", href: "/services/walmart-management", desc: "Full-service store management" },
      { name: "Walmart WFS", href: "/services/walmart-wfs", desc: "Walmart Fulfillment Services" },
      { name: "Walmart Wholesale", href: "/services/walmart-wholesale", desc: "Wholesale store management" },
    ],
  },
  {
    name: "Shopify",
    href: "/services/shopify",
    children: [
      { name: "Dropshipping Store", href: "/services/shopify-dropshipping", desc: "Ready-to-sell dropship store" },
      { name: "Store Redesign", href: "/services/shopify-redesign", desc: "Conversion-focused redesign" },
      { name: "Theme Development", href: "/services/shopify-theme-development", desc: "Custom theme from scratch" },
      { name: "App Development", href: "/services/shopify-app-development", desc: "Custom app solutions" },
      { name: "Store Marketing", href: "/services/shopify-marketing", desc: "SEO, ads and growth" },
    ],
  },
  {
    name: "More services",
    href: "/services",
    children: [
      { name: "eBay Dropshipping", href: "/services/ebay-dropshipping", desc: "eBay store management" },
      { name: "Etsy Dropshipping", href: "/services/etsy-dropshipping", desc: "Etsy store management" },
      { name: "3PL Warehouse", href: "/services/3pl-warehouse", desc: "Same-day prep and shipping" },
      { name: "Company Filing", href: "/services/company-filing", desc: "LLC and LTD formation" },
      { name: "Tax Filing", href: "/services/tax-filing", desc: "Tax preparation and filing" },
    ],
  },
  { name: "Results", href: "/success-story" },
  { name: "Pricing", href: "/pricing" },
  { name: "Tools", href: "/tools/profit-calculator" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 500 && y > last);
      last = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [pathname]);

  return (
    <>
      <div style={{ background: "var(--color-dark)", color: "#fff", fontSize: 14, fontWeight: 600 }}>
        <div className="container-wide" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "6px 24px", paddingTop: 9, paddingBottom: 9 }}>
          <span>
            <span style={{ color: "var(--color-accent)" }}>Pay from profit.</span> No upfront management fee.
          </span>
          <span style={{ display: "flex", flexWrap: "wrap", gap: "6px 22px" }}>
            <a href="tel:+13073938789" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <FaPhoneAlt size={12} color="#FFB21A" /> +1 307 393 8789
            </a>
            <a href="mailto:info@gosellify.com" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <FaEnvelope size={13} color="#FFB21A" /> info@gosellify.com
            </a>
          </span>
        </div>
      </div>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 900,
          background: scrolled ? "rgba(255,255,255,0.86)" : "#fff",
          backdropFilter: scrolled ? "saturate(180%) blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(180%) blur(16px)" : "none",
          boxShadow: scrolled ? "0 10px 30px rgba(10,27,77,0.10)" : "none",
          transform: hidden && !mobile ? "translateY(-110%)" : "translateY(0)",
          transition: "transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .3s, background-color .3s",
        }}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, paddingTop: scrolled ? 10 : 16, paddingBottom: scrolled ? 10 : 16, transition: "padding .3s" }}>
          <Link href="/" aria-label="Gosellify home" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((item) => {
              const active = pathname === item.href || (item.children ? item.children.some((c) => c.href === pathname) : false);
              return (
                <div key={item.name} style={{ position: "relative" }} onMouseEnter={() => setOpen(item.children ? item.name : null)}>
                  <Link
                    href={item.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "10px 14px",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 700,
                      textDecoration: "none",
                      color: active ? "var(--color-primary)" : "var(--color-dark)",
                      background: open === item.name ? "var(--color-primary-light)" : "transparent",
                      transition: "background-color .2s, color .2s",
                    }}
                  >
                    {item.name}
                    {item.children && <FaChevronDown size={10} style={{ transition: "transform .25s", transform: open === item.name ? "rotate(180deg)" : "none" }} />}
                  </Link>
                  {item.children && open === item.name && (
                    <div className="slide-up-in" style={{ position: "absolute", top: "100%", left: 0, paddingTop: 12, zIndex: 20 }}>
                      <div style={{ background: "#fff", border: "2px solid var(--color-line)", borderRadius: 20, boxShadow: "0 30px 60px rgba(10,27,77,0.18)", padding: 10, width: 340 }}>
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="row-hover" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 14px", borderRadius: 12, textDecoration: "none", color: "var(--color-dark)" }}>
                            <span style={{ display: "flex", flexDirection: "column" }}>
                              <span style={{ fontWeight: 800, fontSize: 15 }}>{c.name}</span>
                              <span style={{ fontSize: 13, opacity: 0.75 }}>{c.desc}</span>
                            </span>
                            <FaArrowRight size={12} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="hidden md:inline-flex">
              <a href="https://portal.gosellify.com/" className="btn-outline" style={{ padding: "12px 18px", fontSize: 15 }}>
                Client login
              </a>
            </span>
            <span className="hidden sm:inline-flex">
              <Link href="/profit-check" className="btn-accent" style={{ padding: "14px 20px", fontSize: 15 }}>
                Check my profit <FaArrowRight className="btn-arrow" size={13} />
              </Link>
            </span>
            <span className="xl:hidden">
            <button
              type="button"
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              onClick={() => setMobile(!mobile)}
              style={{ width: 48, height: 48, borderRadius: 12, border: "2px solid var(--color-dark)", background: "#fff", color: "var(--color-dark)", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              {mobile ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
            </span>
          </div>
        </div>

        <div aria-hidden="true" style={{ height: 3, background: "transparent" }}>
          <div style={{ height: 3, width: `${progress}%`, background: "linear-gradient(90deg, #1560FF, #FFB21A)", transition: "width .1s linear" }} />
        </div>

        {mobile && (
          <div className="xl:hidden slide-up-in" style={{ background: "#fff", borderTop: "2px solid var(--color-line)", maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
            <div className="container-wide" style={{ paddingTop: 12, paddingBottom: 24, display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <button
                      type="button"
                      onClick={() => setMobileOpen(mobileOpen === item.name ? null : item.name)}
                      aria-expanded={mobileOpen === item.name}
                      style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 6px", background: "none", border: "none", borderBottom: "1px solid var(--color-line)", fontWeight: 800, fontSize: 17, color: "var(--color-dark)", cursor: "pointer", fontFamily: "inherit" }}
                    >
                      {item.name}
                      <FaChevronDown size={12} style={{ transition: "transform .25s", transform: mobileOpen === item.name ? "rotate(180deg)" : "none" }} />
                    </button>
                  ) : (
                    <Link href={item.href} style={{ display: "block", padding: "14px 6px", borderBottom: "1px solid var(--color-line)", fontWeight: 800, fontSize: 17, color: "var(--color-dark)", textDecoration: "none" }}>
                      {item.name}
                    </Link>
                  )}
                  {item.children && mobileOpen === item.name && (
                    <div style={{ padding: "6px 0 10px 12px", display: "flex", flexDirection: "column" }}>
                      <Link href={item.href} style={{ padding: "10px 6px", fontWeight: 700, color: "var(--color-primary)", textDecoration: "none" }}>
                        All {item.name}
                      </Link>
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} style={{ padding: "10px 6px", fontWeight: 600, color: "var(--color-dark)", textDecoration: "none" }}>
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/profit-check" className="btn-accent" style={{ marginTop: 16 }}>
                Check my profit <FaArrowRight className="btn-arrow" size={13} />
              </Link>
              <a href="https://portal.gosellify.com/" className="btn-outline" style={{ marginTop: 8 }}>
                Client login
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
