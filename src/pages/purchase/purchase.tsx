import { ArrowRight } from "@/assets/svg";
import * as styles from "./purchase.css";
import { BaseAccordion } from "@/shared/components/accordian/base-accordion";
import TitleOption from "@/pages/purchase/components/title-option";

const CUSTOM_OPTIONS = [
  {
    id: 1,
    title: "재생 시간 선택",
    selectedOption: "기본 60초",
  },
  {
    id: 2,
    title: "카세트 외관",
    selectedOption: "핑크",
  },
  {
    id: 3,
    title: "표지 외관",
    selectedOption: "핑크",
  },
  {
    id: 4,
    title: "제목 설정",
    selectedOption: "앨범 제목만",
  },
  {
    id: 5,
    title: "제품 포장",
    selectedOption: "기본 60초",
  },
];

const Purchase = () => {
  return (
    <section className={styles.container}>
      {/* 배송 출발일 지정 컴포넌트(별도구현) */}
      <div className={styles.deliverDateContainer}>
        <div className={styles.designateContainer}>
          <p className={styles.designateText}>배송출발일 지정하기</p>
          <ArrowRight />
        </div>

        <div>
          <span className={styles.deliverDate}>11월 30일</span>
          <span className={styles.deliverInfo}>이 가장 빠른 배송일이에요.</span>
        </div>
      </div>

      {/* 커스텀 리스트 */}
      <div className={styles.customListContainer}>
        {CUSTOM_OPTIONS.map((option) => (
          <BaseAccordion
            key={option.id}
            title={option.title}
            styleType="bottom-sheets"
            renderBottomSheetOption={() => (
              <div>
                <span className={styles.optionType}>선택 |</span>
                <span className={styles.optionDetail}>
                  {option.selectedOption}
                </span>
              </div>
            )}>
            {
              <div className={styles.customListDetailContainer}>
                <TitleOption
                  title="앨범 제목만"
                  label="앨범 제목"
                  placeholder="앨범 제목을 입력해주세요"
                />
                <TitleOption
                  title="제목 + 메시지"
                  label="앨범 제목"
                  placeholder="앨범 제목을 입력해주세요"
                />
              </div>
            }
          </BaseAccordion>
        ))}
      </div>
    </section>
  );
};

export default Purchase;
