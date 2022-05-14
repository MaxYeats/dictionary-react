/** @format */

import React from "react";
import Example from "./Example.js";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              Definition: {definition.definition}
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
