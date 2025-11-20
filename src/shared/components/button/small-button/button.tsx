import type React from "react";
import * as styles from "./button.css";
import type { SmallButtonVariants } from "@/shared/constants/button";

interface Props extends React.ComponentProps<"button"> {
  variant: SmallButtonVariants;
}

const SmallButton = ({ variant, children, ...props }: Props) => {
  return (
    <button className={styles.buttonStyles({ variant })} {...props}>
      {children}
    </button>
  );
};

export default SmallButton;
