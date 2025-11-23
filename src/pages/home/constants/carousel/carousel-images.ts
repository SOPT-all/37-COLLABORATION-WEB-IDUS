import Product01 from "@/assets/img/product-01.png";
import Product02 from "@/assets/img/product-02.png";
import Product03 from "@/assets/img/product-03.png";
import Product04 from "@/assets/img/product-04.png";
import Product05 from "@/assets/img/product-05.png";
import Product06 from "@/assets/img/product-06.png";
import Product07 from "@/assets/img/product-07.png";
import Product08 from "@/assets/img/product-08.png";

interface CAROUSEL_IMAGE {
  id: string;
  image: string;
  alt: string;
}

export const CAROUSEL_IMAGES: CAROUSEL_IMAGE[] = [
  {
    id: "product-01",
    image: Product01,
    alt: "캐러셀 이미지1",
  },
  {
    id: "product-02",
    image: Product02,
    alt: "캐러셀 이미지2",
  },
  {
    id: "product-03",
    image: Product03,
    alt: "캐러셀 이미지3",
  },
  {
    id: "product-04",
    image: Product04,
    alt: "캐러셀 이미지4",
  },
  {
    id: "product-05",
    image: Product05,
    alt: "캐러셀 이미지5",
  },
  {
    id: "product-06",
    image: Product06,
    alt: "캐러셀 이미지6",
  },
  {
    id: "product-07",
    image: Product07,
    alt: "캐러셀 이미지7",
  },
  {
    id: "product-08",
    image: Product08,
    alt: "캐러셀 이미지8",
  },
] as const;
