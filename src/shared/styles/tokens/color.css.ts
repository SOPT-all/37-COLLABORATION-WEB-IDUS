import { createGlobalTheme } from "@vanilla-extract/css";

export const color = createGlobalTheme(":root", {
  white: { 100: "#fdfdfd", 200: "#fafafa", 300: "#f1f1f1" },
  black: { 100: "#121212", 200: "#333333" },
  gray: { 100: "#666666", 200: "#d9d9d9", 300: "#999999" },
  brand: { 100: "#EF7014", 200: "rgba(239, 112, 20, 0.08)" },
});
