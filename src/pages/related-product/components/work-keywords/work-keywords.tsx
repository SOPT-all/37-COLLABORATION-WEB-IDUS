import * as styles from "./work-keywords.css";

export interface WorkKeyword {
  id: string;
  label: string;
}

export interface WorkKeywordsProps {
  keywords: WorkKeyword[];
}

export function WorkKeywords({ keywords }: WorkKeywordsProps) {
  return (
    <section className={styles.keywordsSection}>
      <h3 className={styles.keywordsTitle}>작품 키워드</h3>
      <ul className={styles.keywordsRoot}>
        {keywords.map(({ id, label }) => (
          <li key={id} className={styles.keywordsChip} title={label}>
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkKeywords;
