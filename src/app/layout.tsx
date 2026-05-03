import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Pixelora — Design, Print & Inspire",
  description:
    "Pixelora is a premium creative design and printing studio. We transform ideas into stunning products — custom clothing, branding, merchandise, and creative designs.",
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
    description: "Premium creative design and printing studio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
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
              background: "#0f0024",
              color: "#f1f5f9",
              border: "1px solid rgba(147,51,234,0.35)",
              borderRadius: "12px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.875rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              padding: "12px 16px",
            },
            success: {
              iconTheme: { primary: "#9333ea", secondary: "#fff" },
            },
            error: {
              iconTheme: { primary: "#ef4444", secondary: "#fff" },
            },
          }}
        />
      </body>
    </html>
  );
}
