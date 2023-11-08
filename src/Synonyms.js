import React from "react";
import "./Dictionary.css";

export default function Synonyms (props){
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
                {props.synonyms.map (function (synonyms,index)
                {return <li key={index}>{synonyms}</li>
                })}
            </ul>
            );
    }else{
        return null;
    }
}
