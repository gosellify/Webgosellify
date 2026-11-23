import type { ReactNode } from "react";
import {
  FaSearch, FaListAlt, FaTags, FaTruck, FaUndo, FaComments, FaHeartbeat, FaChartLine, FaUserTie, FaWarehouse,
  FaBoxOpen, FaShieldAlt, FaLock, FaBullhorn, FaFileInvoiceDollar, FaStore, FaClipboardList, FaSyncAlt,
  FaPlug, FaUsersCog, FaPalette, FaCode, FaCreditCard, FaRocket, FaBook, FaEnvelope, FaBalanceScale, FaGlobe,
  FaBuilding, FaCamera, FaBarcode, FaCubes, FaMobileAlt, FaTachometerAlt, FaExchangeAlt, FaIdCard, FaLandmark,
  FaHandshake, FaTools, FaCheckCircle, FaDesktop, FaCalendarAlt, FaEye, FaPhoneAlt, FaClipboardCheck, FaTshirt,
  FaLayerGroup, FaShoppingCart, FaHandHoldingUsd, FaMapMarkerAlt, FaUsers, FaAmazon, FaShopify, FaEbay, FaEtsy, FaCalculator,
} from "react-icons/fa";

/* Picks a sensible icon from a card title. First matching keyword wins, so the more specific words come first. */
const iconRules: { words: string[]; icon: ReactNode }[] = [
  { words: ["encrypt", "secure", "security", "private"], icon: <FaLock /> },
  { words: ["api", "integration", "connected", "connection"], icon: <FaPlug /> },
  { words: ["role", "access", "permission"], icon: <FaUsersCog /> },
  { words: ["profit and loss", "p&l", "bookkeeping", "statement", "invoice", "1099", "reconcil"], icon: <FaFileInvoiceDollar /> },
  { words: ["when you pay"], icon: <FaCalendarAlt /> },
  { words: ["counted", "calculat"], icon: <FaCalculator /> },
  { words: ["pay from profit", "profit share", "you pay"], icon: <FaHandHoldingUsd /> },
  { words: ["contract", "cancel"], icon: <FaHandshake /> },
  { words: ["capital"], icon: <FaCreditCard /> },
  { words: ["dashboard", "portal", "numbers"], icon: <FaDesktop /> },
  { words: ["account health", "health", "metric", "defect"], icon: <FaHeartbeat /> },
  { words: ["research", "sourcing", "hunting", "keyword", "audit", "analysis", "review of"], icon: <FaSearch /> },
  { words: ["advertis", "ppc", "ads", "sponsored", "campaign", "marketing", "social", "promot"], icon: <FaBullhorn /> },
  { words: ["email", "newsletter", "letter"], icon: <FaEnvelope /> },
  { words: ["seo", "ranking", "search"], icon: <FaChartLine /> },
  { words: ["speed", "performance"], icon: <FaTachometerAlt /> },
  { words: ["mobile", "responsive"], icon: <FaMobileAlt /> },
  { words: ["theme", "design", "brand", "customiz", "look"], icon: <FaPalette /> },
  { words: ["app ", "apps", "app setup", "custom feature", "code", "develop", "liquid", "section"], icon: <FaCode /> },
  { words: ["payment", "gateway", "checkout", "payout"], icon: <FaCreditCard /> },
  { words: ["migration", "migrat", "transfer", "import"], icon: <FaExchangeAlt /> },
  { words: ["buy box", "pricing", "price", "repric", "rate", "fee"], icon: <FaTags /> },
  { words: ["return", "refund"], icon: <FaUndo /> },
  { words: ["customer", "buyer", "message", "support", "whatsapp", "reach us"], icon: <FaComments /> },
  { words: ["photo", "image", "inspect", "check"], icon: <FaCamera /> },
  { words: ["label", "barcode", "fnsku", "upc"], icon: <FaBarcode /> },
  { words: ["prep", "pack", "bundl", "kitting", "box"], icon: <FaBoxOpen /> },
  { words: ["storage", "warehouse", "3pl", "receiving", "receive"], icon: <FaWarehouse /> },
  { words: ["shipping", "shipment", "fulfil", "deliver", "inbound", "order", "dispatch"], icon: <FaTruck /> },
  { words: ["inventory", "stock", "catalog", "replenish"], icon: <FaCubes /> },
  { words: ["print-on-demand", "print on demand", "product design"], icon: <FaTshirt /> },
  { words: ["listing", "product entry", "product listing", "titles", "content"], icon: <FaListAlt /> },
  { words: ["supplier", "distributor", "wholesale", "brand approval", "approval", "ungating", "negotiat"], icon: <FaHandshake /> },
  { words: ["ein", "itin", "identity", "verification", "document", "paperwork"], icon: <FaIdCard /> },
  { words: ["llc", "company", "formation", "registered agent", "business address"], icon: <FaBuilding /> },
  { words: ["bank"], icon: <FaLandmark /> },
  { words: ["tax", "irs", "federal", "sales tax", "quarterly"], icon: <FaBalanceScale /> },
  { words: ["compliance", "policy", "policies", "legal", "rules", "protect"], icon: <FaShieldAlt /> },
  { words: ["report", "analytics", "tracking", "data"], icon: <FaChartLine /> },
  { words: ["manager", "named", "dedicated", "one team", "team does"], icon: <FaUserTie /> },
  { words: ["team", "staff", "people"], icon: <FaUsers /> },
  { words: ["growth", "scale", "launch", "expan"], icon: <FaRocket /> },
  { words: ["setup", "set up", "configuration", "configur", "maintenance", "fix"], icon: <FaTools /> },
  { words: ["store stays yours", "your name", "yours"], icon: <FaStore /> },
  { words: ["same-day", "same day", "daily", "schedule", "timeline"], icon: <FaCalendarAlt /> },
  { words: ["guide", "training", "learn"], icon: <FaBook /> },
  { words: ["international", "global", "country", "non-resident"], icon: <FaGlobe /> },
  { words: ["location", "address", "us warehouses"], icon: <FaMapMarkerAlt /> },
  { words: ["transparen", "see ", "visibility"], icon: <FaEye /> },
  { words: ["phone", "call"], icon: <FaPhoneAlt /> },
  { words: ["cart", "sales", "sell"], icon: <FaShoppingCart /> },
  { words: ["multi", "channel", "marketplace"], icon: <FaLayerGroup /> },
  { words: ["sync", "automat", "update"], icon: <FaSyncAlt /> },
  { words: ["plan", "strategy", "checklist", "process"], icon: <FaClipboardList /> },
  { words: ["quality", "included", "guarantee"], icon: <FaClipboardCheck /> },
  { words: ["amazon", "fba"], icon: <FaAmazon /> },
  { words: ["shopify"], icon: <FaShopify /> },
  { words: ["ebay"], icon: <FaEbay /> },
  { words: ["etsy"], icon: <FaEtsy /> },
  { words: ["store", "shop", "walmart", "management", "wfs", "temu"], icon: <FaStore /> },
];

export function pickIcon(title: string): ReactNode {
  const text = ` ${title.toLowerCase()} `;
  for (const rule of iconRules) {
    if (rule.words.some((word) => text.includes(word))) return rule.icon;
  }
  return <FaCheckCircle />;
}

const tones: string[] = ["icon-tile", "icon-tile amber", "icon-tile navy"];

/* Cycles the three solid tile colors across a row. */
export function tileClass(index: number): string {
  return tones[index % tones.length];
}
