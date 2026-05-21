import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_SLUGS, getProperty, type Property } from '@/lib/properties';
import { PhotoCarousel, type CarouselPhoto } from '@/components/PhotoCarousel';
import { AmenityList } from '@/components/AmenityList';
import { WhereYoullBe } from '@/components/WhereYoullBe';
import { GuestyBookingWidget } from '@/components/GuestyBookingWidget';
import { CrossLink } from '@/components/CrossLink';
import { EmailCapture } from '@/components/EmailCapture';
import { PhotoGallery } from '@/components/PhotoGallery';
import { ReviewSection } from '@/components/ReviewSection';
import { JsonLd, SITE_URL } from '@/components/JsonLd';

/**
 * Per-property detail page. Per v2 spec §3.3, sections:
 *   1. Hero photo carousel (full-bleed)
 *   2. Headline + fact strip
 *   3. Body copy (Cormorant 22px / 1.6 — editorial register)
 *   4. Amenities (sparse text strip)
 *   5. Where you'll be (map + prose)
 *   6. Per-property booking widget (sticky on desktop right column)
 *   7. Reviews — guest rating + verbatim quotes (TASK-046 SEO follow-on)
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
    description: property.seoDescription,
    openGraph: {
      title: `${property.title} — Lock & Lambert`,
      description: property.seoDescription,
      type: 'website',
      images: [{ url: `/photos/${property.slug}/${property.photoSlugs[0]}.jpg` }],
    },
  };
}

/** Postal addresses for schema.org markup, keyed by town. */
const SCHEMA_ADDRESSES: Record<
  Property['town'],
  { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string }
> = {
  'New Hope, PA': {
    streetAddress: '137 South Main Street',
    addressLocality: 'New Hope',
    addressRegion: 'PA',
    postalCode: '18938',
  },
  'Lambertville, NJ': {
    streetAddress: '13 Lambert Lane',
    addressLocality: 'Lambertville',
    addressRegion: 'NJ',
    postalCode: '08530',
  },
};

/** Build the LodgingBusiness + BreadcrumbList JSON-LD for a property. */
function propertyJsonLd(property: Property) {
  const url = `${SITE_URL}/properties/${property.slug}`;
  const lodging = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${url}#lodging`,
    name: property.title,
    description: property.seoDescription,
    url,
    image: `${SITE_URL}/photos/${property.slug}/${property.photoSlugs[0]}.jpg`,
    address: {
      '@type': 'PostalAddress',
      ...SCHEMA_ADDRESSES[property.town],
      addressCountry: 'US',
    },
    petsAllowed: true,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Self check-in', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Washer', value: true },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: property.rating.value,
      reviewCount: property.rating.count,
      bestRating: 5,
    },
    ...(property.reviews.length > 0
      ? {
          review: property.reviews.map((r) => ({
            '@type': 'Review',
            reviewBody: r.body,
            author: { '@type': 'Person', name: r.author },
            reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
          })),
        }
      : {}),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Lock & Lambert', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Places', item: `${SITE_URL}/stay` },
      { '@type': 'ListItem', position: 3, name: property.shortTitle },
    ],
  };
  return { lodging, breadcrumb };
}

export default function PropertyDetailPage({ params }: PageProps) {
  const property = getProperty(params.slug);
  if (!property) notFound();

  const { lodging, breadcrumb } = propertyJsonLd(property);

  const carouselPhotos: CarouselPhoto[] = property.photoSlugs.map((photoSlug) => ({
    src: `/photos/${property.slug}/${photoSlug}.jpg`,
    alt: `${property.shortTitle} — ${photoSlug.replace(/-/g, ' ')}`,
    placeholderCaption: `${property.shortTitle} — ${photoSlug.replace(/-/g, ' ')}`,
  }));

  return (
    <>
      <JsonLd data={lodging} />
      <JsonLd data={breadcrumb} />

      {/* Breadcrumb-ish anchor for context */}
      <div className="bg-cream border-b border-stone/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-xs uppercase tracking-button text-stone">
          <Link href="/stay" className="hover:text-copper-deep transition-colors">
            Places
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
              <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone">
                <span className="text-copper" aria-hidden="true">★</span>
                <span className="font-sans font-medium text-ink">
                  {property.rating.value.toFixed(property.rating.value % 1 === 0 ? 1 : 2)}
                </span>
                <span aria-hidden="true">·</span>
                <span>{property.rating.count} stays</span>
                <span aria-hidden="true">·</span>
                <span>{property.rating.badge} on Airbnb</span>
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

      {/* Section 7 — Reviews (renders only when quotes are on file) */}
      <ReviewSection reviews={property.reviews} />

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
