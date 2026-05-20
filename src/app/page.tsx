// Home page (/) — Milestone 3 build target.
// Foundation placeholder so the scaffold deploys cleanly.

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-xl">
        <p className="wordmark text-xs text-stone tracking-wordmark mb-6">LOCK &amp; LAMBERT</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-6 leading-tight">
          A place at the lock. A place on Lambert.
        </h1>
        <p className="text-stone">
          Three places to land. Two banks of the Delaware. One bridge between.
        </p>
        <p className="mt-12 text-xs text-stone uppercase tracking-button">
          Site coming together — milestone 1 of 6
        </p>
      </div>
    </main>
  );
}
