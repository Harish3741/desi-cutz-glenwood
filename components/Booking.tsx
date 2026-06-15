export default function Booking() {
  return (
    <section
      id="booking"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
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
          Reserve Your Seat
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
          Book an Appointment
        </h2>
        <div className="gold-line" />
        <p
          style={{
            color: "#888",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
          }}
        >
          Skip the wait. Book your preferred time and our team will have
          everything ready when you arrive.
        </p>

        {/* Calendly placeholder */}
        <div
          style={{
            background: "var(--dark-3)",
            border: "1px solid #2a2a2a",
            borderTop: "2px solid var(--gold)",
            padding: "3rem 2rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "2px solid var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
            Online booking coming soon — in the meantime, call or walk in.
          </p>
          <a
            href="tel:0286250010"
            className="btn-gold"
            style={{ display: "inline-block" }}
          >
            Call to Book
          </a>
        </div>

        <p style={{ color: "#555", fontSize: "0.82rem" }}>
          Or walk in — we welcome drop-ins during opening hours.
        </p>
      </div>
    </section>
  );
}
