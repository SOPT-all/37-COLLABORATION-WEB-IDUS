import { lazy } from "react";
import LazySection from "@/shared/components/lazy-section/LazySection";
import ProductInfo from "./components/ProductInfo";

// Code splitting: 각 컴포넌트를 별도 chunk로 분리
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const ProductReview = lazy(() => import("./components/ProductReview"));
const RelatedProduct = lazy(() => import("./components/RelatedProduct"));

const ProductPage = () => {
  return (
    <div>
      {/* ProductInfo는 첫 진입 시 바로 로드 */}
      <ProductInfo />

      {/* 나머지 컴포넌트들은 스크롤해서 화면에 보이면 로드 */}
      <LazySection
        fallback={<div style={{ padding: "2rem" }}>상세정보 로딩 중...</div>}>
        <ProductDetail />
      </LazySection>

      <LazySection
        fallback={<div style={{ padding: "2rem" }}>후기 로딩 중...</div>}>
        <ProductReview />
      </LazySection>

      <LazySection
        fallback={<div style={{ padding: "2rem" }}>연관상품 로딩 중...</div>}>
        <RelatedProduct />
      </LazySection>
    </div>
  );
};

export default ProductPage;
