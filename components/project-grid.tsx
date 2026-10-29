"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LoopVideo } from "./loop-video";

export type ProjectCard = { slug: string; name: string; tagline: string; color: string; hero: string; poster: string };

/**
 * The home page's projects, one to a row, each site in a browser frame. One card at a time is in focus
 * (`data-focus`), the one whose middle is nearest the middle of the window; only its clip is in colour. Before
 * JavaScript runs, that is the first.
 */
export function ProjectGrid({ cards }: { cards: ProjectCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const middle = innerHeight / 2;
      let nearest = 0;
      let distance = Infinity;
      Array.from(grid.children).forEach((card, i) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - middle);
        if (d < distance) {
          nearest = i;
          distance = d;
        }
      });
      setFocus(nearest);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div ref={ref} className="project-grid">
      {cards.map((c, i) => (
        <Link
          key={c.slug}
          href={`/${c.slug}`}
          className="project-card"
          data-focus={i === focus ? "" : undefined}
          style={{ "--glow": c.color } as React.CSSProperties}
        >
          <div className="browser">
            <div className="browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="browser-screen">
              <LoopVideo src={c.hero} poster={c.poster} label={c.name} eager={i === 0} />
            </div>
          </div>
          <div className="project-card-text">
            <span className="project-card-name">{c.name}</span>
            <span className="project-card-tagline">{c.tagline}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
