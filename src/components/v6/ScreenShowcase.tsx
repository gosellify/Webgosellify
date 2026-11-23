import React from "react";

type Props = {
  /** Which real portal screen to show. */
  variant?: "overview" | "profit";
  /** Load the main image right away (use for the first screen on a page). */
  eager?: boolean;
  /** Short, honest caption under the screens. */
  caption?: string;
};

interface Zoom {
  src: string;
  w: number;
  h: number;
  label: string;
  tone: "blue" | "amber";
  side: "left" | "right";
}

const zooms: Record<"overview" | "profit", Zoom[]> = {
  overview: [
    { src: "/images/portal/zoom-sales.jpg", w: 284, h: 122, label: "Real sales, last 30 days", tone: "blue", side: "left" },
    { src: "/images/portal/zoom-attention.jpg", w: 384, h: 368, label: "What needs attention today", tone: "amber", side: "right" },
  ],
  profit: [
    { src: "/images/portal/zoom-profit.jpg", w: 330, h: 96, label: "Profit for the month so far", tone: "blue", side: "left" },
    { src: "/images/portal/zoom-orders.jpg", w: 284, h: 122, label: "Orders, last 30 days", tone: "amber", side: "right" },
  ],
};

const main = {
  overview: { src: "/images/portal/store-overview.jpg", w: 1228, h: 690, alt: "Gosellify Portal store overview: sales, orders, units sold and a daily sales chart for the last 30 days" },
  profit: { src: "/images/portal/store-profit.jpg", w: 1228, h: 372, alt: "Gosellify Portal profit and loss page showing sales, marketplace fees, product costs and profit for the month" },
};

/** A real portal screenshot shown at an angle, with two zoomed-in pieces of the same screenshot beside it. */
export default function ScreenShowcase({ variant = "overview", eager = false, caption }: Props) {
  const m = main[variant];
  const z = zooms[variant];
  return (
    <figure className="ssc">
      <style>{`
.ssc { margin: 0; }
.ssc-stage { position: relative; max-width: 1120px; margin: 0 auto; padding: 40px 0 56px; perspective: 2200px; }
.ssc-pad { position: absolute; left: 4%; right: 4%; top: 30%; bottom: 0; background: var(--color-primary-light); border-radius: 36px; }
.ssc-screen { position: relative; width: 82%; margin: 0 auto; background: #fff; border-radius: 14px; box-shadow: 0 36px 72px rgba(10,27,77,0.22); transform: rotateX(9deg) rotateY(-11deg) rotateZ(2deg); transition: transform .6s cubic-bezier(.2,.8,.2,1); }
.ssc-stage:hover .ssc-screen { transform: rotateX(3deg) rotateY(-4deg) rotateZ(0.5deg); }
.ssc-bar { display: flex; align-items: center; gap: 7px; padding: 11px 14px; background: #eef1f7; border-radius: 14px 14px 0 0; }
.ssc-bar i { width: 11px; height: 11px; border-radius: 50%; display: block; }
.ssc-url { margin-left: 12px; background: #fff; border-radius: 7px; padding: 4px 14px; font-size: 12px; font-weight: 600; color: var(--color-text-light); }
.ssc-screen img { display: block; width: 100%; height: auto; border-radius: 0 0 14px 14px; }
.ssc-zoom { position: absolute; background: #fff; border-radius: 16px; padding: 8px; box-shadow: 0 22px 46px rgba(10,27,77,0.2); z-index: 2; }
.ssc-zoom img { display: block; width: 100%; height: auto; border-radius: 10px; }
.ssc-zoom span { display: block; font-size: 13px; font-weight: 700; padding: 7px 6px 2px; }
.ssc-zoom.blue { border: 2px solid var(--color-primary); } .ssc-zoom.blue span { color: var(--color-primary); }
.ssc-zoom.amber { border: 2px solid var(--color-accent); } .ssc-zoom.amber span { color: var(--color-dark); }
.ssc-zoom.left { left: 0; bottom: 12%; width: 31%; }
.ssc-zoom.right { right: 0; top: 6%; width: 28%; }
.ssc-cap { text-align: center; font-size: 14px; color: var(--color-text-light); margin-top: 6px; }
@media (max-width: 760px) {
  .ssc-stage { padding: 16px 0 0; perspective: none; }
  .ssc-pad { display: none; }
  .ssc-screen, .ssc-stage:hover .ssc-screen { width: 100%; transform: none; box-shadow: 0 12px 28px rgba(10,27,77,0.16); }
  .ssc-zoom { position: static; width: auto !important; margin-top: 14px; animation: none !important; }
}
      `}</style>
      <div className="ssc-stage">
        <div className="ssc-pad" aria-hidden="true" />
        <div className="ssc-screen">
          <div className="ssc-bar" aria-hidden="true">
            <i style={{ background: "#FFB21A" }} />
            <i style={{ background: "#1560FF" }} />
            <i style={{ background: "#C6CFE2" }} />
            <span className="ssc-url">portal.gosellify.com</span>
          </div>
          <img src={m.src} width={m.w} height={m.h} alt={m.alt} loading={eager ? "eager" : "lazy"} />
        </div>
        {z.map((item, i) => (
          <div key={item.src} className={`ssc-zoom ${item.tone} ${item.side} ${i === 0 ? "float-a" : "float-b"}`}>
            <img src={item.src} width={item.w} height={item.h} alt="" loading={eager ? "eager" : "lazy"} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <figcaption className="ssc-cap">
        {caption ?? "The Gosellify Portal, from our own Walmart store. Screenshot taken November 23, 2026."}
      </figcaption>
    </figure>
  );
}
