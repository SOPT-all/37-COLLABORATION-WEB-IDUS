import React from "react";
import * as styles from "./large-button.css";
import type { LargeButtonVariants } from "@/shared/constants/button";
import { ChevronDown } from "@/assets/svg";

interface Props extends React.ComponentProps<"button"> {
  variant: LargeButtonVariants;
  hasArrow?: boolean;
}

const LargeButton = ({
  variant,
  children,
  hasArrow = false,
  ...props
}: Props) => {
  return (
    <button className={styles.buttonStyles({ variant })} {...props}>
      {children}
      {hasArrow && <ChevronDown className={styles.arrow({ variant })} />}
    </button>
  );
};

export default LargeButton;
