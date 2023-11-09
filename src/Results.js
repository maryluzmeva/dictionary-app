import React from "react";
import Meaning from "./Meaning";
import "./Dictionary.css";

export default function Results({ results }) {
  if (results && results.meanings) {
    return (
      <div className="Results">
        <section className="Definition">
          <h2 className="text-center">{results.word}</h2>
          <h4 className="text-center"> /{results.phonetic}/</h4>
        </section>
        {results.meanings.map((meaning, index) => (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        ))}
      </div>
    );
  } else {
    return null;
  }
}