"use client";

import { useState } from "react";

const faqs = [
  { q: "Do you take walk-ins?", a: "Yes! Walk-ins are always welcome. To guarantee your preferred time slot we recommend booking ahead, especially on weekends." },
  { q: "How long does a skin fade take?", a: "A skin fade typically takes 45 minutes depending on complexity and hair type. A classic cut is usually around 30 minutes." },
  { q: "What's included in the Cut + Beard Combo?", a: "A full haircut of your choice plus a beard trim with hot towel and precise shaping — everything you need to leave looking sharp." },
  { q: "Do you cut kids' hair?", a: "Absolutely. We offer kids' cuts for children aged 12 and under at $20, and we keep the experience relaxed and fun." },
  { q: "How do I book an appointment?", a: "Call us on (02) 8625 0010 or walk in during opening hours. Online booking is coming soon." },
  { q: "What payment methods do you accept?", a: "Cash and all major cards including Visa, Mastercard and EFTPOS." },
  { q: "Where are you located?", a: "Shop 3/60 Glenwood Park Dr, Glenwood NSW 2768 — inside the Glenwood Park shopping area, with free on-site parking." },
  { q: "Do you do hair colouring?", a: "Yes — tints, highlights and fashion colours, with a consultation included. Pricing starts from $60 and varies by length and complexity." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section section-alt">
      <div className="container" style={{ maxWidth: "820px" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1rem" }}>Got Questions?</p>
          <h2 className="title">Frequently Asked <span className="accent-text">Questions</span></h2>
          <div className="rule" />
        </div>

        <div className="reveal" style={{ display: "flex", flexDirection: "column", background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: "16px", overflow: "hidden" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid var(--line)" : "none", overflow: "hidden" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none", padding: "1.4rem 1.8rem",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  cursor: "pointer", gap: "1rem", textAlign: "left",
                }}
              >
                <span style={{ color: open === i ? "var(--red)" : "var(--text)", fontWeight: 600, fontSize: "0.98rem", transition: "color 0.3s", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span style={{ color: "var(--red)", fontSize: "1.2rem", flexShrink: 0, transition: "transform 0.3s", transform: open === i ? "rotate(45deg)" : "none", width: "20px", textAlign: "center", lineHeight: 1 }}>
                  +
                </span>
              </button>
              <div style={{ maxHeight: open === i ? "240px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.8, padding: "0 1.8rem 1.4rem" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginBottom: "1.1rem" }}>Still have a question?</p>
          <a href="tel:0286250010" className="btn-ghost">Call Us</a>
        </div>
      </div>
    </section>
  );
}
