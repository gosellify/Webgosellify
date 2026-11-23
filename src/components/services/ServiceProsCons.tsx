interface ServiceProsConsProps {
  heading: string;
  pros: string[];
  cons: string[];
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ minWidth: 0 }}>
      <h3 className="g-h3" style={{ paddingBottom: 10, borderBottom: "1px solid var(--color-dark)" }}>{title}</h3>
      <ul style={{ listStyle: "none" }}>
        {items.map((item) => (
          <li key={item} style={{ padding: "10px 0", borderBottom: "1px solid var(--color-line)", color: "var(--color-text-light)" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Two plain columns of text. No coloured marks. */
export default function ServiceProsCons({ heading, pros, cons }: ServiceProsConsProps) {
  return (
    <section className="g-section" style={{ background: "#fff" }}>
      <div className="container-main">
        <h2 className="g-h2" style={{ marginBottom: 24, maxWidth: 760 }}>{heading}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "28px 48px", maxWidth: 980 }}>
          <Column title="In favour" items={pros} />
          <Column title="Against" items={cons} />
        </div>
      </div>
    </section>
  );
}
