// 작품 좋아요 생성 API

import { API_ENDPOINTS } from "@/apis/constants/api-endpoints";
import { HTTPMethod, request } from "@/apis/request";
import type {
  ProductLikeRequest,
  ProductLikeResponse,
} from "@/apis/types/product";
import { useMutation } from "@tanstack/react-query";

export const postProductLike = ({ productId, userId }: ProductLikeRequest) => {
  return request<ProductLikeResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINTS.PRODUCTS.PRODUCT_LIKES(productId),
    body: {
      userId: userId,
    },
  });
};

export const useProductLikeMutation = () => {
  return useMutation({
    mutationFn: postProductLike,
  });
};
