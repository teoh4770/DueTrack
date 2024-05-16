import { DivProps } from "react-html-props";
import { getTodayFormattedDate } from "../utils";

export const CurrentDate = ({ className, ...props }: DivProps) => {
  const currentDateClasses = className;
  const currentDate = getTodayFormattedDate();

  return (
    <span className={currentDateClasses} {...props}>
      {currentDate}
    </span>
  );
};
