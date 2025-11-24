import { style } from "@vanilla-extract/css";
import { components } from "@/shared/styles/layer.css";

// 후기 리스트 섹션 전체 박스
export const reviewListSection = style({
  "@layer": {
    [components]: {
      padding: "1.2rem 1.6rem 0",
    },
  },
});
