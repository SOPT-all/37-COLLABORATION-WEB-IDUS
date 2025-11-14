import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'named', // SVG를 컴포넌트 이름으로 import (Named export)
        ref: true, // JavaScript로 SVG 직접 접근 가능(useRef 등)
        svgo: false, // 원본 SVG 파일을 그대로 import, 최적화 비활성화(원본 유지)
        titleProp: true, // SVG에 <Logo title="" />와 같이 title 추가 가능(접근성 증대)
      },
      include: '**/*.svg',
    }),
  ],
})
