const reviews = [
  { name: "Mike Smith",      rating: 5, text: "Coming here for the last 2 years — always the best haircuts, never disappointed.", service: "Children's cuts · Scissor cut · Beard trim" },
  { name: "Raj Kalsi",       rating: 5, text: "Just had a haircut with George — top-notch experience! Super chill atmosphere, and George really knows his craft. Definitely coming back!", service: "Scissor cut" },
  { name: "Malk Pannu",      rating: 5, text: "Great place for solid cuts. Super friendly staff and super service!!", service: "" },
  { name: "Heaven Malhotra", rating: 5, text: "What a place. I was searching for a good barber for a long time. They actually know how to cut hair. Strongly recommended.", service: "" },
  { name: "Rohit",           rating: 5, text: "Great bunch of boys, quality cuts and affordable. Been coming here for years and definitely the best barber in the area — also much cheaper than others. Highly recommended.", service: "" },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={s <= rating ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ name, rating, text, service }: { name: string; rating: number; text: string; service: string }) {
  return (
    <div style={{
      width: "300px", flexShrink: 0,
      background: "var(--bg-2)", border: "1px solid var(--line)",
      borderRadius: "14px", padding: "1.6rem",
      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.85rem" }}>
        <Stars rating={rating} />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.15 }}>
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
        </svg>
      </div>
      <p style={{ color: "var(--text)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{text}</p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
        <span style={{
          width: "34px", height: "34px", borderRadius: "50%", flexShrink: 0,
          background: "var(--red)", color: "#fff", fontWeight: 800,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem",
        }} className="display">{name.charAt(0)}</span>
        <div>
          <div style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.88rem" }}>{name}</div>
          {service && (
            <div style={{ color: "var(--dim)", fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "1px" }}>{service}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section">
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }} className="container">
        <div className="reveal">
          <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1rem" }}>Kind Words</p>
          <h2 className="title">What Clients <span className="accent-text">Say</span></h2>
          <div className="rule" />
          <div style={{ marginTop: "1.4rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={s <= 4 ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{ color: "var(--text)", fontWeight: 700, fontSize: "1rem" }}>4.4</span>
            <span style={{ color: "var(--dim)" }}>·</span>
            <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>300+ Google reviews</span>
          </div>
        </div>
      </div>

      {/* Marquee track — full width, no container padding */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", zIndex: 2, background: "linear-gradient(to right, var(--bg), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", zIndex: 2, background: "linear-gradient(to left, var(--bg), transparent)", pointerEvents: "none" }} />

        <div className="reviews-track" style={{ display: "flex", gap: "1.25rem", width: "max-content", paddingBottom: "0.5rem" }}>
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>

      <style>{`
        .reviews-track {
          animation: reviews-scroll 40s linear infinite;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
