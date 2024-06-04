import { useState } from "react";
import { getCountDownSummaryFromDueDate, getProgress } from "../../utils/date";
import { CountdownHeader } from "./CountdownHeader";
import { CountdownProgressBar } from "./CountdownProgressBar";
import { CountdownSummary } from "./CountdownSummary";
import { useInterval } from "../../hooks";

interface CountdownItemProps {
  title: string;
  dueDate: string;
  initialTime: number;
  color: string;
}

export const CountdownItem = ({
  title,
  dueDate,
  initialTime,
  color,
}: CountdownItemProps) => {
  const intervalInMilliseconds = 1000; // 1s = 1000ms

  const [summary, setSummary] = useState(
    getCountDownSummaryFromDueDate(dueDate)
  );
  const [progress, setProgress] = useState(
    Math.floor(getProgress(dueDate, initialTime))
  );

  useInterval(() => {
    const newProgress = Math.floor(getProgress(dueDate, initialTime));
    const newSummary = getCountDownSummaryFromDueDate(dueDate);

    setProgress(newProgress);
    setSummary(newSummary);
  }, intervalInMilliseconds);

  return (
    <article
      className="countdown max-w-[18rem] p-3"
      style={{
        border: "var(--border)",
        borderColor: "black",
        borderRadius: "var(--border-radius)",
      }}
    >
      <CountdownHeader title={title} summary={summary} />
      <div className="countdown-body grid grid-cols-2">
        <CountdownProgressBar progress={progress} color={color} />
        <CountdownSummary summary={summary} />
      </div>
    </article>
  );
};
