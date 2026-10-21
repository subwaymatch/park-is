"use client";

import { useEffect, useRef } from "react";

/**
 * A muted, looping clip that plays only while at least half of it is on
 * screen, and not at all for people who ask for reduced motion (they see the
 * poster). A long page holds many of these, so unless `eager`, a clip's poster
 * and source are attached only as it nears the viewport, and the source is
 * detached again once it is far away, which frees its decoder and buffered
 * frames.
 */
export function LoopVideo({ src, poster, label, eager = false }: { src: string; poster: string; label: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React doesn't render `muted` into server HTML; autoplay needs it set.
    video.muted = true;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const attach = () => {
      if (!still && !video.getAttribute("src")) video.src = src;
    };
    const detach = () => {
      if (!video.getAttribute("src")) return;
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
    const near = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.poster = poster;
          attach();
        } else {
          detach();
        }
      },
      { rootMargin: "800px 0px" },
    );
    near.observe(video);
    if (still) return () => near.disconnect();
    const visible = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          attach();
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    visible.observe(video);
    return () => {
      near.disconnect();
      visible.disconnect();
    };
  }, [src, poster]);

  return (
    <video
      ref={ref}
      src={eager ? src : undefined}
      poster={eager ? poster : undefined}
      aria-label={label}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      className="media-fill"
    />
  );
}
