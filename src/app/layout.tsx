import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Pixelora — Design, Print & Inspire",
  description:
    "Pixelora is a premium creative design and printing studio based in Nairobi. We transform bold ideas into stunning physical products — custom clothing, branding, merchandise, and creative designs.",
  keywords: "design studio, printing, branding, merchandise, custom clothing, Pixelora, creative agency, Nairobi",
  openGraph: {
    title: "Pixelora — Design, Print & Inspire",
    description: "Your creative partner for clothing printing, branding, merchandise & custom designs.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelora — Design, Print & Inspire",
    description: "Premium creative design and printing studio based in Nairobi.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Syne — bold, geometric, premium agency headings */}
        {/* DM Sans — clean, modern, highly legible body text */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0D0118",
              color: "#E2E8F0",
              border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: "14px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.1)",
              padding: "14px 18px",
            },
            success: { iconTheme: { primary: "#7C3AED", secondary: "#fff" } },
            error:   { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
          }}
        />
      </body>
    </html>
  );
}
