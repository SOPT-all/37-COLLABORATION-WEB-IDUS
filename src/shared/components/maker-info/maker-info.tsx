import * as styles from "./maker-info.css";
import { ChevronRightSharp } from "@/assets/svg";
import MakerProfileImage from "@/assets/img/maker-profile.png";
import { LikeButton } from "../like-button/like-button";

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
      <LikeButton variant="maker" liked={true} count={9999} />
    </div>
  );
}
