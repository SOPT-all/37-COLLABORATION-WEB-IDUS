import { recipe } from "@vanilla-extract/recipes";
import { typographyVars } from "@/shared/styles/typography.css";
import { color } from "@/shared/styles/tokens/color.css";
import { LARGE_BUTTON_VARIANTS } from "@/shared/constants/button";

export const buttonStyles = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    width: "34.3rem",
    padding: "1.2rem 1rem",
    gap: "0.4rem",
  },

  variants: {
    variant: {
      [LARGE_BUTTON_VARIANTS.DEFAULT]: {
        ...typographyVars.body1,
        color: color.white[100],
        backgroundColor: color.black[200],
        border: "1px solid transparent",
        // default에는 border가 없고, active에는 border가 있으면
        // 상태 변경 과정에서 버튼 layout이 2px 밀리며 layout shift 발생
        // -> transparent border 추가로 layout shift 방지
      },
      [LARGE_BUTTON_VARIANTS.ACTIVE]: {
        ...typographyVars.body2,
        color: color.gray[100],
        backgroundColor: color.white[100],
        border: `1px solid ${color.gray[200]}`,
      },
    },
  },
});

export const arrow = recipe({
  base: {
    transition: "transform 0.2s ease",
  },

  variants: {
    variant: {
      default: {
        transform: "rotate(0deg)",
      },
      active: {
        transform: "rotate(180deg)",
      },
    },
  },
});
