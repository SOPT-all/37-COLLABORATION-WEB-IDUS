// 작품 좋아요 생성 API

import { API_ENDPOINTS } from "@/apis/constants/api-endpoints";
import { HTTPMethod, request } from "@/apis/request";
import type {
  ProductInfoResponse,
  ProductLikeRequest,
  ProductLikeResponse,
} from "@/apis/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productQueryKeys } from "@/apis/constants/query-key";

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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postProductLike,
    onMutate: async ({ productId }) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: productQueryKeys.detail(productId),
      });

      // 이전 데이터 백업
      const prevData = queryClient.getQueryData<ProductInfoResponse>(
        productQueryKeys.detail(productId)
      );

      // setQueryData로 캐시 직접 조작
      queryClient.setQueryData<ProductInfoResponse>(
        productQueryKeys.detail(productId), // 어떤 캐시에 접근할지 지정
        (
          old // 캐시된 데이터를 받아서
        ) =>
          old // 데이터가 존재하면
            ? {
                ...old, // 나머지 데이터는 그대로 유지
                isLiked: !old.isLiked, // isLiked 필드를 현재와 반대로 토글하고
                likeCount: old.likeCount + (old.isLiked ? -1 : 1), // likeCount를 1+/-
              }
            : old // 캐시된 데이터가 없다면 그대로 둠
      );

      return { prevData };
    },
    onError: (_, { productId }, context) => {
      // 실패 시 onMutate에서 백업해둔 이전 데이터로 캐시 원상복구
      if (context?.prevData) {
        queryClient.setQueryData(
          productQueryKeys.detail(productId),
          context.prevData
        );
      }
    },
    onSuccess: (_, { productId }) => {
      // 새로운 데이터로 갱신
      queryClient.invalidateQueries({
        queryKey: productQueryKeys.detail(productId),
      });
    },
  });
};
