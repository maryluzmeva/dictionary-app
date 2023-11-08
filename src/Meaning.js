import React from "react";
import "./Synonyms";
import "./Dictionary.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <strong>Definition: </strong>
        {props.meaning.definition}
        <br />
        <strong>Example: </strong>
        {props.meaning.example}
        <br />
        <section>
        <strong>Synonyms</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
        </section>
        <section>
        <strong>Antonyms</strong>
        <Antonyms antonyms={props.meaning.antonyms} />
        </section>
      </div>
    );
  }