import { typographyVars } from "@/shared/styles/typography.css";
import { color } from "@/shared/styles/tokens/color.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderBottom: `1px solid ${color.gray[300]}`,
  },
  variants: {
    isFocused: {
      true: {
        borderBottom: `1px solid ${color.black[200]}`,
      },
    },
  },
});

export const label = style({
  margin: "0.3rem 0 0.3rem 0.8rem",
  ...typographyVars.body3,
  color: color.black[200],
});

export const inputContainer = style({
  display: "flex",
  padding: "0.8rem 0.8rem 1.2rem",
  gap: "1rem",
});

export const input = style({
  ...typographyVars.body4,
  color: color.gray[100],
  flex: 1,
});

export const deleteButton = style({
  width: "2.2rem",
  height: "2.2rem",
});
