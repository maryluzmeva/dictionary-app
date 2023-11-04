import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.results) {
      return (
        <div className="Results">
          <div className="Definition">
            <h2 className="text-center">{props.results.word}</h2>
            <h4 className="text-center"> /{props.results.phonetic}/</h4>
          </div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div className="Meaning" key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }