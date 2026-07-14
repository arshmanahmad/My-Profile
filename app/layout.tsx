import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {
  seoTitle,
  seoDescription,
  seoKeywords,
  siteUrl,
} from "@/lib/seo";
import { personalInfo, brandAssets } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const ogImage = `${siteUrl}${brandAssets.banner}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: `%s | ${personalInfo.brandName}`,
  },
  description: seoDescription,
  keywords: [...seoKeywords],
  applicationName: personalInfo.brandName,
  authors: [
    {
      name: personalInfo.name,
      url: personalInfo.github,
    },
    {
      name: personalInfo.brandName,
      url: siteUrl,
    },
  ],
  creator: personalInfo.name,
  publisher: personalInfo.brandName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: seoTitle,
    description: seoDescription,
    siteName: personalInfo.brandName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.brandName}: Web & App Development Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [ogImage],
    creator: "@ArshmanDev",
    site: "@ArshmanDev",
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
    icon: brandAssets.logo,
    shortcut: brandAssets.logo,
    apple: brandAssets.logo,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#070A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <link rel="apple-touch-icon" href={brandAssets.logo} />
      </head>
      <body
        className={`${body.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
