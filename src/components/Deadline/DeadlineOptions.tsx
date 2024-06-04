import { useEffect, useState } from "react";
import { Button, Checkbox } from "../../components";
import { useDeadlines } from "../../hooks";
import { exportDeadlines, isJson } from "../../utils";
import { FileInput } from "../ui/FileInput/FileInput";

export const DeadlineOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { deadlines, setDeadlines, clearDeadlines } = useDeadlines();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  }, [darkMode]);

  // refactor
  function importFile(input: HTMLInputElement) {
    if (input.files) {
      try {
        readTextFile(input.files[0]);
        input.value = "";
      } catch (error) {
        console.error(error);
      }
    }
  }

  // refactor
  function readTextFile(file: File) {
    function getIsDeadlineItemArray(list: object) {
      const isArray = Array.isArray(list);

      if (isArray && list.length === 0) return true;

      if (isArray && list.length > 0) {
        const isDeadlineItemArray = list.every((item) => {
          if (item instanceof Object) {
            return (
              Object.prototype.hasOwnProperty.call(item, "id") &&
              Object.prototype.hasOwnProperty.call(item, "title") &&
              Object.prototype.hasOwnProperty.call(item, "dueDate") &&
              Object.prototype.hasOwnProperty.call(item, "color")
            );
          }
          return false;
        });

        return isDeadlineItemArray;
      }

      return false;
    }

    function handleOnLoad(reader: FileReader) {
      const result = reader.result as string;
      if (!isJson(result)) {
        throw new Error("The data is not JSON!");
      }

      const deadlines = JSON.parse(result);
      const isDeadlineItemArray = getIsDeadlineItemArray(deadlines);
      if (isDeadlineItemArray) {
        setDeadlines(deadlines);
      }
    }

    function handleOnError(reader: FileReader) {
      throw new Error(String(reader.error));
    }

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => handleOnLoad(reader);
    reader.onerror = () => handleOnError(reader);
  }

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
            onClick={() => exportDeadlines(deadlines)}
          />
          <FileInput onChange={(e) => importFile(e.target)} accept=".txt" />

          <Button
            type="button"
            className={`block w-full ${
              deadlines.length <= 0 && "sr-only"
            } bg-[var(--bg-danger)] text-white border-none`}
            buttonText="Purge database"
            onClick={clearDeadlines}
          />
        </div>
      </div>
    </div>
  );
};
