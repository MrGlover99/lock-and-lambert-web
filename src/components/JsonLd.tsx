/**
 * JsonLd — renders a schema.org JSON-LD <script> tag.
 *
 * Used for SEO and LLM / answer-engine discoverability: Organization +
 * WebSite sitewide, LodgingBusiness per property (with aggregateRating
 * and reviews), BreadcrumbList on property pages, and FAQPage on /faq.
 *
 * Added under the TASK-046 SEO follow-on (2026-05-20).
 */

export const SITE_URL = 'https://lockandlambert.com';

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input flows here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
