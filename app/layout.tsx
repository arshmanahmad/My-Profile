import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arshman Ahmad | Full-Stack Developer & Automation Expert",
    template: "%s | Arshman Ahmad",
  },
  description:
    "Arshman Ahmad — Full-Stack Developer with 4+ years of expertise in MERN stack, Python automation, FastAPI, LangChain, LangGraph, and Shopify API integration. Available for freelance and full-time projects.",
  keywords: [
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
  ],
  authors: [{ name: "Arshman Ahmad", url: "https://github.com/arshmanahmad" }],
  creator: "Arshman Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Arshman Ahmad | Full-Stack Developer & Automation Expert",
    description:
      "4+ years of expertise in MERN stack, Python automation, FastAPI, LangChain, and Shopify API integration.",
    siteName: "Arshman Ahmad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshman Ahmad | Full-Stack Developer & Automation Expert",
    description:
      "4+ years of expertise in MERN stack, Python automation, FastAPI, LangChain, and Shopify API integration.",
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-icon",
  },
};

export const viewport: Viewport = {
  themeColor: "#020d0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-ocean-900 text-[#f0fdf4] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
