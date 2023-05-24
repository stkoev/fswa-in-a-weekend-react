import "../src/styles.css";
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import { initialFacts } from "./data";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="./logo.png" alt="app logo" height="68px" width="68pxs" />
          <h1>Hello World!</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList facts={initialFacts} />
      </main>
    </>
  );
}

export default App;
