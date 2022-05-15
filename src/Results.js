/** @format */

import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import motherbaby from "./motherbaby.png";

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
      <div className="motherbaby">
        <section>
          <img src={motherbaby} className="img-fluid fairy-img " alt="" />
        </section>
      </div>
    );
  }
}
