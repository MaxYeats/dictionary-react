/** @format */

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  //the results here is an object so useState({}) but if an array it would be useState(null), there was an error though and we had to set it as null.

  function handleResponse(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    //console.log(response.data);
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="initial-question">
          <em>
            "I think, at a child's birth, if a mother could ask a fairy
            godmother to endow it with the most useful gift, that gift should be
            curiosity."
          </em>{" "}
          - Eleanor Roosevelt
        </div>
        <h2>Dictionary</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            className="input-search"
            //placeholder="Enter your word here"
            autoComplete="false"
            defaultValue={props.defaultKeyword}
          />
          <input className="button" type="submit" value="Learn about" />
        </form>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

//https://api.dictionaryapi.dev/api/v2/entries/en/hello
