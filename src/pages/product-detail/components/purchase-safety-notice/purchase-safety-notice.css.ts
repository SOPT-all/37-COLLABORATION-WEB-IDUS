import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const notice = style({
  padding: "1.6rem 2rem",
  backgroundColor: color.white[300],
  borderRadius: "1.2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  margin: "2.4rem 0 1.6rem 0",
  cursor: "default",
});

export const noticeTitle = style({
  ...typographyVars.body3,
  color: color.black[100],
  whiteSpace: "pre-line",
});

export const noticeDescription = style({
  ...typographyVars.caption2,
  color: color.gray[100],
  whiteSpace: "pre-line",
});

export const customerCenter = style({
  textDecorationLine: "underline",
});
