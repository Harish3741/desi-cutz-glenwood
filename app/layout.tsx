import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desi Cutz Glenwood | Premium Barbershop",
  description:
    "Desi Cutz Glenwood — premium haircuts, fades, and grooming in Glenwood NSW. Book your appointment today.",
  keywords: "barbershop, haircut, fade, Glenwood, NSW, Desi Cutz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.className} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
