import * as styles from "./base-benefit.css";
import type { ReactNode } from "react";

interface BaseProps {
  type: "membership-benefit" | "pay-benefit" | "benefit-more";
  children: ReactNode;
}

export const BaseBenefit = ({ type, children }: BaseProps) => {
  return <div className={styles.container({ type })}>{children}</div>;
};
