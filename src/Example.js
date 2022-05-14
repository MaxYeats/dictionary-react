/** @format */

import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <div className="Example">
        <em> {props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
