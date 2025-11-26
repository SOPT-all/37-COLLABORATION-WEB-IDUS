import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  width: "100%",
  padding: "2.4rem 1rem",
  boxShadow: `0 8px 8px 0 rgba(18, 18, 18, 0.02)`,
});

export const mainInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
});

export const priceInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
});

export const originalPrice = style({
  textDecoration: "line-through",
});

export const discountRate = style({
  marginRight: "0.4rem",
});

export const discountedPrice = style({
  marginRight: "0.2rem",
});

export const benefitInfo = style({
  display: "flex",
  gap: "0.6rem",
  overflowX: "auto",
  marginTop: "-0.4rem",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const extraInfo = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "0.6rem",
});

export const extraInfoDetail = style({
  display: "flex",
});

export const extraInfoItem = style({
  display: "flex",
  alignItems: "center",
  selectors: {
    "&:not(:first-child)": {
      gap: "0.6rem",
    },
    "&:not(:last-child)::after": {
      content: '""',
      display: "block",
      width: "0.1rem",
      height: "1.2rem",
      backgroundColor: color.gray[200],
      marginLeft: "0.8rem",
      marginRight: "0.8rem",
    },
  },
});

export const align = style({
  display: "flex",
  alignItems: "center",
});

export const text = recipe({
  variants: {
    type: {
      heading: {
        ...typographyVars.heading1,
      },
      subTitle: {
        ...typographyVars.heading3,
      },
      body: {
        ...typographyVars.body1,
      },
      caption: {
        ...typographyVars.body4,
      },
    },
    color: {
      "black-100": {
        color: color.black[100],
      },
      "black-200": {
        color: color.black[200],
      },
      "gray-100": {
        color: color.gray[100],
      },
      "gray-300": {
        color: color.gray[300],
      },
    },
  },
});
