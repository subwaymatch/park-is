"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * A figure whose animations wait until it is first on screen (`data-seen`, after `data-ready`) and pause whenever
 * it is off it (`data-visible`); the styles are in park.module.css. Without JavaScript, or with reduced motion, neither is set
 * and the figure shows its finished state.
 */
export function Stage({
  className,
  children,
  ...rest
}: { className?: string; children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  // A layout effect, so whatever waits for its entrance (`data-ready`) is hidden before the first paint.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.ready = "";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.seen = "";
          el.dataset.visible = "";
        } else delete el.dataset.visible;
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}

/**
 * The gloss panel: a light the pointer carries across it, as `--park-lx` and `--park-ly` (percentages of the
 * panel). Until a pointer arrives, and again after it leaves, the light drifts on its own (park.module.css).
 */
export function Light({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--park-lx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(2)}%`);
        el.style.setProperty("--park-ly", `${(((e.clientY - r.top) / r.height) * 100).toFixed(2)}%`);
        el.dataset.pointer = "";
      });
    };
    const leave = () => {
      cancelAnimationFrame(frame);
      delete el.dataset.pointer;
      el.style.removeProperty("--park-lx");
      el.style.removeProperty("--park-ly");
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    el.addEventListener("pointercancel", leave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      el.removeEventListener("pointercancel", leave);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
