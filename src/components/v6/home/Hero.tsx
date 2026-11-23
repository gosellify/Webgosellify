import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import ScreenShowcase from "@/components/v6/ScreenShowcase";

export default function Hero() {
  return (
    <section className="h6-hero">
      <div className="container-main">
        <div className="h6-hero-copy">
          <p className="g-eyebrow">Amazon · Walmart · Temu · eBay · Shopify</p>
          <h1 className="g-h1">
            Amazon and Walmart store management. <span className="t-blue">Every order visible.</span>
          </h1>
          <p className="g-lead">
            We run your marketplace store from product research to delivery. You pay from profit and check every order in the same portal our team works in.
          </p>
          <div className="h6-actions">
            <Link href="/profit-check" className="btn-accent">
              Start the 2-minute Profit Check
              <FaArrowRight size={13} className="btn-arrow" aria-hidden="true" />
            </Link>
            <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <FaWhatsapp size={18} aria-hidden="true" />
              WhatsApp us
            </a>
          </div>
          <p className="h6-hero-note">
            <FaCheckCircle size={15} aria-hidden="true" />
            No management fee until your store makes profit. No contract.
          </p>
        </div>
        <div className="h6-hero-shot">
          <ScreenShowcase variant="overview" eager />
        </div>
      </div>
    </section>
  );
}
