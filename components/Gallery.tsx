const images = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Classic fade haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Barber at work",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Skin fade",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    alt: "Beard trim",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Barbershop interior",
  },
  {
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=600&q=80",
    alt: "Fresh cut finish",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--dark-2)",
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
            Our Work
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
            Gallery
          </h2>
          <div className="gold-line" />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="gallery-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            color: "#555",
            fontSize: "0.82rem",
            letterSpacing: "0.05em",
          }}
        >
          Placeholder photos — real work coming soon
        </p>
      </div>
    </section>
  );
}
