import * as styles from "./footer-detail.css";

const FooterDetail = () => {
  return (
    <div className={styles.container}>
      <p className={styles.discount}>살수록할인</p>
      <p className={styles.text}>2개부터, 200원씩 추가 할인</p>
    </div>
  );
};

export default FooterDetail;
