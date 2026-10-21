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
 * once it is far away again, which frees its WebGL context.
 */
export function LiveScene({ scene }: { scene: SceneName }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setNear(entry.isIntersecting), { rootMargin: "400px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Scene = scenes[scene];
  return (
    <div ref={ref} data-scene={scene} className={`frame is-bare ${styles.stage} ${styles[scene]}`}>
      {near && (
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      )}
    </div>
  );
}
