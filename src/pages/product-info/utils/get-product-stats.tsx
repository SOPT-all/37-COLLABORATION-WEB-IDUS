import type { ReactNode } from "react";
import { Star } from "@/assets/svg";
import { addComma } from "@/shared/utils/add-comma";
import type { ProductMainInfoProps as ProductData } from "../components/product-main-info/product-main-info";

interface StatItem {
  label: string | ReactNode;
  value: string | number;
  color: "black-200" | "gray-100";
}

// 별점, 후기, 구매 수 동적 데이터 반환
export const getProductStatsList = (data: ProductData): StatItem[] => {
  return [
    {
      label: <Star />,
      value: data.averageScore,
      color: "black-200",
    },
    {
      label: "후기",
      value: addComma(String(data.reviewCount)),
      color: "gray-100",
    },
    {
      label: "구매",
      value: addComma(String(data.salesCount)),
      color: "gray-100",
    },
  ];
};
