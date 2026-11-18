import { ArtRow } from "./samsung-drs-art";
import { ProductCarousel } from "./samsung-drs-carousel";
import { DetailSheet } from "./samsung-drs-details";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  "details-regions": () => <DetailSheet sheet="regions" />,
  "art-opening": () => <ArtRow row="opening" />,
  "art-insights": () => <ArtRow row="insights" />,
  "art-defects": () => <ArtRow row="defects" />,
  "art-repairs": () => <ArtRow row="repairs" />,
  "art-reviews": () => <ArtRow row="reviews" />,
  "art-roles": () => <ArtRow row="roles" />,
  "art-more": () => <ArtRow row="more" />,
  "product-carousel": () => <ProductCarousel row={0} />,
  "product-carousel-reverse": () => <ProductCarousel row={1} reverse tall />,
};
