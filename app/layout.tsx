import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

/* Display font — Syne: wide geometric, ultra-modern at large sizes */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* Body font — Inter: clean, neutral, highly readable */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nexluma | Arshman Ahmad — Full-Stack Developer & Automation Expert",
    template: "%s | Nexluma",
  },
  description:
    "Nexluma — Premium web development led by Arshman Ahmad. 4+ years of expertise in MERN stack, Python automation, FastAPI, LangChain, LangGraph, and Shopify API integration. Available for freelance and full-time projects.",
  keywords: [
    "Nexluma",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Automation",
    "Node.js",
    "FastAPI",
    "LangChain",
    "LangGraph",
    "Shopify API",
    "Payment Gateway Integration",
    "Web Developer Pakistan",
    "Arshman Ahmad",
    "Freelance Developer",
    "Web Development Agency",
    "Software Development Agency",
  ],
  authors: [{ name: "Arshman Ahmad", url: "https://github.com/arshmanahmad" }],
  creator: "Arshman Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nexluma | Arshman Ahmad — Full-Stack Developer & Automation Expert",
    description:
      "Premium web development — MERN stack, Python automation, FastAPI, LangChain, and Shopify API integration.",
    siteName: "Nexluma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexluma | Arshman Ahmad — Full-Stack Developer",
    description:
      "Premium web development — MERN stack, Python automation, FastAPI, LangChain.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
