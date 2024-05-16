import { useState } from "react";
import { Button, Checkbox } from "../../components";
import { useDeadlines } from "../../hooks";

export const DeadlineOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { deadlines, clearDeadlines } = useDeadlines();


  return (
    <div className="deadline__options max-w-sm grid ml-auto">
      <Button
        type="button"
        className="flex ml-auto font-semibold"
        buttonText="Options"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div className={`${isOpen && "sr-only"}`}>
        <div className="deadline__toggle-options grid gap-2 border-2 border-black py-2 px-4">
          <Checkbox spanText="Toasts" name="toasts" />
          <Checkbox spanText="Dark Mode" name="dark-mode" />
        </div>

        <hr className="h-[2px] bg-[#3e4a57] my-4" />

        <div className="deadline__extra-actions grid gap-2">
          <Button
            type="button"
            className="block w-full"
            buttonText="Export to JSON"
          />
          <Button
            type="button"
            className="block w-full"
            buttonText="Import from JSON"
          />
          <Button
            type="button"
            className={`block w-full ${deadlines.length <= 0 && "sr-only"}`}
            buttonText="Purge database"
            onClick={clearDeadlines}
          />
        </div>
      </div>
    </div>
  );
};
