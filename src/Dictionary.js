import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary () {
    let [keyword, setKeyword]= useState ("");
    let [results, setResults]= useState (null);
    let [loaded,setLoaded]=useState (false);
    let [photos,setPhotos]=useState (null);

    function handleResponseDictionary (response){
			setResults (response.data);
    }

    function handleResponseImages (response){
      setPhotos (response.data.photos);
    }
    
    function search () {

        //documentation: https://www.shecodes.io/learn/apis/dictionary
        const apiKey= "c71f439f65td859373faeeba102o0222";
        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get (apiUrl).then (handleResponseDictionary);

        let imagesApiUrl= `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
        axios.get (imagesApiUrl).then (handleResponseImages);
    }
    
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
    function handleKeywordChange (event){
        setKeyword (event.target.value);
    }

    function load () {
      setLoaded (true);
      search ();
    }

    if (loaded) {
      return (
        <div className="Dictionary">
				  <h1>Search for a word</h1>
          <div className="Search">
          <form onSubmit={handleSubmit}>
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
        <Photos photos={photos} />
      </div>
    );
      }else{
        load ();
        return "Loading";
      }
    }

