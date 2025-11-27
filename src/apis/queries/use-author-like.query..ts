import { API_ENDPOINTS } from "@/apis/constants/api-endpoints";
import { HTTPMethod, request } from "@/apis/request";
import { useMutation } from "@tanstack/react-query";
import type { AuthorLikeRequest, AuthorLikeResponse } from "../types/author";

export const postAuthorLike = ({ authorId, userId }: AuthorLikeRequest) => {
  return request<AuthorLikeResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINTS.AUTHORS.AUTHOR_LIKES(authorId),
    body: {
      userId: userId,
    },
  });
};

export const useAuthorLikeMutation = () => {
  return useMutation({
    mutationFn: postAuthorLike,
  });
};
