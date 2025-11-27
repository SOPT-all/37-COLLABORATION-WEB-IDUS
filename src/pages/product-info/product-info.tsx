import { MakerInfo } from "@/shared/components/maker-info/maker-info";
import { Carousel } from "./components/carousel/carousel";
import { ProductMainInfo } from "./components/product-main-info/product-main-info";
import { ProductSummary } from "./components/product-summary/product-summary";
import { useProductInfo } from "@/apis/queries/use-product-info.query";

export const ProductInfo = () => {
  const { data: productInfo } = useProductInfo({ userId: 1, productId: 1 });
  return (
    <>
      {/** 캐러셀 */}
      <Carousel
        images={productInfo.imageUrls}
        price={productInfo.price}
        rate={productInfo.discountRate}
      />
      {/** 작품 메인 정보 */}
      <ProductMainInfo data={productInfo} />
      {/** 작품 요약 정보 */}
      <ProductSummary />
      {/** 작가 정보 */}
      <MakerInfo
        name="SPEDEAR"
        description="소중한 시간을 담을 수 있는 아이템입니다."
      />
    </>
  );
};
