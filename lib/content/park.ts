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
      label: "In use",
      paragraphs: [
        "The mark was made to hold up wherever it is put: in print, on a screen, as a sign, in a film’s first frame. It is kept small, so that the black around it does the work.",
      ],
    },
    {
      type: "embed",
      name: "mockups",
      caption:
        "Cards, letterhead, envelopes, the whole set, a notebook, a box, a phone, a laptop, a sign and a cinema screen. The scenes are generated; the mark in each is the vector, set in afterwards.",
    },
    {
      type: "text",
      label: "Fields",
      paragraphs: ["The same mark at the same size on abstract fields, and on black forms cut out against the page."],
    },
    {
      type: "embed",
      name: "fields",
      caption: "Light, smoke, sand, paper and water, and between them ink, stone, torn paper and cloth. All generated, with the mark set in.",
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
