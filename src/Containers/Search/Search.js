import React, { useState, useEffect } from 'react';
import style from './Search.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchButton from '../../Components/SearchButton/searchButton'
import githubAPI from '../../API/github';
// import SearchResults from '../SearchResults/SearchResults';
// import UserCard from '../../Components/Cards/UserCard/UserCard';
// import Error from '../../Components/Error/Error';
// import UserInfo from '../UserInfo/UserInfo';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Search = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const userInputHandler = (e) => {
        setSearchValue(e.target.value)
    }

    const userInputResetHandler = () => {
        setSearchValue('')
    }

    const userSearchHandler = (e) => {
        e.preventDefault();
        props.search(searchValue)
        userInputResetHandler();
    }

    return (
        <form className = {style.Search}>
            <SearchBar 
            changed = {userInputHandler}
            value = {searchValue}/>
            <SearchButton clicked = {userSearchHandler}/>
        </form>
    )

    }
export default Search;