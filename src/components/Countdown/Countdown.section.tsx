import { useDeadlines } from "../../hooks";
import { CountdownItem } from "./CountdownItem";

export const Countdown = () => {
  const { deadlines } = useDeadlines();

  const countdowns = deadlines.map((deadline, i) => {
    return (
      <CountdownItem
        key={i}
        title={deadline.title}
        dueDate={deadline.dueDate}
        initialTime={deadline.initialTime}
        color={deadline.color}
      />
    );
  });

  return (
    <section
      key={JSON.stringify(deadlines)}
      className="countdown-section grid justify-items-center  gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {countdowns}
    </section>
  );
};
