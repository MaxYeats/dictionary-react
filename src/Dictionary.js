/** @format */

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  //the results here is an object so useState({}) but if an array it would be useState(null), there was an error though and we had to set it as null.

  function handleResponse(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          className="input-search"
          placeholder="Enter your word here"
          autoComplete="false"
          autoFocus={true}
        />
        <button className="button">Look it up</button>
      </form>

      <Results results={results} />
    </div>
  );
}

//https://api.dictionaryapi.dev/api/v2/entries/en/hello
