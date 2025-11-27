import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "1.2rem",
  padding: "1.2rem",
  backgroundColor: color.white[100],
  boxShadow: "0 -5.33px 5.33px rgba(18, 18, 18, 0.04)",
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
});

export const discount = style({
  display: "inline-flex",
  ...typographyVars.caption1,
  padding: "0.4rem 0.8rem",
  backgroundColor: color.white[300],
  color: color.black[200],
  borderRadius: "4px",
});

export const text = style({
  ...typographyVars.body3,
  color: color.gray[100],
});
