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
    variant: {
      "bottom-sheets": { width: "4.2rem" },
      maker: { width: "4.8rem" },
    },
  },
  defaultVariants: {
    variant: "bottom-sheets",
  },
});
export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  transition: "transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  selectors: {
    "&:active": {
      transform: "scale(1.2)",
    },
  },
});

export const count = style({
  ...typographyVars.body2,
  color: color.gray[100],
});
