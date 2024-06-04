import { DurationObjectUnits } from "luxon";

interface CountdownSummaryProps {
  summary: DurationObjectUnits;
}

export const CountdownSummary = ({ summary }: CountdownSummaryProps) => {
  return (
    <aside className="countdown-summary grid grid-cols-2 gap-4 text-center">
      <div className="countdown-summary-item">
        <div className="uppercase font-medium">Years</div>
        <div className="font-extrabold text-lg">{summary.years}</div>
      </div>
      <div className="countdown-summary-item">
        <div className="uppercase font-medium">Months</div>
        <div className="font-extrabold text-lg">{summary.months}</div>
      </div>
      <div className="countdown-summary-item">
        <div className="uppercase font-medium">Days</div>
        <div className="font-extrabold text-lg">{summary.days}</div>
      </div>
      <div className="countdown-summary-item">
        <div className="uppercase font-medium">Hours</div>
        <div className="font-extrabold text-lg">{summary.hours}</div>
      </div>
      <div className="countdown-summary-item">
        <div className="uppercase font-medium">Minutes</div>
        <div className="font-extrabold text-lg">{summary.minutes}</div>
      </div>
      <div className="countdown-summary-item">
        <div className="uppercase font-medium">Seconds</div>
        <div className="font-extrabold text-lg">
          {summary.seconds ? Math.round(summary.seconds) : 0}
        </div>
      </div>
    </aside>
  );
};
