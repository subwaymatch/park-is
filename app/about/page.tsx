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

const PHOTOS: Photo[] = [
  {
    file: "japan-2007",
    caption: "Japan, 2007",
    alt: "A lit shop window of hanging roast meats at night, a cook in a head towel and white boots standing in the doorway beside it",
    w: 1600,
    h: 1050,
    column: "1 / span 9",
  },
  {
    file: "yokohama-2007",
    caption: "Yokohama, 2007",
    alt: "A man leaning on a harbour railing at dusk under a wide blue sky, Yokohama Bay Bridge beyond the pier",
    w: 1312,
    h: 2000,
    column: "10 / span 3",
    end: true,
  },
  {
    file: "seoul-2008",
    caption: "Seoul, 2008",
    alt: "Two people walking past a white metal wall, blurred above the knee, one in a green sneaker and one in a heeled boot",
    w: 1080,
    h: 1080,
    column: "1 / span 3",
  },
  {
    file: "uijeongbu-2008",
    caption: "Camp Red Cloud, Uijeongbu, 2008",
    alt: "Heavy snow falling over a parking lot and low buildings at Camp Red Cloud, one orange lamp lit",
    w: 1600,
    h: 1062,
    column: "4 / span 9",
  },
];

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
