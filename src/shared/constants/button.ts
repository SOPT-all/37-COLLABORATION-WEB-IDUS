export const SMALL_BUTTON_VARIANTS = {
  GIFT: "gift",
  PURCHASE: "purchase",
} as const;

export type SmallButtonVariants =
  (typeof SMALL_BUTTON_VARIANTS)[keyof typeof SMALL_BUTTON_VARIANTS];

export const LARGE_BUTTON_VARIANTS = {
  DEFAULT: "default",
  ACTIVE: "active",
} as const;

export type LargeButtonVariants =
  (typeof LARGE_BUTTON_VARIANTS)[keyof typeof LARGE_BUTTON_VARIANTS];
