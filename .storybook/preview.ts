import type { Preview } from "@storybook/react-vite";
// (global.css) import 예정

const preview: Preview = {
  parameters: {
    // 코드 변경 없이 storybook에서 동적으로 바꿔가며 인터렉션할 수 있도록 도와주는 기능
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" }, // on 핸들링 함수 감지
    tags: ["autodocs"], // 자동 문서화
  },
};

export default preview;
