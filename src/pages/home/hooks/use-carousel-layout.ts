import { useEffect, type RefObject } from "react";

interface carouselLayoutProps {
  carouselRef: RefObject<HTMLDivElement | null>;
  currentCarouselIndex: number;
  isMoving: boolean;
  isDragging: boolean;
  draggedX: number;
}

/**
 * @description 캐러셀 컴포넌트 UI 업데이트 훅
 */
export const useCarouselLayout = ({
  carouselRef,
  currentCarouselIndex,
  isMoving,
  isDragging,
  draggedX,
}: carouselLayoutProps) => {
  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;

    if (isDragging) {
      // 드래그 중이면, 애니메이션 종료하고 추가 계산된 값만큼 이동
      track.style.transition = "none";
      track.style.transform = `translateX(calc(-${currentCarouselIndex * 100}% + ${draggedX}px))`;
    } else {
      // 드래그 중이 아니고,
      // 트랜지션이 이미 진행 중이라면, 'none'으로 설정하여 중복 애니메이션을 제거
      track.style.transition = isMoving ? "transform 0.5s ease-in-out" : "none";
      track.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
    }
  }, [currentCarouselIndex, isMoving, isDragging, draggedX, carouselRef]);
};
