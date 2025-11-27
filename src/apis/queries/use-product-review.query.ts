// 상품 리뷰 조회 API
import { useSuspenseQuery } from "@tanstack/react-query";
import { HTTPMethod, request } from "@/apis/request";
import { API_ENDPOINTS } from "@/apis/constants/api-endpoints";
import { productQueryKeys } from "@/apis/constants/query-key";
import type { ReviewListResponse } from "@/apis/types/product";

const fetchProductReviews = (productId: number) =>
  request<ReviewListResponse>({
    method: HTTPMethod.GET,
    url: API_ENDPOINTS.PRODUCTS.PRODUCT_REVIEW(productId),
  });

export const useProductReviewQuery = (productId: number) =>
  useSuspenseQuery({
    queryKey: productQueryKeys.reviews(productId),
    queryFn: () => fetchProductReviews(productId),
    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
