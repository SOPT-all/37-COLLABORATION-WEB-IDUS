export const productQueryKeys = {
  all: () => ["product"],
  item: (productId: number) => [...productQueryKeys.all(), productId],
  detail: (productId: number) => [
    ...productQueryKeys.item(productId),
    "detail",
  ],
  reviews: (productId: number) => [
    ...productQueryKeys.item(productId),
    "reviews",
  ],
};

export const authorQueryKeys = {
  all: () => ["author"],
  item: (authorId: number) => [...authorQueryKeys.all(), authorId],
  detail: (authorId: number) => [...authorQueryKeys.item(authorId), "detail"],
};
