import React from "react";
import "../styles.css";
import { CATEGORIES } from "../data";
import Fact from "./Fact";

function FactList({ facts }) {
  const rendredFacts = facts.map((fact) => {
    const categoryColor = CATEGORIES.find(
      (cat) => cat.name === fact.category
    )?.color;
    return <Fact fact={fact} categoryColor={categoryColor} key={fact.id} />;
  });
  return (
    <section>
      <ul>{rendredFacts}</ul>
      <p>There are {facts.length} facts in our database. Add your own.</p>
    </section>
  );
}

export default FactList;
