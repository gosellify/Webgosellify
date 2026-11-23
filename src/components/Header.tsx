"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import Logo from "@/components/brand/Logo";

interface NavChild {
  name: string;
  href: string;
  desc: string;
}
interface NavItem {
  name: string;
  href: string;
  allLabel?: string;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  {
    name: "Amazon",
    href: "/services/amazon",
    allLabel: "All Amazon services",
    children: [
      { name: "Amazon FBA", href: "/services/amazon-fba", desc: "Private label and FBA management" },
      { name: "Amazon Wholesale", href: "/services/amazon-wholesale", desc: "Branded products from distributors" },
      { name: "2-Step Dropshipping", href: "/services/amazon-arbitrage", desc: "Low upfront inventory model" },
      { name: "Account Reinstatement", href: "/services/amazon-reinstatement", desc: "Help with a suspended account" },
    ],
  },
  {
    name: "Walmart",
    href: "/services/walmart",
    allLabel: "All Walmart services",
    children: [
      { name: "Walmart Account Management", href: "/services/walmart-management", desc: "Full-service store management" },
      { name: "Walmart WFS", href: "/services/walmart-wfs", desc: "Walmart Fulfillment Services" },
      { name: "Walmart Wholesale", href: "/services/walmart-wholesale", desc: "Wholesale store management" },
    ],
  },
  {
    name: "More marketplaces",
    href: "/services",
    allLabel: "See all services",
    children: [
      { name: "Temu Store Management", href: "/services/temu", desc: "Sell on Temu from US stock" },
      { name: "eBay", href: "/services/ebay-dropshipping", desc: "eBay store management" },
      { name: "Etsy", href: "/services/etsy-dropshipping", desc: "Etsy store management" },
      { name: "Shopify Stores", href: "/services/shopify", desc: "Build, redesign and manage" },
      { name: "Shopify Redesign", href: "/services/shopify-redesign", desc: "Conversion-focused redesign" },
      { name: "Shopify Themes", href: "/services/shopify-theme-development", desc: "Custom theme development" },
      { name: "Shopify Apps", href: "/services/shopify-app-development", desc: "Custom app solutions" },
      { name: "Shopify Marketing", href: "/services/shopify-marketing", desc: "SEO, ads and growth" },
    ],
  },
  {
    name: "Business setup",
    href: "/services/seller-account-setup",
    children: [
      { name: "Seller Account Setup", href: "/services/seller-account-setup", desc: "Open your own account the right way" },
      { name: "Company Filing", href: "/services/company-filing", desc: "LLC and LTD formation, EIN" },
      { name: "Tax Filing", href: "/services/tax-filing", desc: "Returns, sales tax, bookkeeping" },
      { name: "3PL Warehouse", href: "/services/3pl-warehouse", desc: "Same-day prep and shipping" },
      { name: "Profit Calculator", href: "/tools/profit-calculator", desc: "Free Amazon and Walmart tool" },
    ],
  },
  { name: "Results", href: "/success-story" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const css = `
@keyframes hdr5-fade { from { opacity: 0; } to { opacity: 1; } }
.hdr5 { position: sticky; top: 0; z-index: 900; background: #fff; border-bottom: 1px solid var(--color-line); }
.hdr5-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; height: 68px; }
.hdr5-nav { align-items: center; gap: 0; }
.hdr5-link { display: inline-flex; align-items: center; gap: 5px; padding: 8px 7px; border-radius: 6px; font-size: 14.5px; font-weight: 600; line-height: 1.2; color: var(--color-dark); text-decoration: none; background: none; border: 0; cursor: pointer; font-family: inherit; white-space: nowrap; transition: color .15s; }
.hdr5-link:hover, .hdr5-link.is-open, .hdr5-link.is-active { color: var(--color-primary); }
.hdr5-item { position: relative; }
.hdr5-panel { position: absolute; top: 100%; left: -8px; padding-top: 14px; animation: hdr5-fade .12s ease both; }
.hdr5-box { width: 540px; background: #fff; border: 1px solid var(--color-line); border-radius: 8px; box-shadow: 0 1px 2px rgba(10,27,77,0.06); padding: 10px; }
.hdr5-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 6px; }
.hdr5-child { display: block; padding: 10px 12px; border-radius: 6px; text-decoration: none; color: var(--color-dark); transition: background-color .15s; }
.hdr5-child:hover { background: var(--color-light-gray); }
.hdr5-child b { display: block; font-size: 15px; font-weight: 700; line-height: 1.3; }
.hdr5-child span { display: block; font-size: 13.5px; line-height: 1.4; color: var(--color-text-light); margin-top: 2px; }
.hdr5-all { display: block; margin: 8px 2px 0; padding: 12px 10px 4px; border-top: 1px solid var(--color-line); font-size: 14px; font-weight: 700; color: var(--color-primary); text-decoration: none; }
.hdr5-all:hover { text-decoration: underline; text-underline-offset: 3px; }
.hdr5-phone { font-size: 14.5px; font-weight: 600; color: var(--color-dark); text-decoration: none; white-space: nowrap; }
.hdr5-phone:hover { color: var(--color-primary); }
.hdr5-burger { width: 42px; height: 42px; border-radius: 8px; border: 1px solid var(--color-line); background: #fff; color: var(--color-dark); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
.hdr5-mobile { border-top: 1px solid var(--color-line); background: #fff; max-height: calc(100vh - 69px); overflow-y: auto; animation: hdr5-fade .12s ease both; }
.hdr5-mrow { line-height: 1.3; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 15px 0; background: none; border: 0; border-bottom: 1px solid var(--color-line); font-family: inherit; font-size: 17px; font-weight: 600; color: var(--color-dark); text-decoration: none; text-align: left; cursor: pointer; }
.hdr5-msub { padding: 6px 0 10px; border-bottom: 1px solid var(--color-line); }
.hdr5-msub a { display: block; padding: 9px 0 9px 14px; font-size: 16px; color: var(--color-dark); text-decoration: none; }
.hdr5-msub a span { display: block; font-size: 14px; color: var(--color-text-light); }
`;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen((cur: string | null) => {
        if (cur !== null && navRef.current) {
          const btn = navRef.current.querySelector<HTMLButtonElement>('button[aria-expanded="true"]');
          if (btn) btn.focus();
        }
        return null;
      });
      setMobile(false);
    };
    const onDown = (e: MouseEvent) => {
      if (navRef.current && e.target instanceof Node && !navRef.current.contains(e.target)) setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  const clearTimer = () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const openNow = (name: string) => {
    clearTimer();
    setOpen(name);
  };
  const closeSoon = () => {
    clearTimer();
    closeTimer.current = window.setTimeout(() => setOpen(null), 180);
  };

  return (
    <header className="hdr5">
      <style>{css}</style>
      <div className="container-main">
        <div className="hdr5-row">
          <Link href="/" aria-label="Gosellify home" style={{ textDecoration: "none", display: "inline-flex" }}>
            <Logo size={34} fontSize={22} />
          </Link>

          <nav ref={navRef} className="hdr5-nav hidden xl:flex" aria-label="Main">
            {navLinks.map((item) => {
              const active = pathname === item.href || (item.children ? item.children.some((c) => c.href === pathname) : false);
              if (!item.children) {
                return (
                  <Link key={item.name} href={item.href} className={`hdr5-link${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined}>
                    {item.name}
                  </Link>
                );
              }
              const isOpen = open === item.name;
              const panelId = `hdr5-${item.name.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <div
                  key={item.name}
                  className="hdr5-item"
                  onMouseEnter={() => openNow(item.name)}
                  onMouseLeave={closeSoon}
                  onBlur={(e: React.FocusEvent<HTMLDivElement>) => {
                    if (!(e.relatedTarget instanceof Node) || !e.currentTarget.contains(e.relatedTarget)) {
                      setOpen((cur: string | null) => (cur === item.name ? null : cur));
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`hdr5-link${active ? " is-active" : ""}${isOpen ? " is-open" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      /* keyboard (detail 0) toggles; a mouse click on a panel already opened by hover keeps it open */
                      if (e.detail === 0 && isOpen) setOpen(null);
                      else openNow(item.name);
                    }}
                  >
                    {item.name}
                    <FaChevronDown size={9} aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div className="hdr5-panel" id={panelId}>
                      <div className="hdr5-box">
                        <div className="hdr5-grid">
                          {item.children.map((c) => (
                            <Link key={c.href} href={c.href} className="hdr5-child" onClick={() => setOpen(null)}>
                              <b>{c.name}</b>
                              <span>{c.desc}</span>
                            </Link>
                          ))}
                        </div>
                        {item.allLabel && (
                          <Link href={item.href} className="hdr5-all" onClick={() => setOpen(null)}>
                            {item.allLabel}
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span className="hidden lg:block">
              <a href="tel:+13073938789" className="hdr5-phone">
                +1 307 393 8789
              </a>
            </span>
            <Link href="/profit-check" className="btn-primary" style={{ padding: "9px 14px", fontSize: 14.5, whiteSpace: "nowrap" }}>
              Get a plan
            </Link>
            <span className="xl:hidden">
              <button type="button" className="hdr5-burger" aria-label={mobile ? "Close menu" : "Open menu"} aria-expanded={mobile} aria-controls="hdr5-mobile" onClick={() => setMobile(!mobile)}>
                {mobile ? <FaTimes size={17} aria-hidden="true" /> : <FaBars size={17} aria-hidden="true" />}
              </button>
            </span>
          </div>
        </div>
      </div>

      {mobile && (
        <div className="xl:hidden">
          <nav className="hdr5-mobile" id="hdr5-mobile" aria-label="Mobile">
            <div className="container-main" style={{ paddingBottom: 24 }}>
              {navLinks.map((item) => {
                if (!item.children) {
                  return (
                    <Link key={item.name} href={item.href} className="hdr5-mrow" onClick={() => setMobile(false)}>
                      {item.name}
                    </Link>
                  );
                }
                const isOpen = mobileOpen === item.name;
                return (
                  <div key={item.name}>
                    <button type="button" className="hdr5-mrow" aria-expanded={isOpen} onClick={() => setMobileOpen(isOpen ? null : item.name)} style={isOpen ? { borderBottomColor: "transparent" } : undefined}>
                      {item.name}
                      <FaChevronDown size={12} aria-hidden="true" style={{ transform: isOpen ? "rotate(180deg)" : "none" }} />
                    </button>
                    {isOpen && (
                      <div className="hdr5-msub">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} onClick={() => setMobile(false)}>
                            {c.name}
                            <span>{c.desc}</span>
                          </Link>
                        ))}
                        {item.allLabel && (
                          <Link href={item.href} onClick={() => setMobile(false)} style={{ color: "var(--color-primary)", fontWeight: 700 }}>
                            {item.allLabel}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              <p style={{ marginTop: 20, fontSize: 16 }}>
                Call or WhatsApp{" "}
                <a href="tel:+13073938789" style={{ color: "var(--color-primary)", fontWeight: 700, textDecoration: "none" }}>
                  +1 307 393 8789
                </a>
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
