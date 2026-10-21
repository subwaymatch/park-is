import type { Project } from "../projects";

export const samsungDrs: Project = {
  slug: "samsung-drs",
  name: "Samsung DRS",
  year: "2016",
  tagline: "A defect and code review tracker, recreated from Samsung’s printing division.",
  links: [
    { label: "Live demo", url: "https://samsung-drs-demo.subwaymatch.workers.dev/" },
    { label: "GitHub", url: "https://github.com/subwaymatch/samsung-drs-demo" },
  ],
  summary: [
    "A recreation of the defect and code review tracker built at Samsung Electronics’ printing division in 2016–2017. Firmware, QA and code review teams in Suwon and Bangalore used it to track defects and reviews for printer and copier firmware.",
    "The demo generates about 800 defects and 630 code reviews from a fixed seed, with insights, diffs, line comments, digests and role-based permissions. All data is mock data.",
  ],
  facts: [],
  sections: [
    {
      type: "full",
      figure: {
        file: "still-01",
        kind: "still",
        shape: "wide",
        caption: "The Insights migration diagram: DRS linking IBM Rational and Review Board to Perforce and Atlassian.",
      },
    },
    {
      type: "text",
      label: "Process",
      paragraphs: [
        "The original measured defects and reviews against severity targets and kept records linked while the teams moved from IBM Rational ClearQuest and Review Board to Perforce, Helix Swarm, Jira and Confluence.",
        "The demo builds its records in the browser, from January 2016 to September 2017, across 44 printer and copier models, 34 people in 8 teams and 3 migration waves. The server renders only the page shell, edits are saved to localStorage, and the demo clock is stopped at 6 p.m. on 15 September 2017.",
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "still-02",
          kind: "still",
          shape: "phone",
          caption: "The defect list on a phone: scope tabs, status filter, search, sort and defect cards.",
        },
        {
          file: "still-03",
          kind: "still",
          shape: "phone",
          caption:
            "Defect D-17-0363 on a phone: in progress, critical, its reporter and the affected PS-C3150FR model.",
        },
      ],
    },
    {
      type: "aside",
      figure: {
        file: "still-04",
        kind: "still",
        shape: "tall",
        caption: "Defect D-17-0363: status, severity, reporter, affected model and the PS-C3150FR spec card.",
      },
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption: "Insights, a defect search with J/K keys, a relationship map, a review diff and duplicate detection.",
      },
    },
    {
      type: "text",
      paragraphs: [
        "The recreation runs on Vinext, the Next.js API on Vite, with React 19, Base UI, Tailwind CSS and React Flow, deployed to Cloudflare Workers. No sign-in is needed: Settings switches between users to show each role’s permissions.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "still-05",
        kind: "still",
        shape: "wide",
        caption: "The defect list searched for C3150FR, with two defects selected and the bulk edit bar open.",
      },
    },
  ],
  ogImage: "still-01",
  heroTone: "light",
};
