"use client";

import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="booking"
      style={{ padding: "7rem 1.5rem", background: "var(--charcoal)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(193,87,46,0.16) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div className="fade-up" style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p className="eyebrow" style={{ color: "#e8b88f", marginBottom: "0.8rem" }}>Reserve Your Seat</p>
        <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--cream)" }}>
          Book an <span style={{ color: "var(--rust)" }}>Appointment</span>
        </h2>
        <div className="accent-line" />
        <p style={{ color: "var(--cream-dim)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "460px", margin: "0 auto 2.5rem" }}>
          Skip the wait. Give us a call and we&apos;ll have everything ready
          when you arrive.
        </p>

        <div
          style={{
            background: "var(--charcoal-2)",
            border: "1px solid var(--line-dark)",
            borderTop: "3px solid var(--rust)",
            borderRadius: "12px",
            padding: "3rem 2rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid var(--line-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              background: "rgba(193,87,46,0.12)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--rust)" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <p style={{ color: "var(--cream-dim)", fontSize: "0.92rem", marginBottom: "1.5rem", lineHeight: 1.7 }}>
            Online booking coming soon — for now, call or walk in.
          </p>
          <a href="tel:0286250010" className="btn">Call to Book</a>
        </div>

        <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
          Walk-ins welcome during opening hours.
        </p>
      </div>
    </section>
  );
}
