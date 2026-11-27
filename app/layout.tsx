import type { Metadata } from "next";
import "./globals.css";
import "./mobile.css";
import "./original.css";
import "./original-refinements.css";
import "./header-original.css";
import "./header-final.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Lumaveris", template: "%s | Lumaveris" },
  description: "Strategy, transformation, technology, and data advisory."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" /></head><body id="top"><Header /><main>{children}</main><Footer /></body></html>;
}
