import { ArrowLeft, Home, Search, ShoppingCart } from "@/assets/svg";
import * as styles from "./header.css";

export const Header = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {/** 왼쪽 아이콘 영역(뒤로가기) */}
        <div className={styles.group}>
          <ArrowLeft className={styles.button} />
        </div>
        {/** 오른쪽 아이콘 영역(검색, 홈, 장바구니) */}
        <div className={styles.group}>
          <Search className={styles.button} />
          <Home className={styles.button} />
          <ShoppingCart className={styles.button} />
        </div>
      </div>
    </div>
  );
};
