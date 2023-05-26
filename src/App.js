import "../src/styles.css";
import { useEffect, useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import { CATEGORIES, initialFacts } from "./data";
import Header from "./components/Header";
import supabase from "./supabase";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        let query = supabase.from("facts").select("*");
        if (currentCategory !== "all") {
          query = query.eq("category", currentCategory);
        }
        const { data: facts, error } = await query.order("interesting", {
          ascending: false,
        });
        if (!error) {
          setFacts(() => facts || initialFacts);
          setIsLoading(false);
        } else {
          alert("There was a problem loading data...");
        }
      }
      getFacts();
    },
    [currentCategory]
  );

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
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        <FactList facts={facts} isLoading={isLoading} />
      </main>
    </>
  );
}

export default App;
