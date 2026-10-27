import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
  title: "About",
  description: "Hi, I’m Park from Seoul, South Korea.",
};

// Photos from my travels, oldest first, in public/images/travel/ at 1600px wide.
// `column` places each on the about grid's 12 columns; every edge falls on one of
// the page's four columns (lines 1, 4, 7, 10 and 13), so the photos line up with
// the header and the text above. `end` sets a photo on its row's baseline.
type Photo = { file: string; caption: string; alt: string; w: number; h: number; column: string; end?: boolean };

const PHOTOS: Photo[] = [];

export default function About() {
  return (
    <Shell>
      <article className="article">
        <div className="cols">
          <h1 className="col-all title">Hi, I’m Park from Seoul, South Korea.</h1>
          <img
            src="/images/ye-joo-park.webp"
            alt="Ye Joo Park in a navy shirt, arms crossed"
            width={1100}
            height={1378}
            className="col-label portrait"
          />
        </div>

        {PHOTOS.length > 0 && (
          <ul className="photo-grid">
            {PHOTOS.map((p) => (
              <li key={p.file} className="photo" style={{ "--column": p.column } as CSSProperties} data-end={p.end || undefined}>
                <img src={`/images/travel/${p.file}.webp`} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
                <span className="photo-caption">{p.caption}</span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </Shell>
  );
}
