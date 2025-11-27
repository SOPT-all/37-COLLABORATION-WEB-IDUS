// 작가 정보 조회 API
import { useSuspenseQuery } from "@tanstack/react-query";
import { HTTPMethod, request } from "@/apis/request";
import { API_ENDPOINTS } from "@/apis/constants/api-endpoints";
import { authorQueryKeys } from "@/apis/constants/query-key";
import type { AuthorInfoResponse } from "@/apis/types/author";

const fetchAuthorInfo = (authorId: number, userId: number) =>
  request<AuthorInfoResponse>({
    method: HTTPMethod.GET,
    url: API_ENDPOINTS.AUTHORS.AUTHOR_INFO(authorId), // /authors/{authorId}
    query: { userId },
  });

export const useAuthorInfoQuery = (authorId: number, userId: number) =>
  useSuspenseQuery({
    queryKey: [...authorQueryKeys.detail(authorId), userId],
    queryFn: () => fetchAuthorInfo(authorId, userId),
    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
