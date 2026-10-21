import { LiveScene } from "./react-3d-mockups-live";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  desk: () => <LiveScene scene="desk" />,
  shelf: () => <LiveScene scene="shelf" />,
  street: () => <LiveScene scene="street" />,
};
