import { style } from "@vanilla-extract/css";

export const imageWrapperClosed = style({
  maxHeight: 0,
  opacity: 0,
  overflow: "hidden",
  transition: "max-height 0.5s ease, opacity 0.5s ease",
});

export const imageWrapperOpen = style({
  padding: "0.8rem 0 1.6rem 0",
  maxHeight: "50rem",
  opacity: 1,
  transition: "max-height 0.5s ease, opacity 0.5s ease",
});
