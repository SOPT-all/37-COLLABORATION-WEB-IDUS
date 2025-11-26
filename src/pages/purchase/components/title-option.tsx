import { Check } from "@/assets/svg";
import * as styles from "./title-option.css";
import TextField from "@/shared/components/input/text-field";
import { useState } from "react";

interface Props {
  title: string;
  label: string;
  placeholder: string;
}

const TitleOption = ({ title, label, placeholder }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.titleContainer}>
        <p className={styles.titleText({ isExpanded })}>{title}</p>
        {isExpanded && <Check />}
      </div>
      {isExpanded && <TextField label={label} placeholder={placeholder} />}
    </div>
  );
};

export default TitleOption;
