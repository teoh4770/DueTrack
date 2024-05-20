import { useDeadlines } from "../../hooks";
import { DeadlineItemInterface } from "../../types";
import { DeadlineItem } from "./DeadlineItem";
import { DivProps } from "react-html-props";

interface DeadlineListProps extends DivProps {
  deadlines: DeadlineItemInterface[];
}

export const DeadlineList = ({
  deadlines,
  className,
  ...props
}: DeadlineListProps) => {
  const deadlineListClasses = `deadline__list ${className}`;
  const { getOrderDeadlines } = useDeadlines();

  const orderedDeadlines = getOrderDeadlines();

  const Deadlines = orderedDeadlines.map((deadline) => (
    <DeadlineItem
      key={deadline.id}
      id={deadline.id}
      title={deadline.title}
      dueDate={deadline.dueDate}
      color={deadline.color}
    />
  ));

  return (
    <div className={deadlineListClasses} {...props}>
      {deadlines.length > 0 ? (
        Deadlines
      ) : (
        <p className="text-xl text-center">You have no deadlines...🌴</p>
      )}
    </div>
  );
};
