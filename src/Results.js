/** @format */

import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          //return meaning.definitions[0].definition;
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="initial-question">
        <section>
          <em>
            "I think, at a child's birth, if a mother could ask a fairy
            godmother to endow it with the most useful gift, that gift should be
            curiosity."
          </em>{" "}
          - Eleanor Roosevelt
        </section>
      </div>
    );
  }
}
