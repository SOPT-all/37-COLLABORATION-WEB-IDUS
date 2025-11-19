/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import svgr from "vite-plugin-svgr";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
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
      "@": path.resolve(dirname, "./src"),
      "@shared": path.resolve(dirname, "./src/shared"),
      "@pages": path.resolve(dirname, "./src/pages"),
      "@routes": path.resolve(dirname, "./src/routes"),
      "@svg": path.resolve(dirname, "./src/assets/svg"),
      "@img": path.resolve(dirname, "./src/assets/img"),
      "@styles": path.resolve(dirname, "./src/shared/styles"),
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
