import React from 'react';
// import logo from './logo.svg';
// import SearchBar from './Components/SearchBar/SearchBar'; 
// import SearchButton from './Components/SearchButton/searchButton';
import Search from './Containers/Search/Search';
import SearchResults from './Containers/SearchResults/SearchResults'
import ComponentRenderTest from './componentRenderTest'
import './App.css';

function App() {

  const testingSearch = () => {
    console.log('pretending to search')
  }

  return (
    <div className="App">
      <Search search = {testingSearch}/>
      {/* <SearchResults/> */}
      <ComponentRenderTest/>
    </div> 
  );
}

export default App;