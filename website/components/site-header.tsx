import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur-md">
      <a
        href="#content"
        className="absolute left-4 top-3 z-50 -translate-y-24 bg-paper px-4 py-2 text-sm focus:translate-y-0"
      >
        Skip to content
      </a>
      <Container className="relative flex h-[5.25rem] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/brand/btg-logo.png"
            alt=""
            width={64}
            height={64}
            priority
            className="h-14 w-14 shrink-0 md:h-16 md:w-16"
          />
          <span className="text-[13px] leading-tight tracking-[-0.04em] md:text-sm">
            <span className="block">Business Technologies</span>
            <span className="block text-pine">Guelph</span>
          </span>
        </Link>
        <SiteNav />
      </Container>
    </header>
  );
}
