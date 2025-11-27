import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { color } from "@/shared/styles/tokens/color.css";
import { components } from "@/shared/styles/layer.css";

export const section = style({
  "@layer": {
    [components]: {
      display: "flex",
      flexDirection: "column",
      padding: "0rem 1.6rem",
      marginBottom: "24.8rem",
    },
  },
});

export const headerText = recipe({
  base: {
    "@layer": {
      [components]: {
        textAlign: "left",
      },
    },
  },
  variants: {
    type: {
      title: {
        "@layer": {
          [components]: {
            ...typographyVars.heading3,
            color: color.black[100],
            marginBottom: "0.4rem",
          },
        },
      },
      caption: {
        "@layer": {
          [components]: {
            ...typographyVars.caption2,
            color: color.gray[100],
            marginBottom: "2rem",
          },
        },
      },
    },
  },
  defaultVariants: {
    type: "title",
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

export const card = style({
  "@layer": {
    [components]: {
      display: "flex",
      flexDirection: "column",
      rowGap: "1.2rem",
      width: "12.8rem",
      flexShrink: 0,
    },
  },
});

export const thumbnailWrapper = style({
  "@layer": {
    [components]: {
      borderRadius: "4px",
      overflow: "hidden",
      width: "100%",
      aspectRatio: "1 / 1",
      position: "relative",
    },
  },
});

export const cardTitle = style({
  "@layer": {
    [components]: {
      ...typographyVars.caption1,
    },
  },
});

export const thumbnailImage = style({
  "@layer": {
    [components]: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
});

export const badge = recipe({
  base: {
    "@layer": {
      [components]: {
        position: "absolute",
        padding: "0.2rem 0.4rem",
        borderRadius: "4px",
        ...typographyVars.caption2,
      },
    },
  },
  variants: {
    tone: {
      ad: {
        "@layer": {
          [components]: {
            backgroundColor: color.white[300],
            color: color.gray[100],
          },
        },
      },
      bundle: {
        "@layer": {
          [components]: {
            backgroundColor: color.brand[100],
            color: color.white[300],
          },
        },
      },
    },
    position: {
      topRight: {
        "@layer": {
          [components]: {
            top: "0.4rem",
            right: "0.4rem",
          },
        },
      },
      bottomLeft: {
        "@layer": {
          [components]: {
            bottom: "0.4rem",
            left: "0.4rem",
          },
        },
      },
    },
  },
});
