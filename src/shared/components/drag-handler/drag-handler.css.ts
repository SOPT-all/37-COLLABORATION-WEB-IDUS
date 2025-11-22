import { style } from "@vanilla-extract/css";
import { color } from "@/shared/styles/tokens/color.css";

export const container = style({
  width: "100%",
  display: "flex",
  padding: "1.6rem 0 1.2rem",
  justifyContent: "center",
});

export const dragHandler = style({
  width: "6.4rem",
  height: "0.5rem",
  borderRadius: "5px",
  backgroundColor: color.gray[200],
});
