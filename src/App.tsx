import { BinIcon, CrossIcon, PlusIcon, InfoIcon } from "./assets";
import {
  Button,
  Checkbox,
  ColorInput,
  DateInput,
  TextInput,
  CurrentDate,
} from "./components";

function App() {
  return (
    <section className="app max-w-4xl mx-auto">
      <header className="flex items-center py-[5.625rem] border-4 border-slate-400">
        <h1 className="logo mr-3 text-2xl font-semibold">Deadlines</h1>
        <Button
          type="button"
          aria-label="click here for more information about the app Deadline"
          className="p-0 border-none"
          buttonText="check out more information about Deadline"
          icon={InfoIcon}
          iconOnly
        />
        <CurrentDate className="ml-auto text-2xl font-semibold" />
      </header>
      {/* deadline section */}
      <main className="deadline border-4 border-slate-400 p-10">
        {/* create deadline here: has form inputs and deadline actions */}
        <div className="deadline__form-section">
          <Button
            type="button"
            className="inline-block w-full"
            buttonText="Add new deadline"
          />

          {/* deadline form */}
          <form name="deadline__form" className="deadline__form">
            {/* form inputs */}
            <TextInput
              className="w-full"
              spanText="Enter new deadline title"
              hideText
              name="deadline-title"
              placeholder="Enter deadline...."
            />

            <div className="flex flex-wrap justify-between">
              <div className="flex gap-4">
                <DateInput spanText="Pick deadline's due date" hideLabel />
                <ColorInput
                  spanText="Choose deadline's label color"
                  name="deadline-label-color"
                  hideLabel
                />
              </div>
              {/* deadline form actions */}
              <div className="deadline__form-actions flex gap-2">
                <Button
                  type="submit"
                  aria-label="confirm button"
                  buttonText="Click to confirm to add new deadline"
                  icon={PlusIcon}
                  iconOnly
                />

                <Button
                  type="reset"
                  aria-label="cancel button"
                  buttonText="Click to not add a new deadline"
                  icon={CrossIcon}
                  iconOnly
                />
              </div>
            </div>
          </form>
        </div>

        <hr className="h-2 border border-black" />

        <div className="deadline__list">
          <div className="deadline__item flex flex-wrap justify-between items-center p-4 border-2 border-slate-400">
            <div className="flex gap-3">
              <div className="deadline__color-indicator inline-block w-1 rounded-xl bg-black"></div>
              <div>
                <p className="deadline__title">Deadline 1</p>
                <p className="deadline__remaining-day">Today (0 days left)</p>
              </div>
            </div>
            <div className="flex">
              <DateInput spanText="Pick deadline's due date" hideLabel />
              <Button
                type="button"
                aria-label="delete deadline button"
                buttonText="Remove this deadline"
                icon={BinIcon}
                iconOnly
              />
            </div>
          </div>

          <div className="deadline__item flex flex-wrap justify-between items-center p-4 border-2 border-slate-400">
            <div className="flex gap-3">
              <div className="deadline__color-indicator inline-block w-1 rounded-xl bg-black"></div>
              <div>
                <p className="deadline__title">Deadline 1</p>
                <p className="deadline__remaining-day">Today (0 days left)</p>
              </div>
            </div>
            <div className="flex">
              <DateInput spanText="Pick deadline's due date" hideLabel />
              <Button
                type="button"
                aria-label="delete deadline button"
                buttonText="Remove this deadline"
                icon={BinIcon}
                iconOnly
              />
            </div>
          </div>

          <div className="deadline__item flex flex-wrap justify-between items-center p-4 border-2 border-slate-400">
            <div className="flex gap-3">
              <div className="deadline__color-indicator inline-block w-1 rounded-xl bg-black"></div>
              <div>
                <p className="deadline__title">Deadline 1</p>
                <p className="deadline__remaining-day">Today (0 days left)</p>
              </div>
            </div>
            <div className="flex">
              <DateInput spanText="Pick deadline's due date" hideLabel />
              <Button
                type="button"
                aria-label="delete deadline button"
                buttonText="Remove this deadline"
                icon={BinIcon}
                iconOnly
              />
            </div>
          </div>
        </div>

        <div className="deadline__options border-2 border-slate-400">
          <Button
            type="button"
            className="block"
            buttonText="Expand the option list"
          />

          <div className="deadline__toggle-options">
            <Checkbox spanText="Toasts" name="toasts" />
            <Checkbox spanText="Dark Mode" name="dark-mode" />
          </div>

          <div className="deadline__extra-actions">
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
              className="block w-full"
              buttonText="Purge database"
            />
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
