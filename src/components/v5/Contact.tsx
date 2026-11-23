import Link from "next/link";

const css = `
.v5contact { display: grid; grid-template-columns: 1fr; gap: 40px; }
@media (min-width: 960px) { .v5contact { grid-template-columns: minmax(0, 6fr) minmax(0, 5fr); gap: 72px; } }
.v5contact dl > div { display: grid; grid-template-columns: 96px minmax(0, 1fr); gap: 16px; padding: 13px 0; border-top: 1px solid rgba(255,255,255,0.18); font-size: 16px; line-height: 1.5; }
.v5contact dl > div:last-child { border-bottom: 1px solid rgba(255,255,255,0.18); }
.v5contact dt { color: #c9d6f7; }
.v5contact dd { color: #fff; }
.v5contact dd a { color: #fff; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
.v5contact-wa { color: #fff; font-weight: 600; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
`;

export default function Contact() {
  return (
    <section className="g-section bg-navy on-dark">
      <style>{css}</style>
      <div className="container-main v5contact">
        <div>
          <h2 className="g-h2">Tell us about your store</h2>
          <p className="g-lead" style={{ marginTop: 14, maxWidth: 520 }}>
            Answer a few questions about your store, or the one you want to open. A manager reads your answers and replies with a plan and what it would cost to start. If we are not a good fit, we will say so.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 22px", marginTop: 26 }}>
            <Link href="/profit-check" className="btn-primary">
              Get a plan for my store
            </Link>
            <a href="https://wa.me/13073938789" target="_blank" rel="noopener noreferrer" className="v5contact-wa">
              or message us on WhatsApp
            </a>
          </div>
        </div>
        <dl>
          <div>
            <dt>Company</dt>
            <dd>Gosellify LLC</dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>30 N Gould St Ste R, Sheridan, WY 82801</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+13073938789">+1 307 393 8789</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href="mailto:info@gosellify.com">info@gosellify.com</a>
            </dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>Online 11 PM to 3 PM US Central</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
