import React from "react";
import Meaning from "./Meaning";
import "./Dictionary.css";

export default function Results(props) {
    if (props.results) {
      return (
        <div className="Results">
          <section className="Definition">
            <h2 className="text-center">{props.results.word}</h2>
            <h4 className="text-center"> /{props.results.phonetic}/</h4>
          </section>
            {props.results.meanings.map(function (meaning, index) {
              return (
                <section key={index}>
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