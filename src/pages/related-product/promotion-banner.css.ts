import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";
import { color } from "@/shared/styles/tokens/color.css";
import { components } from "@/shared/styles/layer.css";

export const section = style({
  "@layer": {
    [components]: {
      display: "flex",
      flexDirection: "column",
      rowGap: "1.6rem",
      padding: "4.8rem 1.6rem",
    },
  },
});

export const title = style({
  "@layer": {
    [components]: {
      ...typographyVars.heading3,
      color: color.black[100],
    },
  },
});

export const scrollContainer = style({
  "@layer": {
    [components]: {
      display: "flex",
      columnGap: "0.8rem",
      overflowX: "auto",
      overflowY: "hidden",
      marginRight: "-1.6rem",
      paddingRight: "1.6rem",
    },
  },
});

export const bannerCard = style({
  "@layer": {
    [components]: {
      borderRadius: "8px",
      overflow: "hidden",
      minWidth: "32rem",
      height: "6.4rem",
    },
  },
});

export const bannerImage = style({
  "@layer": {
    [components]: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
});
