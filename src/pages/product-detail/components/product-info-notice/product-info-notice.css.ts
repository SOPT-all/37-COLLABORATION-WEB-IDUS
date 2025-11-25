import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const productInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  margin: "4rem 0 3.8rem 0",
});

export const productInfoTitle = style({
  ...typographyVars.heading3,
  color: color.black[100],
  cursor: "default",
});
