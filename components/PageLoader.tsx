"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 800);
    const hideTimer = setTimeout(() => setVisible(false), 1400);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.6rem",
        transition: "opacity 0.6s ease",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div className="brand glow" style={{ fontSize: "2rem", color: "var(--text)", letterSpacing: "0.22em" }}>
        Desi <span className="gold-text">Cutz</span>
      </div>

      <div style={{ width: "130px", height: "2px", background: "var(--line)", position: "relative", overflow: "hidden", borderRadius: "2px" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gold-grad)",
            animation: "loader-bar 0.9s ease-out forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes loader-bar {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
