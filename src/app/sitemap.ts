import type { MetadataRoute } from "next";
import { profile } from "@/content/site";
import { work } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, priority: 1 },
    ...work.map((w) => ({ url: `${profile.siteUrl}/work/${w.slug}`, priority: 0.8 })),
  ];
}
