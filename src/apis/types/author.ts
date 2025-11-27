// 요청, 응답 타입을 정의합니다

// 작가 좋아요 요청
export interface AuthorLikeRequest {
  authorId: number;
  userId: number;
}

// 작가 좋아요 응답

export interface AuthorInfoResponse {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  likeCount: number;
  isLiked: boolean;
}
