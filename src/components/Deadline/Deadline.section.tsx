import { DeadlineList, DeadlineOptions, DeadlineForm } from "../../components";
import { useDeadlines } from "../../hooks";

export const Deadline = () => {
  const { deadlines, addDeadline } = useDeadlines();

  return (
    <>
      <div className="border-[3px] border-[var(--wrapper-border-color)] rounded-[var(--border-radius)] px-10 py-7">
        <DeadlineForm onSubmit={addDeadline} />
        <hr className="h-2 border-none bg-[var(--wrapper-border-color)] my-4 rounded-full" />
        <DeadlineList deadlines={deadlines} />
      </div>
      <DeadlineOptions />
    </>
  );
};
