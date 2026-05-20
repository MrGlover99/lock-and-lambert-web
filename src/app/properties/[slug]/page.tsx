import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_SLUGS, getProperty } from '@/lib/properties';
import { PhotoCarousel, type CarouselPhoto } from '@/components/PhotoCarousel';
import { AmenityList } from '@/components/AmenityList';
import { WhereYoullBe } from '@/components/WhereYoullBe';
import { GuestyBookingWidget } from '@/components/GuestyBookingWidget';
import { CrossLink } from '@/components/CrossLink';
import { EmailCapture } from '@/components/EmailCapture';
import { PhotoGallery } from '@/components/PhotoGallery';

/**
 * Per-property detail page. Per v2 spec §3.3, sections:
 *   1. Hero photo carousel (full-bleed)
 *   2. Headline + fact strip
 *   3. Body copy (Cormorant 22px / 1.6 — editorial register)
 *   4. Amenities (sparse text strip)
 *   5. Where you'll be (map + prose)
 *   6. Per-property booking widget (sticky on desktop right column)
 *   7. Reviews — DEFERRED to v1.1 (needs Guesty review syndication setup)
 *   8. Cross-link to other properties
 *
 * Plus an EmailCapture row before the cross-link.
 */

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const property = getProperty(params.slug);
  if (!property) return {};
  return {
    title: property.title,
    description: `${property.cardHeadline} ${property.factStrip}`,
    openGraph: {
      title: `${property.title} — Lock & Lambert`,
      description: property.cardHeadline,
      type: 'website',
    },
  };
}

export default function PropertyDetailPage({ params }: PageProps) {
  const property = getProperty(params.slug);
  if (!property) notFound();

  const carouselPhotos: CarouselPhoto[] = property.photoSlugs.map((photoSlug) => ({
    src: `/photos/${property.slug}/${photoSlug}.jpg`,
    alt: `${property.shortTitle} — ${photoSlug.replace(/-/g, ' ')}`,
    placeholderCaption: `${property.shortTitle} — ${photoSlug.replace(/-/g, ' ')}`,
  }));

  return (
    <>
      {/* Breadcrumb-ish anchor for context */}
      <div className="bg-cream border-b border-stone/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-xs uppercase tracking-button text-stone">
          <Link href="/stay" className="hover:text-copper-deep transition-colors">
            Rooms
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span>{property.shortTitle}</span>
        </div>
      </div>

      {/* Section 1 — Hero carousel */}
      <PhotoCarousel photos={carouselPhotos} propertyName={property.shortTitle} />

      {/* Sections 2–6 — two-column on desktop, stacked on mobile */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left column — copy, amenities */}
          <div className="lg:col-span-2 space-y-12">
            {/* Section 2 — Headline + fact strip */}
            <div>
              <p className="font-display italic text-stone text-base mb-3">{property.town}</p>
              <h1
                className="font-display font-medium text-ink leading-tight mb-4"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
              >
                {property.cardHeadline}
              </h1>
              <p className="font-sans italic text-stone text-base sm:text-lg">
                {property.factStrip}
              </p>
            </div>

            {/* Section 3 — Body copy (editorial Cormorant register) */}
            <div className="prose-editorial text-ink max-w-prose space-y-6">
              {property.detailBody.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Section 4 — Amenities */}
            <div className="border-t border-stone/20 pt-8">
              <h2 className="font-display font-medium text-ink mb-4 text-2xl">What you&apos;ll find</h2>
              <AmenityList amenities={property.amenities} />
            </div>
          </div>

          {/* Right column — sticky booking widget on desktop */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <GuestyBookingWidget property={property} />
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery — masonry, full aspect, lightbox on click */}
      <PhotoGallery photos={carouselPhotos} className="pb-16 sm:pb-20 lg:pb-24" />

      {/* Section 5 — Where you'll be */}
      <WhereYoullBe
        address={property.address}
        town={property.town}
        prose={property.whereYoullBe}
      />

      {/* Email capture */}
      <EmailCapture
        source="property_detail"
        propertySlug={property.slug}
        tone="ink"
      />

      {/* Section 8 — Cross-link */}
      <CrossLink currentSlug={property.slug} />
    </>
  );
}
