import { globalStyle } from "@vanilla-extract/css";
import "./layer.css";
import "./reset.css";
import "../styles/typography.css";

globalStyle("html", { fontSize: "62.5%" });

globalStyle("body", {
  width: "375px",
  maxWidth: "100vw", // 작은 화면 대응
  margin: "0 auto", // 큰 화면에서 중앙 정렬
  fontFamily: "Pretendard",
});

globalStyle("html, body, #root", {
  minHeight: ["100vh", "100dvh"], // [폴백 값, 최종 값]
  WebkitFontSmoothing: "antialiased", // 폰트 렌더링 개선
  MozOsxFontSmoothing: "grayscale", // 폰트 렌더링 개선
});

// 모바일 웹앱용 추가 설정
globalStyle("*", {
  WebkitTapHighlightColor: "transparent", // 탭 하이라이트 제거
});
