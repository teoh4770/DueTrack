import { useState } from "react";
import { Button, Checkbox } from "../../components";
import { useDeadlines } from "../../hooks";

export const DeadlineOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { deadlines, clearDeadlines } = useDeadlines();

  return (
    <div className="deadline__options max-w-sm grid ml-auto mt-2">
      <Button
        type="button"
        className="flex ml-auto mb-4 font-semibold"
        buttonText="Options"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`${
          !isOpen && "sr-only"
        } p-4  border-[3px] border-[var(--wrapper-border-color)]`}
      >
        <div className="deadline__toggle-options grid gap-4 border-2 border-black p-4">
          <Checkbox spanText="Toasts" name="toasts" />
          <Checkbox spanText="Dark Mode" name="dark-mode" />
        </div>

        <hr className="h-[2px] bg-[#3e4a57] my-4" />

        <div className="deadline__extra-actions grid gap-2">
          <Button
            type="button"
            className="block w-full bg-[var(--option-action-btn-bg-color)]"
            buttonText="Export to JSON"
          />
          <Button
            type="button"
            className="block w-full bg-[var(--option-action-btn-bg-color)]"
            buttonText="Import from JSON"
          />
          <Button
            type="button"
            className={`block w-full ${
              deadlines.length <= 0 && "sr-only"
            } bg-[var(--bg-danger)] text-white`}
            buttonText="Purge database"
            onClick={clearDeadlines}
          />
        </div>
      </div>
    </div>
  );
};
