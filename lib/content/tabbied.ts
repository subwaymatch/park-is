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
    {
      type: "text",
      label: "Templates",
      paragraphs: [
        "377 one-page sites for real kinds of business, 48 to a gallery page under 12 category filters. Search matches words and their stems, so “plumber” finds Northside Plumbing.",
      ],
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
        file: "site-northside",
        kind: "loop",
        shape: "wide",
        caption: "Northside Plumbing on desktop: the emergency number, the services and a fixed-price job list.",
      },
    },
    {
      type: "full",
      figure: {
        file: "site-lodge",
        kind: "loop",
        shape: "wide",
        caption: "High Pass Lodge on desktop, from its illustrated hero to the rooms and dinner.",
      },
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-arcade",
          kind: "loop",
          shape: "phone",
          caption: "Continue?, an arcade bar template, on a phone.",
        },
        {
          file: "phone-balloons",
          kind: "loop",
          shape: "phone",
          caption: "Halfmoon Balloon Flights on a phone, from the weather panel to the flights.",
        },
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-paws",
          kind: "loop",
          shape: "phone",
          caption: "Muddy Paws, a mobile dog groomer, opening its menu, then the week’s route.",
        },
        {
          file: "phone-inkwell",
          kind: "loop",
          shape: "phone",
          caption: "Inkwell Tattoo on a phone: this month’s flash sheet, with sizes and prices.",
        },
      ],
    },
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
        caption: "The Download menu: HTML & CSS or React, free and unlimited.",
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
        caption: "The home page, the gallery, recoloring the Wild Stem florist site, then the pattern editor.",
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
  ],
  ogImage: "gallery",
  heroTone: "light",
};
