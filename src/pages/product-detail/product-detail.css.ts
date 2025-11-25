import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
});

// PurchaseSafetyNotice
export const notice = style({
  padding: "1.6rem 2rem",
  backgroundColor: color.white[300],
  borderRadius: "1.2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  margin: "2.4rem 0 1.6rem 0",
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

// DetailSection
export const imageWrapperClosed = style({
  maxHeight: 0,
  opacity: 0,
  overflow: "hidden",
  transition: "max-height 0.5s ease, opacity 0.5s ease",
});

export const imageWrapperOpen = style({
  padding: "0.8rem 0 1.6rem 0",
  maxHeight: "50rem",
  opacity: 1,
  transition: "max-height 0.5s ease, opacity 0.5s ease",
});

// ProductInfoNotice
export const productInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  margin: "4rem 0 3.8rem 0",
});

export const productInfoTitle = style({
  ...typographyVars.heading3,
  color: color.black[100],
});
