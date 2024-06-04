// header
// 1. title
// 2. short summary

import { DurationObjectUnits } from "luxon";

interface CountdownHeaderProps {
  title: string;
  summary: DurationObjectUnits;
}

export const CountdownHeader = ({ title, summary }: CountdownHeaderProps) => {
  return (
    <header className="countdown-header mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">
        Due in {summary.days} days, {summary.hours} hours
      </p>
    </header>
  );
};
