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
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1800&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.25)",
        }}
      />

      {/* Gold vertical lines decoration */}
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
          <div
            key={i}
            style={{ width: "1px", background: "var(--gold)", height: "100%" }}
          />
        ))}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "0 1.5rem" }}>
        <p
          style={{
            color: "var(--gold)",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontSize: "0.75rem",
            marginBottom: "1.5rem",
            fontWeight: 500,
          }}
        >
          Glenwood, NSW
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "#fff",
            marginBottom: "0.3rem",
          }}
        >
          Desi
        </h1>
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "var(--gold)",
            marginBottom: "1.5rem",
          }}
        >
          Cutz
        </h1>

        <div
          style={{
            width: "60px",
            height: "2px",
            background: "var(--gold)",
            margin: "0 auto 1.5rem",
          }}
        />

        <p
          style={{
            color: "#aaa",
            fontSize: "1rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "3rem",
            maxWidth: "360px",
            margin: "0 auto 3rem",
          }}
        >
          Premium cuts &amp; grooming
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#booking" className="btn-gold">
            Book Appointment
          </a>
          <a href="#services" className="btn-ghost">
            Our Services
          </a>
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
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}>
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </div>
    </section>
  );
}
