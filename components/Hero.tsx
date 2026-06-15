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
        background: "#0d0d0e",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1900&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35) saturate(0.8)",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "0 1.5rem", maxWidth: "860px" }}>
        <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1.8rem", color: "rgba(255,255,255,0.7)" }}>
          Glenwood NSW · Est. 2010
        </p>

        <h1
          className="brand"
          style={{
            fontSize: "clamp(3rem, 11vw, 8rem)",
            color: "#ffffff",
            lineHeight: 0.98,
            letterSpacing: "0.06em",
            marginBottom: "1.6rem",
          }}
        >
          Desi <span style={{ color: "var(--red)" }}>Cutz</span>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(1rem, 2.2vw, 1.18rem)",
            lineHeight: 1.75,
            margin: "0 auto 2.6rem",
            maxWidth: "520px",
          }}
        >
          Sharp cuts, clean fades and proper beard work — right in the heart
          of Glenwood.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href="#booking" className="btn-hero">Book Appointment</a>
          <a href="#services" className="btn-hero-ghost">View Services</a>
        </div>

        {/* Trust row */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", letterSpacing: "0.04em" }}>
          <span className="stars" style={{ fontSize: "0.95rem" }}>★★★★★</span>
          <span style={{ color: "#ffffff", fontWeight: 600 }}>5.0</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>50+ Google reviews</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: "1.8rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.5,
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Scroll</span>
        <div style={{ width: "1px", height: "42px", background: "linear-gradient(to bottom, var(--red), transparent)" }} />
      </div>
    </section>
  );
}
