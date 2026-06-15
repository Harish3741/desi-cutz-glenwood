"use client";

import { useEffect, useRef, useState } from "react";

const pairs = [
  {
    before: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=700&q=80",
    after: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&q=80",
    label: "Skin Fade",
  },
  {
    before: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=700&q=80",
    after: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
    label: "Classic Cut",
  },
  {
    before: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=700&q=80",
    after: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80",
    label: "Beard Shape",
  },
];

function Slider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  return (
    <div>
      <div
        ref={containerRef}
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchMove={(e) => updatePos(e.touches[0].clientX)}
        style={{
          position: "relative",
          overflow: "hidden",
          cursor: "ew-resize",
          userSelect: "none",
          aspectRatio: "4/3",
          background: "var(--cream-3)",
          borderRadius: "8px",
        }}
      >
        {/* Before */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before} alt="Before" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />

        {/* After (clipped) */}
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={after} alt="After" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Divider line */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: "2px", background: "var(--rust)", transform: "translateX(-50%)" }}>
          {/* Handle */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "36px", height: "36px", borderRadius: "50%",
            background: "var(--rust)", display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 10px rgba(34,28,23,0.35)",
          }}>
            <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 900, letterSpacing: "-1px" }}>‹›</span>
          </div>
        </div>

        {/* Labels */}
        <span style={{ position: "absolute", top: "0.7rem", left: "0.7rem", background: "rgba(34,28,23,0.78)", color: "#f7f1e7", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "3px 8px", borderRadius: "3px" }}>Before</span>
        <span style={{ position: "absolute", top: "0.7rem", right: "0.7rem", background: "var(--rust)", color: "#fff", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "3px 8px", borderRadius: "3px" }}>After</span>
      </div>
      <p className="display" style={{ textAlign: "center", color: "var(--ink)", fontSize: "1rem", fontWeight: 600, marginTop: "0.85rem" }}>{label}</p>
    </div>
  );
}

export default function BeforeAfter() {
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
    <section id="transformations" style={{ padding: "7rem 1.5rem", background: "var(--cream)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="eyebrow" style={{ marginBottom: "0.8rem" }}>The Desi Cutz Difference</p>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--ink)" }}>
            Before &amp; <span style={{ color: "var(--rust)" }}>After</span>
          </h2>
          <div className="accent-line" />
          <p style={{ color: "var(--muted)", fontSize: "0.92rem", maxWidth: "400px", margin: "0 auto" }}>
            Drag the slider to see the transformation.
          </p>
        </div>

        <div
          className="fade-up"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}
        >
          {pairs.map((p, i) => (
            <Slider key={i} before={p.before} after={p.after} label={p.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
