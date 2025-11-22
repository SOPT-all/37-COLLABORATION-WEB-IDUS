import {
  BottomSheetHeart,
  BottomSheetHeartFill,
  MakerHeart,
  MakerHeartFill,
} from "@/assets/svg";
import * as styles from "./like-button.css";

interface LikeButtonProps {
  type: "bottom-sheets" | "maker";
  liked: boolean;
  count: number;
  onClick?: () => void;
}

export const LikeButton = ({
  type,
  liked,
  count,
  onClick,
}: LikeButtonProps) => {
  return (
    <button
      type="button"
      className={styles.container({ type })}
      onClick={onClick}>
      <span className={styles.iconWrapper}>
        {type == "maker" ? (
          liked ? (
            <MakerHeartFill />
          ) : (
            <MakerHeart />
          )
        ) : liked ? (
          <BottomSheetHeartFill />
        ) : (
          <BottomSheetHeart />
        )}
      </span>
      <span className={styles.count}>{count}</span>
    </button>
  );
};
