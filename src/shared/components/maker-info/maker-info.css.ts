import { style } from "@vanilla-extract/css";
import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const profileInfoArea = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
});

export const textArea = style({
  width: "16.5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "0.4rem",
  cursor: "default",
});

export const nameWrapper = style({
  display: "flex",
  gap: "0.4rem",
});

export const name = style({
  ...typographyVars.heading3,
});

export const description = style({
  ...typographyVars.caption2,
  color: color.gray[100],
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});
