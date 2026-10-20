export type Link = { label: string; url: string };

export type Project = {
  slug: string;
  name: string;
  year: string;
  revived?: string;
  tagline: string;
  body: string[];
  process: string[];
  outcome: string[];
  links: Link[];
  /** Captions for figures 01–05. */
  captions: [string, string, string, string, string];
  videoCaption: string;
  /** Tone of the hero loop's top band, where the header sits: "dark" gets white ink. */
  heroTone: "light" | "dark";
};

export const projects: Project[] = [
  {
    slug: "tabbied",
    name: "Tabbied",
    year: "2019",
    revived: "2026",
    tagline: "Free website templates for every trade, with generated patterns in place of stock photos.",
    body: [
      "377 free website templates for florists, electricians, bakers and other trades. Each template uses a generated pattern instead of stock photography.",
      "Palettes and patterns can be changed per template, and sites download as HTML/CSS or React. The patterns are also available on their own as PNG, SVG or a React component.",
    ],
    process: [
      "Every pattern is a small css-doodle program rather than a picture, drawn fresh in the browser, so pressing Shuffle gives an arrangement nobody has seen before. A pattern exports as a 3000px PNG for print or as a vector SVG.",
      "Each template is a complete one-page site for a real kind of business, built around one pattern and themed with a single palette, which is why no two look alike. The site is a static Next.js export on Cloudflare Workers, with a small Hono Worker for accounts, downloads and the API.",
    ],
    outcome: [
      "Tabbied now has 382 patterns, 437 palettes and 377 templates. The patterns are published as the tabbied npm package for React, Vue, Svelte and plain JavaScript, and an MCP server lets coding agents use them. Sy Hong came up with the idea and designed Tabbied; Ye Joo Park built it.",
    ],
    links: [
      { label: "Visit site", url: "https://tabbied.com" },
      { label: "GitHub", url: "https://github.com/tabbied-design/tabbied/" },
    ],
    captions: [
      "The homepage: free website templates for every trade, 377 of them, above a carousel of trades.",
      "The Understory plant-care template on a phone, its hero set over a monstera-leaf pattern.",
      "The High Pass Lodge template on a phone: a mountain lodge hero with booking buttons.",
      "The pattern editor on Northern Lights, with palette, aspect ratio, density and frequency controls.",
      "The template gallery: trade category filters above cards for Wild Stem, Live Wire Electric and more.",
    ],
    videoCaption: "The homepage, the template gallery, the Wild Stem florist site and recoloring it, then the pattern editor.",
    heroTone: "light",
  },
  {
    slug: "dataslope",
    name: "Dataslope",
    year: "2026",
    tagline: "Learn Python, SQL, C++ and more in the browser. Free, no sign-up.",
    body: [
      "Browser-based courses, challenges and playgrounds for Python, R, JavaScript, C, C++, Java, C#, PostgreSQL, SQLite, DuckDB and more, all running on WebAssembly.",
      "33 free courses, 300+ graded challenges, role-based interview prep and 3,700+ runnable code blocks. No account is needed.",
    ],
    process: [
      "Every runtime is compiled to WebAssembly and runs in the reader’s own tab: Pyodide for Python, WebR for R, PGlite for PostgreSQL, DuckDB-Wasm, Clang for C and C++, CheerpJ for Java and Roslyn for C#. With no code running on a server, there is nothing to meter, so there is no execution quota.",
      "The site is Next.js on Cloudflare Workers. Lessons are written in MDX, prerendered and served statically, and search is a SQLite FTS5 index on D1.",
    ],
    outcome: [
      "Dataslope has 33 courses and six interview-prep tracks, for data analysts, data scientists, data engineers, analytics engineers, machine learning engineers and backend engineers. The code is MIT-licensed and the course content is CC BY-NC 4.0.",
    ],
    links: [
      { label: "Visit site", url: "https://dataslope.com" },
      { label: "GitHub", url: "https://github.com/dataslope/dataslope/" },
    ],
    captions: ["", "", "", "", ""],
    videoCaption: "",
    heroTone: "light",
  },
  {
    slug: "react-3d-mockups",
    name: "React 3D Mockups",
    year: "2026",
    tagline: "Live 3D device mockups for React. Real DOM on the glass.",
    body: [
      "GPU-accelerated 3D device mockups for React. Any content placed on the screen renders live: DOM, video and iframes, crisp at any angle.",
      "Every model is generated procedurally at runtime, so there are no 3D asset files to host. The lineup covers 33 devices plus books, packaging, posters, billboards and vehicles.",
    ],
    process: [
      "Screen content is regular DOM, positioned on the glass with CSS 3D transforms, so React state and effects, video and iframes keep running, and the browser draws the text sharp at any angle. An experimental prop lets the screens take clicks, scrolling and typing while the hardware still covers them.",
      "The package is built in two layers: a renderer-agnostic core that describes devices, objects and behaviors as data and math using only three.js, and the React components that render it with react-three-fiber.",
    ],
    outcome: [
      "The package is on npm, published from CI with npm Trusted Publishing. The docs site has a gallery of all 58 models, a live prop explorer for each one and twelve example scenes.",
    ],
    links: [
      { label: "Website", url: "https://area.is/react-3d-mockups" },
      { label: "GitHub", url: "https://github.com/area-is/react-3d-mockups" },
    ],
    captions: ["", "", "", "", ""],
    videoCaption: "",
    heroTone: "light",
  },
  {
    slug: "layeris",
    name: "layeris",
    year: "2019",
    revived: "2025",
    tagline: "Photoshop-style blend modes, adjustments and curves for Python.",
    body: [
      "A Python library for blend modes, brightness, contrast, hue, saturation and lightness adjustments, and curves on separate RGB channels. Every operation returns the image, so an edit reads as one chained pipeline.",
      "Per-channel operations on 8-bit photos update a 256-entry lookup table instead of every pixel, bringing a 12-megapixel edit from 4.1 s to about 0.2 s.",
    ],
    process: [
      "The library covers 14 blend modes and 9 adjustments. A pipeline can be written as chained calls or loaded from a dict or JSON file, and clone() branches an edit without starting over.",
      "Pillow applies the combined lookup table in a single pass, which also cuts peak memory on a 12-megapixel edit from about 1.2 GB to under 200 MB. The documentation site is generated by a script that runs every snippet verbatim to render its image, so each example is the real output of the code beside it.",
    ],
    outcome: [
      "layeris installs with pip install layeris, needs Python 3.10 or later, and depends only on NumPy, Pillow and Requests. The original Layer.is won 2nd place, the Gold Prize and NIPA President’s Award, in the general division of the 2019 Open Source Software Developer Competition, where over 100 teams took part.",
    ],
    links: [
      { label: "Website", url: "https://subwaymatch.github.io/layer-is-python/index.html" },
      { label: "GitHub", url: "https://github.com/subwaymatch/layer-is-python" },
    ],
    captions: [
      "The documentation overview: tagline, a look switcher with its code, and a cross-processed photo.",
      "The overview on a phone: look tabs, the Cross-processed curve code and the resulting photo.",
      "The Neon Nights recipe on a phone: before/after slider, description, methods used and code.",
      "The blend modes page: overlay, soft light, hard light and vivid light on three sample photos.",
      "The examples page: the Teal & Orange recipe with a before/after slider and its curve code.",
    ],
    videoCaption: "A tour of the documentation: switching looks, dragging before/after sliders, the blend-mode grid and the API.",
    heroTone: "light",
  },
  {
    slug: "samsung-drs",
    name: "Samsung DRS",
    year: "2016",
    tagline: "A defect and code review tracker, recreated from Samsung’s printing division.",
    body: [
      "A recreation of the defect and code review tracker built at Samsung Electronics’ printing division in 2016–2017. Firmware, QA and code review teams in Suwon and Bangalore used it to track defects and reviews for printer and copier firmware.",
      "The demo generates about 800 defects and 630 code reviews from a fixed seed, with insights, diffs, line comments, digests and role-based permissions. All data is mock data.",
    ],
    process: [
      "The original measured defects and reviews against severity targets and kept records linked while the teams moved from IBM Rational ClearQuest and Review Board to Perforce, Helix Swarm, Jira and Confluence.",
      "The demo builds its records in the browser, from January 2016 to September 2017, across 44 printer and copier models, 34 people in 8 teams and 3 migration waves. The server renders only the page shell, edits are saved to localStorage, and the demo clock is stopped at 6 p.m. on 15 September 2017.",
    ],
    outcome: [
      "The recreation runs on Vinext, the Next.js API on Vite, with React 19, Base UI, Tailwind CSS and React Flow, deployed to Cloudflare Workers. No sign-in is needed: Settings switches between users to show each role’s permissions.",
    ],
    links: [
      { label: "Live demo", url: "https://samsung-drs-demo.subwaymatch.workers.dev/" },
      { label: "GitHub", url: "https://github.com/subwaymatch/samsung-drs-demo" },
    ],
    captions: [
      "The Insights migration diagram: DRS linking IBM Rational and Review Board to Perforce and Atlassian.",
      "The defect list on a phone: scope tabs, status filter, search, sort and defect cards.",
      "Defect D-17-0363 on a phone: in progress, critical, its reporter and the affected PS-C3150FR model.",
      "Defect D-17-0363: status, severity, reporter, affected model and the PS-C3150FR spec card.",
      "The defect list searched for C3150FR, with two defects selected and the bulk edit bar open.",
    ],
    videoCaption: "Insights, a defect search with J/K keys, a relationship map, a review diff and duplicate detection.",
    heroTone: "light",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function yearText(p: Project) {
  return p.revived ? `${p.year}, revived ${p.revived}` : p.year;
}

/** Figure slots on the project page: file suffix and intrinsic size. */
export const FIGURES = [
  { n: "01", width: 1920, height: 1080 },
  { n: "02", width: 1600, height: 2000 },
  { n: "03", width: 1600, height: 2000 },
  { n: "04", width: 1920, height: 1440 },
  { n: "05", width: 1920, height: 1080 },
] as const;

export function media(slug: string) {
  return {
    loop: `/media/${slug}-loop.mp4`,
    loopPoster: `/media/${slug}-loop.jpg`,
    video: `/media/${slug}.mp4`,
    videoPoster: `/media/${slug}-video.jpg`,
    figure: (n: string) => `/media/${slug}-${n}.jpg`,
  };
}
