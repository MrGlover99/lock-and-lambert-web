import { PropertyCard } from './PropertyCard';
import { PROPERTIES, type PropertySlug, type Property } from '@/lib/properties';

/**
 * CrossLink — "Other rooms" strip at the bottom of a property detail page,
 * per v2 spec §3.3 §8. Shows two cards for properties other than the
 * current one.
 *
 * Selection rule: prefer same-town first (sister units), then jump across
 * the bridge for variety. The bundle SKU is excluded from cross-links
 * (it's a derivative, not a sibling).
 */

interface CrossLinkProps {
  currentSlug: PropertySlug;
  className?: string;
}

function pickOthers(currentSlug: PropertySlug): Property[] {
  const all = Object.values(PROPERTIES).filter(
    (p) => p.slug !== currentSlug && !p.isBundle,
  );
  const current = PROPERTIES[currentSlug];
  // Prefer one same-town and one across-the-bridge for symmetry
  const sameTown = all.filter((p) => p.town === current.town);
  const otherTown = all.filter((p) => p.town !== current.town);
  const picked: Property[] = [];
  if (sameTown.length > 0) picked.push(sameTown[0]);
  if (otherTown.length > 0) picked.push(otherTown[0]);
  // Fill to 2 if we're short
  while (picked.length < 2 && all.length > picked.length) {
    const next = all.find((p) => !picked.includes(p));
    if (next) picked.push(next);
    else break;
  }
  return picked.slice(0, 2);
}

export function CrossLink({ currentSlug, className = '' }: CrossLinkProps) {
  const others = pickOthers(currentSlug);
  if (others.length === 0) return null;

  return (
    <section
      className={`py-16 sm:py-20 bg-cream border-t border-stone/20 ${className}`.trim()}
      aria-labelledby="other-rooms-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="other-rooms-heading"
          className="font-display font-medium text-ink mb-10 text-center"
          style={{ fontSize: 'clamp(1.625rem, 2.5vw, 2rem)' }}
        >
          The other places
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {others.map((property) => (
            <PropertyCard key={property.slug} property={property} cropAspect="16/9" />
          ))}
        </div>
      </div>
    </section>
  );
}
