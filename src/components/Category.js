import React from "react";

function Category({ category }) {
  return (
    <li className="category">
      <button
        className="btn btn-category"
        style={{ backgroundColor: category.color }}
      >
        {category.name}
      </button>
    </li>
  );
}

export default Category;
