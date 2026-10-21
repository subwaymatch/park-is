import type { Project } from "../projects";

export const react3dMockups: Project = {
  slug: "react-3d-mockups",
  name: "React 3D Mockups",
  year: "2026",
  tagline: "Live 3D device mockups for React. Real DOM on the glass.",
  links: [
    { label: "Website", url: "https://area.is/react-3d-mockups" },
    { label: "GitHub", url: "https://github.com/area-is/react-3d-mockups" },
  ],
  summary: [
    "GPU-accelerated 3D device mockups for React. Any content placed on the screen renders live: DOM, video and iframes, crisp at any angle.",
    "Every model is generated procedurally at runtime, so there are no 3D asset files to host. The lineup covers 33 devices plus books, packaging, posters, billboards and vehicles.",
  ],
  facts: [],
  sections: [
    {
      type: "full",
      figure: {
        file: "still-01",
        kind: "still",
        shape: "wide",
        caption: "The landing page: “3D mockups for React” above a carousel with a Galaxy S26 mockup on stage.",
      },
    },
    {
      type: "text",
      label: "Process",
      paragraphs: [
        "Screen content is regular DOM, positioned on the glass with CSS 3D transforms, so React state and effects, video and iframes keep running, and the browser draws the text sharp at any angle. An experimental prop lets the screens take clicks, scrolling and typing while the hardware still covers them.",
        "The package is built in two layers: a renderer-agnostic core that describes devices, objects and behaviors as data and math using only three.js, and the React components that render it with react-three-fiber.",
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "still-02",
          kind: "still",
          shape: "phone",
          caption: "The landing page on a phone: the carousel shows a Galaxy S26 mockup with its “Slow turns” screen.",
        },
        {
          file: "still-03",
          kind: "still",
          shape: "phone",
          caption: "The Ledger example on a phone: watch, laptop and phone mockups above the add-an-expense buttons.",
        },
      ],
    },
    {
      type: "aside",
      figure: {
        file: "still-04",
        kind: "still",
        shape: "tall",
        caption: "The Galaxy Z Fold 8 page: a live prop explorer with its props panel and the generated demo.tsx.",
      },
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption:
          "Spinning a phone in the landing carousel, filtering the gallery to foldables, folding a Z Fold 8 and adding expenses in Ledger.",
      },
    },
    {
      type: "text",
      paragraphs: [
        "The package is on npm, published from CI with npm Trusted Publishing. The docs site has a gallery of all 58 models, a live prop explorer for each one and twelve example scenes.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "still-05",
        kind: "still",
        shape: "wide",
        caption: "The Aperture Festival campaign example: a 14 × 48 ft billboard mockup carrying the festival art.",
      },
    },
  ],
  ogImage: "still-01",
  heroTone: "light",
};
