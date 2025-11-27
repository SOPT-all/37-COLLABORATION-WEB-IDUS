import * as styles from "./tab-bar.css";

interface TabBarProps {
  activeTab: "product-info" | "review" | "related";
  onTabClick: (_tab: "product-info" | "review" | "related") => void;
}

export const TabBar = ({ activeTab, onTabClick }: TabBarProps) => {
  const tabs = [
    { id: "product-info" as const, label: "작품 정보" },
    { id: "review" as const, label: "후기 10" },
    { id: "related" as const, label: "추천" },
  ];

  return (
    <div className={styles.tabBar}>
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          aria-selected={activeTab === id}
          className={styles.tab({ active: activeTab === id })}
          onClick={() => onTabClick(id)}>
          {label}
        </button>
      ))}
    </div>
  );
};
