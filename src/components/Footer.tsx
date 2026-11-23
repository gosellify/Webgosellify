import Link from "next/link";
import React from "react";
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Logo from "@/components/brand/Logo";

type FootLink = { name: string; href: string };
type FootColumn = { title: string; links: FootLink[] };

const columns: FootColumn[] = [
  {
    title: "Amazon",
    links: [
      { name: "Amazon store management", href: "/services/amazon" },
      { name: "Amazon FBA", href: "/services/amazon-fba" },
      { name: "Amazon wholesale", href: "/services/amazon-wholesale" },
      { name: "2-step dropshipping", href: "/services/amazon-arbitrage" },
      { name: "Account reinstatement", href: "/services/amazon-reinstatement" },
    ],
  },
  {
    title: "Walmart",
    links: [
      { name: "Walmart account management", href: "/services/walmart-management" },
      { name: "Walmart WFS", href: "/services/walmart-wfs" },
      { name: "Walmart wholesale", href: "/services/walmart-wholesale" },
      { name: "All Walmart services", href: "/services/walmart" },
    ],
  },
  {
    title: "More services",
    links: [
      { name: "Temu store management", href: "/services/temu" },
      { name: "Seller account setup", href: "/services/seller-account-setup" },
      { name: "Shopify stores", href: "/services/shopify" },
      { name: "eBay", href: "/services/ebay-dropshipping" },
      { name: "Etsy", href: "/services/etsy-dropshipping" },
      { name: "3PL warehouse", href: "/services/3pl-warehouse" },
      { name: "Company filing", href: "/services/company-filing" },
      { name: "Tax filing", href: "/services/tax-filing" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Results", href: "/success-story" },
      { name: "Pricing", href: "/pricing" },
      { name: "Profit calculator", href: "/tools/profit-calculator" },
      { name: "Affiliate program", href: "/referral" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

type Social = FootLink & { icon: React.ReactNode };

const socials: Social[] = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61555382275675", icon: <FaFacebookF /> },
  { name: "YouTube", href: "https://www.youtube.com/@gosellify", icon: <FaYoutube /> },
  { name: "LinkedIn", href: "https://linkedin.com/company/gosellify/", icon: <FaLinkedinIn /> },
];

const css = `
.ftr6 { color: var(--color-dark); font-size: 15px; line-height: 1.6; }
.ftr6-top { display: grid; grid-template-columns: 1fr; gap: 40px; padding-top: 64px; padding-bottom: 44px; }
.ftr6-cols { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px 24px; }
@media (min-width: 720px) { .ftr6-cols { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
@media (min-width: 1040px) { .ftr6-top { grid-template-columns: 300px minmax(0, 1fr); gap: 72px; } }
.ftr6 h2 { font-size: 15px; font-weight: 700; letter-spacing: 0; margin-bottom: 14px; color: var(--color-dark); }
.ftr6 ul { list-style: none; }
.ftr6 li { margin-bottom: 9px; line-height: 1.45; }
.ftr6 a { color: var(--color-text-light); text-decoration: none; transition: color .15s; }
.ftr6 a:hover { color: var(--color-primary); }
.ftr6-co { font-style: normal; color: var(--color-text-light); margin-top: 18px; }
.ftr6-co strong { color: var(--color-dark); }
.ftr6-contact { list-style: none; margin-top: 16px; display: grid; gap: 10px; }
.ftr6-contact li { margin: 0; display: grid; grid-template-columns: 32px minmax(0, 1fr); gap: 12px; align-items: center; }
.ftr6-contact i { width: 32px; height: 32px; border-radius: 9px; background: #fff; border: 1px solid var(--color-line); color: var(--color-primary); display: flex; align-items: center; justify-content: center; font-size: 14px; }
.ftr6-contact a { color: var(--color-dark); font-weight: 600; }
.ftr6-ops { margin-top: 16px; font-size: 14px; color: var(--color-text-light); }
.ftr6-bottom { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px 24px; padding-top: 20px; padding-bottom: 24px; font-size: 14px; color: var(--color-text-light); }
.ftr6-legal { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 20px; }
.ftr6-social { display: flex; gap: 8px; }
.ftr6-social a { width: 36px; height: 36px; border-radius: 10px; background: #fff; border: 1px solid var(--color-line); color: var(--color-dark); display: flex; align-items: center; justify-content: center; font-size: 15px; transition: background-color .15s, color .15s, border-color .15s; }
.ftr6-social a:hover { background: var(--color-primary); border-color: var(--color-primary); color: #fff; }
`;

export default function Footer() {
  return (
    <footer className="ftr6 bg-tint">
      <style>{css}</style>
      <div className="container-main ftr6-top">
        <div>
          <Link href="/" aria-label="Gosellify home" style={{ display: "inline-flex" }}>
            <Logo size={32} fontSize={21} />
          </Link>
          <address className="ftr6-co">
            <strong>Gosellify LLC</strong>
            <br />
            30 N Gould St Ste R
            <br />
            Sheridan, WY 82801
          </address>
          <ul className="ftr6-contact">
            <li>
              <i aria-hidden="true">
                <FaPhoneAlt />
              </i>
              <a href="tel:+13073938789">+1 307 393 8789</a>
            </li>
            <li>
              <i aria-hidden="true">
                <FaEnvelope />
              </i>
              <a href="mailto:info@gosellify.com">info@gosellify.com</a>
            </li>
            <li>
              <i aria-hidden="true">
                <FaWhatsapp />
              </i>
              <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp
              </a>
            </li>
          </ul>
          <p className="ftr6-ops">Operations team: Multan, Pakistan</p>
        </div>

        <div className="ftr6-cols">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="container-main">
        <hr className="rule" />
        <div className="ftr6-bottom">
          <span>&copy; {new Date().getFullYear()} Gosellify LLC</span>
          <span className="ftr6-legal">
            <a href="https://portal.gosellify.com/">Client login</a>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </span>
          <span className="ftr6-social">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Gosellify on ${s.name}`}>
                {s.icon}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
