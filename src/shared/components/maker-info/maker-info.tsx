import * as styles from "./maker-info.css";
import { ChevronRightSharp } from "@/assets/svg";
import MakerProfileImage from "@/assets/img/maker-profile.png";
import { LikeButton } from "../like-button/like-button";
import { useAuthorLikeMutation } from "@/apis/queries/use-author-like.query.";

interface MakerInfoProps {
  name: string;
  description: string;
  profileImage?: string;
  liked?: boolean;
  likeCount?: number;
}

export function MakerInfo({
  name,
  description,
  profileImage = MakerProfileImage,
  liked = false,
  likeCount = 0,
}: MakerInfoProps) {
  const { mutate: toggleLike } = useAuthorLikeMutation();

  return (
    <div className={styles.container}>
      <div className={styles.profileInfoArea}>
        <img
          src={profileImage}
          width={64}
          height={64}
          alt={`${name} 프로필 이미지`}
        />
        <div className={styles.textArea}>
          <div className={styles.nameWrapper}>
            <span className={styles.name}>{name}</span>
            <ChevronRightSharp />
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <LikeButton 
        variant="maker" 
        liked={liked} 
        count={likeCount} 
        onClick={() => toggleLike({ authorId: 1, userId: 1 })}
      />
    </div>
  );
}
