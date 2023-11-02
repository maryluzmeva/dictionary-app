import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.results) {
      return (
        <div className="Results">
          <div className="Definition">
            <h2><strong>{props.results.word}</strong></h2>
            <h4>/{props.results.phonetic}/</h4>
          </div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section className="Meaning" key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }