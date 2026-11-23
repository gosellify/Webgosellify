import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

type Member = { name: string; role: string; photo: string };

const members: Member[] = [
  { name: "Muhammad Jamshed", role: "Founder", photo: "/images/about/muhammad-jamshed-dp.webp" },
  { name: "Ahmad Ali", role: "Co-founder, operations", photo: "/images/about/ahmad-ali.webp" },
  { name: "Muhammad Umar", role: "Manager, Amazon", photo: "/images/about/muhammad-umar.webp" },
  { name: "Mohammad Amir", role: "Manager, wholesale", photo: "/images/about/mohammad-amir.webp" },
  { name: "Jakaria Islam", role: "Manager, Walmart", photo: "/images/about/jakaria-islam.webp" },
  { name: "Mahbub H.", role: "Manager, warehouse and shipping", photo: "/images/about/mahbub-h.webp" },
];

export default function Team() {
  return (
    <section className="g-section bg-tint">
      <div className="container-main">
        <Reveal className="h6-head">
          <p className="g-eyebrow">Real people</p>
          <h2 className="g-h2">The team</h2>
          <p className="g-lead">
            Gosellify LLC is registered in Sheridan, Wyoming. The people who work on your store every day are in our office in Multan, Pakistan, and each marketplace has its own manager. You will know the name of the person responsible for your store.
          </p>
        </Reveal>
        <ul className="h6-team">
          {members.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={(i % 6) * 60}>
                <div className="g-card h6-member">
                  <img src={m.photo} width={104} height={104} loading="lazy" alt={`${m.name}, ${m.role}, Gosellify`} />
                  <b>{m.name}</b>
                  <span>{m.role}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="h6-foot">
          <Link href="/about" className="h6-link">
            More about us
            <FaArrowRight size={12} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
