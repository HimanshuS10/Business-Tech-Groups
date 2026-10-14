"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/site";

const links = [{ href: "/", label: "Home" }, ...navigation];

function partnerClass(active: boolean) {
  return `inline-flex min-h-11 items-center justify-center rounded-sm bg-ink px-5 text-sm font-medium tracking-[-0.03em] text-paper transition-colors duration-200 hover:bg-pine ${
    active ? "ring-2 ring-ink ring-offset-2" : ""
  }`;
}

function itemClass(active: boolean) {
  return `text-[15px] font-medium tracking-[-0.02em] transition-colors duration-200 ${
    active
      ? "text-ink underline decoration-ink decoration-2 underline-offset-8"
      : "text-ink hover:text-pine"
  }`;
}

export function SiteNav() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const partnerActive = pathname === "/partner";
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    document.addEventListener("keydown", onKey);
    menuRef.current?.querySelector("a")?.focus();
    const menuButton = menuButtonRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      menuButton?.focus();
    };
  }, [open]);

  return (
    <>
      <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
        {links.map((item) => {
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
        <Link
          href="/partner"
          aria-current={partnerActive ? "page" : undefined}
          className={`${partnerClass(partnerActive)} ml-1`}
        >
          Partner With Us
        </Link>
      </nav>

      <button
        ref={menuButtonRef}
        type="button"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 xl:hidden"
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
          ref={menuRef}
          id="mobile-navigation"
          aria-label="Mobile"
          className="fixed inset-x-0 top-[5.5rem] z-30 border-b border-ink/10 bg-paper px-5 py-6 xl:hidden"
        >
          <ul className="flex flex-col">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-ink/10">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 text-lg font-medium tracking-[-0.03em] ${
                      active ? "text-ink underline decoration-ink decoration-2 underline-offset-4" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/partner"
            aria-current={partnerActive ? "page" : undefined}
            className={`${partnerClass(partnerActive)} mt-6 w-full`}
          >
            Partner With Us
          </Link>
        </nav>
      ) : null}
    </>
  );
}
