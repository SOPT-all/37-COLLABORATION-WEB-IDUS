import { LikeButton } from "@/shared/components/like-button/like-button";
import * as styles from "./footer.css";
import { useState } from "react";
import SmallButton from "@/shared/components/button/small-button/small-button";
import { SMALL_BUTTON_VARIANTS } from "@/shared/constants/button";
import BottomSheet from "@/shared/components/bottom-sheet/bottom-sheet";
import useBottomSheet from "@/shared/components/bottom-sheet/hooks/use-bottom-sheet";
import FooterDetail from "@/shared/components/footer-detail/footer-detail";
import Purchase from "@/pages/purchase/purchase";

const Footer = () => {
  const [isProductLiked, setIsProductLiked] = useState(false);
  const { isOpen, open, close } = useBottomSheet();

  // 좋아요 로직은 추후 Footer에서 분리 예정
  const handleProductLike = () => {
    // 임시
    setIsProductLiked((prev) => !prev);
  };

  return (
    <footer className={styles.layout}>
      <div className={styles.wrapper}>
        <FooterDetail />

        <div className={styles.container}>
          <LikeButton
            variant="bottom-sheets"
            liked={isProductLiked}
            count={0}
            onClick={handleProductLike}
          />

          <div className={styles.buttonContainer}>
            <SmallButton
              variant={SMALL_BUTTON_VARIANTS.GIFT}
              type="button"
              aria-label="선물하기">
              선물하기
            </SmallButton>

            <SmallButton
              variant={SMALL_BUTTON_VARIANTS.PURCHASE}
              onClick={open}
              type="button"
              aria-label="구매하기">
              구매하기
            </SmallButton>
          </div>
        </div>
      </div>

      <BottomSheet isOpen={isOpen} onClose={close}>
        <FooterDetail />
        <Purchase />
      </BottomSheet>
    </footer>
  );
};

export default Footer;
