import * as styles from "./product-info.css";
import { MakerInfo } from "@/shared/components/maker-info/maker-info";
import { Carousel } from "./components/carousel/carousel";
import { ProductMainInfo } from "./components/product-main-info/product-main-info";
import { ProductSummary } from "./components/product-summary/product-summary";

export const ProductInfo = () => {
  const data = {
    authorName: "SPEDEAR",
    productName: "[idus단독]음성을 전하는 카세트 앨범 음성 편지",
    originalPrice: 15000,
    discountRate: 26,
    discountedPrice: 11665,
    averageScore: 4.8,
    reviewCount: 634,
    salesCount: 4319,
  };
  return (
    <div className={styles.container}>
      {/** 캐러셀 */}
      <Carousel />
      {/** 작품 메인 정보 */}
      <ProductMainInfo data={data} />
      {/** 작품 요약 정보 */}
      <ProductSummary />
      {/** 작가 정보 */}
      <MakerInfo
        name="SPEDEAR"
        description="소중한 시간을 담을 수 있는 아이템입니다."
      />
    </div>
  );
};
