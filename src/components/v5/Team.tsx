import Link from "next/link";

type Member = { name: string; role: string; photo: string };

const members: Member[] = [
  { name: "Muhammad Jamshed", role: "Founder", photo: "/images/about/muhammad-jamshed-dp.webp" },
  { name: "Ahmad Ali", role: "Co-founder, operations", photo: "/images/about/ahmad-ali.webp" },
  { name: "Muhammad Umar", role: "Manager, Amazon", photo: "/images/about/muhammad-umar.webp" },
  { name: "Mohammad Amir", role: "Manager, wholesale", photo: "/images/about/mohammad-amir.webp" },
  { name: "Jakaria Islam", role: "Manager, Walmart", photo: "/images/about/jakaria-islam.webp" },
  { name: "Mahbub H.", role: "Manager, warehouse and shipping", photo: "/images/about/mahbub-h.webp" },
];

const css = `
.v5team { display: grid; grid-template-columns: 1fr; gap: 36px; align-items: start; }
@media (min-width: 1000px) { .v5team { grid-template-columns: minmax(0, 4fr) minmax(0, 7fr); gap: 64px; } }
.v5team-people { list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px 20px; }
@media (min-width: 600px) { .v5team-people { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.v5team-people img { display: block; width: 100%; height: auto; aspect-ratio: 1 / 1; object-fit: cover; border: 1px solid var(--color-line); border-radius: 8px; }
.v5team-people b { display: block; margin-top: 10px; font-size: 16px; line-height: 1.3; color: var(--color-dark); }
.v5team-people span { display: block; font-size: 14px; line-height: 1.4; color: var(--color-text-light); }
`;

export default function Team() {
  return (
    <section className="g-section v5-top-rule" style={{ background: "#fff" }}>
      <style>{css}</style>
      <div className="container-main v5team">
        <div>
          <h2 className="g-h2">The team</h2>
          <p className="v5-p" style={{ marginTop: 14 }}>
            Gosellify LLC is registered in Sheridan, Wyoming. The people who work on your store every day are in our office in Multan, Pakistan, and each marketplace has its own manager. You will know the name of the person responsible for your store.
          </p>
          <p style={{ marginTop: 16 }}>
            <Link href="/about" className="v5-link">More about us</Link>
          </p>
        </div>
        <figure style={{ margin: 0 }}>
          <ul className="v5team-people">
            {members.map((m) => (
              <li key={m.name}>
                <img src={m.photo} width={400} height={400} loading="lazy" alt={`${m.name}, ${m.role}, Gosellify`} />
                <b>{m.name}</b>
                <span>{m.role}</span>
              </li>
            ))}
          </ul>
          <figcaption className="typo-small" style={{ marginTop: 16 }}>The founders and department managers of Gosellify.</figcaption>
        </figure>
      </div>
    </section>
  );
}
