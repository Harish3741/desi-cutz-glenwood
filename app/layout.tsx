import type { Metadata } from "next";
import { Geist, Archivo } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
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
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "08:00", closes: "17:30" },
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
    <html lang="en" className={`${geist.className} ${archivo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
        {/* Setmore booking widget — raw HTML so the script binds on DOMContentLoaded */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <button id="Anywhere_button_iframe" class="anywhere-book-now-button" style="position:fixed;opacity:0;width:1px;height:1px;overflow:hidden;z-index:-1;" data-booking-url="https://harish3iui.setmore.com" data-new-tab="false">Book now</button>
              <script id="anywhere_book_now_script" src="https://assets.setmore.com/integration/book-now/live/v1/anywhere-book-now.js"></script>
            `,
          }}
        />
      </body>
    </html>
  );
}
