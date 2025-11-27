import { useRef, useState, type MouseEvent, type TouchEvent } from "react";

interface UseBottomSheetDragProps {
  onClose: () => void;
}

// 상수 정의
const CLOSE_THRESHOLD = 200; // sheet을 닫기 위한 최소 드래그 거리 (px)
const CLOSE_TRANSITION_DURATION = 200; // sheet 닫힐 때 transition 시간 (ms)
const RETURN_TRANSITION_DURATION = 300; // sheet 원위치 복귀 시 transition 시간 (ms)

export const useBottomSheetDrag = ({ onClose }: UseBottomSheetDragProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0); // 방향 판단용
  const [sheetStartY, setSheetStartY] = useState<number | null>(null); // sheet transform 기준점
  const dragDistanceRef = useRef(0); // sheet이 내려간 거리
  const isDraggingRef = useRef(false); // 드래그 중인지 여부

  // 드래그 시작
  const handleDragStart = (clientY: number) => {
    setStartY(clientY);
    isDraggingRef.current = true;
  };

  // sheet을 드래그하는 로직
  const moveSheet = (currentY: number) => {
    if (sheetStartY === null) {
      setSheetStartY(currentY);
    }

    const sheetDeltaY = currentY - (sheetStartY ?? currentY);
    dragDistanceRef.current = sheetDeltaY;

    if (sheetRef.current) {
      sheetRef.current.style.transition = "none";
      sheetRef.current.style.transform = `translateY(${sheetDeltaY}px)`;
    }
  };

  // content 영역 드래그
  const handleDragMove = (currentY: number) => {
    if (!isDraggingRef.current) return;

    const deltaY = currentY - startY;

    if (deltaY > 0) {
      if (contentRef.current && contentRef.current.scrollTop === 0) {
        moveSheet(currentY);
      }
    }
  };

  // drag handler 영역 드래그
  const handleDragHandlerMove = (currentY: number) => {
    if (!isDraggingRef.current) return;

    const deltaY = currentY - startY;

    if (deltaY > 0) {
      moveSheet(currentY);
    }
  };

  // 드래그 종료
  const handleDragEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    if (sheetRef.current) {
      if (dragDistanceRef.current > CLOSE_THRESHOLD) {
        sheetRef.current.style.transition = `transform ${CLOSE_TRANSITION_DURATION}ms ease-in`;
        sheetRef.current.style.transform = "translateY(100%)";

        setTimeout(() => {
          onClose();
        }, CLOSE_TRANSITION_DURATION);
      } else {
        sheetRef.current.style.transition = `transform ${RETURN_TRANSITION_DURATION}ms ease-out`;
        sheetRef.current.style.transform = "translateY(0)";
      }
    }

    dragDistanceRef.current = 0;
    setSheetStartY(null);
  };

  // content 영역 이벤트 핸들러
  const contentDragHandlers = {
    // 터치 이벤트
    onTouchStart: (e: TouchEvent) => handleDragStart(e.touches[0].clientY),
    onTouchMove: (e: TouchEvent) => handleDragMove(e.touches[0].clientY),
    onTouchEnd: handleDragEnd,
    // 마우스 이벤트
    onMouseDown: (e: MouseEvent) => handleDragStart(e.clientY),
    onMouseMove: (e: MouseEvent) => handleDragMove(e.clientY),
    onMouseUp: handleDragEnd,
    onMouseLeave: handleDragEnd,
  };

  // drag handler 영역 이벤트 핸들러
  const dragHandlerHandlers = {
    // 터치 이벤트
    onTouchStart: (e: TouchEvent) => handleDragStart(e.touches[0].clientY),
    onTouchMove: (e: TouchEvent) => handleDragHandlerMove(e.touches[0].clientY),
    onTouchEnd: handleDragEnd,
    // 마우스 이벤트
    onMouseDown: (e: MouseEvent) => handleDragStart(e.clientY),
    onMouseMove: (e: MouseEvent) => handleDragHandlerMove(e.clientY),
    onMouseUp: handleDragEnd,
    onMouseLeave: handleDragEnd,
  };

  return {
    sheetRef,
    contentRef,
    contentDragHandlers,
    dragHandlerHandlers,
  };
};
