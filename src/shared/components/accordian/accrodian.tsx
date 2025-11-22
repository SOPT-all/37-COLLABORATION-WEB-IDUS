import React, { useState } from "react";
import * as styles from "./accrodian.css";
import { ArrowRight, ChevronDown } from "@/assets/svg";

interface AccrodianProps {
  type: "maker" | "bottom-sheets";
  title: string;
  option?: string;
  selectedOption?: string;
  isMakerReport?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Accrodian = ({
  type,
  title,
  option,
  selectedOption,
  onClick,
  isMakerReport,
  children,
}: AccrodianProps) => {
  const isMaker = type === "maker";
  const [isOpen, setIsOpen] = useState(false);

  const handleAccrodianClick = () => {
    setIsOpen((prev) => !prev);
    onClick?.();
  };

  return (
    <div
      className={[
        styles.container({ type }),
        type === "maker" && isMakerReport ? styles.makerBorder : "",
      ].join(" ")}>
      <div className={styles.accordion} onClick={handleAccrodianClick}>
        <div className={styles.titleWrapper}>
          <span className={styles.title({ type })}>{title}</span>

          {!isMaker && (
            <span className={styles.bottomSheetsOption}>
              선택 | {selectedOption}
            </span>
          )}
        </div>

        <div className={styles.optionIconWrapper}>
          {isMaker && <span className={styles.makerOption}>{option}</span>}
          {isMakerReport ? (
            <ArrowRight />
          ) : (
            <span className={styles.toggleIcon({ isOpen })}>
              <ChevronDown
                width={type == "maker" ? 24 : 20}
                height={type == "maker" ? 24 : 20}
              />
            </span>
          )}
        </div>
      </div>

      <div
        className={[styles.content, isOpen ? styles.contentOpen : ""].join(
          " "
        )}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
};
