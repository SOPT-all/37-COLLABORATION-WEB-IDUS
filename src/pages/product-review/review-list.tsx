import { ReviewCard, type ReviewCardProps } from "./review-card";
import * as styles from "./review-list.css";

type Review = ReviewCardProps & {
  reviewId: number;
};

const mockReviews: Review[] = [
  {
    reviewId: 1,
    nickname: "임지성",
    createdAt: "2024.11.25",
    score: 4.0,
    content:
      "여자친구 생일에 특별한 편지를 주고싶어서 찾아보다가 이쁜 카세트로 목소리를 녹음해서 줄수있는게 있길래 한번 구매해봤어요 아직 전달을 하지는 못했지만 사진도 정말 이쁘게 들어가있고 문구와 디자인도 너무 이쁜것 같아요 새로운 감동을 줄 수 있을것 같습니다 대만족이에요!",
  },
  {
    reviewId: 2,
    nickname: "오수빈",
    createdAt: "2024.11.25",
    score: 4.0,
    content:
      "여자친구 생일에 특별한 편지를 주고싶어서 찾아보다가 이쁜 카세트로 목소리를 녹음해서 줄수있는게 있길래 한번 구매해봤어요 아직 전달을 하지는 못했지만 사진도 정말 이쁘게 들어가있고 문구와 디자인도 너무 이쁜것 같아요 새로운 감동을 줄 수 있을것 같습니다 대만족이에요!",
  },
  {
    reviewId: 3,
    nickname: "지민재",
    createdAt: "2024.11.25",
    score: 4.0,
    content:
      "여자친구 생일에 특별한 편지를 주고싶어서 찾아보다가 이쁜 카세트로 목소리를 녹음해서 줄수있는게 있길래 한번 구매해봤어요 아직 전달을 하지는 못했지만 사진도 정말 이쁘게 들어가있고 문구와 디자인도 너무 이쁜것 같아요 새로운 감동을 줄 수 있을것 같습니다 대만족이에요!",
  },
  {
    reviewId: 4,
    nickname: "배정민",
    createdAt: "2024.11.25",
    score: 4.0,
    content:
      "여자친구 생일에 특별한 편지를 주고싶어서 찾아보다가 이쁜 카세트로 목소리를 녹음해서 줄수있는게 있길래 한번 구매해봤어요 아직 전달을 하지는 못했지만 사진도 정말 이쁘게 들어가있고 문구와 디자인도 너무 이쁜것 같아요 새로운 감동을 줄 수 있을것 같습니다 대만족이에요!",
  },
  {
    reviewId: 5,
    nickname: "배",
    createdAt: "2024.11.25",
    score: 4.0,
    content:
      "여자친구 생일에 특별한 편지를 주고싶어서 찾아보다가 이쁜 카세트로 목소리를 녹음해서 줄수있는게 있길래 한번 구매해봤어요 아직 전달을 하지는 못했지만 사진도 정말 이쁘게 들어가있고 문구와 디자인도 너무 이쁜것 같아요 새로운 감동을 줄 수 있을것 같습니다 대만족이에요!",
  },
];

export const ReviewList = () => {
  return (
    // 후기 리스트 전체를 감싸는 컨테이너
    <section className={styles.reviewListSection}>
      {mockReviews.map((review) => (
        <ReviewCard
          key={review.reviewId}
          nickname={review.nickname}
          createdAt={review.createdAt}
          score={review.score}
          content={review.content}
        />
      ))}
    </section>
  );
};
