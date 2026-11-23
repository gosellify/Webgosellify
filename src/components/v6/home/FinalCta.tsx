import Link from "next/link";
import { FaArrowRight, FaBuilding, FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

export default function FinalCta() {
  return (
    <section className="g-section bg-navy on-dark">
      <div className="container-main h6-cta">
        <Reveal>
          <h2 className="g-h2">Tell us about your store</h2>
          <p className="g-lead">
            Answer a few questions about your store, or the one you want to open. A manager reads your answers and replies with a plan and what it would cost to start. If we are not a good fit, we will say so.
          </p>
          <div className="h6-actions">
            <Link href="/profit-check" className="btn-accent">
              Start the 2-minute Profit Check
              <FaArrowRight size={13} className="btn-arrow" aria-hidden="true" />
            </Link>
            <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              <FaWhatsapp size={18} aria-hidden="true" />
              Message us on WhatsApp
            </a>
          </div>
          <ul className="h6-cta-facts">
            <li>
              <FaBuilding size={14} aria-hidden="true" />
              Gosellify LLC
            </li>
            <li>
              <FaMapMarkerAlt size={14} aria-hidden="true" />
              30 N Gould St Ste R, Sheridan, WY 82801
            </li>
            <li>
              <FaPhoneAlt size={13} aria-hidden="true" />
              <a href="tel:+13073938789">+1 307 393 8789</a>
            </li>
            <li>
              <FaEnvelope size={14} aria-hidden="true" />
              <a href="mailto:info@gosellify.com">info@gosellify.com</a>
            </li>
            <li>
              <FaClock size={14} aria-hidden="true" />
              Online 11 PM to 3 PM US Central
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
