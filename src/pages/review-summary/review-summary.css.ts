import { style } from "@vanilla-extract/css";
import { components } from "@/shared/styles/layer.css";
import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { recipe } from "@vanilla-extract/recipes";

// 전체 섹션 박스
export const container = style({
  "@layer": {
    [components]: {
      backgroundColor: color.white[300],
      padding: "4rem 1.6rem",
    },
  },
});

// 제목 영역 전체
export const header = style({
  "@layer": {
    [components]: {
      textAlign: "center",
    },
  },
});

export const headerText = recipe({
  base: {
    "@layer": {
      [components]: {
        textAlign: "center", // 공통 속성
      },
    },
  },
  variants: {
    type: {
      caption: {
        ...typographyVars.body3,
        color: color.gray[100],
        marginBottom: "0.8rem",
      },
      title: {
        ...typographyVars.heading2,
        color: color.black[100],
        marginBottom: "1.6rem",
      },
    },
  },
});

// 별점 + 후기 개수 전체 영역
export const scoreSection = style({
  "@layer": {
    [components]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      columnGap: "2.4rem",
    },
  },
});

// 평균 별점
export const scoreValue = style({
  "@layer": {
    [components]: {
      ...typographyVars.display,
      color: color.black[100],
    },
  },
});

// 오른쪽 전체 (별 + 후기)
export const scoreRight = style({
  "@layer": {
    [components]: {
      display: "flex",
      flexDirection: "column",
      rowGap: "0.5rem",
      alignItems: "flex-start",
      padding: "1.5rem 0",
    },
  },
});
// 별 줄
export const scoreStarsRow = style({
  "@layer": {
    [components]: {
      display: "flex",
      alignItems: "center",
    },
  },
});

// 각 별 아이콘
export const starIcon = style({
  "@layer": {
    [components]: {
      width: "2.4rem",
      height: "2.4rem",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  selectors: {
    "&:not(:first-child)": {
      marginLeft: "-0.5rem", // 두 번째 별부터 -5px 겹치기
    },
  },
});

export const reviewCountText = style({
  "@layer": {
    [components]: {
      ...typographyVars.caption1,
      color: color.gray[100],
      display: "flex",
      alignItems: "baseline",
    },
  },
});

export const reviewCountNumber = style({
  "@layer": {
    [components]: {
      ...typographyVars.caption1,
      color: color.black[100],
      marginLeft: "0.4rem",
    },
  },
});
// AI 후기 요약 전체 영역
export const aiSection = style({
  "@layer": {
    [components]: {
      padding: "2.4rem 1.6rem",
    },
  },
});

// AI 후기 영역 헤더
export const aiHeader = style({
  "@layer": {
    [components]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1.5rem",
    },
  },
});

export const aiLabel = style({
  "@layer": {
    [components]: {
      ...typographyVars.body3,
    },
  },
});

export const aiDescription = style({
  "@layer": {
    [components]: {
      ...typographyVars.caption2,
      color: color.gray[100],
    },
  },
});

export const aiSummaryBox = style({
  "@layer": {
    [components]: {
      borderTop: `0.1rem solid ${color.gray[200]}`,
      borderBottom: `0.1rem solid ${color.gray[200]}`,
    },
  },
});

export const aiSummaryText = style({
  "@layer": {
    [components]: {
      ...typographyVars.body4,
      padding: "1.6rem",
    },
  },
});

// 썸네일 전체 영역
export const thumbnailSection = style({
  "@layer": {
    [components]: {
      padding: "0 1.6rem",
    },
  },
});

// 썸네일 그리드
export const thumbnailGrid = style({
  "@layer": {
    [components]: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "0.4rem",
    },
  },
});

// 썸네일 한 칸
export const thumbnail = style({
  "@layer": {
    [components]: {
      width: "100%",
      aspectRatio: "1 / 1", // 정사각형
      borderRadius: "3px",
      overflow: "hidden",
      position: "relative",
    },
  },
});

// 썸네일 이미지
export const thumbnailImage = style({
  "@layer": {
    [components]: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
  },
});
// 썸네일 오버레이
export const thumbnailOverlay = style({
  "@layer": {
    [components]: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "3px",
      cursor: "pointer",
    },
  },
});
export const thumbnailText = style({
  "@layer": {
    [components]: {
      ...typographyVars.heading3,
      color: color.white[100],
    },
  },
});
