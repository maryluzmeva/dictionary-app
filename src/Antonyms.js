import React from "react";
import "./Dictionary.css";


export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <strong>Antonyms:</strong>

        <ul>
          {props.antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}