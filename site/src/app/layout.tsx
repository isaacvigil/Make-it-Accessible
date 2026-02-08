import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Make your vibe code more accessible",
  description:
    "Accessibility guidelines and patterns for building WCAG 2.2 AA compliant HTML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="fixed left-0 z-50 -translate-y-full bg-white px-4 py-2 text-sm font-medium text-black underline transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
