/** @format */

import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);

    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt=""
                    className="img-fluid Pexels-pic"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

//.Photos {
// background-color: azure;
// border-radius: 12px;
// margin: 10px 20px;
// box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.4);
// padding: 20px;
//}

//.Pexels-pic {
// width: 320px;
// height: 300px;
//margin: 0 auto;
// padding: 10px 5px;
// border-radius: 5%;
// display: block;
//}

//@media (max-width: 415px) {
// .Pexels-pic {
//   max-width: 250px;
//  max-height: 200px;
// }
//}
