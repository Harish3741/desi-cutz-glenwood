const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", background: "var(--bg-2)" }}>
      <div className="container" style={{ padding: "4rem 1.5rem 2.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div className="brand glow" style={{ fontSize: "1.3rem", color: "var(--text)", letterSpacing: "0.2em", marginBottom: "1rem" }}>
              Desi <span className="gold-text">Cutz</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7, maxWidth: "260px" }}>
              A modern grooming lounge for sharp cuts, clean fades and proper
              beard work in Glenwood, NSW.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ color: "var(--gold)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.1rem", fontWeight: 600 }}>Explore</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {quickLinks.map((l) => (
                <a key={l.href} href={l.href} className="footer-link" style={{ fontSize: "0.88rem" }}>{l.label}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "var(--gold)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.1rem", fontWeight: 600 }}>Visit</h4>
            <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.8 }}>
              Shop 3/60 Glenwood Park Dr<br />Glenwood NSW 2768
            </p>
            <a href="tel:0286250010" className="footer-link" style={{ fontSize: "0.88rem", display: "inline-block", marginTop: "0.7rem" }}>(02) 8625 0010</a>
          </div>
        </div>

        <div className="hairline" style={{ marginBottom: "1.8rem" }} />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "var(--dim)", fontSize: "0.76rem" }}>
            © {new Date().getFullYear()} Desi Cutz Glenwood. All rights reserved.
          </p>
          <p style={{ color: "var(--dim)", fontSize: "0.76rem" }}>
            Walk-ins welcome · Appointments preferred
          </p>
        </div>
      </div>
    </footer>
  );
}
