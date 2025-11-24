import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { components } from "@/shared/styles/layer.css";

export const container = recipe({
  base: {
    "@layer": {
      [components]: {
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        alignItems: "center",
        justifyContent: "center",
        border: "0.1rem solid black",
      },
    },
  },
  variants: {
    variant: {
      "bottom-sheets": {
        "@layer": { [components]: { width: "4.2rem" } },
      },
      maker: {
        "@layer": { [components]: { width: "4.8rem" } },
      },
    },
  },
  defaultVariants: {
    variant: "bottom-sheets",
  },
});

export const iconWrapper = style({
  "@layer": {
    [components]: {
      display: "flex",
      alignItems: "center",
      transition: "transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      selectors: {
        "&:active": {
          transform: "scale(1.2)",
        },
      },
    },
  },
});

export const count = style({
  "@layer": {
    [components]: {
      ...typographyVars.body2,
      color: color.gray[100],
    },
  },
});
