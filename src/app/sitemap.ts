import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteURL = process.env.SITE_URL;

  if (process.env.NEXT_PUBLIC_ENV !== "production") {
    return [];
  }

  return [
    {
      url: `${siteURL}/`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 1,
    },
    {
      url: `${siteURL}/access-towers/north-tower`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.8,
    },
    {
      url: `${siteURL}/access-towers/south-tower`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.8,
    },
    {
      url: `${siteURL}/access-towers/west-tower`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.8,
    },
    {
      url: `${siteURL}/access-towers/experiences`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.8,
    },
    {
      url: `${siteURL}/access-towers/facilities`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.8,
    },
    {
      url: `${siteURL}/about-us/our-journey`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.8,
    },
    {
      url: `${siteURL}/about-us/careers`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.8,
    },
    {
      url: `${siteURL}/news-and-events`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.8,
    },
    {
      url: `${siteURL}/contact`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.8,
    },
    {
      url: `${siteURL}/news-and-events/the-importance-of-fire-warden-training`,
      lastModified: "2026-10-01T04:25:57+00:00",
      priority: 0.64,
    },
  ];
}
