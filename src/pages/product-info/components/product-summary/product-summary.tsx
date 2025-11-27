import * as styles from "./product-summary.css";
import { ProductSummaryData } from "../../constants/product-summary/product-summary-data";
import { ProductSummaryItem } from "./product-summary-item/product-summary-item";

export const ProductSummary = () => {
  return (
    <div className={styles.container}>
      {ProductSummaryData.map((summary) => (
        <ProductSummaryItem key={summary.title} summary={summary} />
      ))}
    </div>
  );
};
