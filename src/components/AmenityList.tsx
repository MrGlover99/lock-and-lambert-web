import type { AmenityGroup } from '@/lib/properties';

/**
 * AmenityList — grouped amenity callouts per v2 spec §3.3 §4, expanded
 * post-launch to surface the full Airbnb amenity inventory in brand-voiced,
 * categorized form.
 *
 * Per v2 §4.5: no icons (icons feel templated — let the words do the work).
 * Per L&L voice rules: ingredient-list rhythm, separator " · ", no
 * over-explanation. Categories use small caps in Stone, items in Ink.
 */

interface AmenityListProps {
  amenities: AmenityGroup[];
  className?: string;
}

export function AmenityList({ amenities, className = '' }: AmenityListProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 ${className}`.trim()}>
      {amenities.map((group) => (
        <div key={group.group}>
          <h3 className="text-xs uppercase tracking-button text-stone mb-3">{group.group}</h3>
          <ul className="font-sans text-sm sm:text-base text-ink leading-relaxed space-y-1">
            {group.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
