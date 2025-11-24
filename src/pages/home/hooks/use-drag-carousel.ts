import { useState, type MouseEvent, type TouchEvent } from "react";

interface dragCarouselProps {
  onSwipeNext: () => void;
  onSwipePrev: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

/**
 * @description 캐러셀의 마우스/터치 드래그 이벤트를 처리하여 스와이프 동작을 감지하는 훅
 * @param onSwipeNext - 오른쪽에서 왼쪽으로 스와이프 성공 시 실행될 콜백
 * @param onSwipePrev - 왼쪽에서 오른쪽으로 스와이프 성공 시 실행될 콜백
 * @param onDragStart - 사용자가 드래그를 시작하면 실행될 콜백
 * @param onDragEnd - 사용자가 드래그 끝내면 실행될 콜백
 * @returns
 */
export const useDragCarousel = ({
  onSwipeNext,
  onSwipePrev,
  onDragStart,
  onDragEnd,
}: dragCarouselProps) => {
  const [isDragging, setIsDragging] = useState(false); // 현재 드래그 중인지 여부
  const [draggedStartX, setDraggedStartX] = useState(0); // 드래그를 시작한 시점의 X 좌표
  const [draggedX, setDraggedX] = useState(0); // 드래그 중 실시간으로 이동한 거리 (현재 위치-시작 위치)
  const DRAG_THRESHOLD = 100; // 넘김으로 처리할 최소 기준점 (100px 이상 드래그해야 이동)

  // 사용자 드래그 이벤트 시작
  const handleDragStart = (dragStartPosition: number) => {
    onDragStart?.();
    setIsDragging(true);
    setDraggedStartX(dragStartPosition);
  };

  // 사용자 드래그 이벤트 진행 중
  const handleDragMove = (dragMoveX: number) => {
    if (!isDragging) return;
    setDraggedX(dragMoveX - draggedStartX);
  };

  // 사용자 드래그 이벤트 종료
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (draggedX < -DRAG_THRESHOLD) {
      onSwipeNext(); // 왼쪽으로 100px 이상 드래그하면 오른쪽 이동
    } else if (draggedX > DRAG_THRESHOLD) {
      onSwipePrev(); // 오른쪽으로 100px 이상 드래그하면 왼쪽 이동
    } else {
      onDragEnd?.(); // 100px 이상 드래그하지 않으면 제자리 복귀
    }
    setDraggedX(0);
  };

  const dragHandlers = {
    // 마우스 이벤트
    onMouseDown: (e: MouseEvent<HTMLDivElement>) => handleDragStart(e.pageX),
    onMouseMove: (e: MouseEvent<HTMLDivElement>) => handleDragMove(e.pageX),
    onMouseUp: handleDragEnd,
    onMouseLeave: handleDragEnd,
    // 모바일 터치 이벤트
    onTouchStart: (e: TouchEvent<HTMLDivElement>) =>
      handleDragStart(e.touches[0].pageX),
    onTouchMove: (e: TouchEvent<HTMLDivElement>) =>
      handleDragMove(e.touches[0].pageX),
    onTouchEnd: handleDragEnd,
  };

  return {
    isDragging,
    draggedX,
    dragHandlers,
  };
};
