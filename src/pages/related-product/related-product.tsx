import * as styles from "./related-product.css";
import { PromotionBanner } from "./components/promotion-banner/promotion-banner";
import { RelatedProducts } from "./components/related-products/related-products";
import { WorkKeywords } from "./components/work-keywords/work-keywords";
import { mockKeywords } from "./constants/work-keywords.mock";

export const RelatedProduct = () => {
  return (
    <div className={styles.container}>
      <WorkKeywords keywords={mockKeywords} />
      <PromotionBanner />
      <RelatedProducts />
    </div>
  );
};

export default RelatedProduct;
