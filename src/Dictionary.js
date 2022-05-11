/** @format */

import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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

      <div>Pai dos Burros</div>
    </div>
  );
}

//https://api.dictionaryapi.dev/api/v2/entries/en/hello
