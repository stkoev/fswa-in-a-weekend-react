import React from "react";
import Category from "./Category";
import { CATEGORIES } from "../data";

function CategoryFilter() {
  const renderCategories = CATEGORIES.map((cat) => {
    return <Category category={cat} key={cat.id} />;
  });
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">All</button>
        </li>
        {renderCategories}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
