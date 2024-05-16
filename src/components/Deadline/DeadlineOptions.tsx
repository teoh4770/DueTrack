import { useEffect, useState } from "react";
import { Button, Checkbox } from "../../components";
import { useDeadlines } from "../../hooks";

export const DeadlineOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  // make it global state
  // set the setting based on user system setting for dark mode
  const [darkMode, setDarkMode] = useState(false);
  const { deadlines, clearDeadlines } = useDeadlines();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  }, [darkMode]);

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
        } p-4 border-[var(--wrapper-border-color)] border-[3px] rounded-[var(--border-radius)]`}
      >
        <div className="deadline__toggle-options grid gap-4 p-4 bg-[var(--option-action-btn-bg-color)]">
          <Checkbox spanText="Toasts" name="toasts" />
          <Checkbox
            spanText="Dark Mode"
            name="dark-mode"
            onChange={() => setDarkMode((state) => !state)}
          />
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
