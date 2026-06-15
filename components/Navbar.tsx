"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
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
        top: "3px",
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s, border-color 0.4s",
        background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", lineHeight: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-cinzel)",
              fontWeight: 900,
              fontSize: "1.3rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#c8102e",
              textShadow: "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 2px 2px 4px rgba(0,0,0,0.8)",
              lineHeight: 1,
            }}
          >
            Desi Cutz
          </div>
          <div
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.42rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#ccc",
              textAlign: "center",
              marginTop: "3px",
            }}
          >
            Men&apos;s Hair Salon
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#booking" className="btn-gold" style={{ padding: "0.6rem 1.4rem" }}>Book Now</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: "24px", height: "1.5px", background: "#fff", transition: "all 0.3s" }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(10,10,10,0.98)", borderTop: "1px solid #222", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#booking" className="btn-gold" style={{ textAlign: "center" }} onClick={() => setOpen(false)}>Book Now</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
