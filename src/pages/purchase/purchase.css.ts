import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "0.4rem",
  marginTop: "0.4rem",
});

export const deliverDateContainer = style({
  // TODO: 배송출발일 지정 컴포넌트 구현
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "1.6rem 2rem",
  gap: "0.4rem",
  borderRadius: "12px",
  backgroundColor: color.white[300],
});

export const designateContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
});

export const designateText = style({
  ...typographyVars.body3,
  color: color.black[100],
});

export const deliverDate = style({
  ...typographyVars.caption2,
  color: color.brand[100],
});

export const deliverInfo = style({
  ...typographyVars.caption2,
  color: color.gray[100],
});

export const customListContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const optionType = style({
  ...typographyVars.caption2,
  color: color.gray[300],
});

export const optionDetail = style({
  ...typographyVars.caption2,
  color: color.gray[100],
  marginLeft: "0.4rem",
});

export const customListDetailContainer = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "1.6rem",
  gap: "0.4rem",
});
