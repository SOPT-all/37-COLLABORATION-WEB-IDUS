import { style } from "@vanilla-extract/css";

import { components } from "@/shared/styles/layer.css";
import { color } from "@/shared/styles/tokens/color.css";
import { typographyStyle } from "@/shared/styles/typography.css";

export const reviewCard = style({
  "@layer": {
    [components]: {
      padding: "2rem 0",
      backgroundColor: color.white[100],
      borderBottom: `0.1rem solid ${color.white[300]}`,
    },
  },
});

export const reviewHeader = style({
  "@layer": {
    [components]: {
      display: "flex",
      alignItems: "flex-start",
      columnGap: "1.2rem",
      marginBottom: "1.2rem",
    },
  },
});

export const reviewProfile = style({
  "@layer": {
    [components]: {
      width: "3.4rem",
      height: "3.4rem",
      borderRadius: "50%",
      backgroundColor: color.gray[200],
      border: `0.1rem solid ${color.white[300]}`,
    },
  },
});

export const reviewNickname = style({
  "@layer": {
    [components]: {
      ...typographyStyle("body1"),
      margin: 0,
      marginBottom: "0.4rem",
    },
  },
});

// 날짜 + 별점
export const reviewMeta = style({
  "@layer": {
    [components]: {
      ...typographyStyle("body4"),
      color: color.black[200],
      display: "flex",
      alignItems: "center",
      columnGap: "0.4rem",
    },
  },
});

export const reviewScore = style({
  "@layer": {
    [components]: {
      color: color.gray[100],
      display: "inline-flex",
      alignItems: "center",
    },
  },
});

export const reviewStarWrapper = style({
  "@layer": {
    [components]: {
      width: "2.4rem",
      height: "2.4rem",
      padding: "0.2rem",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export const reviewContent = style({
  "@layer": {
    [components]: {
      ...typographyStyle("body4"),
      margin: 0,
      color: color.black[200],
    },
  },
});
