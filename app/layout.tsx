import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-display",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = "https://growstackup.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GrowStackUp — Know who's ready to buy before your competitors do",
    template: "%s · GrowStackUp",
  },
  description:
    "GrowStackUp delivers a ready-to-act sales pipeline. Lead generation for staffing agencies and managed IT leads for MSPs — companies showing buying signals right now, each matched with the decision-maker's verified contact.",
  keywords: [
    "lead generation for staffing agencies",
    "BD leads for recruiters",
    "managed IT leads for MSPs",
    "lists of companies actively hiring",
    "B2B prospect lists",
    "buying signals",
    "sales pipeline",
  ],
  authors: [{ name: "GrowStackUp" }],
  creator: "GrowStackUp",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "GrowStackUp",
    title: "GrowStackUp — Know who's ready to buy before your competitors do",
    description:
      "A ready-to-act B2B sales pipeline. Companies actively hiring or shopping for IT, each matched to the decision-maker's verified contact. Built for recruiters and MSPs.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowStackUp — Know who's ready to buy before your competitors do",
    description:
      "A ready-to-act B2B sales pipeline for staffing agencies and MSPs. Real buying signals, matched to verified decision-maker contacts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#f3eee2",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GrowStackUp",
  url: SITE_URL,
  description:
    "GrowStackUp delivers a ready-to-act B2B sales pipeline: companies showing buying signals matched to the decision-maker's verified contact, for staffing agencies and MSPs.",
  slogan: "Know who's ready to buy — before your competitors do.",
  areaServed: "US",
  knowsAbout: [
    "lead generation for staffing agencies",
    "BD leads for recruiters",
    "managed IT leads for MSPs",
    "lists of companies actively hiring",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="paper-field grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
