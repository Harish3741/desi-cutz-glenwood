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
    <section id="location" className="section">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1rem" }}>Find Us</p>
          <h2 className="title">Hours &amp; <span className="gold-text">Location</span></h2>
          <div className="rule" />
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {/* Hours */}
          <div className="panel" style={{ padding: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.74rem", color: "var(--gold)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Opening Hours
            </h3>
            {hours.map((h) => (
              <div key={h.day} className="hours-row" style={{ color: h.day === today ? "var(--text)" : "var(--muted)", fontWeight: h.day === today ? 600 : 400 }}>
                <span>{h.day}{h.day === today && <span style={{ color: "var(--gold)", marginLeft: "0.5rem", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Today</span>}</span>
                <span style={{ color: h.day === today ? "var(--gold-lt)" : undefined }}>{h.time}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: "0.72rem", color: "var(--dim)" }}>* Hours may vary on public holidays</p>
          </div>

          {/* Contact + Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              <h3 style={{ fontWeight: 700, fontSize: "0.74rem", color: "var(--gold)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Contact</h3>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: "3px" }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p style={{ color: "var(--text)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                    Shop 3/60 Glenwood Park Dr<br />Glenwood NSW 2768
                  </p>
                  <a href="https://maps.google.com/?q=Shop+3/60+Glenwood+Park+Dr+Glenwood+NSW+2768" target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--gold-lt)", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", marginTop: "5px", display: "inline-block" }}>
                    Get Directions →
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 8.09a16 16 0 0 0 5.92 5.92l.85-.85a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 15z" />
                </svg>
                <a href="tel:0286250010" style={{ color: "var(--text)", fontSize: "0.92rem", fontWeight: 500, textDecoration: "none" }}>(02) 8625 0010</a>
              </div>
            </div>

            <div className="panel" style={{ overflow: "hidden", flexGrow: 1, minHeight: "220px", padding: 0 }}>
              <iframe
                title="Desi Cutz Glenwood Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.65!2d150.9259!3d-33.7347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zShop+3%2F60+Glenwood+Park+Dr+Glenwood+NSW+2768!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="240"
                style={{ border: 0, display: "block", filter: "grayscale(0.4) contrast(1.05) brightness(0.85)" }}
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
