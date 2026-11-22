import React from "react";

type MarkProps = { size?: number; variant?: "light" | "dark"; className?: string };

/** Gosellify mark: a letter G in navy and blue with an amber arrow leaving it (the "Go"). */
export function LogoMark({ size = 44, variant = "light", className }: MarkProps) {
  const a = variant === "light" ? "#1560FF" : "#FFFFFF";
  const b = variant === "light" ? "#0A1B4D" : "#1560FF";
  const id = variant === "light" ? "gclip-l" : "gclip-d";
  return (
    <svg
      className={className}
      width={size}
      height={(size * 56) / 64}
      viewBox="2 4 64 56"
      role="img"
      aria-label="Gosellify"
    >
      <defs>
        <clipPath id={id}>
          <rect x="6" y="8" width="48" height="48" rx="12" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <polygon points="6,8 54,8 54,18 16,18" fill={a} />
        <polygon points="6,8 16,18 16,46 6,56" fill={b} />
        <polygon points="6,56 16,46 44,46 54,56" fill={a} />
        <polygon points="54,56 44,46 44,41 54,41" fill={b} />
      </g>
      <polygon className="logo-arrow" points="27,27 55,27 62,32 55,37 27,37" fill="#FFB21A" />
    </svg>
  );
}

type LogoProps = { size?: number; variant?: "light" | "dark"; fontSize?: number };

export default function Logo({ size = 42, variant = "light", fontSize = 28 }: LogoProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }} className="logo-lockup">
      <LogoMark size={size} variant={variant} />
      <span style={{ fontWeight: 800, fontSize, letterSpacing: "-0.045em", lineHeight: 1, color: variant === "light" ? "#0A1B4D" : "#FFFFFF" }}>
        <span style={{ color: variant === "light" ? "#1560FF" : "#FFB21A" }}>Go</span>sellify
      </span>
    </span>
  );
}

/** Inline brand name for use inside sentences and headlines. */
export function BrandName({ dark = false }: { dark?: boolean }) {
  return (
    <span className={dark ? "brand-pill dark" : "brand-pill"}>
      <b>Go</b>sellify
    </span>
  );
}
