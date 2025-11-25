import { addComma } from "@/shared/utils/add-comma";
import { BaseBenefit } from "./base-benefit";
import * as styles from "./base-benefit.css";

interface MembershipBenefitProps {
  description: string;
  price: number;
  unit: string;
  readonly badges: string[];
}

export const MembershipBenefit = ({
  description,
  price,
  unit,
  badges,
}: MembershipBenefitProps) => {
  return (
    <BaseBenefit type="membership-benefit">
      <div className={styles.benefitTitle}>
        <div className={styles.text({ type: "sm", color: "gray" })}>
          {description}
        </div>
        <div>
          <span className={styles.text({ type: "lg", color: "brand" })}>
            {addComma(String(price))}
          </span>
          <span className={styles.text({ type: "md", color: "brand" })}>
            {unit}
          </span>
        </div>
      </div>
      <div className={styles.benefitContent({ type: "membership-benefit" })}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`${styles.benefitBadge} ${styles.text({ type: "sm", color: "brand" })}`}>
            {badge}
          </div>
        ))}
      </div>
    </BaseBenefit>
  );
};
