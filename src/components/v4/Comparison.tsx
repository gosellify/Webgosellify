import type { CSSProperties } from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import Logo from "@/components/brand/Logo";

type Row = { feature: string; diy: string | false; others: string | false };

const rows: Row[] = [
  { feature: "Full listing optimization", diy: "Trial and error", others: "Basic" },
  { feature: "Buy Box strategy", diy: false, others: "Limited" },
  { feature: "Daily order and fulfillment management", diy: "You do it", others: "Extra fee" },
  { feature: "PPC campaign management", diy: "You guess", others: "Basic setup" },
  { feature: "Account health monitoring", diy: false, others: "Weekly check" },
  { feature: "Pricing and repricing", diy: "Manual", others: "Software only" },
  { feature: "Customer service and returns", diy: "You handle", others: "Extra fee" },
  { feature: "Profit share: pay from profit only", diy: "Not applicable", others: false },
  { feature: "24/7 WhatsApp support", diy: false, others: "Email only" },
];

function Other({ value }: { value: string | false }) {
  if (value === false) {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-text-light)" }}>
        <FaTimes aria-hidden="true" style={{ fontSize: 15, opacity: 0.7 }} />
        <span style={{ fontWeight: 700 }}>No</span>
      </span>
    );
  }
  return <span>{value}</span>;
}

export default function Comparison() {
  return (
    <section className="g-section bg-tint">
      <style>{`
        @keyframes v4cmp-pop { 0% { transform: scale(0) rotate(-40deg); opacity: 0; } 70% { transform: scale(1.25) rotate(6deg); opacity: 1; } 100% { transform: scale(1) rotate(0); opacity: 1; } }
        .v4cmp-table { width: 100%; min-width: 760px; border-collapse: separate; border-spacing: 0; }
        .v4cmp-table th, .v4cmp-table td { padding: 20px 24px; text-align: left; font-size: 16px; border-bottom: 1px solid var(--color-line); transition: background-color .25s, color .25s; }
        .v4cmp-table thead th { font-size: 14px; font-weight: 800; letter-spacing: .6px; text-transform: uppercase; color: var(--color-text-light); border-bottom: 2px solid var(--color-line); }
        .v4cmp-table tbody th { font-weight: 800; color: var(--color-dark); }
        .v4cmp-table tbody td { color: var(--color-text-light); font-weight: 600; }
        .v4cmp-table tbody tr:last-child th, .v4cmp-table tbody tr:last-child td { border-bottom: none; }
        .v4cmp-table tbody tr:hover th, .v4cmp-table tbody tr:hover td { background: var(--color-primary-light); }
        .v4cmp-table .v4cmp-us { position: relative; background: var(--color-dark); color: #fff; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); box-shadow: -14px 0 26px -16px rgba(10,27,77,0.45), 14px 0 26px -16px rgba(10,27,77,0.45); }
        .v4cmp-table tbody tr:hover .v4cmp-us { background: var(--color-dark-light); }
        .v4cmp-table thead .v4cmp-us { border-bottom: 2px solid rgba(255,255,255,0.14); }
        .v4cmp-table thead .v4cmp-us::before { content: ""; position: absolute; left: 0; right: 0; top: -16px; height: 17px; background: var(--color-dark); border-radius: 20px 20px 0 0; }
        .v4cmp-table tbody tr:last-child .v4cmp-us::after { content: ""; position: absolute; left: 0; right: 0; bottom: -16px; height: 17px; background: var(--color-dark); border-radius: 0 0 20px 20px; transition: background-color .25s; }
        .v4cmp-table tbody tr:last-child:hover .v4cmp-us::after { background: var(--color-dark-light); }
        .v4cmp-check { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 50%; background: var(--color-accent); color: var(--color-dark); font-size: 15px; animation: v4cmp-pop .55s cubic-bezier(.2,.9,.3,1.3) both; animation-delay: var(--d); transition: transform .25s; }
        .reveal:not(.in) .v4cmp-check { animation: none; opacity: 0; transform: scale(0); }
        .v4cmp-table tbody tr:hover .v4cmp-check { transform: scale(1.18); }
        .v4cmp-box:focus-visible { outline-offset: -3px; }
      `}</style>
      <div className="container-main">
        <Reveal style={{ maxWidth: 1040, marginBottom: "clamp(32px, 4.5vw, 64px)" }}>
          <span className="g-eyebrow">Compare your options</span>
          <h2 className="g-h2" style={{ marginTop: 18 }}>
            Gosellify, doing it yourself, <span className="t-blue">or another agency?</span>
          </h2>
          <p className="g-lead" style={{ marginTop: 20, maxWidth: 720 }}>
            Nine jobs decide how a marketplace store performs. Here is who does each one.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="v4cmp-box"
            role="region"
            aria-label="Comparison table. Scroll sideways to see all columns."
            tabIndex={0}
            style={{
              overflowX: "auto",
              background: "#fff",
              border: "2px solid var(--color-line)",
              borderRadius: 28,
              padding: "16px clamp(8px, 1.6vw, 24px)",
              boxShadow: "0 30px 70px rgba(10,27,77,0.1)",
            }}
          >
            <table className="v4cmp-table">
              <caption style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                What you get with Gosellify, doing it yourself, or another agency
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: "34%" }}>What your store needs</th>
                  <th scope="col" className="v4cmp-us" style={{ width: "22%", textTransform: "none", letterSpacing: 0 }}>
                    <Logo variant="dark" size={30} fontSize={22} />
                  </th>
                  <th scope="col" style={{ width: "22%" }}>Doing it yourself</th>
                  <th scope="col" style={{ width: "22%" }}>Another agency</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature}>
                    <th scope="row">{r.feature}</th>
                    <td className="v4cmp-us">
                      <span className="v4cmp-check" style={{ "--d": `${250 + i * 110}ms` } as CSSProperties}>
                        <FaCheck aria-hidden="true" />
                      </span>
                      <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Included</span>
                    </td>
                    <td><Other value={r.diy} /></td>
                    <td><Other value={r.others} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={160} style={{ marginTop: "clamp(28px, 3.5vw, 48px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
          <Link href="/profit-check" className="btn-accent">
            Check my profit <FaArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-light)" }}>Takes 2 minutes. No contract.</span>
        </Reveal>
      </div>
    </section>
  );
}
