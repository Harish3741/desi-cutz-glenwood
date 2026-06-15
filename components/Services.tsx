"use client";

import { useEffect } from "react";

const services = [
  { name: "Classic Haircut", desc: "Precision scissors or clipper cut tailored to your style, finished with a clean line-up.", price: "$25", duration: "30 min" },
  { name: "Skin Fade", desc: "Seamless blend from skin to your desired length. The signature Desi Cutz finish.", price: "$35", duration: "45 min" },
  { name: "Kids Cut", desc: "Gentle, fun cuts for the little ones. Age 12 and under.", price: "$20", duration: "25 min" },
  { name: "Beard Trim & Shape", desc: "Hot towel, trim, and precise shaping to frame your face perfectly.", price: "$20", duration: "20 min" },
  { name: "Cut + Beard Combo", desc: "Full haircut paired with a beard trim and shape — the complete look.", price: "$50", duration: "60 min" },
  { name: "Hair Colour", desc: "Tint, highlights or fashion colour — consultation included.", price: "From $60", duration: "Varies" },
];

export default function Services() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{ padding: "7rem 1.5rem", background: "var(--dark)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ color: "var(--gold)", letterSpacing: "0.35em", textTransform: "uppercase", fontSize: "0.7rem", fontWeight: 600, marginBottom: "0.8rem" }}>
            What We Offer
          </p>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            Services &amp; <span style={{ color: "var(--gold)" }}>Pricing</span>
          </h2>
          <div className="gold-line" />
          <p style={{ color: "#666", fontSize: "0.9rem", maxWidth: "420px", margin: "0 auto" }}>
            All prices are indicative — walk-ins welcome, appointments preferred.
          </p>
        </div>

        <div
          className="fade-up"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}
        >
          {services.map((s) => (
            <div key={s.name} className="service-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", letterSpacing: "0.02em" }}>{s.name}</h3>
                <span style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.1rem", whiteSpace: "nowrap", marginLeft: "1rem" }}>{s.price}</span>
              </div>
              <p style={{ color: "#777", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1rem" }}>{s.desc}</p>
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", fontWeight: 600 }}>{s.duration}</span>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#booking" className="btn-gold">Book a Service</a>
        </div>
      </div>
    </section>
  );
}
