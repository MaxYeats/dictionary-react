/** @format */

import logo from "./soccerfield1.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid" alt="logo" id="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This is an open-sourced page built by{" "}
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
