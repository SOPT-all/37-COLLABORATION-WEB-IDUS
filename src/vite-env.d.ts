/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  // Vite에서 사용할 사용자 정의 환경변수 타입 정의
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  // import.meta.env에 위에서 정의한 타입 연결
  readonly env: ImportMetaEnv;
}
