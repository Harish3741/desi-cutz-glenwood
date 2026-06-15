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
        background: "var(--charcoal)",
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
          filter: "brightness(0.42) saturate(1.05)",
        }}
      />

      {/* Warm gradient overlay for legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(34,28,23,0.55) 0%, rgba(34,28,23,0.35) 45%, rgba(34,28,23,0.78) 100%)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "0 1.5rem" }}>
        <p className="eyebrow" style={{ color: "#e8b88f", marginBottom: "1.6rem" }}>
          Glenwood, NSW · Est. 2010
        </p>

        <h1
          className="display"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            color: "#f7f1e7",
            marginBottom: "1.5rem",
          }}
        >
          Desi <span style={{ color: "var(--rust)" }}>Cutz</span>
        </h1>

        <p
          style={{
            color: "rgba(247,241,231,0.85)",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            margin: "0 auto 2.6rem",
            maxWidth: "440px",
          }}
        >
          Sharp cuts, clean fades and proper grooming — in the heart of Glenwood.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#booking" className="btn">Book Appointment</a>
          <a href="#services" className="btn-outline-light">Our Services</a>
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
          opacity: 0.55,
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(247,241,231,0.8)" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #e8b88f, transparent)" }} />
      </div>
    </section>
  );
}
