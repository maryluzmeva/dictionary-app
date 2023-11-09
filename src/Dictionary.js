import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary () {
    let [keyword, setKeyword]= useState (" ");
    let [results, setResults]= useState (null);

    function handleResponseDictionary (response){
			setResults (response.data);
    }

    function handleResponseImages (response){

    }
    function search (event) {
        event.preventDefault ();

        //documentation: https://www.shecodes.io/learn/apis/dictionary
        const apiKey= "c71f439f65td859373faeeba102o0222";
        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get (apiUrl).then (handleResponseDictionary);

        const pexelsApiKey="73blnsRA4d8ecP3RnSW3Ey6nwaZ7IC4UoGjwAawII8WFoao4EcGs6RTe";
        let pexelsApiUrl= `https://api.pexels.com/v1/search/?page=2&per_page=1&query=${keyword}"`;
        let headers={"Authorization":`Bearer${pexelsApiKey}`};
        axios
          .get (pexelsApiUrl, 
            {headers:headers}).then (handleResponseImages);
    }
    
    function handleKeywordChange (event){
        setKeyword (event.target.value);
    }

    return (
      <div className="Dictionary">
				<h1>Search for a word</h1>
        <div className="Search">
          <form onSubmit={search}>
            <input 
							type="search" 
							onChange={handleKeywordChange}
              autoFocus={true}
							placeholder="Search 🔍"
              />
          </form>
					<div className="Hint">
						<strong>Suggested words</strong>: <em>love, happiness, sunrise, sunset ...</em>
					</div>
        </div>
        <Results results={results} />
      </div>
    );
}
