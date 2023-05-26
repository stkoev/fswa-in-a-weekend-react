import React from "react";
import "../styles.css";
import { CATEGORIES } from "../data";
import Fact from "./Fact";
import Loader from "./Loader";

function FactList({ facts, setFacts, isLoading, handleVote, isUpdating }) {
  if (facts.length === 0 && !isLoading) {
    return (
      <p className="message">
        No Facts for this category yet! Create the first one 💥
      </p>
    );
  }

  const rendredFacts = facts.map((fact) => {
    const categoryColor = CATEGORIES.find(
      (cat) => cat.name === fact.category
    )?.color;
    return (
      <Fact
        fact={fact}
        setFacts={setFacts}
        categoryColor={categoryColor}
        key={fact.id}
        handleVote={handleVote}
        isUpdating={isUpdating}
      />
    );
  });

  const factList = (
    <>
      {" "}
      <ul>{rendredFacts}</ul>
      <p>There are {facts.length} facts in our database. Add your own.</p>
    </>
  );

  return <section>{isLoading ? <Loader /> : factList}</section>;
}

export default FactList;
