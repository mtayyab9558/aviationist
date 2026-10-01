import type { Metadata } from "next";
import {
  Encode_Sans_Condensed,
  Inter,
  Open_Sans,
  Oxygen,
  Work_Sans,
} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

// The live site uses these five families: Oxygen (body), Work Sans (headings),
// Encode Sans Condensed (meta / buttons), Inter (footer + newsletter copy) and
// Open Sans (copyright line).
const oxygen = Oxygen({
  variable: "--font-oxygen",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const encodeSansCondensed = Encode_Sans_Condensed({
  variable: "--font-encode",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Aviationist: Military Aviation & Defense News",
  description:
    "The Aviationist is a leading source for military aviation, defense, and intelligence news.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oxygen.variable} ${workSans.variable} ${encodeSansCondensed.variable} ${inter.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
