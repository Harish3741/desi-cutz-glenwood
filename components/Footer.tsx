export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--charcoal)",
        padding: "3.5rem 1.5rem",
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
            className="display"
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              letterSpacing: "-0.01em",
              color: "var(--cream)",
            }}
          >
            Desi<span style={{ color: "var(--rust)" }}>Cutz</span>
          </span>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {["#about", "#services", "#gallery", "#booking", "#location"].map((href) => (
              <a
                key={href}
                href={href}
                style={{
                  color: "var(--cream-dim)",
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
          <div style={{ width: "40px", height: "1px", background: "var(--line-dark)" }} />

          <p style={{ color: "var(--cream-dim)", fontSize: "0.8rem" }}>
            Shop 3/60 Glenwood Park Dr, Glenwood NSW 2768 &nbsp;·&nbsp;{" "}
            <a href="tel:0286250010" className="footer-link" style={{ color: "var(--cream-dim)", textDecoration: "none" }}>
              (02) 8625 0010
            </a>
          </p>

          <p style={{ color: "var(--muted)", fontSize: "0.72rem" }}>
            © {new Date().getFullYear()} Desi Cutz Glenwood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
