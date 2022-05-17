/** @format */

import logo from "./motherbaby.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.css";

//import background from "./soccerfield5.png";
// <div className="App" style={{ backgroundImage: `url(${background})` }}></div>

//OR in CSS
//.App {
//background-image: url(soccerfield5.png);
//background-repeat: repeat;
//background-size: cover;
//background-color: rgba(255, 255, 255, 0.3);
//}

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>Dictionary</h2>
          <img src={logo} className="img-fluid" alt="logo" id="logo" />
          <div className="initial-question">
            <em>
              "I think, at a child's birth, if a mother could ask a fairy
              godmother to endow it with the most useful gift, that gift should
              be curiosity."
            </em>{" "}
            - Eleanor Roosevelt
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="curious" />
        </main>
        <footer className="App-footer">
          This is an open-sourced project built by{" "}
          <a
            href="https://github.com/MaxYeats/dictionary-react"
            title="link to Melissa's Github project page"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Melissa Tseng
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
