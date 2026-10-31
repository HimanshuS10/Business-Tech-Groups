"use client";

import { useEffect, useRef } from "react";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fades `[data-reveal]` elements up as they scroll into view. Anything already
 * on screen when the page loads is left as is, so nothing flashes; content
 * stays visible if JavaScript never runs.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-shown", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const track = (scope: ParentNode) =>
      scope.querySelectorAll("[data-reveal]:not([data-shown])").forEach((el) => observer.observe(el));

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) el.setAttribute("data-shown", "");
    });
    root.classList.add("reveal-ready");
    track(document);

    // Client-side navigations add new sections without remounting the layout.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-reveal]:not([data-shown])")) observer.observe(node);
          track(node);
        });
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}

/** Soft glow that follows the cursor across its parent section. */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = ref.current;
    const parent = glow?.parentElement;
    if (!glow || !parent || prefersReducedMotion()) return;
    let frame = 0;
    function onMove(pointer: PointerEvent) {
      if (pointer.pointerType !== "mouse") return;
      const rect = parent!.getBoundingClientRect();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow!.style.setProperty("--spot-x", `${pointer.clientX - rect.left}px`);
        glow!.style.setProperty("--spot-y", `${pointer.clientY - rect.top}px`);
        glow!.style.opacity = "1";
      });
    }
    function onLeave() {
      cancelAnimationFrame(frame);
      glow!.style.opacity = "0";
    }
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ref} aria-hidden className="spotlight" />;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Counts a figure like "60+" up from zero the first time it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = /^(\D*)(\d+)(.*)$/.exec(value);
    if (!el || !match || prefersReducedMotion()) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    let frame = 0;
    el.textContent = `${prefix}0${suffix}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1800, 1);
          el.textContent = `${prefix}${Math.round(target * easeOutExpo(t))}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
