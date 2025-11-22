import React, { useRef, useState } from "react";

interface UseBottomSheetDragProps {
  onClose: () => void;
}

export const useBottomSheetDrag = ({ onClose }: UseBottomSheetDragProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0); // 드래그를 시작한 y좌표
  const [sheetDragStartY, setSheetDragStartY] = useState<number | null>(null); // sheet을 내리기 시작한 y좌표
  const [dragDistance, setDragDistance] = useState(0); // sheet을 내리기 위한 드래그 이동 거리
  const [isDragging, setIsDragging] = useState(false);

  // 드래그 시작
  const handleDragStart = (e: React.TouchEvent) => {
    console.log("드래그 시작");
    setStartY(e.touches[0].clientY); // 드래그를 시작한 y좌표 세팅
    setIsDragging(true);
  };

  // 드래그 중
  // 이게 드래그 중 계속 호출됨. 성능 무리 안가나?
  const handleDragMove = (e: React.TouchEvent) => {
    console.log("드래그 중");
    if (!isDragging) return;

    const currentY = e.touches[0].clientY; // 현재 드래그 y좌표
    const deltaY = currentY - startY; // 드래그 이동 거리

    // 드래그가 위에서 아래로 진행될 때 if문 진입(content를 위로 스크롤하거나, 바텀시트를 닫기 위한 드래그 액션)
    if (deltaY > 0) {
      // content의 최상단에 도달했을때 if문 진입
      if (contentRef.current && contentRef.current.scrollTop === 0) {
        if (sheetDragStartY === null) {
          setSheetDragStartY(currentY);
        }

        const sheetDeltaY = currentY - (sheetDragStartY ?? currentY);
        setDragDistance(sheetDeltaY);

        if (sheetRef.current) {
          sheetRef.current.style.transform = `translateY(${sheetDeltaY}px)`;
          // sheet을 드래그 거리만큼 실시간으로 움직임
        }
      }
    }
  };

  // 드래그 종료
  const handleDragEnd = () => {
    console.log("드래그 종료");
    setIsDragging(false);

    // 150px 이상 드래그하면 닫기
    if (dragDistance > 150) {
      onClose();
    } else {
      // 원위치로 복귀
      if (sheetRef.current) {
        sheetRef.current.style.transform = "translateY(0)";
      }
    }

    setDragDistance(0);
  };

  return {
    sheetRef,
    contentRef,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  };
};
