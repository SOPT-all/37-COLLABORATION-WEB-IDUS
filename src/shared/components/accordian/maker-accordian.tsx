import React from "react";
import { BaseAccordion } from "./base-accordion";
import { ArrowRight, ChevronDown } from "@/assets/svg";
import * as styles from "./base-accordian.css";

interface MakerAccordionProps {
  title: string;
  selectedOption?: string;
  iconType?: "arrow" | "chevron";
  onClick?: () => void;
  children?: React.ReactNode;
}

export const MakerAccordion = ({
  title,
  selectedOption,
  iconType = "chevron",
  onClick,
  children,
}: MakerAccordionProps) => {
  const isExpandable = iconType === "chevron";
  const hasBorder = iconType === "arrow";

  const renderMakerRightArea = (isOpen: boolean) => {
    if (iconType === "arrow") {
      return <ArrowRight />;
    }
    return (
      <>
        {selectedOption && (
          <span className={styles.makerOption}>{selectedOption}</span>
        )}
        <span className={styles.toggleIcon({ isAccrodianOpen: isOpen })}>
          <ChevronDown width={24} height={24} />
        </span>
      </>
    );
  };

  return (
    <BaseAccordion
      title={title}
      isExpandable={isExpandable}
      renderMakerRightArea={renderMakerRightArea}
      onClick={onClick}
      styleType="maker"
      hasBorder={hasBorder}>
      {children}
    </BaseAccordion>
  );
};
