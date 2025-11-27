import { Suspense } from "react";
import * as styles from "./product-info.css";
import { MakerInfo } from "@/shared/components/maker-info/maker-info";
import { Carousel } from "./components/carousel/carousel";
import { ProductMainInfo } from "./components/product-main-info/product-main-info";
import { ProductSummary } from "./components/product-summary/product-summary";
import { useProductInfo } from "@/apis/queries/use-product-info.query";
import { useAuthorInfoQuery } from "@/apis/queries/use-author-info.query";

export const ProductInfo = () => {
  const data = {
    authorName: "SPEDEAR",
    productName: "[idus단독]음성을 전하는 카세트 앨범 음성 편지",
    originalPrice: 15000,
    discountRate: 26,
    discountedPrice: 11665,
    averageScore: 4.8,
    reviewCount: 10,
    salesCount: 4319,
  };
  const { data: productInfo } = useProductInfo({ userId: 1, productId: 1 });

  const authorId = 1;
  const userId = 1;

  const AuthorInfoContent = () => {
    const { data: author } = useAuthorInfoQuery(authorId, userId);

    return (
      <MakerInfo
        name={author?.name ?? data.authorName}
        description={author?.description ?? "작가 정보를 불러오는 중입니다."}
        profileImage={author?.imageUrl}
        liked={author?.isLiked}
        likeCount={author?.likeCount}
      />
    );
  };
  return (
    <div className={styles.container}>
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
      <Suspense
        fallback={
          <MakerInfo
            name={data.authorName}
            description="작가 정보를 불러오는 중입니다."
            profileImage={undefined}
          />
        }>
        <AuthorInfoContent />
      </Suspense>
    </div>
  );
};
