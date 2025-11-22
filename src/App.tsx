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

  // 스크롤 시 현재 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + HEADER_HEIGHT + TAB_BAR_HEIGHT;

      const productInfoSectionTop = productInfoRef.current?.offsetTop ?? 0;
      const reviewSectionTop = reviewRef.current?.offsetTop ?? 0;
      const recommendSectionTop = recommendRef.current?.offsetTop ?? 0;

      if (scrollY >= recommendSectionTop) {
        setActiveTab("recommend");
      } else if (scrollY >= reviewSectionTop) {
        setActiveTab("review");
      } else if (scrollY >= productInfoSectionTop) {
        setActiveTab("product-info");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div ref={productInfoRef}>
        <Section1 />
      </div>

      <div ref={reviewRef}>
        <Section2 />
      </div>

      <div ref={recommendRef}>
        <Section3 />
      </div>
    </div>
  );
}

export default App;
