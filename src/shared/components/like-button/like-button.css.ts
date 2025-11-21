import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    alignItems: "center",
    justifyContent: "center",
    border: "0.1rem solid black",
  },
  variants: {
    type: {
      "bottom-sheets": { width: "4.2rem" },
      maker: { width: "4.8rem" },
    },
  },
  defaultVariants: {
    type: "bottom-sheets",
  },
});

export const count = style({
  ...typographyVars.body2,
  color: color.gray[100],
});
