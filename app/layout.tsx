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
  title: "Lam Aesthetic Clinic Leeds | Skin Care, Botox & Anti-Wrinkle Experts UK",
  description: "We are one of the #1 best leading clinic for tailored non-surgical cosmetic treatments in Leeds. We specialize in personalized aesthetic treament designed to meet your unique skin goals. Enjoy a free, no-obligation skin consultation with our expert skincare specialists team and experience the highest standards of care in the most exclusive day spa setting — all while keeping treatments affordable and accessible. We are best known for Botox, Lip Fillers, Dermal Fillers, Anti Wrinkles, Eyebrows Lift, Bunny lines treatment, Profhilo/skin booster Treatment, Hayfever vaccine and Dissolving filler injection.",
  keywords: "lam aesthetics, beauty clinic, aesthetics,lam,leeds,dr.lam, clinic,uk,aesthetic,beauty,tooba,lip fillers ,wrinkle , anti wrinkle, anti-wrinkle, botox, dermal , dermal fillers,profhilo, eyebrow lift,alwoodley leeds,alwoodley, toobasharaf,lam aesthetics clinic,aesthetics clinic, non-surgical ,eyebrows,skin , hyaluronic, skin treatment, anti wrinkle injections,lip, aesthetic in leeds, medical spa , near me , cosmetic clinic , facial aesthetics, skin clinic , lip enhancement , facial fillers , lip augmentation , facial treatments , skin care , aesthetic treatments , cosmetic treatments , dermal filler injections , botox injections , wrinkle reduction , skin rejuvenation , lip filler injections , non-surgical treatments , aesthetic medicine , beauty treatments , skin health , anti-aging treatments , cosmetic procedures , facial rejuvenation , skin tightening , lip plumping , wrinkle smoothing , dermal filler treatment, hayfever vaccine, dissolving filler injection",
  icons: {
    icon: '/lam-aesthetic-studio.avif', // Path to your favicon in the public directory
  },
  alternates: {
    canonical: "https://lamaesthetic.co.uk",
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
