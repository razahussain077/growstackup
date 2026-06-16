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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Paste codes from Google Search Console / Bing Webmaster into Vercel env vars.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : {},
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#f3eee2",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "GrowStackUp",
      url: SITE_URL,
      logo: `${SITE_URL}/opengraph-image.png`,
      email: "hello@growstackup.com",
      description:
        "GrowStackUp delivers a ready-to-act B2B sales pipeline: companies showing buying signals matched to the decision-maker's verified contact, for staffing agencies and MSPs.",
      slogan: "Know who's ready to buy — before your competitors do.",
      areaServed: "US",
      knowsAbout: [
        "lead generation for staffing agencies",
        "BD leads for recruiters",
        "managed IT leads for MSPs",
        "lists of companies actively hiring",
        "B2B prospect lists",
        "buying signals",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "GrowStackUp",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      name: "Lead generation for staffing agencies",
      serviceType: "B2B lead generation",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "US",
      audience: { "@type": "Audience", audienceType: "Staffing and recruiting agencies" },
      description:
        "Companies actively hiring in your niche and metro, each matched to the hiring decision-maker's verified contact — BD leads for recruiters, refreshed daily.",
    },
    {
      "@type": "Service",
      name: "Managed IT leads for MSPs",
      serviceType: "B2B lead generation",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "US",
      audience: { "@type": "Audience", audienceType: "MSPs and IT service firms" },
      description:
        "Local businesses showing buying signals for managed IT and cybersecurity, each matched to the decision-maker's verified contact.",
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
