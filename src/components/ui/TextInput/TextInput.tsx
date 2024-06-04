import { InputProps } from "react-html-props";
import styles from "./TextInput.module.css";

interface TextInput extends InputProps {
  spanText?: string;
  hideLabel?: boolean;
}

export const TextInput = ({
  spanText,
  hideLabel,
  className,
  ...props
}: TextInput) => {
  const textInputClasses = `${styles.input} ${className}`;

  return (
    <label>
      <span className={hideLabel ? "sr-only" : ""}>{spanText}</span>
      <input type="text" className={textInputClasses} {...props} />
    </label>
  );
};
