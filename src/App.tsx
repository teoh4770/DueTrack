import "./App.css";

function App() {
  return (
    <section className="app max-w-4xl mx-auto">
      <header className="flex items-center py-[5.625rem] border-4 border-slate-400">
        <h1 className="logo mr-3 text-2xl font-semibold">Deadlines</h1>
        <button
          type="button"
          className=""
          aria-label="click here for more information about the app Deadline"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 9H13V7H11M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM11 17H13V11H11V17Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span className="current-date ml-auto text-2xl font-semibold">
          May 8, 2024
        </span>
      </header>
      {/* deadline section */}
      <main className="deadline border-4 border-slate-400 p-10">
        {/* create deadline here: has form inputs and deadline actions */}
        <div className="deadline__form-section">
          <button
            type="button"
            className="inline-block text-center w-full py-3 border-2 border-slate-400"
          >
            Add new deadline
          </button>

          {/* deadline form */}
          <form name="deadline__form" className="deadline__form">
            {/* form inputs */}
            <label>
              <span className="sr-only">Enter new deadline title</span>
              <input
                type="text"
                name="deadline-title"
                placeholder="Enter deadline...."
                className="w-full py-3 px-4 border-2 border-slate-400"
              />
            </label>

            <div className="flex flex-wrap justify-between">
              <div className="flex gap-4">
                <label>
                  <span className="sr-only">Pick deadline's due date</span>
                  {/* default date should be current date */}
                  <input
                    type="date"
                    name="deadline-date"
                    className="py-3 px-1 border-2 border-slate-400"
                  />
                </label>
                <label>
                  <span className="sr-only">Choose deadline's label color</span>
                  <input
                    type="color"
                    name="deadline-label-color"
                    className="w-12 aspect-square p-1  border-2 h-full"
                  />
                </label>
              </div>
              {/* deadline form actions */}
              <div className="deadline__form-actions flex gap-2">
                <button
                  type="submit"
                  aria-label="confirm button"
                  className="px-4 py-2 border-2"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 9.75H14.25V3C14.25 2.17172 13.5783 1.5 12.75 1.5H11.25C10.4217 1.5 9.75 2.17172 9.75 3V9.75H3C2.17172 9.75 1.5 10.4217 1.5 11.25V12.75C1.5 13.5783 2.17172 14.25 3 14.25H9.75V21C9.75 21.8283 10.4217 22.5 11.25 22.5H12.75C13.5783 22.5 14.25 21.8283 14.25 21V14.25H21C21.8283 14.25 22.5 13.5783 22.5 12.75V11.25C22.5 10.4217 21.8283 9.75 21 9.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="cancel button"
                  className="px-4 py-2 border-2"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_21_17)">
                      <path
                        d="M17.4718 4.21359L12.4999 9.18544L7.5281 4.21359C6.91801 3.60351 5.92848 3.60351 5.31839 4.21359L4.21354 5.31845C3.60345 5.92853 3.60345 6.91807 4.21354 7.52816L9.18538 12.5L4.21354 17.4718C3.60345 18.0819 3.60345 19.0715 4.21354 19.6816L5.31839 20.7864C5.92848 21.3965 6.91801 21.3965 7.5281 20.7864L12.4999 15.8146L17.4718 20.7864C18.0819 21.3965 19.0714 21.3965 19.6815 20.7864L20.7864 19.6816C21.3964 19.0715 21.3964 18.0819 20.7864 17.4718L15.8145 12.5L20.7864 7.52816C21.3964 6.91807 21.3964 5.92853 20.7864 5.31845L19.6815 4.21359C19.0714 3.60351 18.0819 3.60351 17.4718 4.21359Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_21_17">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
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
              <label>
                <span className="sr-only">Pick deadline's due date</span>
                <input
                  type="date"
                  name="deadline-date"
                  className="py-3 px-1 border-2 "
                />
              </label>
              <button type="button" className="px-4 py-2 border-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3V4H4V6H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z"
                    fill="black"
                  />
                </svg>
              </button>
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
              <label>
                <span className="sr-only">Pick deadline's due date</span>
                <input
                  type="date"
                  name="deadline-date"
                  className="py-3 px-1 border-2 "
                />
              </label>
              <button type="button" className="px-4 py-2 border-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3V4H4V6H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z"
                    fill="black"
                  />
                </svg>
              </button>
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
              <label>
                <span className="sr-only">Pick deadline's due date</span>
                <input
                  type="date"
                  name="deadline-date"
                  className="py-3 px-1 border-2 "
                />
              </label>
              <button
                type="button"
                aria-label="remove deadline button"
                className="px-4 py-2 border-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3V4H4V6H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="deadline__options border-2 border-slate-400">
          <button type="button" className="px-4 py-2 border-2">
            expand the option list
          </button>

          <div className="deadline__toggle-options">
            <label className="flex justify-between">
              <span>Toasts</span>
              <input type="checkbox" name="toasts" />
            </label>

            <label className="flex justify-between">
              <span>Dark Mode</span>
              <input type="checkbox" name="dark mode" />
            </label>
          </div>

          <div className="deadline__extra-actions">
            <button type="button" className="block w-full px-4 py-2 border-2">
              Export to JSON
            </button>
            <button type="button" className="block w-full px-4 py-2 border-2">
              Import from JSON
            </button>
            <button type="button" className="block w-full px-4 py-2 border-2">
              Purge Database
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
