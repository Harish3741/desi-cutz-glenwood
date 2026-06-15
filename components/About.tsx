export default function About() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "5★", label: "Google Rating" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--dark-2)",
        borderTop: "1px solid #1c1c1c",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div>
            <p
              style={{
                color: "var(--gold)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                fontSize: "0.72rem",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              More Than Just
              <br />
              <span style={{ color: "var(--gold)" }}>a Haircut</span>
            </h2>
            <p
              style={{
                color: "#999",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                marginBottom: "1rem",
              }}
            >
              At Desi Cutz Glenwood, we blend traditional barbering craft with
              modern technique. Nestled in the heart of Glenwood, our shop is a
              place where every client walks out feeling sharp and confident.
            </p>
            <p
              style={{
                color: "#999",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                marginBottom: "2.5rem",
              }}
            >
              Whether you&apos;re in for a classic cut, a skin fade, or a full
              grooming session, our skilled barbers deliver precision and style
              every single time.
            </p>
            <a href="#booking" className="btn-gold">
              Book Your Visit
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--dark-3)",
                  border: "1px solid #222",
                  borderLeft: "3px solid var(--gold)",
                  padding: "1.5rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "var(--gold)",
                    lineHeight: 1,
                    minWidth: "80px",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    color: "#bbb",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    fontSize: "0.85rem",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
