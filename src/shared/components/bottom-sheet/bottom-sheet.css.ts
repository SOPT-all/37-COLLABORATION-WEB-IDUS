import { style, keyframes } from "@vanilla-extract/css";
import { color } from "@/shared/styles/tokens/color.css";

// overlay 애니메이션 정의
const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

// sheet 애니메이션 정의
const slideUp = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

// overlay: 전체 바텀 시트의 레이아웃 컨테이너
// backdrop과 sheet의 부모 컨테이너, flex-end로 sheet를 화면 하단에 배치
export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000, // TODO: zIndex 토큰화
  display: "flex",
  alignItems: "flex-end", // bottom sheet는 화면 아래에서 올라와야 하므로, overlay의 bottom에 위치시켜야 함
  justifyContent: "center",
  animation: `${fadeIn} 0.2s ease-out`,
});

// 반투명 검은 배경, 사용자 클릭 시 바텀시트 닫는 용도
export const backdrop = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.35)",
});

// 실제 바텀시트(흰색 박스))
export const sheet = style({
  position: "relative", // overlay 기준으로 상대적인 위치 설정
  width: "37.5rem",
  maxHeight: "90dvh", //
  backgroundColor: color.white[100],
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
  display: "flex",
  flexDirection: "column",
  zIndex: 1001, // TODO: zIndex 토큰화
  animation: `${slideUp} 0.3s ease-out`,
});

export const content = style({
  padding: "0 1.6rem 1.6rem 1.6rem",
  overflowY: "auto",
  flex: 1, // sheet가 column이므로 content가 sheet의 모든 공간을 차지하도록 설정
});
