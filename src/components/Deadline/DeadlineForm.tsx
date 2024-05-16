import { FormEvent, useState } from "react";
// import { CrossIcon, PlusIcon } from "../../assets";
import { Button } from "../ui/Button/Button.tsx";
import { ColorInput } from "../ui/ColorInput/ColorInput";
import { DateInput } from "../ui/DateInput/DateInput.tsx";
import { TextInput } from "../ui/TextInput/TextInput.tsx";
import { DeadlineItemInterface } from "../../types/types.ts";
import { getTodayDate } from "../../utils/date.ts";

interface DeadlineFormProps {
  className?: string;
  onSubmit: (deadline: DeadlineItemInterface) => void;
}

export const DeadlineForm = ({ className, onSubmit }: DeadlineFormProps) => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const todayDate = getTodayDate();
  const deadlineFormContainerClasses = `deadline__form-section ${className}`;

  function openForm() {
    setIsFormOpened(true);
  }

  function closeForm() {
    setIsFormOpened(false);
  }

  function formSubmitHandler(e: FormEvent) {
    e.preventDefault();

    const $form = e.currentTarget as HTMLFormElement;
    const formData = Object.fromEntries(new FormData($form));

    onSubmit({
      id: self.crypto.randomUUID(),
      title: formData.title as string,
      dueDate: formData.dueDate as string,
      color: formData.color as string,
    });

    $form.reset();
    closeForm();
  }

  function formKeyUpHandler(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key === "Escape") {
      closeForm();
    }
  }

  return (
    <div className={deadlineFormContainerClasses}>
      {!isFormOpened && (
        <Button
          type="button"
          className="inline-block w-full capitalize bg-[var(--add-button-bg-color)] border-none text-[var(--white)]"
          buttonText="Add new deadline"
          onClick={openForm}
        />
      )}

      {isFormOpened && (
        <form
          name="deadline__form"
          className="deadline__form space-y-3"
          onSubmit={formSubmitHandler}
          onKeyUp={formKeyUpHandler}
        >
          <TextInput
            className="w-full"
            spanText="Enter new deadline title"
            name="title"
            hideText
            placeholder="Enter deadline...."
            autoFocus
            required
          />

          <div className="grid gap-3 sm:flex sm:justify-between">
            {/* date and color inputs */}
            <div className="flex justify-between gap-3">
              <DateInput
                spanText="Pick deadline's due date"
                name="dueDate"
                hideLabel
                required
                defaultValue={todayDate}
              />
              <ColorInput
                spanText="Choose deadline's label color"
                name="color"
                className="aspect-square w-full"
                hideLabel
              />
            </div>

            {/* actions */}
            <div className="flex justify-between gap-3">
              <Button
                type="submit"
                aria-label="confirm button"
                buttonText="Add"
                className="w-full border-none bg-[var(--bg-success)] text-white"
                // icon={PlusIcon}
                // iconOnly
              />

              <Button
                type="reset"
                aria-label="cancel button"
                buttonText="Cancel"
                className="w-full border-none bg-[var(--bg-danger)] text-white"
                // icon={CrossIcon}
                // iconOnly
                onClick={closeForm}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
