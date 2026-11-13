"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * When the browser's back or forward button last brought up a page, in performance.now() time: on a popstate within
 * the site, or as this document loads if the browser loaded it from history. A click on a link clears it, so only
 * the page reached by back or forward is affected.
 */
let historyAt = -Infinity;
if (typeof window !== "undefined") {
  const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
  if (nav?.type === "back_forward") historyAt = performance.now();
  addEventListener("popstate", () => {
    historyAt = performance.now();
  });
  addEventListener(
    "click",
    (e) => {
      if (e.target instanceof Element && e.target.closest("a[href]")) historyAt = -Infinity;
    },
    true,
  );
}

/**
 * Whether the page now mounting was reached with back or forward. The router renders a page it has kept
 * synchronously inside its own popstate listener, before ours runs, so that event is checked as it happens; a page it
 * fetches first renders after ours has run (allowing for a slow fetch).
 */
function cameBack() {
  return window.event?.type === "popstate" || performance.now() - historyAt < 10_000;
}

/**
 * The stage a project logo is animated on. The mark stays hidden
 * (`data-ready`) until the stage is first seen (`data-seen`), which plays the
 * entrance; after that, animations pause while it is off screen
 * (`data-visible`). Without JavaScript, or with reduced motion, the logo
 * stands still in its final state. On a page reached with the back or forward
 * button the entrance is skipped: the mark appears assembled and goes straight
 * to its idle loop.
 */
export function LogoStage({ color, children }: { color: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // A layout effect, so a skipped entrance is skipped before the first paint.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Entrances run once; the idle loops repeat. Jump each entrance to its end.
    const finishEntrances = () => {
      for (const a of el.getAnimations({ subtree: true })) {
        if (a instanceof CSSAnimation && a.effect?.getTiming().iterations === 1) a.finish();
      }
    };
    let skip = cameBack();
    // The mark waits, hidden, for its entrance.
    el.dataset.ready = "";
    // The router may keep a page and show it again, its marks already seen, which restarts their animations.
    if (skip && "seen" in el.dataset) {
      finishEntrances();
      skip = false;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.seen = "";
          el.dataset.visible = "";
          if (skip) {
            finishEntrances();
            skip = false;
          }
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
