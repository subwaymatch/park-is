import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
  title: "About",
  description: "Hi, I’m Ye Joo Park from Seoul, South Korea. This site holds a few projects I enjoyed building.",
};

// Old photos, oldest first, in public/images/travel/ (landscapes at 1600px wide,
// squares at 1080), one to a row on the about grid's 12 columns. A landscape runs
// the whole width; a portrait or square keeps the page's first column as a margin
// and fills the other three (grid lines 4 to 13).
type Photo = { file: string; caption: string; alt: string; w: number; h: number };

const column = ({ w, h }: Photo) => (w > h ? "1 / -1" : "4 / -1");

// Profiles elsewhere; `archive` marks one that is no longer updated.
const ELSEWHERE = [
  { label: "GitHub", url: "https://github.com/subwaymatch" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ye-joo-park" },
  { label: "Behance", url: "https://www.behance.net/yejoopark", archive: true },
  { label: "Medium", url: "https://medium.com/@subwaymatch/", archive: true },
];

const PHOTOS: Photo[] = [
  {
    file: "hong-kong-2007-footbridge",
    caption: "Hong Kong, 2007",
    alt: "Two workers in hard hats repairing the glass wall of a blue footbridge, mirrored in the glass as commuters pass",
    w: 1600,
    h: 1064,
  },
  {
    file: "hong-kong-2007-car",
    caption: "Hong Kong, 2007",
    alt: "A black Porsche with the plate LA 1997, seen from the curb of a busy Hong Kong street",
    w: 1600,
    h: 1050,
  },
  {
    file: "hong-kong-2007-bus",
    caption: "Hong Kong, 2007",
    alt: "Passengers seen through a bus window in black and white, a uniformed young man in a beret shouting toward the front",
    w: 1080,
    h: 1080,
  },
  {
    file: "tongyeong-2007",
    caption: "Tongyeong, 2007",
    alt: "A man and a woman snacking on the street, he eating walnut cakes from a paper bag, she drinking from a cup",
    w: 1080,
    h: 1080,
  },
  {
    file: "japan-2007",
    caption: "Japan, 2007",
    alt: "A lit shop window of hanging roast meats at night, a cook in a head towel and white boots standing in the doorway beside it",
    w: 1600,
    h: 1050,
  },
  {
    file: "yokohama-2007",
    caption: "Yokohama, 2007",
    alt: "A man leaning on a harbour railing at dusk under a wide blue sky, Yokohama Bay Bridge beyond the pier",
    w: 1312,
    h: 2000,
  },
  {
    file: "tokyo-2007",
    caption: "Tokyo, 2007",
    alt: "A man photographing in a station concourse while commuters blur past him",
    w: 1080,
    h: 1080,
  },
  {
    file: "chicago-2007",
    caption: "Chicago, 2007",
    alt: "A woman in headphones reaching for a pair on a lit wall of headphones in a shop, warm lights blurred behind",
    w: 1080,
    h: 1080,
  },
  {
    file: "champaign-2007",
    caption: "Champaign, 2007",
    alt: "The Main Quad at the University of Illinois under a summer sky, the Illini Union at its far end",
    w: 1600,
    h: 1064,
  },
  {
    file: "seoul-2008-isu",
    caption: "Seoul, 2008",
    alt: "Long-exposure traffic streaming down a tree-lined avenue at dusk, under a green sign for Isu Junction",
    w: 1600,
    h: 1062,
  },
  {
    file: "seoul-2008",
    caption: "Seoul, 2008",
    alt: "Two people walking past a white metal wall, blurred above the knee, one in a green sneaker and one in a heeled boot",
    w: 1080,
    h: 1080,
  },
  {
    file: "seoul-2008-headphones",
    caption: "Seoul, 2008",
    alt: "A man in a cap and headphones looking down at a music player, a bakery’s lit sign blurred behind him",
    w: 1080,
    h: 1080,
  },
  {
    file: "uijeongbu-2008",
    caption: "Camp Red Cloud, Uijeongbu, 2008",
    alt: "Heavy snow falling over a parking lot and low buildings at Camp Red Cloud, one orange lamp lit",
    w: 1600,
    h: 1062,
  },
  {
    file: "uijeongbu-2009",
    caption: "Camp Red Cloud, Uijeongbu, 2009",
    alt: "A soldier in a cap and camouflage with a Korean flag patch, seated in profile by a curtained window, hands clasped",
    w: 1080,
    h: 1080,
  },
  {
    file: "seoul-2009-stadium",
    caption: "Seoul, 2009",
    alt: "A kindergarten class posing for a photo on the plaza before Seoul Olympic Stadium, during the Seoul Design Olympiad",
    w: 1600,
    h: 1069,
  },
  {
    file: "seoul-2010-arts-center",
    caption: "Seoul Arts Center, Seoul, 2010",
    alt: "A girl raising her arms before a lit fountain at night in black and white, people seated and blurred around her",
    w: 1080,
    h: 1080,
  },
  {
    file: "boseong-2010",
    caption: "Boseong, 2010",
    alt: "Fish laid out on market stalls under orange and blue tarps, a woman tending her table",
    w: 1080,
    h: 1080,
  },
  {
    file: "champaign-2011-quad",
    caption: "Champaign, 2011",
    alt: "Bare trees and lamps across the Quad on a foggy night",
    w: 1600,
    h: 1062,
  },
  {
    file: "champaign-2011-street",
    caption: "Champaign, 2011",
    alt: "An empty street on a foggy night, its lamps fading into the distance under a green Wright St sign",
    w: 1600,
    h: 1072,
  },
  {
    file: "chicago-2011",
    caption: "Chicago, 2011",
    alt: "A face in near darkness, lit only along the cheek and nose",
    w: 1600,
    h: 1062,
  },
  {
    file: "seoul-2011-banpo",
    caption: "Seoul, 2011",
    alt: "Banpo Bridge lit along the Han River at night, N Seoul Tower on the far bank",
    w: 1600,
    h: 1062,
  },
  {
    file: "san-francisco-2011-bart",
    caption: "San Francisco, 2011",
    alt: "Two men reading on a round bench in a BART station, signs for East Bay and Millbrae overhead, in black and white",
    w: 1600,
    h: 1066,
  },
  {
    file: "san-francisco-2011-north-beach",
    caption: "San Francisco, 2011",
    alt: "Trolley wires crossing the sky over a North Beach street, the Transamerica Pyramid beyond",
    w: 1600,
    h: 1066,
  },
  {
    file: "seoul-2012",
    caption: "Seoul, 2012",
    alt: "Light trails on a road at night, leading toward N Seoul Tower on its hill",
    w: 1600,
    h: 1063,
  },
  {
    file: "mexico-city-2012",
    caption: "Mexico City, 2012",
    alt: "Red light trails on an avenue at dusk, under a lit billboard for the San Marino Hotel Suites",
    w: 1600,
    h: 1066,
  },
  {
    file: "santa-monica-2019",
    caption: "Santa Monica, 2019",
    alt: "Silhouettes at the water’s edge after sunset, the mountains running out along the coast",
    w: 1600,
    h: 1200,
  },
];

export default function About() {
  return (
    <Shell section="about">
      <article className="article">
        <div className="cols">
          <h1 className="col-all title">Hi, I’m Ye Joo Park from Seoul, South Korea.</h1>
          <p className="col-all tagline">
            This site holds a few projects I enjoyed building. The photos below are old ones I took, mostly while
            traveling.
          </p>
        </div>

        <div className="rows">
          <div className="row">
            <span className="col-label muted">Elsewhere</span>
            <div className="col-rest links">
              {ELSEWHERE.map((l) => (
                <span key={l.url} className="link-line">
                  <a href={l.url} target="_blank" rel="noopener">
                    {l.label}
                    <ArrowUpRightIcon />
                  </a>
                  {l.archive && <span className="muted">Archive</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {PHOTOS.length > 0 && (
          <ul className="photo-grid">
            {PHOTOS.map((p) => (
              <li key={p.file} className="photo" style={{ "--column": column(p) } as CSSProperties}>
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
