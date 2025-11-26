import { MembershipBenefit } from "@/shared/components/benefit/membership-benefit";
import * as styles from "./product-main-info.css";
import { addComma } from "@/shared/utils/add-comma";
import { MEMBERSHIP_DATA, PAY_BENEFITS_DATA } from "@/shared/constants/benefit";
import { PayBenefit } from "@/shared/components/benefit/pay-benefit";
import { MoreBenefit } from "@/shared/components/benefit/more-benefit";
import { ChevronRightRounded, Share, Star } from "@/assets/svg";
interface ProductMainInfoProps {
  authorName: string;
  productName: string;
  originalPrice: number;
  discountRate: number;
  discountedPrice: number;
  averageScore: number;
  reviewCount: number;
  salesCount: number;
}

export const ProductMainInfo = ({ data }: { data: ProductMainInfoProps }) => {
  return (
    <div className={styles.container}>
      {/** 제품 메인 정보 */}
      <div className={styles.mainInfo}>
        {/** 제품 타이틀 */}
        <div className={styles.align}>
          <span className={styles.text({ type: "caption", color: "gray-100" })}>
            {data.authorName}
          </span>
          <ChevronRightRounded />
        </div>
        <div className={styles.text({ type: "subTitle", color: "black-100" })}>
          {data.productName}
        </div>
      </div>
      {/** 제품 가격 정보 */}
      <div className={styles.priceInfo}>
        {/** 원가 */}
        <div
          className={`${styles.originalPrice} ${styles.text({ type: "caption", color: "gray-100" })}`}>
          {addComma(String(data.originalPrice))}원
        </div>
        {/** 할인가 적용 */}
        <div className={styles.align}>
          <span
            className={`${styles.discountRate} ${styles.text({ type: "subTitle", color: "gray-300" })}`}>
            {data.discountRate}%
          </span>
          <div className={styles.align}>
            <span
              className={`${styles.discountedPrice} ${styles.text({ type: "heading", color: "black-100" })}`}>
              {addComma(String(data.discountedPrice))}
            </span>
            <span className={styles.text({ type: "body", color: "black-100" })}>
              원
            </span>
          </div>
        </div>
      </div>

      {/** 제품 혜택가 정보 */}
      <div className={styles.benefitInfo}>
        <MembershipBenefit
          description={MEMBERSHIP_DATA.description}
          price={MEMBERSHIP_DATA.price}
          unit={MEMBERSHIP_DATA.unit}
          badges={MEMBERSHIP_DATA.badges}
        />
        {PAY_BENEFITS_DATA.map((benefit) => (
          <PayBenefit
            key={benefit.id}
            title={benefit.title}
            description={benefit.desc}
          />
        ))}
        <MoreBenefit />
      </div>

      {/** 제품 부가 정보 */}
      <div className={styles.extraInfo}>
        <div className={styles.extraInfoDetail}>
          <div className={styles.extraInfoItem}>
            <Star />
            <span
              className={styles.text({ type: "caption", color: "black-200" })}>
              {data.averageScore}
            </span>
          </div>
          <div
            className={`${styles.extraInfoItem} ${styles.text({ type: "caption" })}`}>
            <span className={styles.text({ color: "gray-300" })}>후기</span>
            <span className={styles.text({ color: "gray-100" })}>
              {addComma(String(data.reviewCount))}
            </span>
          </div>
          <div
            className={`${styles.extraInfoItem} ${styles.text({ type: "caption" })}`}>
            <span className={styles.text({ color: "gray-300" })}>구매</span>
            <span className={styles.text({ color: "gray-100" })}>
              {addComma(String(data.salesCount))}
            </span>
          </div>
        </div>
        <Share />
      </div>
    </div>
  );
};
