// 요청, 응답 타입을 정의합니다
export interface AuthorInfoResponse {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  likeCount: number;
  isLiked: boolean;
}
