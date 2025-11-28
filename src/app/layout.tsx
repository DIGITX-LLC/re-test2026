import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollLines } from "@/components/ScrollLines";

import { BackToTop } from "@/components/BackToTop";
import { JsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { MainLayout } from "@/components/MainLayout";

export const metadata: Metadata = {
  title: {
    default: "re-{test} | Software Quality Engineering Services",
    template: "%s | re-{test}",
  },
  description: "High-skilled engineering outsourcing services using a distributed Agile model. Manual, Automation, Security, and Performance Testing for Big Tech to AI Startups.",
  keywords: [
    "Software Testing",
    "QA Engineering",
    "Automation Testing",
    "Manual Testing",
    "Security Testing",
    "Performance Testing",
    "QA Outsourcing",
    "Agile QA",
    "AI Testing",
    "Mobile App Testing",
    "Web App Testing",
  ],
  authors: [{ name: "DigitX LLC" }],
  creator: "DigitX LLC",
  metadataBase: new URL("https://re-test.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://re-test.dev",
    title: "re-{test} | Software Quality Engineering Services",
    description: "High-skilled engineering outsourcing services using a distributed Agile model. We bridge the gap between code complete and release ready.",
    siteName: "re-{test}",
    images: [
      {
        url: "/og-image.png", // Placeholder, user should add this file
        width: 1200,
        height: 630,
        alt: "re-{test} - Software Quality Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "re-{test} | Software Quality Engineering Services",
    description: "High-skilled engineering outsourcing services using a distributed Agile model. Manual, Automation, Security, and Performance Testing.",
    images: ["/og-image.png"], // Reuse OG image for Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://re-test.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-gray-100 relative`}
      >
        <JsonLd />
        <BackToTop />
        <ScrollLines />
        <Navbar />
        <MainLayout>
          {children}
        </MainLayout>
        <Footer />
      </body>
    </html>
  );
}
