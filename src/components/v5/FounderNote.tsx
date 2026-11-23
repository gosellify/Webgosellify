export default function FounderNote() {
  return (
    <section className="g-section bg-tint">
      <div className="container-read">
        <img
          src="/images/about/muhammad-jamshed-dp.webp"
          width={88}
          height={88}
          loading="lazy"
          alt="Muhammad Jamshed, founder of Gosellify LLC"
          style={{ width: 88, height: 88, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "1px solid var(--color-line)", display: "block" }}
        />
        <h2 className="g-h2" style={{ marginTop: 20 }}>
          A note from the founder
        </h2>
        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16, color: "var(--color-dark)" }}>
          <p>
            I started in 2018 as a freelancer on Fiverr, doing SEO for other people&apos;s online stores. In 2020 I learned Amazon dropshipping by working on real orders. In 2022 I began managing stores on my own, and when the work grew I hired a team. Gosellify LLC was registered in the United States in January 2024.
          </p>
          <p>
            In this business the usual report is a PDF at the end of the month, and the owner has to trust it. I would not accept that for my own store, so I did not want to ask it of anyone else. That is why we built the Gosellify Portal. It connects to the store through the marketplace&apos;s official API and shows each order, what it cost and what it earned. You log in and check our work whenever you want.
          </p>
          <p>
            We run our own Walmart store on the same portal. The two screenshots on this page come from that store, with the real numbers, including the orders we sold at a loss.
          </p>
          <p>
            There are things I will not do. I will not promise you a profit number, because nobody can know it before the store is running. I will not ask for a management fee before your store earns. I will not hide your numbers from you.
          </p>
          <p>
            If you want to ask me something before you decide, message me on{" "}
            <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="v5-link">WhatsApp at +1 307 393 8789</a>{" "}
            or write to{" "}
            <a href="mailto:info@gosellify.com" className="v5-link">info@gosellify.com</a>.
          </p>
        </div>
        <p style={{ marginTop: 24, fontWeight: 700, lineHeight: 1.4 }}>
          Muhammad Jamshed
          <span style={{ display: "block", fontWeight: 400, fontSize: 15, color: "var(--color-text-light)" }}>Founder, Gosellify LLC</span>
        </p>
      </div>
    </section>
  );
}
