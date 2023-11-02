import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (meanings, index) {
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