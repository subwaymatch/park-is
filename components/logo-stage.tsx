"use client";

import { useEffect, useRef } from "react";

/**
 * The stage a project logo is animated on. The mark stays hidden
 * (`data-ready`) until the stage is first seen (`data-seen`), which plays the
 * entrance; after that, animations pause while it is off screen
 * (`data-visible`). Without JavaScript, or with reduced motion, the logo
 * stands still in its final state.
 */
export function LogoStage({ color, children }: { color: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // The mark waits, hidden, for its entrance.
    el.dataset.ready = "";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.seen = "";
          el.dataset.visible = "";
        } else delete el.dataset.visible;
      },
      { threshold: 0.3 },
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
