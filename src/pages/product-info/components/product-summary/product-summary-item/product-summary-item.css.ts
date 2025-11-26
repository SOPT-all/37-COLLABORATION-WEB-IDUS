import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  display: "flex",
  alignItems: "baseline",
  gap: "1.2rem",
  width: "100%",
});

export const text = recipe({
  variants: {
    type: {
      title: {
        width: "6.4rem",
        ...typographyVars.body4,
        color: color.gray[100],
      },
      description: {
        ...typographyVars.body3,
        color: color.black[200],
      },
    },
  },
});

export const information = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.8rem",
});

export const badgeContainer = style({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
});

export const badge = style({
  padding: "0.4rem 0.8rem",
  borderRadius: "0.4rem",
  backgroundColor: color.white[300],
  color: color.gray[100],
});

export const image = style({
  width: "100%",
  height: "10rem",
  borderRadius: "1.2rem",
  objectFit: "cover",
});
