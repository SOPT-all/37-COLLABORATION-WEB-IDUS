import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    width: "100%",
    cursor: "pointer",
  },
  variants: {
    type: {
      "bottom-sheets": { borderBottom: `0.1rem solid ${color.white[300]}` },
      maker: {},
    },
  },
});

export const accordion = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "1.6rem 0",
});

export const makerBorder = style({
  borderTop: `0.1rem solid ${color.white[300]}`,
  borderBottom: `0.1rem solid ${color.white[300]}`,
});

export const title = recipe({
  base: {
    alignSelf: "center",
    color: color.black[200],
  },
  variants: {
    type: {
      "bottom-sheets": { ...typographyVars.body2 },
      maker: { ...typographyVars.body3 },
    },
  },
  defaultVariants: {
    type: "bottom-sheets",
  },
});

export const titleWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const bottomSheetsOption = style({
  ...typographyVars.caption2,
  color: color.gray[100],
});

export const optionIconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.4rem",
});

export const makerOption = style({
  ...typographyVars.body3,
  color: color.gray[100],
});

export const toggleIcon = recipe({
  base: { transition: "transform 0.3s ease" },
  variants: {
    isOpen: {
      true: { transform: "rotate(180deg)" },
      false: { transform: "rotate(0deg)" },
    },
  },
});

export const content = style({
  display: "grid",
  gridTemplateRows: "0fr",
  transition: "grid-template-rows 0.3s ease",
  overflow: "hidden",
});

export const contentOpen = style({
  gridTemplateRows: "1fr",
});

export const contentInner = style({
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});
