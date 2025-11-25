import { Content } from "./content";

import * as styles from "./section.css";
function Section3() {
  return (
    <div className={styles.container}>
      {[...Array(20)].map((_, i) => (
        <Content key={i} type="section3" />
      ))}
    </div>
  );
}

export default Section3;
