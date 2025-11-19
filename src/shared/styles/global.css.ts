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
  letterSpacing: "-0.025em",
});

globalStyle("html, body, #root", {
  minHeight: "100dvh", // viewport(브라우저 화면) 높이의 100%를 최소 높이로 설정
  WebkitFontSmoothing: "antialiased", // 폰트 렌더링 개선
  MozOsxFontSmoothing: "grayscale", // 폰트 렌더링 개선
});

// 모바일 웹앱용 추가 설정
globalStyle("*", {
  WebkitTapHighlightColor: "transparent", // 탭 하이라이트 제거
});
