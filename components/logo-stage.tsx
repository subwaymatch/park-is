"use client";

import { useEffect, useRef } from "react";

/**
 * The stage a project logo is animated on. Animations attach once the stage is
 * first seen (`data-seen`, which plays the entrance) and pause while it is off
 * screen (`data-visible`). Without JavaScript, or with reduced motion, the
 * logo stands still in its final state.
 */
export function LogoStage({ color, children }: { color: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.seen = "";
          el.dataset.visible = "";
        } else delete el.dataset.visible;
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="logo-stage" style={{ "--logo": color } as React.CSSProperties}>
      <div className="logo-glow" aria-hidden="true" />
      {children}
    </div>
  );
}
