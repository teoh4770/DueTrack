import { ButtonPropsWithoutRef } from "react-html-props";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonPropsWithoutRef {
  buttonText?: string;
  icon?: React.ReactNode;
  iconOnly?: boolean;
}

export const Button = ({
  buttonText,
  icon,
  iconOnly,
  className,
  ...buttonProps
}: ButtonProps) => {
  const buttonClasses = `${styles.button} ${className}`;

  return (
    <button className={buttonClasses} {...buttonProps}>
      <p className={iconOnly ? "sr-only" : ""} aria-hidden={iconOnly}>
        {buttonText}
      </p>
      {icon}
    </button>
  );
};
