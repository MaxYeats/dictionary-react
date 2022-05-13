/** @format */

import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🔉
        </a>
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
//https://www.npmjs.com/package/react-audio-player
