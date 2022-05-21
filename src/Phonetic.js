/** @format */

import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic);

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controls
          className="audio-player"
          title="audio player"
        />
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
//https://www.npmjs.com/package/react-audio-player

//<div className="Phonetic">
//{props.phonetic.text}
//<a
//href={props.phonetic.audio}
// target="_blank"
//rel="noreferrer"
// className="phonetic-player"
//>
//🔉
// </a>
//</div>;
