"use client";

import { useEffect, useState } from "react";

const faqs = [
  { q: "Do you take walk-ins?", a: "Yes! Walk-ins are always welcome. However, to guarantee your preferred time slot we recommend booking an appointment, especially on weekends." },
  { q: "How long does a skin fade take?", a: "A skin fade typically takes 45–60 minutes depending on the complexity and your hair type. A classic cut is usually 30 minutes." },
  { q: "What's included in the Cut + Beard Combo?", a: "The combo includes a full haircut of your choice plus a beard trim with hot towel and precise shaping — everything you need to leave looking sharp." },
  { q: "Do you cut kids' hair?", a: "Absolutely. We offer kids' cuts for children aged 12 and under at $20. We make the experience fun and relaxed for little ones." },
  { q: "How do I book an appointment?", a: "You can call us directly on (02) 8625 0010 or walk in during our opening hours. Online booking via Calendly is coming soon." },
  { q: "What payment methods do you accept?", a: "We accept cash and all major cards including Visa, Mastercard, and EFTPOS. BNPL services like Afterpay are not currently available." },
  { q: "Where are you located?", a: "We're at Shop 3/60 Glenwood Park Dr, Glenwood NSW 2768 — inside the Glenwood Park shopping area. Free parking is available on site." },
  { q: "Do you do hair colouring?", a: "Yes — we offer tints, highlights, and fashion colours. A consultation is included. Pricing starts from $60 and varies based on length and complexity." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }); },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" style={{ padding: "7rem 1.5rem", background: "var(--cream)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="eyebrow" style={{ marginBottom: "0.8rem" }}>Got Questions?</p>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--ink)" }}>
            Frequently Asked <span style={{ color: "var(--rust)" }}>Questions</span>
          </h2>
          <div className="accent-line" />
        </div>

        <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid var(--line)", overflow: "hidden" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "1.4rem 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "1rem",
                  textAlign: "left",
                }}
              >
                <span style={{ color: open === i ? "var(--rust)" : "var(--ink)", fontWeight: 600, fontSize: "1rem", transition: "color 0.3s", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "var(--rust)",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                    transition: "transform 0.3s",
                    transform: open === i ? "rotate(45deg)" : "none",
                    display: "block",
                    width: "20px",
                    textAlign: "center",
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: open === i ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p style={{ color: "var(--body)", fontSize: "0.92rem", lineHeight: 1.8, paddingBottom: "1.4rem" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginBottom: "1rem" }}>Still have a question?</p>
          <a href="tel:0286250010" className="btn-outline">Call Us</a>
        </div>
      </div>
    </section>
  );
}
