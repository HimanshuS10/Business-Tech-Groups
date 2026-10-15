/** Shown while a route's content streams in: three softly bouncing dots. */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center bg-cream"
    >
      <span className="sr-only">Loading</span>
      <span aria-hidden className="flex items-center gap-2">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="loading-dot h-2.5 w-2.5 rounded-full bg-ink"
            style={{ animationDelay: `${dot * 160}ms` }}
          />
        ))}
      </span>
    </div>
  );
}
