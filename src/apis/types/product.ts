// 요청, 응답 타입을 정의합니다

// 작품 좋아요 요청
export interface ProductLikeRequest {
  productId: number;
  userId: number;
}

// 작품 좋아요 응답
export interface ProductLikeResponse {
  likeCount: number;
}
