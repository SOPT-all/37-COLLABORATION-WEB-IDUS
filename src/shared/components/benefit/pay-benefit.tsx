import { BaseBenefit } from "./base-benefit";
import * as styles from "./base-benefit.css";

interface PayBenefitProps {
  title: string;
  description: string;
}

export const PayBenefit = ({ title, description }: PayBenefitProps) => {
  return (
    <BaseBenefit type="pay-benefit">
      <div className={styles.benefitTitle}>
        <span className={styles.text({ type: "sm", color: "gray" })}>
          결제 혜택
        </span>
        <span className={styles.text({ type: "md", color: "black" })}>
          {title}
        </span>
      </div>
      <div
        className={`${styles.benefitContent({ type: "pay-benefit" })} ${styles.text({ type: "sm", color: "gray" })}`}>
        {description}
      </div>
    </BaseBenefit>
  );
};
