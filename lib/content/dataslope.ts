import type { Project } from "../projects";

export const dataslope: Project = {
  slug: "dataslope",
  name: "Dataslope",
  year: "2026",
  tagline: "Learn Python, SQL, C++ and more in the browser. Free, no sign-up.",
  links: [
    { label: "https://dataslope.com", url: "https://dataslope.com" },
    { label: "Source", url: "https://github.com/dataslope/dataslope/" },
  ],
  summary: [
    "Free courses, challenges, interview prep and playgrounds for Python, SQL, R, C, C++, Java, C# and more, with no account needed.",
    "There are 33 courses, six interview-prep tracks, 300 challenges and 3,700+ runnable code blocks. Every language runs in the reader’s own tab, so nothing runs on a server and there is no limit on runs.",
  ],
  facts: [
    ["Runtimes", "Pyodide, WebR, PGlite, SQLite WASM, DuckDB-Wasm, Clang, CheerpJ, Roslyn, php-wasm"],
    ["Stack", "Next.js on Cloudflare Workers, MDX lessons, search on D1"],
    ["License", "Code MIT; lessons, illustrations and charts CC BY-NC 4.0"],
  ],
  sections: [
    {
      type: "text",
      label: "Courses",
      paragraphs: [
        "From Python Basics and SQL with PostgreSQL to C++, statistics, machine learning and how LLMs work, filtered by language and level.",
      ],
    },
    {
      type: "logo",
      caption: "The Dataslope mark: two mirrored strokes in #148cff that overlap at the peak.",
    },
    {
      type: "full",
      figure: {
        file: "catalog",
        kind: "loop",
        shape: "wide",
        caption: "The catalog filtered to SQL, then to intermediate.",
      },
    },
    {
      type: "text",
      label: "Illustrations",
      paragraphs: [
        "Every course and track has an isometric illustration in one house style, cut out so it works in light and dark mode.",
      ],
    },
    {
      type: "pair",
      figures: [
        { file: "phone-light", kind: "loop", shape: "phone", caption: "The catalog on a phone in light mode." },
        { file: "phone-dark", kind: "loop", shape: "phone", caption: "The same scroll in dark mode." },
      ],
    },
    {
      type: "text",
      label: "Lessons",
      paragraphs: ["Every code block is an editor. Run swaps the recorded output for a live result from the tab."],
    },
    {
      type: "aside",
      figure: {
        file: "lesson-python",
        kind: "loop",
        shape: "tall",
        caption: "Plotly Express: change the data, Run, and the chart redraws.",
      },
    },
    {
      type: "pair",
      figures: [
        {
          file: "lesson-sql",
          kind: "loop",
          shape: "wide",
          caption: "PostgreSQL: ORDER BY inside OVER turns totals into running totals.",
        },
        {
          file: "lesson-r",
          kind: "loop",
          shape: "wide",
          caption: "R on WebR: grouping mtcars by gear with dplyr.",
        },
      ],
    },
    {
      type: "pair",
      figures: [
        { file: "lesson-c", kind: "loop", shape: "wide", caption: "C compiled with Clang and run in the tab." },
        { file: "lesson-csharp", kind: "loop", shape: "wide", caption: "C# LINQ compiled with Roslyn." },
      ],
    },
    {
      type: "text",
      label: "Challenges",
      paragraphs: [
        "300 graded challenges, and six interview tracks from data analyst and data engineer to ML and backend engineer.",
      ],
    },
    {
      type: "aside",
      figure: {
        file: "challenge",
        kind: "loop",
        shape: "tall",
        caption: "Group Anagrams: a solution submitted against six checks.",
      },
    },
    {
      type: "full",
      figure: {
        file: "interview",
        kind: "loop",
        shape: "wide",
        caption: "The six interview-prep tracks, each with its illustration.",
      },
    },
    {
      type: "text",
      label: "Playgrounds",
      paragraphs: [
        "16 playgrounds: code editors in nine languages, web and React sandboxes, Bash, Git, and a SQL workbench for PostgreSQL, SQLite and DuckDB.",
      ],
    },
    {
      type: "pair",
      figures: [
        { file: "playgrounds", kind: "still", shape: "tall", caption: "The playground index." },
        {
          file: "pg-postgres",
          kind: "loop",
          shape: "tall",
          caption: "The PostgreSQL workbench: schema tree, a query and its result grid.",
        },
      ],
    },
    {
      type: "full",
      figure: {
        file: "pg-duckdb",
        kind: "loop",
        shape: "wide",
        caption: "The DuckDB workbench: a query, then its ER diagram.",
      },
    },
    {
      type: "full",
      figure: {
        file: "pg-git",
        kind: "loop",
        shape: "wide",
        caption: "The Git playground: stage, commit and read the log as the graph updates.",
      },
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption: "The home page, the catalog, interview prep, a Python lesson and a Postgres query.",
      },
    },
    {
      type: "full",
      figure: {
        file: "search",
        kind: "loop",
        shape: "wide",
        caption: "Ctrl+K search, an FTS5 index on D1, opening a lesson with the word highlighted.",
      },
    },
    {
      type: "full",
      figure: {
        file: "theme",
        kind: "loop",
        shape: "wide",
        caption: "Light and dark: the chart switches palette in place.",
      },
    },
  ],
  ogImage: "catalog",
  heroTone: "light",
};
