import { style } from "@vanilla-extract/css";
import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
});

export const infoArea = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "0.4rem",
});

export const nameRow = style({
  display: "flex",
  gap: "0.4rem",
});

export const name = style({
  ...typographyVars.heading3,
});

export const description = style({
  ...typographyVars.caption2,
  color: color.gray[100],
});
