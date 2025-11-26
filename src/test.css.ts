import { style } from "@vanilla-extract/css";

export const test = style({
  width: "100%",
  padding: "1rem",
  display: "flex",
  gap: "0.6rem",
  overflowX: "auto",

  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});
