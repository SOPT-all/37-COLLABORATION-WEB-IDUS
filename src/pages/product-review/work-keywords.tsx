import type { JSX } from "react";
import * as styles from "./work-keywords.css";

export interface WorkKeyword {
  id: string;
  label: string;
}

export interface WorkKeywordsProps {
  keywords: WorkKeyword[];
}
export function WorkKeywords({ keywords }: WorkKeywordsProps): JSX.Element {
  return (
    <ul className={styles.keywordsRoot}>
      {keywords.map(({ id, label }) => (
        <li key={id} className={styles.keywordsChip} title={label}>
          {label}
        </li>
      ))}
    </ul>
  );
}
