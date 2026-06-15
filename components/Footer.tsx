export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--dark)",
        borderTop: "1px solid #1c1c1c",
        padding: "3rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {/* Logo */}
          <span
            style={{
              fontWeight: 900,
              fontSize: "1.4rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            Desi<span style={{ color: "var(--gold)" }}>Cutz</span>
          </span>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {["#about", "#services", "#gallery", "#booking", "#location"].map((href) => (
              <a
                key={href}
                href={href}
                style={{
                  color: "#666",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
                className="footer-link"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div style={{ width: "40px", height: "1px", background: "#2a2a2a" }} />

          <p style={{ color: "#444", fontSize: "0.78rem" }}>
            Shop 3/60 Glenwood Park Dr, Glenwood NSW 2768 &nbsp;·&nbsp;{" "}
            <a href="tel:0286250010" style={{ color: "#555", textDecoration: "none" }}>
              (02) 8625 0010
            </a>
          </p>

          <p style={{ color: "#333", fontSize: "0.72rem" }}>
            © {new Date().getFullYear()} Desi Cutz Glenwood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
