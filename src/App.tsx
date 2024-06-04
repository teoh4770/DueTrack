import { Header, Deadline, Countdown } from "./components";

function App() {
  return (
    <section className="app max-w-[60rem] mx-auto p-4">
      <header className="flex flex-wrap justify-between items-center py-12">
        <Header />
      </header>
      <main className="deadline">
        <Deadline />
      </main>
      <Countdown />
    </section>
  );
}

export default App;
