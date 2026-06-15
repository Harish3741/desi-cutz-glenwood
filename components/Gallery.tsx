"use client";

import { useEffect, useState } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80", alt: "Classic fade haircut" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80", alt: "Barber at work" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80", alt: "Skin fade" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80", alt: "Beard trim" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80", alt: "Barbershop interior" },
  { src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&q=80", alt: "Fresh cut finish" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }); },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null) setLightbox((lightbox + 1) % images.length);
      if (e.key === "ArrowLeft" && lightbox !== null) setLightbox((lightbox - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

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
            <div
              key={i}
              className="gallery-item"
              onClick={() => setLightbox(i)}
              style={{ cursor: "pointer" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div style={{
                position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                opacity: 0, transition: "opacity 0.3s", background: "rgba(0,0,0,0.3)",
              }} className="gallery-overlay">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "1.5rem", color: "#444", fontSize: "0.78rem", letterSpacing: "0.05em" }}>
          Placeholder photos — real work coming soon · Click any photo to expand
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 1000,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "1px solid #444", color: "#fff", width: "40px", height: "40px", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "2px" }}
          >✕</button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            style={{ position: "absolute", left: "1.5rem", background: "none", border: "1px solid #444", color: "var(--gold)", width: "44px", height: "44px", cursor: "pointer", fontSize: "1.3rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "2px" }}
          >‹</button>

          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", border: "1px solid #2a2a2a" }}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            style={{ position: "absolute", right: "1.5rem", background: "none", border: "1px solid #444", color: "var(--gold)", width: "44px", height: "44px", cursor: "pointer", fontSize: "1.3rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "2px" }}
          >›</button>

          {/* Counter */}
          <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", color: "#666", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}

      <style>{`.gallery-item:hover .gallery-overlay { opacity: 1 !important; }`}</style>
    </section>
  );
}
