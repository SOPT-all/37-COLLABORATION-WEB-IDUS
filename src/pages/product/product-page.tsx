import { lazy } from "react";
import LazySection from "@/shared/components/lazy-section/lazy-section";

import LoadingFallback from "@/shared/components/layout/loading-fallback";
import { TabBar } from "@/shared/components/tab-bar/tab-bar";
import { useScrollableTabs } from "@/shared/hooks/useScrollableTabs";
import { ProductInfo } from "../product-info/product-info";

// Code splitting: 각 컴포넌트를 별도 chunk로 분리
const ProductDetail = lazy(
  () => import("@/pages/product-detail/product-detail")
);
const ProductReview = lazy(() => import("./components/product-review"));
const RelatedProduct = lazy(() => import("./components/related-product"));

const ProductPage = () => {
  const { productInfoRef, reviewRef, relatedRef, activeTab, handleTabClick } =
    useScrollableTabs();
  return (
    <div>
      {/* ProductInfo는 첫 진입 시 바로 로드 */}
      <ProductInfo />

      {/* 나머지 컴포넌트들은 스크롤해서 화면에 보이면 로드 */}

      <TabBar activeTab={activeTab} onTabClick={handleTabClick} />

      <div ref={productInfoRef} data-section="product-info">
        <LazySection fallback={<LoadingFallback />}>
          <ProductDetail />
        </LazySection>
      </div>

      <div ref={reviewRef} data-section="review">
        <LazySection fallback={<LoadingFallback />}>
          <ProductReview />
        </LazySection>
      </div>

      <div ref={relatedRef} data-section="related">
        <LazySection fallback={<LoadingFallback />}>
          <RelatedProduct />
        </LazySection>
      </div>
    </div>
  );
};

export default ProductPage;
