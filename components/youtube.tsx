"use client";

import { useState } from "react";
import { PlayIcon } from "./icons";

/**
 * A YouTube video that loads nothing from YouTube until it's played: its poster, from the project's media folder,
 * and a play button, which swap for YouTube's player (the no-cookie one), already playing. Until the page's script
 * runs, or with a modifier key held, the button is a plain link to the video on YouTube.
 */
export function YouTube({ id, poster, title, width, height }: { id: string; poster: string; title: string; width: number; height: number }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        ref={(el) => el?.focus()}
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="media-fill"
      />
    );
  }

  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      className="youtube"
      aria-label={`Play video: ${title}`}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        setPlaying(true);
      }}
    >
      <img src={poster} alt="" width={width} height={height} loading="lazy" decoding="async" className="media-fill" />
      <span className="youtube-play">
        <PlayIcon />
      </span>
    </a>
  );
}
