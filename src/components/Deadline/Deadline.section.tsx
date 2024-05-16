import { DeadlineList, DeadlineOptions, DeadlineForm } from "../../components";
import { useDeadlines } from "../../hooks";

export const Deadline = () => {
  const { deadlines, addDeadline } = useDeadlines();

  return (
    <>
      <div className="border-[3px] border-[var(--wrapper-border-color)] px-10 py-7">
        <DeadlineForm onSubmit={addDeadline} />
        <hr className="h-2 bg-[#3e4a57] my-4 rounded-full" />
        <DeadlineList deadlines={deadlines} />
      </div>
      <DeadlineOptions />
    </>
  );
};
