import Link from 'next/link';

// 404 — brand voice, locked under TASK-046.
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-cream">
      <div className="text-center max-w-md">
        <p className="font-display italic text-copper text-2xl mb-4">404</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-6 leading-tight">
          There&apos;s no door here.
        </h1>
        <p className="text-stone mb-8 leading-relaxed">
          The page you were looking for has moved, or never existed. Let us point you back.
        </p>
        <Link
          href="/"
          className="inline-block bg-river text-cream px-6 py-3 text-sm tracking-button uppercase hover:bg-ink transition-colors duration-200"
        >
          Back to Lock &amp; Lambert
        </Link>
      </div>
    </main>
  );
}
