import React from "react";
import "./Dictionary.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <em>{props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
        <Antonyms antonyms={props.meaning.antonyms} />
      </div>
    );
  } else {
    return null;
  }
}