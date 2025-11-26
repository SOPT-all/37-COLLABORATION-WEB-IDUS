import { Check } from "@/assets/svg";
import * as styles from "./title-option.css";
import TextField from "@/shared/components/input/text-field";

interface Props {
  title: string;
  label: string;
  placeholder: string;
  isExpanded: boolean;
  onSelect: () => void;
}

const TitleOption = ({
  title,
  label,
  placeholder,
  isExpanded,
  onSelect,
}: Props) => {
  return (
    <div className={styles.container({ isExpanded })} onClick={onSelect}>
      <div className={styles.titleContainer}>
        <p className={styles.titleText({ isExpanded })}>{title}</p>
        {isExpanded && <Check />}
      </div>
      {isExpanded && <TextField label={label} placeholder={placeholder} />}
    </div>
  );
};

export default TitleOption;
