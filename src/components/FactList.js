import React from "react";
import "../styles.css";
import { CATEGORIES } from "../data";
import Fact from "./Fact";
import Loader from "./Loader";

function FactList({ facts, isLoading }) {
  const rendredFacts = facts.map((fact) => {
    const categoryColor = CATEGORIES.find(
      (cat) => cat.name === fact.category
    )?.color;
    return <Fact fact={fact} categoryColor={categoryColor} key={fact.id} />;
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
