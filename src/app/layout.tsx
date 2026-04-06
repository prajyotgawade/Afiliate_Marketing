import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "NEXORA | Curated Premium Tech & Lifestyle Gear",
  description: "Discover expertly reviewed gadgets, premium lifestyle gear, and the best deals across the web. Hand-picked for the modern enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {/* Fixed Background for Scroll-Safe Gradients */}
        <div className="fixed inset-0 z-0 bg-gradient-premium pointer-events-none" />
        <div className="relative z-10 w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
