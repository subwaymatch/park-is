import { BranchScenes, Closing, Origin, SketchStrip, Story } from "./dashhour-art";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  origin: () => <Origin />,
  "sketch-strip": () => <SketchStrip />,
  "branch-scenes": () => <BranchScenes />,
  story: () => <Story />,
  closing: () => <Closing />,
};
