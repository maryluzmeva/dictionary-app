import React from 'react';
import SearchBar from './SearchBar';

export default function Header () {
  return (
    <header>
      <h1>Dictionary</h1>
      <img src="./logo.png" alt="App logo" />
      <SearchBar />
    </header>
  );
}
