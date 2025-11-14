import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import typescriptParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: ["dist", "node_modules", "build", "*.config.js"] },

  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,

  {
    files: ["**/*.{ts,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      /**=== 변수/스코프 === */
      "no-var": "error", // var 사용 금지 (필수)
      "prefer-template": "error", // 문자열 조합 백틱 사용 (필수)
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // 사용하지 않는 변수 (경고)
      "no-undef": "error", // 정의되지 않은 변수 사용 금지 (필수)

      /**=== 함수 === */
      "prefer-arrow-callback": "warn", // 화살표 사용 권장 (경고)
      "no-empty-function": "error", // 빈 함수 금지 (필수)
      "no-param-reassign": "error", // 파라미터 재할당 금지 (필수)

      /**=== 모듈 ===*/
      "import/first": "error", // import문 최상단 위치 (필수)
      "import/no-duplicates": "error", // 중복 import 금지 (필수)
      "import/prefer-default-export": "warn", // 단일 export시, 'default export' 권장

      /**=== 기타 ===*/
      "no-console": ["warn", { allow: ["warn", "error"] }], // console.log() 경고. 그 외 허용
    },
  },
  eslintConfigPrettier,
];
