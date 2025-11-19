// Vite 빌드 도구의 설정 파일
// Vite는 이 파일을 읽고 프로젝트에 맞게 최적화된 빌드와 개발 환경을 구성함

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true, // JavaScript로 SVG 직접 접근 가능(useRef 등)
        svgo: false, // 원본 SVG 파일을 그대로 import, 최적화 비활성화(원본 유지)
        titleProp: true, // SVG에 <Logo title="" />와 같이 title 추가 가능(접근성 증대)
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@svg": path.resolve(__dirname, "./src/assets/svg"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@styles": path.resolve(__dirname, "./src/shared/styles"),
    },
  },
});
