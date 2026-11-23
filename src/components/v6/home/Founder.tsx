import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

export default function Founder() {
  return (
    <section className="g-section bg-tint">
      <div className="container-main">
        <Reveal className="h6-head">
          <p className="g-eyebrow">Who runs this</p>
          <h2 className="g-h2">A note from the founder</h2>
        </Reveal>
        <Reveal className="h6-founder">
          <div className="h6-founder-top">
            <img src="/images/about/muhammad-jamshed-dp.webp" width={76} height={76} loading="lazy" alt="Muhammad Jamshed, founder of Gosellify LLC" />
            <div>
              <b>Muhammad Jamshed</b>
              <span>Founder, Gosellify LLC</span>
            </div>
          </div>
          <div className="h6-letter">
            <p>
              I started in 2018 as a freelancer on Fiverr, doing SEO for other people&apos;s online stores. In 2020 I learned Amazon dropshipping by working on real orders. In 2022 I began managing stores on my own, and when the work grew I hired a team. Gosellify LLC was registered in the United States in January 2024.
            </p>
            <p>
              In this business the usual report is a PDF at the end of the month, and the owner has to trust it. I would not accept that for my own store, so I did not want to ask it of anyone else. That is why we built the Gosellify Portal. It connects to the store through the marketplace&apos;s official API and shows each order, what it cost and what it earned.
            </p>
            <p>
              We run our own Walmart store on the same portal. The two screenshots on this page come from that store, with the real numbers, including the orders we sold at a loss.
            </p>
            <p>
              There are things I will not do. I will not promise you a profit number, because nobody can know it before the store is running. I will not ask for a management fee before your store earns. I will not hide your numbers from you.
            </p>
          </div>
          <div className="h6-sign">
            <p>
              <b>Muhammad Jamshed</b>
              <small>Ask me anything before you decide.</small>
            </p>
            <p className="h6-sign-links">
              <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="h6-link">
                <FaWhatsapp size={16} aria-hidden="true" />
                +1 307 393 8789
              </a>
              <a href="mailto:info@gosellify.com" className="h6-link">
                <FaEnvelope size={14} aria-hidden="true" />
                info@gosellify.com
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
