import type { Project } from "../projects";

export const park: Project = {
  slug: "park",
  name: "Personal Branding",
  year: "2014",
  tagline: "A wordmark for my own name.",
  links: [],
  summary: [
    "Park is a personal identity: a wordmark in which each letter is a single line, and a stationery set printed black on black. It is the mark at the top of this site.",
    "It was published in January 2014 and featured in Behance’s Branding gallery that October.",
  ],
  facts: [
    [
      "Featured",
      "[Behance](https://www.behance.net/gallery/13518301/Park-Personal-Brand), Branding gallery, 5 October 2014",
      { file: "behance-ribbon.svg", width: 62, height: 86 },
    ],
  ],
  heroEmbed: "hero",
  sections: [
    {
      type: "embed",
      name: "strokes",
      caption:
        "Four letters, four lines, none lifted from the page. Dashed: the outlines of the strokes left out, which are the close of P’s bowl, A’s crossbar, and the stems of R and K.",
    },
    {
      type: "text",
      label: "Mark",
      paragraphs: [
        "The letters are cut from DIN, and each keeps only what is needed to read it. P is a stem and the start of a bowl; A is two legs; R is a bar, a bowl and a leg with nothing to stand against; K is a single bend.",
        "R loses its stem to one straight cut: the outer edge of its leg, run on up through the end of the top bar.",
        "The lines look even, but they are not quite. As in DIN, the horizontals are a little lighter than the stems, and a bowl is straight runs joined by round corners, not a circle.",
      ],
    },
    {
      type: "embed",
      name: "construction",
      caption:
        "The construction: both edges of every straight stroke, run out past the letters, a cross where each bowl is struck from, and the one cut that takes R’s stem. The mark is a little over three times as wide as it is tall.",
    },
    {
      type: "text",
      label: "Studies",
      paragraphs: [
        "Six studies made of nothing but the wordmark’s outlines: repeated, sliced, run out to the edge of the sheet, sent outwards in rings, rearranged and turned.",
      ],
    },
    {
      type: "embed",
      name: "studies",
      caption:
        "Echo trails the mark behind itself. Cut slices it along R’s cut and slides the slices out of line. Extended runs the edges of R’s strokes off the sheet. Ripple sends its outline outwards. Weave shifts each row by a letter. Turn sweeps it round a point.",
    },
    {
      type: "text",
      label: "Stationery",
      paragraphs: [
        "The set is black throughout: letterhead, envelope, cards, a notebook, a pencil, erasers and a box of matches. The mark is white where it has to be read at a glance, and gloss black where it can wait to be found.",
      ],
    },
    {
      type: "embed",
      name: "stationery",
      caption: "The 2014 set, laid out flat and redrawn as vectors. The match heads are the only colour.",
      bleed: true,
    },
    {
      type: "embed",
      name: "gloss",
      caption: "Black on black: the mark shows only where the light falls. The light drifts on its own, or follows the pointer.",
    },
  ],
  ogImage: "og",
  heroTone: "dark",
};
