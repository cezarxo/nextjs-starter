import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marhaba Auction - Premium Used Car Auctions | USA & Canada to UAE",
  description:
    "Marhaba Auction offers premium used car auctions from USA and Canada to UAE. Buy and sell quality vehicles through our online and onsite auction platform.",
  keywords:
    "used cars, car auctions, UAE, USA, Canada, vehicle auctions, online auctions, car shipping",
  authors: [{ name: "Marhaba Auction" }],
  openGraph: {
    title: "Marhaba Auction - Premium Used Car Auctions",
    description: "Premium used car auctions from USA and Canada to UAE",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <Providers>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
