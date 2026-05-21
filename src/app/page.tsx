import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { PropertyGrid } from '@/components/PropertyGrid';
import { StorySection } from '@/components/StorySection';
import { EmailCapture } from '@/components/EmailCapture';
import { JsonLd, SITE_URL } from '@/components/JsonLd';

/**
 * Home page (/) — assembles the v2 spec §3.1 sections:
 *   1. Hero — headline + subhead + Find a stay CTA
 *   2. About — editorial brand-voice About block
 *   3. The places — 3-up grid + whole-house link
 *   4. Story teaser — the name's origin, links to /story
 *   5. Email capture — "Coming back? We'll tell you first."
 *   6. Footer — lives in root layout
 *
 * Copy is in the literary boutique voice locked under TASK-046:
 *   /Users/zacharysimmons/The Burgerly/Lock and Lambert/Brand Source of
 *     Truth/01 - Brand Voice and Copy.md
 */

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Lock & Lambert',
  url: SITE_URL,
  logo: `${SITE_URL}/logo/wordmark.png`,
  description:
    'Three places to stay along the Delaware River, in New Hope, Pennsylvania and Lambertville, New Jersey.',
  areaServed: ['New Hope, Pennsylvania', 'Lambertville, New Jersey'],
  sameAs: ['https://lockandlambert.guestybookings.com'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Lock & Lambert',
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      <Hero
        variant="full"
        photoSrc="/photos/brand/home-hero-yard.jpg"
        photoAlt="The Lambert Lane backyard in Lambertville — hydrangeas, fence, and the New Hope-Lambertville Bridge through the trees"
        placeholderCaption="Lambert Lane — the river just past the fence"
        headline={<>A place at the lock. A place on Lambert.</>}
        subhead="Three places to stay along the Delaware — in two old river towns that a single bridge makes one."
        ctaLabel="Find a stay"
        ctaHref="/stay"
        showScrollCue
        priority
      />

      <AboutSection />

      <PropertyGrid />

      <StorySection />

      <EmailCapture source="home_footer" tone="cream" />
    </>
  );
}
