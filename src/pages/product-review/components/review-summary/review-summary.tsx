import * as styles from "./review-summary.css";
import { default as Star } from "@svg/star.svg?react";

interface ReviewThumbnail {
  reviewId: number;
  imageUrl: string;
}

interface ReviewSummaryProps {
  averageScore: number;
  reviewCount: number;
  aiSummary: string;
  thumbnails: ReviewThumbnail[];
}

export const ReviewSummary = ({
  averageScore,
  reviewCount,
  aiSummary,
  thumbnails,
}: ReviewSummaryProps) => {
  return (
    <section className={styles.container}>
      {/* 1. 제목 영역 + 별점 / 후기 개수 */}
      <header className={styles.header}>
        <p className={styles.headerText({ type: "caption" })}>후기 요약</p>
        <h2 className={styles.headerText({ type: "title" })}>
          실제 후기
          <br />
          한눈에 보기
        </h2>

        <div className={styles.scoreSection}>
          <p className={styles.scoreValue}>{averageScore.toFixed(1)}</p>
          <div className={styles.scoreRight}>
            <div className={styles.scoreStarsRow}>
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={styles.starIcon}>
                  <Star />
                </span>
              ))}
            </div>
            <p className={styles.reviewCountText}>
              후기 |
              <span className={styles.reviewCountNumber}>{reviewCount}건</span>
            </p>
          </div>
        </div>
      </header>

      {/* 2. AI 요약 */}
      <section className={styles.aiSection}>
        <div className={styles.aiHeader}>
          <span className={styles.aiLabel}>AI 후기 요약</span>
          <span className={styles.aiDescription}>
            AI를 이용해서 후기를 요약했어요
          </span>
        </div>

        <div className={styles.aiSummaryBox}>
          <p className={styles.aiSummaryText}>{aiSummary}</p>
        </div>
      </section>

      {/* 3. 썸네일 */}
      <section className={styles.thumbnailSection}>
        <div className={styles.thumbnailGrid}>
          {thumbnails.map((thumbnail, index) => (
            <div key={thumbnail.reviewId} className={styles.thumbnail}>
              <img
                src={thumbnail.imageUrl}
                alt={`작품 썸네일 ${thumbnail.reviewId}`}
                className={styles.thumbnailImage}
              />

              {index === thumbnails.length - 1 && (
                <div className={styles.thumbnailOverlay}>
                  <span className={styles.thumbnailText}>더보기</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
