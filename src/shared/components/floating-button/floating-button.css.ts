import { typographyVars } from "@/shared/styles/typography.css";
import { color } from "@/shared/styles/tokens/color.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "fixed",
  right: "max(1.6rem, calc((100vw - 375px) / 2 + 1.6rem))", // 375px 컨테이너 기준
  bottom: "calc(14.3rem + 1.6rem)", // footer 높이 + 1.6rem
  zIndex: 999,
  padding: "0.8rem 1.2rem 0.8rem 0.8rem",
  display: "inline-flex",
  gap: "0.4rem",
  alignItems: "center",
  borderRadius: "20px",
  backgroundColor: color.white[100],
  cursor: "pointer",
  userSelect: "none", // 버튼 드래그 방지, 더블클릭 시 텍스트 파란색으로 하이라이트 방지
  whiteSpace: "nowrap",
  transition: "background-color 0.2s ease, transform 0.2s ease",
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
