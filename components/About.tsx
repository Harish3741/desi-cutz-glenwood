"use client";

import { useEffect } from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5★", label: "Google Rating" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Story</p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              More Than Just{" "}
              <span style={{ color: "var(--rust)" }}>a Haircut</span>
            </h2>
            <p style={{ color: "var(--body)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "1rem" }}>
              At Desi Cutz Glenwood, we blend traditional barbering craft with
              modern technique. Nestled in the heart of Glenwood, our shop is a
              place where every client walks out feeling sharp and confident.
            </p>
            <p style={{ color: "var(--body)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "2.5rem" }}>
              Whether you&apos;re in for a classic cut, a skin fade, or a full
              grooming session, our skilled barbers deliver precision and style
              every single time.
            </p>
            <a href="#booking" className="btn">Book Your Visit</a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "10px",
                  padding: "1.5rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <span
                  className="display"
                  style={{ fontSize: "2.8rem", fontWeight: 900, color: "var(--rust)", lineHeight: 1, minWidth: "84px" }}
                >
                  {s.value}
                </span>
                <span style={{ color: "var(--ink)", fontWeight: 600, letterSpacing: "0.02em", fontSize: "0.95rem" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
