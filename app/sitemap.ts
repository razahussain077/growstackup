import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://growstackup.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#how`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#signals`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/#pipeline`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#sample`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
