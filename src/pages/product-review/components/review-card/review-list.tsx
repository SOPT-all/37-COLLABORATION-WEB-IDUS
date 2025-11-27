import { useState } from "react";
import LargeButton from "@/shared/components/button/large-button/large-button";
import { LARGE_BUTTON_VARIANTS } from "@/shared/constants/button";
import { useProductReviewQuery } from "@/apis/queries/use-product-review.query";
import { ReviewCard } from "./review-card";
import * as styles from "./review-list.css";

const PAGE_SIZE = 5;

export const ReviewList = () => {
  const productId = 1;
  const { data } = useProductReviewQuery(productId);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const reviews = data?.reviewResponses ?? [];
  const visibleReviews = reviews.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <section className={styles.reviewListSection}>
      {visibleReviews.map((review) => (
        <ReviewCard
          key={review.reviewId}
          nickname={review.reviewer?.nickname ?? "익명"}
          createdAt={review.createdAt}
          score={review.score}
          content={review.content}
        />
      ))}

      <div className={styles.loadMoreWrapper}>
        <LargeButton
          type="button"
          variant={LARGE_BUTTON_VARIANTS.DEFAULT}
          hasArrow
          onClick={handleLoadMore}
          aria-label="작품 구매 후기 더보기">
          작품 구매 후기 더보기
        </LargeButton>
      </div>
    </section>
  );
};
