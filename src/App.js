import React from 'react';
// import logo from './logo.svg';
// import SearchBar from './Components/SearchBar/SearchBar'; 
// import SearchButton from './Components/SearchButton/searchButton';
import Search from './Containers/Search/Search';
import SearchResults from './Containers/SearchResults/SearchResults'
import ComponentRenderTest from './componentRenderTest'
import './App.css';

function App() {
  return (
    <div className="App">
      <Search/>
      <SearchResults/>
      <ComponentRenderTest/>
    </div> 
  );
}

export default App;