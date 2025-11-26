// 바텀시트 테스트용
// 추후 삭제 예정

import { useState } from "react";
import BottomSheet from "../bottom-sheet";
import * as styles from "./bottom-sheet-test.css";

const BottomSheetTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BottomSheet Test Page</h1>
      <button className={styles.openButton} onClick={handleOpen}>
        바텀시트 열기
      </button>

      <div className={styles.scrollContent}>
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i} className={styles.paragraph}>
            뒷배경 스크롤 테스트 {i + 1}
          </p>
        ))}
      </div>

      <BottomSheet isOpen={isOpen} onClose={handleClose}>
        <h2 className={styles.sheetTitle}>바텀시트 제목</h2>
        <p className={styles.sheetDescription}>
          아래로 드래그하거나 뒷배경을 탭하면 닫힘
        </p>
        <div className={styles.sheetContent}>
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className={styles.sheetItem}>
              {i + 1}
            </div>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
};

export default BottomSheetTest;
