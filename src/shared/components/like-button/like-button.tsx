import type React from "react";
import * as styles from "./like-button.css";
import {
  BottomSheetHeart,
  BottomSheetHeartFill,
  MakerHeart,
  MakerHeartFill,
} from "@/assets/svg";

interface LikeButtonProps extends React.ComponentProps<"button"> {
  variant: "bottom-sheets" | "maker";
  liked: boolean;
  count: number;
}

export const LikeButton = ({
  variant,
  liked,
  count,
  ...buttonProps
}: LikeButtonProps) => {
  const heartIcons = {
    maker: liked ? <MakerHeartFill /> : <MakerHeart />,
    "bottom-sheets": liked ? <BottomSheetHeartFill /> : <BottomSheetHeart />,
  };

  return (
    <button
      type="button"
      aria-pressed={liked}
      className={styles.container({ variant })}
      {...buttonProps}>
      <span className={styles.iconWrapper}>{heartIcons[variant]}</span>
      <span className={styles.count}>{count}</span>
    </button>
  );
};
