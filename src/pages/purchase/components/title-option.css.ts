import { style } from "@vanilla-extract/css";
import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
    width: "100%",
    padding: "1.2rem 1.6rem",
    borderRadius: "8px",
  },
  variants: {
    isExpanded: {
      true: {
        backgroundColor: color.white[300],
      },
      false: {
        backgroundColor: color.white[200],
      },
    },
  },
});

// '앨범 제목만', '제목 + 메시지'
export const titleContainer = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const titleText = recipe({
  base: {
    ...typographyVars.body3,
    margin: "0.2rem 0",
    flex: 1,
  },
  variants: {
    isExpanded: {
      true: {
        color: color.black[100],
      },
      false: {
        color: color.gray[100],
      },
    },
  },
});
