import React from "react";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (meanings, index) {
        return (
          <div key={index}>
            <p>
              {meanings.definition}
              <br />
              <em>{meanings.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}