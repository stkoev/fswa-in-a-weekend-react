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
  const [isUpdating, setIsUpdating] = useState(false);

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

  async function handleVote(el, voteType) {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [voteType]: el[voteType] + 1 })
      .eq("id", el.id)
      .select();
    setIsUpdating(false);

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (el.id === f.id ? updatedFact[0] : f))
      );
  }

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
        <FactList
          facts={facts}
          setFacts={setFacts}
          isLoading={isLoading}
          handleVote={handleVote}
          isUpdating={isUpdating}
        />
      </main>
    </>
  );
}

export default App;
