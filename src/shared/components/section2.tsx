import { Content } from "./content";
import * as styles from "./section.css";
function Section2() {
  return (
    <div className={styles.container}>
      {[...Array(20)].map((_, i) => (
        <Content key={i} type="section2" />
      ))}
    </div>
  );
}

export default Section2;
