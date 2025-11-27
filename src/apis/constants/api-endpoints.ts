export const API_ENDPOINTS = {
  AUTHORS: {
    AUTHOR_INFO: (authorId: number) => `authors/${authorId}`,
    AUTHOR_LIKES: (authorId: number) => `authors/${authorId}/likes`,
  },
  PRODUCTS: {
    PRODUCT_INFO: (productId: number) => `products/${productId}`,
    PRODUCT_REVIEW: (productId: number) => `products/${productId}/reviews`,
    PRODUCT_LIKES: (productId: number) => `products/${productId}/likes`,
  },
} as const;
