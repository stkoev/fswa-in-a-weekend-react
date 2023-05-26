import React from "react";

function Fact({ fact, categoryColor, handleVote, isUpdating }) {
  const isDisputed = fact.votesFalse > fact.interesting + fact.votesMindBlowing;
  return (
    <li className="fact">
      <p>
        {isDisputed && <span className="disputed">[🔴 DISPUTED 🔴]</span>}
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: categoryColor,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVote(fact, "interesting")}
          disabled={isUpdating}
        >
          👍 {fact.interesting}
        </button>
        <button
          onClick={() => handleVote(fact, "votesMindBlowing")}
          disabled={isUpdating}
        >
          🤯 {fact.votesMindBlowing}
        </button>
        <button
          onClick={() => handleVote(fact, "votesFalse")}
          disabled={isUpdating}
        >
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
}

export default Fact;
