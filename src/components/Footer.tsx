import Link from "next/link";
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

const socials: FootLink[] = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61555382275675" },
  { name: "YouTube", href: "https://www.youtube.com/@gosellify" },
  { name: "LinkedIn", href: "https://linkedin.com/company/gosellify/" },
];

const css = `
.ftr5 { border-top: 1px solid var(--color-line); color: var(--color-dark); font-size: 15px; line-height: 1.6; }
.ftr5-top { display: grid; grid-template-columns: 1fr; gap: 40px; padding-top: 56px; padding-bottom: 40px; }
.ftr5-cols { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px 24px; }
@media (min-width: 720px) { .ftr5-cols { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
@media (min-width: 1040px) { .ftr5-top { grid-template-columns: 300px minmax(0, 1fr); gap: 72px; } }
.ftr5 h2 { font-size: 14px; font-weight: 700; letter-spacing: 0; margin-bottom: 10px; color: var(--color-dark); }
.ftr5 ul { list-style: none; }
.ftr5 li { margin-bottom: 7px; }
.ftr5 a { color: var(--color-text-light); text-decoration: none; }
.ftr5 a:hover { color: var(--color-primary); text-decoration: underline; text-underline-offset: 3px; }
.ftr5-co { font-style: normal; color: var(--color-text-light); }
.ftr5-co strong { color: var(--color-dark); }
.ftr5-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-top: 18px; padding-bottom: 22px; font-size: 14px; color: var(--color-text-light); }
`;

export default function Footer() {
  return (
    <footer className="ftr5 bg-tint">
      <style>{css}</style>
      <div className="container-main ftr5-top">
        <div>
          <Link href="/" aria-label="Gosellify home" style={{ display: "inline-flex" }}>
            <Logo size={30} fontSize={20} />
          </Link>
          <address className="ftr5-co" style={{ marginTop: 16 }}>
            <strong>Gosellify LLC</strong>
            <br />
            30 N Gould St Ste R
            <br />
            Sheridan, WY 82801
            <br />
            <span style={{ display: "block", marginTop: 10 }}>
              Phone: <a href="tel:+13073938789">+1 307 393 8789</a>
            </span>
            <span style={{ display: "block" }}>
              Email: <a href="mailto:info@gosellify.com">info@gosellify.com</a>
            </span>
            <span style={{ display: "block" }}>
              WhatsApp:{" "}
              <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer">
                message us
              </a>
            </span>
            <span style={{ display: "block", marginTop: 10 }}>Operations team: Multan, Pakistan</span>
          </address>
        </div>

        <div className="ftr5-cols">
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
        <div className="ftr5-bottom">
          <span>&copy; {new Date().getFullYear()} Gosellify LLC</span>
          <span style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px" }}>
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.name}
              </a>
            ))}
            <a href="https://portal.gosellify.com/">Client login</a>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
