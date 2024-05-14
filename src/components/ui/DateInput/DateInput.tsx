import { InputProps } from "react-html-props";
import styles from "./DateInput.module.css";

interface ColorInputProps extends InputProps {
  spanText: string;
  hideLabel?: boolean;
}

export const DateInput = ({
  spanText,
  hideLabel,
  className,
  ...props
}: ColorInputProps) => {
  const dateInputClasses = `${styles.input} ${className}`;
  const currentDate = 0; // default should be today's date

  return (
    <label>
      <span className={hideLabel ? "sr-only" : ""}>{spanText}</span>
      <input
        type="date"
        className={dateInputClasses}
        {...props}
        defaultValue={currentDate}
      />
    </label>
  );
};
