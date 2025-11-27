import { MembershipBenefit } from "@/shared/components/benefit/membership-benefit";
import * as styles from "./product-main-info.css";
import { addComma } from "@/shared/utils/add-comma";
import { MEMBERSHIP_DATA, PAY_BENEFITS_DATA } from "@/shared/constants/benefit";
import { PayBenefit } from "@/shared/components/benefit/pay-benefit";
import { MoreBenefit } from "@/shared/components/benefit/more-benefit";
import { ChevronRightRounded, Share } from "@/assets/svg";
import { Text } from "../text/text";
import { getProductStatsList } from "../../utils/get-product-stats";
export interface ProductMainInfoProps {
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
  const statsList = getProductStatsList(data); // 제품 부가정보 데이터 포맷팅 함수

  return (
    <div className={styles.container}>
      {/** 제품 메인 정보 */}
      <div className={styles.mainInfo}>
        <div className={styles.flexRow}>
          <Text type="caption" color="gray-100">
            {data.authorName}
          </Text>
          <ChevronRightRounded />
        </div>
        <Text type="subTitle" color="black-100">
          {data.productName}
        </Text>
      </div>

      {/** 제품 가격 정보 */}
      <div className={styles.priceInfo}>
        <Text className={styles.originalPrice} type="caption" color="gray-100">
          {addComma(String(data.originalPrice))}원
        </Text>
        <div className={styles.flexRow}>
          <Text
            className={styles.discountRate}
            type="subTitle"
            color="gray-300">
            {data.discountRate}%
          </Text>
          <div className={styles.flexRow}>
            <Text
              className={styles.discountedPrice}
              type="heading"
              color="black-100">
              {addComma(String(data.discountedPrice))}
            </Text>
            <Text type="body" color="black-100">
              원
            </Text>
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
        <div className={styles.flexRow}>
          {statsList.map((stat, index) => (
            <div key={index} className={styles.extraInfoItem}>
              {typeof stat.label === "string" ? (
                <Text type="caption" color="gray-300">
                  {stat.label}
                </Text>
              ) : (
                stat.label
              )}
              <Text type="caption" color={stat.color}>
                {stat.value}
              </Text>
            </div>
          ))}
        </div>
        <button type="button" aria-label="공유하기">
          <Share />
        </button>
      </div>
    </div>
  );
};
