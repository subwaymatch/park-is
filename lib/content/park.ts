import type { Project } from "../projects";

export const park: Project = {
  slug: "park",
  name: "Personal Branding",
  year: "2014",
  tagline: "A wordmark for my own name.",
  links: [{ label: "Behance", url: "https://www.behance.net/gallery/13518301/Park-Personal-Brand" }],
  summary: [
    "Park is a personal identity: a wordmark in which each letter is a single line, and a stationery set printed black on black. It is the mark at the top of this site.",
    "It was published in January 2014 and featured in Behance’s Branding gallery that October.",
  ],
  facts: [
    ["Typeface", "Cut from DIN"],
    ["Featured", "Behance, Branding gallery, 5 October 2014"],
    [
      "Note",
      "Nothing on this page is a picture. The 2014 presentation was photographic mock-ups, which are still [on Behance](https://www.behance.net/gallery/13518301/Park-Personal-Brand); here every figure is drawn in the browser from the wordmark’s outlines.",
    ],
  ],
  heroEmbed: "hero",
  sections: [
    {
      type: "embed",
      name: "strokes",
      caption:
        "Four letters, four lines, none lifted from the page. Dashed: the strokes left out, which are the close of P’s bowl, A’s crossbar, and the stems of R and K.",
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
        "The construction: the lines each letter lies on, run out past it, the curves of the two bowls carried all the way round, and the one cut that takes R’s stem. The mark is a little over three times as wide as it is tall.",
    },
    {
      type: "text",
      label: "Studies",
      paragraphs: [
        "Six studies made of nothing but the wordmark’s outlines: repeated, laid over one another, run out to the edge of the sheet, resized, rearranged and pulled straight.",
      ],
    },
    {
      type: "embed",
      name: "studies",
      caption:
        "Echo trails the mark behind itself. Monogram lays the four letters on one spot. Extended runs R’s lines off the sheet. Peaks is five As. Weave shifts each row by a letter. Unrolled pulls each letter’s line straight: A takes the most line, K the least.",
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
