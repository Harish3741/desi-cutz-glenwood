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
        background: "var(--dark)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        transition: "opacity 0.6s ease",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-cinzel)",
          fontWeight: 900,
          fontSize: "2rem",
          letterSpacing: "0.1em",
          color: "#c8102e",
          textShadow: "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
          textTransform: "uppercase",
        }}
      >
        Desi Cutz
      </div>

      {/* Animated gold bar */}
      <div style={{ width: "120px", height: "1px", background: "#1c1c1c", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gold)",
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
