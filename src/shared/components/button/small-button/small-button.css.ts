import { recipe } from "@vanilla-extract/recipes";
import { typographyVars } from "@/shared/styles/typography.css";
import { color } from "@/shared/styles/tokens/color.css";
import { SMALL_BUTTON_VARIANTS } from "@/shared/constants/button";

export const buttonStyles = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    width: "13.8rem",
    padding: "1.2rem 1rem",
  },

  variants: {
    variant: {
      [SMALL_BUTTON_VARIANTS.GIFT]: {
        ...typographyVars.body2,
        color: color.brand[100],
        backgroundColor: color.brand[200],
      },
      [SMALL_BUTTON_VARIANTS.PURCHASE]: {
        ...typographyVars.body1,
        color: color.white[100],
        backgroundColor: color.brand[100],
      },
    },
  },
});
