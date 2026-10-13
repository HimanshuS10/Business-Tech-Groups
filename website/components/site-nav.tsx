"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/site";
import { buttonClasses } from "@/components/button-link";

function itemClass(active: boolean) {
  return `text-sm tracking-[-0.03em] transition-colors duration-200 ${
    active ? "text-ink" : "text-pine hover:text-ink"
  }`;
}

export function SiteNav() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
        {navigation.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={itemClass(active)}
            >
              {item.label}
            </Link>
          );
        })}
        <Link href="/partner" className={buttonClasses("primary", "min-h-10 px-4")}>
          Partner With Us
        </Link>
      </nav>

      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center border border-ink/15 md:hidden"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpenPath(open ? null : pathname)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden className="flex w-4 flex-col gap-1.5">
          <span className={`h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </span>
      </button>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="fixed inset-x-0 top-[5.25rem] z-30 border-b border-ink/10 bg-cream px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="block text-2xl tracking-[-0.05em]"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/partner" className={buttonClasses("primary", "mt-6 w-full")}>
            Partner With Us
          </Link>
        </nav>
      ) : null}
    </>
  );
}
