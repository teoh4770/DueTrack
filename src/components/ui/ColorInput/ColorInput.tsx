import { InputProps } from "react-html-props";
import styles from "./ColorInput.module.css";

interface ColorInputProps extends InputProps {
  spanText: string;
  hideLabel?: boolean;
}

export const ColorInput = ({
  spanText,
  hideLabel,
  className,
  ...props
}: ColorInputProps) => {
  const colorInputClasses = `${styles.input} ${className}`;

  return (
    <label className={styles["form-control"]}>
      <span className={hideLabel ? "sr-only" : ""}>{spanText}</span>
      <input type="color" className={colorInputClasses} {...props} />
    </label>
  );
};
