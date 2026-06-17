"use client";

import { useState, useEffect } from "react";

function openSetmore() {
  const btn = document.getElementById("Anywhere_button_iframe");
  if (btn) btn.click();
}

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", lineHeight: 1, display: "flex", alignItems: "center", gap: "0.65rem" }}>
          <span
            aria-hidden
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "var(--red)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "0.9rem",
              letterSpacing: 0,
              flexShrink: 0,
            }}
            className="brand"
          >
            D
          </span>
          <span>
            <span
              className="brand"
              style={{
                display: "block",
                fontSize: "1rem",
                color: scrolled ? "var(--text)" : "#ffffff",
                letterSpacing: "0.2em",
                transition: "color 0.4s",
              }}
            >
              Desi <span style={{ color: "var(--red)" }}>Cutz</span>
            </span>
            <span style={{
              display: "block",
              fontSize: "0.44rem",
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: scrolled ? "var(--muted)" : "rgba(255,255,255,0.6)",
              marginTop: "2px",
              transition: "color 0.4s",
            }}>
              Men&apos;s Hair Salon
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2.4rem", alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={scrolled ? "nav-link" : "nav-link-hero"}
            >
              {l.label}
            </a>
          ))}
          <button type="button" className="btn" style={{ padding: "0.6rem 1.4rem", fontSize: "0.72rem" }} onClick={openSetmore}>Book Now</button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: "24px", height: "1.5px", background: scrolled ? "var(--text)" : "#ffffff", transition: "all 0.3s" }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(255,255,255,0.98)", borderTop: "1px solid var(--line)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.3rem", backdropFilter: "blur(12px)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)} style={{ fontSize: "0.9rem" }}>{l.label}</a>
          ))}
          <button type="button" className="btn" style={{ justifyContent: "center", width: "100%" }} onClick={() => { setOpen(false); openSetmore(); }}>Book Now</button>
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
