import type { Project } from "../projects";

export const dataslope: Project = {
  slug: "dataslope",
  name: "Dataslope",
  year: "2026",
  tagline: "Learn Python, SQL, C++ and more in the browser. Free, no sign-up.",
  links: [
    { label: "Visit site", url: "https://dataslope.com" },
    { label: "GitHub", url: "https://github.com/dataslope/dataslope/" },
  ],
  summary: [
    "Browser-based courses, challenges and playgrounds for Python, R, JavaScript, C, C++, Java, C#, PostgreSQL, SQLite, DuckDB and more, all running on WebAssembly.",
    "33 free courses, 300+ graded challenges, role-based interview prep and 3,700+ runnable code blocks. No account is needed.",
  ],
  facts: [],
  sections: [
    {
      type: "full",
      figure: {
        file: "still-01",
        kind: "still",
        shape: "wide",
        caption: "The home page: a scrolling language marquee above a runnable Python challenge card.",
      },
    },
    {
      type: "text",
      label: "Process",
      paragraphs: [
        "Every runtime is compiled to WebAssembly and runs in the reader’s own tab: Pyodide for Python, WebR for R, PGlite for PostgreSQL, DuckDB-Wasm, Clang for C and C++, CheerpJ for Java and Roslyn for C#. With no code running on a server, there is nothing to meter, so there is no execution quota.",
        "The site is Next.js on Cloudflare Workers. Lessons are written in MDX, prerendered and served statically, and search is a SQLite FTS5 index on D1.",
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "still-02",
          kind: "still",
          shape: "phone",
          caption: "A Python Basics lesson on a phone: a runnable code block with its output preview.",
        },
        {
          file: "still-03",
          kind: "still",
          shape: "phone",
          caption: "The course catalog on a phone, with search, language and difficulty filters and 33 courses.",
        },
      ],
    },
    {
      type: "aside",
      figure: {
        file: "still-04",
        kind: "still",
        shape: "tall",
        caption: "The PostgreSQL workbench: schema tree, a JOIN query in a tab and its 18-row result grid.",
      },
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption:
          "The home page, the catalog filtered to SQL, a Python lesson edited and run, a Postgres query, then interview prep.",
      },
    },
    {
      type: "text",
      paragraphs: [
        "Dataslope has 33 courses and six interview-prep tracks, for data analysts, data scientists, data engineers, analytics engineers, machine learning engineers and backend engineers. The code is MIT-licensed and the course content is CC BY-NC 4.0.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "still-05",
        kind: "still",
        shape: "wide",
        caption: "A C++ lesson on variables and memory: a locker illustration above a table of declarations.",
      },
    },
  ],
  ogImage: "still-01",
  heroTone: "light",
};
