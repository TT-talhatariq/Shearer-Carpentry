import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shearercarpentryinc.com'),
  title: "Shearer Carpentry | Expert Carpentry & Remodeling Services in Plymouth, MN",
  description: "Professional carpentry and remodeling services in Plymouth, MN. Specializing in basement remodeling, bathroom renovation, kitchen remodeling, and custom home construction. Over 18 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer/>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
