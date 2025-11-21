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

// 두 좋아요 버튼의 다른 점
// 1. 전체 너비 ✅
// 2. 클릭 시 호출되는 api -> 부모에서 정의
// 3. 클릭 시 변경되는 svg 파일 -> svg 설정 pr이 어푸 돼야 함!! ✅

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
      {type == "maker" ? (
        <span>{liked ? <MakerHeartFill /> : <MakerHeart />}</span>
      ) : (
        <span>{liked ? <BottomSheetHeartFill /> : <BottomSheetHeart />}</span>
      )}
      <span className={styles.count}>{count}</span>
    </button>
  );
};
