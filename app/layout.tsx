import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Arshman Ahmad — Full Stack Developer | React, Next.js, AI & SaaS",
    template: "%s | Arshman Ahmad",
  },
  description:
    "Arshman Ahmad — Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, AI Integrations, Business Automation, SaaS Development, and CRM Systems. Available for freelance projects.",
  keywords: [
    "Arshman Ahmad",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "AI Integration",
    "Business Automation",
    "SaaS Development",
    "CRM Systems",
    "Freelance Developer",
    "Web Developer Pakistan",
    "LangChain Developer",
    "Scalable Web Applications",
  ],
  authors: [{ name: "Arshman Ahmad", url: "https://github.com/arshmanahmad" }],
  creator: "Arshman Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Arshman Ahmad — Full Stack Developer",
    description:
      "Building scalable web applications, AI solutions & business automation for startups and businesses.",
    siteName: "Arshman Ahmad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshman Ahmad — Full Stack Developer",
    description:
      "React, Next.js, TypeScript, Node.js, AI Integrations & Business Automation.",
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
    icon: "/assets/main-content/logo.png",
    shortcut: "/assets/main-content/logo.png",
    apple: "/assets/main-content/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#141E2E",
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
      <head>
        <link rel="apple-touch-icon" href="/assets/main-content/logo.png" />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
