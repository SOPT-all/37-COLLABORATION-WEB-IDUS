import { default as Star } from "@svg/star.svg?react";
import * as styles from "./review-card.css";

export interface ReviewCardProps {
  nickname: string; // 닉네임
  score: number; // 별점
  createdAt: string; // 작성일
  content: string; // 후기 내용
}

export const ReviewCard = ({
  nickname,
  score,
  createdAt,
  content,
}: ReviewCardProps) => {
  return (
    // 후기 카드 전체
    <article className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        {/* 왼쪽 프로필 */}
        <div className={styles.reviewProfile} />

        {/* 오른쪽: 닉네임 + (작성일 / 별점) */}
        <div>
          <p className={styles.reviewNickname}>{nickname}</p>
          <div className={styles.reviewMeta}>
            <span>{createdAt}</span>
            <span className={styles.reviewScore}>
              <span className={styles.reviewStarWrapper}>
                <Star />
              </span>
              {score.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      {/* 본문: 후기 내용 */}
      <p className={styles.reviewContent}>{content}</p>
    </article>
  );
};
