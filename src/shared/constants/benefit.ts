export const MEMBERSHIP_DATA = {
  description: "월 1,200원 멤버십 가입시 혜택가",
  price: 7111,
  unit: "원",
  badges: ["4,000원 쿠폰", "25% 할인"],
};

export const PAY_BENEFITS_DATA = [
  { id: 1, title: "토스 페이", desc: "4만원 이상 결제 시 1% 할인" },
  { id: 2, title: "Npay", desc: "기본 최대 할인\n 1%" },
] as const;
