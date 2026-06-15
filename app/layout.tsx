import type { Metadata } from "next";
import { Geist, Playfair_Display, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const SITE_URL = "https://harish3741.github.io/desi-cutz-glenwood";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Desi Cutz Glenwood | Men's Hair Salon — Glenwood NSW",
  description:
    "Desi Cutz Glenwood — premium men's haircuts, skin fades, beard trims and grooming in Glenwood NSW 2768. Walk-ins welcome. Call (02) 8625 0010.",
  keywords:
    "barbershop Glenwood, haircut Glenwood NSW, skin fade Sydney, mens haircut 2768, Desi Cutz, beard trim Glenwood",
  authors: [{ name: "Desi Cutz Glenwood" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Desi Cutz Glenwood",
    title: "Desi Cutz Glenwood | Men's Hair Salon",
    description:
      "Premium men's haircuts, skin fades & grooming in Glenwood NSW. Book your appointment today.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Desi Cutz Glenwood — Men's Hair Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desi Cutz Glenwood | Men's Hair Salon",
    description: "Premium men's haircuts, skin fades & grooming in Glenwood NSW.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Desi Cutz Glenwood",
  description: "Premium men's haircuts, skin fades and grooming in Glenwood NSW.",
  url: SITE_URL,
  telephone: "+61286250010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop 3/60 Glenwood Park Dr",
    addressLocality: "Glenwood",
    addressRegion: "NSW",
    postalCode: "2768",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.7347,
    longitude: 150.9259,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.className} ${playfair.variable} ${cinzel.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
