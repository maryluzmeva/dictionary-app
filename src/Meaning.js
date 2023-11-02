import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <strong>Definition: </strong>
        {props.meaning.definition}
        <br />
        <strong>Example: </strong>
        {props.meaning.example}
      </div>
    );
  }