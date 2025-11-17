import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // 스토리 파일의 위치를 지정하는 배열
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // Storybook에 추가할 애드온 목록
  addons: [
    "@chromatic-com/storybook", // Chromatic과 연동하여 비주얼 테스팅과 UI 리뷰 기능을 추가하는 애드온
    "@storybook/addon-docs", // 스토리북에서 docs를 만드는 것을 도와주는 애드온
    "@storybook/addon-onboarding", // Storybook을 처음 사용하는 사용자를 돕기 위한 온보딩 애드온 (설치 이후 사용X)
    "@storybook/addon-a11y", // 컴포넌트의 웹 접근성(Accessibility)을 파악하고 개선하는 애드온
    "@storybook/addon-vitest", // Storybook 내에서 직접 컴포넌트를 테스트할 수 있는 애드온
  ],
  framework: {
    name: "@storybook/react-vite", /// React + Vite 기반의 Storybook 설정을 사용
    options: {},
  },
  staticDirs: ["../public"], // 정적 파일이 있는 경로를 지정
  core: {
    disableTelemetry: true, // 사용자 데이터를 수집하지 않도록 설정
  },
  typescript: {
    check: false,
    // 컴포넌트의 props타입 정보를 자동으로 문서화 진행해주는 라이브러리
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
export default config;
