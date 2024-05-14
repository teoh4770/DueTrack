import { InputProps } from "react-html-props";
import styles from "./TextInput.module.css";

interface TextInput extends InputProps {
  spanText: string;
  hideText?: boolean;
}

export const TextInput = ({
  spanText,
  hideText,
  className,
  ...props
}: TextInput) => {
  const textInputClasses = `${styles.input} ${className}`;

  return (
    <label>
      <span className={hideText ? "sr-only" : ""}>{spanText}</span>
      <input type="text" className={textInputClasses} {...props} />
    </label>
  );
};
