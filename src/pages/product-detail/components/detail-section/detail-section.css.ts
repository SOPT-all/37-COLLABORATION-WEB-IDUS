import { recipe } from "@vanilla-extract/recipes";

export const imageWrapper = recipe({
  base: {
    transition: "max-height 0.5s ease, opacity 0.5s ease",
  },
  variants: {
    isDetailOpen: {
      true: {
        padding: "0.8rem 0 1.6rem 0",
        maxHeight: "50rem",
        opacity: 1,
      },
      false: {
        maxHeight: 0,
        opacity: 0,
        overflow: "hidden",
      },
    },
  },
  defaultVariants: {
    isDetailOpen: false,
  },
});
