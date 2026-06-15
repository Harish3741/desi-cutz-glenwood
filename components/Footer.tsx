const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #2a2a2a", background: "#111111" }}>
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
            <div className="brand" style={{ fontSize: "1.3rem", color: "#ffffff", letterSpacing: "0.2em", marginBottom: "1rem" }}>
              Desi <span style={{ color: "var(--red)" }}>Cutz</span>
            </div>
            <p style={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.7, maxWidth: "260px" }}>
              Sharp cuts, clean fades and proper beard work in Glenwood, NSW.
              Walk-ins welcome.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ color: "var(--red)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.1rem", fontWeight: 600 }}>Explore</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {quickLinks.map((l) => (
                <a key={l.href} href={l.href} className="footer-link" style={{ fontSize: "0.88rem" }}>{l.label}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "var(--red)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.1rem", fontWeight: 600 }}>Visit</h4>
            <p style={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.8 }}>
              Shop 3/60 Glenwood Park Dr<br />Glenwood NSW 2768
            </p>
            <a href="tel:0286250010" className="footer-link" style={{ fontSize: "0.88rem", display: "inline-block", marginTop: "0.7rem" }}>(02) 8625 0010</a>
          </div>
        </div>

        <div style={{ height: "1px", background: "#2a2a2a", marginBottom: "1.8rem" }} />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "#4b5563", fontSize: "0.76rem" }}>
            © {new Date().getFullYear()} Desi Cutz Glenwood. All rights reserved.
          </p>
          <p style={{ color: "#4b5563", fontSize: "0.76rem" }}>
            Walk-ins welcome · Appointments preferred
          </p>
        </div>
      </div>
    </footer>
  );
}
