import type { ElementType, ReactNode } from "react";
import { text as textRecipe, type TextVariants } from "./text.css";

type TextProps = TextVariants & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export const Text = ({
  as: Component = "span",
  type,
  color,
  className,
  children,
}: TextProps) => {
  return (
    <Component className={`${textRecipe({ type, color })} ${className || ""}`}>
      {children}
    </Component>
  );
};
