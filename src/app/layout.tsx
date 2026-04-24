import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pixelora — Design, Print & Inspire",
  description:
    "Pixelora is a creative design and printing company. We transform ideas into stunning products — from custom clothing and branding to merchandise and creative designs.",
  keywords: "design, printing, branding, merchandise, custom clothing, Pixelora",
  openGraph: {
    title: "Pixelora — Design, Print & Inspire",
    description: "Your creative partner for clothing printing, branding, merchandise & custom designs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
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
            style: {
              background: "#1a0533",
              color: "#fff",
              border: "1px solid rgba(168,85,247,0.4)",
              borderRadius: "12px",
              fontFamily: "'Inter', sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
