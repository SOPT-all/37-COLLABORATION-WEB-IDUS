import { style } from "@vanilla-extract/css";
import { typographyVars } from "../styles/typography.css";

export const content = style({
  ...typographyVars.heading1,
});
