import * as styles from "./product-review.css";

import { ReviewSummary } from "./components/review-summary/review-summary";
import { ReviewList } from "./components/review-card/review-list";
import {
  DUMMY_AI_SUMMARY,
  DUMMY_AVERAGE_SCORE,
  DUMMY_REVIEW_COUNT,
  DUMMY_THUMBNAILS,
} from "./constants/review-summary.mock";

export const ProductReview = () => {
  return (
    <div className={styles.container}>
      <ReviewSummary
        averageScore={DUMMY_AVERAGE_SCORE}
        reviewCount={DUMMY_REVIEW_COUNT}
        aiSummary={DUMMY_AI_SUMMARY}
        thumbnails={DUMMY_THUMBNAILS}
      />

      <section>
        <ReviewList />
      </section>
    </div>
  );
};

export default ProductReview;
