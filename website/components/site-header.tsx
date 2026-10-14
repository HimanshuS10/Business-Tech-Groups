import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper">
      <a
        href="#content"
        className="absolute left-4 top-3 z-50 -translate-y-24 bg-paper px-4 py-2 text-sm focus:translate-y-0"
      >
        Skip to content
      </a>
      <Container className="relative flex h-[5.5rem] items-center justify-between gap-4 xl:h-24">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/brand/btg-logo.png"
            alt=""
            width={152}
            height={152}
            priority
            className="h-16 w-16 shrink-0 bg-transparent xl:h-[4.75rem] xl:w-[4.75rem]"
          />
          <span className="max-w-[9.75rem] text-balance text-[15px] font-semibold leading-tight tracking-[-0.03em] text-ink min-[420px]:max-w-[14rem] min-[420px]:text-base sm:max-w-none xl:whitespace-nowrap xl:text-[17px]">
            Business Technologies Guelph
          </span>
        </Link>
        <SiteNav />
      </Container>
    </header>
  );
}
