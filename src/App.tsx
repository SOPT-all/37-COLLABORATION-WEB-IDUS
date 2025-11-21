import * as styles from "./test.css";

import { Accrodian } from "./shared/components/accordian/accrodian";

function App() {
  return (
    <div className={styles.test}>
      <Accrodian type="maker" title="교환 / 환불" />
      <Accrodian
        type="bottom-sheets"
        title="제목 설정"
        children={
          <>
            <div className={styles.children}>하하하</div>
            <div className={styles.children}>하하하</div>
          </>
        }
      />
      <Accrodian type="maker" isMakerReport={true} title="작품 제보하기" />
    </div>
  );
}

export default App;
