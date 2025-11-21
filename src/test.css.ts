import { style } from "@vanilla-extract/css";
import { color } from "./shared/styles/tokens/color.css";

export const test = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const children = style({
  width: "100%",
  backgroundColor: color.white[200],
  borderRadius: "0.8rem",
  padding: "1.2rem 1.6rem",
});
