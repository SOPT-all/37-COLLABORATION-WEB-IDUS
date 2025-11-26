import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const tabBar = style({
  position: "sticky",
  top: "5.6rem", // 헤더 높이만큼 띄워서 헤더 바로 아래에 붙도록
  display: "flex",
  backgroundColor: color.white[100],
  borderBottom: `1px solid ${color.gray[200]}`,
  zIndex: 10,
});

export const tab = recipe({
  base: {
    flex: 1,
    textAlign: "center",
    ...typographyVars.body1,
    padding: "1.2rem 1rem",
    border: "none",
    background: "none",
    cursor: "pointer",
    color: color.gray[300],
    transition: "color 0.2s",
    position: "relative",
    marginBottom: "-1px", // tabBar의 border를 덮기 위해
    borderBottom: `2px solid transparent`,
  },
  variants: {
    active: {
      true: {
        color: color.black[100],
        borderBottom: `2px solid ${color.black[100]}`,
      },
    },
  },
});
