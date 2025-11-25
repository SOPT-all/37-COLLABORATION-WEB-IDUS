import * as styles from "./content.css";
interface ContentProps {
  type: string;
}
export const Content = ({ type }: ContentProps) => {
  return <div className={styles.content}>{type}</div>;
};
