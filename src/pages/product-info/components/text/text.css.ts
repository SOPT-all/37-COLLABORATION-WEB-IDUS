import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

export const text = recipe({
  variants: {
    type: {
      heading: {
        ...typographyVars.heading1,
      },
      subTitle: {
        ...typographyVars.heading3,
      },
      body: {
        ...typographyVars.body1,
      },
      caption: {
        ...typographyVars.body4,
      },
    },
    color: {
      "black-100": {
        color: color.black[100],
      },
      "black-200": {
        color: color.black[200],
      },
      "gray-100": {
        color: color.gray[100],
      },
      "gray-300": {
        color: color.gray[300],
      },
    },
  },
});

export type TextVariants = RecipeVariants<typeof text>;
