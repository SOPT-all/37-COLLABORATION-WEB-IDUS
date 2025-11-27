// 요청, 응답 타입을 정의합니다

// 리뷰어 정보
export interface Reviewer {
  userId: number;
  nickname: string;
  profileImageUrl: string;
}

// 개별 리뷰
export interface ReviewResponse {
  reviewId: number;
  score: number;
  content: string;
  createdAt: string;
  reviewer: Reviewer;
}

// 리뷰 리스트 응답
export interface ReviewListResponse {
  reviewResponses: ReviewResponse[];
}

// 작품 좋아요 요청
export interface ProductLikeRequest {
  productId: number;
  userId: number;
}

// 작품 좋아요 응답
export interface ProductLikeResponse {
  likeCount: number;
}
