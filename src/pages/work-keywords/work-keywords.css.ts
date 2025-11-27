import { style } from "@vanilla-extract/css";
import { components } from "@/shared/styles/layer.css";

import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";

// 레이아웃
export const keywordsRoot = style({
  "@layer": {
    [components]: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.8rem",
    },
  },
});

// 칩 하나
export const keywordsChip = style({
  "@layer": {
    [components]: {
      ...typographyVars.body3,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: "3.6rem",
      padding: "0.8rem 1.2rem",
      borderRadius: "1.8rem",
      border: `0.1rem solid ${color.gray[200]}`,
      backgroundColor: color.white[100],
      color: color.gray[100],

      boxSizing: "border-box",
      userSelect: "none",
    },
  },
});
