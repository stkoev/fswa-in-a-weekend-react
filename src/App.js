import "../src/styles.css";
import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import { initialFacts } from "./data";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="./logo.png" alt="app logo" height="68px" width="68pxs" />
          <h1>Hello World!</h1>
        </div>
        <button
          className="btn btn-large btn-open"
          onClick={() => setShowForm((current) => !current)}
        >
          Share a fact
        </button>
      </header>
      {showForm ? <NewFactForm /> : null}
      <main className="main">
        <CategoryFilter />
        <FactList facts={initialFacts} />
      </main>
    </>
  );
}

export default App;
