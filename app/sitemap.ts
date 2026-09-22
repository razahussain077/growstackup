import type { MetadataRoute } from "next";

const BASE = "https://www.growstackup.com";
const LAST_MODIFIED = new Date("2026-09-22T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/staffing-agency-leads`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/msp-leads`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/b2b-buying-signals`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/founder`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
  ];
}
