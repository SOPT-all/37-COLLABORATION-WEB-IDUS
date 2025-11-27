import Product01 from "@/assets/img/product-01.png";

export const DUMMY_AVERAGE_SCORE = 4.8;
export const DUMMY_REVIEW_COUNT = 10;
export const DUMMY_THUMBNAILS: { reviewId: number; imageUrl: string }[] =
  Array.from({ length: 6 }, (_, index) => ({
    reviewId: index + 1,
    imageUrl: Product01,
  }));

export const DUMMY_AI_SUMMARY =
  "작가님의 작품은 정말 특별하고신선해요! 포장도 꼼꼼하고 배송도 빠르네요. 친구나 소중한 분께 선물하기에 딱 좋습니다. 정성스럽게 만들어주셔서 감사합니다!";
