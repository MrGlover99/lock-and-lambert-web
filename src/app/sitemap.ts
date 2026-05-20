import type { MetadataRoute } from 'next';
import { ALL_SLUGS } from '@/lib/properties';

/**
 * Sitemap — generated at build time. Used for Google Search Console
 * submission post-launch.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lockandlambert.com';
  const now = new Date();

  const staticRoutes = ['', '/stay'].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const propertyRoutes = ALL_SLUGS.map((slug) => ({
    url: `${base}/properties/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
