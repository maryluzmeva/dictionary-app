import React from "react";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
       <main>
        <h1>Search for a word</h1>
        <Dictionary />
       </main>
       <footer className="App-footer">
        Coded by 👩🏽‍💻 
        <a href= "https://www.linkedin.com/in/maryluz-mendez-vargas-bbb23824/" target="_blank" rel="noreferrer">Maryluz Mendez Vargas</a> 
        {" "} and is Open-Sourced on {" "}
        <a href="https://github.com/maryluzmeva/dictionary-app" target="_blank" rel="noreferrer">GitHub</a>
       </footer>
      </div>
    </div>
  );  
}


