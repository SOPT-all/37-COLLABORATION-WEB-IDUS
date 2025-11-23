import * as styles from "./maker-info.css";
import { ChevronRightSharp } from "@/assets/svg";
import MakerProfileImage from "@/assets/img/maker-profile.png";

interface MakerInfoProps {
  name: string;
  description: string;
  profileImage?: string;
}

export function MakerInfo({
  name,
  description,
  profileImage = MakerProfileImage,
}: MakerInfoProps) {
  return (
    <div className={styles.container}>
      <img
        src={profileImage}
        width={64}
        height={64}
        alt={`${name} 프로필 이미지`}
      />

      <div className={styles.infoArea}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{name}</span>
          <ChevronRightSharp />
        </div>

        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.heartIcon}>하트 아이콘 자리</div>
    </div>
  );
}
