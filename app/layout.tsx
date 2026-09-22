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

const SITE_URL = "https://www.growstackup.com";
const FOUNDER_URL = "https://www.growstackup.com/founder";
const LINKEDIN_URL = "https://www.linkedin.com/in/raza-hussain-niazi-727993206";

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
        "GrowStackUp turns public B2B buying signals into ready-to-act prospects matched to relevant decision-makers.",
      slogan: "Know who's ready to buy — before your competitors do.",
      areaServed: "US",
      founder: { "@id": `${FOUNDER_URL}/#person` },
      sameAs: [LINKEDIN_URL],
      knowsAbout: [
        "B2B lead generation",
        "staffing agency leads",
        "recruiting business development",
        "managed IT leads for MSPs",
        "B2B buying signals",
        "decision-maker research",
        "account-based prospecting",
      ],
    },
    {
      "@type": "Person",
      "@id": `${FOUNDER_URL}/#person`,
      name: "Raza Hussain Niazi",
      jobTitle: "Founder",
      url: LINKEDIN_URL,
      sameAs: [LINKEDIN_URL],
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsAbout: [
        "B2B sales",
        "lead generation",
        "account-based prospecting",
        "buying signals",
        "sales automation",
        "AI agents",
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
        "Prospects built from observable hiring activity and matched to relevant hiring decision-makers.",
    },
    {
      "@type": "Service",
      name: "Managed IT leads for MSPs",
      serviceType: "B2B lead generation",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "US",
      audience: { "@type": "Audience", audienceType: "MSPs and IT service firms" },
      description:
        "Prospects built from public technology, growth, security and compliance signals.",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "B2B Lead Generation for Staffing Agencies & MSPs | GrowStackUp",
    template: "%s · GrowStackUp",
  },
  description:
    "GrowStackUp turns live B2B buying signals into ready-to-act prospects for staffing agencies and MSPs — with the company, signal and relevant decision-maker in one pipeline.",
  authors: [{ name: "Raza Hussain Niazi", url: LINKEDIN_URL }],
  creator: "Raza Hussain Niazi",
  publisher: "GrowStackUp",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "GrowStackUp",
    title: "B2B Lead Generation for Staffing Agencies & MSPs | GrowStackUp",
    description:
      "Find companies showing live buying signals and map them to the decision-maker. Built for staffing agencies, recruiters, MSPs and IT firms.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation for Staffing Agencies & MSPs | GrowStackUp",
    description:
      "Turn hiring, funding, expansion, technology and other company signals into ready-to-act B2B prospects.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
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
