import React from "react";

function NewFactForm({
  categories,
  text,
  setText,
  source,
  setSource,
  category,
  setCategory,
  facts,
  setFacts,
  setShowForm,
}) {
  const renderedCategories = categories.map((cat) => {
    return (
      <option value={cat.name} key={cat.id + cat.color}>
        {cat.name}
      </option>
    );
  });

  function isValidUrl(str) {
    let url;
    try {
      url = new URL(str);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  function handleSubmit(e) {
    // Prevent browser reload
    e.preventDefault();
    // 2. Check i data is valid
    if (
      text === "" ||
      !isValidUrl(source) ||
      category === "" ||
      text.length > 200
    ) {
      return;
    }
    // 3. Create new fact object
    const newFact = {
      id: Math.round(Math.random() * 1000000),
      text: text,
      source: source,
      category: category,
      votesInteresting: 0,
      votesMindblowing: 0,
      votesFalse: 0,
      createdIn: new Date().getFullYear(),
    };
    // 4 Add new fact to UI
    setFacts([newFact, ...facts]);
    // 5. Reset input fields
    setText("");
    setSource("");
    setCategory("");

    // 6. Close form
    setShowForm((curr) => !curr);
  }

  return (
    <form action="" className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - text.length}</span>
      <input
        type="text"
        placeholder="Trustworthy source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select
        name=""
        id="select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="choose" defaultValue>
          Choose category:
        </option>
        {renderedCategories}
      </select>
      <button type="submit" className="btn btn-large">
        Post
      </button>
    </form>
  );
}

export default NewFactForm;
