const reviews = [
  {
    quote: "Best fade I've had in Sydney, hands down. The place feels high-end the second you walk in and the barbers actually listen.",
    name: "Marcus T.",
    detail: "Skin Fade + Beard",
  },
  {
    quote: "Took my son for his first proper cut. They were patient, friendly and he loved it. We've been coming back ever since.",
    name: "Priya S.",
    detail: "Kids Cut",
  },
  {
    quote: "Clean, modern and the attention to detail is unreal. Booked a cut + beard combo and walked out feeling brand new.",
    name: "Daniel R.",
    detail: "Cut + Beard Combo",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1rem" }}>Kind Words</p>
          <h2 className="title">What Clients <span className="gold-text">Say</span></h2>
          <div className="rule" />
          <p style={{ marginTop: "1.4rem", color: "var(--muted)", fontSize: "0.92rem" }}>
            <span className="stars" style={{ fontSize: "1rem" }}>★★★★★</span>{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>5.0</span> average from 50+ Google reviews
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {reviews.map((r, i) => (
            <div key={r.name} className={`panel reveal ${i === 1 ? "d1" : i === 2 ? "d2" : ""}`} style={{ padding: "2.2rem 1.9rem", position: "relative" }}>
              <span
                className="display"
                aria-hidden
                style={{ position: "absolute", top: "0.6rem", right: "1.2rem", fontSize: "4.5rem", lineHeight: 1, color: "var(--emerald)", opacity: 0.5, fontWeight: 900 }}
              >
                &rdquo;
              </span>
              <div className="stars" style={{ fontSize: "0.95rem", marginBottom: "1.1rem" }}>★★★★★</div>
              <p style={{ color: "var(--text)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1.6rem" }}>
                {r.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <span style={{
                  width: "40px", height: "40px", borderRadius: "50%", flexShrink: 0,
                  background: "var(--gold-grad)", color: "var(--on-gold)", fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.95rem",
                }} className="display">{r.name.charAt(0)}</span>
                <div>
                  <div style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.92rem" }}>{r.name}</div>
                  <div style={{ color: "var(--gold-dk)", fontSize: "0.74rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{r.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
