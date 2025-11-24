import { color } from "@/shared/styles/tokens/color.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  maxWidth: "375px",
});

export const container = style({
  width: "100%",
  padding: "1.6rem",
  backgroundColor: color.white[100],

  display: "flex",
  justifyContent: "space-between",
});

export const group = style({
  display: "flex",
  gap: "1.6rem",
});

export const button = style({
  cursor: "pointer",
});
