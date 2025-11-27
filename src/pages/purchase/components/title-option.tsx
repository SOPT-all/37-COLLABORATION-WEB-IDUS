import { Check } from "@/assets/svg";
import * as styles from "./title-option.css";
import TextField from "@/shared/components/input/text-field";
import type React from "react";

interface Field {
  label: string;
  placeholder: string;
}

interface Props {
  title: string;
  fields: Field[];
  isExpanded: boolean;
  onSelect: () => void;
}

const TitleOption = ({ title, fields, isExpanded, onSelect }: Props) => {
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
        <div className={styles.fieldsContainer} onClick={handleTextFieldClick}>
          {fields.map((field) => (
            <TextField
              key={field.label}
              label={field.label}
              placeholder={field.placeholder}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TitleOption;
