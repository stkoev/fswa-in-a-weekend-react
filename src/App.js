import "../src/styles.css";
import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import { initialFacts } from "./data";
import Header from "./components/Header";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {/* HEADER */}
      {<Header setShowForm={setShowForm} showForm={showForm} />}
      {showForm ? <NewFactForm /> : null}
      <main className="main">
        <CategoryFilter />
        <FactList facts={initialFacts} />
      </main>
    </>
  );
}

export default App;
