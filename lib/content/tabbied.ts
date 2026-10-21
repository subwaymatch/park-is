import type { Project } from "../projects";

export const tabbied: Project = {
  slug: "tabbied",
  name: "Tabbied",
  year: "2019",
  revived: "2026",
  tagline: "Free website templates for every trade, with generated patterns in place of stock photos.",
  links: [
    { label: "https://tabbied.com", url: "https://tabbied.com" },
    { label: "Source", url: "https://github.com/tabbied-design/tabbied/" },
  ],
  summary: [
    "Tabbied is a free library of 377 one-page website templates for trades, 382 generated patterns and 437 color palettes. Every template is built around a pattern instead of stock photos.",
    "Recolor a template, swap its patterns and download it as HTML/CSS or React, with no account. The patterns are also an npm package for React, Vue, Svelte and plain JavaScript, with an MCP server for coding agents.",
  ],
  facts: [
    ["Stack", "Next.js static export on Cloudflare Workers, with a Hono Worker, D1 and R2"],
    [
      "Packages",
      "[tabbied](https://www.npmjs.com/package/tabbied) and [tabbied-mcp](https://www.npmjs.com/package/tabbied-mcp) on npm, MIT licensed",
    ],
    [
      "Credits",
      "Built with [Sy Hong](https://www.syunghong.com/), who came up with the idea and designed Tabbied. Patterns are drawn with [css-doodle](https://css-doodle.com/) by Chuan Yuan.",
    ],
  ],
  sections: [
    { type: "embed", name: "band", bleed: true },
    {
      type: "text",
      label: "Templates",
      paragraphs: [
        "377 one-page sites for real kinds of business, 48 to a gallery page under 12 category filters. Search matches words and their stems, so “plumber” finds plumbing templates.",
      ],
    },
    {
      type: "embed",
      name: "templates",
      bleed: true,
      caption: "Twelve templates at desktop width, from a golf club to a payroll consultant.",
    },
    {
      type: "full",
      figure: {
        file: "gallery",
        kind: "loop",
        shape: "wide",
        caption: "The template gallery filtered by trade: Food & drink, Health, then Studio.",
      },
    },
    {
      type: "text",
      label: "Whole sites",
      paragraphs: [
        "Each template has the sections a small business needs, with copy written for its trade. Every one works on a phone, most with their links behind a Menu button.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "site-bex",
        kind: "loop",
        shape: "wide",
        caption: "Chronométrie Bex, a watch manufacture, from its hero numbers to the workshop.",
      },
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-posy",
          kind: "loop",
          shape: "phone",
          caption: "Posy, a wedding florist, opening its menu on a phone.",
        },
        {
          file: "phone-pho-nam",
          kind: "loop",
          shape: "phone",
          caption: "Pho Nam, a Vietnamese noodle house, from its hours to the numbered board.",
        },
      ],
    },
    {
      type: "full",
      figure: {
        file: "site-casa-olivo",
        kind: "loop",
        shape: "wide",
        caption: "Casa Olivo, a tapas bar: the tiled hero, then sixteen plates on the wall.",
      },
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-forge",
          kind: "loop",
          shape: "phone",
          caption: "Forge Strength, a strength gym: hours, memberships, then eight ways to train.",
        },
        {
          file: "phone-odd-shape",
          kind: "loop",
          shape: "phone",
          caption: "Odd Shape Studio, a freelance graphic designer, from its pitch to selected identities.",
        },
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "site-vektor",
          kind: "loop",
          shape: "wide",
          caption: "Bureau Vektor, a public statistics office: headline figures, then one series.",
        },
        {
          file: "site-klangwerk",
          kind: "loop",
          shape: "wide",
          caption: "Klangwerk, an electroacoustic studio, from its dark hero to the three rooms.",
        },
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-sleepwell",
          kind: "loop",
          shape: "phone",
          caption: "Sleepwell, a sleep clinic, opening its menu, then a night’s chart and a checklist.",
        },
        {
          file: "phone-zenith",
          kind: "loop",
          shape: "phone",
          caption: "Zenith, an observatory: a countdown to the next viewing night, then the evening’s program.",
        },
      ],
    },
    {
      type: "full",
      figure: {
        file: "site-saltline",
        kind: "loop",
        shape: "wide",
        caption: "Saltline Oyster Bar, a seafood restaurant: today’s oysters charted by brine, then the raw bar.",
      },
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-fringe",
          kind: "loop",
          shape: "phone",
          caption: "Fringe, a hair salon: hours and address, then prices at three stylist levels.",
        },
        {
          file: "phone-delancey",
          kind: "loop",
          shape: "phone",
          caption: "Delancey Deli, a sandwich deli: a paid receipt, then the board of sandwiches.",
        },
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "site-orbital",
          kind: "loop",
          shape: "wide",
          caption: "Orbital, a listening bar: three rings of seats, then the nine parts of its system.",
        },
        {
          file: "site-zwoelfton",
          kind: "loop",
          shape: "wide",
          caption: "Zwölfton, a new-music ensemble: a twelve-tone row, then the season’s six nights.",
        },
      ],
    },
    { type: "embed", name: "strip", bleed: true },
    {
      type: "text",
      label: "Make it yours",
      paragraphs: [
        "Picking a palette recolors the whole page through its CSS custom properties, on many templates the illustrations too. Shuffle patterns redraws every pattern field from the library.",
      ],
    },
    {
      type: "aside",
      figure: {
        file: "home-make",
        kind: "loop",
        shape: "tall",
        caption: "The home page demo: Live Wire Electric recolored and given new patterns from a toolbar.",
      },
    },
    {
      type: "full",
      figure: {
        file: "customize-colors",
        kind: "loop",
        shape: "wide",
        caption: "High Pass Lodge recolored in the customizer; the mountains follow each palette.",
      },
    },
    {
      type: "aside",
      figure: {
        file: "customize-patterns",
        kind: "loop",
        shape: "tall",
        caption: "Shuffle patterns redraws every pattern field on Understory Plant Care.",
      },
    },
    {
      type: "text",
      label: "Downloads",
      paragraphs: [
        "Downloads are free and need no account: plain HTML that opens straight from a folder, or a React project with a Vite scaffold.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "customize-download",
        kind: "loop",
        shape: "wide",
        caption: "Corner Pharmacy, an independent pharmacy, in the customizer’s Download menu: HTML & CSS or React.",
      },
    },
    {
      type: "text",
      label: "Patterns",
      paragraphs: [
        "Each pattern is a small [css-doodle](https://css-doodle.com/) program drawn live in the browser from a seed, so Shuffle gives a new arrangement every time.",
      ],
    },
    {
      type: "embed",
      name: "specimens",
      caption: "Nine of the 382 designs, drawn live by the tabbied package; each reseeds on its own clock.",
    },
    {
      type: "full",
      figure: {
        file: "library",
        kind: "loop",
        shape: "wide",
        caption: "The pattern library recolored from its sidebar, every card drawn live.",
      },
    },
    {
      type: "pair",
      figures: [
        {
          file: "editor-shuffle",
          kind: "loop",
          shape: "tall",
          caption: "Shuffle in the editor: a new seed, and the cells ease into place.",
        },
        {
          file: "editor-layout",
          kind: "loop",
          shape: "tall",
          caption: "Aspect ratio from tall to wide, then grid density from fine to coarse.",
        },
      ],
    },
    {
      type: "text",
      label: "Palettes",
      paragraphs: [
        "437 curated palettes of 3 to 7 colors, searchable by name, color the library, the editor and the templates alike. A pattern exports as a 3000px PNG, a vector SVG or code.",
      ],
    },
    {
      type: "embed",
      name: "palettes",
      caption: "Ogee in six library palettes, reseeded together so only the color changes.",
    },
    {
      type: "pair",
      figures: [
        {
          file: "palette-search",
          kind: "loop",
          shape: "tall",
          caption: "Searching palettes for “berry” and “light”, and trying the results on Blossom.",
        },
        {
          file: "editor-export",
          kind: "still",
          shape: "tall",
          caption: "Export: PNG, SVG, a share link, or code for React, Vue, Svelte and more.",
        },
      ],
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption: "Home page, gallery search for “tapas”, Casa Olivo recolored and reshuffled, then the pattern editor.",
      },
    },
    {
      type: "text",
      label: "For developers",
      paragraphs: [
        "The tabbied npm package draws the same patterns in React, Vue, Svelte, a web component or plain JavaScript, and a bundle carries only the designs it imports.",
      ],
    },
    {
      type: "embed",
      name: "code",
      caption: "The React component from the package: the seed in the code is the seed on screen.",
    },
    {
      type: "full",
      figure: {
        file: "docs",
        kind: "loop",
        shape: "wide",
        caption: "The For developers page: one package, six setups and tools for AI assistants.",
      },
    },
    {
      type: "text",
      label: "MCP server",
      paragraphs: [
        "At tabbied.com/mcp, coding agents can search the patterns, look at their previews and get ready code. Run locally, the server also renders SVG and PNG files.",
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "mcp",
          kind: "loop",
          shape: "wide",
          caption: "The MCP server’s page: one URL to add, with setup for each client.",
        },
        {
          file: "mcp-tools",
          kind: "loop",
          shape: "wide",
          caption: "The seven tools, from search_designs to render_design, and example prompts.",
        },
      ],
    },
    {
      type: "text",
      label: "Stack",
      paragraphs: [
        "The site is a static Next.js export on Cloudflare Workers. A small Hono Worker handles accounts, downloads, the API and MCP, with D1 and R2 behind it.",
      ],
    },
    { type: "embed", name: "closing", bleed: true },
  ],
  ogImage: "gallery",
  heroTone: "light",
};
