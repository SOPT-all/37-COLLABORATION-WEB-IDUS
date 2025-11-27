import * as styles from "./product-summary-item.css";

interface ProductSummaryItemProps {
  summary: {
    title: string;
    description: string;
    badges?: readonly string[];
    image?: string;
  };
}

export const ProductSummaryItem = ({ summary }: ProductSummaryItemProps) => {
  return (
    <div className={styles.container}>
      {/** 상품 요약 정보 각 항목의 제목 */}
      <div className={styles.text({ type: "title" })}>{summary.title}</div>
      {/** 상품 요약 정보 각 항목의 세부 항목 (설명 - 필수 / 뱃지,이미지 - 선택)*/}
      <div className={styles.information}>
        <div className={styles.text({ type: "description" })}>
          {summary.description}
        </div>
        {summary.badges && (
          <div className={styles.badgeContainer}>
            {summary.badges.map((badge) => (
              <div key={badge} className={styles.badge}>
                {badge}
              </div>
            ))}
          </div>
        )}
        {summary.image && (
          <img
            className={styles.image}
            src={summary.image}
            alt="상품 세부 이미지"
          />
        )}
      </div>
    </div>
  );
};
