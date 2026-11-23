const css = `
.v5-link { color: var(--color-primary); font-weight: 600; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
.v5-link:hover { color: var(--color-primary-dark); }
.v5-frame { margin: 0; }
.v5-frame img { display: block; width: 100%; height: auto; border: 1px solid var(--color-line); border-radius: 8px; background: #fff; }
.v5-frame figcaption { margin-top: 10px; font-size: 14px; line-height: 1.5; color: var(--color-text-light); }
.v5-p { color: var(--color-text-light); }
.v5-head { max-width: 720px; margin-bottom: 32px; }
.v5-head .g-h2 { margin-top: 8px; }
.v5-head .g-lead { margin-top: 12px; }
.v5-top-rule { border-top: 1px solid var(--color-line); }
`;

export default function HomeStyles() {
  return <style>{css}</style>;
}
