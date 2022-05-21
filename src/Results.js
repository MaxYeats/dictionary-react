/** @format */

import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import motherbaby from "./motherbaby2.png";

export default function Results(props) {
  if (props.results && props.results.word !== "curious") {
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
  } else if (props.results && props.results.word === "curious") {
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
        <div className="motherbaby">
          <img
            src={motherbaby}
            className="img-fluid fairy-img "
            alt=""
            title="drawing of mother with baby and fairy godmother"
          />
          <div className="eleanor-quote">
            <em>
              "I think, at a child's birth, if a mother could ask a fairy
              godmother to endow it with the most useful gift, that gift should
              be curiosity."
            </em>{" "}
            - Eleanor Roosevelt
          </div>
        </div>
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
    return null;
  }
}
