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
        background: "var(--bg)",
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
          filter: "brightness(0.4) saturate(0.9) contrast(1.05)",
        }}
      />

      {/* Gradient + glow overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1100px 700px at 50% 38%, rgba(200,164,93,0.14), transparent 60%), linear-gradient(180deg, rgba(13,13,14,0.7) 0%, rgba(13,13,14,0.35) 42%, rgba(13,13,14,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "0 1.5rem", maxWidth: "880px" }}>
        <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1.8rem" }}>
          Glenwood NSW · Est. 2010
        </p>

        <h1
          className="brand glow"
          style={{
            fontSize: "clamp(3rem, 11vw, 8rem)",
            color: "var(--text)",
            lineHeight: 0.98,
            letterSpacing: "0.06em",
            marginBottom: "1.6rem",
          }}
        >
          Desi <span className="gold-text">Cutz</span>
        </h1>

        <p
          style={{
            color: "rgba(238,238,236,0.82)",
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            lineHeight: 1.7,
            margin: "0 auto 2.6rem",
            maxWidth: "520px",
          }}
        >
          A modern grooming lounge for sharp cuts, clean fades and proper beard
          work — in the heart of Glenwood.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href="#booking" className="btn">Book Appointment</a>
          <a href="#services" className="btn-ghost">View Services</a>
        </div>

        {/* Trust row */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", color: "var(--muted)", fontSize: "0.82rem", letterSpacing: "0.04em" }}>
          <span className="stars" style={{ fontSize: "0.95rem" }}>★★★★★</span>
          <span style={{ color: "var(--text)", fontWeight: 600 }}>5.0</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>Rated by 50+ happy clients</span>
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
          opacity: 0.55,
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)" }}>Scroll</span>
        <div style={{ width: "1px", height: "42px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </div>
    </section>
  );
}
