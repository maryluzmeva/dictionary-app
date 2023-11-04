import React from "react";

export default function Synonyms (props){
    if (props.antonyms) {
        return (
            <ul className="Antonyms">
                {props.antonyms.map (function (antonyms,index)
                {return <li key={index}>{antonyms}</li>
                })}
            </ul>
            );
    }else{
        return null;
    }
}