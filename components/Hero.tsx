export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        background: "var(--dark)",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1800&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.18) contrast(1.1)",
        }}
      />

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Subtle gold vertical lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ width: "1px", background: "var(--gold)", height: "100%" }} />
        ))}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "0 1.5rem" }}>
        <p
          style={{
            color: "var(--gold)",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            fontSize: "0.7rem",
            marginBottom: "2rem",
            fontWeight: 500,
          }}
        >
          Glenwood, NSW · Est. 2010
        </p>

        <h1
          className="heading"
          style={{
            fontSize: "clamp(4rem, 10vw, 9rem)",
            fontWeight: 900,
            lineHeight: 1,
            color: "#fff",
            marginBottom: "1.5rem",
          }}
        >
          Desi <span style={{ color: "var(--gold)" }}>Cutz</span>
        </h1>

        <div
          style={{
            width: "60px",
            height: "1px",
            background: "var(--gold)",
            margin: "0 auto 1.5rem",
            opacity: 0.7,
          }}
        />

        <p
          style={{
            color: "#999",
            fontSize: "0.85rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: "0 auto 3rem",
            maxWidth: "320px",
          }}
        >
          Premium cuts &amp; grooming
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#booking" className="btn-gold">Book Appointment</a>
          <a href="#services" className="btn-ghost">Our Services</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#888" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </div>
    </section>
  );
}
