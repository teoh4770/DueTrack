import { InputProps } from "react-html-props";
import styles from "./DateInput.module.css";

interface ColorInputProps extends InputProps {
  spanText?: string;
  hideLabel?: boolean;
}

export const DateInput = ({
  spanText,
  hideLabel,
  className,
  ...props
}: ColorInputProps) => {
  const dateInputClasses = `${styles.input} ${className}`;

  return (
    <label>
      <span className={hideLabel ? "sr-only" : ""}>{spanText}</span>
      <input
        type="date"
        className={dateInputClasses}
        {...props}
        aria-label="date input"
      />
    </label>
  );
};
