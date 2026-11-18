import { ArtPair } from "./samsung-drs-art";
import { ProductCarousel } from "./samsung-drs-carousel";
import { DetailSheet } from "./samsung-drs-details";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  "details-regions": () => <DetailSheet sheet="regions" />,
  "art-opening": () => <ArtPair pair="opening" />,
  "art-insights": () => <ArtPair pair="insights" />,
  "art-defects": () => <ArtPair pair="defects" />,
  "art-reviews": () => <ArtPair pair="reviews" />,
  "art-more": () => <ArtPair pair="more" />,
  "product-carousel": () => <ProductCarousel row={0} />,
  "product-carousel-reverse": () => <ProductCarousel row={1} reverse />,
};
