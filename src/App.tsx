import { MembershipBenefit } from "./shared/components/benefit/membership-benefit";
import { MoreBenefit } from "./shared/components/benefit/more-benefit";
import { PayBenefit } from "./shared/components/benefit/pay-benefit";
import { MEMBERSHIP_DATA, PAY_BENEFITS_DATA } from "./shared/constants/benefit";
import * as styles from "./test.css";

function App() {
  return (
    <div className={styles.test}>
      <MembershipBenefit
        description={MEMBERSHIP_DATA.description}
        price={MEMBERSHIP_DATA.price}
        unit={MEMBERSHIP_DATA.unit}
        badges={MEMBERSHIP_DATA.badges}
      />
      {PAY_BENEFITS_DATA.map((benefit) => (
        <PayBenefit
          key={benefit.id}
          title={benefit.title}
          description={benefit.desc}
        />
      ))}
      <MoreBenefit />
    </div>
  );
}

export default App;
