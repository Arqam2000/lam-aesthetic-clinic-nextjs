import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lam Aesthetic Clinic",
  description: "Welcome to Lam Aesthetic Clinic. Your destination for safe, effective, and elegant facial rejuvenation treatments. Specializing in Botox, Dermal Fillers, and Skin Boosters, we help you look and feel your best.",
  keywords: "lam aesthetics, beauty clinic, aesthetics,lam,leeds,dr.lam, clinic,uk,aesthetic,beauty,tooba,lip fillers ,wrinkle , anti wrinkle, anti-wrinkle, botox, dermal , dermal fillers,profhilo, eyebrow lift,alwoodley leeds,alwoodley, toobasharaf,lam aesthetics studio,aesthetics studio,studio, non-surgical ,eyebrows,skin , hyaluronic, skin treatment, anti wrinkle injections,lip, aesthetic in leeds, medical spa",
  icons: {
    icon: '/lam-aesthetic-studio.avif', // Path to your favicon in the public directory
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
