/** @format */

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  //the results here is an object so useState({}) but if an array it would be useState(null), there was an error though and we had to set it as null.

  function handleDictionaryResponse(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    //console.log(response.data);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f917000010000014a934eddad45462c9fc03780e4905ec4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            className="input-search"
            placeholder="Enter your word here"
            autoComplete="false"
            //defaultValue={props.defaultKeyword}
          />
          <input
            className="button"
            type="submit"
            value="Learn about"
            title="search button"
          />
        </form>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

//https://api.dictionaryapi.dev/api/v2/entries/en/hello
