import { ArrowRight } from "@/assets/svg";
import * as styles from "./purchase.css";
import { BaseAccordion } from "@/shared/components/accordian/base-accordion";
import TitleOption from "@/pages/purchase/components/title-option";
import { useState } from "react";

const TITLE_OPTIONS = [
  {
    id: "album-only",
    title: "앨범 제목만",
    fields: [{ label: "앨범 제목", placeholder: "앨범 제목을 입력해주세요" }],
  },
  {
    id: "title-message",
    title: "제목 + 메시지",
    fields: [
      { label: "앨범 제목", placeholder: "앨범 제목을 입력해주세요" },
      { label: "메시지 추가", placeholder: "메시지를 입력해주세요" },
    ],
  },
];

const CUSTOM_OPTIONS = [
  {
    id: 1,
    title: "재생 시간 선택",
    defaultOption: "기본 60초",
  },
  {
    id: 2,
    title: "카세트 외관",
    defaultOption: "핑크",
  },
  {
    id: 3,
    title: "표지 외관",
    defaultOption: "핑크",
  },
  {
    id: 4,
    title: "제목 설정",
    defaultOption: "앨범 제목만",
  },
  {
    id: 5,
    title: "제품 포장",
    defaultOption: "기본 60초",
  },
];

const Purchase = () => {
  // 각 TitleOption 그룹에서 선택된 옵션 ID를 저장
  const [selectedTitleOptionId, setSelectedTitleOptionId] = useState<
    string | null
  >(null);
  // 각 CUSTOM_OPTIONS에서 선택된 값을 저장
  const [selectedOptions, setSelectedOptions] = useState<
    Record<number, string>
  >({});

  const handleTitleOptionSelect = (
    optionId: number,
    titleOptionId: string,
    titleOptionTitle: string
  ) => {
    // 같은 옵션을 다시 클릭하면 닫기
    if (selectedTitleOptionId === titleOptionId) {
      setSelectedTitleOptionId(null);
    } else {
      setSelectedTitleOptionId(titleOptionId);
      setSelectedOptions((prev) => ({
        ...prev,
        [optionId]: titleOptionTitle,
      }));
    }
  };

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
            isExpandable={option.id === 4}
            renderBottomSheetOption={() => (
              <div>
                <span className={styles.optionType}>선택 |</span>
                <span className={styles.optionDetail}>
                  {selectedOptions[option.id] ?? option.defaultOption}
                </span>
              </div>
            )}>
            <div className={styles.customListDetailContainer}>
              {TITLE_OPTIONS.map((titleOption) => (
                <TitleOption
                  key={titleOption.id}
                  title={titleOption.title}
                  fields={titleOption.fields}
                  isExpanded={selectedTitleOptionId === titleOption.id}
                  onSelect={() =>
                    handleTitleOptionSelect(
                      option.id,
                      titleOption.id,
                      titleOption.title
                    )
                  }
                />
              ))}
            </div>
          </BaseAccordion>
        ))}
      </div>
    </section>
  );
};

export default Purchase;
