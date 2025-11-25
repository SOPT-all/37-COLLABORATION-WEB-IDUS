import { MakerAccordion } from "@/shared/components/accordian/maker-accordian";
import * as styles from "./product-info-notice.css";

interface AccordionItem {
  id: string;
  title: string;
  selectedOption?: string;
  iconType?: "arrow" | "chevron";
}

const mainInfoItems: AccordionItem[] = [
  { id: "basic", title: "작품 기본 정보" },
  {
    id: "delivery",
    title: "제작 / 배송",
    selectedOption: "평균 1일 / 최대 1일 이내",
  },
  { id: "refund", title: "교환 / 환불 / 반품" },
];

const reportItem: AccordionItem = {
  id: "report",
  title: "작품 제보하기",
  iconType: "arrow",
};

export const ProductInfoNotice = () => {
  return (
    <div className={styles.productInfo}>
      <h3 className={styles.productInfoTitle}>작품 정보 고시</h3>
      <div>
        {mainInfoItems.map((item) => (
          <MakerAccordion
            key={item.id}
            title={item.title}
            iconType={item.iconType}
            selectedOption={item.selectedOption}
          />
        ))}
      </div>
      <MakerAccordion
        key={reportItem.id}
        title={reportItem.title}
        iconType={reportItem.iconType}
      />
    </div>
  );
};
