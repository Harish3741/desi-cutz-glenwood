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

  // Light text over the dark hero; dark text once a cream bar appears on scroll.
  const onLight = scrolled;
  const textColor = onLight ? "var(--ink)" : "#f7f1e7";
  const subColor = onLight ? "var(--muted)" : "rgba(247,241,231,0.7)";

  return (
    <header
      style={{
        position: "fixed",
        top: "3px",
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
        background: scrolled ? "rgba(247,241,231,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 4px 20px rgba(34,28,23,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", lineHeight: 1 }}>
          <div
            className="display"
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              letterSpacing: "-0.01em",
              color: textColor,
              lineHeight: 1,
              transition: "color 0.4s",
            }}
          >
            Desi<span style={{ color: "var(--rust)" }}>Cutz</span>
          </div>
          <div
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: subColor,
              marginTop: "4px",
              transition: "color 0.4s",
            }}
          >
            Men&apos;s Hair Salon
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2.4rem", alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" style={{ color: textColor, transition: "color 0.4s" }}>
              {l.label}
            </a>
          ))}
          <a href="#booking" className="btn" style={{ padding: "0.6rem 1.4rem", fontSize: "0.85rem" }}>
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: "24px", height: "2px", background: textColor, transition: "all 0.3s" }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(247,241,231,0.98)", borderTop: "1px solid var(--line)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" style={{ color: "var(--ink)" }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#booking" className="btn" style={{ textAlign: "center" }} onClick={() => setOpen(false)}>
            Book Now
          </a>
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
