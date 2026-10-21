import type { Project } from "../projects";

export const tabbied: Project = {
  slug: "tabbied",
  name: "Tabbied",
  year: "2019",
  revived: "2026",
  tagline: "Free website templates for every trade, with generated patterns in place of stock photos.",
  links: [
    { label: "Visit site", url: "https://tabbied.com" },
    { label: "GitHub", url: "https://github.com/tabbied-design/tabbied/" },
  ],
  summary: [
    "377 free website templates for florists, electricians, bakers and other trades. Each template uses a generated pattern instead of stock photography.",
    "Palettes and patterns can be changed per template, and sites download as HTML/CSS or React. The patterns are also available on their own as PNG, SVG or a React component.",
  ],
  facts: [],
  sections: [
    {
      type: "full",
      figure: {
        file: "still-01",
        kind: "still",
        shape: "wide",
        caption: "The homepage: free website templates for every trade, 377 of them, above a carousel of trades.",
      },
    },
    {
      type: "text",
      label: "Process",
      paragraphs: [
        "Every pattern is a small css-doodle program rather than a picture, drawn fresh in the browser, so pressing Shuffle gives an arrangement nobody has seen before. A pattern exports as a 3000px PNG for print or as a vector SVG.",
        "Each template is a complete one-page site for a real kind of business, built around one pattern and themed with a single palette, which is why no two look alike. The site is a static Next.js export on Cloudflare Workers, with a small Hono Worker for accounts, downloads and the API.",
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "still-02",
          kind: "still",
          shape: "phone",
          caption: "The Understory plant-care template on a phone, its hero set over a monstera-leaf pattern.",
        },
        {
          file: "still-03",
          kind: "still",
          shape: "phone",
          caption: "The High Pass Lodge template on a phone: a mountain lodge hero with booking buttons.",
        },
      ],
    },
    {
      type: "aside",
      figure: {
        file: "still-04",
        kind: "still",
        shape: "tall",
        caption: "The pattern editor on Northern Lights, with palette, aspect ratio, density and frequency controls.",
      },
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption:
          "The homepage, the template gallery, the Wild Stem florist site and recoloring it, then the pattern editor.",
      },
    },
    {
      type: "text",
      paragraphs: [
        "Tabbied now has 382 patterns, 437 palettes and 377 templates. The patterns are published as the tabbied npm package for React, Vue, Svelte and plain JavaScript, and an MCP server lets coding agents use them. Sy Hong came up with the idea and designed Tabbied; Ye Joo Park built it.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "still-05",
        kind: "still",
        shape: "wide",
        caption: "The template gallery: trade category filters above cards for Wild Stem, Live Wire Electric and more.",
      },
    },
  ],
  ogImage: "still-01",
  heroTone: "light",
};
