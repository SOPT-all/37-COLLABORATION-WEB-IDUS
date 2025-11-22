// 바텀시트 테스트용
// 추후 삭제 예정

import { style } from "@vanilla-extract/css";
import { typographyVars } from "@/shared/styles/typography.css";
import { color } from "@/shared/styles/tokens/color.css";

export const container = style({
  padding: "2rem",
  minHeight: "100vh",
});

export const title = style({
  ...typographyVars.heading1,
  marginBottom: "2rem",
  color: color.black[200],
});

export const openButton = style({
  padding: "1.2rem 2.4rem",
  backgroundColor: color.black[200],
  color: color.white[100],
  border: "none",
  borderRadius: "8px",
  ...typographyVars.body2,
  marginBottom: "2rem",
});

export const scrollContent = style({
  marginTop: "2rem",
});

export const paragraph = style({
  ...typographyVars.body3,
  color: color.gray[100],
  marginBottom: "1rem",
});

export const sheetTitle = style({
  ...typographyVars.caption1,
  color: color.black[200],
  marginBottom: "1rem",
});

export const sheetDescription = style({
  ...typographyVars.body3,
  color: color.gray[100],
  marginBottom: "2rem",
});

export const sheetContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const sheetItem = style({
  padding: "1.6rem",
  backgroundColor: color.white[200],
  borderRadius: "8px",
  ...typographyVars.body3,
  color: color.black[200],
  border: `1px solid ${color.gray[300]}`,
});
