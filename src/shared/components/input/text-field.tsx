import React, { useState } from "react";
import * as styles from "./text-field.css";
import { Delete } from "@/assets/svg";

interface Props extends React.ComponentProps<"input"> {
  label: string;
  placeholder: string;
}

const TextField = ({ label, placeholder, type, ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleDelete = () => {
    setValue("");
  };

  return (
    <div className={styles.container({ isFocused })}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {isFocused && (
          <button
            type="button"
            className={styles.deleteButton}
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleDelete}>
            <Delete className={styles.deleteButton} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;
