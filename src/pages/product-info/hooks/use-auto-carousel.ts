import { useCallback, useEffect, useState, type RefObject } from "react";

interface autoCarouselProps {
  carouselRef: RefObject<HTMLDivElement | null>;
  totalImages: number;
}

/**
 * @description 캐러셀 자동 스크롤 및 무한 스크롤 로직을 관리하는 훅
 * @param carouselRef - 실제 캐러셀 트랙 참조 ref
 * @param totalImages - 실제 보여줄 총 이미지 개수 (복제 이미지 개수 제외) = 8개
 * @returns
 * - [isMoving, setIsMoving]: 현재 캐러셀이 움직이고 있는지 여부
 * - [isAuto,setIsMoving]: 자동 스크롤 활성화 여부
 * - currentCarouselIndex: 현재 보여지는 이미지 인덱스
 * - displayIndex : 실제 화면에 띄울 이미지 인덱스 번호 (화면 하단)
 * - handleMoveToPrev/Next: 다음/이전으로 이동시키는 함수
 */
export const useAutoCarousel = ({
  carouselRef,
  totalImages,
}: autoCarouselProps) => {
  const [isMoving, setIsMoving] = useState(false); // 현재 캐러셀이 움직이고 있는지 여부
  const [isAuto, setIsAuto] = useState(true); // 자동 스크롤 활성화(ON/OFF) 상태
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(1); // 현재 이미지 인덱스
  const displayIndex =
    currentCarouselIndex === totalImages + 1
      ? 1
      : currentCarouselIndex === 0
        ? totalImages
        : currentCarouselIndex; // 실제 보여질 이미지 인덱스 번호(화면 하단)

  // 보여지는 이미지 변경 (캐러셀 스크롤) - 오른쪽 스크롤
  const handleMoveToNext = useCallback(() => {
    if (isMoving) return;
    setIsAuto(true);
    setIsMoving(true);
    setCurrentCarouselIndex((prev) => prev + 1);
  }, [isMoving]);

  // 보여지는 이미지 변경 (캐러셀 스크롤) - 왼쪽 스크롤
  const handleMoveToPrev = useCallback(() => {
    if (isMoving) return;
    setIsAuto(true);
    setIsMoving(true);
    setCurrentCarouselIndex((prev) => prev - 1);
  }, [isMoving]);

  // 자동 스크롤 훅 (2초마다 자동 스크롤 됨)
  useEffect(() => {
    if (!isAuto) return;
    const interval = setInterval(() => {
      handleMoveToNext();
    }, 2000);
    return () => clearInterval(interval);
  });

  // 무한 스크롤 트릭 훅
  useEffect(() => {
    const track = carouselRef?.current;
    if (!track) return;

    const handleTranslateToEnd = () => {
      setIsMoving(false);
      // 맨 앞 이미지(마지막 이미지의 복제본)에 도착하면 실제 마지막 이미지로 이동
      if (currentCarouselIndex === 0) {
        setCurrentCarouselIndex(totalImages);
      } // 맨 뒤 이미지(첫 번째 이미지의 복제본)에 도착하면 실제 첫 번째 이미지로 이동
      else if (currentCarouselIndex === totalImages + 1) {
        setCurrentCarouselIndex(1);
      }
    };

    track.addEventListener("transitionend", handleTranslateToEnd);
    return () =>
      track.removeEventListener("transitionend", handleTranslateToEnd);
  }, [carouselRef, totalImages, currentCarouselIndex]);

  return {
    isMoving,
    isAuto,
    setIsMoving,
    setIsAuto,
    currentCarouselIndex,
    displayIndex,
    handleMoveToNext,
    handleMoveToPrev,
  };
};
