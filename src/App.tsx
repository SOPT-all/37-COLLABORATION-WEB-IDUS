import { useRef, useState, useEffect } from "react";
import * as styles from "./test.css";

import { Header } from "./shared/components/header";
import { Content } from "./shared/components/content";
import Section1 from "./shared/components/section1";
import Section2 from "./shared/components/section2";
import Section3 from "./shared/components/section3";
import { TabBar } from "./shared/components/tab-bar/tab-bar";

const HEADER_HEIGHT = 56;
const TAB_BAR_HEIGHT = 46;

function App() {
  const productInfoRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const recommendRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<
    "product-info" | "review" | "recommend"
  >("product-info");

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
          const sectionId = entry.target.getAttribute("data-section") as
            | "product-info"
            | "review"
            | "recommend";
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
    const sectionRefMap = {
      "product-info": productInfoRef,
      review: reviewRef,
      recommend: recommendRef,
    };

    const targetSectionRef = sectionRefMap[tab];

    if (targetSectionRef.current) {
      const offsetTop =
        targetSectionRef.current.offsetTop - HEADER_HEIGHT - TAB_BAR_HEIGHT;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.test}>
      <Header />

      {/* 내용들 - 탭바 위에 있을 캐러셀 부분 ㅎㅎ */}
      {[...Array(20)].map((_, i) => (
        <Content key={i} type="내용" />
      ))}

      {/* 탭바 - sticky로 헤더에 닿으면!! 고정 */}
      <TabBar activeTab={activeTab} onTabClick={handleTabClick} />

      {/* 작품 정보, 후기, 추천 섹션들 - 탭바 아래 */}
      <div ref={productInfoRef} data-section="product-info">
        <Section1 />
      </div>

      <div ref={reviewRef} data-section="review">
        <Section2 />
      </div>

      <div ref={recommendRef} data-section="recommend">
        <Section3 />
      </div>
    </div>
  );
}

export default App;
