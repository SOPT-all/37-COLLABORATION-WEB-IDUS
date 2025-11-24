import { style } from "@vanilla-extract/css";

export const test = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "1.6rem",
});

export const bigElement = style({
  height: "120vh",
});
