import ScreenShowcase from "@/components/v6/ScreenShowcase";
import Reveal from "@/components/motion/Reveal";

/* The real Gosellify Portal screenshot. No counters, no invented figures. */
export default function ServiceConfidence() {
  return (
    <section className="g-section bg-tint" style={{ overflow: "hidden" }}>
      <div className="container-main">
        <Reveal className="center" style={{ marginBottom: 12 }}>
          <span className="g-eyebrow" style={{ background: "#fff" }}>What you will see</span>
          <h2 className="g-h2" style={{ margin: "14px auto 0", maxWidth: 760 }}>Every managed store gets this dashboard</h2>
          <p className="g-lead" style={{ marginTop: 12, maxWidth: 700 }}>
            Every store we manage runs on the Gosellify Portal, connected through the marketplace&apos;s official API.
            You log in and see the same sales, orders and profit figures our team works from.
          </p>
        </Reveal>
        <ScreenShowcase
          variant="overview"
          caption="The Gosellify Portal, from our own Walmart store, last 30 days. Screenshot taken November 23, 2026."
        />
      </div>
    </section>
  );
}
