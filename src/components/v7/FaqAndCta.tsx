import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { EMAIL, FAQS, PHONE, PHONE_HREF, START_HREF, WHATSAPP } from "./data";

export function HomeFaq() {
  return (
    <section id="faq" className="py-20">
      <div className="container-main grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="g-eyebrow">FAQ</span>
          <h2 className="mt-3 text-3xl font-extrabold text-dark sm:text-4xl">Questions sellers ask us</h2>
          <p className="mt-3 text-lg text-text-light">Straight answers before you talk to us.</p>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-line bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-bold text-dark">
                {f.q}
                <span className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-text-light">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="pb-20">
      <div className="container-main">
        <div className="flex flex-col gap-6 rounded-3xl bg-primary px-6 py-12 text-white sm:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[620px]">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Let&apos;s look at your store together</h2>
            <p className="mt-3 text-lg text-white/85">
              Answer a few questions and get a free plan for your Walmart or Amazon store within one business day.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href={START_HREF} className="btn-accent justify-center" style={{ padding: "17px 28px", fontSize: 17 }}>
              Get my free store plan <FaArrowRight size={14} />
            </Link>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-white/90">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><FaWhatsapp /> WhatsApp</a>
              <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white"><FaPhoneAlt size={12} /> {PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white"><FaEnvelope size={12} /> {EMAIL}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
