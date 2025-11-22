import React from "react";
import * as styles from "./floating-button.css";
import { ChatFloating } from "@/assets/svg";

interface Props extends React.ComponentProps<"button"> {
  content?: string;
}

const FloatingButton = ({ content = "작품 문의", ...props }: Props) => {
  return (
    <button className={styles.container} {...props}>
      <ChatFloating />
      <span className={styles.content}>{content}</span>
    </button>
  );
};

export default FloatingButton;
