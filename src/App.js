/** @format */

import logo from "./soccerfield1.png";
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
          <img src={logo} className="img-fluid" alt="logo" id="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="curiosity" />
        </main>
        <footer className="App-footer">
          This is an open-sourced project built by{" "}
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
