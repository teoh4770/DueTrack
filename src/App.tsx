import "./App.css";

function App() {
  return (
    <section className="app">
      <header>
        <h1 className="logo">Deadlines</h1>
        <span className="current-date">May 8, 2024</span>
      </header>
      {/* deadline section */}
      <main className="deadline">
        {/* create deadline here: has form inputs and deadline actions */}
        <div className="deadline__form-section">
          <button type="button">Add new deadline</button>
          <form name="deadline__form" className="deadline__form">
            {/* form inputs */}
            <div className="deadline__inputs">
              <label>
                <span className="sr-only">Enter new deadline title</span>
                <input type="text" placeholder="Enter deadline...." />
              </label>
              <div>
                <label>
                  <span className="sr-only">Pick deadline's due date</span>
                  {/* default date should be current date */}
                  <input type="date" name="deadline-date" />
                </label>
                <label>
                  <span className="sr-only">Choose deadline's label color</span>
                  <input type="color" name="deadline-label-color" />
                </label>
              </div>
            </div>
            {/* deadline form actions */}
            <div className="deadline__form-actions">
              <button type="button" aria-label="cancel">
                cancel
              </button>
              <button type="submit" aria-label="confirm">
                confirm
              </button>
            </div>
          </form>
        </div>

        <hr />

        <div className="deadline__list">
          <div className="deadline__item">
            <div className="deadline__color-indicator"></div>
            <p className="deadline__title">Deadline 1</p>
            <p className="deadline__remaining-day">Today (0 days left)</p>
            <label>
              <input type="date" name="deadline-date" />
            </label>
            <button type="button">Delete button</button>
          </div>

          <div className="deadline__item">
            <div className="deadline__color-indicator"></div>
            <p className="deadline__title">Deadline 2</p>
            <p className="deadline__remaining-days">in 2 days</p>
            <label>
              <input type="date" name="deadline-date" />
            </label>
            <button type="button">Delete button</button>
          </div>

          <div className="deadline__item">
            <div className="deadline__color-indicator"></div>
            <p className="deadline__title">Deadline 3</p>
            <p className="deadline__remaining-days">in 4 days</p>
            <label>
              <input type="date" name="deadline-date" />
            </label>
            <button type="button">Delete button</button>
          </div>
        </div>

        <div className="deadline__options">
          <button type="button">expand the option list</button>

          <div className="deadline__toggle-options">
            <label>
              <span>Toasts</span>
              <input type="checkbox" name="toasts" />
            </label>

            <label>
              <span>Dark Mode</span>
              <input type="checkbox" name="dark mode" />
            </label>
          </div>

          <div className="deadline__extra-actions">
            <button>Export to JSON</button>
            <button>Import from JSON</button>
            <button>Purge Database</button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
