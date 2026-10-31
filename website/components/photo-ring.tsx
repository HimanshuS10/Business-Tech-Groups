"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };

const STEP_MS = 650;
const AUTOPLAY_MS = 3500;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const wrap = (value: number, count: number) => ((value % count) + count) % count;
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Photos arranged on a turning ring: the front photo is largest, the rest
 * shrink, dim and rise as they go round the back. Everything is sized from the
 * container width, so the ring never extends past its own box.
 */
export function PhotoRing({ photos, label = "Event photos" }: { photos: Photo[]; label?: string }) {
  const count = photos.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pos = useRef(0);
  const activeRef = useRef(0);
  const frame = useRef(0);
  const size = useRef({ width: 0, card: 0 });
  const paused = useRef(false);
  const drag = useRef<{ x: number; start: number; moved: boolean; id: number } | null>(null);
  const suppressClick = useRef(false);
  const [active, setActive] = useState(0);
  const [box, setBox] = useState({ height: 0, center: 0 });

  const layout = useCallback(() => {
    const { width, card } = size.current;
    if (!width) return;
    const height = (card * 2) / 3;
    const lift = height * 0.35;
    // Widest point of the ring, kept so a side photo's edge stays inside the box.
    const reach = (width - card * 0.75) / 2;

    for (let i = 0; i < count; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;
      const angle = ((i - pos.current) / count) * Math.PI * 2;
      const front = (1 + Math.cos(angle)) / 2;
      const scale = 0.45 + 0.55 * front;
      const x = Math.sin(angle) * reach;
      const y = -(1 - front) * lift;

      el.style.width = `${card}px`;
      el.style.height = `${height}px`;
      el.style.top = `${lift + height / 2}px`;
      el.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) perspective(900px) rotateY(${(Math.sin(angle) * 28).toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      el.style.zIndex = String(Math.round(front * 100));
      el.style.filter = `brightness(${(0.45 + 0.55 * front).toFixed(3)}) blur(${((1 - front) * 6).toFixed(2)}px)`;
      el.style.opacity = "1";
    }
  }, [count]);

  const animateTo = useCallback(
    (target: number) => {
      cancelAnimationFrame(frame.current);
      const settle = () => {
        pos.current = wrap(target, count);
        layout();
      };
      if (prefersReducedMotion()) {
        settle();
        return;
      }
      const from = pos.current;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / STEP_MS, 1);
        pos.current = from + (target - from) * easeOut(t);
        layout();
        if (t < 1) frame.current = requestAnimationFrame(tick);
        else settle();
      };
      frame.current = requestAnimationFrame(tick);
    },
    [count, layout],
  );

  const focus = useCallback(
    (index: number) => {
      const next = wrap(Math.round(index), count);
      let delta = wrap(next - pos.current, count);
      if (delta > count / 2) delta -= count;
      animateTo(pos.current + delta);
      activeRef.current = next;
      setActive(next);
    },
    [animateTo, count],
  );

  const step = useCallback((by: number) => focus(activeRef.current + by), [focus]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const card = Math.min(width * 0.62, 440);
      const height = (card * 2) / 3;
      const lift = height * 0.35;
      size.current = { width, card };
      setBox({ height: lift + height + 36, center: lift + height / 2 });
      layout();
    });
    observer.observe(root);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [layout]);

  useEffect(() => {
    if (count < 2 || prefersReducedMotion()) return;
    const timer = setInterval(() => {
      if (!paused.current) step(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [count, step]);

  function endDrag() {
    const current = drag.current;
    drag.current = null;
    suppressClick.current = Boolean(current?.moved);
    if (current?.moved) focus(pos.current);
  }

  return (
    <div
      ref={rootRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      className="relative mt-6 w-full cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
      style={{ height: box.height || undefined }}
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
      onKeyDown={(key) => {
        if (key.key === "ArrowLeft") step(-1);
        if (key.key === "ArrowRight") step(1);
      }}
      onPointerDown={(pointer) => {
        if (count < 2) return;
        cancelAnimationFrame(frame.current);
        drag.current = { x: pointer.clientX, start: pos.current, moved: false, id: pointer.pointerId };
      }}
      onPointerMove={(pointer) => {
        const current = drag.current;
        if (!current) return;
        const dx = pointer.clientX - current.x;
        if (!current.moved && Math.abs(dx) > 4) {
          current.moved = true;
          rootRef.current?.setPointerCapture(current.id);
        }
        if (!current.moved) return;
        pos.current = current.start - dx / Math.max(size.current.card * 0.6, 40);
        layout();
      }}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {photos.map((photo, index) => (
        <div
          key={photo.src}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          aria-hidden={active !== index}
          onClick={() => {
            if (!suppressClick.current) focus(index);
          }}
          className="absolute left-1/2 cursor-pointer overflow-hidden rounded-sm bg-ink opacity-0 shadow-[0_18px_40px_-18px_rgb(38_49_53/0.55)] will-change-transform"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 768px) 28rem, 62vw"
            quality={85}
            draggable={false}
            className="pointer-events-none object-cover"
          />
        </div>
      ))}

      {count > 1 ? (
        <>
          <RingButton direction="previous" top={box.center} onClick={() => step(-1)} />
          <RingButton direction="next" top={box.center} onClick={() => step(1)} />
          <div className="absolute bottom-1 left-1/2 z-200 flex -translate-x-1/2 gap-2">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Show photo ${index + 1}`}
                aria-current={active === index}
                onClick={() => focus(index)}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  active === index ? "w-5 bg-ink" : "w-1.5 bg-ink/25 hover:bg-ink/50"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function RingButton({
  direction,
  top,
  onClick,
}: {
  direction: "previous" | "next";
  top: number;
  onClick: () => void;
}) {
  const isNext = direction === "next";
  return (
    <button
      type="button"
      aria-label={isNext ? "Next photo" : "Previous photo"}
      onClick={onClick}
      style={{ top: top || "50%" }}
      className={`absolute z-200 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-paper/85 text-ink shadow-sm transition-colors duration-200 hover:bg-paper ${
        isNext ? "right-1" : "left-1"
      }`}
    >
      <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path
          d={isNext ? "M6 3.5 10.5 8 6 12.5" : "M10 3.5 5.5 8 10 12.5"}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}
