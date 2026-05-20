import Link from 'next/link';

// 404 — copy locked in v2 copy doc Microcopy table: "That door's not here."
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-cream">
      <div className="text-center max-w-md">
        <p className="font-display italic text-copper text-2xl mb-4">404</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-8 leading-tight">
          That door&apos;s not here.
        </h1>
        <Link
          href="/"
          className="inline-block bg-river text-cream px-6 py-3 text-sm tracking-button uppercase hover:bg-ink transition-colors duration-200"
        >
          Back to the rooms
        </Link>
      </div>
    </main>
  );
}
