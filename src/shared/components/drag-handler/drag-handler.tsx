import React from "react";
import * as styles from "./drag-handler.css";

interface Props {
  onTouchStart?: (e: React.TouchEvent) => void;
  onTouchMove?: (e: React.TouchEvent) => void;
  onTouchEnd?: (e: React.TouchEvent) => void;
}

const DragHandler = ({ onTouchStart, onTouchMove, onTouchEnd }: Props) => {
  return (
    <div
      className={styles.container}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <div className={styles.dragHandler}></div>
    </div>
  );
};

export default DragHandler;
