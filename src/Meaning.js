import React from "react";
import "./Synonyms";
import "./Dictionary.css";
import Synonyms from "./Synonyms";

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
        <strong>Synonyms</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
        <strong>Antonyms</strong>
        {props.meaning.antonyms}
      </div>
    );
  }