import { Check } from "@/assets/svg";
import * as styles from "./title-option.css";
import TextField from "@/shared/components/input/text-field";
import type React from "react";

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
  const handleTextFieldClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.container({ isExpanded })} onClick={onSelect}>
      <div className={styles.titleContainer}>
        <p className={styles.titleText({ isExpanded })}>{title}</p>
        {isExpanded && <Check />}
      </div>
      {isExpanded && (
        <div onClick={handleTextFieldClick}>
          <TextField label={label} placeholder={placeholder} />
        </div>
      )}
    </div>
  );
};

export default TitleOption;
