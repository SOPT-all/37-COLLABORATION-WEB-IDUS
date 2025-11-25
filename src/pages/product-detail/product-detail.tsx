import * as styles from "./product-detail.css";

import { PurchaseSafetyNotice } from "./components/purchase-safety-notice";
import { ProductInfoNotice } from "./components/product-info-notice";
import { DetailSection } from "./components/detail-section";

export const ProductDetail = () => {
  return (
    <div className={styles.container}>
      <PurchaseSafetyNotice />
      <DetailSection />
      <ProductInfoNotice />
    </div>
  );
};
