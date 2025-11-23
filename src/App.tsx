import { Header } from "./shared/components/header/header";
import * as styles from "./test.css";

function App() {
  return (
    <div className={styles.test}>
      <Header />
      <div className={styles.bigElement}></div>
    </div>
  );
}

export default App;
