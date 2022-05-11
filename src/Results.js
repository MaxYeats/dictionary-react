/** @format */

import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          //return meaning.definitions[0].definition;
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="initial-question">
        What would you like to learn about today?
      </div>
    );
  }
}