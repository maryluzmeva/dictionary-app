import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import SearchBar from "./SearchBar";
import "./Dictionary.css";


export default function Dictionary () {
    let [keyword, setKeyword]= useState ("");
    let [results, setResults]= useState (null);

    function handleResponse (response){
			setResults (response.data);
    }
    function search (event) {
        event.preventDefault ();

        //documentation: https://www.shecodes.io/learn/apis/dictionary
        const apiKey= "c71f439f65td859373faeeba102o0222";
        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get (apiUrl).then (handleResponse);
    }
    
    function handleKeywordChange (event){
        setKeyword (event.target.value);
    }

    return (
        <div className="Dictionary">
            <SearchBar />
            <div className="Search">
                <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}
                autoFocus={true}
                placeholder="Search for a word" 
                />
                </form>
           </div>
            <Results results={results} />
        </div>
    );
}
