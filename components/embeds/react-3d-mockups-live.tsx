"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import styles from "./react-3d-mockups.module.css";

/*
 * The scenes import three.js and react-3d-mockups, so they load only in the
 * browser, only on this page, and only once a stage comes near the viewport.
 */
const scenes = {
  desk: lazy(() => import("./react-3d-mockups-scenes").then((m) => ({ default: m.DeskScene }))),
  shelf: lazy(() => import("./react-3d-mockups-scenes").then((m) => ({ default: m.ShelfScene }))),
  street: lazy(() => import("./react-3d-mockups-scenes").then((m) => ({ default: m.StreetScene }))),
};

export type SceneName = keyof typeof scenes;

/**
 * A stage for one live scene. The server renders the sized, empty stage; the
 * canvas mounts when the stage is within 400px of the viewport and unmounts
 * once it is far away again, which frees its WebGL context. A Swipe hint sits
 * at its foot until the first touch or click.
 */
export function LiveScene({ scene }: { scene: SceneName }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setNear(entry.isIntersecting), { rootMargin: "400px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Scene = scenes[scene];
  return (
    <div ref={ref} data-scene={scene} className={`${styles.stage} ${styles[scene]}`} onPointerDown={() => setTouched(true)}>
      {near && (
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      )}
      <div className={styles.hint} data-hidden={touched || undefined} aria-hidden="true">
        <SwipeIcon />
        Swipe
      </div>
    </div>
  );
}

/** A hand under a double arrow, the hand drifting side to side. The hand is Lucide's pointer (ISC). */
function SwipeIcon() {
  return (
    <svg
      viewBox="0 -1 24 29"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 3h11" />
      <path d="M5 .5 2.5 3 5 5.5" />
      <path d="m11 .5 2.5 2.5L11 5.5" />
      <g transform="translate(0 5)">
        <g className={styles.hand}>
          <path d="M22 14a8 8 0 0 1-8 8" />
          <path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
          <path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
          <path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" />
          <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </g>
      </g>
    </svg>
  );
}
