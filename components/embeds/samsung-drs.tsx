import { Drawing, Machines, MemoryGrid } from "./samsung-drs-art";
import { MemoryCarousel } from "./samsung-drs-carousel";
import { DetailSheet } from "./samsung-drs-details";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  "details-regions": () => <DetailSheet sheet="regions" />,
  machines: () => <Machines />,
  "test-page": () => <Drawing art="testPage" />,
  developer: () => <Drawing art="developer" />,
  "server-rack": () => <Drawing art="serverRack" />,
  "memory-carousel": () => <MemoryCarousel />,
  "memory-grid": () => <MemoryGrid />,
};
