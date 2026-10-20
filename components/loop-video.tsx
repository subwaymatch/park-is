"use client";

import { useEffect, useRef } from "react";

/**
 * A muted, looping clip that plays only while on screen, and not at all for
 * people who ask for reduced motion (they see the poster). It starts loading
 * when it comes near the viewport, unless `eager`.
 */
export function LoopVideo({ src, poster, label, eager = false }: { src: string; poster: string; label: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React doesn't render `muted` into server HTML; autoplay needs it set.
    video.muted = true;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      className="media-fill"
    />
  );
}
