import type { Project } from "../projects";

export const samsungDrs: Project = {
  slug: "samsung-drs",
  name: "Samsung DRS",
  year: "2016",
  tagline: "A defect and code review tracker, recreated from Samsung’s printing division.",
  links: [
    { label: "Live demo", url: "https://samsung-drs-demo.subwaymatch.workers.dev/" },
    { label: "Source", url: "https://github.com/subwaymatch/samsung-drs-demo" },
  ],
  summary: [
    "A recreation of the defect and code review tracker built at Samsung Electronics’ printing division in 2016–2017. Firmware, QA and code review teams in Suwon and Bangalore used it while moving from IBM Rational and Review Board to Perforce, Helix Swarm, Jira and Confluence.",
    "The demo runs on mock data generated in the browser: 812 defects and 631 code reviews across 44 printer and copier models.",
  ],
  facts: [
    ["Original", "React and Node.js, styled with Bootstrap"],
    ["Stack", "Vinext, React 19, Base UI, Tailwind CSS, React Flow, Cloudflare Workers"],
    ["Note", "A recreation with mock data, not affiliated with or endorsed by Samsung Electronics"],
  ],
  sections: [
    {
      type: "text",
      label: "Seven systems",
      paragraphs: [
        "During the migration the same work was spread across seven systems. DRS synced with all of them, so every defect and review kept its records linked.",
      ],
    },
    {
      type: "logo",
      caption: "The DRS mark: one shape drawn three times in three violets, like sheets leaving a printer.",
    },
    {
      type: "full",
      figure: {
        file: "insights-migration",
        kind: "loop",
        shape: "wide",
        caption: "The migration diagram, drawn with React Flow, then defects by migration state.",
        mat: true,
      },
    },
    {
      type: "text",
      label: "Insights",
      paragraphs: [
        "Defects are measured against severity targets, and code reviews against a 48-hour turnaround, over 7 days to 6 months.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "insights-ranges",
        kind: "loop",
        shape: "wide",
        caption: "Switching the reporting period; the tiles and severity targets recompute.",
        mat: true,
      },
    },
    {
      type: "aside",
      figure: {
        file: "insights-charts",
        kind: "loop",
        shape: "tall",
        caption: "Reported vs resolved, review outcomes, a product line heatmap and turnaround by change type.",
        mat: true,
      },
    },
    {
      type: "text",
      label: "Defects",
      paragraphs: [
        "The defect list filters by scope, status and search, keeps its state in the URL, and can be driven entirely from the keyboard.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "defects-list",
        kind: "loop",
        shape: "wide",
        caption: "Scope tabs, a status filter, a search for C3150 and a sort by severity.",
        mat: true,
      },
    },
    {
      type: "full",
      figure: {
        file: "defects-keys",
        kind: "loop",
        shape: "wide",
        caption: "J and K move, X selects, and the bulk edit bar appears (keys shown bottom right).",
        mat: true,
      },
    },
    {
      type: "aside",
      figure: {
        file: "defect-detail",
        kind: "loop",
        shape: "tall",
        caption: "Defect D-17-0363: status, severity, the PS-C3150FR spec card and its records in five systems.",
        mat: true,
      },
    },
    {
      type: "embed",
      name: "details-regions",
      caption: "Engineering fields and three sales-region dot maps; Korea and Japan get a ring.",
    },
    {
      type: "full",
      figure: {
        file: "defect-map",
        kind: "loop",
        shape: "wide",
        caption: "The relationship map: linked reviews, suggested defects and affected product lines.",
        mat: true,
      },
    },
    {
      type: "full",
      figure: {
        file: "defect-duplicate",
        kind: "loop",
        shape: "wide",
        caption: "Reporting a duplex jam: D-17-0363 appears as a possible duplicate.",
        mat: true,
      },
    },
    {
      type: "text",
      label: "Code reviews",
      paragraphs: [
        "Every change goes to the Code Review Team. Diffs show side by side or unified, and any line takes a comment.",
      ],
    },
    {
      type: "aside",
      figure: {
        file: "review-diff",
        kind: "loop",
        shape: "tall",
        caption: "CR-2225’s diff, unified and side by side, then a comment on one line.",
        mat: true,
      },
    },
    {
      type: "text",
      label: "Roles",
      paragraphs: ["There is no sign-in. Settings switches between the 34 people, and each role sees what it may do."],
    },
    {
      type: "full",
      figure: {
        file: "roles",
        kind: "loop",
        shape: "wide",
        caption: "As a QA engineer a review waits; as the review team lead it gets a reviewer.",
        mat: true,
      },
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption: "Insights, a defect search, D-17-0363, its relationship map, a review diff and duplicate detection.",
        mat: true,
      },
    },
    {
      type: "text",
      label: "And more",
      paragraphs: ["Daily and weekly email digests, team profiles, notifications, and Ctrl+K search across everything."],
    },
    {
      type: "full",
      figure: {
        file: "digests",
        kind: "loop",
        shape: "wide",
        caption: "Two daily digests, then a weekly one filtered to major and critical defects.",
        mat: true,
      },
    },
    {
      type: "full",
      figure: {
        file: "teams",
        kind: "loop",
        shape: "wide",
        caption: "The Teams page, searched for Bangalore.",
        mat: true,
      },
    },
    {
      type: "aside",
      figure: {
        file: "notifications",
        kind: "loop",
        shape: "tall",
        caption: "Notifications filtered to unread and mentions, then marked as read.",
        mat: true,
      },
    },
    {
      type: "full",
      figure: {
        file: "palette",
        kind: "loop",
        shape: "wide",
        caption: "Ctrl+K: a search for duplex, then for a person (keys shown bottom right).",
        mat: true,
      },
    },
    {
      type: "pair",
      figures: [
        { file: "phone-insights", kind: "loop", shape: "phone", caption: "Insights on a phone." },
        { file: "phone-defects", kind: "loop", shape: "phone", caption: "The defect list and a defect on a phone." },
      ],
    },
    {
      type: "text",
      label: "Mock data",
      paragraphs: [
        "Records are generated in the browser from a fixed seed, January 2016 to September 2017. Edits stay in localStorage, and the demo clock starts at 6 p.m. on 15 September 2017.",
      ],
    },
  ],
  ogImage: "insights-migration",
  heroTone: "light",
};
