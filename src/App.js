import "../src/styles.css";

function App() {
  return (
    <header classNameName="header">
      <div className="logo">
        <img src="./logo.png" alt="app logo" height="68px" width="68pxs" />
        <h1>Hello World!</h1>
      </div>
      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
}

export default App;
