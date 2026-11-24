import Link from "next/link";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import Logo from "@/components/brand/Logo";

const columns = [
  {
    title: "Amazon",
    links: [
      { name: "Amazon management", href: "/services/amazon" },
      { name: "Amazon FBA", href: "/services/amazon-fba" },
      { name: "Amazon Wholesale", href: "/services/amazon-wholesale" },
      { name: "2-Step Dropshipping", href: "/services/amazon-arbitrage" },
      { name: "Account Reinstatement", href: "/services/amazon-reinstatement" },
    ],
  },
  {
    title: "Walmart",
    links: [
      { name: "Walmart management", href: "/services/walmart-management" },
      { name: "Walmart WFS", href: "/services/walmart-wfs" },
      { name: "Walmart Wholesale", href: "/services/walmart-wholesale" },
      { name: "All Walmart services", href: "/services/walmart" },
    ],
  },
  {
    title: "More services",
    links: [
      { name: "Temu store management", href: "/services/temu" },
      { name: "Seller account setup", href: "/services/seller-account-setup" },
      { name: "Shopify services", href: "/services/shopify" },
      { name: "eBay Dropshipping", href: "/services/ebay-dropshipping" },
      { name: "Etsy Dropshipping", href: "/services/etsy-dropshipping" },
      { name: "3PL Warehouse", href: "/services/3pl-warehouse" },
      { name: "Company Filing", href: "/services/company-filing" },
      { name: "Tax Filing", href: "/services/tax-filing" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Success stories", href: "/success-story" },
      { name: "Pricing", href: "/pricing" },
      { name: "Seller guides", href: "/guides" },
      { name: "Profit calculator", href: "/tools/profit-calculator" },
      { name: "Affiliate program", href: "/referral" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61555382275675", icon: <FaFacebookF /> },
  { label: "YouTube", href: "https://www.youtube.com/@gosellify", icon: <FaYoutube /> },
  { label: "LinkedIn", href: "https://linkedin.com/company/gosellify/", icon: <FaLinkedinIn /> },
  { label: "WhatsApp", href: "https://wa.me/13073938789", icon: <FaWhatsapp /> },
];

export default function Footer() {
  return (
    <footer className="bg-navy grid-dots-dark" style={{ color: "#c9d6f7", position: "relative", overflow: "hidden" }}>
      <div className="container-wide" style={{ paddingTop: 80, paddingBottom: 36 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 300px", maxWidth: 380, display: "flex", flexDirection: "column", gap: 18 }}>
            <Link href="/" aria-label="Gosellify home" style={{ textDecoration: "none" }}>
              <Logo variant="dark" size={48} fontSize={32} />
            </Link>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>
              Full-service ecommerce management for Amazon, Walmart, eBay, Shopify and Etsy sellers. You pay from profit and see every order in your own dashboard.
            </p>
            <Link href="/get-started" className="btn-accent" style={{ alignSelf: "flex-start" }}>
              Get free store plan <FaArrowRight className="btn-arrow" size={13} />
            </Link>
            <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="g-card-dark" style={{ width: 46, height: 46, borderRadius: 14, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 17 }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div style={{ flex: "2 1 620px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "36px 28px" }}>
            {columns.map((col) => (
              <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ color: "#FFB21A", fontWeight: 800, fontSize: 13, letterSpacing: 1.6, textTransform: "uppercase" }}>{col.title}</span>
                {col.links.map((l) => (
                  <Link key={l.href} href={l.href} className="link-underline" style={{ color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 600, alignSelf: "flex-start" }}>
                    {l.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 56 }}>
          <a href="tel:+13073938789" className="g-card-dark" style={{ flex: "1 1 240px", padding: "18px 22px", color: "#fff", textDecoration: "none" }}>
            <div style={{ fontSize: 13, color: "#FFB21A", fontWeight: 800, letterSpacing: 1.2, textTransform: "uppercase" }}>Call or WhatsApp</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>+1 307 393 8789</div>
          </a>
          <a href="mailto:info@gosellify.com" className="g-card-dark" style={{ flex: "1 1 240px", padding: "18px 22px", color: "#fff", textDecoration: "none" }}>
            <div style={{ fontSize: 13, color: "#FFB21A", fontWeight: 800, letterSpacing: 1.2, textTransform: "uppercase" }}>Email</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>info@gosellify.com</div>
          </a>
          <a href="https://portal.gosellify.com/" className="g-card-dark" style={{ flex: "1 1 240px", padding: "18px 22px", color: "#fff", textDecoration: "none" }}>
            <div style={{ fontSize: 13, color: "#FFB21A", fontWeight: 800, letterSpacing: 1.2, textTransform: "uppercase" }}>Clients</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>Open the Gosellify Portal</div>
          </a>
        </div>
      </div>

      <div aria-hidden="true" className="marquee-wrap" style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="marquee" style={{ fontWeight: 800, fontSize: "clamp(64px, 11vw, 180px)", letterSpacing: "-0.05em", lineHeight: 1.05, color: "rgba(255,255,255,0.07)", whiteSpace: "nowrap" }}>
          <span style={{ paddingRight: 60 }}>Go sell. Go grow. Gosellify. Go sell. Go grow. Gosellify.</span>
          <span style={{ paddingRight: 60 }}>Go sell. Go grow. Gosellify. Go sell. Go grow. Gosellify.</span>
        </div>
      </div>

      <div className="container-wide" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, paddingTop: 22, paddingBottom: 26, fontSize: 14 }}>
        <span>&copy; {new Date().getFullYear()} Gosellify LLC. All rights reserved.</span>
        <span style={{ display: "flex", gap: 22 }}>
          <Link href="/privacy-policy" style={{ color: "#c9d6f7", textDecoration: "none" }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: "#c9d6f7", textDecoration: "none" }}>Terms</Link>
          <Link href="/contact" style={{ color: "#c9d6f7", textDecoration: "none" }}>Contact</Link>
        </span>
      </div>
    </footer>
  );
}
