import { typographyVars } from "@/shared/styles/typography.css";
import { color } from "@/shared/styles/tokens/color.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "0.8rem 1.2rem 0.8rem 0.8rem",
  display: "inline-flex",
  gap: "0.4rem",
  alignItems: "center",
  borderRadius: "20px",
  backgroundColor: "transparent",
  cursor: "pointer",
  userSelect: "none", // 버튼 드래그 방지, 더블클릭 시 텍스트 파란색으로 하이라이트 방지
  whiteSpace: "nowrap",
  transition: "all 0.2s ease",
  boxShadow: "0px 4px 4px 0px rgba(18, 18, 18, 0.04)",

  ":active": {
    backgroundColor: color.white[300],
    transform: "scale(0.97)",
  },
});

export const content = style({
  ...typographyVars.body3,
  color: color.black[200],
});
