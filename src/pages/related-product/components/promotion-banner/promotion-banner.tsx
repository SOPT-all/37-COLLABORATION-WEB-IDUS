import * as styles from "./promotion-banner.css";
import PromotionBannerImage from "@/assets/img/promotion-banner.png";
import { promotionBanners } from "../../constants/promotion-banner.mock";

export const PromotionBanner = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>이 작품과 연결된 기획전</h2>
      {/* 배너 가로 스크롤*/}
      <div className={styles.scrollContainer}>
        {promotionBanners.map(({ id }) => (
          <div key={id} className={styles.bannerCard}>
            <img
              src={PromotionBannerImage}
              alt="부담 제로! 5천원 마켓 기획전 배너 이미지"
              className={styles.bannerImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
