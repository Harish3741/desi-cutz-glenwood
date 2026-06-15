const hours = [
  { day: "Monday", time: "9:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 7:00 PM" },
  { day: "Thursday", time: "9:00 AM – 7:00 PM" },
  { day: "Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 4:00 PM" },
];

const today = new Date().toLocaleDateString("en-AU", { weekday: "long" });

export default function Location() {
  return (
    <section
      id="location"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--dark-2)",
        borderTop: "1px solid #1c1c1c",
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
            Find Us
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
            Hours &amp; Location
          </h2>
          <div className="gold-line" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Hours */}
          <div
            style={{
              background: "var(--dark-3)",
              border: "1px solid #222",
              padding: "2rem",
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--gold)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Opening Hours
            </h3>
            {hours.map((h) => (
              <div
                key={h.day}
                className="hours-row"
                style={{
                  color: h.day === today ? "#fff" : "#888",
                  fontWeight: h.day === today ? 600 : 400,
                }}
              >
                <span>{h.day}</span>
                <span style={{ color: h.day === today ? "var(--gold)" : undefined }}>
                  {h.time}
                </span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#555" }}>
              * Hours may vary on public holidays
            </p>
          </div>

          {/* Contact + Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Contact info */}
            <div
              style={{
                background: "var(--dark-3)",
                border: "1px solid #222",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--gold)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Contact
              </h3>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: "2px" }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p style={{ color: "#ddd", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    Shop 3/60 Glenwood Park Dr
                    <br />
                    Glenwood NSW 2768
                  </p>
                  <a
                    href="https://maps.google.com/?q=Shop+3/60+Glenwood+Park+Dr+Glenwood+NSW+2768"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--gold)", fontSize: "0.8rem", textDecoration: "none", marginTop: "4px", display: "inline-block" }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 8.09a16 16 0 0 0 5.92 5.92l.85-.85a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 15z" />
                </svg>
                <a
                  href="tel:0286250010"
                  style={{ color: "#ddd", fontSize: "0.9rem", textDecoration: "none" }}
                >
                  (02) 8625 0010
                </a>
              </div>
            </div>

            {/* Map embed */}
            <div style={{ overflow: "hidden", border: "1px solid #222", flexGrow: 1, minHeight: "220px" }}>
              <iframe
                title="Desi Cutz Glenwood Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.65!2d150.9259!3d-33.7347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zShop+3%2F60+Glenwood+Park+Dr+Glenwood+NSW+2768!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="220"
                style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
