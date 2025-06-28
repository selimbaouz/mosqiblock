import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import LayoutClient from "@/components/LayoutClient";

const montserrat = Montserrat({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  variable: "--font-ms",
});

export const metadata: Metadata = {
  title: {
    default: "MosqiBlock | The Ultimate Mosquito Protection",
    template: "%s | MosqiBlock"
  },
  description: "MosqiBlock protects your family with advanced, chemical-free mosquito defense. Enjoy peaceful nights and outdoor moments—no bites, no worries.",
  keywords: [
    "mosquito repellent",
    "mosquito killer",
    "UV mosquito trap",
    "chemical-free mosquito protection",
    "outdoor mosquito solution",
    "mosquito lamp",
    "safe mosquito device",
    "family mosquito protection",
    "summer essentials",
    "portable mosquito trap",
    "eco-friendly mosquito solution",
    "mosquito-free home",
    "quiet mosquito killer",
    "mosquito control",
    "mosquito prevention",
    "camping mosquito device"
  ],
  authors: [{ name: "Selimmersive" }],
  creator: "Selimmersive",
  publisher: "Selimmersive",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mosqiblock.com",
    siteName: "MosqiBlock",
    title: "MosqiBlock | The Ultimate Mosquito Protection",
    description: "Enjoy a mosquito-free life with MosqiBlock—advanced UV technology, chemical-free, safe for the whole family. Perfect for home and outdoor adventures.",
    images: [
      {
        url: "https://mosqiblock.com/images/og-mosqiblock.png",
        width: 1200,
        height: 630,
        alt: "MosqiBlock - Advanced Mosquito Protection"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mosqiblock",
    creator: "@mosqiblock",
    title: "MosqiBlock | The Ultimate Mosquito Protection",
    description: "MosqiBlock keeps your family safe from mosquitoes—no chemicals, no noise, just results. Discover the new standard in mosquito defense.",
    images: ["https://mosqiblock.com/images/og-mosqiblock.png"],
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://mosqiblock.com",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat relative bg-background text-foreground`}
      >
        <Providers>
          <LayoutClient>
            {children}
          </LayoutClient>
        </Providers>
      </body>
    </html>
  );
}
