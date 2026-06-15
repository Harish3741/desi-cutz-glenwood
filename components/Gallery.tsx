"use client";

import { useEffect } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", alt: "Classic fade haircut" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", alt: "Barber at work" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80", alt: "Skin fade" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", alt: "Beard trim" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", alt: "Barbershop interior" },
  { src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=600&q=80", alt: "Fresh cut finish" },
];

export default function Gallery() {
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
    <section id="gallery" style={{ padding: "7rem 1.5rem", background: "var(--dark-2)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ color: "var(--gold)", letterSpacing: "0.35em", textTransform: "uppercase", fontSize: "0.7rem", fontWeight: 600, marginBottom: "0.8rem" }}>
            Our Work
          </p>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            <span style={{ color: "var(--gold)" }}>Gallery</span>
          </h2>
          <div className="gold-line" />
        </div>

        <div
          className="fade-up"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.5rem" }}
        >
          {images.map((img, i) => (
            <div key={i} className="gallery-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "1.5rem", color: "#444", fontSize: "0.78rem", letterSpacing: "0.05em" }}>
          Placeholder photos — real work coming soon
        </p>
      </div>
    </section>
  );
}
