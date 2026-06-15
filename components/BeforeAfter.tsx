"use client";

import { useRef, useState } from "react";

const pairs = [
  {
    before: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&q=80",
    after: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
    label: "Skin Fade",
  },
  {
    before: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    label: "Classic Cut",
  },
  {
    before: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&q=80",
    after: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
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
          background: "var(--panel)",
          borderRadius: "14px",
          border: "1px solid var(--line)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before} alt="Before" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={after} alt="After" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Divider */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: "2px", background: "var(--gold)", transform: "translateX(-50%)", boxShadow: "0 0 14px rgba(233,205,146,0.5)" }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "38px", height: "38px", borderRadius: "50%", background: "var(--gold-grad)",
            display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 14px rgba(0,0,0,0.5)",
          }}>
            <span style={{ color: "var(--on-gold)", fontSize: "0.8rem", fontWeight: 900, letterSpacing: "-1px" }}>‹›</span>
          </div>
        </div>

        <span style={{ position: "absolute", top: "0.7rem", left: "0.7rem", background: "rgba(8,8,9,0.75)", color: "var(--muted)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", padding: "3px 9px", borderRadius: "4px" }}>Before</span>
        <span style={{ position: "absolute", top: "0.7rem", right: "0.7rem", background: "var(--gold-grad)", color: "var(--on-gold)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", padding: "3px 9px", borderRadius: "4px", fontWeight: 700 }}>After</span>
      </div>
      <p className="display" style={{ textAlign: "center", color: "var(--text)", fontSize: "0.95rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.9rem" }}>{label}</p>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="transformations" className="section">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1rem" }}>The Difference</p>
          <h2 className="title">Before &amp; <span className="gold-text">After</span></h2>
          <div className="rule" />
          <p className="lead" style={{ maxWidth: "420px", margin: "1.4rem auto 0" }}>
            Drag the slider to see the transformation.
          </p>
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {pairs.map((p, i) => (
            <Slider key={i} before={p.before} after={p.after} label={p.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
