/**
 * WhereYoullBe — location block per v2 spec §3.3 §5.
 *
 * Layout: small map + brief location prose. The map is a Mapbox or Google
 * Maps embed styled minimally (desaturated, minimal labels). For v1 launch,
 * we render a styled placeholder with the address — the map embed is a
 * polish task that requires an API key Zach provisions later.
 *
 * Prose copy is locked per property in src/lib/properties.ts whereYoullBe.
 */

interface WhereYoullBeProps {
  /** The address — used in the map placeholder caption */
  address: string;
  /** Town label — for the heading */
  town: string;
  /** Brief location prose — from properties.ts whereYoullBe */
  prose: string;
  className?: string;
}

export function WhereYoullBe({ address, town, prose, className = '' }: WhereYoullBeProps) {
  return (
    <section
      className={`py-16 sm:py-20 ${className}`.trim()}
      aria-labelledby="where-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Prose side */}
          <div>
            <h2
              id="where-heading"
              className="font-display font-medium text-ink mb-4"
              style={{ fontSize: 'clamp(1.625rem, 2.5vw, 2rem)' }}
            >
              Where you&apos;ll be
            </h2>
            <p className="font-display italic text-stone text-base mb-6">{town}</p>
            <p
              className="prose-editorial text-ink max-w-prose"
            >
              {prose}
            </p>
            <p className="mt-6 text-sm font-sans text-stone">{address}</p>
          </div>

          {/* Map slot — placeholder for v1 */}
          <div className="aspect-[4/3] w-full bg-stone/10 border border-stone/30 flex items-center justify-center relative">
            <div className="text-center px-6">
              <p className="font-display italic text-stone text-lg">Map coming</p>
              <p className="font-sans text-xs uppercase tracking-button text-stone mt-2">
                {town}
              </p>
            </div>
            {/*
              Map integration note: drop in a Mapbox Static API call here
              once the env var NEXT_PUBLIC_MAPBOX_TOKEN is provisioned.
              Mapbox style: desaturated mono-light, minimal labels. Pin at
              the property address. Free-tier sufficient for L&L volume.
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
