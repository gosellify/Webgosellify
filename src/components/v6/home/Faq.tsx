import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { homeFaqs } from "@/components/v5/faqData";

export default function Faq() {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <div className="container-main">
        <Reveal className="h6-head">
          <p className="g-eyebrow">FAQ</p>
          <h2 className="g-h2">Questions owners ask us first</h2>
          <p className="g-lead">Short answers here. There are more on the FAQ page.</p>
        </Reveal>
        <Reveal className="h6-faq">
          {homeFaqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="h6-faq-a">
                <p>{f.a}</p>
                {f.link && (
                  <p style={{ marginTop: 10 }}>
                    <Link href={f.link.href} className="h6-link">
                      {f.link.label}
                      <FaArrowRight size={11} aria-hidden="true" />
                    </Link>
                  </p>
                )}
              </div>
            </details>
          ))}
        </Reveal>
        <p className="h6-foot">
          <Link href="/faq" className="h6-link">
            Read all questions
            <FaArrowRight size={12} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
