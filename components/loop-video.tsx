"use client";

import { useEffect, useRef } from "react";

/**
 * A muted, looping clip that plays only while on screen, and not at all for
 * people who ask for reduced motion (they see the poster). Unless `eager`, the
 * poster is fetched only as the clip nears the viewport, since a long page
 * holds many of these.
 */
export function LoopVideo({ src, poster, label, eager = false }: { src: string; poster: string; label: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React doesn't render `muted` into server HTML; autoplay needs it set.
    video.muted = true;
    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.poster = poster;
        near.disconnect();
      },
      { rootMargin: "800px 0px" },
    );
    if (!eager) near.observe(video);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return () => near.disconnect();
    const visible = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px 0px" },
    );
    visible.observe(video);
    return () => {
      near.disconnect();
      visible.disconnect();
    };
  }, [poster, eager]);

  return (
    <video
      ref={ref}
      src={src}
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
