/** @format */

import capy from "./Capybara1.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={capy} className="img-fluid" alt="logo" id="capy-logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This is an open sourced page built by{" "}
          <a
            href="https://github.com/MaxYeats/dictionary-react"
            title="link to Melissa's Github project page"
            target="_blank"
            rel="noreferrer"
          >
            Melissa Tseng
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
