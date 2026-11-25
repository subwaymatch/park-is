import { Construction, Fields, Gloss, Hero, Mockups, Strokes, Studies } from "./park-art";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  hero: () => <Hero />,
  strokes: () => <Strokes />,
  construction: () => <Construction />,
  studies: () => <Studies />,
  mockups: () => <Mockups />,
  fields: () => <Fields />,
  gloss: () => <Gloss />,
};
