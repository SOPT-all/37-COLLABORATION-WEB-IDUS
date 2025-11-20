import { recipe } from "@vanilla-extract/recipes";
import { typographyVars } from "@/shared/styles/typography.css";
import { color } from "@/shared/styles/tokens/color.css";

export const buttonStyles = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    minWidth: "13.8rem",
  },

  variants: {
    variant: {
      gift: {
        ...typographyVars.body2,
        color: color.brand[100],
        backgroundColor: color.brand[200],
      },
      purchase: {
        ...typographyVars.body1,
        color: color.white[100],
        backgroundColor: color.brand[100],
      },
    },
  },
});
