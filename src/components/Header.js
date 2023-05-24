import React from "react";
function Header({ setShowForm, showForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="./logo.png" alt="app logo" height="68px" width="68pxs" />
        <h1>Hello World!</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((current) => !current)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}

export default Header;
