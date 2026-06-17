// The Setmore "Anywhere Book Now" script is loaded in app/layout.tsx
// (beforeInteractive) so it binds to the button below on page load.
const SETMORE_BOOKING_URL = "https://harish3iui.setmore.com";

export default function Booking() {
  return (
    <section id="booking" className="section" style={{ position: "relative", overflow: "hidden" }}>
      {/* Subtle red tint in background */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "800px", height: "800px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,30,30,0.05) 0%, transparent 66%)", pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1rem" }}>Reserve Your Seat</p>
          <h2 className="title">Book an <span className="accent-text">Appointment</span></h2>
          <div className="rule" />
          <p className="lead" style={{ maxWidth: "480px", margin: "1.4rem auto 0" }}>
            Pick your service, barber and time — book online in seconds. Prefer
            to talk? Give us a call or walk in any time.
          </p>
        </div>

        {/* Booking card */}
        <div className="panel reveal d1" style={{ maxWidth: "640px", margin: "0 auto", padding: "clamp(2rem, 5vw, 3.4rem)", textAlign: "center" }}>
          <div
            style={{
              width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 1.6rem",
              background: "var(--red-soft)", border: "1px solid rgba(196,30,30,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--red)",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>

          <p className="display" style={{ color: "var(--text)", fontWeight: 700, fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>
            Book Online, Instantly
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 2rem" }}>
            Choose a time that suits you and lock in your spot — confirmation
            comes through straight away.
          </p>

          {/* Setmore Book Now button (restyled to match the site) */}
          <button
            type="button"
            id="Anywhere_button_iframe"
            className="btn anywhere-book-now-button"
            data-booking-url={SETMORE_BOOKING_URL}
            data-new-tab="false"
            style={{
              background: "var(--red)", color: "#fff", border: "none",
              fontSize: "0.9rem", padding: "1.05rem 2.6rem", cursor: "pointer",
            }}
          >
            Book Now
          </button>

          {/* Secondary options */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.6rem" }}>
            <a href="tel:0286250010" className="btn-ghost">Call · (02) 8625 0010</a>
            <a href="#location" className="btn-ghost">Get Directions</a>
          </div>
          <p style={{ color: "var(--dim)", fontSize: "0.8rem", marginTop: "1.4rem" }}>
            Walk-ins welcome during opening hours.
          </p>
        </div>
      </div>
    </section>
  );
}
