import type { Project } from "../projects";

export const react3dMockups: Project = {
  slug: "react-3d-mockups",
  name: "React 3D Mockups",
  year: "2026",
  tagline: "Live 3D device mockups for React. Real DOM on the glass.",
  links: [
    { label: "https://area.is/react-3d-mockups", url: "https://area.is/react-3d-mockups" },
    { label: "Source", url: "https://github.com/area-is/react-3d-mockups" },
    { label: "npm", url: "https://www.npmjs.com/package/react-3d-mockups" },
  ],
  summary: [
    "React 3D Mockups is an open-source library of 3D device and object mockups for React, built on three.js. Whatever goes on a screen, a component, a video or an iframe, stays live DOM and stays sharp at any angle.",
    "All 58 models, from phones and foldables to a billboard and a semi trailer, are generated in code at runtime, with no 3D files to host. The package is on npm under the MIT license.",
  ],
  facts: [
    ["Stack", "TypeScript, React 19, three.js, react-three-fiber, three-bvh-csg"],
    ["Package", "[react-3d-mockups](https://www.npmjs.com/package/react-3d-mockups) 0.2.0 on npm"],
    ["License", "MIT"],
  ],
  sections: [
    {
      type: "text",
      label: "Live screens",
      paragraphs: [
        "Screen content is real DOM, placed on the glass with CSS 3D transforms under a transparent WebGL canvas that masks it pixel for pixel. Text stays crisp, and state, video and iframes keep running.",
      ],
    },
    { type: "logo", caption: "The mark: three rounded screens stacked in isometric view, in four greens." },
    {
      type: "full",
      figure: {
        file: "landing-carousel",
        kind: "loop",
        shape: "wide",
        caption: "The landing carousel: picking a finish, then stepping through models and their screen sizes.",
      },
    },
    {
      type: "embed",
      name: "desk",
      bleed: true,
      caption: "Live: one React state on a MacBook, an iPhone and an Apple Watch. Drag to turn.",
    },
    {
      type: "text",
      label: "Lineup",
      paragraphs: [
        "There are 33 devices and 25 objects. Each screen defaults to the real device’s logical resolution, so breakpoints match the hardware.",
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "gallery-devices",
          kind: "loop",
          shape: "tall",
          caption: "The gallery filtered to phones, foldables, tablets, laptops and wearables.",
        },
        {
          file: "gallery-objects",
          kind: "loop",
          shape: "tall",
          caption: "Print, packaging, out-of-home and vehicle models, each surface a live DOM area.",
        },
      ],
    },
    {
      type: "embed",
      name: "shelf",
      bleed: true,
      caption: "Live: a book, a tea carton, a poster and a card, each wearing generated art.",
    },
    {
      type: "text",
      label: "Prop explorer",
      paragraphs: [
        "Every model has a page with a live prop explorer, and its demo.tsx rewrites itself to the props being passed.",
      ],
    },
    {
      type: "aside",
      figure: {
        file: "fold-explorer",
        kind: "loop",
        shape: "tall",
        caption: "Galaxy Z Fold 8: a lavender finish, then folding to 15°, where the cover screen lights.",
      },
    },
    {
      type: "pair",
      figures: [
        {
          file: "iphone-explorer",
          kind: "loop",
          shape: "wide",
          caption: "iPhone 18 Pro: picking Burgundy, turning to the back, then laying it in landscape.",
        },
        {
          file: "laptop-explorer",
          kind: "loop",
          shape: "wide",
          caption: "MacBook Pro 14″: lowering the lid with openAngle, switching to Space Black, then raising it.",
        },
      ],
    },
    {
      type: "text",
      label: "Taking input",
      paragraphs: [
        "Screens are display-only by default. The experimentalScreenInput prop lifts each screen above the canvas and clips it every frame to the pixels no hardware covers.",
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "screen-input",
          kind: "loop",
          shape: "wide",
          caption: "Typing into a form on a MacBook’s screen, signing up, then turning the laptop.",
        },
        {
          file: "sketch",
          kind: "loop",
          shape: "wide",
          caption: "With screenDrag off, every drag on the iPad’s screen draws in a sketch pad.",
        },
      ],
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption: "Spinning a phone, filtering the gallery, folding a Z Fold 8 and adding expenses in Ledger.",
      },
    },
    {
      type: "text",
      label: "How it is built",
      paragraphs: [
        "Ports and speaker holes are cut with CSG at runtime, and a frame is drawn only when something changes. A renderer-agnostic core holds the specs; the React layer renders them with react-three-fiber.",
      ],
    },
    {
      type: "text",
      label: "Example scenes",
      paragraphs: [
        "Twelve scenes for fictional brands, most with [Tabbied](https://tabbied.com) patterns, show the library at work.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "ledger",
        kind: "loop",
        shape: "wide",
        caption: "Ledger: adding expenses updates one React state on a watch, a MacBook and an iPhone.",
      },
    },
    {
      type: "full",
      figure: {
        file: "campaign",
        kind: "loop",
        shape: "wide",
        caption: "Aperture Festival: turning the 14 × 48 ft billboard to walk around it.",
      },
    },
    {
      type: "embed",
      name: "street",
      bleed: true,
      caption: "Live: one sneaker campaign on a billboard and a bus shelter.",
    },
    {
      type: "pair",
      figures: [
        {
          file: "print-shop",
          kind: "loop",
          shape: "wide",
          caption: "Grid Editions: a new design, ink, frame and mat reprint the poster.",
        },
        {
          file: "packaging",
          kind: "loop",
          shape: "wide",
          caption: "Carton & Co: the size sliders and board choice rebuild the mailer box proof.",
        },
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "fleet",
          kind: "loop",
          shape: "wide",
          caption: "Northline: switching the van’s wrap coverage and livery colors.",
        },
        {
          file: "cafe",
          kind: "loop",
          shape: "wide",
          caption: "Ninefold: closing and repainting the shop; the door sign, glass and fascia follow.",
        },
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "stationery",
          kind: "loop",
          shape: "wide",
          caption: "Ampersand: one set of names, a palette and a typeface set four wedding pieces.",
        },
        {
          file: "arcade",
          kind: "loop",
          shape: "wide",
          caption: "Moth: a real canvas game runs on the TV’s screen and reports back to the page.",
        },
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-landing",
          kind: "loop",
          shape: "phone",
          caption: "The landing carousel on a phone, changing finish and model.",
        },
        {
          file: "phone-ledger",
          kind: "loop",
          shape: "phone",
          caption: "Ledger on a phone: adding expenses updates all three devices.",
        },
      ],
    },
    {
      type: "text",
      label: "Shipping",
      paragraphs: [
        "Since 0.1.1, releases go to npm from GitHub Actions with Trusted Publishing and signed SLSA provenance.",
      ],
    },
  ],
  ogImage: "landing-carousel",
  heroTone: "light",
};
