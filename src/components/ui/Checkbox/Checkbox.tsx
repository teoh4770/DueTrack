import { InputProps } from "react-html-props";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputProps {
  spanText: string;
}

export const Checkbox = ({ spanText, className, ...props }: CheckboxProps) => {
  const checkboxClasses = `${styles["form-control"]} ${className}`;

  return (
    <label className={checkboxClasses}>
      <span>{spanText}</span>
      <input type="checkbox" {...props} />
    </label>
  );
};
