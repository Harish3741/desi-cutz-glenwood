"use client";

import { useEffect, useState } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80", alt: "Classic fade haircut" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80", alt: "Barber at work" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=80", alt: "Skin fade" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80", alt: "Beard trim" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80", alt: "Salon interior" },
  { src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=900&q=80", alt: "Fresh cut finish" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

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
    <section id="gallery" className="section">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1rem" }}>Our Work</p>
          <h2 className="title">The <span className="gold-text">Gallery</span></h2>
          <div className="rule" />
        </div>

        <div
          className="reveal"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setLightbox(i)}
              style={{ cursor: "pointer", aspectRatio: "1" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: 0, transition: "opacity 0.3s", background: "linear-gradient(180deg, rgba(13,13,14,0) 40%, rgba(13,13,14,0.6) 100%)",
                }}
              >
                <span style={{
                  width: "46px", height: "46px", borderRadius: "50%", border: "1px solid var(--gold)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-lt)",
                  background: "rgba(13,13,14,0.5)", boxShadow: "0 0 20px rgba(233,205,146,0.25)",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "1.75rem", color: "var(--dim)", fontSize: "0.8rem", letterSpacing: "0.06em" }}>
          Tap any photo to view it full size
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(8,8,9,0.96)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "1px solid var(--line-2)", color: "var(--text)", width: "42px", height: "42px", cursor: "pointer", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
          >✕</button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            style={{ position: "absolute", left: "1.5rem", background: "none", border: "1px solid var(--line-2)", color: "var(--gold-lt)", width: "46px", height: "46px", cursor: "pointer", fontSize: "1.3rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
          >‹</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: "10px", border: "1px solid var(--line-2)" }}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            style={{ position: "absolute", right: "1.5rem", background: "none", border: "1px solid var(--line-2)", color: "var(--gold-lt)", width: "46px", height: "46px", cursor: "pointer", fontSize: "1.3rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
          >›</button>
          <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", color: "var(--muted)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}

      <style>{`.gallery-item:hover .gallery-overlay { opacity: 1 !important; }`}</style>
    </section>
  );
}
