"use client";

import { useRef, useState } from "react";

// Add your photo paths here once uploaded to /public/photos/
// e.g. before: "/desi-cutz-glenwood/photos/skin-fade-before.jpg"
const SLOTS = [
  { label: "Skin Fade",   before: "", after: "" },
  { label: "Classic Cut", before: "", after: "" },
  { label: "Beard Shape", before: "", after: "" },
];

function Placeholder({ text }: { text: string }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "var(--surface-2)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "0.9rem",
    }}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--line-2)" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span style={{ color: "var(--dim)", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
        {text}
      </span>
    </div>
  );
}

function Slider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasPhotos = Boolean(before && after);

  const updatePos = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div>
      <div
        ref={containerRef}
        onMouseDown={(e) => { if (!hasPhotos) return; dragging.current = true; updatePos(e.clientX); }}
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={(e) => { if (hasPhotos) updatePos(e.touches[0].clientX); }}
        onTouchMove={(e) => { if (hasPhotos) updatePos(e.touches[0].clientX); }}
        style={{
          position: "relative", overflow: "hidden",
          cursor: hasPhotos ? "ew-resize" : "default",
          userSelect: "none", aspectRatio: "4/3",
          background: "var(--surface)", borderRadius: "14px",
          border: "1px solid var(--line)",
        }}
      >
        {hasPhotos ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={before} alt={`${label} — before`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={after} alt={`${label} — after`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Slider handle */}
            <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: "2px", background: "var(--red)", transform: "translateX(-50%)", pointerEvents: "none" }}>
              <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                width: "38px", height: "38px", borderRadius: "50%", background: "var(--red)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 14px rgba(0,0,0,0.3)", color: "#fff", fontSize: "0.8rem", fontWeight: 900, letterSpacing: "-1px",
              }}>‹›</div>
            </div>

            <span style={{ position: "absolute", top: "0.7rem", left: "0.7rem", background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", padding: "3px 9px", borderRadius: "4px" }}>Before</span>
            <span style={{ position: "absolute", top: "0.7rem", right: "0.7rem", background: "var(--red)", color: "#fff", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", padding: "3px 9px", borderRadius: "4px", fontWeight: 700 }}>After</span>
          </>
        ) : (
          <Placeholder text="Photo coming soon" />
        )}
      </div>
      <p className="display" style={{ textAlign: "center", color: "var(--text)", fontSize: "0.95rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.9rem" }}>{label}</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1rem" }}>Our Work</p>
          <h2 className="title">The <span className="accent-text">Gallery</span></h2>
          <div className="rule" />
          <p className="lead" style={{ maxWidth: "440px", margin: "1.4rem auto 0" }}>
            Drag the slider to see the transformation.
          </p>
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {SLOTS.map((slot, i) => (
            <Slider key={i} before={slot.before} after={slot.after} label={slot.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
