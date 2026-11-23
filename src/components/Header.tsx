"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaArrowRight,
  FaBars,
  FaBookOpen,
  FaBoxOpen,
  FaBuilding,
  FaBullhorn,
  FaCalculator,
  FaChevronDown,
  FaCode,
  FaEbay,
  FaEnvelope,
  FaEtsy,
  FaFileInvoiceDollar,
  FaHandshake,
  FaIdCard,
  FaLayerGroup,
  FaLifeRing,
  FaPaintBrush,
  FaPhoneAlt,
  FaPuzzlePiece,
  FaQuestionCircle,
  FaShopify,
  FaShoppingBag,
  FaStore,
  FaTimes,
  FaTruckLoading,
  FaUsers,
  FaWarehouse,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "@/components/brand/Logo";

interface NavChild {
  name: string;
  href: string;
  desc: string;
  icon: React.ReactNode;
}
interface Feature {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
}
interface NavItem {
  name: string;
  href: string;
  children?: NavChild[];
  feature?: Feature;
}

const navLinks: NavItem[] = [
  {
    name: "Amazon",
    href: "/services/amazon",
    children: [
      { name: "Amazon FBA", href: "/services/amazon-fba", desc: "Private label and FBA management", icon: <FaBoxOpen /> },
      { name: "Amazon Wholesale", href: "/services/amazon-wholesale", desc: "Branded products from distributors", icon: <FaLayerGroup /> },
      { name: "2-Step Dropshipping", href: "/services/amazon-arbitrage", desc: "Low upfront inventory model", icon: <FaTruckLoading /> },
      { name: "Account Reinstatement", href: "/services/amazon-reinstatement", desc: "Help with a suspended account", icon: <FaLifeRing /> },
    ],
    feature: { eyebrow: "Amazon store management", title: "One team runs your whole Amazon store.", text: "Research, listings, orders, returns and account health.", cta: "All Amazon services", href: "/services/amazon" },
  },
  {
    name: "Walmart",
    href: "/services/walmart",
    children: [
      { name: "Walmart Account Management", href: "/services/walmart-management", desc: "Full-service store management", icon: <FaStore /> },
      { name: "Walmart WFS", href: "/services/walmart-wfs", desc: "Walmart Fulfillment Services", icon: <FaBoxOpen /> },
      { name: "Walmart Wholesale", href: "/services/walmart-wholesale", desc: "Wholesale store management", icon: <FaLayerGroup /> },
    ],
    feature: { eyebrow: "Walmart marketplace management", title: "A Walmart playbook, run every day.", text: "Listings, pricing, orders and daily health checks.", cta: "All Walmart services", href: "/services/walmart" },
  },
  {
    name: "More marketplaces",
    href: "/services",
    children: [
      { name: "Temu Store Management", href: "/services/temu", desc: "Sell on Temu from US stock", icon: <FaShoppingBag /> },
      { name: "eBay", href: "/services/ebay-dropshipping", desc: "eBay store management", icon: <FaEbay /> },
      { name: "Etsy", href: "/services/etsy-dropshipping", desc: "Etsy store management", icon: <FaEtsy /> },
      { name: "Shopify Stores", href: "/services/shopify", desc: "Build, redesign and manage", icon: <FaShopify /> },
      { name: "Shopify Redesign", href: "/services/shopify-redesign", desc: "Conversion-focused redesign", icon: <FaPaintBrush /> },
      { name: "Shopify Themes", href: "/services/shopify-theme-development", desc: "Custom theme development", icon: <FaCode /> },
      { name: "Shopify Apps", href: "/services/shopify-app-development", desc: "Custom app solutions", icon: <FaPuzzlePiece /> },
      { name: "Shopify Marketing", href: "/services/shopify-marketing", desc: "SEO, ads and growth", icon: <FaBullhorn /> },
    ],
    feature: { eyebrow: "Every marketplace", title: "Sell in more places with the same team.", text: "All your stores show in one dashboard.", cta: "See all services", href: "/services" },
  },
  {
    name: "Business setup",
    href: "/services/seller-account-setup",
    children: [
      { name: "Seller Account Setup", href: "/services/seller-account-setup", desc: "Open your own account the right way", icon: <FaIdCard /> },
      { name: "Company Filing", href: "/services/company-filing", desc: "LLC and LTD formation, EIN", icon: <FaBuilding /> },
      { name: "Tax Filing", href: "/services/tax-filing", desc: "Returns, sales tax, bookkeeping", icon: <FaFileInvoiceDollar /> },
      { name: "3PL Warehouse", href: "/services/3pl-warehouse", desc: "Same-day prep and shipping", icon: <FaWarehouse /> },
    ],
    feature: { eyebrow: "Start the right way", title: "From company papers to your first order.", text: "We set up the business side so you can sell.", cta: "Start account setup", href: "/services/seller-account-setup" },
  },
  { name: "Results", href: "/success-story" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Resources",
    href: "/guides",
    children: [
      { name: "Seller Guides", href: "/guides", desc: "Walmart, Amazon and Temu how-tos", icon: <FaBookOpen /> },
      { name: "Profit Calculator", href: "/tools/profit-calculator", desc: "Free Amazon and Walmart tool", icon: <FaCalculator /> },
      { name: "FAQ", href: "/faq", desc: "Answers before you start", icon: <FaQuestionCircle /> },
      { name: "About Gosellify", href: "/about", desc: "Who runs your store", icon: <FaUsers /> },
      { name: "Affiliate Program", href: "/referral", desc: "Refer sellers and earn", icon: <FaHandshake /> },
      { name: "Contact", href: "/contact", desc: "Call, email or WhatsApp", icon: <FaEnvelope /> },
    ],
    feature: { eyebrow: "Free for sellers", title: "Learn before you invest.", text: "Guides that link to the official marketplace rules.", cta: "Read the guides", href: "/guides" },
  },
];

const css = `
@keyframes hdr-panel { from { opacity: 0; transform: translateY(14px) scale(.985); } to { opacity: 1; transform: none; } }
@keyframes hdr-item { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
@keyframes hdr-bar { from { transform: scaleY(.2); } to { transform: scaleY(1); } }
.hdr-shell { border: 2px solid var(--color-line); border-radius: 22px; background: rgba(255,255,255,0.94); transition: box-shadow .3s, border-color .3s, background-color .3s; }
.hdr-shell.is-scrolled { box-shadow: 0 18px 44px rgba(10,27,77,0.14); backdrop-filter: saturate(180%) blur(16px); -webkit-backdrop-filter: saturate(180%) blur(16px); background: rgba(255,255,255,0.84); }
.hdr-link { position: relative; display: inline-flex; align-items: center; gap: 6px; padding: 11px 13px; border-radius: 12px; font-size: 15px; font-weight: 700; color: var(--color-dark); text-decoration: none; background: transparent; border: none; cursor: pointer; font-family: inherit; white-space: nowrap; transition: color .2s, background-color .2s; }
.hdr-link::after { content: ""; position: absolute; left: 13px; right: 13px; bottom: 5px; height: 3px; border-radius: 2px; background: var(--color-accent); transform: scaleX(0); transform-origin: left; transition: transform .3s cubic-bezier(.2,.8,.2,1); }
.hdr-link:hover, .hdr-link.is-open { color: var(--color-primary); background: var(--color-primary-light); }
.hdr-link.is-active::after, .hdr-link:hover::after, .hdr-link.is-open::after { transform: scaleX(1); }
.hdr-panel { animation: hdr-panel .28s cubic-bezier(.2,.8,.2,1) both; background: #fff; border: 2px solid var(--color-line); border-radius: 26px; box-shadow: 0 40px 80px rgba(10,27,77,0.22); padding: 14px; display: flex; gap: 14px; }
.hdr-item { display: flex; align-items: center; gap: 14px; padding: 12px 14px; border-radius: 16px; text-decoration: none; color: var(--color-dark); animation: hdr-item .35s cubic-bezier(.2,.8,.2,1) both; transition: background-color .2s, transform .2s; }
.hdr-item:hover { background: var(--color-primary-light); transform: translateX(4px); }
.hdr-ico { width: 44px; height: 44px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 19px; background: var(--color-primary-light); color: var(--color-primary); transition: background-color .25s, color .25s, transform .25s; }
.hdr-item:hover .hdr-ico { background: var(--color-primary); color: #fff; transform: rotate(-8deg) scale(1.08); }
.hdr-go { margin-left: auto; opacity: 0; transform: translateX(-6px); transition: opacity .2s, transform .2s; color: var(--color-primary); flex-shrink: 0; }
.hdr-item:hover .hdr-go { opacity: 1; transform: none; }
.hdr-feature { position: relative; overflow: hidden; width: 300px; flex-shrink: 0; border-radius: 18px; background-color: var(--color-dark); color: #fff; padding: 24px; display: flex; flex-direction: column; gap: 10px; }
.hdr-feature-bars { display: flex; align-items: flex-end; gap: 6px; height: 64px; margin-top: auto; padding-top: 14px; }
.hdr-feature-bars span { flex: 1; border-radius: 6px 6px 0 0; transform-origin: bottom; animation: hdr-bar .7s cubic-bezier(.2,.8,.2,1) both; }
`;

const featureBars: number[] = [30, 44, 38, 58, 52, 72, 66, 100];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const closeTimer = useRef<number | null>(null);

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openNow = (name: string | null) => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    setOpen(name);
  };
  const closeSoon = () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  };

  const current: NavItem | undefined = navLinks.find((n) => n.name === open && n.children !== undefined);

  return (
    <>
      <style>{css}</style>
      <div style={{ background: "var(--color-dark)", color: "#fff", fontSize: 14, fontWeight: 600 }}>
        <div className="container-wide" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "6px 24px", paddingTop: 9, paddingBottom: 9 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span className="pulse-dot" aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFB21A", display: "inline-block" }} />
            <span>
              <span style={{ color: "var(--color-accent)" }}>Pay from profit.</span> No upfront management fee.
            </span>
          </span>
          <span style={{ display: "flex", flexWrap: "wrap", gap: "6px 22px" }}>
            <a href="tel:+13073938789" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <FaPhoneAlt size={12} color="#FFB21A" /> +1 307 393 8789
            </a>
            <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <FaWhatsapp size={14} color="#FFB21A" /> WhatsApp
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
          padding: scrolled ? "8px 0" : "14px 0",
          transform: hidden && !mobile && open === null ? "translateY(-120%)" : "translateY(0)",
          transition: "transform .35s cubic-bezier(.2,.8,.2,1), padding .3s",
          pointerEvents: "none",
        }}
      >
        <div className="container-wide" style={{ position: "relative", pointerEvents: "auto" }} onMouseLeave={closeSoon}>
          <div className={`hdr-shell${scrolled ? " is-scrolled" : ""}`} style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "10px 12px 10px 18px" }}>
              <Link href="/" aria-label="Gosellify home" style={{ textDecoration: "none" }}>
                <Logo />
              </Link>

              <nav className="hidden xl:flex items-center gap-1" aria-label="Main">
                {navLinks.map((item) => {
                  const active = pathname === item.href || (item.children ? item.children.some((c) => c.href === pathname) : false);
                  const cls = `hdr-link${active ? " is-active" : ""}${open === item.name ? " is-open" : ""}`;
                  return item.children ? (
                    <button
                      key={item.name}
                      type="button"
                      className={cls}
                      aria-expanded={open === item.name}
                      aria-haspopup="true"
                      onMouseEnter={() => openNow(item.name)}
                      onFocus={() => openNow(item.name)}
                      onClick={() => openNow(open === item.name ? null : item.name)}
                    >
                      {item.name}
                      <FaChevronDown size={10} style={{ transition: "transform .25s", transform: open === item.name ? "rotate(180deg)" : "none" }} />
                    </button>
                  ) : (
                    <Link key={item.name} href={item.href} className={cls} onMouseEnter={() => openNow(null)}>
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="hidden md:inline-flex">
                  <a href="https://portal.gosellify.com/" className="btn-outline" style={{ padding: "12px 18px", fontSize: 15, borderRadius: 14, whiteSpace: "nowrap" }}>
                    Client login
                  </a>
                </span>
                <span className="hidden sm:inline-flex">
                  <Link href="/profit-check" className="btn-accent" style={{ padding: "14px 20px", fontSize: 15, borderRadius: 14, whiteSpace: "nowrap" }}>
                    Check my profit <FaArrowRight className="btn-arrow" size={13} />
                  </Link>
                </span>
                <span className="xl:hidden">
                  <button
                    type="button"
                    aria-label={mobile ? "Close menu" : "Open menu"}
                    aria-expanded={mobile}
                    onClick={() => setMobile(!mobile)}
                    style={{ width: 48, height: 48, borderRadius: 14, border: "2px solid var(--color-dark)", background: mobile ? "var(--color-dark)" : "#fff", color: mobile ? "#fff" : "var(--color-dark)", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background-color .2s, color .2s" }}
                  >
                    {mobile ? <FaTimes size={18} /> : <FaBars size={18} />}
                  </button>
                </span>
              </div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, height: 3, width: `${progress}%`, background: "linear-gradient(90deg, #1560FF, #FFB21A)", transition: "width .1s linear" }} />
          </div>

          {current && current.children && (
            <div className="hidden xl:block">
              <div style={{ position: "absolute", left: 0, right: 0, top: "100%", paddingTop: 10 }} onMouseEnter={() => openNow(current.name)}>
                <div style={{ display: "flex", justifyContent: "center", padding: "0 clamp(20px, 4vw, 64px)" }}>
                  <div key={current.name} className="hdr-panel" style={{ width: "min(1040px, 100%)" }}>
                    <div style={{ flex: 1, minWidth: 0, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 4, alignContent: "start" }}>
                      {current.children.map((c, i) => (
                        <Link key={c.href} href={c.href} className="hdr-item" style={{ animationDelay: `${40 + i * 35}ms` }}>
                          <span className="hdr-ico" aria-hidden="true">{c.icon}</span>
                          <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                            <span style={{ fontWeight: 800, fontSize: 16 }}>{c.name}</span>
                            <span style={{ fontSize: 14, color: "var(--color-text-light)" }}>{c.desc}</span>
                          </span>
                          <FaArrowRight className="hdr-go" size={13} aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                    {current.feature && (
                      <div className="hdr-feature grid-dots-dark">
                        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--color-accent)" }}>{current.feature.eyebrow}</span>
                        <span style={{ fontWeight: 800, fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.02em" }}>{current.feature.title}</span>
                        <span style={{ fontSize: 14, color: "#c9d6f7" }}>{current.feature.text}</span>
                        <Link href={current.feature.href} style={{ color: "#fff", fontWeight: 800, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                          {current.feature.cta} <FaArrowRight className="btn-arrow" size={12} />
                        </Link>
                        <div className="hdr-feature-bars" aria-hidden="true">
                          {featureBars.map((h, i) => (
                            <span key={i} style={{ height: `${h}%`, background: i === featureBars.length - 1 ? "#FFB21A" : i > 4 ? "#1560FF" : "#2A4590", animationDelay: `${120 + i * 50}ms` }} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {mobile && (
            <div className="xl:hidden">
              <div className="slide-up-in" style={{ marginTop: 10, background: "#fff", border: "2px solid var(--color-line)", borderRadius: 22, boxShadow: "0 30px 60px rgba(10,27,77,0.2)", maxHeight: "calc(100vh - 150px)", overflowY: "auto", padding: "8px 16px 20px" }}>
                {navLinks.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <button
                        type="button"
                        onClick={() => setMobileOpen(mobileOpen === item.name ? null : item.name)}
                        aria-expanded={mobileOpen === item.name}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 6px", background: "none", border: "none", borderBottom: "1px solid var(--color-line)", fontWeight: 800, fontSize: 17, color: "var(--color-dark)", cursor: "pointer", fontFamily: "inherit" }}
                      >
                        {item.name}
                        <FaChevronDown size={12} style={{ transition: "transform .25s", transform: mobileOpen === item.name ? "rotate(180deg)" : "none" }} />
                      </button>
                    ) : (
                      <Link href={item.href} style={{ display: "block", padding: "15px 6px", borderBottom: "1px solid var(--color-line)", fontWeight: 800, fontSize: 17, color: "var(--color-dark)", textDecoration: "none" }}>
                        {item.name}
                      </Link>
                    )}
                    {item.children && mobileOpen === item.name && (
                      <div className="slide-up-in" style={{ padding: "8px 0 10px", display: "flex", flexDirection: "column", gap: 2 }}>
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="hdr-item" style={{ padding: "10px 8px" }}>
                            <span className="hdr-ico" aria-hidden="true">{c.icon}</span>
                            <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                              <span style={{ fontWeight: 800, fontSize: 15 }}>{c.name}</span>
                              <span style={{ fontSize: 13, color: "var(--color-text-light)" }}>{c.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link href="/profit-check" className="btn-accent" style={{ marginTop: 16, width: "100%" }}>
                  Check my profit <FaArrowRight className="btn-arrow" size={13} />
                </Link>
                <a href="https://portal.gosellify.com/" className="btn-outline" style={{ marginTop: 8, width: "100%" }}>
                  Client login
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
