import * as styles from "../product-detail.css";

export const PurchaseSafetyNotice = () => {
  return (
    <div className={styles.notice}>
      <div className={styles.noticeTitle}>
        안전한 거래를 위해 {"\n"}
        아이디어스 결제 시스템을 이용해주세요.
      </div>
      <div className={styles.noticeDescription}>
        개인 연락처를 통한 거래는 보호 및 중재가 어려울 수 있습니다. {"\n"}
        작가님의 외부 거래 요청이 있다면{" "}
        <span className={styles.customerCenter}>고객센터</span>로 알려주세요.
      </div>
    </div>
  );
};
