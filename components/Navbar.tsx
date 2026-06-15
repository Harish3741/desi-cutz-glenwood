"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
        background: scrolled ? "rgba(13,13,14,0.82)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.45)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", lineHeight: 1, display: "flex", alignItems: "center", gap: "0.7rem" }}>
          <span
            aria-hidden
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50% 50% 6px 6px",
              border: "1px solid var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--gold-lt)",
              fontWeight: 800,
              fontSize: "0.95rem",
              letterSpacing: 0,
              boxShadow: "0 0 18px rgba(233,205,146,0.25)",
            }}
            className="brand"
          >
            D
          </span>
          <span>
            <span className="brand glow" style={{ display: "block", fontSize: "1.05rem", color: "var(--text)", letterSpacing: "0.22em" }}>
              Desi Cutz
            </span>
            <span style={{ display: "block", fontSize: "0.46rem", letterSpacing: "0.42em", textTransform: "uppercase", color: "var(--gold)", marginTop: "3px" }}>
              Men&apos;s Hair Salon
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2.4rem", alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#booking" className="btn" style={{ padding: "0.65rem 1.5rem", fontSize: "0.72rem" }}>Book Now</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: "24px", height: "1.5px", background: "var(--text)", transition: "all 0.3s" }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(13,13,14,0.97)", borderTop: "1px solid var(--line)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.3rem" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#booking" className="btn" style={{ justifyContent: "center" }} onClick={() => setOpen(false)}>Book Now</a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
