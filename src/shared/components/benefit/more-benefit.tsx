import { Benefit as IconPlus } from "@/assets/svg";
import { BaseBenefit } from "./base-benefit";
import * as styles from "./base-benefit.css";

export const MoreBenefit = () => {
  return (
    <BaseBenefit type="benefit-more">
      <IconPlus />
      <div
        className={`${styles.benefitContent({ type: "benefit-more" })} ${styles.text()}`}>
        혜택
        <br />
        더보기
      </div>
    </BaseBenefit>
  );
};
