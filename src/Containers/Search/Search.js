import React from 'react';
import style from './Search.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchButton from '../../Components/SearchButton/searchButton'

const Search = () => {
    return (
        <div className = {style.Search}>
            <SearchBar />
            <SearchButton />
        </div>
    )
}

export default Search;