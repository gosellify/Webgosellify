const css = `
.h6-link { color: var(--color-primary); font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 7px; }
.h6-link:hover { color: var(--color-primary-dark); text-decoration: underline; text-underline-offset: 3px; }
.h6-head { max-width: 720px; margin: 0 auto 44px; text-align: center; }
.h6-head .g-h2 { margin-top: 14px; text-wrap: balance; }
.h6-head .g-lead { margin-top: 12px; }
.h6-foot { margin-top: 36px; text-align: center; }

/* 1. hero */
.h6-hero { background: #fff; padding: clamp(40px, 5vw, 68px) 0 clamp(48px, 6vw, 80px); }
.h6-hero-copy { max-width: 980px; margin: 0 auto; text-align: center; }
.h6-hero-copy .g-h1 { margin-top: 18px; text-wrap: balance; }
@media (min-width: 1000px) { .h6-hero-copy .g-h1 .t-blue { display: block; } }
.h6-hero-copy .g-lead { max-width: 640px; margin: 18px auto 0; }
.h6-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 14px; margin-top: 28px; }
.h6-hero-note { margin-top: 16px; font-size: 14.5px; line-height: 1.5; color: var(--color-text-light); display: inline-flex; align-items: center; gap: 8px; }
.h6-hero-note svg { color: var(--color-primary); flex-shrink: 0; }
.h6-hero-shot { margin-top: clamp(8px, 2vw, 20px); }
@media (max-width: 520px) { .h6-actions > a { width: 100%; } .h6-hero-note { align-items: flex-start; text-align: left; } .h6-hero-note svg { margin-top: 4px; } }

/* 2. services */
.h6-svc { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; }
@media (max-width: 1080px) { .h6-svc { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px) { .h6-svc { grid-template-columns: 1fr; } }
.h6-svc > div { height: 100%; }
.h6-svc-card { position: relative; height: 100%; padding: 24px; display: flex; flex-direction: column; }
.h6-svc-card h3 { margin-top: 18px; font-size: 18px; line-height: 1.3; font-weight: 700; color: var(--color-dark); }
.h6-svc-card p { margin-top: 6px; font-size: 15.5px; line-height: 1.55; color: var(--color-text-light); flex: 1; }
.h6-svc-links { margin-top: 16px; display: flex; flex-wrap: wrap; gap: 6px 18px; font-size: 15px; }
.h6-svc-links a { position: relative; z-index: 1; }
.h6-svc-links a.h6-stretch { position: static; }
.h6-svc-links a.h6-stretch::after { content: ""; position: absolute; inset: 0; border-radius: 16px; }

/* 3. portal */
.h6-portal { display: grid; grid-template-columns: 1fr; gap: 24px; align-items: center; }
@media (min-width: 1040px) { .h6-portal { grid-template-columns: minmax(0, 5fr) minmax(0, 8fr); gap: 40px; } .h6-portal .ssc-stage { padding: 28px 0 44px; } .h6-portal .ssc-screen { width: 88%; } }
.h6-portal .g-h2 { margin-top: 14px; text-wrap: balance; }
.h6-portal .g-lead { margin-top: 12px; }
.h6-checks { list-style: none; margin-top: 26px; display: grid; gap: 16px; }
.h6-checks li { display: grid; grid-template-columns: 26px minmax(0, 1fr); gap: 14px; }
.h6-check { width: 26px; height: 26px; border-radius: 50%; background: var(--color-primary); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; margin-top: 2px; }
.h6-checks b { display: block; font-size: 16.5px; line-height: 1.4; color: var(--color-dark); }
.h6-checks span { display: block; font-size: 15.5px; line-height: 1.55; color: var(--color-text-light); margin-top: 2px; }

/* 4. daily work */
.h6-day { display: grid; grid-template-columns: 1fr; gap: 20px; align-items: start; }
@media (min-width: 1080px) { .h6-day { grid-template-columns: minmax(0, 1fr) 340px; gap: 24px; } }
.h6-tasks { list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
@media (max-width: 700px) { .h6-tasks { grid-template-columns: 1fr; } }
.h6-task { height: 100%; padding: 18px 20px; display: grid; grid-template-columns: 44px minmax(0, 1fr); gap: 16px; align-items: start; }
.h6-task div b { display: block; font-size: 16.5px; line-height: 1.35; color: var(--color-dark); }
.h6-task div span { display: block; margin-top: 3px; font-size: 15px; line-height: 1.55; color: var(--color-text-light); }
.h6-not { background: #fff; border: 2px solid var(--color-dark); border-radius: 16px; padding: 26px 24px; }
@media (min-width: 1080px) { .h6-not { position: sticky; top: 96px; } }
.h6-not ul { list-style: none; margin-top: 16px; display: grid; gap: 14px; }
.h6-not li { display: grid; grid-template-columns: 24px minmax(0, 1fr); gap: 12px; font-size: 15.5px; line-height: 1.55; color: var(--color-dark); }
.h6-x { width: 24px; height: 24px; border-radius: 50%; background: var(--color-dark); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 10px; margin-top: 1px; }

/* 5. how we are paid */
.h6-pay { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
@media (max-width: 900px) { .h6-pay { grid-template-columns: 1fr; } }
.h6-pay > div { height: 100%; }
.h6-pay-card { height: 100%; padding: 28px 26px; }
.h6-pay-card h3 { margin-top: 18px; }
.h6-pay-card p { margin-top: 8px; font-size: 16px; line-height: 1.6; color: var(--color-text-light); }
.h6-num { font-weight: 800; font-size: 18px; }

/* 6. founder */
.h6-founder { max-width: 820px; margin: 0 auto; background: #fff; border: 1px solid var(--color-line); border-radius: 16px; padding: clamp(26px, 4.5vw, 52px); }
.h6-founder-top { display: flex; align-items: center; gap: 18px; padding-bottom: 24px; border-bottom: 1px solid var(--color-line); }
.h6-founder-top img { width: 76px; height: 76px; border-radius: 50%; object-fit: cover; object-position: center top; display: block; flex-shrink: 0; border: 3px solid var(--color-primary-light); }
.h6-founder-top b { display: block; font-size: 18px; line-height: 1.3; color: var(--color-dark); }
.h6-founder-top span { display: block; font-size: 15px; color: var(--color-text-light); }
.h6-letter { margin-top: 24px; display: grid; gap: 16px; color: var(--color-dark); }
.h6-sign { margin-top: 26px; padding-top: 22px; border-top: 1px solid var(--color-line); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px 24px; }
.h6-sign b { display: block; line-height: 1.4; }
.h6-sign small { display: block; font-size: 15px; color: var(--color-text-light); }
.h6-sign-links { display: flex; flex-wrap: wrap; gap: 8px 22px; font-size: 15.5px; }

/* 7. how we start */
.h6-steps { list-style: none; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0 24px; }
.h6-step { position: relative; text-align: center; }
.h6-step::before { content: ""; position: absolute; top: 23px; left: calc(-50% - 12px); width: calc(100% + 24px); height: 2px; background: var(--color-line); }
.h6-step:first-child::before { content: none; }
.h6-dot { position: relative; z-index: 1; width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary); color: #fff; font-weight: 800; font-size: 18px; display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 0 0 8px #fff; }
.h6-step.last .h6-dot { background: var(--color-accent); color: var(--color-dark); }
.h6-step h3 { margin-top: 20px; font-size: 18px; line-height: 1.3; font-weight: 700; color: var(--color-dark); }
.h6-step p { margin-top: 8px; font-size: 15px; line-height: 1.6; color: var(--color-text-light); }
@media (max-width: 1000px) {
  .h6-steps { grid-template-columns: 1fr; gap: 0; max-width: 620px; margin: 0 auto; }
  .h6-step { text-align: left; display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 0 18px; padding-bottom: 28px; }
  .h6-step:last-child { padding-bottom: 0; }
  .h6-step::before { top: -100%; left: 23px; width: 2px; height: 100%; }
  .h6-dot { margin: 0; box-shadow: 0 0 0 6px #fff; }
  .h6-step h3 { margin-top: 10px; }
}
.h6-capital { max-width: 820px; margin: 44px auto 0; background: var(--color-primary-light); border-radius: 16px; padding: 20px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px 24px; }
.h6-capital-text { display: flex; align-items: center; gap: 16px; flex: 1 1 380px; min-width: 0; }
.h6-capital-text p { font-size: 16px; line-height: 1.55; color: var(--color-dark); }

/* 8. team */
.h6-team { list-style: none; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 20px; }
@media (max-width: 1080px) { .h6-team { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 560px) { .h6-team { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; } }
.h6-team li > div { height: 100%; }
.h6-member { height: 100%; padding: 22px 12px 20px; text-align: center; }
.h6-member img { display: block; width: 104px; height: 104px; margin: 0 auto; border-radius: 50%; object-fit: cover; object-position: center top; border: 3px solid var(--color-primary-light); }
.h6-member b { display: block; margin-top: 14px; font-size: 16px; line-height: 1.3; color: var(--color-dark); }
.h6-member span { display: block; margin-top: 4px; font-size: 14px; line-height: 1.4; color: var(--color-text-light); }

/* 9. faq */
.h6-faq { max-width: 860px; margin: 0 auto; display: grid; gap: 12px; }
.h6-faq details { background: #fff; border: 1px solid var(--color-line); border-radius: 14px; transition: border-color .2s; }
.h6-faq details:hover, .h6-faq details[open] { border-color: var(--color-primary); }
.h6-faq summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 22px; font-weight: 700; font-size: 17px; line-height: 1.4; color: var(--color-dark); border-radius: 14px; }
.h6-faq summary::-webkit-details-marker { display: none; }
.h6-faq summary::after { content: "+"; flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--color-primary-light); color: var(--color-primary); font-weight: 600; font-size: 20px; line-height: 26px; text-align: center; }
.h6-faq details[open] summary::after { content: "\\2212"; background: var(--color-primary); color: #fff; }
.h6-faq-a { padding: 0 64px 20px 22px; font-size: 16px; color: var(--color-text-light); }
@media (max-width: 560px) { .h6-faq-a { padding-right: 22px; } }

/* 10. final call */
.h6-cta { text-align: center; }
.h6-cta .g-lead { max-width: 620px; margin: 14px auto 0; }
.h6-cta-wa { color: #fff; }
.h6-cta-facts { list-style: none; margin: 44px auto 0; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.16); display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 36px; font-size: 15px; line-height: 1.5; color: #c9d6f7; max-width: 1000px; }
.h6-cta-facts li { display: inline-flex; align-items: center; gap: 9px; }
.h6-cta-facts svg { color: var(--color-accent); flex-shrink: 0; }
.h6-cta-facts a { color: #fff; text-decoration: none; }
.h6-cta-facts a:hover { text-decoration: underline; text-underline-offset: 3px; }
`;

export default function HomeStyles() {
  return <style>{css}</style>;
}
