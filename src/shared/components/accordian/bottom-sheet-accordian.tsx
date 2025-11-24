import React from "react";
import { BaseAccordion } from "./base-accordion";
import * as styles from "./base-accordian.css";

interface BottomSheetAccordionProps {
  title: string;
  selectedOption?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const BottomSheetAccordion = ({
  title,
  selectedOption,
  onClick,
  children,
}: BottomSheetAccordionProps) => {
  const renderBottomSheetOption = () => (
    <span className={styles.bottomSheetsOption}>
      선택 |<span className={styles.selectedValue}>{selectedOption}</span>
    </span>
  );

  return (
    <BaseAccordion
      title={title}
      renderBottomSheetOption={renderBottomSheetOption}
      onClick={onClick}
      styleType="bottom-sheets">
      {children}
    </BaseAccordion>
  );
};
