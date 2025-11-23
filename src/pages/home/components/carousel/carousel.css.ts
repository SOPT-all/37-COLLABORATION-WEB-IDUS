import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  width: "100%",
});

export const header = style({
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  backgroundColor: color.black[200],
  width: "100%",
  padding: "1rem 1.6rem",
  zIndex: "10",

  display: "flex",
  justifyContent: "center",
});

// 캐러셀 스타일
export const carouselContainer = style({
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

export const carouselTrack = style({
  display: "flex",
  width: "100%",
  height: "100%",
  transition: "transform 0.5s ease-in",
  touchAction: "pan-y", // 좌우 스와이프 차단
});

export const image = style({
  width: "100%",
  height: "100%",
  flexShrink: 0,
  objectFit: "cover",
});

// 캐러셀 푸터 에셋 (이미지 번호, 뱃지) 스타일
export const footer = style({
  position: "absolute",
  bottom: "0",
  left: "0",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 1.6rem 1.6rem 1.6rem",
});

export const index = style({
  padding: "0.6rem 0.8rem",
  borderRadius: "0.5rem",
  backgroundColor: "rgba(18, 18, 18, 0.32)",
  color: color.white[100],
  ...typographyVars.caption2,

  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

export const badge = style({
  padding: "0.4rem 1.2rem 0.4rem 0.8rem",
  borderRadius: "0.4rem",
  backgroundColor: color.white[100],
  ...typographyVars.caption2,

  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const period = style({
  color: color.brand[100],
  ...typographyVars.caption1,
});
