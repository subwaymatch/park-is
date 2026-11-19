import { BranchMoments, BranchScenes, Closing, Lost, Origin, SketchStrip, Story, TicketMoments } from "./dashhour-art";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  origin: () => <Origin />,
  "sketch-strip": () => <SketchStrip />,
  "branch-scenes": () => <BranchScenes />,
  "branch-moments": () => <BranchMoments />,
  "ticket-moments": () => <TicketMoments />,
  lost: () => <Lost />,
  story: () => <Story />,
  closing: () => <Closing />,
};
