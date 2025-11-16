import { recipe } from "@vanilla-extract/recipes";
import { fontSize, fontWeight } from "./tokens/font.css";

export const typography = {
  display: recipe({
    base: {
      fontSize: fontSize["4xl"],
      fontWeight: fontWeight.semiBold,
      lineHeight: "140%",
    },
  }),

  heading1: recipe({
    base: {
      fontSize: fontSize["2xl"],
      fontWeight: fontWeight.semiBold,
      lineHeight: "140%",
    },
  }),

  heading2: recipe({
    base: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.semiBold,
      lineHeight: "140%",
    },
  }),

  heading3: recipe({
    base: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semiBold,
      lineHeight: "140%",
    },
  }),

  body1: recipe({
    base: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semiBold,
      lineHeight: "140%",
    },
  }),

  body2: recipe({
    base: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.medium,
      lineHeight: "140%",
    },
  }),

  body3: recipe({
    base: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.medium,
      lineHeight: "140%",
    },
  }),

  body4: recipe({
    base: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.regular,
      lineHeight: "160%",
    },
  }),

  caption1: recipe({
    base: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.medium,
      lineHeight: "140%",
    },
  }),

  caption2: recipe({
    base: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.regular,
      lineHeight: "140%",
    },
  }),
} as const;
