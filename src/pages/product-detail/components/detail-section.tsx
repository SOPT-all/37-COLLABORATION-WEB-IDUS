import * as styles from "../product-detail.css";
import { useState } from "react";
import LargeButton from "@/shared/components/button/large-button/large-button";
import { LARGE_BUTTON_VARIANTS } from "@/shared/constants/button";
import ProductDetailImage from "@/assets/img/product_detail.jpg";

export const DetailSection = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const largeButtonProps = {
    type: "button" as const,
    "aria-label": isDetailOpen ? "상세 정보 접기" : "상세 정보 더보기",
    hasArrow: true,
    variant: isDetailOpen
      ? LARGE_BUTTON_VARIANTS.ACTIVE
      : LARGE_BUTTON_VARIANTS.DEFAULT,
    onClick: () => setIsDetailOpen(!isDetailOpen),
  };
  return (
    <>
      <div
        className={
          isDetailOpen ? styles.imageWrapperOpen : styles.imageWrapperClosed
        }>
        <img src={ProductDetailImage} alt="작품 세부 이미지" />
      </div>

      <LargeButton {...largeButtonProps}>
        {isDetailOpen ? "상세 정보 접기" : "상세 정보 더보기"}
      </LargeButton>
    </>
  );
};
