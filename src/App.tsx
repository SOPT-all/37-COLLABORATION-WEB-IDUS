import * as styles from "./test.css";

import { Accrodian } from "./shared/components/accordian/accrodian";

function App() {
  return (
    <div className={styles.test}>
      <Accrodian
        type="maker"
        title="제작 / 배송"
        selectedOption="평균 1일 / 최대 1일 이내"
      />
      <Accrodian
        type="bottom-sheets"
        title="제목 설정"
        selectedOption="앨범 제목만"
        children={
          <>
            <div className={styles.children}>하하하</div>
            <div className={styles.children}>하하하</div>
          </>
        }
      />
      <Accrodian type="maker" iconType="arrow" title="작품 제보하기" />
    </div>
  );
}

export default App;
