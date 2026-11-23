import type { ReactNode } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ServiceSection } from "@/components/services/ServiceBlocks";

interface ServiceProsConsProps {
  heading: string;
  pros: string[];
  cons: string[];
}

function Column({ title, items, tile, icon }: { title: string; items: string[]; tile: string; icon: ReactNode }) {
  return (
    <div className="g-card" style={{ minWidth: 0, padding: 26 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
        <span className={tile} aria-hidden="true">{icon}</span>
        <h3 className="g-h3">{title}</h3>
      </div>
      <ul style={{ listStyle: "none" }}>
        {items.map((item, index) => (
          <li
            key={item}
            style={{ padding: "11px 0", borderTop: index === 0 ? "0" : "1px solid var(--color-line)", color: "var(--color-text-light)", fontSize: 16, lineHeight: 1.55 }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Two cards side by side: points in favour and points against. */
export default function ServiceProsCons({ heading, pros, cons }: ServiceProsConsProps) {
  return (
    <ServiceSection title={heading}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
        <Column title="In favour" items={pros} tile="icon-tile" icon={<FaPlus />} />
        <Column title="Against" items={cons} tile="icon-tile navy" icon={<FaMinus />} />
      </div>
    </ServiceSection>
  );
}
