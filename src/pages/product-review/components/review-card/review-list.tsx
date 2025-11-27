import { useState } from "react";
import LargeButton from "@/shared/components/button/large-button/large-button";
import { LARGE_BUTTON_VARIANTS } from "@/shared/constants/button";
import { mockReviews } from "../../constants/review-list.mock";
import { ReviewCard } from "./review-card";
import * as styles from "./review-list.css";

export const ReviewList = () => {
  const [reviews, setReviews] = useState(mockReviews);

  const handleLoadMore = () => {
    setReviews((prev) => [
      ...prev,
      ...mockReviews.map((review, index) => ({
        ...review,
        reviewId: prev.length + index + 1,
      })),
    ]);
  };

  return (
    <section className={styles.reviewListSection}>
      {reviews.map((review) => (
        <ReviewCard
          key={review.reviewId}
          nickname={review.nickname}
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
