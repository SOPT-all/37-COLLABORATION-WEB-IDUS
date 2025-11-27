import Product from "@/assets/img/product-02.png";

export const ProductSummaryData = [
  { title: "배송비", description: "아이디어스는 전 작품 무료 배송" },
  {
    title: "배송정보",
    description: "내일 10/30(목) 출발 예정",
    badges: ["출발 배송일 지정 가능"],
  },
  {
    title: "포장 안내",
    description: "선물 포장이 가능한 작품이에요.",
    image: Product,
  },
  {
    title: "작품 특징",
    description: "환경을 생각하는 작품이에요",
  },
  {
    title: "수량",
    description: "주문 시 제작",
  },
] as const;
