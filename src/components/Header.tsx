"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaAmazon, FaBars, FaBoxes, FaBuilding, FaBullhorn, FaCalculator, FaChevronDown, FaCode, FaEbay, FaEtsy, FaFileInvoiceDollar,
  FaPaintBrush, FaPuzzlePiece, FaShieldAlt, FaShopify, FaShoppingBag, FaStore, FaTimes, FaTruck, FaUserCheck, FaWarehouse, FaArrowRight, FaWhatsapp,
} from "react-icons/fa";
import Logo from "@/components/brand/Logo";

type Tone = "" | "amber" | "navy";
interface NavChild {
  name: string;
  href: string;
  desc: string;
  icon: React.ReactNode;
  tone: Tone;
}
interface NavItem {
  name: string;
  href: string;
  allLabel?: string;
  mobileOnly?: boolean;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  {
    name: "Amazon",
    href: "/services/amazon",
    allLabel: "All Amazon services",
    children: [
      { name: "Amazon FBA", href: "/services/amazon-fba", desc: "Private label and FBA management", icon: <FaAmazon />, tone: "" },
      { name: "Amazon Wholesale", href: "/services/amazon-wholesale", desc: "Branded products from distributors", icon: <FaBoxes />, tone: "amber" },
      { name: "2-Step Dropshipping", href: "/services/amazon-arbitrage", desc: "Low upfront inventory model", icon: <FaTruck />, tone: "navy" },
      { name: "Account Reinstatement", href: "/services/amazon-reinstatement", desc: "Help with a suspended account", icon: <FaShieldAlt />, tone: "" },
    ],
  },
  {
    name: "Walmart",
    href: "/services/walmart",
    allLabel: "All Walmart services",
    children: [
      { name: "Walmart Account Management", href: "/services/walmart-management", desc: "Full-service store management", icon: <FaStore />, tone: "" },
      { name: "Walmart WFS", href: "/services/walmart-wfs", desc: "Walmart Fulfillment Services", icon: <FaWarehouse />, tone: "amber" },
      { name: "Walmart Wholesale", href: "/services/walmart-wholesale", desc: "Wholesale store management", icon: <FaBoxes />, tone: "navy" },
    ],
  },
  {
    name: "More marketplaces",
    href: "/services",
    allLabel: "See all services",
    children: [
      { name: "Temu Store Management", href: "/services/temu", desc: "Sell on Temu from US stock", icon: <FaShoppingBag />, tone: "" },
      { name: "eBay", href: "/services/ebay-dropshipping", desc: "eBay store management", icon: <FaEbay />, tone: "amber" },
      { name: "Etsy", href: "/services/etsy-dropshipping", desc: "Etsy store management", icon: <FaEtsy />, tone: "navy" },
      { name: "Shopify Stores", href: "/services/shopify", desc: "Build, redesign and manage", icon: <FaShopify />, tone: "" },
      { name: "Shopify Redesign", href: "/services/shopify-redesign", desc: "Conversion-focused redesign", icon: <FaPaintBrush />, tone: "amber" },
      { name: "Shopify Themes", href: "/services/shopify-theme-development", desc: "Custom theme development", icon: <FaCode />, tone: "navy" },
      { name: "Shopify Apps", href: "/services/shopify-app-development", desc: "Custom app solutions", icon: <FaPuzzlePiece />, tone: "" },
      { name: "Shopify Marketing", href: "/services/shopify-marketing", desc: "SEO, ads and growth", icon: <FaBullhorn />, tone: "amber" },
    ],
  },
  {
    name: "Business setup",
    href: "/services/seller-account-setup",
    children: [
      { name: "Seller Account Setup", href: "/services/seller-account-setup", desc: "Open your own account the right way", icon: <FaUserCheck />, tone: "" },
      { name: "Company Filing", href: "/services/company-filing", desc: "LLC and LTD formation, EIN", icon: <FaBuilding />, tone: "amber" },
      { name: "Tax Filing", href: "/services/tax-filing", desc: "Returns, sales tax, bookkeeping", icon: <FaFileInvoiceDollar />, tone: "navy" },
      { name: "3PL Warehouse", href: "/services/3pl-warehouse", desc: "Same-day prep and shipping", icon: <FaWarehouse />, tone: "" },
      { name: "Profit Calculator", href: "/tools/profit-calculator", desc: "Free Amazon and Walmart tool", icon: <FaCalculator />, tone: "amber" },
    ],
  },
  { name: "Results", href: "/success-story" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact", mobileOnly: true },
];

const css = `
@keyframes hdr6-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
.hdr6 { position: sticky; top: 0; z-index: 900; background: #fff; border-bottom: 1px solid transparent; transition: box-shadow .2s, border-color .2s; }
.hdr6.is-scrolled { border-bottom-color: var(--color-line); box-shadow: 0 6px 20px rgba(10,27,77,0.07); }
.hdr6-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; height: 76px; }
@media (min-width: 1280px) { .hdr6-row { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); gap: 16px; } }
@media (max-width: 520px) { .hdr6-row { height: 66px; } }
.hdr6-nav { align-items: center; gap: 2px; }
.hdr6-link { display: inline-flex; align-items: center; gap: 6px; padding: 9px 12px; border-radius: 10px; font-size: 15px; font-weight: 600; line-height: 1.2; color: var(--color-dark); text-decoration: none; background: none; border: 0; cursor: pointer; font-family: inherit; white-space: nowrap; transition: color .15s, background-color .15s; }
.hdr6-link:hover, .hdr6-link.is-open { color: var(--color-primary); background: var(--color-primary-light); }
.hdr6-link.is-active { color: var(--color-primary); }
.hdr6-link svg { transition: transform .15s; }
.hdr6-link.is-open svg { transform: rotate(180deg); }
.hdr6-item { position: relative; }
.hdr6-panel { position: absolute; top: 100%; left: -12px; padding-top: 14px; animation: hdr6-in .16s ease both; }
.hdr6-box { width: 600px; background: #fff; border: 1px solid var(--color-line); border-radius: 16px; box-shadow: 0 24px 48px rgba(10,27,77,0.14); padding: 12px; }
.hdr6-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2px 6px; }
.hdr6-child { display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 12px; align-items: center; padding: 10px; border-radius: 12px; text-decoration: none; color: var(--color-dark); transition: background-color .15s; }
.hdr6-child:hover, .hdr6-child:focus-visible { background: var(--color-primary-light); }
.hdr6-child .icon-tile { width: 40px; height: 40px; border-radius: 11px; font-size: 17px; }
.hdr6-child b { display: block; font-size: 15px; font-weight: 700; line-height: 1.3; }
.hdr6-child small { display: block; font-size: 13.5px; line-height: 1.4; color: var(--color-text-light); margin-top: 1px; }
.hdr6-all { display: flex; align-items: center; justify-content: space-between; margin-top: 10px; padding: 12px 14px; border-radius: 12px; background: var(--color-light-gray); font-size: 14.5px; font-weight: 700; color: var(--color-primary); text-decoration: none; transition: background-color .15s; }
.hdr6-all:hover { background: var(--color-primary-light); }
.hdr6-right { display: flex; align-items: center; justify-content: flex-end; gap: 10px; }
.hdr6-cta { padding: 12px 20px; font-size: 15px; white-space: nowrap; }
.hdr6-logo { text-decoration: none; display: inline-flex; }
@media (max-width: 520px) {
  .hdr6 .container-main { padding-left: 18px; padding-right: 18px; }
  .hdr6-cta { padding: 10px 12px; font-size: 14px; }
  .hdr6-logo svg { width: 30px; height: auto; }
  .hdr6-logo .logo-lockup { gap: 8px !important; }
  .hdr6-logo .logo-lockup > span { font-size: 20px !important; }
  .hdr6-burger { width: 42px; height: 42px; }
}
@media (max-width: 380px) { .hdr6-cta { padding: 9px 10px; font-size: 13.5px; } .hdr6-logo svg { width: 27px; } .hdr6-logo .logo-lockup > span { font-size: 18.5px !important; } }
.hdr6-burger { width: 46px; height: 46px; border-radius: 10px; border: 1px solid var(--color-line); background: #fff; color: var(--color-dark); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
.hdr6-mobile { border-top: 1px solid var(--color-line); background: #fff; max-height: calc(100vh - 67px); overflow-y: auto; animation: hdr6-in .16s ease both; box-shadow: 0 24px 40px rgba(10,27,77,0.1); }
.hdr6-mwrap { padding-top: 10px; padding-bottom: 24px; }
.hdr6-mrow { line-height: 1.3; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 14px 12px; margin-top: 2px; background: none; border: 0; border-radius: 12px; font-family: inherit; font-size: 17px; font-weight: 700; color: var(--color-dark); text-decoration: none; text-align: left; cursor: pointer; }
.hdr6-mrow[aria-expanded="true"] { background: var(--color-primary-light); color: var(--color-primary); }
.hdr6-msub { padding: 6px 0 8px; }
.hdr6-msub .hdr6-child { padding: 9px 12px; }
.hdr6-msub .hdr6-all { margin: 6px 0 0; }
.hdr6-mfoot { margin-top: 16px; padding-top: 18px; border-top: 1px solid var(--color-line); display: grid; gap: 10px; }
.hdr6-mfoot p { font-size: 15px; text-align: center; color: var(--color-text-light); }
.hdr6-mfoot p a { color: var(--color-dark); font-weight: 700; text-decoration: none; }
`;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    <header className={`hdr6${scrolled || mobile ? " is-scrolled" : ""}`}>
      <style>{css}</style>
      <div className="container-main">
        <div className="hdr6-row">
          <Link href="/" aria-label="Gosellify home" className="hdr6-logo">
            <Logo size={36} fontSize={23} />
          </Link>

          <nav ref={navRef} className="hdr6-nav hidden xl:flex" aria-label="Main">
            {navLinks.filter((item) => !item.mobileOnly).map((item) => {
              const active = pathname === item.href || (item.children ? item.children.some((c) => c.href === pathname) : false);
              if (!item.children) {
                return (
                  <Link key={item.name} href={item.href} className={`hdr6-link${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined}>
                    {item.name}
                  </Link>
                );
              }
              const isOpen = open === item.name;
              const panelId = `hdr6-${item.name.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <div
                  key={item.name}
                  className="hdr6-item"
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
                    className={`hdr6-link${active ? " is-active" : ""}${isOpen ? " is-open" : ""}`}
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
                    <div className="hdr6-panel" id={panelId}>
                      <div className="hdr6-box">
                        <div className="hdr6-grid">
                          {item.children.map((c) => (
                            <Link key={c.href} href={c.href} className="hdr6-child" onClick={() => setOpen(null)}>
                              <span className={`icon-tile${c.tone ? ` ${c.tone}` : ""}`} aria-hidden="true">
                                {c.icon}
                              </span>
                              <span>
                                <b>{c.name}</b>
                                <small>{c.desc}</small>
                              </span>
                            </Link>
                          ))}
                        </div>
                        {item.allLabel && (
                          <Link href={item.href} className="hdr6-all" onClick={() => setOpen(null)}>
                            {item.allLabel}
                            <FaArrowRight size={12} aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hdr6-right">
            <Link href="/profit-check" className="btn-primary hdr6-cta">
              Check my profit
            </Link>
            <span className="xl:hidden">
              <button type="button" className="hdr6-burger" aria-label={mobile ? "Close menu" : "Open menu"} aria-expanded={mobile} aria-controls="hdr6-mobile" onClick={() => setMobile(!mobile)}>
                {mobile ? <FaTimes size={18} aria-hidden="true" /> : <FaBars size={18} aria-hidden="true" />}
              </button>
            </span>
          </div>
        </div>
      </div>

      {mobile && (
        <div className="xl:hidden">
          <nav className="hdr6-mobile" id="hdr6-mobile" aria-label="Mobile">
            <div className="container-main hdr6-mwrap">
              {navLinks.map((item) => {
                if (!item.children) {
                  return (
                    <Link key={item.name} href={item.href} className="hdr6-mrow" onClick={() => setMobile(false)}>
                      {item.name}
                    </Link>
                  );
                }
                const isOpen = mobileOpen === item.name;
                return (
                  <div key={item.name}>
                    <button type="button" className="hdr6-mrow" aria-expanded={isOpen} onClick={() => setMobileOpen(isOpen ? null : item.name)}>
                      {item.name}
                      <FaChevronDown size={12} aria-hidden="true" style={{ transform: isOpen ? "rotate(180deg)" : "none" }} />
                    </button>
                    {isOpen && (
                      <div className="hdr6-msub">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="hdr6-child" onClick={() => setMobile(false)}>
                            <span className={`icon-tile${c.tone ? ` ${c.tone}` : ""}`} aria-hidden="true">
                              {c.icon}
                            </span>
                            <span>
                              <b>{c.name}</b>
                              <small>{c.desc}</small>
                            </span>
                          </Link>
                        ))}
                        {item.allLabel && (
                          <Link href={item.href} className="hdr6-all" onClick={() => setMobile(false)}>
                            {item.allLabel}
                            <FaArrowRight size={12} aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="hdr6-mfoot">
                <Link href="/profit-check" className="btn-accent" onClick={() => setMobile(false)}>
                  Start the 2-minute Profit Check
                </Link>
                <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FaWhatsapp size={18} aria-hidden="true" />
                  WhatsApp us
                </a>
                <p>
                  Call <a href="tel:+13073938789">+1 307 393 8789</a>
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
