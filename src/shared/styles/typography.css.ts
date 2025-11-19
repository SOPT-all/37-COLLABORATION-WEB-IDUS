/**
 * Typography Design Tokens
 * 프로젝트 전역에서 사용되는 타이포그래피 토큰을 정의합니다.
 * html { font-size: 62.5% } 기준 (1rem = 10px)
 */

import { fontWeight } from "./tokens/font.css";

export const typographyVars = {
  display: {
    fontSize: "5rem", // 50px
    fontWeight: fontWeight.semibold,
    lineHeight: "140%",
    letterSpacing: "-0.025em",
  },
  heading1: {
    fontSize: "3.2rem", // 32px
    fontWeight: fontWeight.semibold,
    lineHeight: "140%",
    letterSpacing: "-0.025em",
  },
  heading2: {
    fontSize: "2.4rem", // 24px
    fontWeight: fontWeight.semibold,
    lineHeight: "140%",
    letterSpacing: "-0.025em",
  },
  heading3: {
    fontSize: "1.8rem", // 18px
    fontWeight: fontWeight.semibold,
    lineHeight: "140%",
    letterSpacing: "-0.025em",
  },
  body1: {
    fontSize: "1.6rem", // 16px
    fontWeight: fontWeight.semibold,
    lineHeight: "140%",
    letterSpacing: "-0.025em",
  },
  body2: {
    fontSize: "1.6rem", // 16px
    fontWeight: fontWeight.medium,
    lineHeight: "140%",
    letterSpacing: "-0.025em",
  },
  body3: {
    fontSize: "1.4rem", // 14px
    fontWeight: fontWeight.medium,
    lineHeight: "140%",
    letterSpacing: "-0.025em",
  },
  body4: {
    fontSize: "1.4rem", // 14px
    fontWeight: fontWeight.regular,
    lineHeight: "160%",
    letterSpacing: "-0.025em",
  },
  caption1: {
    fontSize: "1.2rem", // 12px
    fontWeight: fontWeight.medium,
    lineHeight: "140%",
    letterSpacing: "-0.025em",
  },
  caption2: {
    fontSize: "1.2rem", // 12px
    fontWeight: fontWeight.regular,
    lineHeight: "140%",
    letterSpacing: "-0.025em",
  },
} as const;

// typography 헬퍼 함수
export type TypographyKey = keyof typeof typographyVars;

export const typographyStyle = (key: TypographyKey) => {
  const styleValue = typographyVars[key];
  if (!styleValue) throw new Error(`Invalid typography key: ${key}`);
  return styleValue;
};
