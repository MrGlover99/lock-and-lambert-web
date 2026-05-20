/**
 * AmenityList — sparse text strip per v2 spec §3.3 §4.
 * Single-line callouts. No icons (icons feel templated — let the words do
 * the work). Separator: " · " (interpunct).
 *
 * Inter 400 / 14px, Stone color for the separators, Ink for the words.
 */

interface AmenityListProps {
  amenities: string[];
  className?: string;
}

export function AmenityList({ amenities, className = '' }: AmenityListProps) {
  return (
    <div
      className={`font-sans text-sm sm:text-base text-ink leading-relaxed ${className}`.trim()}
    >
      {amenities.map((item, i) => (
        <span key={i}>
          <span>{item}</span>
          {i < amenities.length - 1 && (
            <span className="mx-2 text-stone" aria-hidden="true">
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
