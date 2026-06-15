import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
