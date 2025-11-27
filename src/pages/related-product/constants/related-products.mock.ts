import ProductImage from "@/assets/img/product-01.png";

interface RelatedProductItem {
  id: number;
  title: string;
  imageUrl: string;
  isAd: boolean;
  isBundleShipping: boolean;
}

export const relatedProducts: RelatedProductItem[] = [
  {
    id: 1,
    title: "[IDUS단독]음성을 전하는 카세트 앨범📻 음성 편지",
    imageUrl: ProductImage,
    isAd: true,
    isBundleShipping: false,
  },
  {
    id: 2,
    title: "[IDUS단독]음성을 전하는 카세트 앨범📻 음성 편지",
    imageUrl: ProductImage,
    isAd: false,
    isBundleShipping: true,
  },
  {
    id: 3,
    title: "[IDUS단독]음성을 전하는 카세트 앨범📻 음성 편지",
    imageUrl: ProductImage,
    isAd: false,
    isBundleShipping: false,
  },
];
