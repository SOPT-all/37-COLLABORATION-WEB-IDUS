import React from "react";
import { createPortal } from "react-dom";
import * as styles from "./bottom-sheet.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return createPortal(
    // TODO: 접근성 고려
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.sheet}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default BottomSheet;
