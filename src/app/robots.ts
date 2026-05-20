import type { MetadataRoute } from 'next';

/**
 * robots.txt — allow all public routes, point to sitemap.
 * Privacy + Terms pages are noindex (set per-page).
 */
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lockandlambert.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
