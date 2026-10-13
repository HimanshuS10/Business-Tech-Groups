import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { club, corporateContact, navigation, socials } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="on-ink bg-ink text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/btg-logo.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 bg-cream"
            />
            <p className="text-sm leading-tight tracking-[-0.04em]">
              Business Technologies
              <span className="block text-cream/70">Guelph</span>
            </p>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/75">
            {club.description}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-serif text-lg italic">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-cream/80 hover:text-cream">
                Home
              </Link>
            </li>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/80 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/partner" className="text-cream/80 hover:text-cream">
                Partner With Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-serif text-lg italic">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-cream"
                >
                  {social.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-cream/75">
            Corporate inquiries:{" "}
            <a
              href={`mailto:${corporateContact.email}`}
              className="text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
            >
              {corporateContact.name}
            </a>
            , {corporateContact.role}
          </p>
        </div>
      </Container>
      <div className="border-t border-cream/15">
        <Container className="flex flex-col gap-2 py-5 text-xs tracking-[-0.02em] text-cream/60 sm:flex-row sm:justify-between">
          <p>Student-led at the {club.university}</p>
          <p>© 2026 {club.name}</p>
        </Container>
      </div>
    </footer>
  );
}
