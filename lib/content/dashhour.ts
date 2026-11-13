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
    "It began as six pages of pen sketches at a 2016 hackathon hosted by Samsung Electronics, and won first place. This prototype rebuilds it as a responsive web app: three tabs on a phone, and a list, map and branch panel side by side on a desktop.",
  ],
  facts: [
    ["Award", "1st place, BlueHack, a hackathon hosted by Samsung Electronics (2016)"],
    ["Team", "Bolim Lee, team lead\nYe Joo Park, sole developer\nA product manager and a marketer"],
    ["Stack", "Vinext, React 19, Base UI, MapLibre GL with OpenFreeMap tiles, Cloudflare Workers"],
    ["Note", "A prototype with simulated queues, not affiliated with or endorsed by any bank"],
  ],
  sections: [
    {
      type: "text",
      label: "Sketches",
      paragraphs: [
        "The six notepad pages were redrawn as clean line work. A story page sets each beside the screen it became, and a switch brings back the scanned page with its handwritten Korean notes.",
      ],
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
      caption: "The DashHour mark: a ticket whose gold stub tears along the perforation and snaps back.",
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
      type: "text",
      label: "Tickets",
      paragraphs: [
        "Pick a counter and the sheet shows when you’ll be called and when to leave. Once your number is called you have 10 minutes to reach the counter, or the ticket is released as a no-show.",
      ],
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
      type: "text",
      label: "About",
      paragraphs: ["An About page presents DashHour as if it had shipped, in English and Korean."],
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
      type: "text",
      label: "Demo data",
      paragraphs: [
        "Queues run on a demo clock that starts at 10:32, in real time or at 10× or 30×. The map, stations and walking routes come from OpenStreetMap; the branches’ details are illustrative.",
      ],
    },
  ],
  ogImage: "branches",
  heroTone: "light",
  color: "#b4a67a",
};
