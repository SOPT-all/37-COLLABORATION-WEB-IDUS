import React, { useState, useRef } from "react";
import * as styles from "./text-field.css";
import { Delete } from "@/assets/svg";

interface Props extends React.ComponentProps<"input"> {
  label: string;
  placeholder: string;
}

const TextField = ({ label, placeholder, type, ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // input element 감시, X버튼 클릭 시 input value 초기화에 사용

  const handleDelete = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.container({ isFocused })}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          className={styles.input}
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
