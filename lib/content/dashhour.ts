import type { Project } from "../projects";

export const dashhour: Project = {
  slug: "dashhour",
  name: "DashHour",
  year: "2016",
  revived: "2026",
  tagline: "Take a bank’s queue number before you get there, and arrive as it’s called.",
  links: [
    { label: "Live demo", url: "https://dashhour.subwaymatch.workers.dev/" },
    { label: "Source", url: "https://github.com/subwaymatch/dashhour-prototype" },
  ],
  summary: [
    "DashHour shows how long the queue is at each nearby bank branch and how busy it usually gets through the day. Take a number from anywhere, and the ticket counts down so you know when to leave.",
    "It began as six pages of pen sketches at a 2016 hackathon hosted by Samsung Electronics, and won first place.",
  ],
  facts: [
    ["Award", "1st place, BlueHack, a hackathon hosted by Samsung Electronics (2016)"],
    ["Team", "Bolim Lee, Team Lead\nYe Joo Park, Developer\nA product manager and a marketer"],
    ["Note", "A prototype with simulated queues, not affiliated with or endorsed by any bank"],
  ],
  sections: [
    { type: "embed", name: "origin" },
    {
      type: "text",
      label: "Sketches",
      paragraphs: [
        "The six notepad pages were redrawn as clean line work. A story page sets each beside the screen it became, and a switch brings back the scanned page with its handwritten Korean notes.",
      ],
    },
    {
      type: "embed",
      name: "sketch-strip",
      caption: "The six pages, redrawn: home, the ticket sheet, the ticket, a branch, the map and the ticket box.",
      bleed: true,
    },
    {
      type: "full",
      figure: {
        file: "sketches",
        kind: "loop",
        shape: "wide",
        caption: "The home and branch sketches, each switched to its original notepad page and back.",
        mat: true,
      },
    },
    {
      type: "logo",
      caption: "The DashHour mark: a ticket whose gold stub tears off and snaps back.",
    },
    {
      type: "text",
      label: "Branches",
      paragraphs: [
        "Each branch shows its wait, the people ahead and the walk there. On a desktop the list, a street map of Gangnam Station and the branch panel sit side by side.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "branches",
        kind: "loop",
        shape: "wide",
        caption: "Choosing a branch moves the map to it and opens its counters and queues.",
        mat: true,
      },
    },
    {
      type: "aside",
      figure: {
        file: "branch",
        kind: "loop",
        shape: "tall",
        caption: "A branch page: queues by counter, crowd by hour, the walking route, then a favorite and a copied address.",
        mat: true,
      },
    },
    {
      type: "embed",
      name: "branch-scenes",
      caption: "The branch photos are generated scenes: street fronts, lobbies, counters and ATMs.",
    },
    {
      type: "pair",
      figures: [
        { file: "phone-map", kind: "still", shape: "phone", caption: "The Map tab: each pin shows its branch’s wait." },
        { file: "phone-branch", kind: "still", shape: "phone", caption: "A branch on a phone, opening with its photo." },
      ],
    },
    {
      type: "text",
      label: "Tickets",
      paragraphs: [
        "Pick a counter and the sheet shows when you’ll be called and when to leave. Once your number is called you have 10 minutes to reach the counter, or the ticket is released as a no-show.",
      ],
    },
    {
      type: "embed",
      name: "story",
      caption: "A visit in the app’s illustrations: the wait it replaces, then find, take, arrive and your turn.",
    },
    {
      type: "full",
      figure: {
        file: "take-ticket",
        kind: "still",
        shape: "wide",
        caption: "Taking a ticket for foreign exchange: the wait, when to leave, and an alert three people ahead.",
        mat: true,
      },
    },
    {
      type: "aside",
      figure: {
        file: "ticket-called",
        kind: "loop",
        shape: "tall",
        caption: "Ticket 762 at 30× demo speed: the ring empties, and counter 6 calls the number.",
        mat: true,
      },
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-home",
          kind: "loop",
          shape: "phone",
          caption: "The shortest queue nearby, then a ticket from the bottom sheet.",
        },
        { file: "phone-ticket", kind: "loop", shape: "phone", caption: "The Ticket tab at 30×, until it’s your turn." },
      ],
    },
    {
      type: "aside",
      figure: {
        file: "account",
        kind: "still",
        shape: "tall",
        caption: "The account page on a desktop: recent visits, alerts, language and demo speed.",
        mat: true,
      },
    },
    {
      type: "text",
      label: "About",
      paragraphs: ["An About page presents DashHour as if it had shipped, in Korean and English."],
    },
    {
      type: "full",
      figure: {
        file: "about",
        kind: "loop",
        shape: "wide",
        caption: "The About page: the ticket tears and snaps back, then the problem and three steps.",
        mat: true,
      },
    },
    {
      type: "full",
      figure: {
        file: "about-steps",
        kind: "still",
        shape: "wide",
        caption: "Three steps: pick a nearby branch, take a ticket from anywhere, arrive just in time.",
        mat: true,
      },
    },
    {
      type: "text",
      label: "Not found",
      paragraphs: [
        "Any address the app doesn’t have, an unknown branch included, gets a 404 inside the app: a torn ticket numbered 404 rolls its digits in like a queue display, beside someone lost at a signpost.",
      ],
    },
    {
      type: "aside",
      figure: {
        file: "not-found",
        kind: "loop",
        shape: "tall",
        caption: "The 404 as it loads, then its suggestions: the map, your ticket, About and the sketches.",
        mat: true,
      },
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-not-found",
          kind: "still",
          shape: "phone",
          caption: "On a phone the 404 keeps the tab bar, with no tab marked.",
        },
        {
          file: "phone-onboarding",
          kind: "still",
          shape: "phone",
          caption: "A first visit’s intro waits for an app screen, so it never covers the 404.",
        },
      ],
    },
    {
      type: "text",
      label: "Demo data",
      paragraphs: [
        "Queues run on a demo clock that starts at 10:32, in real time or at 10× or 30×. The map, stations and walking routes come from OpenStreetMap; the branches’ details are illustrative.",
      ],
    },
    { type: "embed", name: "closing" },
  ],
  ogImage: "branches",
  heroTone: "light",
};
