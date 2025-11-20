import type { Preview } from "@storybook/react-vite";
import QueryProvider from "../src/shared/apis/query-client";
import "@shared/styles/global.css";

const preview: Preview = {
  parameters: {
    // 코드 변경 없이 storybook에서 동적으로 바꿔가며 인터렉션할 수 있도록 도와주는 기능
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    tags: ["autodocs"], // 자동 문서화
  },
  decorators: [
    (Story) => (
      <QueryProvider>
        <Story />
      </QueryProvider>
    ),
  ],
};

export default preview;
