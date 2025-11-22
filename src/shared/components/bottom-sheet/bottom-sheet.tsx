import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import * as styles from "./bottom-sheet.css";
import { useBottomSheetDrag } from "./hooks/use-bottom-sheet-drag";
import DragHandler from "@/shared/components/drag-handler/drag-handler";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ isOpen, onClose, children }: Props) => {
  const {
    sheetRef,
    contentRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleDragHandlerMove,
  } = useBottomSheetDrag({ onClose });

  // 바텀시트가 열렸을 때 뒷배경 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        // isOpen이 변경되거나 컴포넌트가 언마운트될 때 실행, body의 overflow를 원래 값으로 복구
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    // TODO: 접근성 고려
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose} />
      <div ref={sheetRef} className={styles.sheet}>
        <DragHandler
          onTouchStart={handleTouchStart}
          onTouchMove={handleDragHandlerMove}
          onTouchEnd={handleTouchEnd}
        />
        <div
          ref={contentRef}
          className={styles.content}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BottomSheet;
