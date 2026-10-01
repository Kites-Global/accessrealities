import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const environment = process.env.NEXT_PUBLIC_ENV;
  const siteURL = process.env.SITE_URL;

  if (environment !== "production") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteURL}/sitemap.xml`,
  };
}
