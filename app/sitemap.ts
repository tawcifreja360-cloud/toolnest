import type { MetadataRoute } from "next";

const staticRoutes = ["/"];
const toolPages: string[] = [];

const ensureAbsoluteUrl = (url: string) => {
  if (!url) {
    return "http://localhost:3000";
  }

  if (url.startsWith("http")) {
    return url;
  }

  return `https://${url}`;
};

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return ensureAbsoluteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL_URL) {
    return ensureAbsoluteUrl(process.env.VERCEL_URL);
  }

  return "http://localhost:3000";
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const routes = [...staticRoutes, ...toolPages.map((slug) => `/tools/${slug}`)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
