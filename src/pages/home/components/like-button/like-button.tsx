import * as styles from "./like-button.css";

interface LikeButtonProps {
  type: "bottom-sheets" | "maker";
  onClick?: () => void;
}

export const LikeButton = ({ type }: LikeButtonProps) => {
  return (
    <div className={styles.container({ type })}>
      <span className={styles.icon}>♡</span>
      <span className={styles.text}>9999</span>
    </div>
  );
};
