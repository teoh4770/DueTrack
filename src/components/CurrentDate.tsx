import { DivProps } from "react-html-props";

export const CurrentDate = ({ className, ...props }: DivProps) => {
  const currentDateClasses = className;
  const todayDate = new Date(); // util function: get today's date in format (May 8, 2024)

  return (
    <span className={currentDateClasses} {...props}>
      {JSON.stringify(todayDate)}
    </span>
  );
};
