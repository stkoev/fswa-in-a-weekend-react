import "../src/styles.css";
import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import { CATEGORIES, initialFacts } from "./data";
import Header from "./components/Header";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [facts, setFacts] = useState(initialFacts);
  return (
    <>
      {/* HEADER */}
      {<Header setShowForm={setShowForm} showForm={showForm} />}
      {showForm ? (
        <NewFactForm
          categories={CATEGORIES}
          text={text}
          setText={setText}
          source={source}
          setSource={setSource}
          category={category}
          setCategory={setCategory}
          setFacts={setFacts}
          facts={facts}
          setShowForm={setShowForm}
        />
      ) : null}
      <main className="main">
        <CategoryFilter />
        <FactList facts={facts} />
      </main>
    </>
  );
}

export default App;
