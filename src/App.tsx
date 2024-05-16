import { Header, Deadline } from "./components";

function App() {
  return (
    <section className="app max-w-[60rem] mx-auto p-4">
      <header className="flex flex-wrap justify-between items-center py-12">
        <Header />
      </header>
      {/* deadline section */}
      <main className="deadline">
        <Deadline />
      </main>
    </section>
  );
}

export default App;
