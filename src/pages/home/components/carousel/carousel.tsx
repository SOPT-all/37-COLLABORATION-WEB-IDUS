import { useRef, useState } from "react";
import { CAROUSEL_IMAGES } from "../../constants/carousel/carousel-images";
import * as styles from "./carousel.css";
import { addComma } from "@/shared/utils/add-comma";
import { Banner, Logo } from "@/assets/svg";
import { useCarouselLayout } from "../../hooks/use-carousel-layout";
import { useDragCarousel } from "../../hooks/use-drag-carousel";
import { useAutoCarousel } from "../../hooks/use-auto-carousel";

export const Carousel = () => {
  const [discountedPrice] = useState(2205); // (임시) 할인가 가격
  const carouselRef = useRef<HTMLDivElement>(null); // 캐러셀 트랙
  const EXTENDED_IMAGES = [
    CAROUSEL_IMAGES[CAROUSEL_IMAGES.length - 1],
    ...CAROUSEL_IMAGES,
    CAROUSEL_IMAGES[0],
  ]; // 무한 스크롤 이미지 배열

  // 1. 자동 재생 및 이미지 인덱스 상태 관리
  const autoPlay = useAutoCarousel({
    carouselRef,
    totalImages: CAROUSEL_IMAGES.length,
  });
  // 2. 사용자 드래그 이벤트 핸들링
  const drag = useDragCarousel({
    onSwipeNext: autoPlay.handleMoveToNext,
    onSwipePrev: autoPlay.handleMoveToPrev,
    onDragStart: () => {
      autoPlay.setIsAuto(false);
      autoPlay.setIsMoving(false);
    },
    onDragEnd: () => {
      autoPlay.setIsMoving(false);
      autoPlay.setIsAuto(true);
    },
  });

  // 3. 캐러셀 스타일 업데이트
  useCarouselLayout({
    carouselRef,
    currentCarouselIndex: autoPlay.currentCarouselIndex,
    isMoving: autoPlay.isMoving,
    isDragging: drag.isDragging,
    draggedX: drag.draggedX,
  });

  return (
    <div className={styles.container}>
      {/** 캐러셀 헤더 */}
      <div className={styles.header}>
        <Banner />
      </div>
      {/** 캐러셀 컴포넌트 */}
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          ref={carouselRef}
          {...drag.dragHandlers}>
          {EXTENDED_IMAGES.map((image, index) => (
            <img
              draggable={false}
              className={styles.image}
              key={`${image.id}-${index}`}
              src={image.image}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
      {/** 캐러셀 푸터 (이미지 번호, 뱃지) */}
      <div className={styles.footer}>
        <div className={styles.index}>
          <span>{autoPlay.displayIndex}</span>
          <span>/</span>
          <span>{CAROUSEL_IMAGES.length}</span>
        </div>
        <div className={styles.badge}>
          <Logo />
          <span>{addComma(String(discountedPrice))}원 할인 종료</span>
          <span className={styles.period}>D-2</span>
        </div>
      </div>
    </div>
  );
};
