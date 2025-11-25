import { useEffect, useRef, useState, type RefObject } from "react";

const HEADER_HEIGHT = 56;
const TAB_BAR_HEIGHT = 46;

export type TabType = "product-info" | "review" | "recommend";

export function useScrollableTabs() {
  const productInfoRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const recommendRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<TabType>("product-info");

  // IntersectionObserver로 현재 섹션 감지
  useEffect(() => {
    const observerOptions = {
      // 섹션이 화면의 중앙 즈음에 올 때
      rootMargin: `-${window.innerHeight / 2}px 0px -${window.innerHeight / 2}px 0px`,
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute(
            "data-section"
          ) as TabType;
          if (sectionId) {
            setActiveTab(sectionId);
          }
        }
      });
    };

    const sectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // 각 섹션 관찰 시작
    if (productInfoRef.current) sectionObserver.observe(productInfoRef.current);
    if (reviewRef.current) sectionObserver.observe(reviewRef.current);
    if (recommendRef.current) sectionObserver.observe(recommendRef.current);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  // 탭 클릭 시 해당 섹션으로 스크롤
  const handleTabClick = (tab: "product-info" | "review" | "recommend") => {
    const sectionRefMap: Record<TabType, RefObject<HTMLDivElement | null>> = {
      "product-info": productInfoRef,
      review: reviewRef,
      recommend: recommendRef,
    };

    const targetRef = sectionRefMap[tab];

    if (targetRef.current) {
      const offsetTop =
        targetRef.current.offsetTop - HEADER_HEIGHT - TAB_BAR_HEIGHT;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return {
    productInfoRef,
    reviewRef,
    recommendRef,
    activeTab,
    handleTabClick,
  };
}
