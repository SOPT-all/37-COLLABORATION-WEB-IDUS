import * as styles from "./base-accordian.css";
import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown } from "@/assets/svg";

interface BaseAccordionProps {
  title: string;
  isExpandable?: boolean;
  renderBottomSheetOption?: () => ReactNode;
  renderMakerRightArea?: (_isOpen: boolean) => ReactNode;
  onClick?: () => void;
  children?: ReactNode;
  styleType: "maker" | "bottom-sheets";
  hasBorder?: boolean;
}

export const BaseAccordion = ({
  title,
  isExpandable = true,
  renderBottomSheetOption,
  renderMakerRightArea,
  onClick,
  children,
  styleType,
  hasBorder = false,
}: BaseAccordionProps) => {
  const isMaker = styleType == "maker";
  const [isAccrodianOpen, setIsAccrodianOpen] = useState(false);

  const handleAccrodianClick = () => {
    if (isExpandable) {
      setIsAccrodianOpen((prev) => !prev);
    }
    onClick?.();
  };

  const defaultRightIcon = (
    <span className={styles.toggleIcon({ isAccrodianOpen: isAccrodianOpen })}>
      <ChevronDown width={isMaker ? 24 : 20} height={isMaker ? 24 : 20} />
    </span>
  );

  return (
    <div className={styles.container({ type: styleType, hasBorder })}>
      <div className={styles.accordion} onClick={handleAccrodianClick}>
        <div className={styles.titleWrapper}>
          <span className={styles.title({ type: styleType })}>{title}</span>
          {renderBottomSheetOption?.()}
        </div>
        <div className={styles.optionIconWrapper}>
          {renderMakerRightArea
            ? renderMakerRightArea(isAccrodianOpen)
            : defaultRightIcon}
        </div>
      </div>
      {isExpandable && (
        <div
          className={styles.contentWrapper({
            isAccrodianOpen: isAccrodianOpen,
          })}>
          <div className={styles.content}>{children}</div>
        </div>
      )}
    </div>
  );
};
