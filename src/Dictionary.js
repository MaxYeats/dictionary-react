/** @format */

import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
        <button className="btn btn-primary">Look it up</button>
      </form>

      <div>Pai dos Burros</div>
    </div>
  );
}
