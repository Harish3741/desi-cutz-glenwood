const services = [
  { name: "Classic Haircut", desc: "Precision scissor or clipper cut tailored to you, finished with a clean line-up.", price: "$25", duration: "15 min" },
  { name: "Skin Fade", desc: "A seamless blend from skin to length with a sharp, clean finish.", price: "$30", duration: "20 min" },
  { name: "Kids Cut", desc: "Relaxed, friendly cuts for the little ones. Age 12 and under.", price: "$20", duration: "15–20 min" },
  { name: "Beard Trim & Shape", desc: "Single blade razor for precise line-ups and clean shaping.", price: "$20", duration: "10 min" },
  { name: "Cut + Beard Combo", desc: "A full haircut paired with a beard sculpt for the complete look.", price: "$45", duration: "30 min" },
  { name: "Hair Colour", desc: "Tints, highlights or fashion colour, with a consultation included.", price: "From $60", duration: "Varies" },
];

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="kicker center" style={{ justifyContent: "center", marginBottom: "1rem" }}>What We Offer</p>
          <h2 className="title">Services &amp; <span className="accent-text">Pricing</span></h2>
          <div className="rule" />
          <p className="lead" style={{ maxWidth: "460px", margin: "1.4rem auto 0" }}>
            Prices are subjective to change
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {services.map((s, i) => (
            <div key={s.name} className={`card reveal ${i % 3 === 1 ? "d1" : i % 3 === 2 ? "d2" : ""}`}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                <h3 className="display" style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.name}</h3>
                <span className="accent-text display" style={{ fontWeight: 800, fontSize: "1.2rem", whiteSpace: "nowrap", marginLeft: "1rem" }}>{s.price}</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{s.desc}</p>
              <span style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim)", fontWeight: 600 }}>{s.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
