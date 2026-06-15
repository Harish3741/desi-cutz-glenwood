const services = [
  {
    name: "Classic Haircut",
    desc: "Precision scissors or clipper cut tailored to your style, finished with a clean line-up.",
    price: "$25",
    duration: "30 min",
  },
  {
    name: "Skin Fade",
    desc: "Seamless blend from skin to your desired length. The signature Desi Cutz finish.",
    price: "$35",
    duration: "45 min",
  },
  {
    name: "Kids Cut",
    desc: "Gentle, fun cuts for the little ones. Age 12 and under.",
    price: "$20",
    duration: "25 min",
  },
  {
    name: "Beard Trim & Shape",
    desc: "Hot towel, trim, and precise shaping to frame your face perfectly.",
    price: "$20",
    duration: "20 min",
  },
  {
    name: "Cut + Beard Combo",
    desc: "Full haircut paired with a beard trim and shape — the complete look.",
    price: "$50",
    duration: "60 min",
  },
  {
    name: "Hair Colour",
    desc: "Tint, highlights or fashion colour — consultation included.",
    price: "From $60",
    duration: "Varies",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--dark)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              color: "var(--gold)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontSize: "0.72rem",
              fontWeight: 600,
              marginBottom: "0.8rem",
            }}
          >
            What We Offer
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Services &amp; Pricing
          </h2>
          <div className="gold-line" />
          <p style={{ color: "#888", fontSize: "0.95rem", maxWidth: "480px", margin: "0 auto" }}>
            All prices are indicative — walk-ins welcome, appointments preferred.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((s) => (
            <div key={s.name} className="service-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.8rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#fff",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.name}
                </h3>
                <span
                  style={{
                    color: "var(--gold)",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    whiteSpace: "nowrap",
                    marginLeft: "1rem",
                  }}
                >
                  {s.price}
                </span>
              </div>
              <p style={{ color: "#888", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                {s.desc}
              </p>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#555",
                  fontWeight: 600,
                }}
              >
                {s.duration}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#booking" className="btn-gold">
            Book a Service
          </a>
        </div>
      </div>
    </section>
  );
}
