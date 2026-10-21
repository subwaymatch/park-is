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
    "DRS, the Defects and Reviews System, is a recreation of the defect and code review tracker built at Samsung Electronics’ printing division in 2016–2017. Firmware, QA and code review teams in Suwon and Bangalore used it to track defects and code reviews for printer and copier firmware, to measure both against severity targets, and to keep every record linked while the division moved from IBM Rational ClearQuest, ClearCase and Review Board to Perforce, Helix Swarm, Jira and Confluence, one wave of teams at a time.",
    "The demo is the whole application running on mock data. It generates 812 defects and 631 code reviews in the browser from a fixed seed, covering January 2016 to September 2017, 44 made-up printer and copier models, 34 people in 8 teams and 3 migration waves. Everything can be changed, from a defect’s status to a comment on one line of a diff, and the changes stay in the visitor’s browser. It is a portfolio piece, not affiliated with or endorsed by Samsung Electronics.",
  ],
  facts: [
    ["Original", "Samsung Electronics, Printing Solutions Business, 2016–2017; React and Node.js, styled with Bootstrap"],
    ["Stack", "Vinext (the Next.js App Router API on Vite), React 19, Base UI, Tailwind CSS 4, React Flow, Cloudflare Workers"],
    ["Mock data", "812 defects and 631 code reviews, 44 models, 34 people in 8 teams, January 2016–September 2017"],
    ["Note", "A recreation with mock data, not affiliated with or endorsed by Samsung Electronics"],
  ],
  sections: [
    {
      type: "text",
      label: "The original",
      paragraphs: [
        "DRS served the firmware, QA and code review teams of Samsung Electronics’ printing business in Suwon and Bangalore. The demo models them as 8 teams: the Software Engineering Lab, Software Quality Assurance, two Software Development Groups, an Android-based Application Development Group, the Solutions Development Group, the Hardware Engineering Group and the Code Review Team, which assigns reviewers and reviews every code change before it is submitted. Its 44 models carry made-up “PS-” numbers in six product lines: Xpress mono and color laser printers and multifunction printers, the same two kinds under ProXpress, and MultiXpress mono and color A3 copiers.",
        "Defects lived in IBM Rational ClearQuest, source history in ClearCase and code reviews in Review Board. The move to Perforce for source, Helix Swarm for review, Jira for issues and Confluence for test reports went team by team rather than all at once, so during the migration the same work was spread across seven systems. DRS synced with all of them. People filed, triaged and reviewed in one place, and the record on each side of the migration stayed in step: in the demo a defect can start in ClearQuest, gain a mirrored Jira issue, collect Perforce changelists and end with a root-cause page in Confluence.",
        "The original was a React and Node.js application styled with Bootstrap and custom CSS. Some of its libraries have since been deprecated and are no longer available, so the recreation rebuilds the same screens with current tools. Everything in it is mock data: the defects, code reviews, people, email addresses and engineering specs are invented, the model numbers belong to no real product, and the product photos are generated stand-ins.",
      ],
    },
    {
      type: "logo",
      caption:
        "The DRS mark: one rounded shape drawn three times in three violets, the darker copies shifted down and clipped inside the lightest, like sheets coming out of a printer.",
    },
    {
      type: "text",
      label: "Seven systems",
      paragraphs: [
        "Insights, the home page, opens with the migration diagram, drawn with React Flow. The legacy systems sit on the left: Rational ClearQuest for defect and change-request records, Rational ClearCase for UCM activities and the source history from before the migration, and Review Board for teams not yet on Helix Swarm. The new systems sit on the right: Jira for issues, Perforce P4 for source, jobs and changelists, Helix Swarm for code review and Confluence for test reports and root-cause pages. DRS is the card in the middle, and each animated, dashed edge is labeled with what it carries: defects, UCM history, reviews, issues, jobs and changelists, pages.",
        "Each card states its share of the data. 572 defects still lead in ClearQuest, ClearCase is frozen for waves 1 and 2, and wave 3 teams still review in Review Board. On the other side, Jira holds 240 defects that lead there and 293 mirrored copies, Perforce has 982 linked changelists, and Helix Swarm has all 631 code reviews. The columns spread out to use the width of the window and the canvas pans with a drag. When the main column is narrower than 640 pixels, the diagram turns into a plain list: the legacy systems, then DRS, then the new systems.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "insights-migration",
        kind: "loop",
        shape: "wide",
        caption:
          "The migration diagram dragged sideways and back, then the defects by migration state and all 13 components across the three waves.",
      },
    },
    {
      type: "text",
      label: "Migration waves",
      paragraphs: [
        "Components moved in three waves. Wave 1, in November 2016, took the SyncThru Web UI, the print drivers and mobile printing. Wave 2, in April 2017, took the control panel UI, networking and Wi-Fi, fax, power management and security. Wave 3, planned for December 2017, holds the print engine, scanner and ADF, copy, toner and supplies, and the finisher, so when the history ends in September 2017 those teams still work in the legacy tools.",
        "Every defect is in one of three migration states. Migrated to Jira means Jira leads and the ClearQuest record is read-only. Mirrored means ClearQuest still leads and DRS keeps a Jira copy in sync. Legacy only means the defect exists in ClearQuest alone and will move with its team’s wave. Of the 812 defects, 240 are migrated (30%), 293 mirrored (36%) and 279 legacy only (34%). A donut and a bar per component show the split, and each segment opens the defect list filtered to it.",
        "A defect page lists its record in every system: the ClearQuest id with its state, priority and owner, the ClearCase UCM activity, the Jira issue in project PRT or a note that it will be created in the team’s wave, the Perforce job that collects fixes, and the Confluence investigation or root-cause page when there is one. A badge marks the source of truth. A code review requested after its team’s cutover has no Review Board record, because it was never made there; the test suite checks that rule along with the rest of the history.",
      ],
    },
    {
      type: "text",
      label: "Insights",
      paragraphs: [
        "Below the diagram, a bar that sticks to the top of the window sets the reporting period: 7 days, 30 days, 90 days or 6 months, each ending on the last day of data. Four tiles show the period’s numbers with the change from the period before, or for open defects, since the period began. Over the last 30 days the median review turnaround is 25.4 hours, with 73% of reviews decided within the 48-hour target; first-pass approval is 73% of 41 decisions; the median time to resolve is 8.1 days over 51 resolved defects; and 36 defects are open, 6 of them critical.",
        "Severity targets set a time to respond and a time to resolve: 4 hours and 2 days for critical defects, 1 day and 7 days for major, 3 days and 21 days for minor, and 5 days and 45 days for trivial. A response is the first comment or status change by someone other than the reporter. For defects reported in the period, the table shows the share answered and resolved on time and how many open defects are already past their target. The turnaround chart plots the median hours from submission to the first review decision, by day for periods up to 30 days and by week beyond, with the 48-hour target as a dashed line and the bars above it in amber.",
        "Further down are defects reported against defects resolved, review outcomes as a waffle of 100 squares (approved on first review, modification requested, denied, withdrawn), open defects by product line and severity as a heatmap, turnaround by change type, the most active defects and code reviews with a sparkline of their activity, and the code review team’s workload. Every bar, cell and row links to the list it summarizes, and the filter arrives there as a chip that can be cleared. Tests check that the charts agree with each other, for example that the open defects tile and the heatmap count the same defects.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "insights-ranges",
        kind: "loop",
        shape: "wide",
        caption:
          "The period tabs switched from 30 days to 7 days, 90 days and 6 months and back; the tiles and the severity targets recompute each time.",
      },
    },
    {
      type: "aside",
      figure: {
        file: "insights-charts",
        kind: "loop",
        shape: "tall",
        caption:
          "Reported vs resolved, review outcomes, the product line heatmap and turnaround by change type, with tooltips on a bar, a square and two cells.",
      },
    },
    {
      type: "text",
      label: "Defects",
      paragraphs: [
        "The defect list has four scopes, each with a count: all defects, those assigned to me, those reported by me and those I’m subscribed to. A status menu narrows it to open (21), in progress (15), resolved (235) or closed (541), a search box matches the id, title, model and component, and the column headers sort by id, title, severity, status or last update. Each page holds 15 rows.",
        "The list keeps its state in the URL, as in ?scope=mine&status=open&q=SyncThru&sort=-updated&page=2, so a filtered list can be shared and comes back as it was after Back. Typing updates the address with history.replaceState instead of navigating. Links from Insights add their own filters, such as a model, a product line, a severity, a migration state or a date range, and each one shows as a chip above the list.",
        "Titles follow the pattern the report form suggests, the model in brackets and then a short summary, in Korean or English: [PS-C3150FR] 양면 인쇄 시 2페이지 이후 용지 걸림 (Jam 0x21) 발생, a paper jam after the second page of a duplex job, sits next to [PS-M2975FW] Mopria print from Android 7.1 fails with “Printer unavailable”. Under each title the row lists the affected models or product line, the component and the number of comments and attachments.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "defects-list",
        kind: "loop",
        shape: "wide",
        caption:
          "Scope tabs, the status menu set to In progress, a search for C3150 and a sort by severity, with counts on every tab and option.",
      },
    },
    {
      type: "text",
      label: "Keyboard",
      paragraphs: [
        "DRS is made to be driven from the keyboard. Ctrl+K (⌘K on a Mac) searches everything, / jumps to the list’s search box, N starts a new defect, or a new review request when in code reviews, and ? opens Settings. In a list, J and K move a highlight down and up, Enter or O opens the highlighted row, X selects it, and Escape clears the selection. The shortcuts work on every page except while typing in a field, and the highlighted row is kept in view.",
        "Selecting rows, by key or by checkbox, raises a bulk edit bar at the bottom of the window. It sets the status or the severity of every selected defect, or adds an assignee, and each change is written to each defect’s activity under the current user’s name, just as a single edit would be. Moving defects to resolved or closed fills in Fixed when they have no resolution yet.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "defects-keys",
        kind: "loop",
        shape: "wide",
        caption:
          "J and K move the highlight, X selects three defects, the bulk bar offers a severity, and Escape closes the menu and clears the selection (keystrokes shown bottom right).",
      },
    },
    {
      type: "text",
      label: "A defect",
      paragraphs: [
        "D-17-0363 is one of the 20 hand-written showcase defects. 김지현 (Jihyun Kim), a senior QA engineer, reported it on September 11, 2017: on the PS-C3150FR color laser multifunction printer, duplex printing jams with Jam 0x21 after the second page. It is critical, in progress and legacy only, and it is assigned to 박성민 (Sungmin Park), who writes the print engine’s motor control firmware, and 최영호 (Youngho Choi), who designs the paper path and its sensors.",
        "The header shows the status, severity and migration state, then the reporter and the affected products, then a spec card for the model: paper size, output, speed, functions, connectivity and firmware, and under Engineering the sales regions on a dot map, launch quarter, support status, units in the field, platform, controller, memory, engine, emulations and firmware branch. The specs are mock data, built from the same capability rules the generator uses to decide which defects a model can have. Affected products can grow past the model the defect was reported on, one model at a time or by a whole product line when the bug is in shared firmware.",
        "The sidebar measures the defect against its severity. A critical defect needs a first response within 4 hours and a resolution within 2 days, so D-17-0363 shows a response in 4.5 hours, 28 minutes late, and a resolution overdue by 2.3 days when the demo clock starts. Below that are the status workflow, a severity menu, the assignees and the subscribers. Work moves from open to in progress, then to resolved with a resolution of fixed, duplicate, cannot reproduce or works as designed, then through verification to closed; reopening clears the resolution.",
      ],
    },
    {
      type: "aside",
      figure: {
        file: "defect-detail",
        kind: "loop",
        shape: "tall",
        caption:
          "D-17-0363 from the top: status, severity, reporter, the PS-C3150FR spec card, its severity targets and its records in five systems.",
      },
    },
    {
      type: "text",
      label: "Relationships",
      paragraphs: [
        "Each defect page has a relationship map, a second React Flow diagram. The defect sits in the middle, its code reviews to the right, suggested related defects to the left and the product lines it touches underneath, each line with a count such as 1 of 7 models affected, 9 open. Solid edges are links someone made; dashed ones are suggestions or indirect links. Clicking a card opens that record, and the canvas pans with a drag and zooms with a pinch.",
        "Suggestions come from the title and the product. Titles are split into words with the bracketed model removed, and two titles score by the words they share relative to the shorter one. A defect is suggested when that score reaches 0.3 or when it has the same model and the same component. The related list shows up to four suggestions, each with its reason, such as Same component or Similar title, and a Link button. A link is recorded on both defects.",
        "Fixes land in Perforce. Every defect has a P4 job, and changelists are recorded against it with p4 fix: a linked code review contributes its changelist, shelved while in review and submitted once approved, and a changelist number of 6 to 8 digits can be linked by hand. The activity feed below holds the comments, with @mentions and attachments, and every change of status, severity and assignment.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "defect-map",
        kind: "loop",
        shape: "wide",
        caption:
          "The relationship map of D-17-0363, zoomed in, dragged across to the suggested defects on the left, then returned to fit.",
      },
    },
    {
      type: "text",
      label: "Reporting",
      paragraphs: [
        "A new report asks for a title, the model it was seen on, a component, other affected models or product lines, severity, status, firmware version, a description, steps to reproduce, assignees and attachments. A failed save lists every missing required field in one message and moves focus to the first. A report that has not been sent is kept in the browser and restored on the next visit, with a button to discard it.",
        "Duplicate detection runs while the reporter types. Once the title has 4 or more characters and a model is chosen, the form lists up to 5 defects on the same model whose titles share at least half their words, each with its component, report date and status, and each opening in a new tab so the form stays as it is. Typing [PS-C3150FR] 양면 인쇄 용지 걸림 0x21 and picking the PS-C3150FR brings up D-17-0363 before a second copy can be filed.",
        "Saving gives the defect the next D-17 number, creates its Perforce job and its ClearQuest record, and logs all three steps in its activity. On an existing defect, Clone with changes opens the same form filled in from it.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "defect-duplicate",
        kind: "loop",
        shape: "wide",
        caption:
          "Reporting a duplex jam on the PS-C3150FR: once the model is picked, D-17-0363 appears under Possible duplicates.",
      },
    },
    {
      type: "text",
      label: "Code reviews",
      paragraphs: [
        "Every code change goes to the Code Review Team before it is submitted. The review list works like the defect list, with scopes for all reviews, my requests, those assigned to me and those I’m subscribed to; statuses of awaiting reviewer, in review, modification requested, approved, denied and withdrawn; and a search that also matches the Perforce branch. CR-2225, Restore duplex reverse motor timing for PS-C3150FR (Jam 0x21), is 박성민’s fix for D-17-0363, and it inherits the defect’s affected products and spec card until someone edits them.",
        "The diff shows each changed file side by side or unified; the layout is a preference in Settings and a toggle above the files. Clicking any line opens a comment box for that line, with @mentions, and the comment appears both in the diff and in the activity. CR-2225 changes two files: duplex_motor.c, where the reverse delay loses its 18 ms offset, and duplex_cfg.h, where a new comment warns that the exit sensor needs at least 140 ms after reverse start. 윤재석 (Jaeseok Yoon) has already commented on line 214.",
        "Each assigned reviewer approves, requests modification or denies, and the last two need a note. A change is approved only when every reviewer has approved; CR-2225 stands at 1 of 2, with 한도윤 (Doyoon Han) still reviewing. After a modification request the author can resubmit, and the author or the review team can withdraw a request with a reason, which counts as withdrawn in the review outcomes. A turnaround clock in the sidebar runs from submission to the first decision against the 48-hour target, and the records panel shows the Helix Swarm review with its votes and test build, the shelved changelist and its stream, and the Review Board request for reviews made before the team’s cutover.",
      ],
    },
    {
      type: "aside",
      figure: {
        file: "review-diff",
        kind: "loop",
        shape: "tall",
        caption:
          "CR-2225’s diff switched to unified and back to side by side, then a comment added on line 42 of duplex_cfg.h.",
      },
    },
    {
      type: "text",
      label: "Roles",
      paragraphs: [
        "There is no sign-in. Settings has a Signed in as menu with all 34 people, and switching changes what the app allows: QA engineers and engineers report defects and request reviews, and members of the Code Review Team can also assign reviewers and approve changes. The scopes such as Assigned to me, the notifications and the digest settings all follow the current user; switching from 김지현 to 한도윤 takes the unread count from 16 to 4.",
        "Signed in as 김지현, a review waiting for reviewers shows a note that the code review team assigns them, with a link to Settings. Signed in as 한도윤, the Code Review Team lead, the same page offers an Add reviewer menu limited to the review team, and choosing a reviewer moves the review to In review and logs the assignment. Settings also holds the diff layout, the list of keyboard shortcuts and Reset demo data.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "roles",
        kind: "loop",
        shape: "wide",
        caption:
          "As 김지현, CR-2230 waits on the review team; after switching to 한도윤 in Settings, the same review gets a reviewer and moves to In review.",
      },
    },
    {
      type: "full",
      figure: {
        file: "walkthrough",
        kind: "video",
        shape: "wide",
        caption:
          "Insights and its severity targets, a defect search, D-17-0363 and its relationship map, the CR-2225 diff and duplicate detection.",
      },
    },
    {
      type: "text",
      label: "Email digests",
      paragraphs: [
        "DRS sends a daily summary every weekday and a weekly summary covering the previous Monday to Sunday. The digests page shows the email as it would arrive, from DRS Notifications to the current user and anyone added under Also send to, with four counts at the top (new defects, resolved, review requests and review decisions) and a section for each kind of update, up to 8 items long, with a link to the rest.",
        "An archive goes back to January 2016, 444 daily and 88 weekly emails, browsed with arrows or a searchable date menu that shows how many updates each email holds. The settings beside the preview save as they change: delivery times for each summary, which sections to include, which models to follow and a minimum severity. The preview applies them at once. With the minimum set to major, the weekly summary for September 4–10 drops from 16 new defects and 12 resolved to 13 and 4.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "digests",
        kind: "loop",
        shape: "wide",
        caption:
          "Two daily summaries back, then the weekly summary for September 4–10, filtered to major and critical defects.",
      },
    },
    {
      type: "text",
      label: "People",
      paragraphs: [
        "The Teams page lists the 34 people by team, 25 in Suwon and 9 in Bangalore, each with a portrait, a name in Korean and English where the two differ, a title, an email address and a short introduction. A search box matches names, titles, email addresses and sites, so “Bangalore” lists the nine people there, and a menu shows one team at a time. Avatars and person cards across the app link to profiles, which add the numbers that fit the role, such as defects reported for QA engineers, defects assigned for engineers, and reviews requested or decided, then the person’s open defects, active code reviews and recent activity.",
        "Notifications collect what happened to the current user and to the records they follow: assignments and @mentions always, and comments, status changes and review decisions on subscribed defects and reviews. Reporters, assignees, authors and reviewers are subscribed automatically, and a Subscribe button overrides that either way. The page keeps the latest 300, filters them to unread or mentions, counts everything from the last week as unread until it is marked, and moves with J and K like the lists. 김지현 starts with 16 unread and 6 mentions.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "teams",
        kind: "loop",
        shape: "wide",
        caption:
          "The Teams page scrolled from the Software Engineering Lab down and back, then searched for Bangalore, opening Priya Nair’s profile.",
      },
    },
    {
      type: "aside",
      figure: {
        file: "notifications",
        kind: "loop",
        shape: "tall",
        caption:
          "김지현’s notifications filtered to unread and to mentions, then all marked as read: the dots and the sidebar badge clear.",
      },
    },
    {
      type: "text",
      label: "Search",
      paragraphs: [
        "Ctrl+K opens one search across defects, code reviews and people from any page. Results come in groups of up to 6, ranked by how they match: an exact id first, then an id that starts with the query, with or without its D- or CR- prefix, then a title that starts with it, a whole word in a title, any part of a title, and last a match on every word across the model, component, branch, linked defect or change type. Ties go to the most recently updated record. People match on their Korean or English name, their title and their team, so “Sungmin” finds 박성민.",
      ],
    },
    {
      type: "full",
      figure: {
        file: "palette",
        kind: "loop",
        shape: "wide",
        caption:
          "Ctrl+K from the defect list: a search for duplex, then for Sungmin, and Enter opens 박성민’s profile (keystrokes shown bottom right).",
      },
    },
    {
      type: "text",
      label: "Phones",
      paragraphs: [
        "Every page works at phone width. Below 960 pixels the sidebar becomes a drawer behind a menu button, and a top bar keeps the logo, a Portfolio demo badge that links to About, and a search button. Under 640 pixels the migration diagram turns into the list of seven systems with DRS between the two groups, list rows become cards with their own Sort by menu, the period tabs scroll sideways, and on narrow screens a relationship map shows the whole diagram instead of a readable crop.",
      ],
    },
    {
      type: "pair",
      figures: [
        {
          file: "phone-insights",
          kind: "loop",
          shape: "phone",
          caption: "Insights on a phone: the seven systems as a list, the migration charts, then the period tabs set to 90 days.",
        },
        {
          file: "phone-defects",
          kind: "loop",
          shape: "phone",
          caption: "The defect list as cards, then D-17-0353 opened: its reporter, affected products and the PS-C520W spec card.",
        },
      ],
    },
    {
      type: "text",
      label: "Mock data",
      paragraphs: [
        "All of the data is generated in the browser by lib/seed/generate.ts from one fixed seed, so every visitor starts from the same history: 812 defects and 631 code reviews between January 4, 2016 and September 15, 2017. Activity falls on working days and skips Korean public holidays, grows through the first half of 2016 as teams adopt the tool, and follows each model’s launch quarter. Twenty showcase defects and 16 code reviews, D-17-0363 and CR-2225 among them, are written by hand.",
        "The generator keeps the history consistent, and pnpm test checks it. Each defect template lists the capabilities it needs, such as copy, scan, fax, color, A3 or a hard disk, and is only filed on models that have them. Each template has its own fix, so a bug-fix review’s title, diff and test name match its defect. A defect is resolved only after its fix review is approved and stays in progress while the fix is in review, every resolved defect records how it was resolved, and every fixed one shows a review or a p4 fix changelist.",
        "The server renders only the page shell, and the Worker never generates data. Edits are saved to localStorage on top of the generated records, Settings → Reset demo data discards them, and a version number on the seed drops saved edits when the generator changes. The history stops at 6 p.m. on Friday, September 15, 2017. The demo clock starts there for every visitor and runs only for the length of the visit, so durations such as “overdue by 2.3 days” read the same for everyone and new activity always sorts after the history.",
      ],
    },
    {
      type: "text",
      label: "Stack",
      paragraphs: [
        "The recreation runs on [Vinext](https://github.com/cloudflare/vinext), the Next.js App Router API on Vite, with React 19. Its components come from Base UI, styled with Tailwind CSS 4, with Lucide icons and the Pretendard and JetBrains Mono typefaces. React Flow draws the migration and relationship diagrams, and the sales region maps are built from Natural Earth’s 1:110m countries by a script in the repository.",
        "It deploys to Cloudflare Workers through the Cloudflare Vite plugin and Wrangler. The Worker hands every request to the app except /stream/*, which serves the About page’s 66-second showcase video. Workers static assets answer a range request with the whole file, and a browser can only seek a video with partial responses, so the Worker reads the file from the assets binding and sends just the bytes asked for, using file sizes recorded at build time.",
        "The showcase video is a Remotion project in the same repository. It captures the running app with Playwright and mixes those captures with animated scenes: the DRS mark’s three sheets feeding into place, printer and copier models drifting past, the seven systems, and a daily summary printing out of a printer.",
      ],
    },
  ],
  ogImage: "insights-migration",
  heroTone: "light",
};
