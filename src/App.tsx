import { typography } from "./shared/styles/typography.css";
import * as styles from "./test.css";
function App() {
  return (
    <div>
      <div className={`${typography.display()} ${styles.brandColor01}`}>
        pretendard_SB_50_1
      </div>
      <div className={typography.heading1()}>pretendard_SB_32_1</div>
      <div className={typography.heading2()}>pretendard_SB_24_1</div>
      <div className={typography.heading3()}>pretendard_SB_18_1</div>
      <div className={typography.body1()}>pretendard_SB_16_1</div>
      <div className={typography.body2()}>pretendard_M_16_1</div>
      <div className={typography.body3()}>pretendard_M_14_1</div>
      <div className={typography.body4()}>pretendard_R_14_2</div>
      <div className={typography.caption1()}>pretendard_M_12_1</div>
      <div className={typography.caption1()}>pretendard_R_12_1</div>
    </div>
  );
}

export default App;
