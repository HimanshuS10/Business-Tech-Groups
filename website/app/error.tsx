"use client";

import { Container } from "@/components/container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="py-24">
      <h1 className="text-4xl tracking-[-0.05em]">This page didn&apos;t load.</h1>
      <p className="mt-4 max-w-lg text-pine">
        The rest of the site is still available. Try this page again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex min-h-12 items-center bg-ink px-5 text-sm text-cream"
      >
        Try again
      </button>
    </Container>
  );
}
