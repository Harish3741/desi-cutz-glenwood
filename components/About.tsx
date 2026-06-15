const stats = [
  { value: "10+", label: "Years Open" },
  { value: "5.0★", label: "Google Rating" },
  { value: "15k+", label: "Cuts & Counting" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(2.5rem, 6vw, 5rem)",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div className="reveal">
            <p className="kicker" style={{ marginBottom: "1.2rem" }}>Our Story</p>
            <h2 className="title" style={{ marginBottom: "1.5rem" }}>
              Grooming, done<br /><span className="accent-text">the proper way</span>
            </h2>
            <p className="lead" style={{ marginBottom: "1.1rem" }}>
              Desi Cutz is a modern grooming lounge built on old-school craft.
              Clean space, sharp tools, and barbers who actually listen — a shop
              designed to make every client feel looked after.
            </p>
            <p className="lead" style={{ marginBottom: "2.4rem" }}>
              Whether it&apos;s a precise skin fade, a classic scissor cut or a
              full beard sculpt, we bring the same attention to detail to every
              chair, every time.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", marginBottom: "2.4rem" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="display accent-text" style={{ fontSize: "2.4rem", fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: "var(--muted)", fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "0.5rem" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#booking" className="btn">Book Your Visit</a>
          </div>

          {/* Arched portrait */}
          <div className="reveal d1" style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="arch arch-frame"
              style={{ width: "100%", maxWidth: "380px", aspectRatio: "3/4" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80"
                alt="Barber sculpting a client's beard at Desi Cutz"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
