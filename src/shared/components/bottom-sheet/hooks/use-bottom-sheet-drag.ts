import React, { useRef, useState } from "react";

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
const [touchStartY, setTouchStartY] = useState(0);  // 방향 판단 용
const [sheetStartY, setSheetStartY] = useState<number | null>(null); // sheet transform 기준점
  const [dragDistance, setDragDistance] = useState(0); // sheet이 내려간 거리
  const [isDragging, setIsDragging] = useState(false);

  // 드래그 시작
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY); // 드래그를 시작한 y좌표 세팅
    setIsDragging(true);
  };

  // sheet을 드래그하는 로직
  const moveSheet = (currentY: number) => {
    if (sheetDragStartY === null) {
      setSheetDragStartY(currentY);
    }

    const sheetDeltaY = currentY - (sheetDragStartY ?? currentY);
    setDragDistance(sheetDeltaY);

    if (sheetRef.current) {
      sheetRef.current.style.transition = "none"; // handleTouchEnd에서 추가된 transition 제거 -> sheet가 드래그에 즉각 반응
      sheetRef.current.style.transform = `translateY(${sheetDeltaY}px)`;
    }
  };

  // content 영역 드래그
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY; // 현재 드래그 y좌표
    const deltaY = currentY - startY; // 드래그 이동 거리

    // 드래그가 위에서 아래로 진행될 때 if문 진입(content를 위로 스크롤하거나, 바텀시트를 닫기 위한 드래그 액션)
    if (deltaY > 0) {
      // content의 최상단에 도달했을때 if문 진입 및 sheet 드래그
      if (contentRef.current && contentRef.current.scrollTop === 0) {
        moveSheet(currentY);
      }
    }
  };

  // drag handler 영역 드래그
  const handleDragHandlerMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 0) {
      // drag handler 조작 시 scrollTop 체크 없이 바로 sheet 드래그
      moveSheet(currentY);
    }
  };

  // 드래그 종료
  const handleTouchEnd = () => {
    setIsDragging(false);

    if (sheetRef.current) {
      // CLOSE_THRESHOLD 이상 드래그하면 닫기
      if (dragDistance > CLOSE_THRESHOLD) {
        // 부드럽게 아래로 내려가며 닫기
        sheetRef.current.style.transition = `transform ${CLOSE_TRANSITION_DURATION}ms ease-in`;
        sheetRef.current.style.transform = "translateY(100%)";

        // transition 완료 후 onClose 호출
        setTimeout(() => {
          onClose();
        }, CLOSE_TRANSITION_DURATION);
      } else {
        // sheet 원위치로 복귀
        sheetRef.current.style.transition = `transform ${RETURN_TRANSITION_DURATION}ms ease-out`;
        sheetRef.current.style.transform = "translateY(0)";
      }
    }

    setDragDistance(0);
    setSheetDragStartY(null);
  };

  return {
    sheetRef,
    contentRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleDragHandlerMove,
  };
};
